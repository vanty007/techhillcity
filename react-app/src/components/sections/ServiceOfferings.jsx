import { Box, Container, Grid, Heading, Text, Flex, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const ServiceCard = ({ number, icon: Icon, title, description }) => {
  return (
    <Box
      position="relative"
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: 'brand.500',
      }}
      border="2px solid"
      borderColor="transparent"
    >
      {/* Big Number Badge */}
      <Text
        position="absolute"
        top={4}
        right={4}
        fontSize="4xl"
        fontWeight="bold"
        color="brand.50"
        lineHeight="1"
      >
        {number.toString().padStart(2, '0')}
      </Text>

      <Flex direction="column" align="start" position="relative" zIndex={1}>
        <Box
          display="inline-flex"
          p={3}
          bg="brand.50"
          borderRadius="full"
          mb={4}
          color="brand.500"
        >
          <Icon size={24} />
        </Box>
        <Heading as="h5" size="md" color="gray.800" mb={2} fontWeight="semibold">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600" lineHeight="tall">
          {description}
        </Text>
      </Flex>
    </Box>
  )
}

const ServiceOfferings = ({ subtitle, title, offerings, ctaText = 'Free Quote', ctaLink = '/contact' }) => {
  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="container.xl">
        {/* Section Header */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'start', md: 'end' }}
          mb={12}
        >
          <Box mb={{ base: 6, md: 0 }}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="brand.500"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              {subtitle}
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              lineHeight="shorter"
            >
              {title}
            </Heading>
          </Box>
          <Button
            as={RouterLink}
            to={ctaLink}
            size="lg"
            colorScheme="brand"
            bg="brand.500"
            color="white"
            _hover={{
              bg: 'brand.600',
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            transition="all 0.3s"
          >
            {ctaText}
          </Button>
        </Flex>

        {/* Service Cards Grid */}
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={8}
        >
          {offerings.map((offering, index) => (
            <ServiceCard key={index} number={index + 1} {...offering} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ServiceOfferings

