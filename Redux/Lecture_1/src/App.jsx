import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";

const App = () => {
  const dispath = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispath(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispath(decreament());
        }}
      >
        Decrement
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button
        onClick={() => {
          dispath(incrementByAmount(Number(num)));
        }}
      >
        Increment by amount
      </button>
    </div>
  );
};

export default App;
