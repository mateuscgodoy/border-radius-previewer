import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Border Radius Previewer',
  description: 'An application that helps composing CSS border radius with up to 8 values.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-neutral-200'>
        {children}
      </body>
    </html>
  )
}
