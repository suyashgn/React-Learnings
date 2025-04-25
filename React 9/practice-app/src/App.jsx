import React, { useState, useCallback } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildButton from './ChildButton';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount((prev) => prev + 1);
  }, []);
  
  return (
    <>
       <h2>Count: {count}</h2>
       <ChildButton onClick={handleClick} />
     
    </>
  )
}

export default App
