import { getCurrentTimeseries, mapForecast } from './helpers'
import { forecast } from './testFixtures'

describe('getCurrentTimeseries', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should return the current timeseries', () => {
    jest.setSystemTime(new Date('2025-03-27T11:00:00Z'))

    const currentTimeseries = getCurrentTimeseries(forecast)

    expect(currentTimeseries.time).toEqual('2025-03-27T11:00:00Z')
    expect(currentTimeseries.data.next_1_hours).toBeDefined()
  })

  it("should pick current hour's timeseries", () => {
    jest.setSystemTime(new Date('2025-03-27T15:54:00Z'))

    const currentTimeseries = getCurrentTimeseries(forecast)

    expect(currentTimeseries.time).toEqual('2025-03-27T15:00:00Z')
    expect(currentTimeseries.data.next_1_hours).toBeDefined()
  })

  it('should use next_6_hours if next_1_hours is not available', () => {
    jest.setSystemTime(new Date('2025-03-30T15:54:00Z'))

    const currentTimeseries = getCurrentTimeseries(forecast)

    expect(currentTimeseries.time).toEqual('2025-03-30T12:00:00Z')
    expect(currentTimeseries.data.next_1_hours).toBeUndefined()
    expect(currentTimeseries.data.next_6_hours).toBeDefined()
  })

  it('should throw an error if no timeseries is found', () => {
    jest.setSystemTime(new Date('2025-12-12T15:54:00Z'))

    expect(() => getCurrentTimeseries(forecast)).toThrow(
      'No current timeseries found'
    )
  })
})

describe('mapForecast', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should map the forecast', () => {
    jest.setSystemTime(new Date('2025-03-27T11:00:00Z'))

    const forecastOutput = mapForecast(forecast)

    expect(forecastOutput.current).toEqual({
      temperature: 8.8,
      precipitation: 0,
      wind: 4.7,
      weatherSymbol: 'cloudy',
    })

    expect(forecastOutput.timeseries).toMatchSnapshot()
  })
})
