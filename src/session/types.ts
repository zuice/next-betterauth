export interface Session<User> {
  user: User
  expires: string
}

export interface SessionOptions {
  strategy?: "jwt" | "database"
  maxAge?: number
  updateAge?: number
}
