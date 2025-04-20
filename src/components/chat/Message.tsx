import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { MessageProps } from './types';

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isAI = message.sender === 'ai';

  return (
    <Box
      display="flex"
      justifyContent={isAI ? 'flex-start' : 'flex-end'}
      mb={4}
    >
      <Box
        p={4}
        maxW="70%"
        bg={isAI ? 'blue.50' : 'green.50'}
        borderRadius="lg"
        boxShadow="sm"
      >
        <Text>{message.content}</Text>
        <Text
          fontSize="xs"
          color="gray.500"
          mt={2}
        >
          {new Date(message.timestamp).toLocaleTimeString()}
        </Text>
      </Box>
    </Box>
  );
}; 