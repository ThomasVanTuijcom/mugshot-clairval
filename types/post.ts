export interface Post {
	id: string;
	author: string;

	content: string;
	imageUrl?: string;

	createdAt: string;
  hashtag?: Array<String>;

	stats: {
		likes: number;
		comments: number;
		shares: number;
	};
}
