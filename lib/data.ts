import { users } from "@/data/users";
import { posts } from "@/data/posts";
import { comments } from "@/data/comment";
import { Post } from "@/lib/types/post";
import { CommentWithAuthor } from "@/lib/types/comment";
import { FeedItem } from "@/lib/types/feeditem";

export function getUsers() {
	return users;
}

export function getUserByUsername(username: string) {
	return users.find((u) => u.username == username);
}

export function getPosts() {
	return posts;
}

export function getPostById(postId: string) {
	return posts.find((p) => p.id == postId);
}

export function getPostsByUser(username: string) {
	return posts.filter((p) => p.author == username);
}

export function getUserGallery(username: string) {
	return posts
		.filter((p) => p.author === username && typeof p.imageUrl === "string")
		.map((p) => ({
			postId: p.id,
			imageUrl: p.imageUrl as string,
			createdAt: p.createdAt,
		}))
		.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}

export function getCommentsByPostId(postId: string) {
	return comments.filter((c) => c.postId == postId);
}

export function getCommentsByRepostId(repostId: string) {
	return comments.filter((c) => c.repostId === repostId);
}

export function getCommentsWithAuthorByPostId(postId: string): CommentWithAuthor[] {
	return getCommentsByPostId(postId)
		.map((comment) => {
			const author = getUserByUsername(comment.authorId);
			if (!author) return null;

			return {
				...comment,
				author: {
					username: author.username,
					name: author.name,
					avatarUrl: author.avatarUrl,
				},
			};
		})
		.filter((c): c is CommentWithAuthor => c !== null);
}

export function getCommentsWithAuthorByRepostId(repostId: string): CommentWithAuthor[] {
	return getCommentsByRepostId(repostId)
		.map((comment) => {
			const author = getUserByUsername(comment.authorId);
			if (!author) return null;

			return {
				...comment,
				author: {
					username: author.username,
					name: author.name,
					avatarUrl: author.avatarUrl,
				},
			};
		})
		.filter((c): c is CommentWithAuthor => c !== null);
}

export function getProfileFeed(username: string): FeedItem[] {
	const items: FeedItem[] = [];

	for (const post of posts) {
		// Original posts
		if (post.author === username) {
			items.push({ kind: "post", post });
		}

		// Reposts by this user
		if (post.reposts?.length) {
			for (const r of post.reposts) {
				if (r.userId === username) {
					items.push({ kind: "repost", post, repost: r });
				}
			}
		}
	}

	return items.sort((a, b) => {
		const dateA = a.kind === "repost" ? a.repost.createdAt : a.post.createdAt;
		const dateB = b.kind === "repost" ? b.repost.createdAt : b.post.createdAt;
		return Date.parse(dateB) - Date.parse(dateA);
	});
}
