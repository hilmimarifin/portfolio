import { Providers } from './Provider'
import './globals.css'
import { Inter, Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const nunito = Nunito({
  variable: "--nunito-font",
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  display: 'swap',
  fallback: ['Helvetica', 'sans-serif'],
})

export const metadata = {
  title: 'Hilmi Muhamad Arifin',
  description: 'Projects page owned by hilmi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${nunito.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
