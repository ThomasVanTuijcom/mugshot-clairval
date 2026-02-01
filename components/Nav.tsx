import Image from "next/image";
import UserSearch from "./UserSearch";
import { Poller_One } from "next/font/google";
import Link from "next/link";
import { Users } from "lucide-react";

const pollerOne = Poller_One({
	weight: "400",
	variable: "--font-poller-one",
	subsets: ["latin"],
});

export default function Nav() {
	return (
		<aside className="border-b border-(--primary) bg-white px-2 py-4 md:sticky md:top-0 md:h-screen md:bg-(--secondary) md:px-4">
			<div className="flex items-center justify-between md:justify-start">
				<Link href="/" className="mr-10 flex items-center gap-2">
					<Image
						src="/mugshot-logo.png"
						alt="Logo de Mugshot"
						width={28}
						height={28}
					/>
					<span
						className={`${pollerOne.className} text-[16px] font-bold text-(--primary)`}
					>
						MugShot
					</span>
				</Link>
				<UserSearch className="ml-auto md:hidden" />
				<button className="md:hidden" aria-label="Menu" type="button">
					<div className="flex flex-col gap-1 pl-3">
						<span className="h-0.5 w-6 bg-(--primary)" />
						<span className="h-0.5 w-6 bg-(--primary)" />
						<span className="h-0.5 w-6 bg-(--primary)" />
					</div>
				</button>
			</div>
			<div className="mt-6 hidden md:block">
				<div className="border-t border-(--primary)/30 pt-6">
					<div className="flex items-start gap-3">
						<Users className="mt-0.5 h-5 w-5 text-gray-500" />
						<div>
							<p className="text-sm font-semibold text-gray-800">Vos amis</p>
							<p className="mt-1 text-xs text-gray-500">
								Ce contenu n'est pas accessible en mode hors ligne.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-6 border-t border-(--primary)/30 pt-6"></div>
			</div>
		</aside>
	);
}
