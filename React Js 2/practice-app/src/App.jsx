import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginControl from './components/login';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  return (

   <div className="login">
      <h1>- Conditional Rendering -</h1>
      <LoginControl />

   <div className='userform'>
    <h1>-User Input-</h1>
    <UserForm />
   </div> 

   <div className='lists'>
      <h1>-Lists & Keys Demo-</h1>
      <UserList />
    </div>

   </div>
   
  );
}

export default App;


