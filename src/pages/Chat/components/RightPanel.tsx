import React from 'react';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';

const RightPanel = () => {
  return (
    <Box p={4}>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="md" mb={4}>Current Session</Heading>
          <Text>Duration: 0:00</Text>
          <Text>Messages: 0</Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>Mood Tracker</Heading>
          <Text>Current Mood: Not Set</Text>
          <Button size="sm" colorScheme="blue" mt={2}>
            Update Mood
          </Button>
        </Box>

        <Box>
          <Heading size="md" mb={4}>Session Goals</Heading>
          <Text color="gray.600">No goals set for this session</Text>
          <Button size="sm" colorScheme="blue" mt={2}>
            Add Goal
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default RightPanel; 