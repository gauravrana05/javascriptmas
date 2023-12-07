import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Javascriptmas',
  description: 'Welcome to the Jolly JavaScriptmas Challenge!🎄',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className='relative flex flex-col min-h-screen'>
          <Navbar />
          <div className="flex-1 flex-grow">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
