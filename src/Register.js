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
import Login from './Login';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Register = () => {
  let history = useNavigate(); // use for Navigate on Previous
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  


  const loginPage = async () => {
   // await /* API call here */
  
  
   history('/Login');
  }

  const snackbar = useSnackbar();

  const handleUndo = () => {
    // *snip*
  };

  const handleAction = () => {
    // *snip*
  };
  // data = React.useRef(null);
  // useEffect(() => {
  //console.log(data);
  //    first_name_edittextbox.addEventListener("onkeydown", handleChangeFirstName);

  //    return () => {
  //       first_name_edittextbox.removeEventListener("onkeydown", handleChangeFirstName);
  //};
  //  }, []);

  //change handlechange for each edit text box!
  const handleChangeFirstName = (e) => {
    // setData(data=>data + 1);
    // console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
    //  setData(e.target.value);
    //data has the data of every key stroke in any of these inputs (first name, last name, email, username, password)
    data.first_name = e.target.value;

    // Remove red text if entries are valid
    if (
      data.first_name.length !== 0 &&
      /^[a-zA-Z]/.test(data.first_name) &&
      data.first_name.length < 21
    ) {
      // console.log("First name is empty");
      document.getElementById("first_name_element").textContent = "";
      return;
    }

    if (!/^[a-zA-Z]/.test(data.first_name)) {
      console.log("First name must begin with a letter");
      document.getElementById("first_name_element").textContent =
        "First name must begin with a letter";
      return;
    } else if (data.first_name.length > 20) {
      console.log("First name entry is too long");
      document.getElementById("first_name_element").textContent =
        "First name entry is too long";
      return;
    }
  };

  const handleChangeLastName = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    data.last_name = e.target.value;
    //console.log(data);   //data has the data of every key stroke in any of these inputs (first name, last name, email, username, password)
    // Remove red text if entries are valid
    if (
      data.last_name.length !== 0 &&
      /^[a-zA-Z]/.test(data.last_name) &&
      data.last_name.length < 31
    ) {
      // console.log("First name is empty");
      document.getElementById("last_name_element").textContent = "";
      return;
    }

    if (!/^[a-zA-Z]/.test(data.last_name)) {
      console.log("Last name must begin with a letter");
      document.getElementById("last_name_element").textContent =
        "Last name must begin with a letter";
      return;
    } else if (data.last_name.length > 20) {
      console.log("Last name entry is too long");
      document.getElementById("last_name_element").textContent =
        "Last name entry is too long";
      return;
    }
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

  const handleChangeUsername = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    //USERNAME MUST HAVE HARACTERS, NUMBERS, UNDERSCORES, AND DASHES ONLY

    data.username = e.target.value;

    //console.log(data);   //data has the data of every key stroke in any of these inputs (first name, last name, email, username, password)
    var regexp1 = new RegExp("^[0-9A-Za-z_-]+$");
    var regexp2 = new RegExp("[^0-9A-Za-z_-]+$");
    // Remove red text if entries are valid
    if (
      data.username.length > 5 &&
      data.username.length < 31 &&
      regexp1.test(data.username)
    ) {
      //  console.log("Username is too short");
      document.getElementById("username_element").textContent = "";
      return;
    }
    if (regexp2.test(data.username)) {
      console.log("Username can only have numbers, letters, _ or -");
      document.getElementById("username_element").textContent =
        "Username can only have numbers, letters, underscored, and dashes";
      return;
    } else if (data.username.length < 6) {
      console.log("Username is too short");
      document.getElementById("username_element").textContent =
        "Username must be greater than 6 characters";
      return;
    } else if (data.username.length > 30) {
      console.log("Username is too long");
      document.getElementById("username_element").textContent =
        "Username must be less than 30 characters";
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

  const handleChangeConfirmPassword = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    data.confirm_password = e.target.value;
    //console.log(data);   //data has the data of every key stroke in any of these inputs (first name, last name, email, username, password)
    // Remove red text if entries are valid

    if (data.password === data.confirm_password) {
      console.log("Passwords match");
      document.getElementById("confirm_password_element").textContent = "";
      return;
    }

    if (data.password != data.confirm_password) {
      console.log("Passwords do not match");
      document.getElementById("confirm_password_element").textContent =
        "Passwords do not match";
      return;
    }
  };

  const submitForm = (e) => {
    e.preventDefault(); // Prevent form submission
    //   console.log("first name:", document.getElementById("first-name").value);

    // var confirmUserIsAtLeastThirteen = confirm("You must be 18 years old or older in order to make an account on WWP. Confirm you are at least 18 years old by clicking 'OK' below. If not, please click 'Cancel'. We are sorry if you cannot make an account - but please, feel free to still join us in prayer and use the platform!" +
    // "\n\nAlso, by making an account you are agreeing to our Privacy Policy and Terms of Service.");
    //   if (confirmUserIsAtLeastThirteen) {
    // user confirmed that they are at least 18
    //     console.log('User confirmed they are 18 or older.');
    //   history("/dashboard");    //uts the dashboard into the url
    // console.log("First Name: ", data.first_name);
    // console.log("!First Name: ", !data.first_name);
    // console.log("isnanFirst Name: ", isNaN(data.first_name)); //isnan is not a number
    // console.log(
    //   "only characters First Name: ",
    //   /^[a-zA-Z]+$/.test(data.first_name)
    // );
    //  console.log("Last Name: ", data.last_name);
    // console.log("Username: ", data.username);
    // console.log("Email: ", data.email);
    // console.log("Password: ", data.password);
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

    const error_text = "There is an error in your submission";
    if (!/^[a-zA-Z]/.test(data.first_name)) {
      console.log("First name must begin with a letter");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (data.first_name.length > 20) {
      console.log("First name entry is too long");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (!/^[a-zA-Z]/.test(data.last_name)) {
      console.log("Last name must begin with a letter");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (data.last_name.length > 20) {
      console.log("Last name entry is too long");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (data.email.length === 0) {
      console.log("email is empty");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (
      !String(data.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      console.log("Invalid email");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (regexp2.test(data.username)) {
      console.log("Username can only have numbers, letters, _ or -");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (data.username.length < 6) {
      console.log("Username is too short");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (data.username.length > 30) {
      console.log("Username is too long");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    } else if (data.password.length < 8) {
      console.log("Password needs to be at least 8 characters");
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    }

    if (regexp3.test(data.password)) {
      console.log("Password has 1 uppercazse letter");
      document.getElementById("password_uppercase_element").textContent = "";
    } else {
      console.log("Password needs at least 1 uppercase letter");
      document.getElementById("password_uppercase_element").textContent =
        "Password needs at least 1 uppercase letter";

      snackbar.showMessage(error_text, "Undo", () => handleUndo());
    }

    if (regexp5.test(data.password)) {
      console.log("Password has 1 lowercase letter");
      document.getElementById("password_lowercase_element").textContent = "";
    } else {
      console.log("Password needs at least 1 lowercase letter");
      document.getElementById("password_lowercase_element").textContent =
        "Password needs at least 1 lowercase letter";
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    }

    if (regexp7.test(data.password)) {
      console.log("Password has 1 number");
      document.getElementById("password_number_element").textContent = "";
    } else {
      console.log("Password needs at least 1 number");
      document.getElementById("password_number_element").textContent =
        "Password needs at least 1 number";
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    }

    if (regexp9.test(data.password)) {
      console.log("Password has 1 special character");
      document.getElementById("password_specialcharacter_element").textContent =
        "";
    } else {
      console.log("Password needs at least 1 special character");
      document.getElementById("password_specialcharacter_element").textContent =
        "Password needs at least 1 special character";
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    }

    if (data.password != data.confirm_password) {
      console.log("Passwords do not match");
      document.getElementById("confirm_password_element").textContent =
        "Passwords do not match";
      snackbar.showMessage(error_text, "Undo", () => handleUndo());
      return;
    }

    $.ajax({
      type: "POST",
      //  dataType: "json",
      //C:/Users/Administrator/Documents/ReactJS - Basic App/react-course/php/register.php
      //axios.post('http://localhost/react-course/php/register.php', sendData).then((result) => {
      // url: "../php/register.php", // ./ is the same thing as http://localhost/

      url: "https://worldwideprayer.world/register.php",
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        username: data.username,
        password: data.password,
      },
      success: function (response) {
        console.log("Response:", response); // response.responseText);
        // window.open("./home", "_self");
        if (response.includes("Register Successful")) {
          console.log("Register was successful");
          snackbar.showMessage("A link has been sent to your email for you to confirm your account!", "Undo", () => handleUndo());

          //        snackbarMessage.innerHTML = "A link has been sent to your email for you to confirm your account!";
          //       snackbarMessage.className = "show";
          //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
         } else if (response.includes('"error":true')) {
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
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://worldwideprayer.world/WWPBackgroundPhotos/prayerpic24.png)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "500px", opacity:"75%" }}>
        <MDBCardBody className="px-5">
          <form onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase text-center mb-5">
                  Create an account
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">First Name</div>
              <MDBInput
                wrapperClass="mb-4"
                className="form-control"
                onChange={handleChangeFirstName}
                value={data.first_name}
                name="first_name"
                size="lg"
                id="first_name_edittextbox"
                type="text"
              />
              <span
                id="first_name_element"
                className="red"
                style={{ color: "red" }}
              >
                {""}
              </span>
            </div>

            <div className="row">
              <div className="col-md-6">Last Name</div>
              <MDBInput
                wrapperClass="mb-4"
                className="form-control"
                onChange={handleChangeLastName}
                value={data.last_name}
                name="last_name"
                size="lg"
                id="last_name_edittextbox"
                type="text"
              />
              <span
                id="last_name_element"
                className="red"
                style={{ color: "red" }}
              >
                {""}
              </span>
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
              <div className="col-md-6">Username</div>
              <MDBInput
                wrapperClass="mb-4"
                className="form-control"
                onChange={handleChangeUsername}
                value={data.username}
                name="username"
                size="lg"
                id="username_edittextbox"
                type="text"
              />
              <span
                id="username_element"
                className="red"
                style={{ color: "red" }}
              >
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

            <div className="row">
              <div className="col-md-6">Confirm Password</div>
              <MDBInput
                wrapperClass="mb-4"
                className="form-control"
                onChange={handleChangeConfirmPassword}
                value={data.confirm_password}
                name="confirm_password"
                size="lg"
                id="confirm_password_edittextbox"
                type="password"
              />
              <span
                id="confirm_password_element"
                className="red"
                style={{ color: "red" }}
              >
                {""}
              </span>
            </div>

            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>

            <div className="row">
              <Button
                //    className="mb-4 w-100 gradient-custom-4"
                name="submit"
                value="Register"
                type="submit"
                size="lg"
                id="submit_element"
              >
                Register
              </Button>
            </div>

            <div className="row">
              <div className="d-flex flex-row justify-content-center mb-4">
                Already have an account?
              </div>
              <Button
                //   className="mb-4 w-100 gradient-custom-4"
                name="submit"
                value="Login"
                type="submit"
                size="lg"
                onClick={loginPage}
              >
                Login
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
export default Register;