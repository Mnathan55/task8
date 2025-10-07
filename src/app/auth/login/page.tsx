'use client'

import { useState } from 'react'
import RoleSelection from './components/RoleSelection';
import GoogleLogin from './components/GoogleLogin';

export default function AuthPage() {
  const [step, setStep] = useState<'role' | 'login' | 'profile'>('role')
  const [selectedRole, setSelectedRole] = useState<'SERVICE_PROVIDER' | 'SERVICE_TAKER' | null>(null)

  const handleRoleSelect = (role: 'SERVICE_PROVIDER' | 'SERVICE_TAKER') => {
    setSelectedRole(role)
    setStep('login')
  }

  const handleLoginSuccess = () => {
    setStep('profile')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Progress Indicator */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
          <div className={`flex items-center space-x-2 ${step === 'role' ? 'text-gray-900' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'role' ? 'bg-gray-900 text-white' : step === 'login' || step === 'profile' ? 'bg-gray-200 text-gray-600' : 'bg-gray-100 text-gray-400'}`}>
              {step === 'login' || step === 'profile' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-sm font-medium">1</span>
              )}
            </div>
            <span className="text-sm font-medium hidden sm:block">Choose Role</span>
          </div>
          
          <div className="w-12 h-0.5 bg-gray-200">
            <div className={`h-full transition-all duration-300 ${step === 'login' || step === 'profile' ? 'bg-gray-900 w-full' : 'bg-gray-900 w-0'}`}></div>
          </div>
          
          <div className={`flex items-center space-x-2 ${step === 'login' ? 'text-gray-900' : step === 'profile' ? 'text-gray-400' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'login' ? 'bg-gray-900 text-white' : step === 'profile' ? 'bg-gray-200 text-gray-600' : 'bg-gray-100 text-gray-400'}`}>
              {step === 'profile' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-sm font-medium">2</span>
              )}
            </div>
            <span className="text-sm font-medium hidden sm:block">Sign In</span>
          </div>
          
          <div className="w-12 h-0.5 bg-gray-200">
            <div className={`h-full transition-all duration-300 ${step === 'profile' ? 'bg-gray-900 w-full' : 'bg-gray-900 w-0'}`}></div>
          </div>
          
          <div className={`flex items-center space-x-2 ${step === 'profile' ? 'text-gray-900' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'profile' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400'}`}>
              <span className="text-sm font-medium">3</span>
            </div>
            <span className="text-sm font-medium hidden sm:block">Profile</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-20">
        {step === 'role' && (
          <RoleSelection onRoleSelect={handleRoleSelect} />
        )}
        
        {step === 'login' && selectedRole && (
          <GoogleLogin 
            role={selectedRole} 
            onLoginSuccess={handleLoginSuccess}
            onBack={() => setStep('role')}
          />
        )}
      </div>
    </div>
  )
}