import { Box } from '@chakra-ui/react'
import React from 'react'
import SearchBar from './SearchBar'

function HeroSection() {
  return (
    <Box h='500px'
      bgPos='center'
      bgSize='cover'
      bgImg='https://ik.imagekit.io/q8qsfnr9wag/sigmund-Fa9b57hffnM-unsplash_7CICfPzvt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662365131333'>
      <SearchBar />
    </Box>
  )
}

export default HeroSection