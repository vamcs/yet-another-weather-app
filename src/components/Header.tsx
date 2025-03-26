'use client'

import { TabNav } from '@radix-ui/themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header>
      <TabNav.Root>
        <TabNav.Link asChild active={pathname === '/'}>
          <Link href="/">🌦️</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === '/my-locations'}>
          <Link href="/my-locations">My Locations</Link>
        </TabNav.Link>
      </TabNav.Root>
    </header>
  )
}
