import React from 'react';
import { Box, Flex, Input, IconButton, VStack, Text } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';

const ChatArea = () => {
  return (
    <Flex direction="column" h="100%" bg="white">
      {/* Messages Area */}
      <VStack flex="1" p={4} overflowY="auto" spacing={4} align="stretch">
        <Box alignSelf="flex-start" maxW="70%" bg="gray.100" p={3} borderRadius="lg">
          <Text>Hello! How are you feeling today?</Text>
        </Box>
      </VStack>

      {/* Input Area */}
      <Box p={4} borderTop="1px" borderColor="gray.200">
        <Flex>
          <Input
            placeholder="Type your message..."
            mr={2}
            borderRadius="full"
          />
          <IconButton
            aria-label="Send message"
            icon={<IoSend />}
            colorScheme="blue"
            borderRadius="full"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default ChatArea; 