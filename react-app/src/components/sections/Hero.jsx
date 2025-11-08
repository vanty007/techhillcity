import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/image-banner-home5.png";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  return (
    <Box
      as="section"
      bg="linear-gradient(135deg, #f5f9ff 0%, #e8f4ff 100%)"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl" position="relative">
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          alignItems="center"
          gap={{ base: 8, md: 12 }}
          position="relative"
          minH={{ md: "500px" }}
        >
          {/* Left Column - Text Content */}
          <MotionBox {...fadeInUp} zIndex={2} position="relative">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
              color="brand.500"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
            >
              For Over 10 Years. For Multi Users
            </Text>

            <MotionHeading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="black"
              lineHeight="shorter"
              mb={6}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Enterprise & Consumer <br />
              <Text as="span" color="brand.500">
                Apps Development
              </Text>
            </MotionHeading>

            <MotionText
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="tall"
              mb={8}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We have diversity of professional software engineers with more
              than 10 years of experience in delivering superior products.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Flex gap={4} flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to="/services"
                  size="lg"
                  colorScheme="brand"
                  bg="brand.500"
                  color="white"
                  px={8}
                  rightIcon={<ArrowRight size={20} />}
                  _hover={{
                    bg: "brand.600",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.3s"
                >
                  Our Services
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  variant="outline"
                  colorScheme="brand"
                  borderColor="brand.500"
                  color="brand.500"
                  px={8}
                  _hover={{
                    bg: "brand.50",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s"
                >
                  Get In Touch
                </Button>
              </Flex>
            </MotionBox>
          </MotionBox>

          {/* Right Column - Image (Scaled and Cut off on Desktop) */}
          <MotionBox
            {...fadeInRight}
            display={{ base: "block", md: "none" }}
            order={{ base: -1, md: 0 }}
          >
            <Image
              src={heroImage}
              alt="Enterprise Apps Development"
              w="full"
              h="auto"
              objectFit="contain"
              filter="drop-shadow(0 20px 40px rgba(6, 147, 227, 0.2))"
            />
          </MotionBox>
        </Box>
      </Container>

      {/* Absolute Image for Desktop - Overflows and gets cut off */}
      <MotionBox
        {...fadeInRight}
        position="absolute"
        right="-25%"
        top="10%"
        transform="translateY(-50%) scale(1.5)"
        width="70%"
        display={{ base: "none", md: "block" }}
        zIndex={1}
      >
        <Image
          src={heroImage}
          alt="Enterprise Apps Development"
          w="full"
          h="auto"
          objectFit="contain"
          filter="drop-shadow(0 20px 40px rgba(6, 147, 227, 0.2))"
        />
      </MotionBox>
    </Box>
  );
};

export default Hero;
