import { createSlice } from '@reduxjs/toolkit';

interface CounterState { count: number; }

const initialState = { count: 0 };

const incrementReducer = (state: CounterState) => { state.count += 1; };
const decrementReducer = (state: CounterState) => { state.count -= 1; };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: incrementReducer,
    decrement: decrementReducer,
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: { ['counter']: CounterState }): number => state.counter.count;

export default counterSlice.reducer;
