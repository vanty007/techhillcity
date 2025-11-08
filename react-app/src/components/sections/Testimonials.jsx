import { Box, Container, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testi1 from "../../assets/images/testi1.png";
import testi2 from "../../assets/images/sprinkle.png";
import bgMapDark from "../../assets/images/bg-map-dark.jpg";

const TestimonialCard = ({ image, name, role, quote }) => {
  return (
    <Box
      bg="white"
      p={8}
      mx={10}
      borderRadius="xl"
      boxShadow="lg"
      position="relative"
      h="full"
    >
      <Flex direction="column" h="full">
        <Flex align="center" gap={4} mb={6} position="relative" zIndex={1}>
          <Image
            src={image}
            alt={name}
            w="60px"
            h="60px"
            borderRadius="full"
            objectFit="cover"
            border="3px solid"
            borderColor="brand.500"
          />
          <Box>
            <Heading as="h4" size="sm" color="gray.800" mb={1}>
              {name}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {role}
            </Text>
          </Box>
        </Flex>

        <Text
          fontSize="md"
          color="gray.700"
          lineHeight="tall"
          fontStyle="italic"
        >
          {quote}
        </Text>
      </Flex>
    </Box>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: testi1,
      name: "Transhaul Logistic Technologies",
      role: "Manager of Company",
      quote:
        "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.",
    },
    {
      image: testi2,
      name: "The Service Excellence Mentor",
      role: "CEO of Company",
      quote:
        "Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.",
    },
  ];

  return (
    <Box as="section" py={{ base: 16, md: 20 }}>
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
            Our Clients
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="gray.800"
          >
            We are Trusted <br />
            Globally
          </Heading>
        </Box>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          style={{
            paddingBottom: "20px",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;
