export interface SiteConfig {
	name: string;
	url: string;
	description: string;
	author: string;
	language: string;
	comments: CommentConfig;
}

export interface CommentConfig {
	provider: "giscus";
	repo: string;
	repoId: string;
	category: string;
	categoryId: string;
	mapping: "pathname" | "url" | "title" | "og:title";
	strict: boolean;
	reactionsEnabled: boolean;
	inputPosition: "top" | "bottom";
	lang: string;
}

export const siteConfig: SiteConfig = {
	name: "JY先生和JX女士 爱的小窝",
	url: "https://lovexy.ggff.net",
	description: "记录 JY先生和JX女生爱的每一天。",
	author: "jy先生",
	language: "zh-CN",
	comments: {
		provider: "giscus",
		repo: "520ssd/cf-astro-blog",
		repoId: "R_kgDOSPwnGQ",
		category: "Announcements",
		categoryId: "DIC_kwDOSPwnGc4C8bhM",
		mapping: "pathname",
		strict: false,
		reactionsEnabled: true,
		inputPosition: "top",
		lang: "zh-CN",
	},
};

export interface PaginationParams {
	page: number;
	limit: number;
}

export interface PaginatedResponse<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}

export type PostStatus = "draft" | "published" | "scheduled";
