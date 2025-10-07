'use client'

interface RoleSelectionProps {
  onRoleSelect: (role: 'SERVICE_PROVIDER' | 'SERVICE_TAKER') => void
}

const RoleSelection = ({ onRoleSelect }: RoleSelectionProps) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mx-auto">
      <div className="text-center mb-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-900 rounded-xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Join Our Platform</h1>
        <p className="text-gray-600 text-lg">Choose how you&apos;d like to get started</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Service Provider */}
        <button
          onClick={() => onRoleSelect('SERVICE_PROVIDER')}
          className="group relative p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-xl transition-all duration-300 text-left"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-24 h-24 bg-gray-100 group-hover:bg-gray-900 rounded-2xl flex items-center justify-center transition-all duration-300">
              <svg className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Provider</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Showcase your skills, build your reputation, and earn money by offering your services
              </p>
            </div>
          </div>
        </button>

        {/* Service Taker */}
        <button
          onClick={() => onRoleSelect('SERVICE_TAKER')}
          className="group relative p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-xl transition-all duration-300 text-left"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-24 h-24 bg-gray-100 group-hover:bg-gray-900 rounded-2xl flex items-center justify-center transition-all duration-300">
              <svg className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Taker</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Find talented freelancers and agencies to get your projects done efficiently
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default RoleSelection;
