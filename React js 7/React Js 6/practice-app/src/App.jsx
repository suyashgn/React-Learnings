import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './components/Todoapp.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import ThemedContent from './components/ThemedContent.jsx';
import './components/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
         <TodoApp />
    </div>

    <ThemeProvider>
      <div className="app-container">
        
        {/* <h1>React Context API - Theme Switcher</h1> */}
      <ThemeToggle />
           
        <ThemedContent />
      </div>
      
    </ThemeProvider>

    </>
  )
}

export default App
