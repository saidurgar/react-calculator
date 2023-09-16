// Calculator.js
import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter an expression"
      />
      <button onClick={calculateResult}>=</button>
      <div className="result">{result}</div>
    </div>
  );
}

export default Calculator;
