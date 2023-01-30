import { useState } from "react";
import { Navigate } from "react-router-dom";
//import { Button } from 'react';
import { useNavigate } from 'react-router-dom';

import  axios  from 'axios';
import $ from "jquery";



const Register = () => {

    let history = useNavigate(); // use for Navigate on Previous
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });
 
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    //console.log(data);   //data has the data of every key stroke in any of these inputs (first name, last name, email, username, password)
  };



  
  const submitForm = (e) => {
    e.preventDefault(); // Prevent form submission
 //   console.log("first name:", document.getElementById("first-name").value);
  
   // var confirmUserIsAtLeastThirteen = confirm("You must be 18 years old or older in order to make an account on WWP. Confirm you are at least 18 years old by clicking 'OK' below. If not, please click 'Cancel'. We are sorry if you cannot make an account - but please, feel free to still join us in prayer and use the platform!" +
   // "\n\nAlso, by making an account you are agreeing to our Privacy Policy and Terms of Service.");
 //   if (confirmUserIsAtLeastThirteen) {
      // user confirmed that they are at least 18
      console.log('User confirmed they are 18 or older.');
   //   history("/dashboard");    //uts the dashboard into the url
      $.ajax({
        type: "POST",
        //C:/Users/Administrator/Documents/ReactJS - Basic App/react-course/php/register.php
            //axios.post('http://localhost/react-course/php/register.php', sendData).then((result) => {
       // url: "../php/register.php", // ./ is the same thing as http://localhost/
       
       url: "C:/Users/Administrator/Documents/ReactJS - Basic App/react-course/php/register.php ",
       
       data: {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            usernname: data.username,
            password: data.password
        },
        success: function (response) {
          console.log("responssse:", response);// response.responseText);
          // window.open("./home", "_self");
          if (response.includes("Register Successful")) {
            console.log("Register was successful");
  
    //        snackbarMessage.innerHTML = "A link has been sent to your email for you to confirm your account!";
     //       snackbarMessage.className = "show";
    //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
  
          } else if (response.includes("User already existed with this email")) {
  
     //       snackbarMessage.innerHTML = "An account has already been made with this email.";
    //        snackbarMessage.className = "show";
    //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
          } else if (response.includes("User already existed with this username")) {
  
     //       snackbarMessage.innerHTML = "An account has already been made with this username.";
    //        snackbarMessage.className = "show";
    //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
          } else if (response.includes('"error":true') && response.includes('domain may not exist')) {
  
    //        snackbarMessage.innerHTML = "An error occurred. The email you provided may not exist.";
    //        snackbarMessage.className = "show";
    //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
          } else if (response.includes('"error":true') && response.includes('Thank you for making your presence')) {
  
   //         snackbarMessage.innerHTML = "A link has been sent to your email for you to confirm your account!";
    //        snackbarMessage.className = "show";
    //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
          } else if (response.includes('"error":true')) {
  
            // after json decode or w/e can just print out response.error_msg
     //       snackbarMessage.innerHTML = "There was an error registering your account: " + response.substring(response.indexOf('"error_msg":') + '"error_msg":'.length, response.length - 1);
     //       snackbarMessage.className = "show";
    //        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
          }
        },
        error: function (error) {
          console.log("There was an error registering", error);
  
   //       snackbarMessage.innerHTML = "There was an error registering your account: " + error.substring(0, error.length - 1);
    //      snackbarMessage.className = "show";
   //       setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
        }
      });
  
 //   } else {
      // can't make account (under COPPA Act, the FTC (Federal Trade Commission) doesn't allow information to be taken from children under 18 without going through some hoops)
 //     console.log('User said they are not 18.');
 //   }
  
  };


  return (


    
    <div className="main-box">
      <form onSubmit={submitForm}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1> Register Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">First Name</div>
          <div className="col-md-6">
            <input
              type="text"
              name="first_name"
              className="form-control"
              onChange={handleChange}
              value={data.first_name}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Last Name</div>
          <div className="col-md-6">
            <input
              type="text"
              name="last_name"
              className="form-control"
              onChange={handleChange}
              value={data.last_name}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Email</div>
          <div className="col-md-6">
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={data.email}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Username</div>
          <div className="col-md-6">
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={handleChange}
              value={data.username}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Password</div>
          <div className="col-md-6">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              value={data.passweord}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Confirm Password</div>
          <div className="col-md-6">
            <input
              type="password"
              name="confirm_password"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <input
              type="submit"
              name="submit"
              value="Register"
              className="btn btn-sucess"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
