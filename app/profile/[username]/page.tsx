import PostCard from "@/components/PostCard";
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

	return (
		<main className="flex flex-col items-center md:px-10">
            <UserSearch className="mt-4 mb-10 hidden max-w-[742px] md:block" />
			<section className="max-w-[760px] overflow-hidden bg-white">
				<div className="relative h-[150px] w-full border-b border-(--primary)">
					<Image
						src={user.backgroundUrl}
						alt="Bannière"
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
				</div>

				<div className="relative border-b border-gray-200 px-4 pb-6">
					<div className="absolute -mt-14">
						<div className="relative aspect-square w-24 sm:w-26 overflow-hidden rounded-full border-1 border-(--primary)">
							<Image
								src={user.avatarUrl}
								alt={user.name}
								fill
								className="object-cover"
								sizes="96px"
							/>
						</div>
					</div>

					<div className="mt-3">
						<div className="pl-26 sm:pl-30">
							<h1 className="text-[18px] sm:text-[20px] font-bold">{user.name}</h1>
							{user.bio && (
								<p className="text-[12px] sm:text-[14px] text-green-700 italic">{user.bio}</p>
							)}
						</div>
					</div>

					<div className="mt-4 flex items-start gap-6">
						<div className="space-y-1 text-sm text-gray-600">
							{user.city && (
								<p>
									<span className="text-gray-500">Ville :</span> {user.city}
								</p>
							)}
							{user.jobTitle && (
								<p>
									<span className="text-gray-500">Profession :</span>{" "}
									{user.jobTitle}
								</p>
							)}
							{user.company && (
								<p>
									<span className="text-gray-500">Entreprise :</span>{" "}
									{user.company}
								</p>
							)}
						</div>

						<button className="ml-auto rounded-full bg-green-700 px-6 py-2 text-sm font-semibold text-white hover:opacity-90">
							Message
						</button>
					</div>
				</div>
				<div className="divide-y divide-gray-200 px-2">
					{userPosts.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</div>
			</section>
		</main>
	);
}
