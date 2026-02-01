import { MessageCircle, UserPlus } from "lucide-react";
import Link from "next/link";

export default function ProfileActions() {
	return (
		<div className="ml-auto flex items-center gap-3">
			<Link
				href="/interaction-required"
				className="inline-flex items-center gap-2 rounded-full bg-green-700 px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90"
			>
				<UserPlus className="h-4 w-4" />
				<span>Follow</span>
			</Link>

			<Link
				href="/interaction-required"
				className="inline-flex items-center gap-2 rounded-full bg-green-700 px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90"
			>
				<MessageCircle className="h-4 w-4" />
				<span>Message</span>
			</Link>
		</div>
	);
}
