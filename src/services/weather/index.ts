import { mapForecast } from './helpers'
import { Forecast, ForecastOutput } from './types'

export const getForecast = async ({
  lat,
  lng,
}: {
  lat: number
  lng: number
}): Promise<ForecastOutput> => {
  try {
    const weather = await fetch(
      `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lng}`,
      {
        headers: {
          'User-Agent':
            'YetAnotherWeatherApp/1.0 github.com/vamcs/yet-another-weather-app',
        },
      }
    )

    const data: Forecast = await weather.json()

    return mapForecast(data)
  } catch (error) {
    console.error(error)
    throw error
  }
}
