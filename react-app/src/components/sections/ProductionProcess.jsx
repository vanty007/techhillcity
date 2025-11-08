import { useState } from 'react'
import { Box, Container, Grid, Heading, Text, Button, Flex } from '@chakra-ui/react'

const ProductionProcess = () => {
  const [activeTab, setActiveTab] = useState('analysis')

  const tabs = [
    {
      id: 'analysis',
      label: 'Analysis',
      content:
        "TechHillCity is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services. Our product design service lets you prototype, test and validate your ideas.",
    },
    {
      id: 'design',
      label: 'Design',
      content:
        'While integrating the security with the DevOps approach has always been of high demand, this requires a completely different range of processes and tools. DevOps is already known to boast of an agile development methodology. Now when the inputs of the security experts I\'ll be brought in a collaborative environment, the project will have an array of effective security safeguards.',
    },
    {
      id: 'testing',
      label: 'Testing',
      content:
        'In spite of disturbing the agile development process of the DevOps approach, the additional security inputs only enhance the safeguards and reliability of the project. So, in a way, DevSecOps will only extend the benefits of a DevOps approach further with security inputs. DevOps is already known to boast of an agile development methodology.',
    },
  ]

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)

  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 12, lg: 16 }}
        >
          {/* Left Column - Tabs */}
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
              mb={8}
              lineHeight="shorter"
            >
              We Organize Our <br />
              Production Process
            </Heading>

            {/* Tab Buttons */}
            <Flex gap={4} mb={8} flexWrap="wrap">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? 'solid' : 'outline'}
                  colorScheme="brand"
                  bg={activeTab === tab.id ? 'brand.500' : 'transparent'}
                  color={activeTab === tab.id ? 'white' : 'brand.500'}
                  borderColor="brand.500"
                  _hover={{
                    bg: activeTab === tab.id ? 'brand.600' : 'brand.50',
                  }}
                  transition="all 0.3s"
                >
                  {tab.label}
                </Button>
              ))}
            </Flex>

            {/* Tab Content */}
            <Box
              minH="150px"
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="sm"
            >
              <Text fontSize="md" color="gray.700" lineHeight="tall">
                {activeTabContent?.content}
              </Text>
            </Box>
          </Box>

          {/* Right Column - Empty for now (can add image or other content later) */}
          <Box />
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductionProcess

