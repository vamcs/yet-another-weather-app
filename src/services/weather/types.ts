type ForecastInstant = {
  air_pressure_at_sea_level: number
  air_temperature: number
  air_temperature_percentile_10: number
  air_temperature_percentile_90: number
  cloud_area_fraction: number
  cloud_area_fraction_high: number
  cloud_area_fraction_low: number
  cloud_area_fraction_medium: number
  dew_point_temperature: number
  fog_area_fraction?: number
  relative_humidity: number
  ultraviolet_index_clear_sky?: number
  wind_from_direction: number
  wind_speed: number
  wind_speed_percentile_10: number
  wind_speed_percentile_90: number
  wind_speed_of_gust?: number
}

type ForecastTimePeriod = Partial<{
  air_temperature_max: number
  air_temperature_min: number
  precipitation_amount: number
  precipitation_amount_max: number
  precipitation_amount_min: number
  probability_of_precipitation: number
  probability_of_thunder: number
  ultraviolet_index_clear_sky_max: number
}>

type ForecastSummary = {
  symbol_code: string
  symbol_confidence?: string
}

export type Forecast = {
  type: 'Feature'
  geometry: {
    type: 'Point'
    /** [longitude, latitude, altitude] */
    coordinates: [number, number, number]
  }
  properties: {
    meta: {
      updated_at: string
      units: Record<string, string>
    }
    timeseries: Array<{
      time: string
      data: {
        instant: {
          details: ForecastInstant
        }
        next_1_hours?: {
          details: Omit<
            ForecastTimePeriod,
            'air_temperature_max' | 'air_temperature_min'
          >
          summary: ForecastSummary
        }
        next_6_hours?: {
          details: ForecastTimePeriod
          summary: ForecastSummary
        }
        next_12_hours?: {
          details: ForecastTimePeriod
          summary: ForecastSummary
        }
      }
    }>
  }
}

export type ForecastOutput = {
  temperature: number
  precipitation: number
  wind: number
  weatherSymbol: string
  timeseries: Array<{
    timeFrom: string
    timeTo?: string
    weatherSymbol: string
    temperature: number
    precipitation: number
    wind: number
  }>
}
