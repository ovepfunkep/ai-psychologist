import { Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={6} textAlign="center">
        <Heading size="2xl">404</Heading>
        <Text fontSize="xl">Page not found</Text>
        <Link to="/">
          <Button colorScheme="blue">Go Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound; 