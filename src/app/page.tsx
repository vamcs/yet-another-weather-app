import styles from './page.module.css'
import { Button, Heading } from '@radix-ui/themes'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Heading as="h1" size="8">
          Yet Another Weather App
        </Heading>
        <Button>Search</Button>
      </main>
    </div>
  )
}
