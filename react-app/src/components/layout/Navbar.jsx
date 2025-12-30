import { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Container,
  IconButton,
  Link,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Menu, Phone, Mail, Clock, X, ChevronDown } from "lucide-react";
import logoImage from "../../assets/images/logo.png";

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
        bg="white"
        color="black"
        py={{ base: 0, md: 2 }}
        display={{ base: "none", md: "block" }}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Flex gap={6} align="center" fontSize="sm">
              <Link
                as="a"
                href="mailto:business@techhillcity.com"
                color="black"
                _hover={{ textDecoration: "underline" }}
                _active={{ textDecoration: "underline" }}
                _focus={{ textDecoration: "underline" }}
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
              color="black"
              variant={"plain"}
              _hover={{ color: "brand.500" }}
              _active={{ color: "brand.500" }}
              _focus={{ color: "brand.500" }}
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
        bg="brand.500"
        boxShadow={isSticky ? "md" : "sm"}
        position={isSticky ? "fixed" : "relative"}
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        transition="all 0.3s ease"
      >
        <Container maxW="container.xl">
          <Flex
            justify="space-between"
            align="center"
            py={4}
            maxHeight={"80px"}
            overflow={"visible"}
          >
            {/* Logo */}
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
              <Image
                src={logoImage}
                alt="Tech Hill City International Ltd"
                h={{ base: "40px", md: "80px" }}
                w="auto"
                backgroundClip={"content-box"}
              />
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
                color="white"
                _hover={{ opacity: 0.8 }}
                transition="color 0.2s"
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/about"
                fontWeight="medium"
                color="white"
                _hover={{ opacity: 0.8 }}
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
                  servicesTimeoutRef.current = setTimeout(
                    () => setIsServicesOpen(false),
                    3000
                  );
                }}
                onTouchStart={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(true)}
              >
                <Flex
                  align="center"
                  gap={1}
                  cursor="pointer"
                  fontWeight="medium"
                  color="white"
                  _hover={{ opacity: 0.8 }}
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
                    zIndex={10000}
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
                color="white"
                _hover={{ opacity: 0.8 }}
                transition="color 0.2s"
              >
                Projects
              </Link>
              <Link
                as={RouterLink}
                to="/contact"
                fontWeight="medium"
                color="white"
                _hover={{ opacity: 0.8 }}
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
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
              _active={{ bg: "whiteAlpha.300" }}
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
              borderColor="white"
              mt={2}
            >
              <Stack gap={4} mt={4}>
                <Link
                  as={RouterLink}
                  to="/"
                  fontWeight="medium"
                  color="white"
                  _hover={{ opacity: 0.8 }}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  as={RouterLink}
                  to="/about"
                  fontWeight="medium"
                  color="white"
                  _hover={{ opacity: 0.8 }}
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Box>
                  <Text
                    fontWeight="medium"
                    color="white"
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
                        color="white"
                        _hover={{ opacity: 0.8 }}
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
                        color="white"
                        _hover={{ opacity: 0.8 }}
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
                        color="white"
                        _hover={{ opacity: 0.8 }}
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
                  color="white"
                  _hover={{ opacity: 0.8 }}
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <Link
                  as={RouterLink}
                  to="/contact"
                  fontWeight="medium"
                  color="white"
                  _hover={{ opacity: 0.8 }}
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
