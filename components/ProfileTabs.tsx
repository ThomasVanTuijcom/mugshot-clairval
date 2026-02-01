export default function ProfileTabs() {
	return (
		<div className="mb-10 flex w-full px-2">
			<div className="flex w-25 justify-center border-b border-(--primary) py-2">
				<h2 className="font-semibold text-(--tertiary)">Accueil</h2>
			</div>
			<div className="flex w-25 justify-center border-b border-(--primary) py-2">
				<h2 className="font-semibold text-(--tertiary)">A propos</h2>
			</div>
			<div className="flex w-25 justify-center border-b border-(--primary) py-2">
				<h2 className="font-semibold text-(--tertiary)">Photos</h2>
			</div>
			<div className="w-1/2 border-b border-gray-200 py-2" />
		</div>
	);
}
