import { Post } from "@/lib/types/post";
import { users } from "@/data/users";
import Image from "next/image";
import { getCommentsWithAuthorByPostId, getUserByUsername } from "@/lib/data";
import { Bookmark, MessageSquareMore, Share2, ThumbsUp } from "lucide-react";
import { formatCount } from "@/lib/helpers";
import Link from "next/link";
import CommentSection from "./CommentSection";
import PostImage from "./PostImage";

type Props = {
	post: Post;
	commentSection?: boolean
};

export default function PostCard({ post, commentSection = true }: Props) {
	const author = getUserByUsername(post.author);
	if (!author) return null;

	const comments = getCommentsWithAuthorByPostId(post.id);
	const avatarUrl = author.avatarUrl || "/avatars/unknown.png";

	return (
		<article className="w-full bg-white py-5">
			<Link
				href={`/profile/${author.username}`}
				className="mb-3 flex items-center gap-3"
			>
				<div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
					<Image
						src={avatarUrl || "/avatars/unknown.png"}
						alt={author.name}
						fill
						className="object-cover"
						sizes="40px"
					/>
				</div>

				<div>
					<p className="text-sm text-[14px] font-bold hover:underline">
						{author.name}
					</p>
					{author.role && (
						<p className="text-xs text-[14px] text-gray-500">{author.role}</p>
					)}
				</div>
			</Link>
			<p className="mb-3 text-sm">{post.content}</p>

			{post.imageUrl && <PostImage src={post.imageUrl} />}

			<div className="mb-3 flex flex-wrap gap-x-2 gap-y-1 text-sm">
				{post.hashtag?.map((hashtag, index) => (
					<span
						key={index}
						className="cursor-pointer text-blue-500 hover:underline"
					>
						#{hashtag}
					</span>
				))}
			</div>

			<div className="flex gap-6 text-[16px] font-medium text-gray-500">
				<div className="group flex cursor-pointer items-center gap-2">
					<ThumbsUp className="h-5 w-5" />
					<span className="group-hover:underline">
						{formatCount(post.stats.likes)}
					</span>
				</div>

				<div className="group flex cursor-pointer items-center gap-2">
					<MessageSquareMore className="h-5 w-5" />
					<span className="group-hover:underline">
						{formatCount(post.stats.comments)}
					</span>
				</div>

				<div className="group flex cursor-pointer items-center gap-2">
					<Share2 className="h-5 w-5" />
					<span className="group-hover:underline">
						{formatCount(post.stats.shares)}
					</span>
				</div>

				<div className="ml-auto cursor-pointer hover:underline">
					<Bookmark className="h-5 w-5" />
				</div>
			</div>
			{commentSection && (
				<CommentSection comments={comments} />
			)}
		</article>
	);
}
