'use client'

import { SignInButton, useUser } from '@clerk/nextjs'
import { useEffect } from 'react'

interface GoogleLoginProps {
  role: 'SERVICE_PROVIDER' | 'SERVICE_TAKER'
  onLoginSuccess: () => void
  onBack: () => void
}

export default function GoogleLogin({ role, onLoginSuccess, onBack }: GoogleLoginProps) {
  const { isSignedIn, user } = useUser()

  useEffect(() => {
    if (isSignedIn && user) {
      // Store role in user metadata for webhook processing
      user.update({
        unsafeMetadata: { role }
      }).then(() => {
        onLoginSuccess()
      })
    }
  }, [isSignedIn, user, role, onLoginSuccess])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Login Section - Left on desktop */}
          <div className="flex flex-col justify-center p-8 lg:p-12 order-2 lg:order-1">
            <button
              onClick={onBack}
              className="mb-6 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors w-fit"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {role === 'SERVICE_PROVIDER' ? 'Join as a Freelancer' : 'Join as a Client'}
              </h1>
              <p className="text-gray-600 text-lg">
                {role === 'SERVICE_PROVIDER' 
                  ? 'Start offering your services and build your career' 
                  : 'Find the perfect freelancer for your project'
                }
              </p>
            </div>

            <div className="space-y-6">
              <SignInButton mode="modal" forceRedirectUrl="/user/profile-setup">
                <button className="w-full group relative bg-white border-2 border-gray-300 hover:border-gray-400 rounded-xl p-4 transition-all duration-200 hover:shadow-md">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium text-lg">Continue with Google</span>
                  </div>
                </button>
              </SignInButton>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Secure & fast authentication</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-gray-900 underline hover:no-underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-gray-900 underline hover:no-underline">Privacy Policy</a>
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 text-sm font-medium">Your data is secure</p>
                  <p className="text-gray-600 text-xs">We use enterprise-grade encryption to protect your information</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Right on desktop, hidden on mobile */}
          <div className="bg-gray-900 relative overflow-hidden order-1 lg:order-2 hidden lg:flex">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
            <div className="relative z-10 flex flex-col justify-center p-12 text-white">
              <div className="w-16 h-16 mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                {role === 'SERVICE_PROVIDER' ? (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
              
              <h2 className="text-2xl font-bold mb-4">
                {role === 'SERVICE_PROVIDER' ? 'Ready to earn?' : 'Ready to hire?'}
              </h2>
              
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                {role === 'SERVICE_PROVIDER' 
                  ? 'Join thousands of freelancers who are building successful careers on our platform.'
                  : 'Connect with talented professionals and get your projects completed efficiently.'
                }
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">
                    {role === 'SERVICE_PROVIDER' ? 'Set your own rates' : 'Browse verified profiles'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">
                    {role === 'SERVICE_PROVIDER' ? 'Work with global clients' : 'Secure payment system'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">
                    {role === 'SERVICE_PROVIDER' ? 'Build your reputation' : '24/7 customer support'}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}