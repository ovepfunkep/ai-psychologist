import React, { useState, KeyboardEvent } from 'react';
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import { MessageInputProps } from './types';

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <InputGroup size="md">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        disabled={disabled}
        pr="4.5rem"
      />
      <InputRightElement width="4.5rem">
        <IconButton
          h="1.75rem"
          size="sm"
          onClick={handleSend}
          aria-label="Send message"
          icon={<FiSend />}
          isDisabled={!message.trim() || disabled}
        />
      </InputRightElement>
    </InputGroup>
  );
}; 