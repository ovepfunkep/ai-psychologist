import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

// Components
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatArea = () => {
  const { messages, isTyping } = useSelector((state: RootState) => state.chat);
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      direction="column"
      h="100vh"
      bg={bgColor}
      position="relative"
    >
      {/* Chat Header */}
      <ChatHeader />

      {/* Messages Area */}
      <Box
        flex="1"
        overflowY="auto"
        px={4}
        py={2}
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: useColorModeValue('gray.300', 'gray.600'),
            borderRadius: '24px',
          },
        }}
      >
        <MessageList
          messages={messages}
          isTyping={isTyping}
        />
      </Box>

      {/* Chat Input */}
      <Box
        p={4}
        borderTop="1px"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <ChatInput />
      </Box>
    </Flex>
  );
};

export default ChatArea; 