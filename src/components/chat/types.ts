// Types for chat functionality
export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export interface MessageListProps {
  messages: Message[];
}

export interface MessageProps {
  message: Message;
} 