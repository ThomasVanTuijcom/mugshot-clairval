import ProfileGallery from "@/components/ProfileGallery";
import { getUserByUsername } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ username: string }>;
};

export default async function ProfilePhotosPage({ params }: Props) {
	const { username } = await params;
	const user = getUserByUsername(username);
	if (!user) notFound();

	if (user.private) {
		return (
			<div className="flex flex-col items-center px-4 py-10 text-center text-sm text-gray-500">
				Ce profil est privé.
			</div>
		);
	}

	return <ProfileGallery user={user} cols={2} initialLimit={8} allowShowAll={true}/>;
}
