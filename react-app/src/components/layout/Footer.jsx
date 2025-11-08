import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, Flex, Grid, Text, Link, Stack, IconButton } from '@chakra-ui/react'
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer" bg="brand.500" color="white" pt={16} pb={8}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={8}
          mb={12}
        >
          {/* Company Info */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="brand.400" mb={4}>
              TechHillCity
            </Text>
            <Text fontSize="sm" lineHeight="tall" mb={6}>
              We have diversity of professional software engineers with more
              than 10 years of experience in delivering superior products.
            </Text>
            {/* Social Media Icons */}
            <Flex gap={2}>
              <IconButton
                as="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                size="sm"
                variant="ghost"
                colorScheme="whiteAlpha"
                color="white"
                _hover={{ bg: "brand.500", color: "brand.400" }}
              >
                <Facebook size={18} />
              </IconButton>
              <IconButton
                as="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                size="sm"
                variant="ghost"
                colorScheme="whiteAlpha"
                color="white"
                _hover={{ bg: "brand.500", color: "brand.400" }}
              >
                <Twitter size={18} />
              </IconButton>
              <IconButton
                as="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                size="sm"
                variant="ghost"
                colorScheme="whiteAlpha"
                color="white"
                _hover={{ bg: "brand.500", color: "brand.400" }}
              >
                <Linkedin size={18} />
              </IconButton>
              <IconButton
                as="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                size="sm"
                variant="ghost"
                colorScheme="whiteAlpha"
                color="white"
                _hover={{ bg: "brand.500", color: "brand.400" }}
              >
                <Github size={18} />
              </IconButton>
            </Flex>
          </Box>

          {/* Quick Links */}
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Quick Links
            </Text>
            <Stack gap={3}>
              <Link
                as={RouterLink}
                to="/"
                fontSize="sm"
                color="white"
                _hover={{ color: "brand.400" }}
                transition="color 0.2s"
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/about"
                fontSize="sm"
                color="white"
                _hover={{ color: "brand.400" }}
                transition="color 0.2s"
              >
                About Us
              </Link>
              <Link
                as={RouterLink}
                to="/services"
                fontSize="sm"
                color="white"
                _hover={{ color: "brand.400" }}
                transition="color 0.2s"
              >
                Services
              </Link>
              <Link
                as={RouterLink}
                to="/projects"
                fontSize="sm"
                color="white"
                _hover={{ color: "brand.400" }}
                transition="color 0.2s"
              >
                Projects
              </Link>
              <Link
                as={RouterLink}
                to="/contact"
                fontSize="sm"
                color="white"
                _hover={{ color: "brand.400" }}
                transition="color 0.2s"
              >
                Contact
              </Link>
            </Stack>
          </Box>

          {/* Services */}
          <Box>
            <Text fontSize="lg" fontWeight="semibold" color="white" mb={4}>
              Services
            </Text>
            <Stack gap={3}>
              <Link
                as={RouterLink}
                to="/services/it"
                fontSize="sm"
                color="white"
                _hover={{ color: "brand.400" }}
                transition="color 0.2s"
              >
                IT Services
              </Link>
              <Link
                as={RouterLink}
                to="/services/web"
                fontSize="sm"
                color="white"
                _hover={{ color: "brand.400" }}
                transition="color 0.2s"
              >
                Web Development
              </Link>
              <Link
                as={RouterLink}
                to="/services/mobile"
                fontSize="sm"
                color="white"
                _hover={{ color: "brand.400" }}
                transition="color 0.2s"
              >
                Mobile Development
              </Link>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Text fontSize="lg" fontWeight="semibold" color="white" mb={4}>
              Contact Us
            </Text>
            <Stack gap={4}>
              <Flex gap={3} align="start">
                <MapPin size={18} style={{ marginTop: "2px", flexShrink: 0 }} />
                <Text fontSize="sm" lineHeight="tall">
                  Ajah-Sangotedo, Lagos State
                </Text>
              </Flex>
              <Flex gap={3} align="center">
                <Phone size={18} style={{ flexShrink: 0 }} />
                <Link
                  href="tel:+2349033805192"
                  fontSize="sm"
                  color="white"
                  _hover={{ color: "brand.400" }}
                >
                  +234 (903) 380-5192
                </Link>
              </Flex>
              <Flex gap={3} align="center">
                <Mail size={18} style={{ flexShrink: 0 }} />
                <Link
                  href="mailto:business@techhillcity.com"
                  fontSize="sm"
                  color="white"
                  _hover={{ color: "brand.400" }}
                >
                  business@techhillcity.com
                </Link>
              </Flex>
            </Stack>
          </Box>
        </Grid>

        {/* Copyright */}
        <Box borderTop="1px" borderColor="gray.700" pt={8} textAlign="center">
          <Text fontSize="sm" color="gray.400">
            © {currentYear} TechHillCity. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer

