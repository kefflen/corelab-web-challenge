import { cn } from '@/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corelab',
  description: 'Notes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-background')}>
        <Header className='mb-6'/>
        {children}
      </body>
    </html>
  )
}