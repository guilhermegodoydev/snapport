export interface SanitizedRepo {
    id: number;
    name: string;
    description: string | null;
    htmlUrl: string;
    topics: string[];
    deployUrl: string | null,
}

export interface PortfolioConfig {
    tag?: string;
    searchContainer: string;
    filtersContainer: string;
    projectsContainer: string;
    customCardTemplate?: (repo: SanitizedRepo) => string;
}

export interface TechInfo {
    icon: string;
    name: string;
    color: string;
}