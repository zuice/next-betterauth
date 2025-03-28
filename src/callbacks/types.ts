import { JWT } from "@/jwt/types"
import { Session } from "@/session/types"
import { User } from "@/user/types"

export interface Callbacks {
  signIn?: (user: User, account: any, profile: any) => Promise<boolean>
  signUp?: (user: User, account: any, profile: any) => Promise<boolean>
  redirect?: (url: string, baseUrl: string) => Promise<string>
  session?: (session: Session<User>, user: User) => Promise<Session<User>>
  jwt?: (token: JWT, user: User, account: any) => Promise<JWT>
}
