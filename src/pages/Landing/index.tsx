import React from 'react';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} textAlign="center">
        <Heading size="2xl" color="primary.main">
          Welcome to AI Psychologist
        </Heading>
        <Text fontSize="xl" color="text.secondary">
          Your personal AI-powered mental health companion
        </Text>
        <Button
          size="lg"
          colorScheme="blue"
          onClick={() => navigate('/chat')}
        >
          Start Chatting
        </Button>
      </VStack>
    </Container>
  );
};

export default Landing; 