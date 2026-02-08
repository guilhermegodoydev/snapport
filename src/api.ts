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

const _sanitizeRepo = (item: GithubRepo): SanitizedRepo => ({
  id: item.id,
  name: item.name ?? "Projeto sem nome", 
  description: item.description ?? "Sem descrição disponível",
  htmlUrl: item.html_url,
  topics: Array.isArray(item.topics) ? item.topics : [],
  deployUrl: item.homepage ?? null,
});

function clearOldCaches(currentUsername:string): void {
  try {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('gh_projects_') && !key.includes(currentUsername)) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.warn("Erro ao limpar caches antigos:", e);
  }
}

export async function getPortProjects(username: string, tag: string = 'port'): Promise<SanitizedRepo[]> {
  if (!username) {
    console.error("GitHubPortfolio: Username é obrigatório.");
    return [];
  }

  const CACHE_KEY = `gh_projects_${username}`;

  try {
    clearOldCaches(username);

    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached) as CacheData;
      if (Date.now() - timestamp < TWO_HOURS) {
        return data;
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

    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

    return projects;
  } catch (error) {
    console.error(`GitHubPortfolio: Erro ao buscar dados de ${username}:`, error);
    
    const expiredCache = localStorage.getItem(CACHE_KEY);
    if (expiredCache) {
      console.warn("GitHubPortfolio: Usando cache expirado devido a erro de rede.");
      return (JSON.parse(expiredCache) as CacheData).data;
    }
    
    return [];
  }
}