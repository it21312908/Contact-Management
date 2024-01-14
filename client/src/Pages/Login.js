import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const [credentials , setCredentials] = useState({
        email:"",
        password:"",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setCredentials({ ...credentials, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();

        if(!credentials.email || !credentials.password){
          
        }
      }

  return (
    <>
    <ToastContainer autoClose={2000}/>
    <h3>Login</h3>
    <form onSubmit={handleSubmit}>
       
        <div class="form-group">
          <label for="emailInput" class="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div class="form-group">
          <label for="passwordInput" class="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary my-3"
        />
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </form>
  </>
  )
}
