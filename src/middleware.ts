import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware((auth, req) => {
  if (
    auth().sessionClaims?.metadata.role !== 'admin' &&
    isProtectedRoute(req)
  ) {
    const homePage = new URL('/', req.url)
    return NextResponse.redirect(homePage)
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
