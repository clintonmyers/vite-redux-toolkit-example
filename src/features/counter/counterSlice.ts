import { createSlice } from '@reduxjs/toolkit';

interface CounterState { count: number; }

const initialState = { count: 0 };

const incrementReducer = (state: CounterState) => { state.count += 1; };
const decrementReducer = (state: CounterState) => { state.count -= 1; };

// STEP 3 - Create your slice and populate it with a name, initialState, and reducers
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: incrementReducer,
    decrement: decrementReducer,
  },
});

// STEP 4a - Export your reducer functions as slice actions for your components
export const { increment, decrement } = counterSlice.actions;

// STEP 4b - Export your state getter for your components
export const selectCount = (state: { ['counter']: CounterState }): number => state.counter.count;

// STEP 4c - Export your slice reducer functions for your store
export default counterSlice.reducer;
