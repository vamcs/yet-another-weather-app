'use client'

import dynamic from 'next/dynamic'
import { MapProps } from './types'

const Map = dynamic(() => import('./Map').then((mod) => mod.Map), {
  ssr: false,
})

export function DynamicMap(props: MapProps) {
  return <Map {...props} />
}
