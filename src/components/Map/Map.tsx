'use client'

import { Box } from '@radix-ui/themes'
import { Icon } from 'leaflet'
import MarkerIcon2X from 'leaflet/dist/images/marker-icon-2x.png'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './Map.module.css'
import { MapProps } from './types'

// Workaround to correctly load marker images
Icon.Default.mergeOptions({
  iconRetinaUrl: MarkerIcon2X.src,
  iconUrl: MarkerIcon.src,
  shadowUrl: MarkerShadow.src,
})

export function Map({ lat, lng }: MapProps) {
  return (
    <Box height="300px">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[lat, lng]} />
      </MapContainer>
    </Box>
  )
}
