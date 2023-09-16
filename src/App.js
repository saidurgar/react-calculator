import react { useState } from 'react';
import './App.css';

function App() {
  let [result, setResult] = useState("");
  let [num1, setnum1] = useState("");
  let [num2, setnum2] = useState("");
  let [msg, setMsg] = useState("");


  const validation = (e) => {
    if (num1 == "") {     
      setMsg("ERROR ! :  First number cannot be empty");
      setResult("");
      return;
    }
    else if (num2 == "") {
      setMsg("ERROR ! :  Second number cannot be empty");
      setResult("");
      return;
    }
    const num1Val = Number(num1);
    const num2Val = Number(num2);
    let resultVal = "";
  console.log(e.target.innerText)
  
    if (isNaN(num1Val) || isNaN(num2Val)) {
      setMsg("ERROR ! : Please enter valid numbers");
    } else {
      switch (e.target.innerText) {
        case "+":
          resultVal = num1Val + num2Val;
          break;
        case "-":
          resultVal = num1Val - num2Val;
          break;
        case "*":
          resultVal = num1Val * num2Val;
          break;
        case "/":
          resultVal = num1Val / num2Val;
          break;
        default:
          setMsg("ERROR !: Invalid operator");
          return;
      }
  
      setResult(resultVal);
      setMsg("Success ! : Your result is calculated!");
      
    }
  };
  

  return (
    <div className="calculator-comp">
      <h1>React Calculator</h1>
      <input type="text" id="num1" placeholder='Num 1' onChange={(e) => { setnum1(e.target.value) }} />
      <input type="text" id="num2" placeholder='Num 2' onChange={(e) => { setnum2(e.target.value) }} />
      <div className="btn-grp">
        <button onClick={validation}>+</button>
        <button onClick={validation}>-</button>
        <button onClick={validation}>*</button>
        <button onClick={validation}>/</button>
      </div>
     

      <div className={msg.includes("Success") ? "success" : "error"}>{msg}</div>
      <div className='res'>{result === "" ? "" : <h3> Result : {result}</h3> }</div>
      
    </div>
  );
  
}

export default App;
