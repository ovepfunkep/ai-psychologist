import React, { useState } from 'react';
import { VStack, Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { Message } from './types';

export const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      // TODO: Implement AI response logic here
      // For now, we'll just echo back a mock response
      const aiMessage: Message = {
        id: uuidv4(),
        content: `I received your message: "${content}"`,
        sender: 'ai',
        timestamp: new Date(),
      };

      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error processing message:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <VStack
      height="100%"
      spacing={4}
      p={4}
    >
      <Box
        flex={1}
        width="100%"
        overflowY="auto"
        borderWidth={1}
        borderRadius="lg"
        bg="white"
      >
        <MessageList messages={messages} />
      </Box>
      <Box width="100%">
        <MessageInput
          onSendMessage={handleSendMessage}
          disabled={isProcessing}
        />
      </Box>
    </VStack>
  );
}; 