import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import Todoapp from './Todoapp';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/Signup" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Todoapp" element={<Todoapp/>}/>
        </Routes>
      </Router>
    </>
  )
}
// function Signup() {
//   return (
//     <div>
//       <SignUp />
//     </div>
//   )
// }
export default App;

