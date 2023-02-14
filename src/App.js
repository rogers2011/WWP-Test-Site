import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./css/App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'material-ui-snackbar-provider'




function App() {
  return (
    <SnackbarProvider id="snack_bar" SnackbarProps={{autoHideDuration: 2000, backgroundcolor:'teal', anchorOrigin: { vertical: 'bottom', horizontal: 'center' }}}>
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
    </SnackbarProvider>
  );
}

export default App;
