import { VStack, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Message } from '../../../../store/slices/chatSlice';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

const MessageList = ({ messages, isTyping }: MessageListProps) => {
  const dateSeparatorBg = useColorModeValue('gray.100', 'gray.700');
  const dateSeparatorColor = useColorModeValue('gray.600', 'gray.400');

  const renderDateSeparator = (date: string) => (
    <Box
      py={2}
      px={4}
      bg={dateSeparatorBg}
      borderRadius="md"
      alignSelf="center"
    >
      <Text fontSize="sm" color={dateSeparatorColor}>
        {new Date(date).toLocaleDateString()}
      </Text>
    </Box>
  );

  const groupMessagesByDate = () => {
    const groups: { date: string; messages: Message[] }[] = [];
    let currentDate = '';
    let currentGroup: Message[] = [];

    messages.forEach((message) => {
      const messageDate = new Date(message.timestamp).toLocaleDateString();

      if (messageDate !== currentDate) {
        if (currentGroup.length > 0) {
          groups.push({ date: currentDate, messages: currentGroup });
        }
        currentDate = messageDate;
        currentGroup = [message];
      } else {
        currentGroup.push(message);
      }
    });

    if (currentGroup.length > 0) {
      groups.push({ date: currentDate, messages: currentGroup });
    }

    return groups;
  };

  return (
    <VStack spacing={4} align="stretch">
      {groupMessagesByDate().map((group) => (
        <VStack key={group.date} spacing={4} align="stretch">
          {renderDateSeparator(group.date)}
          {group.messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
            />
          ))}
        </VStack>
      ))}
      {isTyping && (
        <Box pl={4}>
          <TypingIndicator />
        </Box>
      )}
    </VStack>
  );
};

export default MessageList; 