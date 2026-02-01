export interface User {
  username: string
  name: string
  avatarUrl: string
  backgroundUrl: string
  role?: string
  bio?: string
  city: string
  jobTitle?: string
  company?: string
  followers: number
  following: number
}