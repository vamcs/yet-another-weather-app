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
  TextField,
} from '@radix-ui/themes'
import Image from 'next/image'

export default async function Home() {
  // TODO: Add weather data
  // const weather = await fetch(
  //   'https://api.met.no/weatherapi/nowcast/2.0/complete?lat=59.3327&lon=18.0656',
  //   {
  //     headers: {
  //       'User-Agent':
  //         'YetAnotherWeatherApp/1.0 github.com/vamcs/yet-another-weather-app',
  //     },
  //   }
  // )

  // const data = await weather.json()

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
                    src="/clearsky_day.svg"
                    alt="Clear sky"
                    width={30}
                    height={30}
                  />
                </Flex>
                <DataList.Root orientation="horizontal">
                  <DataList.Item>
                    <DataList.Label>Temperature now</DataList.Label>
                    <DataList.Value>7°C</DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label>Precipitation</DataList.Label>
                    <DataList.Value>0 mm</DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label>Wind</DataList.Label>
                    <DataList.Value>5.1 m/s</DataList.Value>
                  </DataList.Item>
                </DataList.Root>
              </Box>
              <Box width={{ initial: '100%', sm: '50%' }}>
                <Inset side={{ initial: 'bottom', sm: 'right' }}>
                  <Box height="156px" className={styles.map}>
                    Map here
                  </Box>
                </Inset>
              </Box>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </div>
  )
}
