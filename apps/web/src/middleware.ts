import { convexAuthNextjsMiddleware } from "@convex-dev/auth/nextjs/server";
import { NextResponse } from "next/server";

export default convexAuthNextjsMiddleware(async (request) => {
  const { pathname } = request.nextUrl;

  // Skip authentication for public routes
  if (["/sign-in"].includes(pathname)) {
    return NextResponse.next();
  }

  // Check for JWT token in cookies
  const token = request.cookies.get("__convexAuthJWT")?.value;

  // Redirect to login if no token is present for protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Token validation is handled by convexAuthNextjsMiddleware
  return NextResponse.next();
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
