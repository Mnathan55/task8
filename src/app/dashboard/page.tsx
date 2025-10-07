'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

interface UserData {
  id: string
  name: string
  email: string
  role: 'SERVICE_PROVIDER' | 'SERVICE_TAKER'
  phone?: string
  city?: string
  state?: string
}

export default function Dashboard() {
  const { user, isLoaded } = useUser()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoaded && user) {
      fetchUserData()
    }
  }, [isLoaded, user])

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user/profile')
      if (response.ok) {
        const data = await response.json()
        setUserData(data.user)
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Profile Not Found</h2>
          <p className="text-white/70">Please complete your profile setup.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, {userData.name}!
              </h1>
              <p className="text-white/70 text-lg">
                {userData.role === 'SERVICE_PROVIDER' 
                  ? 'Ready to manage your services?' 
                  : 'Find the perfect service for you'
                }
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
              {userData.role === 'SERVICE_PROVIDER' ? (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30">
              <h3 className="text-white font-semibold mb-2">Profile Status</h3>
              <p className="text-green-400 text-sm">✓ Complete</p>
              <p className="text-white/60 text-sm mt-1">{userData.city}, {userData.state}</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30">
              <h3 className="text-white font-semibold mb-2">Account Type</h3>
              <p className="text-purple-400 text-sm">
                {userData.role === 'SERVICE_PROVIDER' ? 'Service Provider' : 'Service Taker'}
              </p>
              <p className="text-white/60 text-sm mt-1">{userData.email}</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-400/30">
              <h3 className="text-white font-semibold mb-2">
                {userData.role === 'SERVICE_PROVIDER' ? 'Services' : 'Bookings'}
              </h3>
              <p className="text-green-400 text-sm">0 Active</p>
              <p className="text-white/60 text-sm mt-1">Get started below</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
            
            {userData.role === 'SERVICE_PROVIDER' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-blue-100">Add New Service</h3>
                      <p className="text-white/60 text-sm">Create your first service offering</p>
                    </div>
                  </div>
                </button>

                <button className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-purple-100">View Analytics</h3>
                      <p className="text-white/60 text-sm">Track your service performance</p>
                    </div>
                  </div>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-green-100">Browse Services</h3>
                      <p className="text-white/60 text-sm">Find the perfect service for you</p>
                    </div>
                  </div>
                </button>

                <button className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-orange-100">My Bookings</h3>
                      <p className="text-white/60 text-sm">Manage your service bookings</p>
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}