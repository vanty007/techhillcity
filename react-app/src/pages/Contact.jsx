import { Box, Container, Grid } from '@chakra-ui/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/ui/PageHeader'
import ContactInfo from '../components/sections/ContactInfo'
import ContactForm from '../components/sections/ContactForm'

const Contact = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contacts' },
  ]

  return (
    <Box>
      <Navbar />
      <PageHeader title="Contacts" breadcrumbs={breadcrumbs} />
      
      <Box as="section" py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
            gap={{ base: 12, lg: 16 }}
            alignItems="start"
          >
            {/* Left Column - Contact Info */}
            <ContactInfo />

            {/* Right Column - Contact Form */}
            <ContactForm />
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default Contact

