import { Post } from "@/types/post";
import { users } from "@/data/users";
import Image from "next/image";
import { getUserByUsername } from "@/lib/data";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Bookmark, MessageSquareMore, Share2, ThumbsUp } from "lucide-react";
import { formatCount } from "@/lib/formatNumber";

const jakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
});

type Props = {
	post: Post;
};

export default function PostCard({ post }: Props) {
	const author = getUserByUsername(post.author);
	if (!author) return null;

	return (
		<article className={`${jakartaSans.className} w-full bg-white px-2 py-5`}>
			<div className="mb-3 flex items-center gap-3">
				<Image
					src={author.avatarUrl}
					alt={author.name}
					width={40}
					height={40}
					className="rounded-full"
				/>

				<div>
					<p className="text-sm text-[14px] font-bold">{author.name}</p>
					{author.role && (
						<p className="text-xs text-[14px] text-gray-500">{author.role}</p>
					)}
				</div>
			</div>
			<p className="mb-3 text-sm">{post.content}</p>

			{post.imageUrl && (
				<div className="relative mb-3 w-full overflow-hidden rounded-lg">
					<Image
						src={post.imageUrl}
						alt=""
						width={800}
						height={600}
						className="h-auto w-full object-contain"
					/>
				</div>
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

			<div className="flex gap-6 text-xs text-[16px] font-medium text-gray-500">
				<div className="flex items-center gap-2">
					<ThumbsUp className="h-5 w-5" />
					<span>{formatCount(post.stats.likes)}</span>
				</div>
				<div className="flex items-center gap-2">
					<MessageSquareMore className="h-5 w-5" />
					<span>{formatCount(post.stats.comments)}</span>
				</div>
				<div className="flex items-center gap-2">
					<Share2 className="h-5 w-5" />
					<span>{formatCount(post.stats.shares)}</span>
				</div>
				<Bookmark className="ml-auto h-5 w-5" />
			</div>
		</article>
	);
}
