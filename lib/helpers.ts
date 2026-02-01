import { posts } from "@/data/posts";
import { getPostById, getPostsByUser } from "./data";

export function formatCount(value: number) {
	if (value < 1_000) return value.toString();
	if (value < 1_000_000) return `${(value / 1_000).toFixed(1)}K`;
	return `${(value / 1_000_000).toFixed(1)}M`;
}

export function getPrevNextPost(postId: string) {
	const current = getPostById(postId);
	if (!current) return { prev: null, next: null };

	const authorPosts = getPostsByUser(current.author).sort(
		(a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
	);

	const i = authorPosts.findIndex((p) => p.id == postId);
	if (i === -1) return { prev: null, next: null };

	const prev = i > 0 ? authorPosts[i - 1] : null;
	const next = i < authorPosts.length - 1 ? authorPosts[i + 1] : null;

	return { prev, next };
}
