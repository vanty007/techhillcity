import { Box, Container, Heading, Flex, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const PageHeader = ({ title, breadcrumbs = [], backgroundImage }) => {
  return (
    <Box
      as="section"
      position="relative"
      py={{ base: 16, md: 20 }}
      bg={backgroundImage ? `url(${backgroundImage})` : 'brand.500'}
      bgSize="cover"
      bgPosition="center"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: backgroundImage
          ? 'linear-gradient(135deg, rgba(6, 147, 227, 0.9) 0%, rgba(6, 147, 227, 0.7) 100%)'
          : 'transparent',
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex direction="column" align="center" textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            color="white"
            mb={4}
          >
            {title}
          </Heading>

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <Flex
              align="center"
              gap={2}
              flexWrap="wrap"
              justify="center"
              fontSize="sm"
            >
              {breadcrumbs.map((crumb, index) => (
                <Flex key={index} align="center" gap={2}>
                  {crumb.href ? (
                    <Link
                      as={RouterLink}
                      to={crumb.href}
                      color="whiteAlpha.900"
                      _hover={{ color: 'white', textDecoration: 'underline' }}
                      transition="color 0.2s"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <Text color="whiteAlpha.700">{crumb.label}</Text>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight size={16} color="rgba(255, 255, 255, 0.7)" />
                  )}
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default PageHeader

