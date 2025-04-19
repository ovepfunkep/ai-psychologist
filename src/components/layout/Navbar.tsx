import React from 'react';
import { Box, Button, Container, Flex, Heading, HStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <Box bg="white" boxShadow="sm" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Heading size="md" color="primary.main">AI Psychologist</Heading>
          </Link>
          
          <HStack spacing={4}>
            <Link to="/chat">
              <Button
                variant={location.pathname === '/chat' ? 'solid' : 'ghost'}
                colorScheme="blue"
              >
                Chat
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                variant={location.pathname === '/dashboard' ? 'solid' : 'ghost'}
                colorScheme="blue"
              >
                Dashboard
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar; 