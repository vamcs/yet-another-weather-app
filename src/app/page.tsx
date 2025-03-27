import styles from './page.module.css'
import { Container, Flex, Heading } from '@radix-ui/themes'
import { getForecast } from '@/services/weather'
import { Home } from '@/components/Home'

export default async function HomePage() {
  const defaultCoordinates = {
    lat: 59.3327,
    lng: 18.0656,
  }

  const forecast = await getForecast({
    lat: defaultCoordinates.lat,
    lng: defaultCoordinates.lng,
  })

  return (
    <div className={styles.main}>
      <Container p="6" size="3">
        <Flex direction="column" gap="5">
          <Heading
            as="h1"
            size="8"
            align={{ initial: 'left', sm: 'center' }}
            wrap="balance"
          >
            Yet Another Weather App
          </Heading>
          <Home forecast={forecast} />
        </Flex>
      </Container>
    </div>
  )
}
