export interface Comment {
	id: string;
	postId?: string;
	repostId?: string;
	authorId: string;
	content: string;
	createdAt: string;
	stats: {
		likes: number;
	};
}

export type CommentWithAuthor = {
	id: string;
	postId: string;
	authorId: string;
	content: string;
	createdAt: string;
	stats: { likes: number };
	author: {
		username: string;
		name: string;
		avatarUrl: string;
	};
};
