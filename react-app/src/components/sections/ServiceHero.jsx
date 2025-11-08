import { Box, Container, Grid, Heading, Text, Image, Flex } from '@chakra-ui/react'

const TechItem = ({ number, title, description }) => {
  return (
    <Box mb={6}>
      <Flex gap={4} align="start">
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="brand.500"
          minW="40px"
        >
          {number}.
        </Text>
        <Box flex="1">
          <Heading as="h6" size="sm" color="gray.800" mb={2} fontWeight="semibold">
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.600" lineHeight="tall">
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

const ServiceHero = ({ image, subtitle, title, technologies }) => {
  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="white">
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          {/* Left Column - Image */}
          <Box>
            <Image
              src={image}
              alt={title}
              w="full"
              h="auto"
              objectFit="contain"
              filter="drop-shadow(0 20px 40px rgba(6, 147, 227, 0.15))"
            />
          </Box>

          {/* Right Column - Content */}
          <Box>
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
              mb={8}
              lineHeight="shorter"
            >
              {title}
            </Heading>

            {/* Technologies Grid */}
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {technologies.map((tech, index) => (
                <TechItem key={index} {...tech} />
              ))}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default ServiceHero

