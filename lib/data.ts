import { users } from "@/data/users";
import { posts } from "@/data/posts";

export function getUsers(){
    return users;
}

export function getUserByUsername(username: string){
    return users.find(u => u.username == username);
}

export function getPosts() {
  return posts;
}

export function getPostsByUser(username: string) {
  return posts.filter(p => p.author == username);
}