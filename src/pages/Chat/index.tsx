import React from 'react';
import { Box, Container, Grid } from '@chakra-ui/react';
import ChatArea from './components/ChatArea';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';

const Chat: React.FC = () => {
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: '280px 1fr',
        lg: '280px 1fr 320px',
      }}
      h="calc(100vh - 72px)" // Subtract navbar height
      bg="background.secondary"
      gap={0}
    >
      {/* Sidebar */}
      <Box
        display={{ base: 'none', md: 'block' }}
        borderRight="1px"
        borderColor="gray.200"
        bg="white"
      >
        <Sidebar />
      </Box>

      {/* Main Chat Area */}
      <Box>
        <ChatArea />
      </Box>

      {/* Right Panel */}
      <Box
        display={{ base: 'none', lg: 'block' }}
        borderLeft="1px"
        borderColor="gray.200"
        bg="white"
      >
        <RightPanel />
      </Box>
    </Grid>
  );
};

export default Chat; 