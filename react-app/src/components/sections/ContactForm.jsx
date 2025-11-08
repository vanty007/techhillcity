import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Heading,
  Text,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { Field } from '../ui/field'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    console.log('Form data:', data)
    
    // Reset form after submission
    reset()
    setIsSubmitting(false)
    
    // TODO: Replace with actual API call
    alert('Message sent successfully! We will get back to you soon.')
  }

  return (
    <Box
      bg="gray.50"
      p={{ base: 6, md: 8 }}
      borderRadius="xl"
      boxShadow="lg"
    >
      <Heading as="h2" size="lg" color="gray.800" mb={2}>
        Ready to Get Started?
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={6}>
        Your email address will not be published. Required fields are marked *
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={4} align="stretch">
          <Field
            label="Your Name"
            invalid={!!errors.name}
            errorText={errors.name?.message}
            required
          >
            <Input
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
              placeholder="Your Name *"
              size="lg"
              bg="white"
            />
          </Field>

          <Field
            label="Your Email"
            invalid={!!errors.email}
            errorText={errors.email?.message}
            required
          >
            <Input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              placeholder="Your Email *"
              size="lg"
              bg="white"
            />
          </Field>

          <Field
            label="Message"
            invalid={!!errors.message}
            errorText={errors.message?.message}
          >
            <Textarea
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
              placeholder="Message..."
              rows={6}
              size="lg"
              bg="white"
            />
          </Field>

          <Button
            type="submit"
            size="lg"
            colorScheme="brand"
            bg="brand.500"
            color="white"
            _hover={{
              bg: 'brand.600',
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            transition="all 0.3s"
            loading={isSubmitting}
            loadingText="Sending..."
            w={{ base: 'full', md: 'auto' }}
            alignSelf={{ base: 'stretch', md: 'flex-start' }}
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default ContactForm

