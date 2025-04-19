import { Box, VStack, Text, Divider } from '@chakra-ui/react';

const RightPanel = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">Session Info</Text>
        <Divider />
        <Text>Duration: 25 minutes</Text>
        <Text>Topics Discussed:</Text>
        <VStack align="start" pl={4} spacing={2}>
          <Text>• Anxiety Management</Text>
          <Text>• Stress Relief</Text>
          <Text>• Daily Routines</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default RightPanel; 