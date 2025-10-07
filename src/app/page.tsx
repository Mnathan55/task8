"use client";

import Link from "next/link";
import { Briefcase, FileText, ArrowRight, Sparkles, LogIn } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full flex justify-end p-6">
        <Link href="/auth/login">
          <button className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-full font-semibold shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 hover:scale-105">
            <LogIn className="w-5 h-5" />
            Login
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white text-sm font-medium">Welcome to Service Hub</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
          Find Local Service Providers
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Connect with trusted professionals for all your needs. From plumbers to pandits, we've got you covered.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Browse Services */}
          <Link href="/services">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-3">
                <Briefcase className="w-6 h-6" />
                <span>Browse Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </Link>

          {/* Register as Provider */}
          <Link href="/form">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold text-lg border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-3">
                <FileText className="w-6 h-6" />
                <span>Register as Provider</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto px-4">
        {/* Feature 1 */}
        <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Easy Discovery</h3>
          <p className="text-gray-400">Find the perfect service provider in your area with just a few clicks</p>
        </div>

        {/* Feature 2 */}
        <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Trusted Providers</h3>
          <p className="text-gray-400">All service providers are verified and rated by the community</p>
        </div>

        {/* Feature 3 */}
        <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Quick Booking</h3>
          <p className="text-gray-400">Book services instantly and get help when you need it most</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
            500+
          </div>
          <div className="text-gray-400 text-sm md:text-base">Service Providers</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            5
          </div>
          <div className="text-gray-400 text-sm md:text-base">Service Categories</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-2">
            1000+
          </div>
          <div className="text-gray-400 text-sm md:text-base">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
            4.8★
          </div>
          <div className="text-gray-400 text-sm md:text-base">Average Rating</div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Service Hub. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
