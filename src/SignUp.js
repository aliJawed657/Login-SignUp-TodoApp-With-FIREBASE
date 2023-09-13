import React, { useState } from 'react'
import index from './index.css'
import SignUp from './SignUp'
import Login from './Login'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { FirebaseApp, getAuth, createUserWithEmailAndPassword } from './Firebase'
function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function signup() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                const user = userCredential.user;
                if (user) {

                    Swal.fire({
                        icon: 'success',
                        title: "USER ADDED",
                        text: "SUCCESSFULL",
                    })
                    window.location.href = "/Login"
                }
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: errorMessage,
                        text: errorCode,
                    })
                    window.location.href = "/SignUp"

                }
            })

    }


    return (
        <div>
            <div className="form-box">
                <form className="form">
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container">
                        <input type="text" className="input" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                        <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button ><Link onClick={signup} to="/Login" >Sign up</Link></button>
                </form>
                <div className="form-section">
                    <p>
                        Have an account? <Link to="/Login">Log in</Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Signup