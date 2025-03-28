import { Callbacks } from "@/callbacks/types"
import { SessionOptions } from "@/session/types"

export interface Options {
  callbacks?: Callbacks
  secret?: string
  session?: SessionOptions
}
