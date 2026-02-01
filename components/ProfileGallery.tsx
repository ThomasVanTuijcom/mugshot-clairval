import Image from "next/image";
import Link from "next/link";
import { getUserGallery } from "@/lib/data";
import type { User } from "@/types/user";

type Props = {
	user: User;
};

export default function ProfileGallery({ user }: Props) {
	const gallery = getUserGallery(user.username).slice(0, 9); // 👈 limit to 9

	if (gallery.length === 0) {
		return (
			<p className="mt-6 text-sm text-gray-500">Aucune photo pour le moment.</p>
		);
	}

	return (
		<section className="px-4 py-6">
			<h4 className="mb-2 text-lg font-bold">Photos</h4>

			<div className="grid grid-cols-3 gap-1">
				{gallery.map((item) => (
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
							sizes="33vw"
						/>
					</Link>
				))}
			</div>
		</section>
	);
}
