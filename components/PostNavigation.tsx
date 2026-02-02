"use client";

import { Post } from "@/lib/types/post";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
	username: string;
	prev?: Post;
	next?: Post;
};

export default function PostNavigation({ prev, next, username }: Props) {
	const router = useRouter();
	return (
		<div className="flex items-center gap-3 px-4 py-3 text-gray-600">
			<button
				type="button"
				onClick={() => router.push(`/profile/${username}`)}
				className="inline-flex cursor-pointer items-center gap-2 text-sm text-gray-600 hover:underline"
				aria-label="Retour"
			>
				<X className="h-4 w-4 rounded-full border border-gray-400 p-0.5" />
			</button>

			{/* Navigation */}
			<div className="ml-auto flex items-center gap-3">
				{prev ? (
					<Link
						href={`/post/${prev.id}`}
						className="inline-flex items-center gap-1 text-sm hover:underline"
					>
						<ArrowLeft className="h-4 w-4" />
						<span className="hidden sm:inline">Précédent</span>
					</Link>
				) : (
					<span className="inline-flex items-center gap-1 text-sm text-gray-300">
						<ArrowLeft className="h-4 w-4" />
						<span className="hidden sm:inline">Précédent</span>
					</span>
				)}

				{next ? (
					<Link
						href={`/post/${next.id}`}
						className="inline-flex items-center gap-1 text-sm hover:underline"
					>
						<span className="hidden sm:inline">Suivant</span>
						<ArrowRight className="h-4 w-4" />
					</Link>
				) : (
					<span className="inline-flex items-center gap-1 text-sm text-gray-300">
						<span className="hidden sm:inline">Suivant</span>
						<ArrowRight className="h-4 w-4" />
					</span>
				)}
			</div>
		</div>
	);
}
