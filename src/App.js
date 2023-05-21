import React, { useState, usestate } from "react";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const handleDigit = (i) => {
    if (displayValue === "0") {
      setDisplayValue(i);
    } else {
      setDisplayValue(displayValue + i);
    }
  };
  const handleOperator = (i) => {
    const inputValue=parseFloat(displayValue);
    if (firstOperand===null){
      setFirstOperand(inputValue);
    }
    else if (operator){
      const result=performCalculation();
      setDisplayValue(String(result));
      setFirstOperand(result);
    }
    setOperator(i);
    setDisplayValue('0');
  };
  const handleDecimal = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };
  const performCalculation=()=>{
    const inputValue=parseFloat(displayValue);
    if (operator==='+'){
      return firstOperand+inputValue;
    }
    else if (operator==='-'){
      return firstOperand-inputValue;
    }
    else if (operator==='*'){
      return firstOperand*inputValue;
    }
    else if (operator ==='/'){
      return firstOperand/inputValue;
    }
    return inputValue;
  };
  const handleCalculate = () => {
    if (operator){
      const result=performCalculation();
      setDisplayValue(String(result));
      setFirstOperand(result);
      setOperator(null);
    }
  };
  const clearDisplay = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstOperand(null);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-4 gap-4 mb-2">
            <div
              type="text"
              className="col-span-3 bg-pink-200 rounded py-2 px-4"
            >
              {displayValue}
            </div>
            <button
              className="col-span-1 bg-gray-300 rounded py-2 px-4"
              onClick={clearDisplay}
            >
              C
            </button>
          </div>

          <div className="mb-1 grid grid-cols-4 gap-4">
            <button
              onClick={() => handleDigit("1")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              1
            </button>
            <button
              onClick={() => handleDigit("2")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              2
            </button>
            <button
              onClick={() => handleDigit("3")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              3
            </button>
            <button
              onClick={() => handleOperator("/")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              /
            </button>
          </div>
          <div className="mb-1 grid grid-cols-4 gap-4">
            <button
              onClick={() => handleDigit("4")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              4
            </button>
            <button
              onClick={() => handleDigit("5")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              5
            </button>
            <button
              onClick={() => handleDigit("6")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              6
            </button>
            <button
              onClick={() => handleOperator("-")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              -
            </button>
          </div>
          <div className="mb-1 grid grid-cols-4 gap-4">
            <button
              onClick={() => handleDigit("7")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              7
            </button>
            <button
              onClick={() => handleDigit("8")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              8
            </button>
            <button
              onClick={() => handleDigit("9")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              9
            </button>
            <button
              onClick={() => handleOperator("+")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              +
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button
              onClick={handleDecimal}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              .
            </button>
            <button
              onClick={() => handleDigit("0")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              0
            </button>
            <button
              onClick={handleCalculate}
              className="col-span-1 bg-gray-300 rounded py-2 px-4"
            >
              =
            </button>
            <button
              onClick={() => handleOperator("*")}
              className="col-span-1 bg-blue-300 rounded py-2 px-4"
            >
              *
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
