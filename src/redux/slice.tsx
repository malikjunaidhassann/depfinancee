// slices.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Define the interfaces for your state and any action payloads.
// It's a good practice to define specific types instead of using 'any'.
export interface UserState {
  user_data: any | null; // Replace 'any' with a User interface
}

export interface LoanState {
  repayment: any; // Replace 'any' with a Repayment interface
}

// 2. Define the initial state for each slice, ensuring it adheres to the interfaces.
const userInitialState: UserState = {
  user_data: null,
};

const loanInitialState: LoanState = {
  repayment: {},
};

// 3. Create the user slice.
export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user_data = action.payload;
    },
    logout: (state) => {
      state.user_data = null;
    },
  },
});

// 4. Create the loan (repayment) slice.
export const loanSlice = createSlice({
  name: 'loan',
  initialState: loanInitialState,
  reducers: {
    setRepayment: (state, action: PayloadAction<any>) => {
      state.repayment = action.payload;
    },
  },
});

// 5. Export the actions for each slice.
export const { login, logout } = userSlice.actions;
export const { setRepayment } = loanSlice.actions;

// 6. Define a type for the root state. This is crucial for type-safe selectors.
// You will use these types when configuring your Redux store.
export interface RootState {
  user: UserState;
  loan: LoanState;
}

// 7. Define type-safe selectors to retrieve data from the state.
export const selectUser = (state: RootState) => state.user.user_data;
export const selectRepayment = (state: RootState) => state.loan.repayment;

// 8. Export the reducers to be combined in your store configuration file.
export const userReducer = userSlice.reducer;
export const loanReducer = loanSlice.reducer;

export default { userReducer, loanReducer }; // Export an object containing all reducers