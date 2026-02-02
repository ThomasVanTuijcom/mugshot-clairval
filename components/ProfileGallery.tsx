"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getUserGallery } from "@/lib/data";
import type { User } from "@/types/user";

type Props = {
	user: User;
	cols?: 2 | 3 | 4;
	initialLimit?: number;
	allowShowAll?: boolean;
};

const COLS_CLASS: Record<2 | 3 | 4, string> = {
	2: "grid-cols-2",
	3: "grid-cols-3",
	4: "grid-cols-4",
};

export default function ProfileGallery({
	user,
	cols = 3,
	initialLimit,
	allowShowAll = false,
}: Props) {
	const all = useMemo(() => getUserGallery(user.username), [user.username]);
	const [showAll, setShowAll] = useState(false);

	if (all.length === 0) {
		return (
			<div className="px-4 py-6">
				<h4 className="text-lg mb-2 font-bold">Photos</h4>

				<p className="text-sm text-gray-500">
					Aucune photo pour le moment.
				</p>
			</div>
		);
	}

	const visible = showAll || !initialLimit ? all : all.slice(0, initialLimit);
	const remaining = initialLimit ? Math.max(0, all.length - initialLimit) : 0;

	return (
		<section className="px-4 py-6">
			<div className="mb-3 flex items-center justify-between">
				<h4 className="text-lg font-bold">Photos</h4>

				{/* optional link to dedicated photos tab */}
				<Link
					href={`/profile/${user.username}/pictures`}
					className="text-sm font-semibold text-(--primary) hover:underline"
				>
					Voir tout
				</Link>
			</div>

			<div className={`grid ${COLS_CLASS[cols]} gap-1`}>
				{visible.map((item) => (
					<Link
						key={item.postId}
						href={`/post/${item.postId}`}
						className="group relative aspect-square overflow-hidden bg-gray-100"
					>
						<Image
							src={item.imageUrl}
							alt=""
							fill
							className="object-cover transition-transform duration-200 group-hover:scale-105"
							sizes={cols === 2 ? "50vw" : cols === 3 ? "33vw" : "25vw"}
						/>
					</Link>
				))}
			</div>

			{allowShowAll && initialLimit && !showAll && remaining > 0 && (
				<div className="mt-4 flex justify-center">
					<button
						type="button"
						onClick={() => setShowAll(true)}
						className="rounded-full bg-(--primary) px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
					>
						Afficher toutes les photos ({remaining})
					</button>
				</div>
			)}
		</section>
	);
}
