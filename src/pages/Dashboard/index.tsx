import React from 'react';
import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading size="xl" color="primary.main">
          Your Dashboard
        </Heading>
        
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
          {/* Session Stats */}
          <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={4}>Session Stats</Heading>
            <Text>Total Sessions: 0</Text>
            <Text>Average Duration: 0 min</Text>
          </Box>

          {/* Mood Tracker */}
          <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={4}>Mood Tracker</Heading>
            <Text>Average Mood: N/A</Text>
            <Text>Mood Trend: Stable</Text>
          </Box>

          {/* Goals Progress */}
          <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={4}>Goals Progress</Heading>
            <Text>Active Goals: 0</Text>
            <Text>Completed Goals: 0</Text>
          </Box>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Dashboard; 