import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { MapPin, Mail, Phone } from 'lucide-react'

const ContactInfoCard = ({ icon: Icon, label, value }) => {
  return (
    <Flex
      align="start"
      gap={4}
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      transition="all 0.3s"
      _hover={{
        boxShadow: 'md',
        transform: 'translateY(-2px)',
      }}
      mb={4}
    >
      <Box
        p={3}
        bg="brand.50"
        borderRadius="full"
        color="brand.500"
        flexShrink={0}
      >
        <Icon size={24} />
      </Box>
      <Box>
        <Heading as="h6" size="sm" color="gray.800" mb={1} fontWeight="semibold">
          {label}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {value}
        </Text>
      </Box>
    </Flex>
  )
}

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      label: 'Our Address:',
      value: 'Ajah-Sangotedo, Lagos State',
    },
    {
      icon: Mail,
      label: 'Our Mailbox:',
      value: 'business@techhillcity.com',
    },
    {
      icon: Phone,
      label: 'Our Phone:',
      value: '+2349033805192',
    },
  ]

  return (
    <Box>
      <Text
        fontSize="sm"
        fontWeight="semibold"
        color="brand.500"
        textTransform="uppercase"
        letterSpacing="wider"
        mb={3}
      >
        Contact Details
      </Text>
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight="bold"
        color="gray.800"
        mb={6}
        lineHeight="shorter"
      >
        Contact us
      </Heading>
      <Text fontSize="md" color="gray.600" mb={8} lineHeight="tall">
        Give us a call or drop by anytime, we endeavour to answer all enquiries
        within 24 hours on business days. We will be happy to answer your
        questions.
      </Text>

      {contactDetails.map((detail, index) => (
        <ContactInfoCard key={index} {...detail} />
      ))}
    </Box>
  )
}

export default ContactInfo

