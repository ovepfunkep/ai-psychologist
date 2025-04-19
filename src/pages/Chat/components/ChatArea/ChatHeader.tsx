import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const ChatHeader = () => {
  return (
    <Box p={4} borderBottom="1px" borderColor="gray.200" bg="white">
      <Flex direction="column">
        <Heading size="md" color="gray.800">
          AI Therapist
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Online • Here to help
        </Text>
      </Flex>
    </Box>
  );
};

export default ChatHeader; 