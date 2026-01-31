import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
			<h1 className="text-3xl font-bold">404</h1>
			<p className="mt-2 max-w-md text-sm text-gray-500">
				Oups… cette page n'existe pas ou a été déplacée.
			</p>
			<div className="mt-6 flex gap-3">
				<Link
					href="/"
					className="rounded-full bg-(--primary) px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
				>
					Retour à l'accueil
				</Link>
			</div>
		</main>
	);
}
