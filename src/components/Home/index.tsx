'use client'

import { formatNumber } from '@/helpers/formatters'
import { ForecastOutput } from '@/services/weather/types'
import { Card, Flex, Box, Heading, DataList, Inset } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { ForecastTable } from '../ForecastTable'
import { DynamicMap } from '../Map'
import { Search } from '../Search'
import Image from 'next/image'
import { getForecast } from '@/services/weather'

type HomeProps = {
  forecast: ForecastOutput
}

export const Home = ({ forecast }: HomeProps) => {
  const [coordinates, setCoordinates] = useState({
    lat: 59.3327,
    lng: 18.0656,
    name: 'Stockholm',
  })
  const [currentForecast, setCurrentForecast] =
    useState<ForecastOutput>(forecast)

  useEffect(() => {
    const fetchForecast = async () => {
      const forecast = await getForecast({
        lat: coordinates.lat,
        lng: coordinates.lng,
      })
      setCurrentForecast(forecast)
    }
    fetchForecast()
  }, [coordinates])

  return (
    <>
      <Search
        onSelect={(place) =>
          setCoordinates({
            lat: parseFloat(place.lat),
            lng: parseFloat(place.lon),
            name: place.display_name,
          })
        }
      />
      <Card>
        <Flex direction={{ initial: 'column', sm: 'row' }} gap="4">
          <Box width={{ initial: '100%', sm: '50%' }}>
            <Flex direction="row" gap="2" mb="3">
              <Heading as="h2" truncate>
                {coordinates.name}
              </Heading>
              <Image
                src={`/${currentForecast.current.weatherSymbol}.svg`}
                alt={currentForecast.current.weatherSymbol}
                width={30}
                height={30}
              />
            </Flex>
            <DataList.Root orientation="horizontal">
              <DataList.Item>
                <DataList.Label>Temperature now</DataList.Label>
                <DataList.Value>
                  {formatNumber({
                    value: currentForecast.current.temperature,
                    unit: 'celsius',
                  })}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Precipitation</DataList.Label>
                <DataList.Value>
                  {formatNumber({
                    value: currentForecast.current.precipitation,
                    unit: 'millimeter',
                  })}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Wind</DataList.Label>
                <DataList.Value>
                  {formatNumber({
                    value: currentForecast.current.wind,
                    unit: 'meter-per-second',
                  })}
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </Box>
          <Box width={{ initial: '100%', sm: '50%' }}>
            <Inset side={{ initial: 'bottom', sm: 'right' }}>
              <DynamicMap lat={coordinates.lat} lng={coordinates.lng} />
            </Inset>
          </Box>
        </Flex>
      </Card>
      <ForecastTable forecast={currentForecast} />
    </>
  )
}
