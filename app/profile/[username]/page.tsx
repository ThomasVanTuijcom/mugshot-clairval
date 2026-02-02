import PostCard from "@/components/PostCard";
import ProfileActions from "@/components/ProfileActions";
import ProfileGallery from "@/components/ProfileGallery";
import ProfilePersonalInformation from "@/components/ProfilePersonalInformation";
import ProfileTabs from "@/components/ProfileTabs";
import UserSearch from "@/components/UserSearch";
import { getPostsByUser, getUserByUsername } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ username: string }>;
};

export default async function ProfilePage({ params }: Props) {
	const { username } = await params;
	const user = getUserByUsername(username);
	if (!user) notFound();
	const userPosts = getPostsByUser(user.username);

	if (user.private) {
		return (
			<div className="flex flex-col items-center px-4 py-10 text-center text-sm text-gray-500">
				Ce profil est privé.
			</div>
		);
	}

	return (
		<div className="divide-y divide-gray-200">
			<ProfilePersonalInformation user={user} />
			<ProfileGallery user={user} initialLimit={9} />
			<div className="p-4">
				<h4 className="mb-2 text-lg font-bold">Publications</h4>

				{userPosts.length === 0 ? (
					<p className="text-sm text-gray-500">
						Aucune publication pour le moment.
					</p>
				) : (
					<div className="divide-y divide-gray-200">
						{userPosts.map((post) => (
							<PostCard key={post.id} post={post} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
