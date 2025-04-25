import { useState } from 'react'
import './App.css'
import DataFetcher from './component/DataFetcher';
import Timer from './component/Timer.jsx';


function App() {
  return (
    <>
      <div>
      <Timer />
      <DataFetcher />
      </div>
    </>
  );
}

export default App;
