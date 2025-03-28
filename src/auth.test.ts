import { describe, it, expect } from "vitest"

import { auth } from "@/auth"

describe("Main auth function", () => {
  it("should get called", () => {
    auth()

    expect(true).toBe(true)
  })
})
