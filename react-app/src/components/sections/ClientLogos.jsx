import { Box, Container, Heading, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import client1 from '../../assets/images/client1.svg'
import client2 from '../../assets/images/client2.svg'
import client3 from '../../assets/images/client3.svg'
import client4 from '../../assets/images/client4.png'
import client5 from '../../assets/images/client5.svg'
import client6 from '../../assets/images/client6.svg'

const ClientLogos = () => {
  const clients = [
    { logo: client1, name: 'Client 1' },
    { logo: client2, name: 'Client 2' },
    { logo: client3, name: 'Client 3' },
    { logo: client4, name: 'Client 4' },
    { logo: client5, name: 'Client 5' },
    { logo: client6, name: 'Client 6' },
  ]

  return (
    <Box as="section" py={{ base: 12, md: 16 }} bg="white">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="semibold"
          color="gray.700"
          textAlign="center"
          mb={10}
        >
          Trusted by Leading Companies
        </Heading>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="80px"
                opacity={0.6}
                transition="opacity 0.3s"
                _hover={{ opacity: 1 }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  maxW="120px"
                  maxH="60px"
                  objectFit="contain"
                  filter="grayscale(100%)"
                  _hover={{ filter: 'grayscale(0%)' }}
                  transition="filter 0.3s"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}

export default ClientLogos

