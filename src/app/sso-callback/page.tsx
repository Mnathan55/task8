'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SSOCallback() {
  const { isLoaded, user } = useUser()
  const router = useRouter()

  useEffect(() => {
    const handleCallback = async () => {
      if (!isLoaded) return

      if (user) {
        // Get stored role from sessionStorage
        const role = sessionStorage.getItem('pendingRole') as 'SERVICE_PROVIDER' | 'SERVICE_TAKER' | null

        if (role && !user.unsafeMetadata?.role) {
          // Update user metadata with role if not already set
          await user.update({
            unsafeMetadata: { role }
          })
        }

        // Clear from session
        sessionStorage.removeItem('pendingRole')

        // Redirect to profile setup
        router.push('/user/profile-setup')
      }
    }

    handleCallback()
  }, [isLoaded, user, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  )
}