import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CurrentJobsList from './CurrentJobsList'
import Sidebar from './Sidebar'

function CurrentOpenings() {
  return (
    <Box>
      <Text>Current Openings</Text>
      <Flex>
        <Sidebar />
        <CurrentJobsList />
      </Flex>
    </Box>
  )
}

export default CurrentOpenings