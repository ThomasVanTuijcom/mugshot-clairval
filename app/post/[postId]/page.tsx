import UserSearch from "@/components/UserSearch";
import {
	getCommentsByPostId,
	getCommentsWithAuthorByPostId,
	getPostById,
	getUserByUsername,
} from "@/lib/data";
import { formatCount, getPrevNextPost } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	ArrowLeft,
	ArrowRight,
	Bookmark,
	MessageSquareMore,
	Share2,
	ThumbsUp,
	X,
} from "lucide-react";
import PostNavigation from "@/components/PostNavigation";
import CommentSection from "@/components/CommentSection";

type Props = {
	params: Promise<{ postId: string }>;
};

export default async function PostPage({ params }: Props) {
	const { postId } = await params;

	const post = getPostById(postId);
	if (!post) notFound();

	const author = getUserByUsername(post.author);
	if (!author) notFound();

	const comments = getCommentsWithAuthorByPostId(postId);

	const { prev, next } = getPrevNextPost(postId);

	const createdAt = new Date(post.createdAt).toLocaleString("fr-BE", {
		dateStyle: "long",
		timeStyle: "short",
	});

	const avatarUrl = author.avatarUrl || "/avatars/unknown.png";

	return (
		<main className="flex flex-col items-center md:px-10">
			<UserSearch className="mt-4 mb-10 hidden max-w-[742px] md:block" />
			<section className="w-full max-w-[760px] overflow-hidden bg-white">
				<PostNavigation
					username={author.username}
					prev={prev ?? undefined}
					next={next ?? undefined}
				/>
				{post.imageUrl && (
					<div className="w-full bg-black/5">
						<Image
							src={post.imageUrl}
							alt=""
							width={760}
							height={500} // approximate, ratio preserved automatically
							className="h-auto w-full object-contain"
							sizes="(max-width: 768px) 100vw, 760px"
							priority
						/>
					</div>
				)}

				<div className="flex items-center gap-3 px-4 py-4">
					<Link href={`/profile/${author.username}`} className="shrink-0">
						<div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
							<Image
								src={avatarUrl || "/avatars/unknown.png"}
								alt={author.name}
								fill
								className="object-cover"
								sizes="44px"
							/>
						</div>
					</Link>

					<div className="min-w-0">
						<Link
							href={`/profile/${author.username}`}
							className="block truncate text-sm font-semibold hover:underline"
						>
							{author.name}
						</Link>
						<p className="truncate text-xs text-gray-500">{createdAt}</p>
					</div>
				</div>

				{/* Content */}
				<div className="px-4 pb-4">
					<p className="text-sm text-gray-800">{post.content}</p>

					{/* Hashtags */}
					{post.hashtag?.length ? (
						<div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm">
							{post.hashtag.map((tag, index) => (
								<span
									key={index}
									className="cursor-pointer text-blue-500 hover:underline"
								>
									#{tag}
								</span>
							))}
						</div>
					) : null}
				</div>

				{/* Stats */}
				<div className="flex items-center gap-6 px-4 py-4 text-sm text-gray-600">
					<span className="tabular-nums">
						<strong className="font-semibold">
							{formatCount(post.stats.likes)}
						</strong>{" "}
						j’aime
					</span>
					<span className="tabular-nums">
						<strong className="font-semibold">
							{formatCount(post.stats.comments)}
						</strong>{" "}
						commentaires
					</span>
					<span className="tabular-nums">
						<strong className="font-semibold">
							{formatCount(post.stats.shares)}
						</strong>{" "}
						partages
					</span>
				</div>

				<div className="border-y px-4 py-3 text-sm text-gray-500">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<Link
								href="/interaction-required"
								className="group inline-flex items-center gap-2 hover:text-gray-700"
							>
								<ThumbsUp className="h-5 w-5" />
								<span className="hidden group-hover:underline sm:inline">
									J’aime
								</span>
							</Link>

							<Link
								href="/interaction-required"
								className="group inline-flex items-center gap-2 hover:text-gray-700"
							>
								<MessageSquareMore className="h-5 w-5" />
								<span className="hidden group-hover:underline sm:inline">
									Commenter
								</span>
							</Link>

							<Link
								href="/interaction-required"
								className="group inline-flex items-center gap-2 hover:text-gray-700"
							>
								<Share2 className="h-5 w-5" />
								<span className="hidden group-hover:underline sm:inline">
									Partager
								</span>
							</Link>
						</div>
						<Link
							href="/interaction-required"
							className="inline-flex items-center hover:text-gray-700"
							aria-label="Enregistrer"
							title="Enregistrer"
						>
							<Bookmark className="h-5 w-5" />
						</Link>
					</div>
				</div>
				<div className="px-4">
					<CommentSection comments={comments} />
				</div>
			</section>
		</main>
	);
}
