export type Place = {
  place_id: number
  licence: string
  osm_type: string
  osm_id: number
  boundingbox: [string, string, string, string]
  lat: string
  lon: string
  display_name: string
  category: string
  type: string
  importance: number
  icon: string
  place_rank: number
  address: {
    city: string
    state_district: string
    state: string
    'ISO3166-2-lvl4': string
    postcode: string
    country: string
    country_code: string
  }
  extratags?: Record<string, string>
}
