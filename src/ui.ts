import type { SanitizedRepo } from "./types";
import { TECH_MAP } from "./constants";

interface TechInfo {
  icon: string; 
  color: string;
  name: string;
}

const _getContainer = (el: HTMLElement | string | null): HTMLElement | null => {
  if (typeof el === 'string') return document.getElementById(el);
  return el;
};

const _createFilterButton = (topic: string, obj: TechInfo | null = null): string => {
  if (!obj) { 
    return `
      <button class="ghp-filter-btn active" data-topic="all">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/>
          <rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
        </svg>
        <p>Todos</p>
      </button>
    `;
  }
  
  const iconUrl = `https://cdn.simpleicons.org/${obj.icon}/${obj.color}`;
  
  return `
    <button class="ghp-filter-btn" data-topic="${topic}" style="--tech-color: #${obj.color}">
      <img src="${iconUrl}" alt="${obj.name}" loading="lazy">
      <p>${obj.name}</p>
    </button>
  `;
};

const _createProjectCard = (p: SanitizedRepo, username: string): string => {
  const rawUrl = `https://raw.githubusercontent.com/${username}/${p.name}/main/preview.png`;
  const ogUrl = `https://opengraph.githubassets.com/${username}/${p.name}`;
  const finalFallback = `https://placehold.co/640x360?text=${encodeURIComponent(p.name)}`;

  const deployBtn = p.deployUrl ? `<a href="${p.deployUrl}" target="_blank" rel="noopener noreferrer">Acessar</a>` : '';
  const repoBtn = p.htmlUrl ? `<a href="${p.htmlUrl}" target="_blank" rel="noopener noreferrer">Github</a>` : '';

  return `
    <div class="ghp-project-card">
      <div class="ghp-img-container">
        <img 
          src="${rawUrl}" 
          alt="Preview do projeto ${p.name}" 
          class="ghp-card-img" 
          loading="lazy"
          onerror="if (this.src.includes('preview.png')) { this.src='${ogUrl}'; } else { this.onerror=null; this.src='${finalFallback}'; }"
        >
      </div>
      <div class="ghp-card-content">
        <div>
          <h3>${p.name}</h3>
          <p title="${p.description}">${p.description}</p>
        </div>
        <div class="ghp-card-links">
          ${repoBtn}
          ${deployBtn}
        </div>
      </div>
    </div>
  `;
};

export function renderSkeleton(containerElement: HTMLElement | string, count: number = 6): void {
  const container = _getContainer(containerElement);
  if (!container) return;

  container.className = 'ghp-projects-grid'; 
  container.innerHTML = Array(count).fill('<div class="ghp-project-card ghp-skeleton ghp-skeleton-card"></div>').join("");
}

export function renderFilters(projects: SanitizedRepo[], containerElement: HTMLElement | string): void {
  const container = _getContainer(containerElement);
  if (!container) return;

  const allTopics = projects.flatMap(p => p.topics || []);
  const uniqueTopics = [...new Set(allTopics)];

  const stacksHTML = uniqueTopics.reduce((acc, topic) => {
    const obj = (TECH_MAP as Record<string, TechInfo>)[topic];
    return obj ? acc + _createFilterButton(topic, obj) : acc;
  }, _createFilterButton('all'));

  container.innerHTML = `<div class="ghp-filters-content">${stacksHTML}</div>`;
}

export function renderProjects(
    projects: SanitizedRepo[], 
    containerElement: HTMLElement | string, 
    username: string = "",
    customTemplate?: (repo: SanitizedRepo) => string
  ): void {
  const container = _getContainer(containerElement);
  if (!container) return;

  container.className = 'ghp-projects-grid'; 
  container.style.minHeight = 'auto'; 

  if (projects.length === 0) {
    container.innerHTML = `<p class="ghp-empty-msg">Nenhum projeto encontrado.</p>`;
    return;
  }

  container.innerHTML = projects.map(p => customTemplate ? customTemplate(p) : _createProjectCard(p, username)).join("");
}

export function renderSearchBar(containerElement: HTMLElement | string): void {
  const container = _getContainer(containerElement);
  if (!container) return;

  container.innerHTML = `
    <div class="ghp-search-container">
      <svg class="ghp-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
      <input type="text" id="gh-port-search" class="ghp-search-input" placeholder="Buscar projeto..." autocomplete="off">
    </div>
  `;
}

export function setupFilters(
  filterContainerId: string, 
  allProjects: SanitizedRepo[], 
  projectContainerId: string, 
  username: string,
  customTemplate?: (repo: SanitizedRepo) => string
): void {
  const container = document.getElementById(filterContainerId);
  if (!container) return;

  container.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('.ghp-filter-btn') as HTMLButtonElement;
    if (!btn) return;

    const topic = btn.dataset.topic;
    const filtered = topic === 'all' ? allProjects : allProjects.filter(p => p.topics.includes(topic!));

    renderProjects(filtered, projectContainerId, username, customTemplate);
    
    container.querySelectorAll('.ghp-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
}

export function setupSearch(
    allProjects: SanitizedRepo[], 
    projectContainerId: string, 
    username: string,
    customTemplate?: (repo: SanitizedRepo) => string
  ): void {
  const input = document.getElementById('gh-port-search') as HTMLInputElement;
  if (!input) return;

  input.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const term = target.value.toLowerCase();
    const filtered = allProjects.filter(p => 
      p.name.toLowerCase().includes(term) || 
      (p.description || "").toLowerCase().includes(term) ||
      p.topics.some(t => t.toLowerCase().includes(term))
    );
    renderProjects(filtered, projectContainerId, username, customTemplate);
  });
}