import PostCard from "@/components/PostCard";
import { getCommentsByRepostId, getCommentsWithAuthorByRepostId, getUserByUsername } from "@/lib/data";
import type { FeedItem } from "@/lib/types/feeditem";
import { Repeat2, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "./CommentSection";

export default function FeedCard({ item }: { item: FeedItem }) {
	if (item.kind === "post") {
		return <PostCard post={item.post} />;
	}

	// repost
	const reposter = getUserByUsername(item.repost.userId);
    if (!reposter) return null;

    const comments = getCommentsWithAuthorByRepostId(item.repost.id);
    console.log(comments)

	return (
		<div className="w-full bg-white py-5">
			{/* Repost header */}
			<Link
				href={`/profile/${reposter.username}`}
				className="mb-3 flex items-center gap-3"
			>
				<div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
					<Image
						src={reposter.avatarUrl || "/avatars/unknown.png"}
						alt={reposter.name}
						fill
						className="object-cover"
						sizes="40px"
					/>
				</div>

				<div>
					<p className="text-sm text-[14px] font-bold hover:underline">
						{reposter.name}
					</p>
					{reposter.role && (
						<p className="text-xs text-[14px] text-gray-500">{reposter.role}</p>
					)}
				</div>
			</Link>

			{/* Optional quote message */}
			{item.repost.message ? (
				<p className="mb-3 text-sm">
					{item.repost.message}
				</p>
			) : null}

			{/* The original post card */}
            <div className="flex gap-3 text-gray-500">
                <Repeat2 />
                <strong>Post republié</strong>
            </div>
			<div className="rounded-lg border border-gray-200 p-2">
				<PostCard post={item.post} commentSection={false} />
			</div>
            <CommentSection comments={comments}/>
		</div>
	);
}
