import { Forecast, ForecastOutput } from './types'

const mapForecast = (forecast: Forecast): ForecastOutput => {
  const now = new Date()

  const currentTimeseries = forecast.properties.timeseries.find(
    (timeseries) => {
      const time = new Date(timeseries.time)
      return (
        time.getDay() === now.getDay() && time.getHours() === now.getHours()
      )
    }
  )

  if (!currentTimeseries) {
    throw new Error('No current timeseries found')
  }

  const { instant, next_1_hours, next_6_hours, next_12_hours } =
    currentTimeseries.data

  return {
    temperature: instant.details.air_temperature,
    precipitation:
      next_1_hours?.details.precipitation_amount ??
      next_6_hours?.details.precipitation_amount ??
      next_12_hours?.details.precipitation_amount ??
      0,
    wind: instant.details.wind_speed,
    weatherSymbol:
      next_1_hours?.summary.symbol_code ??
      next_6_hours?.summary.symbol_code ??
      next_12_hours?.summary.symbol_code ??
      '',
    timeseries: [], // TODO: Add timeseries
  }
}

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
