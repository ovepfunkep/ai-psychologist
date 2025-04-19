import React from 'react';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} textAlign="center">
        <Heading size="2xl" color="primary.main">
          404 - Page Not Found
        </Heading>
        <Text fontSize="xl" color="text.secondary">
          The page you're looking for doesn't exist or has been moved.
        </Text>
        <Button
          size="lg"
          colorScheme="blue"
          onClick={() => navigate('/')}
        >
          Go Back Home
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFound; 