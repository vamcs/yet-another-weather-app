import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import { Header } from '@/components/Header'
import '@radix-ui/themes/styles.css'
import './globals.css'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yet Another Weather App',
  description: 'Your one-stop shop for weather information',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Theme accentColor="sky" radius="large">
          <Header />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  )
}
