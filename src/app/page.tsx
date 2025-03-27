import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import styles from './page.module.css'
import {
  Box,
  Card,
  Container,
  DataList,
  Flex,
  Heading,
  IconButton,
  Inset,
  Table,
  Text,
  TextField,
} from '@radix-ui/themes'
import Image from 'next/image'
import { DynamicMap } from '@/components/Map'
import { getForecast } from '@/services/weather'
import { formatNumber, formatTime } from '@/helpers/formatters'

export default async function Home() {
  const coordinates = {
    lat: 59.3327,
    lng: 18.0656,
  }

  const forecast = await getForecast({
    lat: coordinates.lat,
    lng: coordinates.lng,
  })

  return (
    <div className={styles.main}>
      <Container p="6" size="3">
        <Flex direction="column" gap="5">
          <Heading as="h1" size="8" align="center" wrap="balance">
            Yet Another Weather App
          </Heading>
          <TextField.Root
            placeholder="What's the weather like in...?"
            size="3"
            variant="soft"
          >
            <TextField.Slot side="right">
              <IconButton variant="ghost">
                <MagnifyingGlassIcon height={16} width={16} />
              </IconButton>
            </TextField.Slot>
          </TextField.Root>
          <Card>
            <Flex direction={{ initial: 'column', sm: 'row' }} gap="4">
              <Box width={{ initial: '100%', sm: '50%' }}>
                <Flex direction="row" gap="2" mb="3">
                  <Heading as="h2">Stockholm</Heading>
                  <Image
                    src={`/${forecast.current.weatherSymbol}.svg`}
                    alt={forecast.current.weatherSymbol}
                    width={30}
                    height={30}
                  />
                </Flex>
                <DataList.Root orientation="horizontal">
                  <DataList.Item>
                    <DataList.Label>Temperature now</DataList.Label>
                    <DataList.Value>
                      {formatNumber({
                        value: forecast.current.temperature,
                        unit: 'celsius',
                      })}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label>Precipitation</DataList.Label>
                    <DataList.Value>
                      {formatNumber({
                        value: forecast.current.precipitation,
                        unit: 'millimeter',
                      })}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label>Wind</DataList.Label>
                    <DataList.Value>
                      {formatNumber({
                        value: forecast.current.wind,
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
          <Table.Root variant="surface" layout="auto">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell minWidth="120px">
                  Time (CET)
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify="center">
                  Weather
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify="center">
                  Temperature
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify="center">
                  Precipitation
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify="center">
                  Wind
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {forecast.timeseries.map((ts) => (
                <Table.Row key={ts.timeFrom} align="center">
                  <Table.Cell>
                    {!ts.timeTo ? (
                      formatTime({ time: ts.timeFrom })
                    ) : (
                      <Flex direction="column">
                        {formatTime({ time: ts.timeFrom })}
                        <Text>to</Text>
                        {formatTime({ time: ts.timeTo })}
                      </Flex>
                    )}
                  </Table.Cell>
                  <Table.Cell justify="center">
                    <Image
                      src={`/${ts.weatherSymbol}.svg`}
                      alt={ts.weatherSymbol}
                      width={30}
                      height={30}
                    />
                  </Table.Cell>
                  <Table.Cell justify="center">
                    {formatNumber({
                      value: ts.temperature,
                      unit: 'celsius',
                    })}
                  </Table.Cell>
                  <Table.Cell justify="center">
                    {formatNumber({
                      value: ts.precipitation,
                      unit: 'millimeter',
                    })}
                  </Table.Cell>
                  <Table.Cell justify="center">
                    {formatNumber({
                      value: ts.wind,
                      unit: 'meter-per-second',
                    })}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Flex>
      </Container>
    </div>
  )
}
