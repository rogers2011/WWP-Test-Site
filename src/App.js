import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./css/App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";



function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/register" element = {<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
