import { Box } from '@chakra-ui/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/ui/PageHeader'
import AboutHero from '../components/sections/AboutHero'
import WhatWeDo from '../components/sections/WhatWeDo'

const About = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us' },
  ]

  return (
    <Box>
      <Navbar />
      <PageHeader title="About Us" breadcrumbs={breadcrumbs} />
      <AboutHero />
      <WhatWeDo />
      <Footer />
    </Box>
  )
}

export default About

