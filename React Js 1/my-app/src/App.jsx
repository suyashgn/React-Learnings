import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting';
import TodoItem from './components/todoitem';


function App() {

  const todos = [
    { id: 1, task: "Learn React", completed: true },
    { id: 2, task: "Build a React App", completed: true },
    { id: 3, task: "Deploy the App", completed: false }
  ];

  return (
    <div className="assign">

      <h1> Greetings From,</h1>
      <Greeting name= "Suyash"/>
      <Greeting name= "Saurabh"/>
      <Greeting name= "Parth"/>

    <div className='todo'>
      <h1>Todo List</h1>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>

    </div>
  );
}

export default App;


