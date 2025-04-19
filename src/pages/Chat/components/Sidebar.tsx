import React from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading size="md" mb={2}>Chat History</Heading>
        <Button variant="ghost" justifyContent="flex-start" h="auto" py={2}>
          Session #1 - Jan 15, 2024
        </Button>
        <Button variant="ghost" justifyContent="flex-start" h="auto" py={2}>
          Session #2 - Jan 16, 2024
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar; 