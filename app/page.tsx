import Image from "next/image";
import { posts } from "@/data/posts";
import PostCard from "@/components/PostCard";
import UserSearch from "@/components/UserSearch";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main className="mx-auto flex max-w-[760px] flex-col items-center px-2 md:px-10">
			<UserSearch className="mt-4 mb-10 hidden max-w-[742px] md:block" />
			<div className="mb-10 hidden w-full px-2 md:flex">
				<div className="flex w-1/2 justify-center border-b border-(--primary) py-2">
					<h2
						className={`${jakartaSans.className} font-semibold text-(--tertiary)`}
					>
						Accueil
					</h2>
				</div>
				<div className="w-1/2 border-b border-gray-200 py-2" />
			</div>
			<div className="w-full divide-y divide-gray-200">
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</main>
	);
}
