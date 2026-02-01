import Link from "next/link";
import BackButton from "./BackButton";

export default function RecoveryActions() {
	return (
		<div className="flex w-full justify-center text-center gap-2">
			<Link
				href="/"
				className="cursor-pointer rounded-full bg-(--primary) px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
			>
				Retour à l'accueil
			</Link>
			<BackButton>Page précedente</BackButton>
		</div>
	);
}
