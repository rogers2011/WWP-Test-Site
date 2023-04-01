import { useState, useEffect, React } from "react";
import { Navigate } from "react-router-dom";
//import { Button } from 'react';
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import { useSnackbar } from "material-ui-snackbar-provider";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Register';
import './css/login.css';
import {CheckBox, Text, StyleSheet, View} from 'react';
import { 
  getUserDataFromResponse, 
  storeUserDataInLocalStorage,
  getUserDataFromLocalStorage,
  signOut,
  setupSideNav,
  checkIfSidenavLoaded
  } from "./js/barba-transition.js"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  let history = useNavigate(); // use for Navigate on Previous
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //console.log("data.checkboxTOS ", data.checkboxTOS);
  // data.checkboxTOS
  const registerPage = async () => {
   // await /* API call here */
   history('/Register');
  }

  const snackbar = useSnackbar();

  const handleUndo = () => {
    // *snip*
  };

  const handleAction = () => {
    // *snip*
  };

  const handleChangeEmail = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    data.email = e.target.value;
    //console.log(data);   //data has the data of every key stroke in any of these inputs (first name, last name, email, username, password)

    // Remove red text if entries are valid
    if (
      data.email.length !== 0 &&
      String(data.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      //  console.log("email is empty");
      document.getElementById("email_element").textContent = "";
      return;
    }

    if (data.email.length === 0) {
      console.log("email is empty");
      document.getElementById("email_element").textContent = "Email is empty";
      return;
    } else if (
      !String(data.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      console.log("Invalid email");
      document.getElementById("email_element").textContent = "Invalid email";
      return;
    }
  };

  const handleChangePassword = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    data.password = e.target.value;
    //console.log(data);   //data has the data of every key stroke in any of these inputs (first name, last name, email, username, password)
    var regexp1 = new RegExp("^[0-9A-Za-z_-]+$");
    var regexp2 = new RegExp("[^0-9A-Za-z_-]+$");
    var regexp3 = new RegExp("[A-Z]");
    var regexp4 = new RegExp("[^A-Z]+$");
    var regexp5 = new RegExp("[a-z]");
    var regexp6 = new RegExp("[^a-z]+$");
    var regexp7 = new RegExp("[0-9]"); // at least 1 numeric value
    var regexp8 = new RegExp("[^0-9]"); // at least 1 numeric value
    var regexp9 = new RegExp("[-+_!@#$%^&*., ?]");
    var regexp10 = new RegExp("[^-+_!@#$%^&*., ?]+$");
    // Remove red text if entries are valid

    if (data.password.length > 7) {
      console.log("Password is less than 8 characters");
      document.getElementById("password_length_element").textContent = "";
    } else {
      console.log("Password needs to be at least 8 characters");
      document.getElementById("password_length_element").textContent =
        "Password needs to be at least 8 characters";
    }

    if (regexp3.test(data.password)) {
      console.log("Password has 1 uppercazse letter");
      document.getElementById("password_uppercase_element").textContent = "";
    } else {
      console.log("Password needs at least 1 uppercase letter");
      document.getElementById("password_uppercase_element").textContent =
        "Password needs at least 1 uppercase letter";
    }

    if (regexp5.test(data.password)) {
      console.log("Password has 1 lowercase letter");
      document.getElementById("password_lowercase_element").textContent = "";
    } else {
      console.log("Password needs at least 1 lowercase letter");
      document.getElementById("password_lowercase_element").textContent =
        "Password needs at least 1 lowercase letter";
    }

    if (regexp7.test(data.password)) {
      console.log("Password has 1 number");
      document.getElementById("password_number_element").textContent = "";
    } else {
      console.log("Password needs at least 1 number");
      document.getElementById("password_number_element").textContent =
        "Password needs at least 1 number";
    }

    if (regexp9.test(data.password)) {
      console.log("Password has 1 special character");
      document.getElementById("password_specialcharacter_element").textContent =
        "";
    } else {
      console.log("Password needs at least 1 special character");
      document.getElementById("password_specialcharacter_element").textContent =
        "Password needs at least 1 special character";
    }
  };


  const submitForm = (e) => {
    e.preventDefault(); // Prevent form submission
    //   console.log("first name:", document.getElementById("first-name").value);
    console.log("Submitted form");
    $.ajax({
      type: "POST",
      action: "login",
      //  dataType: "json",
      //C:/Users/Administrator/Documents/ReactJS - Basic App/react-course/php/register.php
      //axios.post('http://localhost/react-course/php/register.php', sendData).then((result) => {
      // url: "../php/register.php", // ./ is the same thing as http://localhost/

      url: "https://worldwideprayer.world/login.php",
      data: {
        email: data.email,
        password: data.password,
        action: "login"
      },
      success: function (response) {
    //    console.log("Login: ", response); // response.responseText);
        // window.open("./home", "_self");
        if (response.includes("Login Successful")) {
          console.log("Login was successful");
          //snackbar.showMessage("A link has been sent to your email for you to confirm your account!", "Undo", () => handleUndo());
          getUserDataFromResponse(response);

          history('/.')
         // setauthenticated(true)
          //        snackbarMessage.innerHTML = "A link has been sent to your email for you to confirm your account!";
          //       snackbarMessage.className = "show";
          //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
         } else if (response.includes('"error":true')) {
          console.log("Login was NOT successful");
          // after json decode or w/e can just print out response.error_msg
          //       snackbarMessage.innerHTML = "There was an error registering your account: " + response.substring(response.indexOf('"error_msg":') + '"error_msg":'.length, response.length - 1);
          //       snackbarMessage.className = "show";
          //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
       
       snackbar.showMessage(response.substring(response.indexOf('"error_msg":') + '"error_msg":"'.length, response.length - 2), "Undo", () => handleUndo());
       //snackbar.showMessage(response.substring('"error_msg".', response.length - 1) , "Undo", () => handleUndo());
    }  
     return;
      },
      error: function (error) {
        console.log("There was an error registering", error);

        snackbar.showMessage(error, "Undo", () => handleUndo());
        return;
      },
    });

    //   } else {
    // can't make account (under COPPA Act, the FTC (Federal Trade Commission) doesn't allow information to be taken from children under 18 without going through some hoops)
    //     console.log('User said they are not 18.');
    //   }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center bg-image login-body"
      id = "login-Container"
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" id = "login-MDBCard">
        <MDBCardBody className="px-5">
          <form onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-12 text-center mb-4">
                <div id="login-Title">
                  Login to your account
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6">Email</div>
              <MDBInput
                wrapperClass="mb-4"
                className="form-control"
                onChange={handleChangeEmail}
                value={data.email}
                name="email"
                size="lg"
                id="email_edittextbox"
                type="text"
              />
              <span id="email_element" className="red" style={{ color: "red" }}>
                {""}
              </span>
            </div>

            <div className="row">
              <div className="col-md-6">Password</div>
              <MDBInput
                wrapperClass="mb-4"
                className="form-control"
                onChange={handleChangePassword}
                value={data.password}
                name="password"
                size="lg"
                id="password_edittextbox"
                type="password"
              />
              <span
                id="password_length_element"
                className="red"
                style={{ color: "red" }}
              >
                {""}
              </span>
              <span
                id="password_uppercase_element"
                className="red"
                style={{ color: "red" }}
              >
                {""}
              </span>
              <span
                id="password_lowercase_element"
                className="red"
                style={{ color: "red" }}
              >
                {""}
              </span>
              <span
                id="password_number_element"
                className="red"
                style={{ color: "red" }}
              >
                {""}
              </span>
              <span
                id="password_specialcharacter_element"
                className="red"
                style={{ color: "red" }}
              >
                {""}
              </span>
            </div>

            <div className="row mb-4">
              <Button
                //    className="mb-4 w-100 gradient-custom-4"
                name="submit"
                value="Login"
                type="submit"
                size="lg"
                id="submit_element"
              >
                Login
              </Button>
            </div>

            <div className="row">
              <div className="d-flex flex-row justify-content-center">
                Don't have an account?
              </div>
              <Button
                //   className="mb-4 w-100 gradient-custom-4"
                name="submit"
                value="Register"
                type="submit"
                size="lg"
                onClick={registerPage}
              >
                Register
              </Button>
            </div>

            <div className="row">
            <div className="col-md-12 text-center"></div>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </Container>
  );
};
export default Login;