'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import UserProfileForm from './components/UserProfileForm'

type UserRole = 'SERVICE_PROVIDER' | 'SERVICE_TAKER'

export default function ProfileSetupPage() {
  const { user, isLoaded } = useUser()
  const [role, setRole] = useState<UserRole | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRole = async () => {
      if (!isLoaded || !user) return

      try {
        const res = await fetch(`/api/user/${user.id}`)
        if (!res.ok) throw new Error('Failed to fetch user')

        const data = await res.json()
        setRole(data.role as UserRole)
      } catch (err) {
        console.error('Error fetching role:', err)
        // fallback if role is missing
        setRole('SERVICE_TAKER')
      } finally {
        setLoading(false)
      }
    }

    fetchRole()
  }, [isLoaded, user])

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No role found for this user</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Progress Indicator */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
          {/* Step 1: Role (completed) */}
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm font-medium hidden sm:block">Choose Role</span>
          </div>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-gray-900"></div>

          {/* Step 2: Login (completed) */}
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-sm font-medium hidden sm:block">Sign In</span>
          </div>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-gray-200"></div>

          {/* Step 3: Profile (active) */}
          <div className="flex items-center space-x-2 text-gray-900">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-900 text-white">
              <span className="text-sm font-medium">3</span>
            </div>
            <span className="text-sm font-medium hidden sm:block">Profile</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-20">
        <UserProfileForm role={role} />
      </div>
    </div>
  )
}
