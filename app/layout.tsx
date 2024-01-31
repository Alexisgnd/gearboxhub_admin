import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from '@/providers/modal-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'E-Commerce Dashboard',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={inter.className}>
        <ModalProvider /> 
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
