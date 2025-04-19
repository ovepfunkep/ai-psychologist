import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={8} textAlign="center">
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, primary.main, primary.light)"
          bgClip="text"
        >
          Your AI Therapist
        </Heading>
        
        <Text fontSize="xl" color="gray.600">
          Experience personalized mental health support through AI-powered conversations.
          Available 24/7, confidential, and focused on your well-being.
        </Text>

        <Link to="/chat">
          <Button
            size="lg"
            colorScheme="blue"
            px={8}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Start Chatting
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Landing; 