import ProfileActions from "@/components/ProfileActions";
import ProfileTabs from "@/components/ProfileTabs";
import UserSearch from "@/components/UserSearch";
import { getUserByUsername } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
	children: React.ReactNode;
	params: Promise<{ username: string }>;
};

export default async function ProfileLayout({ children, params }: Props) {
	const { username } = await params;
	const user = getUserByUsername(username);
	console.log(user);
	if (!user) notFound();

	const avatarUrl = user.avatarUrl || "/avatars/unknown.png";

	return (
		<main className="flex flex-col items-center md:px-10">
			<UserSearch className="mt-4 mb-10 hidden max-w-[742px] md:block" />
			<section className="w-full max-w-[760px] overflow-hidden bg-white">
				<div className="relative h-[150px] w-full border-b border-(--primary)">
					{user.backgroundUrl ? (
						<Image
							src={user.backgroundUrl}
							alt="Bannière"
							fill
							className="object-cover"
							sizes="100vw"
							priority
						/>
					) : (
						<div className="h-full w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300" />
					)}
				</div>

				<div className="relative px-4 pb-6">
					<div className="absolute -mt-14">
						<div className="relative aspect-square w-24 overflow-hidden rounded-full border border-(--primary) sm:w-26">
							<Image
								src={avatarUrl}
								alt={user.name}
								fill
								className="object-cover"
								sizes="96px"
							/>
						</div>
					</div>

					<div className="my-3 min-h-15">
						<div className="pl-26 sm:pl-30">
							<h1 className="text-[18px] font-bold sm:text-[20px]">
								{user.name}
							</h1>
							{user.bio && (
								<p className="text-[12px] text-green-700 italic sm:text-[14px]">
									{user.bio}
								</p>
							)}
						</div>
					</div>

					<div className="mb-3">
						<p className="text-sm text-gray-600">
							<span className="font-semibold tabular-nums">
								{user.followers}
							</span>{" "}
							abonnés
							<span className="mx-1 text-gray-400">•</span>
							<span className="font-semibold tabular-nums">
								{user.following}
							</span>{" "}
							abonnements
						</p>
					</div>
					<ProfileActions />
				</div>
				<ProfileTabs username={user.username} />
				<div className="divide-y divide-gray-200">{children}</div>
			</section>
		</main>
	);
}
