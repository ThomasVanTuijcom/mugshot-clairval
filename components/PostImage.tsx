"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

export default function PostImage({ src }: { src: string }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="relative cursor-pointer mb-3 w-full overflow-hidden rounded-lg"
			>
				<Image
					src={src}
					alt=""
					width={800}
					height={600}
					className="h-auto w-full object-contain"
				/>
			</button>

			{open && (
				<ImageLightbox
					src={src}
					onClose={() => setOpen(false)}
				/>
			)}
		</>
	);
}
