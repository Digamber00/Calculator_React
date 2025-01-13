import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");

  const handler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      
        <h2>CALCULATOR</h2>
        <input type="text" value={input} name="input" onChange={handler} />
        <br />
        
        <button onClick={() => setInput(input + '(')}>(</button>
        <button onClick={() => setInput(input + ')')}>)</button>
        <button onClick={() => setInput(input + '1')}>1</button>
        <button onClick={() => setInput(input + '2')}>2</button><br />
        <button onClick={() => setInput(input + '3')}>3</button>
        
        <button onClick={() => setInput(input + '4')}>4</button>
        <button onClick={() => setInput(input + '5')}>5</button>
        <button onClick={() => setInput(input + '6')}>6</button>
        <br />
        <button onClick={() => setInput(input + '7')}>7</button>
        <button onClick={() => setInput(input + '8')}>8</button>
        <button onClick={() => setInput(input + '9')}>9</button>
        <button onClick={() => setInput(input + '0')}>0</button>
        <br />
        <button onClick={() => setInput(input + '+')}>+</button>
        <button onClick={() => setInput(input + '-')}>-</button>
        <button onClick={() => setInput(input + '*')}>*</button>
        <button onClick={() => setInput(input + '/')}>/</button>
        <br />
        <button className="clr" onClick={() => setInput('')}>clr</button>
        <button className="equals" onClick={() => setInput(eval(input).toString())}>=</button>
      
    </>
  );
};

export default App;
