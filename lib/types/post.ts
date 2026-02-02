import { Repost } from "./repost";

export interface Post {
	id: string;
	author: string;

	content: string;
	imageUrl?: string;

	createdAt: string;
	hashtag?: string[];
	reposts?: Repost[];

	stats: {
		likes: number;
		comments: number;
		shares: number;
	};
}
