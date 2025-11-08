import { Box, Text } from '@chakra-ui/react'

export const Field = ({ label, children, invalid, errorText, required }) => {
  return (
    <Box>
      {label && (
        <Text
          as="label"
          fontSize="sm"
          fontWeight="medium"
          color="gray.700"
          mb={2}
          display="block"
        >
          {label}
          {required && (
            <Text as="span" color="red.500" ml={1}>
              *
            </Text>
          )}
        </Text>
      )}
      {children}
      {invalid && errorText && (
        <Text fontSize="sm" color="red.500" mt={1}>
          {errorText}
        </Text>
      )}
    </Box>
  )
}

