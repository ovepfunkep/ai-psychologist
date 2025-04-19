import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box flex="1">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout; 