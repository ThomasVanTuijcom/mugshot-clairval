import Image from "next/image";
import Link from "next/link";
import { ThumbsUp } from "lucide-react";

type CommentWithAuthor = {
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

type Props = {
	comments: CommentWithAuthor[];
};

export default function CommentSection({ comments }: Props) {
	return (
		<div className="py-6 px-4">
			<h3 className="mb-4 text-sm font-bold text-gray-700">Commentaires</h3>

			{comments.length === 0 ? (
				<p className="text-sm text-gray-500">
					Aucun commentaire pour le moment.
				</p>
			) : (
				<div className="flex flex-col gap-4">
					{comments.map((comment) => (
						<div key={comment.id} className="flex items-start gap-3">
							<Image
								src={comment.author.avatarUrl || "/avatars/unknown.png"}
								alt={comment.author.name}
								width={32}
								height={32}
								className="rounded-full"
							/>

							<div className="min-w-0">
								<div className="flex items-baseline gap-2">
									<p className="truncate text-sm font-semibold text-gray-800">
										{comment.author.name}
									</p>
									<p className="text-xs text-gray-400">
										{new Date(comment.createdAt).toLocaleString("fr-BE", {
											dateStyle: "short",
											timeStyle: "short",
										})}
									</p>
								</div>

								<p className="my-1 text-sm break-words text-gray-700">
									{comment.content}
								</p>

								<div className="flex gap-2 text-xs">
									<div className="flex items-center gap-1">
										<span className="text-xs tabular-nums">
											{comment.stats.likes}
										</span>
										<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-400">
											<ThumbsUp className="h-2.5 w-2.5 text-white" />
										</span>
									</div>

									<Link
										href="/interaction-required"
										className="font-semibold hover:underline"
									>
										J&apos;aime
									</Link>

									<Link
										href="/interaction-required"
										className="font-semibold hover:underline"
									>
										Répondre
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
