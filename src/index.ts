import './index.css';

export * from './types';
export { getPortProjects } from './api';
export { renderFilters, renderProjects, renderSearchBar } from './ui';

import type { PortfolioConfig } from './types';
import { getPortProjects as fetchProjects } from './api';
import { 
  renderFilters as uiFilters, 
  renderProjects as uiProjects, 
  renderSearchBar as uiSearch, 
  renderSkeleton, 
  setupFilters, 
  setupSearch 
} from './ui';

export interface PortfolioResponse {
    projects?: any[];
    status: 'success' | 'error';
    message?: string;
}

export async function initPortfolio(
  username: string, 
  config: PortfolioConfig = { 
    searchContainer: 'search-cont', 
    filtersContainer: 'filters-cont', 
    projectsContainer: 'projects-cont',
  }
): Promise<PortfolioResponse> {
  try {
    uiSearch(config.searchContainer);
    renderSkeleton(config.projectsContainer, 6);

    const projects = await fetchProjects(username);

    uiFilters(projects, config.filtersContainer);
    uiProjects(projects, config.projectsContainer, username, config.customCardTemplate);
    
    setupFilters(config.filtersContainer, projects, config.projectsContainer, username, config.customCardTemplate);
    setupSearch(projects, config.projectsContainer, username, config.customCardTemplate);

    return { projects, status: 'success' };
  } catch (error: any) {
    console.error("Erro ao inicializar portfólio:", error);

    const cont = document.getElementById(config.projectsContainer);
    if (cont) cont.innerHTML = '<p class="ghp-empty-msg">Erro ao carregar projetos.</p>';

    return { status: 'error', message: error.message };
  }
}