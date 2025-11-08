import { Box, Container, Grid, Heading, Text, Button, Flex } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { ArrowRight, Code2, Laptop, Database, Palette } from 'lucide-react'
import { Image } from '@chakra-ui/react'
import aboutImage from '../../assets/images/image1-about.png'

const TechIcon = ({ icon: Icon, label }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={6}
      bg="white"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.200"
      transition="all 0.3s"
      _hover={{
        borderColor: 'brand.500',
        transform: 'translateY(-4px)',
        boxShadow: 'md',
      }}
    >
      <Box
        p={3}
        bg="brand.50"
        borderRadius="full"
        mb={3}
        color="brand.500"
      >
        <Icon size={32} />
      </Box>
      {label && (
        <Text fontSize="sm" fontWeight="medium" color="gray.700">
          {label}
        </Text>
      )}
    </Flex>
  )
}

const WhatWeDo = () => {
  const techStack = [
    { icon: Code2, label: 'PHP' },
    { icon: Laptop, label: 'React' },
    { icon: Database, label: 'Java' },
    { icon: Palette, label: 'CSS' },
  ]

  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          {/* Left Column - Image */}
          <Box>
            <Image
              src={aboutImage}
              alt="What We Do"
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
              Experience. Execution. Excellence.
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              mb={8}
              lineHeight="shorter"
            >
              What We Actually Do
            </Heading>

            {/* Tech Stack Icons */}
            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
              gap={4}
              mb={8}
            >
              {techStack.map((tech, index) => (
                <TechIcon key={index} {...tech} />
              ))}
            </Grid>

            {/* Description */}
            <Heading
              as="h5"
              fontSize="lg"
              fontWeight="semibold"
              color="gray.800"
              mb={4}
            >
              PHP Website Development Services
            </Heading>
            <Text fontSize="md" color="gray.600" lineHeight="tall" mb={6}>
              TechHillCity is the partner of choice for many of the world's leading
              enterprises, SMEs and technology challengers. We help businesses elevate
              their value through custom software development, product design, QA and
              consultancy services.
            </Text>

            {/* CTA Button */}
            <Button
              as={RouterLink}
              to="/services"
              size="lg"
              colorScheme="brand"
              bg="brand.500"
              color="white"
              rightIcon={<ArrowRight size={20} />}
              _hover={{
                bg: 'brand.600',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.3s"
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default WhatWeDo

