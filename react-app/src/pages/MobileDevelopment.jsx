import { Box, Container, Grid, Heading, Text, Image, Flex } from '@chakra-ui/react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/ui/PageHeader'
import ServiceOfferings from '../components/sections/ServiceOfferings'
import { Laptop, Globe, Settings, Database, Code2, FileText } from 'lucide-react'
import mobileImage from '../assets/images/mobile-app.png'

const MobileDevelopment = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Mobile Development' },
  ]

  const offerings = [
    {
      icon: Laptop,
      title: 'Software as a Service',
      description: '51% of smartphone users have discovered a new company or product.',
    },
    {
      icon: Globe,
      title: 'Internet of Things',
      description: 'Move your SaaS products to mobile, Companies with a professional mobile.',
    },
    {
      icon: Settings,
      title: 'Gambling & Betting',
      description: 'Develop a custom mobile app to thrive in a mobile market worth over $100.',
    },
    {
      icon: Database,
      title: 'Social Media',
      description: '80% of time users spend in social media from their mobile devices.',
    },
    {
      icon: Code2,
      title: 'Business Management',
      description: '65% of sales representatives have achieved their quotas by adopting.',
    },
    {
      icon: FileText,
      title: 'Trading Systems',
      description: 'We provide top-tier mobile app development services for brokers.',
    },
  ]

  return (
    <Box>
      <Navbar />
      <PageHeader title="Mobile Development" breadcrumbs={breadcrumbs} />
      
      {/* Mobile Benefits Section */}
      <Box as="section" py={{ base: 16, md: 20 }} bg="white">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
            gap={8}
            alignItems="center"
          >
            {/* Left Column - Benefits */}
            <Box gridColumn={{ base: '1', lg: 'span 2' }}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="brand.500"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={3}
              >
                Business Benefits
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                mb={8}
                lineHeight="shorter"
              >
                Mobile Apps Benefits
              </Heading>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                {offerings.slice(0, 4).map((offering, index) => (
                  <Flex key={index} gap={4} align="start">
                    <Box
                      display="inline-flex"
                      p={3}
                      bg="brand.50"
                      borderRadius="full"
                      color="brand.500"
                      flexShrink={0}
                    >
                      <offering.icon size={24} />
                    </Box>
                    <Box>
                      <Heading as="h5" size="sm" color="gray.800" mb={2} fontWeight="semibold">
                        {offering.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="tall">
                        {offering.description}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Grid>
            </Box>

            {/* Right Column - Image */}
            <Box>
              <Image
                src={mobileImage}
                alt="Mobile Development"
                w="full"
                h="auto"
                objectFit="contain"
                filter="drop-shadow(0 20px 40px rgba(6, 147, 227, 0.15))"
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      <ServiceOfferings
        subtitle="Our Services"
        title={
          <>
            We Offer a Wide <br />
            Variety of IT Services
          </>
        }
        offerings={offerings}
      />
      <Footer />
    </Box>
  )
}

export default MobileDevelopment

