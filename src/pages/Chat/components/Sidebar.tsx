import { Box, VStack, Text, Button, Divider } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">Previous Sessions</Text>
        <Divider />
        <Button variant="ghost" justifyContent="flex-start" h="auto" p={2}>
          <VStack align="start" spacing={1}>
            <Text>December 15, 2023</Text>
            <Text fontSize="sm" color="gray.500">Topics: Anxiety, Stress</Text>
          </VStack>
        </Button>
        <Button variant="ghost" justifyContent="flex-start" h="auto" p={2}>
          <VStack align="start" spacing={1}>
            <Text>December 12, 2023</Text>
            <Text fontSize="sm" color="gray.500">Topics: Sleep, Routine</Text>
          </VStack>
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar; 