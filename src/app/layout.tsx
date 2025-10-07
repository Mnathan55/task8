import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import './globals.css'
import {dark} from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskConnect - Connect Services',
  description: 'Connect service providers with customers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark ,
        variables: {
          colorPrimary: '#8b5cf6',
          colorBackground: '#0f172a',
          colorInputBackground: 'rgba(255, 255, 255, 0.1)',
          colorInputText: '#ffffff',
        },
        elements: {
          formButtonPrimary: 
            'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
          card: 'backdrop-blur-xl bg-white/10 border border-white/20',
          headerTitle: 'text-white',
          headerSubtitle: 'text-white/70',
          socialButtonsBlockButton: 
            'bg-white/10 border border-white/20 text-white hover:bg-white/20',
          formFieldLabel: 'text-white/80',
          formFieldInput: 
            'bg-white/10 border border-white/20 text-white placeholder:text-white/50',
          footerActionLink: 'text-purple-400 hover:text-purple-300',
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}