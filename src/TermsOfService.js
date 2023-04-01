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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
//import background from "react-bootstrap/background";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Backdrop } from "@mui/material";

const css = `   ul {
        list - style - type: square;
    }
    
    ul>li>ul {
        list - style - type: circle;
    }
    
    ul>li>ul>li>ul {
        list - style - type: square;
    }
    
    ol li {
        font - family: Arial;
    }
    `;

const css2 = `                [data-custom-class='body'],
    [data-custom-class='body'] * {
        background: transparent !important;
    }
    
    [data-custom-class='title'],
    [data-custom-class='title'] * {
        font - family: Arial !important;
    fontsize: 26px !important;
    color: #000000 !important;
    }
    
    [data-custom-class='subtitle'],
    [data-custom-class='subtitle'] * {
        font - family: Arial !important;
    color: #595959 !important;
    fontsize: 14px !important;
    }
    
    [data-custom-class='heading_1'],
    [data-custom-class='heading_1'] * {
        font - family: Arial !important;
    fontsize: 19px !important;
    color: #000000 !important;
    }
    
    [data-custom-class='heading_2'],
    [data-custom-class='heading_2'] * {
        font - family: Arial !important;
    fontsize: 17px !important;
    color: #000000 !important;
    }
    
    [data-custom-class='body_text'],
    [data-custom-class='body_text'] * {
        color: #595959 !important;
    fontsize: 14px !important;
    fontfamily: Arial !important;
    }
    
    [data-custom-class='link'],
    [data-custom-class='link'] * {
        color: #3030F1 !important;
    fontsize: 14px !important;
    fontfamily: Arial !important;
    word-break: break-word !important;
    }
    `;

const TermsOfService = () => {
  let history = useNavigate(); // use for Navigate on Previous
  const loginPage = async () => {
    // await /* API call here */
    history("/Login");
  };
  const registerPage = async () => {
    // await /* API call here */
    history("/Register");
  };
  return (
    <div>
      <style></style>
      <div data-custom-class="body">
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <strong>
            <span style={{ fontsize: "26px" }}>
              <span data-custom-class="title">TERMS AND CONDITIONS</span>
            </span>
          </strong>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px", color: "rgb(127, 127, 127)" }}>
            <strong>
              <span data-custom-class="subtitle">
                Last Updated
                <span className="question">1</span>
                <span className="question">March</span>
              </span>
              <span className="question">
                <span data-custom-class="subtitle">2023</span>
              </span>
            </strong>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        ,
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>,"initial",
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="heading_1"></span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="heading_1">
            <span
              style={{
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              <strong style={{ fontweight: 700 }}>1.</strong>
            </span>
            <strong
              style={{
                fontweight: 700,
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
                
            </strong>
            <strong
              style={{
                fontweight: 700,
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
               Agreement to Terms
            </strong>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <strong>
                <span data-custom-class="heading_1">  </span>
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: 400,
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                    float: "none",
                  }}
                >
                  <span data-custom-class="heading_1"></span>
                </span>
                 
              </strong>
               
            </span>
             
          </span>
        </div>
        <div style={{ lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                1.1  These Terms and Conditions constitute a legally binding
                agreement made between you, whether personally or on behalf of
                an entity (<strong>you</strong>), and{" "}
                <strong>
                  <span className="question">World Wide Prayer</span>
                  <span className="block-component"></span>
                </strong>
                ,<strong> </strong>located at
                <strong>
                   <span className="question">Buckingham Dr SW</span>,
                </strong>
                <strong>
                  <span className="block-component"></span>
                </strong>
                <strong>
                  <span className="question">Huntsville</span>,
                  <span className="block-component"></span>
                  <span className="block-component"></span>
                  <span className="block-component"></span>
                  <span className="question">AL</span>
                  <span className="statement-end-if-in-editor"></span>
                  <span className="block-component"></span>
                </strong>
                <strong>
                   <span className="question">35803</span>
                  <span className="question">United States</span>
                </strong>
                (<strong>we</strong>, <strong>us</strong>), concerning your
                access to and use of the{" "}
                <span className="question">
                  <strong>World Wide Prayer</strong>
                </span>
                <strong>
                   (
                  <span className="question">
                    <a
                      href="https://worldwideprayer.world/"
                      target="_blank"
                      data-custom-class="link"
                    >
                      https://worldwideprayer.world/
                    </a>
                  </span>
                  ) 
                </strong>
                website as well as any related applications (the{" "}
                <strong>Site</strong>). 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                The Site provides the following services:{" "}
                <strong>
                  <span className="question">
                    World Wide Prayer is an online platform for everyone in the
                    world to prayer together. Users are able to honor God and
                    focus on self-improvement together.
                  </span>
                </strong>
                (<strong>Services</strong>). You agree that by accessing the
                Site and/or Services, you have read, understood, and agree to be
                bound by all of these Terms and Conditions. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <strong>
                  If you do not agree with all of these Terms and Conditions,
                  then you are prohibited from using the Site and Services and
                  you must discontinue use immediately
                </strong>
                . We recommend that you print a copy of these Terms and
                Conditions for future reference. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              1.2
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                The supplemental policies set out in Section 1.7 below, as well
                as any supplemental terms and condition or documents that may be
                posted on the Site from time to time, are expressly incorporated
                by reference. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              1.3
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We may make changes to these Terms and Conditions at any time.
                The updated version of these Terms and Conditions will be
                indicated by an updated “Revised” date and the updated version
                will be effective as soon as it is accessible. You are
                responsible for reviewing these Terms and Conditions to stay
                informed of updates. Your continued use of the Site represents
                that you have accepted such changes. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              1.4
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We may update or change the Site from time to time to reflect
                changes to our products, our users' needs and/or our business
                priorities. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              1.5
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Our site is directed to people residing in{" "}
                <span className="question">__________</span>. The information
                provided on the Site is not intended for distribution to or use
                by any person or entity in any jurisdiction or country where
                such distribution or use would be contrary to law or regulation
                or which would subject us to any registration requirement within
                such jurisdiction or country.  
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              1.6
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                The Site is intended for users who are at least 18 years old.
                 If you are under the age of 18, you are not permitted to
                register for the Site or use the Services without parental
                permission.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              1.7
            </span>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                Additional policies which also apply to your use of the Site
                include: <span className="block-component"></span> 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <strong
                style={{
                  fontweight: "700",
                  color: "rgb(0, 0, 0)",
                  fontfamily: "sans-serif",
                  fontsize: "medium",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "start",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                  backgroundcolor: "rgb(255, 255, 255)",
                }}
              >
                <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                  <span data-custom-class="body_text">● </span>
                </span>
                 
              </strong>
              <span data-custom-class="body_text">
                Our Privacy Notice
                <span className="question">
                  <a
                    href="https://worldwideprayer.world/privacy-notice"
                    target="_blank"
                    data-custom-class="link"
                  >
                    https://worldwideprayer.world/privacy-notice
                  </a>
                </span>
                , which sets out the terms on which we process any personal data
                we collect from you, or that you provide to us. By using the
                Site, you consent to such processing and you warrant that all
                data provided by you is accurate.
                <span className="statement-end-if-in-editor"></span>
                <span className="block-component"></span>
                <span className="block-component"></span>
                <span className="block-component"></span>
                <span className="block-component"></span>
              </span>
              <span
                style={{
                  color: "rgb(89, 89, 89)",
                  fontfamily: "sans-serif",
                  fontsize: "15px",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  fontweight: "400",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "justify",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  backgroundcolor: "rgb(255, 255, 255)",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                  display: "inline !important",
                  float: "none",
                }}
              >
                <span data-custom-class="body_text"></span>
              </span>
               
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <br></br>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <span
                style={{
                  fontfamily: "sans-serif",
                  fontsize: "15px",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  fontweight: "400",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "justify",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  backgroundcolor: "rgb(255, 255, 255)",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                  float: "none",
                  display: "inline !important",
                }}
              >
                <strong>
                  <span data-custom-class="heading_1">2.</span>
                </strong>
                 
              </span>
              <strong>
                <span data-custom-class="heading_1">Acceptable Use </span>
              </strong>
              <span data-custom-class="body_text">
                <span className="block-component"></span>
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              2.1
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                You may not access or use the Site for any purpose other than
                that for which we make the site and our services available. The
                Site may not be used in connection with any commercial endeavors
                except those that are specifically endorsed or approved by us. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              2.2
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                As a user of this Site, you agree not to:{" "}
              </span>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Make any unauthorized use of the Site, including collecting
                  usernames and/or email addresses of users to send unsolicited
                  email or creating user accounts under false pretenses
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the Site, including features that
                  prevent or restrict the use or copying of any content or
                  enforce limitations on the use
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Trick, defraud, or mislead us and other users, especially in
                  any attempt to learn sensitive account information such as
                  user passwords
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Make improper use of our support services, or submit false
                  reports of abuse or misconduct
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Engage in any automated use of the system, such as using
                  scripts to send comments or messages, or using any data
                  mining, robots, or similar data gathering and extraction tools
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Interfere with, disrupt, or create an undue burden on the Site
                  or the networks and services connected to the Site
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Attempt to impersonate another user or person, or use the
                  username of another user
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Delete the copyright or other proprietary rights notice from
                  any of the content
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material that interferes with
                  any party’s uninterrupted use and enjoyment of the Site, or
                  any material that acts as a passive or active information
                  collection or transmission mechanism
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">
                  Use, launch, or engage in any automated use of the system,
                  such as using scripts to send comments or messages, robots,
                  scrapers, offline readers, or similar data gathering and
                  extraction tools
                </span>
                <span className="forloop-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "medium",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
              Falsely imply a relationship with us or another company with whom
              you do not have a relationship 
            </span>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <span
                className="block-component"
                style={{
                  display: "inline",
                  boxsizing: "border-box",
                  borderradius: "3px",
                  color: "rgb(255, 255, 255)",
                  padding: "0px 2px",
                  backgroundcolor: "rgb(127, 156, 172)",
                  fontfamily: "sans-serif",
                  fontsize: "15px",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  fontweight: "400",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "justify",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                }}
              >
                <span data-custom-class="body_text"></span>
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <strong>
            <span style={{ fontsize: "15px" }}>
              <span data-custom-class="heading_1">
                3.   Information you provide to us
              </span>
            </span>
          </strong>{" "}
          <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
            <span data-custom-class="body_text"></span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
              <span
                style={{
                  color: "rgb(89, 89, 89)",
                  fontfamily: "sans-serif",
                  fontsize: "15px",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  fontweight: "400",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "justify",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  backgroundcolor: "rgb(255, 255, 255)",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                  display: "inline !important",
                  float: "none",
                }}
              >
                3.1
              </span>
              You represent and warrant that: (a) all registration information
              you submit will be true, accurate, current, and complete and
              relate to you and not a third party; (b) you will maintain the
              accuracy of such information and promptly update such information
              as necessary; (c) you will keep your password confidential and
              will be responsible for all use of your password and account; (d)
              you have the legal capacity and you agree to comply with these
              Terms and Conditions; and (e) you are not a minor in the
              jurisdiction in which you reside, or if a minor, you have received
              parental permission to use the Site. 
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
              If you know or suspect that anyone other than you knows your user
              information (such as an identification code or user name) and/or
              password you must promptly notify us at{" "}
              <span className="question">
                newworlddevelopers@protonmail.com
              </span>
              .
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              3.2
            </span>
            <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
              If you provide any information that is untrue, inaccurate, not
              current or incomplete, we may suspend or terminate your account.
              We may remove or change a user name you select if we determine
              that such user name is inappropriate.{" "}
              <span className="block-component"></span>{" "}
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <span className="statement-end-if-in-editor"></span>
              </span>
            </span>
            <span
              className="block-component"
              style={{ fontsize: "15px" }}
            ></span>
          </span>
          <span
            style={{
              backgroundcolor: "initial",
              color: "rgb(89, 89, 89)",
              fontsize: "15px",
            }}
          >
            <span data-custom-class="body_text"> </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              color: "rgb(0, 0, 0)",
              fontfamily: "sans-serif",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              fontsize: "15px",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <strong style={{ fontweight: "700" }}>
              <span data-custom-class="heading_1">4.</span>
            </strong>
             
          </span>
          <span data-custom-class="heading_1">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                fontsize: "15px",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
               
            </strong>
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                fontsize: "15px",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
                
            </strong>
          </span>
          <strong>
            <span style={{ fontsize: "15px" }}>
              <span data-custom-class="heading_1">
                Content you provide to us  
              </span>
              <span
                style={{
                  color: "rgb(89, 89, 89)",
                  fontfamily: "sans-serif",
                  fontsize: "15px",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  fontweight: "400",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "justify",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  backgroundcolor: "rgb(255, 255, 255)",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                  display: "inline !important",
                  float: "none",
                }}
              >
                <span data-custom-class="heading_1"></span>
              </span>
            </span>
          </strong>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              fontfamily: "sans-serif",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              color: "rgb(89, 89, 89)",
              fontsize: "15px",
              textalign: "justify",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <span data-custom-class="body_text">4.1  </span>
          </span>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
              There may be opportunities for you to post content to the Site or
              send feedback to us (<strong>User Content</strong>). You
              understand and agree that your User Content may be viewed by other
              users on the Site, and that they may be able to see who has posted
              that User Content. <span className="block-component"></span>
            </span>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                 <span className="block-component"></span>
              </span>
            </span>
          </span>
        </div>
        <div
          style={{
            textalign: "justify",
            marginleft: "20px",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              4.2
            </span>
            <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
              In posting User Content, including reviews or making contact with
              other users of the Site you shall comply with our Acceptable Use
              Policy <span className="question">__________</span>.
            </span>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                 <span className="statement-end-if-in-editor"></span>
              </span>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              4.3
            </span>
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                fontsize: "15px",
                color: "rgb(89, 89, 89)",
              }}
            >
                
            </span>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                You warrant that any User Content does comply with our
                Acceptable Use Policy, and you will be liable to us and
                indemnify us for any breach of that warranty. This means you
                will be responsible for any loss or damage we suffer as a result
                of your breach of this warranty.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              4.4
            </span>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                We have the right to remove any User Content you put on the Site
                if, in our opinion, such User Content does not comply with the
                Acceptable Use Policy. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              4.5
            </span>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                We are not responsible and accept no liability for any User
                Content including any such content that contains incorrect
                information or is defamatory or loss of User Content. We accept
                no obligation to screen, edit or monitor any User Content but we
                reserve the right to remove, screen and/or edit any User Content
                without notice and at any time. User Content has not been
                verified or approved by us and the views expressed by other
                users on the Site do not represent our views or values
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              4.6
            </span>
            <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
              If you wish to complain about User Content uploaded by other users
              please contact us <span className="block-component"></span>at{" "}
              <span className="question">
                newworlddevelopers@protonmail.com
              </span>{" "}
              or use the take down or report button.{" "}
              <span className="statement-end-if-in-editor"></span>{" "}
              <span
                style={{
                  color: "rgb(89, 89, 89)",
                  fontfamily: "sans-serif",
                  fontsize: "15px",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  fontweight: "400",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "justify",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  backgroundcolor: "rgb(255, 255, 255)",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                  display: "inline !important",
                  float: "none",
                }}
              ></span>
               
            </span>
             
          </span>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <span className="statement-end-if-in-editor"></span>
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <br></br>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <strong>
            <span data-custom-class="heading_1">5.</span>
          </strong>
          <span style={{ fontsize: "15px" }}>
            <span data-custom-class="heading_1">
              <strong>Our content </strong> 
            </span>
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
              <span data-custom-class="body_text"></span>
            </span>
            <span data-custom-class="body_text">  </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              fontfamily: "sans-serif",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              color: "rgb(89, 89, 89)",
              fontsize: "15px",
              textalign: "justify",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <span data-custom-class="body_text">5.1  </span>
          </span>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Unless otherwise indicated, the Site and Services including
                source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (<strong>Our Content</strong>) are owned or licensed to us,
                and are protected by copyright and trade mark laws. 
              </span>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              5.2
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Except as expressly provided in these Terms and Conditions, no
                part of the Site, Services or Our Content may be copied,
                reproduced, aggregated, republished, uploaded, posted, publicly
                displayed, encoded, translated, transmitted, distributed, sold,
                licensed, or otherwise exploited for any commercial purpose
                whatsoever, without our express prior written permission.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              5.3
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Provided that you are eligible to use the Site, you are granted
                a limited licence to access and use the Site and Our Content and
                to download or print a copy of any portion of the Content to
                which you have properly gained access solely for your personal,
                non-commercial use.  
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              5.4
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                You shall not (a) try to gain unauthorised access to the Site or
                any networks, servers or computer systems connected to the Site;
                and/or (b) make for any purpose including error correction, any
                modifications, adaptions, additions or enhancements to the Site
                or Our Content, including the modification of the paper or
                digital copies you may have downloaded.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              5.5
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We shall (a) prepare the Site and Our Content with reasonable
                skill and care; and (b) use industry standard virus detection
                software to try to block the uploading of content to the Site
                that contains viruses. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              5.6
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                The content on the Site is provided for general information
                only. It is not intended to amount to advice on which you should
                rely. You must obtain professional or specialist advice before
                taking, or refraining from taking, any action on the basis of
                the content on the Site. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              5.7
            </span>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span data-custom-class="body_text">
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Although we make reasonable efforts to update the information on
                our site, we make no representations, warranties or guarantees,
                whether express or implied, that Our Content on the Site is
                accurate, complete or up to date.
              </span>
              <span className="block-component"></span>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <br></br>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              color: "rgb(0, 0, 0)",
              fontfamily: "sans-serif",
              fontsize: "15px",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <strong style={{ fontweight: "700" }}>
              <span data-custom-class="heading_1">6. </span>
            </strong>
             
          </span>
          <span data-custom-class="heading_1">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
               
            </strong>
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
               
            </strong>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span data-custom-class="heading_1">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  Site Management  
                  <span
                    style={{
                      color: "rgb(89, 89, 89)",
                      fontfamily: "sans-serif",
                      fontsize: "15px",
                      fontstyle: "normal",
                      fontvariantligatures: "normal",
                      fontvariantcaps: "normal",
                      fontweight: "400",
                      letterspacing: "normal",
                      orphans: "2",
                      textalign: "justify",
                      textindent: "0px",
                      texttransform: "none",
                      whitespace: "normal",
                      widows: "2",
                      wordspacing: "0px",
                      webkittextstrokewidth: "0px",
                      backgroundcolor: "rgb(255, 255, 255)",
                      textdecorationstyle: "initial",
                      textdecorationcolor: "initial",
                      display: "inline !important",
                      float: "none",
                    }}
                  ></span>
                </strong>
                 
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              fontfamily: "sans-serif",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              color: "rgb(89, 89, 89)",
              fontsize: "15px",
              textalign: "justify",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <span data-custom-class="body_text">6.1</span>
          </span>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                fontsize: "15px",
                color: "rgb(89, 89, 89)",
              }}
            >
                
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We reserve the right at our sole discretion, to (1) monitor the
                Site for breaches of these Terms and Conditions; (
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                    float: "none",
                  }}
                >
                  2
                </span>
                ) take appropriate legal action against anyone in breach of
                applicable laws or these Terms and Conditions;{" "}
                <span className="block-component"></span>
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                    float: "none",
                  }}
                >
                  (
                </span>
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    backgroundcolor: "rgb(255, 255, 255)",
                    float: "none",
                    display: "inline !important",
                  }}
                >
                  3
                </span>
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                    float: "none",
                  }}
                >
                  ) refuse, restrict access to or availability of, or disable
                  (to the extent technologically feasible) any of your
                  Contributions;
                </span>
                <span className="statement-end-if-in-editor"></span> (
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                    float: "none",
                  }}
                >
                  4
                </span>
                ) remove from the Site or otherwise disable all files and
                content that are excessive in size or are in any way a burden to
                our systems; and (
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                    float: "none",
                  }}
                >
                  5
                </span>
                ) otherwise manage the Site in a manner designed to protect our
                rights and property and to facilitate the proper functioning of
                the Site and Services.
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              6.2
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We do not guarantee that the Site will be secure or free from
                bugs or viruses.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              6.3
            </span>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                You are responsible for configuring your information technology,
                computer programs and platform to access the Site and you should
                use your own virus protection software.{" "}
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <br></br>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              color: "rgb(0, 0, 0)",
              fontfamily: "sans-serif",
              fontsize: "15px",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <strong style={{ fontweight: "700" }}>
              <span data-custom-class="heading_1">7.</span>
            </strong>
             
          </span>
          <span data-custom-class="heading_1">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
                
            </strong>
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
               
            </strong>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span data-custom-class="heading_1">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  Modifications to and availability of the Site  
                  <span
                    style={{
                      color: "rgb(89, 89, 89)",
                      fontfamily: "sans-serif",
                      fontsize: "15px",
                      fontstyle: "normal",
                      fontvariantligatures: "normal",
                      fontvariantcaps: "normal",
                      fontweight: "400",
                      letterspacing: "normal",
                      orphans: "2",
                      textalign: "justify",
                      textindent: "0px",
                      texttransform: "none",
                      whitespace: "normal",
                      widows: "2",
                      wordspacing: "0px",
                      webkittextstrokewidth: "0px",
                      backgroundcolor: "rgb(255, 255, 255)",
                      textdecorationstyle: "initial",
                      textdecorationcolor: "initial",
                      display: "inline !important",
                      float: "none",
                    }}
                  ></span>
                </strong>
                 
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              fontfamily: "sans-serif",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              color: "rgb(89, 89, 89)",
              fontsize: "15px",
              textalign: "justify",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <span data-custom-class="body_text">7.1  </span>
          </span>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We reserve the right to change, modify, or remove the contents
                of the Site at any time or for any reason at our sole discretion
                without notice. We also reserve the right to modify or
                discontinue all or part of the Services without notice at any
                time.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              7.2
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We cannot guarantee the Site and Services will be available at
                all times. We may experience hardware, software, or other
                problems or need to perform maintenance related to the Site,
                resulting in interruptions, delays, or errors. You agree that we
                have no liability whatsoever for any loss, damage, or
                inconvenience caused by your inability to access or use the Site
                or Services during any downtime or discontinuance of the Site or
                Services.We are not obliged to maintain and support the Site or
                Services or to supply any corrections, updates, or releases.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                textalign: "justify",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              7.3
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                There may be information on the Site that contains typographical
                errors, inaccuracies, or omissions that may relate to the
                Services, including descriptions, pricing, availability, and
                various other information. We reserve the right to correct any
                errors, inaccuracies, or omissions and to change or update the
                information at any time, without prior notice.{" "}
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <br></br>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              color: "rgb(0, 0, 0)",
              fontfamily: "sans-serif",
              fontsize: "15px",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <strong style={{ fontweight: "700" }}>
              <span data-custom-class="heading_1">8.</span>
            </strong>
             
          </span>
          <span data-custom-class="heading_1">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
                
            </strong>
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
               
            </strong>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span data-custom-class="heading_1">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  Disclaimer/Limitation of Liability
                  <span
                    style={{
                      color: "rgb(89, 89, 89)",
                      fontfamily: "sans-serif",
                      fontsize: "15px",
                      fontstyle: "normal",
                      fontvariantligatures: "normal",
                      fontvariantcaps: "normal",
                      fontweight: "400",
                      letterspacing: "normal",
                      orphans: "2",
                      textalign: "justify",
                      textindent: "0px",
                      texttransform: "none",
                      whitespace: "normal",
                      widows: "2",
                      wordspacing: "0px",
                      webkittextstrokewidth: "0px",
                      backgroundcolor: "rgb(255, 255, 255)",
                      textdecorationstyle: "initial",
                      textdecorationcolor: "initial",
                      display: "inline !important",
                      float: "none",
                    }}
                  ></span>
                </strong>
                 
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              fontfamily: "sans-serif",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              color: "rgb(89, 89, 89)",
              fontsize: "15px",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <span data-custom-class="body_text">8.1</span>
          </span>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
                fontsize: "15px",
                color: "rgb(89, 89, 89)",
              }}
            >
                
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                The Site and Services are provided on an as-is and as-available
                basis. You agree that your use of the Site and/or Services will
                be at your sole risk except as expressly set out in these Terms
                and Conditions. All warranties, terms, conditions and
                undertakings, express or implied (including by statute, custom
                or usage, a course of dealing, or common law) in connection with
                the Site and Services and your use thereof including, without
                limitation, the implied warranties of satisfactory quality,
                fitness for a particular purpose and non-infringement are
                excluded to the fullest extent permitted by applicable law. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We make no warranties or representations about the accuracy or
                completeness of the Site’s content and are not liable for any
                (1) errors or omissions in content: (2) any unauthorized access
                to or use of our servers and/or any and all personal information
                and/or financial information stored on our server; (3) any
                interruption or cessation of transmission to or from the site or
                services; and/or (4) any bugs, viruses, trojan horses, or the
                like which may be transmitted to or through the site by any
                third party. We will not be responsible for any delay or failure
                to comply with our obligations under these Terms and Conditions
                if such delay or failure is caused by an event beyond our
                reasonable control.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              8.2
            </span>
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
                fontsize: "15px",
                color: "rgb(89, 89, 89)",
              }}
            >
                
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Our responsibility for loss or damage suffered by you:
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <strong>
              <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
                Whether you are a consumer or a business user:
              </span>
            </strong>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div
          style={{
            textalign: "justify",
            marginleft: "20px",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(0, 0, 0)",
                fontsize: "medium",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                We do not exclude or limit in any way our liability to you where
                it would be unlawful to do so. This includes liability for death
                or personal injury caused by our negligence or the negligence of
                our employees, agents or subcontractors and for fraud or
                fraudulent misrepresentation. 
              </span>
            </span>
             
          </span>
        </div>
        <div
          style={{
            textalign: "justify",
            marginleft: "20px",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div
          style={{
            textalign: "justify",
            marginleft: "20px",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(0, 0, 0)",
                fontsize: "medium",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                If we fail to comply with these Terms and Conditions, we will be
                responsible for loss or damage you suffer that is a foreseeable
                result of our breach of these Terms and Conditions, but we would
                not be responsible for any loss or damage that were not
                foreseeable at the time you started using the Site/Services. 
              </span>
            </span>
             
          </span>
        </div>
        <div
          style={{
            textalign: "justify",
            marginleft: "20px",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div
          style={{
            textalign: "justify",
            marginleft: "20px",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                Notwithstanding anything to the contrary contained in the
                Disclaimer/Limitation of Liability section, our liability to you
                for any cause whatsoever and regardless of the form of the
                action, will at all times be limited to a total aggregate amount
                equal to the greater of (a) the sum of{" "}
                <span className="block-component"></span>£5000
                <span className="statement-end-if-in-editor"></span> or (b) the
                amount paid, if any, by you to us for the Services/Site during
                the six (6) month period prior to any cause of action arising.{" "}
                <span className="block-component"></span>
                <span className="block-component"></span>
                <span className="block-component"></span>
              </span>
            </span>
             
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <strong>
              <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
                If you are a consumer user:
              </span>
            </strong>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(0, 0, 0)",
                fontsize: "medium",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                Please note that we only provide our Site for domestic and
                private use. You agree not to use our Site for any commercial or
                business purposes, and we have no liability to you for any loss
                of profit, loss of business, business interruption, or loss of
                business opportunity.
              </span>
            </span>
             
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(0, 0, 0)",
                fontsize: "medium",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span style={{ fontsize: "15px" }}>
                If defective digital content that we have supplied, damages a
                device or digital content belonging to you and this is caused by
                our failure to use reasonable care and skill, we will either
                repair the damage or pay you compensation.
                <span className="block-component"></span> 
              </span>
               
            </span>
             
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div
          style={{
            marginleft: "20px",
            textalign: "justify",
            lineheight: "1.5",
          }}
        >
          <span data-custom-class="body_text">
            <strong
              style={{
                fontweight: "700",
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "start",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(0, 0, 0)",
                fontsize: "medium",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span style={{ fontsize: "13px", color: "rgb(89, 89, 89)" }}>
                ● 
              </span>
            </strong>
            <span style={{ fontsize: "15px", color: "rgb(89, 89, 89)" }}>
              You have legal rights in relation to goods that are faulty or not
              as described. Advice about your legal rights is available from
              your local Citizens' Advice Bureau or Trading Standards office.
              Nothing in these Terms and Conditions will affect these legal
              rights.
            </span>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                 <span className="statement-end-if-in-editor"></span> 
              </span>
              <span
                style={{
                  color: "rgb(89, 89, 89)",
                  fontfamily: "sans-serif",
                  fontsize: "15px",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  fontweight: "400",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "justify",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  backgroundcolor: "rgb(255, 255, 255)",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                  display: "inline !important",
                  float: "none",
                }}
              >
                <span data-custom-class="body_text"> </span>
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <br></br>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              color: "rgb(0, 0, 0)",
              fontfamily: "sans-serif",
              fontsize: "15px",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <strong style={{ fontweight: "700" }}>
              <span data-custom-class="heading_1">9. </span>
            </strong>
             
          </span>
          <span data-custom-class="heading_1">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
               
            </strong>
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
               
            </strong>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span data-custom-class="heading_1">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  Term and Termination  
                  <span
                    style={{
                      color: "rgb(89, 89, 89)",
                      fontfamily: "sans-serif",
                      fontsize: "15px",
                      fontstyle: "normal",
                      fontvariantligatures: "normal",
                      fontvariantcaps: "normal",
                      fontweight: "400",
                      letterspacing: "normal",
                      orphans: "2",
                      textalign: "justify",
                      textindent: "0px",
                      texttransform: "none",
                      whitespace: "normal",
                      widows: "2",
                      wordspacing: "0px",
                      webkittextstrokewidth: "0px",
                      backgroundcolor: "rgb(255, 255, 255)",
                      textdecorationstyle: "initial",
                      textdecorationcolor: "initial",
                      display: "inline !important",
                    }}
                  ></span>
                </strong>
                 
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              fontfamily: "sans-serif",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              color: "rgb(89, 89, 89)",
              fontsize: "15px",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <span data-custom-class="body_text">9.1  </span>
          </span>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                These Terms and Conditions shall remain in full force and effect
                while you use the Site or Services or are otherwise a user of
                the Site, as applicable. You may terminate your use or
                participation at any time, for any reason, by following the
                instructions for terminating user accounts in your account
                settings, if available, or by contacting us at{" "}
                <span className="question">
                  newworlddevelopers@protonmail.com
                </span>
                . 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              9.2
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Without limiting any other provision of these Terms and
                Conditions, we reserve the right to, in our sole discretion and
                without notice or liability, deny access to and use of the Site
                and the Services (including blocking certain IP addresses), to
                any person for any reason including without limitation for
                breach of any representation, warranty or covenant contained in
                these Terms and Conditions or of any applicable law or
                regulation. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                If we determine, in our sole discretion, that your use of the
                Site/Services is in breach of these Terms and Conditions or of
                any applicable law or regulation, we may terminate your use or
                participation in the Site and the Services or delete
                <span className="block-component"></span> your profile and
                <span className="statement-end-if-in-editor"></span> any content
                or information that you posted at any time, without warning, in
                our sole discretion. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                fontfamily: "sans-serif",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                color: "rgb(89, 89, 89)",
                fontsize: "15px",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              9.3
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                If we terminate or suspend your account for any reason set out
                in this Section 9, you are prohibited from registering and
                creating a new account under your name, a fake or borrowed name,
                or the name of any third party, even if you may be acting on
                behalf of the third party. In addition to terminating or
                suspending your account, we reserve the right to take
                appropriate legal action, including without limitation pursuing
                civil, criminal, and injunctive redress.
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                    float: "none",
                  }}
                >
                   
                </span>
                <span className="block-component"></span>
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span
                style={{
                  color: "rgb(0, 0, 0)",
                  fontfamily: "sans-serif",
                  fontstyle: "normal",
                  fontvariantligatures: "normal",
                  fontvariantcaps: "normal",
                  fontweight: "400",
                  letterspacing: "normal",
                  orphans: "2",
                  textalign: "justify",
                  textindent: "0px",
                  texttransform: "none",
                  whitespace: "normal",
                  widows: "2",
                  wordspacing: "0px",
                  webkittextstrokewidth: "0px",
                  textdecorationstyle: "initial",
                  textdecorationcolor: "initial",
                  fontsize: "15px",
                  backgroundcolor: "rgb(255, 255, 255)",
                  float: "none",
                  display: "inline !important",
                }}
              >
                <strong style={{ fontweight: "700" }}>
                  <span data-custom-class="heading_1">10.</span>
                </strong>
                 
              </span>
              <span data-custom-class="heading_1">
                <strong
                  style={{
                    fontweight: "700",
                    color: "rgb(0, 0, 0)",
                    fontfamily: "sans-serif",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    fontsize: "15px",
                    backgroundcolor: "rgb(255, 255, 255)",
                  }}
                >
                   
                </strong>
                <strong
                  style={{
                    fontweight: "700",
                    color: "rgb(0, 0, 0)",
                    fontfamily: "sans-serif",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    fontsize: "15px",
                    backgroundcolor: "rgb(255, 255, 255)",
                  }}
                ></strong>
              </span>
            </span>
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <strong>
                <span data-custom-class="heading_1">Mobile Application  </span>
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                  }}
                >
                  <span data-custom-class="heading_1"></span>
                </span>
                 
              </strong>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <br></br>
              <div style={{ lineheight: "1.5" }}>
                <span data-custom-class="body_text">10.1</span>
                <span style={{ backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                    If you access the Services via a mobile application, then we
                    grant you a revocable, non-exclusive, non-transferable,
                    limited right to install and use the mobile application on
                    wireless electronic devices owned or controlled by you, and
                    to access and use the mobile application on such devices
                    strictly in accordance with the terms and conditions of this
                    license.<span className="block-component"></span>
                    <span className="block-component"></span>
                  </span>
                </span>
                 
              </div>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <span data-custom-class="body_text">
                <br></br>
              </span>
              <div style={{ textalign: "justify", lineheight: "1.5" }}>
                <span data-custom-class="body_text">
                  <span style={{ backgroundcolor: "initial" }}>10.2</span>
                </span>
                <span style={{ fontsize: "15px", backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                    The following terms apply when you use a mobile application
                    obtained from either the Apple Store or Google Play (each an
                    App Distributor) to access the Services: 
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <div
                style={{
                  textalign: "justify",
                  lineheight: "1.5",
                  marginleft: "20px",
                }}
              >
                <span style={{ fontsize: "15px", backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                    (a) The licence granted to you for our mobile application is
                    limited to a non-transferable licence to use the application
                    on a device that utilizes the Apple iOS or Android operating
                    system, as applicable, and in accordance with the usage
                    rules set forth in the applicable App Distributor terms of
                    service; 
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <div
                style={{
                  textalign: "justify",
                  lineheight: "1.5",
                  marginleft: "20px",
                }}
              >
                <span style={{ fontsize: "15px", backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                    (b) We are responsible for providing any maintenance and
                    support services with respect to the mobile application as
                    specified in these Terms and Conditions or as otherwise
                    required under applicable law. You acknowledge that each App
                    Distributor has no obligation whatsoever to furnish any
                    maintenance and support services with respect to the mobile
                    application; 
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <div
                style={{
                  textalign: "justify",
                  lineheight: "1.5",
                  marginleft: "20px",
                }}
              >
                <span style={{ fontsize: "15px", backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                    (c) In the event of any failure of the mobile application to
                    conform to any applicable warranty, you may notify an App
                    Distributor, and the App Distributor, in accordance with its
                    terms and policies, may refund the purchase price, if any,
                    paid for the mobile application, and to the maximum extent
                    permitted by applicable law, an App Distributor will have no
                    other warranty obligation whatsoever with respect to the
                    mobile application; 
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <div
                style={{
                  textalign: "justify",
                  lineheight: "1.5",
                  marginleft: "20px",
                }}
              >
                <span style={{ fontsize: "15px", backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                    (d) You represent and warrant that (i) you are not located
                    in a country that is subject to a U.S. government embargo,
                    or that has been designated by the U.S. government as a
                    “terrorist supporting” country; and (ii) you are not listed
                    on any U.S. government list of prohibited or restricted
                    parties; 
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <div
                style={{
                  textalign: "justify",
                  lineheight: "1.5",
                  marginleft: "20px",
                }}
              >
                <span style={{ fontsize: "15px", backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                    (e) You must comply with applicable third party terms of
                    agreement when using the mobile application, e.g., if you
                    have a VoIP application, then you must not be in breach of
                    their wireless data service agreement when using the mobile
                    application; and 
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify" }}>
          <span style={{ fontsize: "15px" }}>
            <span style={{ color: "rgb(89, 89, 89)" }}>
              <div
                style={{
                  textalign: "justify",
                  lineheight: "1.5",
                  marginleft: "20px",
                }}
              >
                <span style={{ fontsize: "15px", backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                    (f) You acknowledge and agree that the App Distributors are
                    third party beneficiaries of these Terms and Conditions, and
                    that each App Distributor will have the right (and will be
                    deemed to have accepted the right) to enforce these Terms
                    and Conditions against you as a third party beneficiary
                    thereof.
                  </span>
                </span>
                <span style={{ backgroundcolor: "initial" }}>
                  <span data-custom-class="body_text">
                      <span className="statement-end-if-in-editor"></span>
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              color: "rgb(0, 0, 0)",
              fontfamily: "sans-serif",
              fontsize: "15px",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <strong style={{ fontweight: "700" }}>
              <span data-custom-class="heading_1">11.</span>
            </strong>
             
          </span>
          <span data-custom-class="heading_1">
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
                
            </strong>
            <strong
              style={{
                fontweight: "700",
                color: "rgb(0, 0, 0)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
              }}
            >
               
            </strong>
          </span>
          <span style={{ fontsize: "15px" }}>
            <span data-custom-class="heading_1">
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>
                  General  
                  <span
                    style={{
                      color: "rgb(89, 89, 89)",
                      fontfamily: "sans-serif",
                      fontsize: "15px",
                      fontstyle: "normal",
                      fontvariantligatures: "normal",
                      fontvariantcaps: "normal",
                      fontweight: "400",
                      letterspacing: "normal",
                      orphans: "2",
                      textalign: "justify",
                      textindent: "0px",
                      texttransform: "none",
                      whitespace: "normal",
                      widows: "2",
                      wordspacing: "0px",
                      webkittextstrokewidth: "0px",
                      backgroundcolor: "rgb(255, 255, 255)",
                      textdecorationstyle: "initial",
                      textdecorationcolor: "initial",
                      display: "inline !important",
                      float: "none",
                    }}
                  ></span>
                </strong>
                 
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span
            style={{
              color: "rgb(89, 89, 89)",
              fontfamily: "sans-serif",
              fontsize: "15px",
              fontstyle: "normal",
              fontvariantligatures: "normal",
              fontvariantcaps: "normal",
              fontweight: "400",
              letterspacing: "normal",
              orphans: "2",
              textalign: "justify",
              textindent: "0px",
              texttransform: "none",
              whitespace: "normal",
              widows: "2",
              wordspacing: "0px",
              webkittextstrokewidth: "0px",
              textdecorationstyle: "initial",
              textdecorationcolor: "initial",
              backgroundcolor: "rgb(255, 255, 255)",
              float: "none",
              display: "inline !important",
            }}
          >
            <span data-custom-class="body_text">11.1</span>
          </span>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
                
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Visiting the Site, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically, via email and on the Site,
                satisfy any legal requirement that such communication be in
                writing. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <strong>
                  You hereby agree to the use of electronic signatures,
                  contracts, orders and other records and to electronic delivery
                  of notices, policies and records of transactions initiated or
                  completed by us or via the Site.
                </strong>{" "}
                You hereby waive any rights or requirements under any statutes,
                regulations, rules, ordinances or other laws in any jurisdiction
                which require an original signature or delivery or retention of
                non-electronic records, or to payments or the granting of
                credits by other than electronic means. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              11.2
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                These Terms and Conditions and any policies or operating rules
                posted by us on the Site or in respect to the Services
                constitute the entire agreement and understanding between you
                and us.  
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              11.3
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                Our failure to exercise or enforce any right or provision of
                these Terms and Conditions shall not operate as a waiver of such
                right or provision.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              11.4
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We may assign any or all of our rights and obligations to others
                at any time.
              </span>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              11.5
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                We shall not be responsible or liable for any loss, damage,
                delay or failure to act caused by any cause beyond our
                reasonable control.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              11.6
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                If any provision or part of a provision of these Terms and
                Conditions is unlawful, void or unenforceable, that provision or
                part of the provision is deemed severable from these Terms and
                Conditions and does not affect the validity and enforceability
                of any remaining provisions. 
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              11.7
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                There is no joint venture, partnership, employment or agency
                relationship created between you and us as a result of these
                Terms and Conditions or use of the Site or Services.
              </span>
            </span>
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
               
            </span>
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span className="block-component"></span>
            </span>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                11.8
                <strong>
                  <em>For consumers only </em>
                </strong>
              </span>
              <em>
                <span style={{ color: "rgb(89, 89, 89)" }}>
                   - Please note that these Terms and Conditions, their subject
                  matter and their formation, are governed by English law. You
                  and we both agree that the courts of England and Wales will
                  have exclusive jurisdiction expect that if you are a resident
                  of Northern Ireland you may also bring proceedings in Northern
                  Ireland, and if you are resident of Scotland, you may also
                  bring proceedings in Scotland. If you have any complaint or
                  wish to raise a dispute under these Terms and Conditions or
                  otherwise in relation to the Site please follow this link
                </span>
              </em>
            </span>{" "}
            <a href="http://ec.europa.eu/odr"></a>
            <em>
              <span style={{ color: "rgb(48, 48, 241)" }}>
                <a
                  data-custom-class="link"
                  href="http://ec.europa.eu/odr"
                  target="_blank"
                >
                  <span>http://ec.europa.eu/odr</span>
                </a>
              </span>
               
            </em>
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span className="statement-end-if-in-editor"></span>
            </span>
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                backgroundcolor: "rgb(255, 255, 255)",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                display: "inline !important",
                float: "none",
              }}
            >
               
            </span>
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span className="block-component"></span>
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="block-component"></span>
              </span>
               
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              11.9
            </span>
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                textalign: "start",
                backgroundcolor: "rgb(255, 255, 255)",
              }}
            >
              <span className="block-component"></span>Except as stated under
              the Mobile Application section, a
              <span className="else-block"></span> 
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                person who is not a party to these Terms and Conditions shall
                have no right under the Contracts (Rights of Third Parties) Act
                1999 to enforce any term of these Terms and Conditions.
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <br></br>
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span
              style={{
                color: "rgb(89, 89, 89)",
                fontfamily: "sans-serif",
                fontsize: "15px",
                fontstyle: "normal",
                fontvariantligatures: "normal",
                fontvariantcaps: "normal",
                fontweight: "400",
                letterspacing: "normal",
                orphans: "2",
                textalign: "justify",
                textindent: "0px",
                texttransform: "none",
                whitespace: "normal",
                widows: "2",
                wordspacing: "0px",
                webkittextstrokewidth: "0px",
                textdecorationstyle: "initial",
                textdecorationcolor: "initial",
                backgroundcolor: "rgb(255, 255, 255)",
                float: "none",
                display: "inline !important",
              }}
            >
              11.10
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                In order to resolve a complaint regarding the Services or to
                receive further information regarding use of the Services,
                please contact us by email at{" "}
                <span className="question">
                  newworlddevelopers@protonmail.com
                </span>{" "}
                or by post to:
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <br></br>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">World Wide Prayer</span>
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">Buckingham Dr SW</span>
                <span className="block-component"></span>
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">Huntsville</span>,
              </span>
            </span>
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="block-component"></span>
                <span className="block-component"></span>
                <span className="block-component"></span> {" "}
                <span className="question">AL</span>
                <span className="statement-end-if-in-editor"></span>
                <span className="block-component"></span>
                <span className="question">35803</span>
                <span className="block-component"></span>
                <span className="block-component"></span>
                <span className="block-component"></span>
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span data-custom-class="body_text">
            <span style={{ fontsize: "15px" }}>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span className="question">United States</span> {" "}
                <span className="statement-end-if-in-editor"></span>
                <span className="else-block"></span>
                <span className="statement-end-if-in-editor"></span>
              </span>
            </span>
             
          </span>
        </div>
        <div style={{ textalign: "justify", lineheight: "1.5" }}>
          <span style={{ fontsize: "15px" }}>
            <span data-custom-class="body_text">
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span
                  style={{
                    color: "rgb(89, 89, 89)",
                    fontfamily: "sans-serif",
                    fontsize: "15px",
                    fontstyle: "normal",
                    fontvariantligatures: "normal",
                    fontvariantcaps: "normal",
                    fontweight: "400",
                    letterspacing: "normal",
                    orphans: "2",
                    textalign: "justify",
                    textindent: "0px",
                    texttransform: "none",
                    whitespace: "normal",
                    widows: "2",
                    wordspacing: "0px",
                    webkittextstrokewidth: "0px",
                    backgroundcolor: "rgb(255, 255, 255)",
                    textdecorationstyle: "initial",
                    textdecorationcolor: "initial",
                    display: "inline !important",
                    float: "none",
                  }}
                ></span>
              </span>
               
            </span>
             
          </span>
        </div>
        <style>(css)</style>
      </div>
      <div
        style={{
          color: "#595959",
          fontsize: "14px",
          fontfamily: "Arial",
          paddingtop: "16px",
        }}
      >
        These terms of use were created using{" "}
        <a
          style={{
            color: "rgb(48, 48, 241) !important",
            href: "https://termly.io/products/terms-and-conditions-generator/?ftseo",
          }}
        >
          Termly’s Terms and Conditions Generator
        </a>
        .
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
        <div className="row">
        <div className="d-flex flex-row justify-content-center mb-4">
          Need to make an account?
        </div>
        <Button
          //   className="mb-4 w-100 gradient-custom-4"
          name="submit"
          value="Login"
          type="submit"
          size="lg"
          onClick={registerPage}
        >
          Register
        </Button>
      </div>
      </div>
    </div>
  );
};

export default TermsOfService;
