import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <Navbar />
      <div className="text-center mt-20 text-lg"></div>
    </div> 

    </>
  )
}

export default App
