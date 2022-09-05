import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowRight } from 'react-feather'

function JobCard() {
    return (
        <Box 
        m='2' p='4'
        w='350px'
        h='150px'
        bgColor='gray.400'>
            <Text textAlign='left'>Department</Text>
            <Flex justifyContent='space-between' alignItems='center '>
                <Box>
                    <Heading>Job Title</Heading>
                    <Text>City/State</Text>
                </Box>
                <ArrowRight />
            </Flex>
            <Text textAlign='right'>Job id: 12345</Text>
        </Box>
    )
}

export default JobCard