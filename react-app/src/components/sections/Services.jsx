import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Smartphone, BarChart3, Palette } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, link }) => {
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
      <Heading as="h3" size="md" color="gray.800" fontWeight="semibold">
        {title}
      </Heading>
    </Box>
  )
}

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Custom Software Development',
      link: '/services/web',
    },
    {
      icon: BarChart3,
      title: 'Outsourcing Development',
      link: '/services/it',
    },
    {
      icon: Palette,
      title: 'Software Product Development',
      link: '/services/it',
    },
  ]

  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="container.xl">
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
  )
}

export default Services

