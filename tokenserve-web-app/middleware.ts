// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({
//   publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, // Fetch the key from environment variables
//   secretKey: process.env.CLERK_SECRET_KEY,
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware } from "@clerk/nextjs";

export default clerkMiddleware({
  // Any options or custom logic you need can be placed here
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
