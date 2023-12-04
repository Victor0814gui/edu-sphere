import { Contexts } from '@src/contexts'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="prefetch" href="https://fonts.googleapis.com" as="font" />
      <link rel="prefetch" href="https://fonts.gstatic.com" as="font" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700;800;900&family=Roboto:wght@300&display=swap" rel="stylesheet" as="font" />
      <title>EduSphere</title>
      <body className={inter.className}>
        <Contexts>
          {children}
        </Contexts>
      </body>
    </html>
  )
}
