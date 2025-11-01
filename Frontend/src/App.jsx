
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Signup from './page/Signup';
import Login from './page/Login';

function App() {
  return (
   <div>
    <Routes>
      <Route path ="/signup"  element={<Signup/>}  />
      <Route path ="*"  element={<Signup/>}  />
      <Route path='/login' element={<Login/>}   />
    </Routes>
   </div>
  )
}

export default App