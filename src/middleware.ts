import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/auth/login',
  '/api/webhooks/clerk',
  '/sso-callback',
])

const isProfileSetupRoute = createRouteMatcher(['/user/profile-setup'])

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId } = await auth()
  
  // Allow public routes
  if (isPublicRoute(req)) {
    return NextResponse.next()
  }
  
  // Redirect unauthenticated users to login
  if (!userId) {
    const signInUrl = new URL('/auth/login', req.url)
    return NextResponse.redirect(signInUrl)
  }

  // Redirect authenticated users away from auth pages to dashboard
  if (userId && req.nextUrl.pathname === '/auth/login') {
    const dashboardUrl = new URL('/dashboard', req.url)
    return NextResponse.redirect(dashboardUrl)
  }

  // Check if profile is complete (except on profile-setup page)
  if (userId && !isProfileSetupRoute(req) && req.nextUrl.pathname !== '/dashboard') {
    try {
      const response = await fetch(`${req.nextUrl.origin}/api/user/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const user = await response.json()
        
        // Redirect to profile setup if incomplete
        if (!user.profileSetup && req.nextUrl.pathname !== '/user/profile-setup') {
          const profileSetupUrl = new URL('/user/profile-setup', req.url)
          return NextResponse.redirect(profileSetupUrl)
        }
      }
    } catch (error) {
      console.error('Error checking profile status:', error)
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}