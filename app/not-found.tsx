import RecoveryActions from "@/components/RecoveryActions";
import UserSearch from "@/components/UserSearch";
import { SearchAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<main
			className="mx-auto flex min-h-screen max-w-[760px] flex-col px-2 md:px-10"
		>
			<UserSearch className="mt-4 mb-10 hidden max-w-[742px] md:block" />
			<div className="flex w-full flex-1 flex-col items-center justify-center gap-5 px-2">
				<SearchAlert className="text-gray-400" size={94} />
				<h1 className="text-3xl font-bold text-gray-400">Erreur 404</h1>
				<p className="mt-2 max-w-md text-sm text-center text-gray-500">
					Oups… cette page n'existe pas ou a été déplacée.
				</p>
				<RecoveryActions />
			</div>
		</main>
	);
}
