'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'

interface UserProfileFormProps {
  role: 'SERVICE_PROVIDER' | 'SERVICE_TAKER'
}

const countryCodes = [
  { code: '+1', name: 'USA' },
  { code: '+91', name: 'India' },
  { code: '+44', name: 'UK' },
  { code: '+61', name: 'Australia' },
  { code: '+49', name: 'Germany' },
  { code: '+81', name: 'Japan' },
  { code: '+86', name: 'China' },
]

export default function UserProfileForm({ role }: UserProfileFormProps) {
  const { user } = useUser()
  const [formData, setFormData] = useState({
    name: user?.fullName || '',
    countryCode: '+91',
    phone: '',
    state: '',
    city: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const fullPhone = `${formData.countryCode}-${formData.phone}`

      const response = await fetch('/api/auth/complete-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clerkUserId: user?.id,
          email: user?.emailAddresses[0]?.emailAddress,
          role,
          name: formData.name,
          phone: fullPhone,
          state: formData.state,
          city: formData.city
        })
      })

      if (response.ok) {
        window.location.href = '/dashboard'
      } else {
        throw new Error('Failed to create profile')
      }
    } catch (error) {
      console.error('Profile creation error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-900 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Profile</h1>
          <p className="text-gray-600">Tell us a bit about yourself to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-gray-700 text-sm font-medium block">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone with country code */}
          <div className="space-y-2">
            <label className="text-gray-700 text-sm font-medium block">Phone Number</label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-gray-900"
              >
                {countryCodes.map(cc => (
                  <option key={cc.code} value={cc.code}>
                    {cc.name} ({cc.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                placeholder="9876543210"
              />
            </div>
          </div>

          {/* State & City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-gray-700 text-sm font-medium block">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-gray-900"
              >
                <option value="" className="text-gray-400">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-gray-700 text-sm font-medium block">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                placeholder="Enter your city"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-50"
          >
            {isLoading ? 'Creating Profile...' : 'Complete Setup'}
          </button>
        </form>

        <div className="mt-8 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 text-sm font-medium">Almost there!</p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {role === 'SERVICE_PROVIDER' 
                  ? 'After this, you can add your services and start earning money'
                  : 'You\'ll have access to thousands of verified service providers'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
