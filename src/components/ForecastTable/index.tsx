'use client'

import { Flex, Table, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { formatNumber, formatTime } from '@/helpers/formatters'
import { ForecastOutput } from '@/services/weather/types'

export const ForecastTable = ({ forecast }: { forecast: ForecastOutput }) => {
  return (
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
          <Table.ColumnHeaderCell justify="center">Wind</Table.ColumnHeaderCell>
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
  )
}
