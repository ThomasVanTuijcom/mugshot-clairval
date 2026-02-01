"use client";

import Image from "next/image";
import { X } from "lucide-react";

type Props = {
	src: string;
	alt?: string;
	onClose: () => void;
};

export default function ImageLightbox({ src, alt, onClose }: Props) {
	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
			onClick={onClose}
		>
			<button
				onClick={onClose}
				className="absolute top-4 cursor-pointer right-4 rounded-full bg-black/60 p-2 text-white"
				aria-label="Fermer"
			>
				<X className="h-5 w-5" />
			</button>

			<div
				className="relative max-h-[90vh] max-w-[90vw]"
				onClick={(e) => e.stopPropagation()}
			>
				<Image
					src={src}
					alt={alt ?? ""}
					width={1200}
					height={800}
					className="h-auto w-auto max-h-[90vh] rounded-lg object-contain"
					priority
				/>
			</div>
		</div>
	);
}
