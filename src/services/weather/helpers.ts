import { Forecast, ForecastOutput } from './types'

export const getCurrentTimeseries = (
  forecast: Forecast
): Forecast['properties']['timeseries'][number] => {
  const now = new Date()

  const currentTimeseries = forecast.properties.timeseries.find(
    (timeseries) => {
      const time = new Date(timeseries.time)

      const isToday = now.getDate() === time.getDate()
      const hourDifference = Math.abs(now.getHours() - time.getHours())
      const differenceFactor = timeseries.data.next_1_hours
        ? 0 // The current hour will match an existing timeseries, so no difference needed.
        : timeseries.data.next_6_hours
          ? 6 // The current hour is within 6 hours of the timeseries
          : 12 // The current hour is within 12 hours of the timeseries

      return isToday && hourDifference <= differenceFactor
    }
  )

  if (!currentTimeseries) {
    throw new Error('No current timeseries found')
  }

  return currentTimeseries
}

export const mapForecast = (forecast: Forecast): ForecastOutput => {
  const currentTimeseries = getCurrentTimeseries(forecast)

  const { instant, next_1_hours, next_6_hours, next_12_hours } =
    currentTimeseries.data

  return {
    current: {
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
    },
    timeseries: [], // TODO: Add timeseries
  }
}
