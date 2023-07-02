import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ethan Hansen',
  description: 'Projects & Works by Ethan Hansen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='https://res.cloudinary.com/dggcsrnyf/image/upload/v1688338779/ethan-logo_g37rvn.png'/>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
