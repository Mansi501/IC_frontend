import { Box } from '@chakra-ui/react'
import React from 'react'
import CurrentOpenings from '../components/CurrentOpenings'
import FeaturedOpenings from '../components/FeaturedOpenings'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'

function Homepage() {
    return (
        <Box>
            <HeroSection />
            <InfoSection />
            <FeaturedOpenings />
            <CurrentOpenings />
        </Box>
    )
}

export default Homepage