import React, { useEffect, useState, } from "react";
import {useHistory} from 'react-router'; 
import axios from 'axios'; 

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const loginForm = {
    username:"", 
    password: ""
  }
const history = useHistory(); 
const [loginInput, setLoginInput] = useState(loginForm)
const {username, password} = loginInput

const error = "";
const [errorState, setErrorState] = useState(error)
const {errorMessage} = errorState

const handleChange = (event) => {
setLoginInput({...loginInput,[event.target.name]:event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('http://localhost:5000/api/login',loginInput)
  .then(res => {localStorage.setItem('token',res.data.payload) 
  history.push('/bubblepage')
})
  .catch(err =>  { console.log("error handleSubmit; Login.js: ", err)})
}

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Please login below</h2>
      <form onSubmit={handleSubmit}> 
        <input type="text"
        name="username" 
        data-testid="username"
         placeholder="username"
         value={username}
         onChange={handleChange}/>
        &nbsp;&nbsp;

        <input type="password"
        name="password" 
        data-testid="password" 
        placeholder="password"
        value={password}
        onChange={handleChange}
        />
        &nbsp;&nbsp;
        <button>Submit</button>
       </form>
      </div>

      <p data-testid="errorMessage" className="error">{errorMessage}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.   username "Lambda" password: "School"