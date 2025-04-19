import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  activeSession: {
    id: string | null;
    startTime: string | null;
    duration: number;
    mood: number | null;
    goals: string[];
  };
  pastSessions: {
    id: string;
    startTime: string;
    endTime: string;
    duration: number;
    mood: number;
    goals: string[];
  }[];
}

const initialState: SessionState = {
  activeSession: {
    id: null,
    startTime: null,
    duration: 0,
    mood: null,
    goals: [],
  },
  pastSessions: [],
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    startSession(state, action: PayloadAction<{ id: string; startTime: string }>) {
      state.activeSession.id = action.payload.id;
      state.activeSession.startTime = action.payload.startTime;
    },
    updateSessionMood(state, action: PayloadAction<number>) {
      if (state.activeSession.id) {
        state.activeSession.mood = action.payload;
      }
    },
    addSessionGoal(state, action: PayloadAction<string>) {
      if (state.activeSession.id) {
        state.activeSession.goals.push(action.payload);
      }
    },
    endSession(state, action: PayloadAction<string>) {
      if (state.activeSession.id && state.activeSession.startTime) {
        const endTime = action.payload;
        const duration = new Date(endTime).getTime() - new Date(state.activeSession.startTime).getTime();
        
        state.pastSessions.push({
          id: state.activeSession.id,
          startTime: state.activeSession.startTime,
          endTime,
          duration,
          mood: state.activeSession.mood || 0,
          goals: [...state.activeSession.goals],
        });
        
        state.activeSession = initialState.activeSession;
      }
    },
  },
});

export const {
  startSession,
  updateSessionMood,
  addSessionGoal,
  endSession,
} = sessionSlice.actions;

export default sessionSlice.reducer; 