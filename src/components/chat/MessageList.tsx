import React, { useRef, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import { MessageListProps } from './types';
import { Message } from './Message';

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <VStack
      spacing={4}
      align="stretch"
      height="100%"
      overflowY="auto"
      px={4}
      py={2}
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={bottomRef} />
    </VStack>
  );
}; 