import { Post } from "@/types/post";
import { users } from "@/data/users";
import Image from "next/image";
import { getCommentsWithAuthor, getUserByUsername } from "@/lib/data";
import { Bookmark, MessageSquareMore, Share2, ThumbsUp } from "lucide-react";
import { formatCount } from "@/lib/helpers";
import Link from "next/link";
import CommentSection from "./CommentSection";
import PostImage from "./PostImage";

type Props = {
	post: Post;
};

export default function PostCard({ post }: Props) {
	const author = getUserByUsername(post.author);
	if (!author) return null;

	const comments = getCommentsWithAuthor(post.id);

	return (
		<article className="w-full bg-white py-5">
			<Link
				href={`/profile/${author.username}`}
				className="mb-3 flex items-center gap-3"
			>
				<Image
					src={author.avatarUrl}
					alt={author.name}
					width={40}
					height={40}
					className="rounded-full"
				/>

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

			
			{post.imageUrl && (
				<PostImage src={post.imageUrl} />
			)}

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
			<CommentSection comments={comments}/>
		</article>
	);
}
