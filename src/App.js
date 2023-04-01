import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./css/App.css";
import TopMenu from "./components/menus/TopMenu";
import PrimaryMenu from "./components/menus/PrimaryMenu";
import Home from "./components/pages/Home";
import Login from "./Login";
import Register from "./Register";
import TermsOfService from "./TermsOfService";
// import Intentions from "./components/pages/Intentions";
import PageNotFound from "./components/pages/PageNotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'material-ui-snackbar-provider'


function App() {
  return (
    <SnackbarProvider id="snack_bar" SnackbarProps={{autoHideDuration: 2000, backgroundcolor:'teal', anchorOrigin: { vertical: 'bottom', horizontal: 'center' }}}>
      <Router>
          <TopMenu />
          <Routes>
          <Route path = "/" element = {<Home/>} />
          {/* <Route path = "/intentions" element = {<Intentions/>} /> */}
          <Route element = {<PageNotFound/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/register" element = {<Register/>} />
          <Route path = "/terms_of_service" element = {<TermsOfService/>} />
          </Routes>
          <PrimaryMenu />
      </Router>
    </SnackbarProvider>
  );
}

export default App;
