'use client'

import dynamic from 'next/dynamic'
import { MapProps } from './types'
import { Skeleton } from '@radix-ui/themes'

const Map = dynamic(() => import('./Map').then((mod) => mod.Map), {
  ssr: false,
  loading: () => <Skeleton height="300px" width="100%" />,
})

export function DynamicMap(props: MapProps) {
  return <Map {...props} />
}
