"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { users } from "@/data/users";
import clsx from "clsx";

type Props = {
	className?: string;
};

export default function UserSearch({ className }: Props) {
	const [query, setQuery] = useState("");

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return [];

		return users
			.filter((u) => {
				return (
					u.name.toLowerCase().includes(q) ||
					u.username.toLowerCase().includes(q)
				);
			})
			.slice(0, 6);
	}, [query]);

	return (
		<div
			className={clsx(
				"relative w-full max-w-[250px] min-w-[156px] rounded-full bg-(--secondary)",
				className,
			)}
		>
			<Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-(--tertiary)" />

			<input
				type="text"
				placeholder="Rechercher"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="w-full rounded-full border border-[#cbd5e1] py-2 pr-4 pl-10 text-sm text-(--tertiary) placeholder:text-(--tertiary) placeholder:opacity-60 focus:ring-2 focus:ring-(--primary) focus:outline-none"
			/>

			{query.trim() && (
				<div className="absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-xl border bg-white shadow-md">
					{results.length > 0 ? (
						<ul className="max-h-64 overflow-auto">
							{results.map((u) => (
								<li key={u.username}>
									<Link
										href={`/profile/${u.username}`}
										className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50"
										onClick={() => setQuery("")}
									>
										<div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
											<Image
												src={u.avatarUrl || "/avatars/unknown.png"}
												alt={u.name}
												fill
												className="object-cover"
												sizes="28px"
											/>
										</div>
										<div className="min-w-0">
											<p className="truncate text-sm font-medium">{u.name}</p>
											<p className="truncate text-xs text-gray-500">
												@{u.username}
											</p>
										</div>
									</Link>
								</li>
							))}
						</ul>
					) : (
						<p className="px-3 py-2 text-sm text-gray-500">Aucun résultat</p>
					)}
				</div>
			)}
		</div>
	);
}
