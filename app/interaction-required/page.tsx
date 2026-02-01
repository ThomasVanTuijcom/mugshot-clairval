import BackButton from "@/components/BackButton";
import RecoveryActions from "@/components/RecoveryActions";
import UserSearch from "@/components/UserSearch";
import { UsersRound } from "lucide-react";

export default function InteractionRequiredPage() {
	return (
		<main
			className="mx-auto flex min-h-screen max-w-[760px] flex-col px-2 md:px-10"
		>
			<UserSearch className="mt-4 mb-10 hidden max-w-[742px] md:block" />
			<div className="flex w-full flex-1 flex-col items-center justify-center gap-5 px-2">
				<UsersRound className="text-gray-400" size={94} />
				<span className="text-center text-gray-400">
					Ce contenu n'est pas accessible en mode hors ligne
				</span>
				<RecoveryActions/>
			</div>
		</main>
	);
}
