import { Box } from '@chakra-ui/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import TechTrends from '../components/sections/TechTrends'
import ClientLogos from '../components/sections/ClientLogos'

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Services />
      <TechTrends />
      <ClientLogos />
      <Testimonials />
      <Footer />
    </Box>
  )
}

export default Home

