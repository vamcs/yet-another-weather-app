'use client'

import { IconButton, TextField } from '@radix-ui/themes'
import { useCallback, useEffect, useState } from 'react'
import { CheckIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Button, Dialog, Flex, Text } from '@radix-ui/themes'
import debounce from 'lodash.debounce'
import { Place } from '@/services/geocoding/types'
import styles from './index.module.css'
import { getSuggestedCoordinates } from '@/services/geocoding'

type SearchProps = {
  onSelect: (place: Place) => void
}

export const Search = ({ onSelect }: SearchProps) => {
  const [places, setPlaces] = useState<Array<Place>>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps -- debounce messes up ESLint
  const onSearch = useCallback(
    debounce(async (value: string) => {
      if (!value) {
        setPlaces([])
        return
      }

      const places = await getSuggestedCoordinates(value)
      setPlaces(places)
    }, 1000),
    [setPlaces]
  )

  useEffect(() => {
    return () => {
      onSearch.cancel()
    }
  }, [onSearch])

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className={styles.searchButton}>
            Search for a place <MagnifyingGlassIcon />
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Search for a place</Dialog.Title>
          <Dialog.Description>
            <Text>And we&apos;ll show you the weather there.</Text>
          </Dialog.Description>
          <Flex direction="column" mt="4">
            <TextField.Root
              placeholder="Search for a place"
              onChange={(event) => {
                onSearch(event.target.value)
              }}
            >
              <TextField.Slot side="right">
                <MagnifyingGlassIcon height={16} width={16} />
              </TextField.Slot>
            </TextField.Root>
          </Flex>
          <Flex direction="column" mt="4" gap="2">
            {places.map((place) => (
              <Flex key={place.place_id} gap="2" align="center">
                <Text>{place.display_name}</Text>
                <Dialog.Close>
                  <IconButton onClick={() => onSelect(place)}>
                    <CheckIcon />
                  </IconButton>
                </Dialog.Close>
              </Flex>
            ))}
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}
