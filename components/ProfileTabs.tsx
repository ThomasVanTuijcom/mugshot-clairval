"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	username: string
}

export default function ProfileTabs({username} : Props) {
	const pathname = usePathname();

	const tabs = [
		{label: "Accueil", href: `/profile/${username}`},
		{label: "Photos", href: `/profile/${username}/pictures`},
	]
	return (
		<div className="mb-2 flex w-full px-2">
			{tabs.map((tab) => {
				const isActive = pathname === tab.href;

				return (
					<Link
						key={tab.href}
						href={tab.href}
						className={clsx(
							"flex w-1/3 justify-center border-b py-2 text-sm font-semibold",
							isActive
								? "border-(--primary) text-(--primary)"
								: "border-gray-200 text-(--tertiary)",
						)}
					>
						{tab.label}
					</Link>
				);
			})}
		</div>
	);
}
