import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HoverButton from './components/HoverButton.jsx'
import Card from './components/Card';


function App() {
  
  return (
   <>
   
   <div className="container">
      <h1 className="title">Hello, React + CSS!</h1>
      <p className="description">External CSS file.</p>
   </div>
   
   <div style={{ textAlign: 'center', marginTop: '55px' }}>
      <h1>Inline Style </h1>
      <HoverButton />
   </div>

   <div>
      <Card 
        title="CSS Module Card" 
        content="Card Content Here..." 
      />
   </div>


   
   </>
  )
}

export default App;
