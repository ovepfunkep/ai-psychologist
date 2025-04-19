import { Box, Flex } from '@chakra-ui/react';

const TypingIndicator = () => {
  return (
    <Flex gap={1} alignItems="center" h="24px">
      <Box
        w="6px"
        h="6px"
        bg="blue.500"
        borderRadius="full"
        animation="bounce 1.4s infinite ease-in-out both"
        sx={{
          '@keyframes bounce': {
            '0%, 80%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(-5px)' }
          },
          animationDelay: '0s'
        }}
      />
      <Box
        w="6px"
        h="6px"
        bg="blue.500"
        borderRadius="full"
        animation="bounce 1.4s infinite ease-in-out both"
        sx={{
          '@keyframes bounce': {
            '0%, 80%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(-5px)' }
          },
          animationDelay: '0.16s'
        }}
      />
      <Box
        w="6px"
        h="6px"
        bg="blue.500"
        borderRadius="full"
        animation="bounce 1.4s infinite ease-in-out both"
        sx={{
          '@keyframes bounce': {
            '0%, 80%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(-5px)' }
          },
          animationDelay: '0.32s'
        }}
      />
    </Flex>
  );
};

export default TypingIndicator; 