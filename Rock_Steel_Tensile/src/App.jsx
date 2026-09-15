import React, { useState } from "react";

const App = () => {
  const [rock, setRock] = useState(undefined);
  const [steel, setSteel] = useState(undefined);
  const [tensile, setTensile] = useState(undefined);
  const [result, setResult] = useState(0);
  const getResult = () => {
    if (!rock) {
      alert("Please enter the rock value");
      return;
    }
    if (!steel) {
      alert("Please Enter the steel value");
      return;
    }
    if (!tensile) {
      alert("Please enter the tensile value");
      return;
    }
    if (rock > 50) {
      if (steel > 0.7) {
        if (tensile > 5600) {
          setResult("10");
        } else {
          setResult("9");
        }
      } else {
        if (tensile > 5600) {
          setResult("7");
        } else {
          setResult("0");
        }
      }
    } else {
      if (steel > 0.7 && tensile > 5600) {
        setResult("8");
      } else {
        setResult("0");
      }
    }
  };

  return (
    <div>
      <h1>Rock, Steel, Tensile</h1>
      <input
        value={rock}
        onChange={(e) => setRock(e.target.value)}
        type="number"
        placeholder="Enter Rock Value"
      />
      <br />
      <br />
      <input
        value={steel}
        onChange={(e) => setSteel(e.target.value)}
        type="number"
        placeholder="Enter Steal Value"
      />
      <br />
      <br />
      <input
        value={tensile}
        onChange={(e) => setTensile(e.target.value)}
        type="number"
        placeholder="Enter Tensile strength"
      />{" "}
      <br />
      <br />
      <button onClick={getResult}>Get Output</button>
      <p>
        Your Output shoes here <strong>Grade {result}</strong>
      </p>
    </div>
  );
};

export default App;
