import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'therapist';
  timestamp: string;
  type: 'text' | 'system' | 'error';
}

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  error: string | null;
  currentSession: {
    id: string | null;
    startTime: string | null;
    mood: number | null;
  };
}

const initialState: ChatState = {
  messages: [],
  isTyping: false,
  error: null,
  currentSession: {
    id: null,
    startTime: null,
    mood: null,
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
    setTyping(state, action: PayloadAction<boolean>) {
      state.isTyping = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    startSession(state, action: PayloadAction<{ id: string; startTime: string }>) {
      state.currentSession.id = action.payload.id;
      state.currentSession.startTime = action.payload.startTime;
    },
    setMood(state, action: PayloadAction<number>) {
      state.currentSession.mood = action.payload;
    },
    clearSession(state) {
      state.messages = [];
      state.currentSession = {
        id: null,
        startTime: null,
        mood: null,
      };
    },
  },
});

export const {
  addMessage,
  setTyping,
  setError,
  startSession,
  setMood,
  clearSession,
} = chatSlice.actions;

export default chatSlice.reducer; 