import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { Message } from '../../../../store/slices/chatSlice';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isTherapist = message.sender === 'therapist';
  
  // Colors
  const therapistBgColor = useColorModeValue('primary.light', 'blue.800');
  const userBgColor = useColorModeValue('gray.100', 'gray.700');
  const therapistTextColor = useColorModeValue('gray.800', 'white');
  const userTextColor = useColorModeValue('gray.800', 'white');
  const timestampColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Flex
      justify={isTherapist ? 'flex-start' : 'flex-end'}
      mb={2}
      position="relative"
    >
      <Box
        maxW="70%"
        bg={isTherapist ? therapistBgColor : userBgColor}
        color={isTherapist ? therapistTextColor : userTextColor}
        px={4}
        py={2}
        borderRadius="lg"
        borderBottomLeftRadius={isTherapist ? '4px' : 'lg'}
        borderBottomRightRadius={isTherapist ? 'lg' : '4px'}
      >
        {/* Message Content */}
        <Text fontSize="md">{message.content}</Text>

        {/* Timestamp */}
        <Text
          fontSize="xs"
          color={timestampColor}
          textAlign="right"
          mt={1}
        >
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </Box>
    </Flex>
  );
};

export default MessageBubble; 