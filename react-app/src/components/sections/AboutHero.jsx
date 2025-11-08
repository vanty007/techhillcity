import { Box, Container, Grid, Heading, Text, Image } from '@chakra-ui/react'
import imageBox1 from '../../assets/images/image-box1.jpg'
import imageBox2 from '../../assets/images/image-box2.jpg'
import imageBox3 from '../../assets/images/image-box3.jpg'
import imageBox4 from '../../assets/images/image-box4.jpg'

const ImageBox = ({ image, title }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      cursor="pointer"
      h="200px"
      _hover={{
        '& .overlay': {
          opacity: 1,
        },
      }}
    >
      <Image
        src={image}
        alt={title}
        w="full"
        h="full"
        objectFit="cover"
        transition="transform 0.3s"
        _hover={{
          transform: 'scale(1.1)',
        }}
      />
      <Box
        className="overlay"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(6, 147, 227, 0.9)"
        opacity={0}
        transition="opacity 0.3s"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h4" size="md" color="white" textAlign="center">
          {title}
        </Heading>
      </Box>
    </Box>
  )
}

const AboutHero = () => {
  const imageBoxes = [
    { image: imageBox1, title: 'Innovative' },
    { image: imageBox2, title: 'Trusted Partner' },
    { image: imageBox3, title: 'Creativity' },
    { image: imageBox4, title: 'Flexibility' },
  ]

  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="white">
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          {/* Left Column - Text Content */}
          <Box>
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
              lineHeight="shorter"
            >
              Your Partner for
              <br />
              Software Innovation
            </Heading>
            <Text fontSize="md" color="gray.600" lineHeight="tall" mb={4}>
              TechHillCity is the partner of choice for many of the world's leading
              enterprises, SMEs and technology challengers. We help businesses elevate
              their value through custom software development, product design, QA and
              consultancy services.
            </Text>
            <Text
              fontSize="md"
              color="gray.800"
              lineHeight="tall"
              fontWeight="medium"
              fontStyle="italic"
            >
              We can help to maintain and modernize your IT infrastructure and solve
              various infrastructure-specific issues a business may face.
            </Text>
          </Box>

          {/* Right Column - Image Gallery Grid */}
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {imageBoxes.map((item, index) => (
              <ImageBox key={index} {...item} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutHero

