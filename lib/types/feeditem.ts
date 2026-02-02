import { Post } from "./post";
import { Repost } from "./repost";

export type FeedItem =
	| { kind: "post"; post: Post }
	| {
			kind: "repost";
			post: Post;
			repost: Repost;
	  };
