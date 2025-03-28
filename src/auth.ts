import { User } from "@/user/types"
import { Session } from "@/session/types"
import { Options } from "@/options/types"

export function auth<
  TUser extends User = User,
  TSession extends Session<TUser> = Session<TUser>,
>(options: Options = {}) {
  return {
    getSession: () => ({}),
    signIn: (provider: string, credentials?: any) => {},
    signOut: () => {},
    authMiddleware: () => {},
    useSession: () => ({}),
    isAuthenticated: () => false,
  }
}

export interface AuthProvider {
  id: string
  type: "oauth" | "credentials" | "email"
  // Provider-specific options
  [key: string]: any
}
