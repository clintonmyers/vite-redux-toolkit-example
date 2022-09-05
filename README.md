# REDUX TOOLKIT SIMPLE STARTER
### Featuring Vite + React + TypeScript

Deployed link - [Stackblitz](https://stackblitz.com/github/clintonmyers/vite-redux-toolkit-example)

The goal of this project is to show a very simple stripped down version of Redux Toolkit and the steps that you can take to create a minimal implimentation of Redux Toolkit in your own projects.

## Directions

#### **STEP 0**

* Create a new [Vite](https://vitejs.dev/) project using the React TypeScript template (`react-ts`)
* `cd` into the new project directory and install the npm packages `@reduxjs/toolkit` and `react-redux` using your favorite package manager.

```
npm i @reduxjs/toolkit react-redux
```

#### **STEP 1 - Create your store **

* Create a new store in a new file called `store.ts`.
* Import and create a new store using `configureStore` from `@reduxjs/toolkit`.
* Do not use `createStore`, as it is deprecated.

```
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```

#### **STEP 2 - Wrap your app in a Provider **

* Import your `store` from `store.ts` into `main.tsx`.

```
import { store } from "./redux/store";
```

* Wrap your `<App />` in `<Provider></Provider>` tags.
* Pass in `store` as a prop in the `<Provider>`.

```
<Provider store={store}>
    <App />
</Provider>
```

#### **STEP 3 -  Create your first slice of state **

* Create a new file called `counterSlice.ts` for your first slice.
* Create your first slice `counterSlice` using `createSlice` imported from `@reduxjs/toolkit`.
* Create an interface for the state of your slice.
* Create the initial state for your slice.
* Create reducer functions that affect the state.
* Pass a `name`, `initialState`, and `reducers` into `counterSlice`.

```
--- counterSlice.ts ---

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
```

#### **STEP 4 - Export your getters and actions from your slice **

* Export your reducer functions from `counterSlice.actions` for your components.
* Export your state getter `selectCount` for your components.
* Export your reducer functions, `counterSlice.reducer`, for your store.

```
export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: { ['counter']: CounterState }): number => state.counter.count;

export default counterSlice.reducer;
```

#### **STEP 5 - Import your slice's reducer functions into your store **

* Import `counterReducer` from `counterSlice.ts` into `store.ts`.

```
import counterReducer from '../features/counter/counterSlice';
```

* Add `counterReducer` to the reducer object in the store.

```
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

#### **STEP 6 - Import your slice's getter and actions into your component **

* Create a new component `Counter` in `Counter.tsx`
* Import `useSelector` from `react-redux` and use it with your getter `selectCount` to store the current value of `count` in a variable.
* Import `useDispatch` and set new variable `dispatch` equal to the invoked `useDispatch` function for use in dispatching actions to your store.
* Display your state and assign actions to your buttons to affect the state. Dispatching actions will cause a rerender and your component will display updated state.

```
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
```

#### **STEP 7 - Import your component somewhere in your app **

That's it! Thanks for reading!