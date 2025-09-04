import { configureStore } from '@reduxjs/toolkit';
import { userReducer, loanReducer } from './slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loan: loanReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


