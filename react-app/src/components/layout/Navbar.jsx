import { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Container,
  Button,
  IconButton,
  Link,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Menu, Phone, Mail, Clock, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box as="header" w="full" position="relative">
      {/* Top Banner */}
      <Box
        bg="brand.500"
        color="white"
        py={{ base: 0, md: 2 }}
        display={{ base: "none", md: "block" }}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Flex gap={6} align="center" fontSize="sm">
              <Link
                as="a"
                href="mailto:business@techhillcity.com"
                color="white"
                _hover={{ color: "black" }}
                _active={{ color: "black" }}
                _focus={{ color: "black" }}
              >
                <Flex align="center" gap={2}>
                  <Mail size={16} />
                  <Text>business@techhillcity.com</Text>
                </Flex>
              </Link>
              <Flex align="center" gap={2}>
                <Clock size={16} />
                <Text>Mon-Fri: 9:00 AM - 6:00 PM</Text>
              </Flex>
            </Flex>
            <Link
              as="a"
              href="tel:+2349033805192"
              color="white"
              variant={"plain"}
              _hover={{ color: "black" }}
              _active={{ color: "black" }}
              _focus={{ color: "black" }}
            >
              <Flex align="center" gap={2}>
                <Phone size={16} />
                <Text>+234 (903) 380-5192</Text>
              </Flex>
            </Link>
          </Flex>
        </Container>
      </Box>

      {/* Main Navigation */}
      <Box
        bg="white"
        boxShadow={isSticky ? "md" : "sm"}
        position={isSticky ? "fixed" : "relative"}
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        transition="all 0.3s ease"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" py={4}>
            {/* Logo */}
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="brand.500"
                letterSpacing="tight"
                textTransform="uppercase"
              >
                TechHillCity
              </Text>
            </Link>

            {/* Desktop Menu */}
            <Flex
              as="nav"
              display={{ base: "none", md: "flex" }}
              gap={8}
              align="center"
            >
              <Link
                as={RouterLink}
                to="/"
                fontWeight="medium"
                color="gray.700"
                _hover={{ color: "brand.500" }}
                transition="color 0.2s"
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/about"
                fontWeight="medium"
                color="gray.700"
                _hover={{ color: "brand.500" }}
                transition="color 0.2s"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <Box
                position="relative"
                onMouseEnter={() => {
                  if (servicesTimeoutRef.current) {
                    clearTimeout(servicesTimeoutRef.current);
                  }
                  setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  if (servicesTimeoutRef.current) {
                    clearTimeout(servicesTimeoutRef.current);
                  }
                  servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 3000);
                }}
                onTouchStart={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(true)}
              >
                <Flex
                  align="center"
                  gap={1}
                  cursor="pointer"
                  fontWeight="medium"
                  color="gray.700"
                  _hover={{ color: "brand.500" }}
                  transition="color 2s"
                >
                  <Text>Services</Text>
                  <ChevronDown size={16} />
                </Flex>
                {isServicesOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left={0}
                    mt={2}
                    bg="white"
                    boxShadow="lg"
                    borderRadius="md"
                    minW="200px"
                    py={2}
                    zIndex={10}
                  >
                    <Link
                      as={RouterLink}
                      to="/services/it"
                      display="block"
                      px={4}
                      py={2}
                      color="gray.700"
                      _hover={{ bg: "gray.50", color: "brand.500" }}
                      transition="all 0.2s"
                    >
                      IT Services
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/services/web"
                      display="block"
                      px={4}
                      py={2}
                      color="gray.700"
                      _hover={{ bg: "gray.50", color: "brand.500" }}
                      transition="all 0.2s"
                    >
                      Web Development
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/services/mobile"
                      display="block"
                      px={4}
                      py={2}
                      color="gray.700"
                      _hover={{ bg: "gray.50", color: "brand.500" }}
                      transition="all 0.2s"
                    >
                      Mobile Development
                    </Link>
                  </Box>
                )}
              </Box>

              <Link
                as={RouterLink}
                to="/projects"
                fontWeight="medium"
                color="gray.700"
                _hover={{ color: "brand.500" }}
                transition="color 0.2s"
              >
                Projects
              </Link>
              <Link
                as={RouterLink}
                to="/contact"
                fontWeight="medium"
                color="gray.700"
                _hover={{ color: "brand.500" }}
                transition="color 0.2s"
              >
                Contact
              </Link>
            </Flex>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              variant="ghost"
              colorScheme="brand"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </IconButton>
          </Flex>

          {/* Mobile Menu */}
          {isOpen && (
            <Box
              display={{ base: "block", md: "none" }}
              pb={4}
              borderTop="1px"
              borderColor="gray.200"
              mt={2}
            >
              <Stack gap={4} mt={4}>
                <Link
                  as={RouterLink}
                  to="/"
                  fontWeight="medium"
                  color="gray.700"
                  _hover={{ color: "brand.500" }}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  as={RouterLink}
                  to="/about"
                  fontWeight="medium"
                  color="gray.700"
                  _hover={{ color: "brand.500" }}
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Box>
                  <Text
                    fontWeight="medium"
                    color="gray.700"
                    mb={2}
                    as="button"
                    display="block"
                    width="100%"
                    textAlign="left"
                    background="none"
                    border="none"
                    cursor="pointer"
                    onClick={() => setIsServicesOpen((v) => !v)}
                  >
                    Services
                  </Text>
                  {isServicesOpen && (
                    <Stack gap={2} pl={4}>
                      <Link
                        as={RouterLink}
                        to="/services/it"
                        fontSize="sm"
                        color="gray.600"
                        _hover={{ color: "brand.500" }}
                        onClick={() => {
                          setIsServicesOpen(false);
                          toggleMenu();
                        }}
                      >
                        IT Services
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/services/web"
                        fontSize="sm"
                        color="gray.600"
                        _hover={{ color: "brand.500" }}
                        onClick={() => {
                          setIsServicesOpen(false);
                          toggleMenu();
                        }}
                      >
                        Web Development
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/services/mobile"
                        fontSize="sm"
                        color="gray.600"
                        _hover={{ color: "brand.500" }}
                        onClick={() => {
                          setIsServicesOpen(false);
                          toggleMenu();
                        }}
                      >
                        Mobile Development
                      </Link>
                    </Stack>
                  )}
                </Box>
                <Link
                  as={RouterLink}
                  to="/projects"
                  fontWeight="medium"
                  color="gray.700"
                  _hover={{ color: "brand.500" }}
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <Link
                  as={RouterLink}
                  to="/contact"
                  fontWeight="medium"
                  color="gray.700"
                  _hover={{ color: "brand.500" }}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </Stack>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
