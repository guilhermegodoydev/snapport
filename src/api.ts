import { TECH_MAP } from "./constants";
import type { SanitizedRepo } from "./types";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics?: string[];
  homepage: string | null;
}

interface CacheData {
  data: SanitizedRepo[];
  timestamp: number;
}

const TWO_HOURS = 2 * 60 * 60 * 1000;

const getStacks = (topics: string[] = []) => (
  topics.filter(topic =>
    !!TECH_MAP[topic?.toLowerCase().trim()]
  )
);

const _sanitizeRepo = (item: GithubRepo): SanitizedRepo => {
  const topics = Array.isArray(item.topics) ? item.topics : [];

  return {
    id: item.id,
    name: item.name ?? "Projeto sem nome", 
    description: item.description ?? "Sem descrição disponível",
    htmlUrl: item.html_url,
    topics,
    stacks: getStacks(topics),
    deployUrl: item.homepage ?? null,
  };
};

function clearOldCaches(currentUsername: string): void {
  try {
    Object.keys(localStorage).forEach(key => {
      if (
        key.startsWith("gh_projects_") &&
        key !== `gh_projects_${currentUsername}`
      ) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.warn("Erro ao limpar caches antigos:", e);
  }
}

export async function getPortProjects(
  username: string, 
  tag: string = 'port',
  options: { 
    forceRefresh?: boolean;
    cache?: boolean;
  } = {} 
): Promise<SanitizedRepo[]> {

  if (!username) {
    console.error("[Snapport]: Username é obrigatório.");
    return [];
  }

  const CACHE_KEY = `gh_projects_${username}`;
  const useCache = options.cache !== false;
  const forceRefresh = options.forceRefresh === true;
  const shouldUseCache = useCache && !forceRefresh;

  try {
    clearOldCaches(username);
    
    if (shouldUseCache) {
      const cached = localStorage.getItem(CACHE_KEY);
      
      if (cached) {
        try {
          const parsed: CacheData = JSON.parse(cached);

          if (
            parsed &&
            typeof parsed === "object" &&
            Array.isArray(parsed.data) &&
            typeof parsed.timestamp === "number"
          ) {
            if (Date.now() - parsed.timestamp < TWO_HOURS) {
              return parsed.data;
            }
          }
        } catch {
          localStorage.removeItem(CACHE_KEY);
        }
      }
    }

    const query = encodeURIComponent(`user:${username} topic:${tag}`);
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=updated&order=desc`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const res = await response.json();
    
    const projects = (res.items as GithubRepo[] || []).map(_sanitizeRepo);

    const cacheData: CacheData = {
      data: projects,
      timestamp: Date.now()
    };

    if (useCache) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    }

    return projects;
  } catch (error) {
    console.error(`[Snapport]: Erro ao buscar dados de ${username}:`, error);
    
    const expiredCache = localStorage.getItem(CACHE_KEY);
    if (expiredCache) {
      try {
        return (JSON.parse(expiredCache) as CacheData).data;
      } catch {
        localStorage.removeItem(CACHE_KEY);
      }
    }
    
    return [];
  }
}