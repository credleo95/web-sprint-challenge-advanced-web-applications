import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
// import BubblePage from "./components/BubblePage"; 
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.removeItem('token'); 
    window.location.href="/"
  }
  return (
    <Router>
        <div className="App">
          <header>
            Color Picker Sprint Challenge
            <Link onClick={handleLogout} data-testid="logoutButton">logout</Link>
          </header> 

        <Route exact path="/" component={Login} />
        </div>
        {/* <PrivateRoute exact path="/bubblepage" component={BubblePage}/> */}
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.