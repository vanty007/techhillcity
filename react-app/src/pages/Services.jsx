import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageHeader from '../components/ui/PageHeader'
import ProductionProcess from '../components/sections/ProductionProcess'
import { Code2, Smartphone, Server } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Box
      as={RouterLink}
      to={link}
      position="relative"
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="md"
      textAlign="center"
      cursor="pointer"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: 'brand.500',
      }}
      border="2px solid"
      borderColor="transparent"
    >
      <Box
        display="inline-flex"
        p={4}
        bg="brand.50"
        borderRadius="full"
        mb={6}
        transition="all 0.3s"
        _groupHover={{
          bg: 'brand.500',
          color: 'white',
        }}
      >
        <Icon size={40} color="currentColor" />
      </Box>
      <Heading as="h3" size="md" color="gray.800" fontWeight="semibold" mb={3}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600" lineHeight="tall">
        {description}
      </Text>
    </Box>
  )
}

const Services = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services' },
  ]

  const services = [
    {
      icon: Server,
      title: 'IT Services',
      description:
        'Comprehensive IT solutions including infrastructure, consultancy, and dedicated teams to elevate your business.',
      link: '/services/it',
    },
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Custom web applications built with modern technologies including Java, PHP, C++, and .NET for scalable solutions.',
      link: '/services/web',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile apps for iOS and Android, covering SaaS, IoT, social media, and trading systems.',
      link: '/services/mobile',
    },
  ]

  return (
    <Box>
      <Navbar />
      <PageHeader title="Our Services" breadcrumbs={breadcrumbs} />
      <Box as="section" py={{ base: 16, md: 20 }} bg="gray.50">
        <Container maxW="container.xl">
          <Box textAlign="center" mb={12}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="brand.500"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              What We Offer
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              mb={6}
            >
              Comprehensive Technology Solutions
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              We provide a wide range of technology services to help businesses
              innovate, scale, and succeed in the digital world.
            </Text>
          </Box>

          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={8}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Grid>
        </Container>
      </Box>
      <ProductionProcess />
      <Footer />
    </Box>
  )
}

export default Services

