import { useState } from 'react';
import { Box, Flex, Input, IconButton } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';

interface ChatInputProps {
  onSendMessage?: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box p={4} borderTop="1px" borderColor="gray.200">
      <Flex>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          mr={2}
          borderRadius="full"
        />
        <IconButton
          aria-label="Send message"
          icon={<IoSend />}
          colorScheme="blue"
          borderRadius="full"
          onClick={handleSend}
          isDisabled={!message.trim()}
        />
      </Flex>
    </Box>
  );
};

export default ChatInput; 