import { userAgent } from '../constants'
import { Place } from './types'

export const getSuggestedCoordinates = async (
  address: string
): Promise<Array<Place>> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${address}&format=jsonv2`,
      {
        headers: {
          'User-Agent': userAgent,
        },
      }
    )
    const data: Array<Place> = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
