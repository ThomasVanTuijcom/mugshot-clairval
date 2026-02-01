"use client";

import { useRouter } from "next/navigation";

type Props = {
	children: React.ReactNode;
};

export default function BackButton({ children }: Props) {
	const router = useRouter();

	return (
		<button
			onClick={() => {
				router.back();
			}}
			className="cursor-pointer rounded-full bg-(--primary) px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
		>
			{children}
		</button>
	);
}
