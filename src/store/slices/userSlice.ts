import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
  isAuthenticated: boolean;
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  preferences: {
    theme: 'light',
    notifications: true,
  },
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    },
    updatePreferences(state, action: PayloadAction<Partial<UserState['preferences']>>) {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    clearUser(state) {
      return initialState;
    },
  },
});

export const { setUser, updatePreferences, clearUser } = userSlice.actions;
export default userSlice.reducer; 