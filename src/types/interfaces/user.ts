export interface LooseObject {
  [key: string]: any
}

export interface GitHubUser {
  login: string
  id: number
  url: string
  html_url: string
  followers_url: string
  following_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: true
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
}


export interface User {
  login: string
  id: number
  url: string
  html_url: string
  followers_url: string
  following_url: string
  repos_url: string
  location: string
  email: string
  bio: string
  public_repos: number
  followers: number
  following: number
  name: string
  languages?: Array<string>
  created_at: Date
  updated_at: Date
}
