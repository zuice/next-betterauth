# next-betterauth

A better Next.js auth experience.

### Disclaimer

Should be obvious but this does NOT work. (yet 😀)

### Motivation

I feel like there are some painpoints in other Next.js auth libraries.

The fact that you have to hack in a global to replace the `Session` type is super annoying.

Another thing is you cannot reliably have some functionality happen on a user account creation, and there's really no way to distinguish a signin/signup. This is something I've always needed in the past, and had to hack the current library to get it to work.

### Design (SUBJECT TO CHANGE)

```typescript
// src/server/auth.ts

import { auth } from "next-auth"
import { cache } from "react"

const options = {}

const { handlers } = auth(options)

export { handlers }
```

```typescript
// src/app/api/auth[...nextbetterauth]/route.ts

import { handlers } from "@/server/auth"

export { handlers as GET, handlers as POST }
```
