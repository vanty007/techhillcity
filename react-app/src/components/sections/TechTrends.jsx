import { useState, useEffect, useRef } from 'react'
import { Box, Container, Grid, Heading, Text, Flex, Image } from '@chakra-ui/react'
import imageBox1 from '../../assets/images/image-box1.jpg'
import imageBox2 from '../../assets/images/image-box2.jpg'
import imageBox3 from '../../assets/images/image-box3.jpg'
import imageBox4 from '../../assets/images/image-box4.jpg'

const ProgressBar = ({ label, percentage }) => {
  const [width, setWidth] = useState(0)
  const progressRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(percentage), 200)
        }
      },
      { threshold: 0.3 }
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => observer.disconnect()
  }, [percentage])

  return (
    <Box mb={6} ref={progressRef}>
      <Flex justify="space-between" mb={2}>
        <Text
          fontSize="sm"
          fontWeight="medium"
          color="gray.700"
          textTransform="uppercase"
        >
          {label}
        </Text>
        <Text fontSize="sm" fontWeight="semibold" color="brand.500">
          {percentage}%
        </Text>
      </Flex>
      {/* Custom Progress Bar for Chakra v3 */}
      <Box
        h="8px"
        bg="gray.200"
        borderRadius="full"
        overflow="hidden"
      >
        <Box
          h="full"
          w={`${width}%`}
          bg="brand.500"
          borderRadius="full"
          transition="width 1.5s ease-out"
        />
      </Box>
    </Box>
  )
}

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

const TechTrends = () => {
  const progressData = [
    { label: 'Mobile Development', percentage: 99 },
    { label: 'Web Development', percentage: 90 },
    { label: 'UI/UX Design', percentage: 99.9 },
  ]

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
          {/* Left Column - Progress Bars */}
          <Box>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="brand.500"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              Technology Index
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              mb={6}
              lineHeight="shorter"
            >
              Improve and Innovate
              <br />
              with the Tech Trends
            </Heading>
            <Text fontSize="md" color="gray.600" lineHeight="tall" mb={8}>
              We hire and build your own remote dedicated development teams tailored to your
              specific needs.
            </Text>

            {progressData.map((item, index) => (
              <ProgressBar key={index} {...item} />
            ))}
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

export default TechTrends

