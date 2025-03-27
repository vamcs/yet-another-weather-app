import { Forecast } from './types'

export const forecast: Forecast = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [18.0656, 59.3327, 23],
  },
  properties: {
    meta: {
      updated_at: '2025-03-27T10:27:10Z',
      units: {
        air_pressure_at_sea_level: 'hPa',
        air_temperature: 'celsius',
        air_temperature_max: 'celsius',
        air_temperature_min: 'celsius',
        air_temperature_percentile_10: 'celsius',
        air_temperature_percentile_90: 'celsius',
        cloud_area_fraction: '%',
        cloud_area_fraction_high: '%',
        cloud_area_fraction_low: '%',
        cloud_area_fraction_medium: '%',
        dew_point_temperature: 'celsius',
        fog_area_fraction: '%',
        precipitation_amount: 'mm',
        precipitation_amount_max: 'mm',
        precipitation_amount_min: 'mm',
        probability_of_precipitation: '%',
        probability_of_thunder: '%',
        relative_humidity: '%',
        ultraviolet_index_clear_sky: '1',
        wind_from_direction: 'degrees',
        wind_speed: 'm/s',
        wind_speed_of_gust: 'm/s',
        wind_speed_percentile_10: 'm/s',
        wind_speed_percentile_90: 'm/s',
      },
    },
    timeseries: [
      {
        time: '2025-03-27T11:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.7,
              air_temperature: 8.8,
              air_temperature_percentile_10: 7.7,
              air_temperature_percentile_90: 10.0,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 99.9,
              cloud_area_fraction_low: 88.9,
              cloud_area_fraction_medium: 41.2,
              dew_point_temperature: 3.9,
              fog_area_fraction: 0.0,
              relative_humidity: 72.0,
              ultraviolet_index_clear_sky: 2.3,
              wind_from_direction: 211.0,
              wind_speed: 4.7,
              wind_speed_of_gust: 10.0,
              wind_speed_percentile_10: 4.5,
              wind_speed_percentile_90: 5.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 9.0,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.5,
              air_temperature: 8.0,
              air_temperature_percentile_10: 6.8,
              air_temperature_percentile_90: 9.6,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 98.8,
              cloud_area_fraction_low: 99.9,
              cloud_area_fraction_medium: 79.2,
              dew_point_temperature: 4.1,
              fog_area_fraction: 0.0,
              relative_humidity: 76.7,
              ultraviolet_index_clear_sky: 2.1,
              wind_from_direction: 207.9,
              wind_speed: 4.8,
              wind_speed_of_gust: 9.7,
              wind_speed_percentile_10: 4.4,
              wind_speed_percentile_90: 5.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.3,
              probability_of_thunder: 0.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 9.0,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T13:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.2,
              air_temperature: 8.0,
              air_temperature_percentile_10: 6.6,
              air_temperature_percentile_90: 9.8,
              cloud_area_fraction: 99.9,
              cloud_area_fraction_high: 66.1,
              cloud_area_fraction_low: 99.7,
              cloud_area_fraction_medium: 41.9,
              dew_point_temperature: 4.5,
              fog_area_fraction: 0.0,
              relative_humidity: 79.0,
              ultraviolet_index_clear_sky: 1.6,
              wind_from_direction: 208.0,
              wind_speed: 4.4,
              wind_speed_of_gust: 9.3,
              wind_speed_percentile_10: 4.3,
              wind_speed_percentile_90: 5.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 9.0,
              air_temperature_min: 8.3,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T14:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.6,
              air_temperature: 8.4,
              air_temperature_percentile_10: 6.9,
              air_temperature_percentile_90: 10.2,
              cloud_area_fraction: 97.6,
              cloud_area_fraction_high: 21.8,
              cloud_area_fraction_low: 96.9,
              cloud_area_fraction_medium: 33.2,
              dew_point_temperature: 4.8,
              fog_area_fraction: 0.0,
              relative_humidity: 78.5,
              ultraviolet_index_clear_sky: 1.0,
              wind_from_direction: 210.5,
              wind_speed: 4.1,
              wind_speed_of_gust: 8.6,
              wind_speed_percentile_10: 4.1,
              wind_speed_percentile_90: 5.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 9.0,
              air_temperature_min: 8.1,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T15:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.2,
              air_temperature: 8.7,
              air_temperature_percentile_10: 7.1,
              air_temperature_percentile_90: 10.7,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 30.8,
              cloud_area_fraction_low: 99.9,
              cloud_area_fraction_medium: 62.0,
              dew_point_temperature: 5.0,
              fog_area_fraction: 0.0,
              relative_humidity: 77.6,
              ultraviolet_index_clear_sky: 0.5,
              wind_from_direction: 219.8,
              wind_speed: 4.0,
              wind_speed_of_gust: 8.1,
              wind_speed_percentile_10: 4.0,
              wind_speed_percentile_90: 5.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 9.0,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T16:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.9,
              air_temperature: 9.0,
              air_temperature_percentile_10: 7.3,
              air_temperature_percentile_90: 10.9,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 7.7,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 1.1,
              dew_point_temperature: 5.0,
              fog_area_fraction: 0.0,
              relative_humidity: 76.5,
              ultraviolet_index_clear_sky: 0.2,
              wind_from_direction: 236.7,
              wind_speed: 4.6,
              wind_speed_of_gust: 8.9,
              wind_speed_percentile_10: 4.2,
              wind_speed_percentile_90: 5.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.5,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T17:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.9,
              air_temperature: 8.5,
              air_temperature_percentile_10: 7.0,
              air_temperature_percentile_90: 10.2,
              cloud_area_fraction: 99.9,
              cloud_area_fraction_high: 6.3,
              cloud_area_fraction_low: 99.9,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 4.8,
              fog_area_fraction: 0.0,
              relative_humidity: 77.8,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 235.6,
              wind_speed: 4.9,
              wind_speed_of_gust: 9.2,
              wind_speed_percentile_10: 4.5,
              wind_speed_percentile_90: 5.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.4,
              air_temperature_min: 7.9,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.0,
              air_temperature: 8.4,
              air_temperature_percentile_10: 6.8,
              air_temperature_percentile_90: 10.0,
              cloud_area_fraction: 99.9,
              cloud_area_fraction_high: 62.2,
              cloud_area_fraction_low: 99.5,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 4.9,
              fog_area_fraction: 0.0,
              relative_humidity: 78.9,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 237.6,
              wind_speed: 4.3,
              wind_speed_of_gust: 8.9,
              wind_speed_percentile_10: 4.0,
              wind_speed_percentile_90: 5.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.3,
              air_temperature_min: 7.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T19:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.3,
              air_temperature: 8.3,
              air_temperature_percentile_10: 6.6,
              air_temperature_percentile_90: 10.1,
              cloud_area_fraction: 99.8,
              cloud_area_fraction_high: 77.1,
              cloud_area_fraction_low: 99.4,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.1,
              fog_area_fraction: 0.0,
              relative_humidity: 80.8,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 237.5,
              wind_speed: 4.2,
              wind_speed_of_gust: 7.8,
              wind_speed_percentile_10: 3.6,
              wind_speed_percentile_90: 4.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.1,
              air_temperature_min: 7.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T20:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.4,
              air_temperature: 8.1,
              air_temperature_percentile_10: 6.4,
              air_temperature_percentile_90: 9.8,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 95.5,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.2,
              fog_area_fraction: 0.0,
              relative_humidity: 82.4,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 239.4,
              wind_speed: 4.5,
              wind_speed_of_gust: 8.2,
              wind_speed_percentile_10: 3.8,
              wind_speed_percentile_90: 4.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.0,
              air_temperature_min: 7.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T21:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.1,
              air_temperature: 8.0,
              air_temperature_percentile_10: 6.3,
              air_temperature_percentile_90: 9.6,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 89.5,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.6,
              fog_area_fraction: 0.0,
              relative_humidity: 85.1,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 241.5,
              wind_speed: 4.7,
              wind_speed_of_gust: 8.6,
              wind_speed_percentile_10: 4.0,
              wind_speed_percentile_90: 4.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.0,
              air_temperature_min: 7.7,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T22:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.8,
              air_temperature: 8.0,
              air_temperature_percentile_10: 6.3,
              air_temperature_percentile_90: 9.7,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 81.0,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.9,
              fog_area_fraction: 0.0,
              relative_humidity: 86.9,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 245.2,
              wind_speed: 4.6,
              wind_speed_of_gust: 8.6,
              wind_speed_percentile_10: 4.1,
              wind_speed_percentile_90: 5.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 7.9,
              air_temperature_min: 7.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-27T23:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.6,
              air_temperature: 7.9,
              air_temperature_percentile_10: 6.2,
              air_temperature_percentile_90: 9.6,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 97.7,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.1,
              fog_area_fraction: 0.0,
              relative_humidity: 88.5,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 246.9,
              wind_speed: 4.5,
              wind_speed_of_gust: 8.4,
              wind_speed_percentile_10: 4.1,
              wind_speed_percentile_90: 5.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 7.8,
              air_temperature_min: 7.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.5,
              air_temperature: 7.8,
              air_temperature_percentile_10: 6.2,
              air_temperature_percentile_90: 9.4,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 99.8,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.2,
              fog_area_fraction: 0.0,
              relative_humidity: 89.4,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 252.3,
              wind_speed: 4.5,
              wind_speed_of_gust: 8.5,
              wind_speed_percentile_10: 3.9,
              wind_speed_percentile_90: 4.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.0,
              air_temperature_min: 7.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T01:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.5,
              air_temperature: 7.8,
              air_temperature_percentile_10: 6.2,
              air_temperature_percentile_90: 9.3,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 98.7,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.1,
              fog_area_fraction: 0.0,
              relative_humidity: 89.5,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 248.2,
              wind_speed: 4.3,
              wind_speed_of_gust: 8.2,
              wind_speed_percentile_10: 3.6,
              wind_speed_percentile_90: 4.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.2,
              air_temperature_min: 7.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T02:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.7,
              air_temperature: 7.8,
              air_temperature_percentile_10: 6.1,
              air_temperature_percentile_90: 9.5,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 96.8,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.3,
              fog_area_fraction: 0.0,
              relative_humidity: 90.5,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 242.5,
              wind_speed: 4.2,
              wind_speed_of_gust: 8.2,
              wind_speed_percentile_10: 3.9,
              wind_speed_percentile_90: 4.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.7,
              air_temperature_min: 7.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T03:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.4,
              air_temperature: 7.7,
              air_temperature_percentile_10: 5.9,
              air_temperature_percentile_90: 9.4,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 99.1,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.4,
              fog_area_fraction: 0.0,
              relative_humidity: 91.8,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 222.3,
              wind_speed: 4.2,
              wind_speed_of_gust: 7.7,
              wind_speed_percentile_10: 3.7,
              wind_speed_percentile_90: 4.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 9.6,
              air_temperature_min: 7.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T04:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.0,
              air_temperature: 7.5,
              air_temperature_percentile_10: 5.8,
              air_temperature_percentile_90: 9.1,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 98.2,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.6,
              fog_area_fraction: 0.0,
              relative_humidity: 94.3,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 210.3,
              wind_speed: 4.5,
              wind_speed_of_gust: 8.2,
              wind_speed_percentile_10: 4.0,
              wind_speed_percentile_90: 4.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 10.1,
              air_temperature_min: 7.7,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T05:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.9,
              air_temperature: 7.7,
              air_temperature_percentile_10: 6.1,
              air_temperature_percentile_90: 9.2,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 87.9,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 1.6,
              dew_point_temperature: 6.8,
              fog_area_fraction: 0.0,
              relative_humidity: 94.4,
              ultraviolet_index_clear_sky: 0.1,
              wind_from_direction: 205.8,
              wind_speed: 4.6,
              wind_speed_of_gust: 8.7,
              wind_speed_percentile_10: 4.3,
              wind_speed_percentile_90: 5.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 11.2,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.9,
              air_temperature: 8.0,
              air_temperature_percentile_10: 6.5,
              air_temperature_percentile_90: 9.4,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 51.6,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 10.0,
              dew_point_temperature: 6.9,
              fog_area_fraction: 0.0,
              relative_humidity: 93.3,
              ultraviolet_index_clear_sky: 0.3,
              wind_from_direction: 212.1,
              wind_speed: 5.0,
              wind_speed_of_gust: 9.5,
              wind_speed_percentile_10: 4.5,
              wind_speed_percentile_90: 5.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 12.5,
              air_temperature_min: 8.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T07:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.9,
              air_temperature: 8.2,
              air_temperature_percentile_10: 6.6,
              air_temperature_percentile_90: 9.7,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 47.2,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 7.1,
              dew_point_temperature: 6.9,
              fog_area_fraction: 0.0,
              relative_humidity: 91.4,
              ultraviolet_index_clear_sky: 0.8,
              wind_from_direction: 211.3,
              wind_speed: 5.3,
              wind_speed_of_gust: 10.1,
              wind_speed_percentile_10: 4.5,
              wind_speed_percentile_90: 5.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 13.4,
              air_temperature_min: 8.7,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T08:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.0,
              air_temperature: 8.7,
              air_temperature_percentile_10: 7.1,
              air_temperature_percentile_90: 10.3,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 26.3,
              cloud_area_fraction_low: 100.0,
              cloud_area_fraction_medium: 0.1,
              dew_point_temperature: 6.8,
              fog_area_fraction: 0.0,
              relative_humidity: 87.7,
              ultraviolet_index_clear_sky: 1.4,
              wind_from_direction: 218.9,
              wind_speed: 5.1,
              wind_speed_of_gust: 10.3,
              wind_speed_percentile_10: 4.5,
              wind_speed_percentile_90: 5.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 13.8,
              air_temperature_min: 9.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T09:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.0,
              air_temperature: 9.6,
              air_temperature_percentile_10: 7.8,
              air_temperature_percentile_90: 11.5,
              cloud_area_fraction: 99.8,
              cloud_area_fraction_high: 13.3,
              cloud_area_fraction_low: 99.7,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.8,
              fog_area_fraction: 0.0,
              relative_humidity: 82.7,
              ultraviolet_index_clear_sky: 2.0,
              wind_from_direction: 219.0,
              wind_speed: 4.6,
              wind_speed_of_gust: 9.8,
              wind_speed_percentile_10: 4.4,
              wind_speed_percentile_90: 5.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 13.8,
              air_temperature_min: 10.1,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T10:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.0,
              air_temperature: 10.1,
              air_temperature_percentile_10: 8.3,
              air_temperature_percentile_90: 12.0,
              cloud_area_fraction: 97.6,
              cloud_area_fraction_high: 44.6,
              cloud_area_fraction_low: 95.9,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.4,
              fog_area_fraction: 0.0,
              relative_humidity: 77.5,
              ultraviolet_index_clear_sky: 2.5,
              wind_from_direction: 216.1,
              wind_speed: 4.6,
              wind_speed_of_gust: 9.2,
              wind_speed_percentile_10: 4.6,
              wind_speed_percentile_90: 5.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 13.8,
              air_temperature_min: 11.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T11:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.1,
              air_temperature: 11.2,
              air_temperature_percentile_10: 9.0,
              air_temperature_percentile_90: 13.4,
              cloud_area_fraction: 92.1,
              cloud_area_fraction_high: 79.4,
              cloud_area_fraction_low: 69.2,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.7,
              fog_area_fraction: 0.0,
              relative_humidity: 73.8,
              ultraviolet_index_clear_sky: 2.6,
              wind_from_direction: 216.1,
              wind_speed: 4.5,
              wind_speed_of_gust: 9.2,
              wind_speed_percentile_10: 4.5,
              wind_speed_percentile_90: 5.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 13.8,
              air_temperature_min: 11.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.0,
              air_temperature: 12.5,
              air_temperature_percentile_10: 10.2,
              air_temperature_percentile_90: 14.9,
              cloud_area_fraction: 66.7,
              cloud_area_fraction_high: 57.5,
              cloud_area_fraction_low: 22.8,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.9,
              fog_area_fraction: 0.0,
              relative_humidity: 68.9,
              ultraviolet_index_clear_sky: 2.3,
              wind_from_direction: 216.5,
              wind_speed: 4.5,
              wind_speed_of_gust: 9.3,
              wind_speed_percentile_10: 4.5,
              wind_speed_percentile_90: 5.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 13.8,
              air_temperature_min: 9.9,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T13:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.5,
              air_temperature: 13.4,
              air_temperature_percentile_10: 11.1,
              air_temperature_percentile_90: 15.8,
              cloud_area_fraction: 46.7,
              cloud_area_fraction_high: 45.0,
              cloud_area_fraction_low: 3.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 7.4,
              fog_area_fraction: 0.0,
              relative_humidity: 66.9,
              ultraviolet_index_clear_sky: 1.7,
              wind_from_direction: 210.4,
              wind_speed: 4.5,
              wind_speed_of_gust: 9.2,
              wind_speed_percentile_10: 4.5,
              wind_speed_percentile_90: 5.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 13.8,
              air_temperature_min: 9.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T14:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.2,
              air_temperature: 13.8,
              air_temperature_percentile_10: 11.5,
              air_temperature_percentile_90: 16.2,
              cloud_area_fraction: 84.1,
              cloud_area_fraction_high: 82.9,
              cloud_area_fraction_low: 5.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 7.5,
              fog_area_fraction: 0.0,
              relative_humidity: 65.8,
              ultraviolet_index_clear_sky: 1.1,
              wind_from_direction: 213.4,
              wind_speed: 4.5,
              wind_speed_of_gust: 9.2,
              wind_speed_percentile_10: 4.4,
              wind_speed_percentile_90: 5.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 13.7,
              air_temperature_min: 8.9,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T15:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.2,
              air_temperature: 13.7,
              air_temperature_percentile_10: 11.3,
              air_temperature_percentile_90: 16.0,
              cloud_area_fraction: 74.8,
              cloud_area_fraction_high: 72.7,
              cloud_area_fraction_low: 7.1,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 7.4,
              fog_area_fraction: 0.0,
              relative_humidity: 66.0,
              ultraviolet_index_clear_sky: 0.5,
              wind_from_direction: 216.9,
              wind_speed: 4.3,
              wind_speed_of_gust: 9.0,
              wind_speed_percentile_10: 4.3,
              wind_speed_percentile_90: 5.0,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_night',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              air_temperature_max: 13.1,
              air_temperature_min: 8.4,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T16:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.4,
              air_temperature: 13.1,
              air_temperature_percentile_10: 10.7,
              air_temperature_percentile_90: 15.5,
              cloud_area_fraction: 41.4,
              cloud_area_fraction_high: 41.1,
              cloud_area_fraction_low: 0.6,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 7.0,
              fog_area_fraction: 0.0,
              relative_humidity: 66.7,
              ultraviolet_index_clear_sky: 0.2,
              wind_from_direction: 220.7,
              wind_speed: 3.9,
              wind_speed_of_gust: 8.6,
              wind_speed_percentile_10: 3.8,
              wind_speed_percentile_90: 4.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_night',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 11.5,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T17:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.9,
              air_temperature: 11.5,
              air_temperature_percentile_10: 9.2,
              air_temperature_percentile_90: 13.6,
              cloud_area_fraction: 4.4,
              cloud_area_fraction_high: 0.1,
              cloud_area_fraction_low: 4.3,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.5,
              fog_area_fraction: 0.0,
              relative_humidity: 71.8,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 213.8,
              wind_speed: 3.6,
              wind_speed_of_gust: 7.7,
              wind_speed_percentile_10: 3.4,
              wind_speed_percentile_90: 4.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_night',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 9.9,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.1,
              air_temperature: 9.9,
              air_temperature_percentile_10: 7.7,
              air_temperature_percentile_90: 12.0,
              cloud_area_fraction: 0.1,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 0.1,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.0,
              fog_area_fraction: 0.0,
              relative_humidity: 76.7,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 198.6,
              wind_speed: 3.5,
              wind_speed_of_gust: 6.4,
              wind_speed_percentile_10: 3.5,
              wind_speed_percentile_90: 4.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_night',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 9.2,
              air_temperature_min: 7.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T19:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.6,
              air_temperature: 9.2,
              air_temperature_percentile_10: 6.8,
              air_temperature_percentile_90: 11.4,
              cloud_area_fraction: 8.6,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 8.6,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.6,
              fog_area_fraction: 0.0,
              relative_humidity: 78.2,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 207.7,
              wind_speed: 3.7,
              wind_speed_of_gust: 6.5,
              wind_speed_percentile_10: 3.5,
              wind_speed_percentile_90: 4.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_night',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 8.9,
              air_temperature_min: 7.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T20:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.1,
              air_temperature: 8.9,
              air_temperature_percentile_10: 6.4,
              air_temperature_percentile_90: 11.2,
              cloud_area_fraction: 2.9,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 2.9,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.3,
              fog_area_fraction: 0.0,
              relative_humidity: 78.0,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 212.8,
              wind_speed: 4.0,
              wind_speed_of_gust: 7.4,
              wind_speed_percentile_10: 3.5,
              wind_speed_percentile_90: 4.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 8.4,
              air_temperature_min: 7.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T21:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.6,
              air_temperature: 8.4,
              air_temperature_percentile_10: 5.8,
              air_temperature_percentile_90: 10.6,
              cloud_area_fraction: 14.6,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 14.6,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.0,
              fog_area_fraction: 0.0,
              relative_humidity: 79.6,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 204.0,
              wind_speed: 3.9,
              wind_speed_of_gust: 7.1,
              wind_speed_percentile_10: 3.5,
              wind_speed_percentile_90: 4.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 8.0,
              air_temperature_min: 6.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T22:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.9,
              air_temperature: 8.0,
              air_temperature_percentile_10: 5.4,
              air_temperature_percentile_90: 10.4,
              cloud_area_fraction: 78.3,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 78.3,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 4.9,
              fog_area_fraction: 0.0,
              relative_humidity: 81.1,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 196.5,
              wind_speed: 3.8,
              wind_speed_of_gust: 7.0,
              wind_speed_percentile_10: 3.4,
              wind_speed_percentile_90: 4.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 8.0,
              air_temperature_min: 6.7,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-28T23:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.1,
              air_temperature: 8.0,
              air_temperature_percentile_10: 5.3,
              air_temperature_percentile_90: 10.5,
              cloud_area_fraction: 65.1,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 65.0,
              cloud_area_fraction_medium: 0.1,
              dew_point_temperature: 5.0,
              fog_area_fraction: 0.0,
              relative_humidity: 81.6,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 196.9,
              wind_speed: 3.2,
              wind_speed_of_gust: 6.9,
              wind_speed_percentile_10: 3.1,
              wind_speed_percentile_90: 4.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              air_temperature_max: 7.5,
              air_temperature_min: 6.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.0,
              air_temperature: 7.5,
              air_temperature_percentile_10: 4.8,
              air_temperature_percentile_90: 10.1,
              cloud_area_fraction: 1.2,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 0.7,
              cloud_area_fraction_medium: 0.6,
              dew_point_temperature: 5.1,
              fog_area_fraction: 0.0,
              relative_humidity: 85.1,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 182.0,
              wind_speed: 3.4,
              wind_speed_of_gust: 6.0,
              wind_speed_percentile_10: 3.3,
              wind_speed_percentile_90: 4.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              air_temperature_max: 7.2,
              air_temperature_min: 6.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T01:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.9,
              air_temperature: 7.2,
              air_temperature_percentile_10: 4.6,
              air_temperature_percentile_90: 9.7,
              cloud_area_fraction: 1.8,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 1.8,
              dew_point_temperature: 4.9,
              fog_area_fraction: 0.0,
              relative_humidity: 85.8,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 194.0,
              wind_speed: 3.4,
              wind_speed_of_gust: 6.0,
              wind_speed_percentile_10: 2.6,
              wind_speed_percentile_90: 4.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 8.1,
              air_temperature_min: 6.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T02:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.7,
              air_temperature: 7.0,
              air_temperature_percentile_10: 4.5,
              air_temperature_percentile_90: 9.2,
              cloud_area_fraction: 3.3,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 1.2,
              cloud_area_fraction_medium: 2.1,
              dew_point_temperature: 4.5,
              fog_area_fraction: 0.0,
              relative_humidity: 84.8,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 193.0,
              wind_speed: 3.3,
              wind_speed_of_gust: 6.0,
              wind_speed_percentile_10: 3.2,
              wind_speed_percentile_90: 4.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 8.9,
              air_temperature_min: 6.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T03:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.6,
              air_temperature: 6.8,
              air_temperature_percentile_10: 4.6,
              air_temperature_percentile_90: 8.8,
              cloud_area_fraction: 6.9,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 4.2,
              cloud_area_fraction_medium: 2.8,
              dew_point_temperature: 4.0,
              fog_area_fraction: 0.0,
              relative_humidity: 82.8,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 199.3,
              wind_speed: 3.3,
              wind_speed_of_gust: 5.8,
              wind_speed_percentile_10: 2.9,
              wind_speed_percentile_90: 3.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 9.7,
              air_temperature_min: 6.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T04:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.1,
              air_temperature: 6.7,
              air_temperature_percentile_10: 4.5,
              air_temperature_percentile_90: 8.7,
              cloud_area_fraction: 11.7,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 8.7,
              cloud_area_fraction_medium: 3.0,
              dew_point_temperature: 4.0,
              fog_area_fraction: 0.0,
              relative_humidity: 83.6,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 213.2,
              wind_speed: 3.3,
              wind_speed_of_gust: 5.9,
              wind_speed_percentile_10: 2.8,
              wind_speed_percentile_90: 3.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 10.3,
              air_temperature_min: 6.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T05:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.5,
              air_temperature: 6.6,
              air_temperature_percentile_10: 4.5,
              air_temperature_percentile_90: 8.4,
              cloud_area_fraction: 8.7,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 5.5,
              cloud_area_fraction_medium: 3.2,
              dew_point_temperature: 4.1,
              fog_area_fraction: 0.0,
              relative_humidity: 84.9,
              ultraviolet_index_clear_sky: 0.1,
              wind_from_direction: 206.6,
              wind_speed: 3.2,
              wind_speed_of_gust: 5.9,
              wind_speed_percentile_10: 2.9,
              wind_speed_percentile_90: 3.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 11.5,
              air_temperature_min: 7.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.9,
              air_temperature: 7.0,
              air_temperature_percentile_10: 4.8,
              air_temperature_percentile_90: 9.0,
              cloud_area_fraction: 37.6,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 34.5,
              cloud_area_fraction_medium: 3.1,
              dew_point_temperature: 4.3,
              fog_area_fraction: 0.0,
              relative_humidity: 83.1,
              ultraviolet_index_clear_sky: 0.3,
              wind_from_direction: 219.7,
              wind_speed: 3.2,
              wind_speed_of_gust: 6.1,
              wind_speed_percentile_10: 2.6,
              wind_speed_percentile_90: 3.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 12.3,
              air_temperature_min: 8.1,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T07:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.4,
              air_temperature: 8.1,
              air_temperature_percentile_10: 6.1,
              air_temperature_percentile_90: 9.9,
              cloud_area_fraction: 58.1,
              cloud_area_fraction_high: 0.3,
              cloud_area_fraction_low: 57.8,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 4.9,
              fog_area_fraction: 0.0,
              relative_humidity: 81.0,
              ultraviolet_index_clear_sky: 0.7,
              wind_from_direction: 237.2,
              wind_speed: 3.4,
              wind_speed_of_gust: 6.7,
              wind_speed_percentile_10: 2.5,
              wind_speed_percentile_90: 3.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 12.6,
              air_temperature_min: 8.9,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T08:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.0,
              air_temperature: 8.9,
              air_temperature_percentile_10: 6.7,
              air_temperature_percentile_90: 10.9,
              cloud_area_fraction: 77.5,
              cloud_area_fraction_high: 12.0,
              cloud_area_fraction_low: 75.4,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.6,
              fog_area_fraction: 0.0,
              relative_humidity: 80.2,
              ultraviolet_index_clear_sky: 1.2,
              wind_from_direction: 247.2,
              wind_speed: 3.0,
              wind_speed_of_gust: 6.7,
              wind_speed_percentile_10: 2.4,
              wind_speed_percentile_90: 3.7,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 13.1,
              air_temperature_min: 9.7,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T09:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.3,
              air_temperature: 9.7,
              air_temperature_percentile_10: 7.5,
              air_temperature_percentile_90: 11.9,
              cloud_area_fraction: 97.1,
              cloud_area_fraction_high: 58.0,
              cloud_area_fraction_low: 84.4,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.3,
              fog_area_fraction: 0.0,
              relative_humidity: 79.5,
              ultraviolet_index_clear_sky: 1.8,
              wind_from_direction: 253.4,
              wind_speed: 3.5,
              wind_speed_of_gust: 7.1,
              wind_speed_percentile_10: 2.2,
              wind_speed_percentile_90: 3.6,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 13.1,
              air_temperature_min: 10.3,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T10:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.4,
              air_temperature: 10.3,
              air_temperature_percentile_10: 8.0,
              air_temperature_percentile_90: 12.7,
              cloud_area_fraction: 98.8,
              cloud_area_fraction_high: 68.0,
              cloud_area_fraction_low: 90.4,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 6.7,
              fog_area_fraction: 0.0,
              relative_humidity: 78.3,
              ultraviolet_index_clear_sky: 2.1,
              wind_from_direction: 242.3,
              wind_speed: 3.4,
              wind_speed_of_gust: 7.1,
              wind_speed_percentile_10: 2.3,
              wind_speed_percentile_90: 3.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 13.1,
              air_temperature_min: 11.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T11:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.5,
              air_temperature: 11.5,
              air_temperature_percentile_10: 9.2,
              air_temperature_percentile_90: 13.9,
              cloud_area_fraction: 93.9,
              cloud_area_fraction_high: 67.9,
              cloud_area_fraction_low: 85.1,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 7.1,
              fog_area_fraction: 0.0,
              relative_humidity: 74.5,
              ultraviolet_index_clear_sky: 2.2,
              wind_from_direction: 248.0,
              wind_speed: 3.8,
              wind_speed_of_gust: 7.8,
              wind_speed_percentile_10: 2.7,
              wind_speed_percentile_90: 3.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 13.1,
              air_temperature_min: 11.3,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.4,
              air_temperature: 12.3,
              air_temperature_percentile_10: 9.9,
              air_temperature_percentile_90: 14.8,
              cloud_area_fraction: 98.6,
              cloud_area_fraction_high: 91.7,
              cloud_area_fraction_low: 77.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 7.4,
              fog_area_fraction: 0.0,
              relative_humidity: 72.1,
              ultraviolet_index_clear_sky: 2.0,
              wind_from_direction: 255.8,
              wind_speed: 3.7,
              wind_speed_of_gust: 8.1,
              wind_speed_percentile_10: 2.5,
              wind_speed_percentile_90: 4.0,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 5.9,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 13.1,
              air_temperature_min: 10.1,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
            },
          },
        },
      },
      {
        time: '2025-03-29T13:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.1,
              air_temperature: 12.6,
              air_temperature_percentile_10: 10.3,
              air_temperature_percentile_90: 15.1,
              cloud_area_fraction: 96.9,
              cloud_area_fraction_high: 95.3,
              cloud_area_fraction_low: 44.1,
              cloud_area_fraction_medium: 0.1,
              dew_point_temperature: 7.2,
              fog_area_fraction: 0.0,
              relative_humidity: 69.6,
              ultraviolet_index_clear_sky: 1.5,
              wind_from_direction: 252.3,
              wind_speed: 3.3,
              wind_speed_of_gust: 7.7,
              wind_speed_percentile_10: 2.9,
              wind_speed_percentile_90: 4.1,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.2,
            },
          },
        },
      },
      {
        time: '2025-03-29T14:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.9,
              air_temperature: 13.1,
              air_temperature_percentile_10: 11.0,
              air_temperature_percentile_90: 15.3,
              cloud_area_fraction: 98.8,
              cloud_area_fraction_high: 98.7,
              cloud_area_fraction_low: 13.9,
              cloud_area_fraction_medium: 1.6,
              dew_point_temperature: 4.8,
              fog_area_fraction: 0.0,
              relative_humidity: 57.2,
              ultraviolet_index_clear_sky: 0.9,
              wind_from_direction: 236.0,
              wind_speed: 3.3,
              wind_speed_of_gust: 7.1,
              wind_speed_percentile_10: 3.0,
              wind_speed_percentile_90: 4.1,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
        },
      },
      {
        time: '2025-03-29T15:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.8,
              air_temperature: 12.9,
              air_temperature_percentile_10: 10.9,
              air_temperature_percentile_90: 15.1,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 100.0,
              cloud_area_fraction_low: 0.4,
              cloud_area_fraction_medium: 25.4,
              dew_point_temperature: 3.6,
              fog_area_fraction: 0.0,
              relative_humidity: 53.6,
              ultraviolet_index_clear_sky: 0.5,
              wind_from_direction: 240.9,
              wind_speed: 3.2,
              wind_speed_of_gust: 7.0,
              wind_speed_percentile_10: 3.0,
              wind_speed_percentile_90: 4.0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
        },
      },
      {
        time: '2025-03-29T16:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.6,
              air_temperature: 12.3,
              air_temperature_percentile_10: 10.4,
              air_temperature_percentile_90: 14.4,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 100.0,
              cloud_area_fraction_low: 0.1,
              cloud_area_fraction_medium: 74.9,
              dew_point_temperature: 3.3,
              fog_area_fraction: 0.0,
              relative_humidity: 54.3,
              ultraviolet_index_clear_sky: 0.2,
              wind_from_direction: 228.3,
              wind_speed: 3.2,
              wind_speed_of_gust: 6.7,
              wind_speed_percentile_10: 3.0,
              wind_speed_percentile_90: 3.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
        },
      },
      {
        time: '2025-03-29T17:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.6,
              air_temperature: 11.3,
              air_temperature_percentile_10: 9.2,
              air_temperature_percentile_90: 13.4,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 100.0,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 90.6,
              dew_point_temperature: 4.4,
              fog_area_fraction: 0.0,
              relative_humidity: 62.6,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 205.9,
              wind_speed: 3.2,
              wind_speed_of_gust: 6.4,
              wind_speed_percentile_10: 2.9,
              wind_speed_percentile_90: 4.3,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 0.0,
              probability_of_thunder: 0.1,
            },
          },
        },
      },
      {
        time: '2025-03-29T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.5,
              air_temperature: 10.1,
              air_temperature_percentile_10: 8.0,
              air_temperature_percentile_90: 12.0,
              cloud_area_fraction: 99.5,
              cloud_area_fraction_high: 98.4,
              cloud_area_fraction_low: 0.1,
              cloud_area_fraction_medium: 74.7,
              dew_point_temperature: 5.6,
              fog_area_fraction: 0.0,
              relative_humidity: 73.7,
              ultraviolet_index_clear_sky: 0.0,
              wind_from_direction: 202.2,
              wind_speed: 3.4,
              wind_speed_of_gust: 6.1,
              wind_speed_percentile_10: 2.7,
              wind_speed_percentile_90: 3.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 5.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 11.1,
              air_temperature_min: 7.1,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-03-30T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.2,
              air_temperature: 7.1,
              air_temperature_percentile_10: 5.9,
              air_temperature_percentile_90: 7.9,
              cloud_area_fraction: 0.4,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 3.9,
              relative_humidity: 80.8,
              wind_from_direction: 237.4,
              wind_speed: 2.6,
              wind_speed_percentile_10: 1.8,
              wind_speed_percentile_90: 3.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 9.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              air_temperature_max: 7.1,
              air_temperature_min: 4.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 2.0,
            },
          },
        },
      },
      {
        time: '2025-03-30T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.1,
              air_temperature: 4.2,
              air_temperature_percentile_10: 3.9,
              air_temperature_percentile_90: 4.7,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 100.0,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 44.5,
              dew_point_temperature: 2.1,
              relative_humidity: 87.2,
              wind_from_direction: 234.3,
              wind_speed: 2.5,
              wind_speed_percentile_10: 1.8,
              wind_speed_percentile_90: 3.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 25.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.8,
              air_temperature_min: 4.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 9.8,
            },
          },
        },
      },
      {
        time: '2025-03-30T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1003.9,
              air_temperature: 8.8,
              air_temperature_percentile_10: 6.2,
              air_temperature_percentile_90: 12.0,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 99.6,
              cloud_area_fraction_low: 44.1,
              cloud_area_fraction_medium: 100.0,
              dew_point_temperature: -0.1,
              relative_humidity: 54.3,
              wind_from_direction: 192.4,
              wind_speed: 2.9,
              wind_speed_percentile_10: 1.3,
              wind_speed_percentile_90: 4.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 31.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 8.8,
              air_temperature_min: 7.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 19.6,
            },
          },
        },
      },
      {
        time: '2025-03-30T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1004.5,
              air_temperature: 7.2,
              air_temperature_percentile_10: 6.3,
              air_temperature_percentile_90: 8.7,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 71.1,
              cloud_area_fraction_low: 40.6,
              cloud_area_fraction_medium: 100.0,
              dew_point_temperature: 5.2,
              relative_humidity: 87.3,
              wind_from_direction: 162.2,
              wind_speed: 1.6,
              wind_speed_percentile_10: 1.0,
              wind_speed_percentile_90: 2.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 17.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 7.2,
              air_temperature_min: 5.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 15.7,
            },
          },
        },
      },
      {
        time: '2025-03-31T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.8,
              air_temperature: 5.2,
              air_temperature_percentile_10: 4.2,
              air_temperature_percentile_90: 6.0,
              cloud_area_fraction: 100.0,
              cloud_area_fraction_high: 97.7,
              cloud_area_fraction_low: 71.9,
              cloud_area_fraction_medium: 100.0,
              dew_point_temperature: 4.2,
              relative_humidity: 93.8,
              wind_from_direction: 332.8,
              wind_speed: 2.1,
              wind_speed_percentile_10: 0.9,
              wind_speed_percentile_90: 3.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 13.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 5.2,
              air_temperature_min: 3.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2025-03-31T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.0,
              air_temperature: 3.8,
              air_temperature_percentile_10: 3.0,
              air_temperature_percentile_90: 4.7,
              cloud_area_fraction: 98.4,
              cloud_area_fraction_high: 44.5,
              cloud_area_fraction_low: 69.5,
              cloud_area_fraction_medium: 88.3,
              dew_point_temperature: 2.4,
              relative_humidity: 91.8,
              wind_from_direction: 338.2,
              wind_speed: 2.9,
              wind_speed_percentile_10: 1.8,
              wind_speed_percentile_90: 4.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 11.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 9.3,
              air_temperature_min: 3.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2025-03-31T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.9,
              air_temperature: 9.3,
              air_temperature_percentile_10: 6.6,
              air_temperature_percentile_90: 12.6,
              cloud_area_fraction: 99.2,
              cloud_area_fraction_high: 0.4,
              cloud_area_fraction_low: 99.2,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 2.9,
              relative_humidity: 64.7,
              wind_from_direction: 334.7,
              wind_speed: 4.0,
              wind_speed_percentile_10: 2.6,
              wind_speed_percentile_90: 5.0,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 7.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 9.3,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 5.9,
            },
          },
        },
      },
      {
        time: '2025-03-31T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1017.5,
              air_temperature: 8.0,
              air_temperature_percentile_10: 6.6,
              air_temperature_percentile_90: 10.6,
              cloud_area_fraction: 53.5,
              cloud_area_fraction_high: 14.1,
              cloud_area_fraction_low: 28.1,
              cloud_area_fraction_medium: 43.0,
              dew_point_temperature: 3.0,
              relative_humidity: 71.4,
              wind_from_direction: 207.4,
              wind_speed: 2.3,
              wind_speed_percentile_10: 0.9,
              wind_speed_percentile_90: 4.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_night',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 11.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              air_temperature_max: 8.0,
              air_temperature_min: 5.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 5.9,
            },
          },
        },
      },
      {
        time: '2025-04-01T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1018.6,
              air_temperature: 5.5,
              air_temperature_percentile_10: 3.8,
              air_temperature_percentile_90: 7.2,
              cloud_area_fraction: 15.6,
              cloud_area_fraction_high: 0.8,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 14.8,
              dew_point_temperature: 2.0,
              relative_humidity: 79.2,
              wind_from_direction: 240.8,
              wind_speed: 2.8,
              wind_speed_percentile_10: 1.4,
              wind_speed_percentile_90: 4.0,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 7.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 5.5,
              air_temperature_min: 3.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-04-01T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1019.4,
              air_temperature: 4.8,
              air_temperature_percentile_10: 3.4,
              air_temperature_percentile_90: 6.8,
              cloud_area_fraction: 28.9,
              cloud_area_fraction_high: 2.0,
              cloud_area_fraction_low: 3.5,
              cloud_area_fraction_medium: 20.7,
              dew_point_temperature: 1.6,
              relative_humidity: 80.1,
              wind_from_direction: 242.0,
              wind_speed: 3.1,
              wind_speed_percentile_10: 1.9,
              wind_speed_percentile_90: 4.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 9.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 13.1,
              air_temperature_min: 4.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-04-01T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1019.1,
              air_temperature: 13.1,
              air_temperature_percentile_10: 10.7,
              air_temperature_percentile_90: 15.6,
              cloud_area_fraction: 54.7,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 52.3,
              dew_point_temperature: 4.6,
              relative_humidity: 56.6,
              wind_from_direction: 286.3,
              wind_speed: 4.1,
              wind_speed_percentile_10: 2.5,
              wind_speed_percentile_90: 5.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 7.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 13.1,
              air_temperature_min: 11.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 5.9,
            },
          },
        },
      },
      {
        time: '2025-04-01T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1020.0,
              air_temperature: 11.2,
              air_temperature_percentile_10: 7.7,
              air_temperature_percentile_90: 14.7,
              cloud_area_fraction: 21.1,
              cloud_area_fraction_high: 21.1,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 5.4,
              relative_humidity: 67.8,
              wind_from_direction: 264.1,
              wind_speed: 3.0,
              wind_speed_percentile_10: 1.4,
              wind_speed_percentile_90: 4.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_night',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 5.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 11.2,
              air_temperature_min: 8.1,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-04-02T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1020.8,
              air_temperature: 8.2,
              air_temperature_percentile_10: 5.4,
              air_temperature_percentile_90: 9.3,
              cloud_area_fraction: 17.2,
              cloud_area_fraction_high: 14.1,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 3.9,
              dew_point_temperature: 4.4,
              relative_humidity: 77.2,
              wind_from_direction: 339.8,
              wind_speed: 3.1,
              wind_speed_percentile_10: 2.0,
              wind_speed_percentile_90: 4.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 3.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 8.2,
              air_temperature_min: 5.4,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 2.0,
            },
          },
        },
      },
      {
        time: '2025-04-02T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1022.3,
              air_temperature: 6.0,
              air_temperature_percentile_10: 4.1,
              air_temperature_percentile_90: 7.3,
              cloud_area_fraction: 27.3,
              cloud_area_fraction_high: 26.6,
              cloud_area_fraction_low: 1.6,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 1.5,
              relative_humidity: 73.9,
              wind_from_direction: 331.6,
              wind_speed: 2.9,
              wind_speed_percentile_10: 2.2,
              wind_speed_percentile_90: 4.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 7.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 13.2,
              air_temperature_min: 6.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-04-02T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1023.4,
              air_temperature: 13.2,
              air_temperature_percentile_10: 9.8,
              air_temperature_percentile_90: 17.5,
              cloud_area_fraction: 58.6,
              cloud_area_fraction_high: 57.8,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 5.9,
              dew_point_temperature: 2.3,
              relative_humidity: 47.9,
              wind_from_direction: 334.3,
              wind_speed: 3.7,
              wind_speed_percentile_10: 1.7,
              wind_speed_percentile_90: 5.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 7.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 13.2,
              air_temperature_min: 11.1,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-04-02T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1023.0,
              air_temperature: 11.1,
              air_temperature_percentile_10: 8.1,
              air_temperature_percentile_90: 14.7,
              cloud_area_fraction: 69.5,
              cloud_area_fraction_high: 69.5,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 4.6,
              relative_humidity: 64.6,
              wind_from_direction: 243.9,
              wind_speed: 2.1,
              wind_speed_percentile_10: 0.8,
              wind_speed_percentile_90: 4.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 5.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              air_temperature_max: 11.1,
              air_temperature_min: 7.7,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-04-03T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1024.0,
              air_temperature: 7.7,
              air_temperature_percentile_10: 4.0,
              air_temperature_percentile_90: 9.6,
              cloud_area_fraction: 55.5,
              cloud_area_fraction_high: 60.2,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 0.0,
              dew_point_temperature: 4.4,
              relative_humidity: 80.2,
              wind_from_direction: 208.8,
              wind_speed: 2.2,
              wind_speed_percentile_10: 1.1,
              wind_speed_percentile_90: 4.0,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 3.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              air_temperature_max: 7.7,
              air_temperature_min: 6.1,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 2.0,
            },
          },
        },
      },
      {
        time: '2025-04-03T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1023.1,
              air_temperature: 6.6,
              air_temperature_percentile_10: 3.5,
              air_temperature_percentile_90: 8.5,
              cloud_area_fraction: 90.6,
              cloud_area_fraction_high: 40.2,
              cloud_area_fraction_low: 21.9,
              cloud_area_fraction_medium: 47.3,
              dew_point_temperature: 2.9,
              relative_humidity: 78.0,
              wind_from_direction: 248.3,
              wind_speed: 2.5,
              wind_speed_percentile_10: 1.4,
              wind_speed_percentile_90: 4.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 5.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 15.9,
              air_temperature_min: 6.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-04-03T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1020.6,
              air_temperature: 15.9,
              air_temperature_percentile_10: 10.1,
              air_temperature_percentile_90: 17.7,
              cloud_area_fraction: 34.4,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 10.2,
              cloud_area_fraction_medium: 27.3,
              dew_point_temperature: 4.7,
              relative_humidity: 47.7,
              wind_from_direction: 257.1,
              wind_speed: 3.4,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 5.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 9.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 15.9,
              air_temperature_min: 12.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 3.9,
            },
          },
        },
      },
      {
        time: '2025-04-03T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1017.1,
              air_temperature: 12.0,
              air_temperature_percentile_10: 7.3,
              air_temperature_percentile_90: 15.7,
              cloud_area_fraction: 34.4,
              cloud_area_fraction_high: 25.8,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 11.7,
              dew_point_temperature: 6.2,
              relative_humidity: 67.8,
              wind_from_direction: 197.1,
              wind_speed: 3.1,
              wind_speed_percentile_10: 2.1,
              wind_speed_percentile_90: 4.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_night',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 13.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 12.0,
              air_temperature_min: 8.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2025-04-04T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1016.0,
              air_temperature: 8.0,
              air_temperature_percentile_10: 4.2,
              air_temperature_percentile_90: 9.9,
              cloud_area_fraction: 26.6,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 26.6,
              dew_point_temperature: 3.9,
              relative_humidity: 75.6,
              wind_from_direction: 238.2,
              wind_speed: 3.4,
              wind_speed_percentile_10: 1.8,
              wind_speed_percentile_90: 4.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 11.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 8.0,
              air_temperature_min: 5.5,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2025-04-04T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1017.4,
              air_temperature: 5.8,
              air_temperature_percentile_10: 3.7,
              air_temperature_percentile_90: 8.0,
              cloud_area_fraction: 28.1,
              cloud_area_fraction_high: 25.0,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 14.1,
              dew_point_temperature: 1.4,
              relative_humidity: 74.1,
              wind_from_direction: 288.7,
              wind_speed: 3.6,
              wind_speed_percentile_10: 1.9,
              wind_speed_percentile_90: 5.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 13.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 12.7,
              air_temperature_min: 5.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2025-04-04T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1017.5,
              air_temperature: 12.7,
              air_temperature_percentile_10: 5.8,
              air_temperature_percentile_90: 16.7,
              cloud_area_fraction: 99.2,
              cloud_area_fraction_high: 21.9,
              cloud_area_fraction_low: 49.6,
              cloud_area_fraction_medium: 72.3,
              dew_point_temperature: 2.1,
              relative_humidity: 48.9,
              wind_from_direction: 332.2,
              wind_speed: 4.8,
              wind_speed_percentile_10: 1.8,
              wind_speed_percentile_90: 6.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 15.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 12.7,
              air_temperature_min: 7.8,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2025-04-04T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.4,
              air_temperature: 7.8,
              air_temperature_percentile_10: 4.6,
              air_temperature_percentile_90: 14.1,
              cloud_area_fraction: 90.6,
              cloud_area_fraction_high: 90.6,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 3.1,
              dew_point_temperature: 1.1,
              relative_humidity: 63.2,
              wind_from_direction: 305.2,
              wind_speed: 3.6,
              wind_speed_percentile_10: 1.6,
              wind_speed_percentile_90: 5.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 15.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 7.8,
              air_temperature_min: 5.6,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 9.8,
            },
          },
        },
      },
      {
        time: '2025-04-05T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1006.9,
              air_temperature: 5.6,
              air_temperature_percentile_10: 2.6,
              air_temperature_percentile_90: 9.8,
              cloud_area_fraction: 20.3,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 0.0,
              cloud_area_fraction_medium: 20.3,
              dew_point_temperature: -0.1,
              relative_humidity: 67.6,
              wind_from_direction: 328.6,
              wind_speed: 4.0,
              wind_speed_percentile_10: 2.0,
              wind_speed_percentile_90: 6.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 15.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 5.6,
              air_temperature_min: 3.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 9.8,
            },
          },
        },
      },
      {
        time: '2025-04-05T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.9,
              air_temperature: 3.0,
              air_temperature_percentile_10: 0.6,
              air_temperature_percentile_90: 6.4,
              cloud_area_fraction: 9.4,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 4.7,
              cloud_area_fraction_medium: 4.7,
              dew_point_temperature: -2.6,
              relative_humidity: 67.7,
              wind_from_direction: 330.6,
              wind_speed: 4.7,
              wind_speed_percentile_10: 2.5,
              wind_speed_percentile_90: 7.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 21.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              air_temperature_max: 7.1,
              air_temperature_min: 3.0,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 11.8,
            },
          },
        },
      },
      {
        time: '2025-04-05T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.4,
              air_temperature: 7.1,
              air_temperature_percentile_10: 3.3,
              air_temperature_percentile_90: 12.4,
              cloud_area_fraction: 75.8,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 21.1,
              cloud_area_fraction_medium: 74.6,
              dew_point_temperature: -5.2,
              relative_humidity: 42.1,
              wind_from_direction: 336.9,
              wind_speed: 5.3,
              wind_speed_percentile_10: 3.5,
              wind_speed_percentile_90: 8.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 21.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 7.1,
              air_temperature_min: 5.9,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 15.7,
            },
          },
        },
      },
      {
        time: '2025-04-05T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.6,
              air_temperature: 6.0,
              air_temperature_percentile_10: 2.4,
              air_temperature_percentile_90: 10.7,
              cloud_area_fraction: 98.4,
              cloud_area_fraction_high: 48.0,
              cloud_area_fraction_low: 34.8,
              cloud_area_fraction_medium: 76.2,
              dew_point_temperature: 0.1,
              relative_humidity: 66.5,
              wind_from_direction: 340.8,
              wind_speed: 3.4,
              wind_speed_percentile_10: 1.3,
              wind_speed_percentile_90: 6.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 13.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 6.0,
              air_temperature_min: 3.2,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 9.8,
            },
          },
        },
      },
      {
        time: '2025-04-06T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.5,
              air_temperature: 3.2,
              air_temperature_percentile_10: 1.1,
              air_temperature_percentile_90: 8.0,
              cloud_area_fraction: 6.2,
              cloud_area_fraction_high: 0.0,
              cloud_area_fraction_low: 3.5,
              cloud_area_fraction_medium: 2.7,
              dew_point_temperature: -1.4,
              relative_humidity: 73.0,
              wind_from_direction: 335.0,
              wind_speed: 3.7,
              wind_speed_percentile_10: 2.0,
              wind_speed_percentile_90: 5.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              air_temperature_max: 3.2,
              air_temperature_min: 1.3,
              precipitation_amount: 0.0,
              precipitation_amount_max: 0.0,
              precipitation_amount_min: 0.0,
              probability_of_precipitation: 9.8,
            },
          },
        },
      },
      {
        time: '2025-04-06T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.9,
              air_temperature: 1.6,
              air_temperature_percentile_10: -0.4,
              air_temperature_percentile_90: 6.0,
              cloud_area_fraction: 99.2,
              cloud_area_fraction_high: 3.1,
              cloud_area_fraction_low: 97.7,
              cloud_area_fraction_medium: 94.5,
              dew_point_temperature: -2.2,
              relative_humidity: 77.3,
              wind_from_direction: 330.8,
              wind_speed: 4.1,
              wind_speed_percentile_10: 2.0,
              wind_speed_percentile_90: 5.7,
            },
          },
        },
      },
    ],
  },
}
