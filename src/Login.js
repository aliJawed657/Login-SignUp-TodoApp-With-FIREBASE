import React, { useState } from 'react'
import App from './App.css'
import { Link } from 'react-router-dom'
import { Firebase, getAuth, signInWithEmailAndPassword } from "./Firebase"
import Swal from 'sweetalert2'

function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const login = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                  Swal.fire({
                    icon: 'success',
                    title: "LOGIN",
                    text: "SUCCESSFULL",
                  })
                  window.location.href = "/Todoapp"

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: errorCode,
                    text: errorMessage,
                  })
                  window.location.href = "/Login"

            });
    }
    return (
        <div>
            <form className="form">
                <span className="input-span">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setemail(e.target.value)} />
                </span>
                <span className="input-span">
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setpassword(e.target.value)} />
                </span>
                <span className="span">
                    <a href="#">Forgot password?</a>
                </span>
              <button> <Link className="submit" type="Login" defaultValue="Log in" onClick={login} to="/Todoapp">Login </Link></button>
                <span className="span">
                    Don't have an account? <Link to="/SignUp">Sign up</Link>
                </span>
            </form>

        </div>
    )
}

export default Login