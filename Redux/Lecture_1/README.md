# Redux Explained (Simple & Proper Guide)

## 1. What is Redux?

Redux is a **state management library** for JavaScript applications, commonly used with React.

It helps you manage **global state** in a predictable way.

👉 Instead of passing data through many components (props drilling), Redux keeps all shared data in a **central store**.

---

## 2. Why Redux?

In large applications:

* State becomes hard to manage
* Data flows become confusing
* Debugging becomes difficult

Redux solves this by making state:

* Centralized
* Predictable
* Easy to debug

---

## 3. Core Concepts of Redux

### 3.1 Store

The **single source of truth**.

* Holds all application state

```js
const store = configureStore({ reducer: rootReducer });
```

---

### 3.2 Action

A plain JavaScript object that describes **what happened**.

```js
{ type: 'INCREMENT' }
```

---

### 3.3 Reducer

A function that decides **how state changes** based on actions.

```js
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
```

---

### 3.4 Dispatch

Used to **send actions** to the store.

```js
dispatch({ type: 'INCREMENT' });
```

---

### 3.5 Selector

Used to **get data from store**.

```js
const count = useSelector(state => state.counter);
```

---

## 4. Redux Data Flow (Important)

Redux follows a **one-way data flow**:

```
UI → dispatch(action) → reducer → store → UI updates
```

Step-by-step:

1. User interacts with UI
2. Action is dispatched
3. Reducer updates state
4. Store saves new state
5. UI re-renders

---

## 5. Redux Toolkit (Modern Redux)

Redux Toolkit is the **recommended way** to use Redux.

It reduces boilerplate code.

### Install

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 6. Example: Counter using Redux Toolkit

### 6.1 Create Slice

```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### 6.2 Configure Store

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

### 6.3 Provide Store to App

```js
import { Provider } from 'react-redux';
import { store } from './store';

<Provider store={store}>
  <App />
</Provider>
```

---

### 6.4 Use in Component

```js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

---

## 7. When to Use Redux?

Use Redux when:

* App has large shared state
* Many components need same data
* Complex state logic

Don’t use Redux when:

* Small apps
* Simple local state is enough

---

## 8. Summary

Redux is a predictable state management tool that:

* Centralizes state
* Uses actions & reducers
* Follows one-way data flow
* Works best with Redux Toolkit today

---

⭐ Tip: Always prefer **Redux Toolkit over plain Redux** for modern apps.
