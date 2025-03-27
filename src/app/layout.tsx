import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Code, Container, Flex, Link, Text, Theme } from '@radix-ui/themes'
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
          <Flex direction="column" height="100svh">
            <Header />
            <main>{children}</main>
            <footer>
              <Container px="6" py="4" size="3">
                <Flex justify="center">
                  <Text>
                    Enjoy the weather! Made by{' '}
                    <Code asChild>
                      <Link href="https://github.com/vamcs">@vamcs</Link>
                    </Code>
                  </Text>
                </Flex>
              </Container>
            </footer>
          </Flex>
        </Theme>
      </body>
    </html>
  )
}
