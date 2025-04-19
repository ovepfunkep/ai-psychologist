import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Dashboard</Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
        <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
          <Heading size="md" mb={4}>Session Stats</Heading>
          <Text>Total Sessions: 12</Text>
          <Text>Total Hours: 8.5</Text>
        </Box>
        <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
          <Heading size="md" mb={4}>Progress</Heading>
          <Text>Goals Completed: 5</Text>
          <Text>Current Streak: 3 days</Text>
        </Box>
        <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
          <Heading size="md" mb={4}>Mood Tracking</Heading>
          <Text>Average Mood: Positive</Text>
          <Text>Mood Entries: 15</Text>
        </Box>
      </Grid>
    </Container>
  );
};

export default Dashboard; 