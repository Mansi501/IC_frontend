import { Button, Input, Stack } from '@chakra-ui/react'
import React from 'react'

function SearchBar() {
  return (
    <Stack direction='row'>
      <Input
        type='text' placeholder='What are you looking for?' />
      <Button type='submit'>Search</Button>
    </Stack>
  )
}

export default SearchBar