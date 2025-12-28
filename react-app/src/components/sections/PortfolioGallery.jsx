import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Image as ChakraImage,
  Flex,
  Button,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "../../assets/images/project1-720x564.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3-720x662.jpg";
import project4 from "../../assets/images/project4.jpg";
import project5 from "../../assets/images/project5-720x545.jpg";
import project6 from "../../assets/images/project6.jpg";
import project7 from "../../assets/images/project7-720x584.jpg";
import project8 from "../../assets/images/project8.jpg";
import project9 from "../../assets/images/project9.jpg";
import project10 from "../../assets/images/project10.jpg";
import project11 from "../../assets/images/project11.jpg";
import project12 from "../../assets/images/project12-720x662.jpg";

const MotionBox = motion.create(Box);

const ProjectCard = ({ image, title, categories, index }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      cursor="pointer"
      bg="white"
      boxShadow="md"
      _hover={{
        "& .overlay": {
          opacity: 1,
        },
        "& .image": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box position="relative" overflow="hidden" h="300px">
        <ChakraImage
          className="image"
          src={image}
          alt={title}
          w="full"
          h="full"
          objectFit="cover"
          transition="transform 0.3s"
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
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={6}
          color="white"
        >
          <Heading as="h4" size="md" mb={2} textAlign="center">
            {title}
          </Heading>
          <Text fontSize="sm" textAlign="center" opacity={0.9}>
            {categories.join(" / ")}
          </Text>
        </Box>
      </Box>
    </MotionBox>
  );
};

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      image: project1,
      title: "App for Virtual Reality",
      categories: ["Design", "Ideas"],
    },
    {
      id: 2,
      image: project2,
      title: "Mobile Coin View App",
      categories: ["Development"],
    },
    {
      id: 3,
      image: project3,
      title: "Analysis of Security",
      categories: ["Ideas", "Technology"],
    },
    {
      id: 4,
      image: project4,
      title: "eCommerce Website",
      categories: ["Design", "Ideas"],
    },
    {
      id: 5,
      image: project5,
      title: "App for Health",
      categories: ["Development"],
    },
    {
      id: 6,
      image: project6,
      title: "Responsive Design",
      categories: ["Development", "Ideas"],
    },
    {
      id: 7,
      image: project7,
      title: "Social Media App",
      categories: ["Design", "Technology"],
    },
    {
      id: 8,
      image: project8,
      title: "Basics Project",
      categories: ["Design", "Development"],
    },
    {
      id: 9,
      image: project9,
      title: "Your New Reality",
      categories: ["Design", "Technology"],
    },
    {
      id: 10,
      image: project10,
      title: "Immersive Experience",
      categories: ["Technology"],
    },
    {
      id: 11,
      image: project11,
      title: "Corporate Website",
      categories: ["Development"],
    },
    {
      id: 12,
      image: project12,
      title: "Crypto App Project",
      categories: ["Ideas", "Technology"],
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "ideas", label: "Ideas" },
    { id: "technology", label: "Technology" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.some((cat) => cat.toLowerCase() === activeFilter)
        );

  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="white">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="brand.500"
            textTransform="uppercase"
            letterSpacing="wider"
            mb={3}
          >
            Latest Projects
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="gray.800"
            mb={6}
          >
            Our Projects
          </Heading>
          <Text
            fontSize="md"
            color="gray.600"
            maxW="2xl"
            mx="auto"
            lineHeight="tall"
          >
            Software development outsourcing is just a tool to achieve business
            goals. But there is no way to get worthwhile results without
            cooperation and trust between a client company.
          </Text>
        </Box>

        {/* Filter Buttons */}
        <Flex justify="center" gap={4} mb={12} flexWrap="wrap">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "solid" : "outline"}
              colorScheme="brand"
              bg={activeFilter === filter.id ? "brand.500" : "transparent"}
              color={activeFilter === filter.id ? "white" : "brand.500"}
              borderColor="brand.500"
              _hover={{
                bg: activeFilter === filter.id ? "brand.600" : "brand.50",
              }}
              transition="all 0.3s"
            >
              {filter.label}
            </Button>
          ))}
        </Flex>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <Grid
            key={activeFilter}
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </Grid>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default PortfolioGallery;
