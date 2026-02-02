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
				className="relative mb-3 w-full overflow-hidden rounded-lg bg-black"
				aria-label="Ouvrir l'image"
			>
				<Image
					src={src}
					alt=""
					width={760}
					height={760} // neutral ratio, overridden by real image
					className="mx-auto h-auto max-h-[500px] w-full object-contain"
					sizes="(max-width: 640px) 100vw, 760px"
				/>
			</button>

			{open && <ImageLightbox src={src} onClose={() => setOpen(false)} />}
		</>
	);
}
