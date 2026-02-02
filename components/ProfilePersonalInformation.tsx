import { User } from "@/lib/types/user";
import { Briefcase, Building2, MapPin } from "lucide-react";

type Props = {
	user: User;
};

export default function ProfilePersonalInformation({ user }: Props) {
	return (
		<div className="flex flex-col items-start p-4">
			<h4 className="mb-2 text-lg font-bold">Informations personnelles</h4>

			<div className="flex flex-col gap-2 text-sm">
				{user.city && (
					<div className="flex items-center gap-3">
						<MapPin className="h-4 w-4" />
						<span>{user.city}</span>
					</div>
				)}

				{user.jobTitle && (
					<div className="flex items-center gap-3">
						<Briefcase className="h-4 w-4" />
						<span>{user.jobTitle}</span>
					</div>
				)}

				{user.company && (
					<div className="flex items-center gap-3">
						<Building2 className="h-4 w-4" />
						<span>{user.company}</span>
					</div>
				)}
			</div>
		</div>
	);
}
