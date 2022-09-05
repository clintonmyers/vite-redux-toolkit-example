import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// STEP 1 - Create your store using configureStore (not createStore)
export const store = configureStore({
  reducer: {
    // STEP 5 - Import your slice reducer functions
    counter: counterReducer,
  },
});
