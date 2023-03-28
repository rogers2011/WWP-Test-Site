import { useState } from 'react';
import PeopleCounter from '../PeopleCounter'
import styles from '../../css/home.module.css'
const { default: PrimaryMenu } = require("../PrimaryMenu");
const { default: IntroSlideshow } = require("../IntroSlideshow");
const { default: ScrollToWorldWidePrayer } = require("../ScrollToWorldWidePrayer");

const Home = () => {

  const [introSlideshowModalIsOpen, setIntroSlideshowModalIsOpen] = useState(false)

    return(
           <div>
    <div id="header"></div>

        <div className={styles.indexPage}>

          <div className={styles.page1}>
            {/* <!-- data-router-view is the section being changed during the transition --> */}
            <h1 id="h1_description_for_SEO" style={{display: "none"}}>Pray with other Christians around the world
            live!
          </h1>
            <audio id="meditation_music">
              <source src="Sea_Space.mp3" type="audio/mpeg"></source>
              {/* <!-- Safari doesn't support .ogg files --> */}
            Your browser does not support the audio element.
          </audio>

            <div className={styles.topOfHomepage}>

              <div className={styles.topOfHomepageExceptMenu}>

                <div className={styles.topOfHomepageExceptMenuAndLinks}>


                  <p className={styles.siteUpdate}>
                    <strong>This site is constantly in development, but please use it freely! Add your intentions,
                    testimonials, pearls of wisdom, and create prayer rooms so that others can share in
                    your knowledge and experience and help change the world for the better.<br></br><br></br>

                    Please send any comments, questions, suggestions, concerns, or bugs using the
                    "See something wrong?" button on the bottom right of the screen. We are continuously
                    improving this site for you. <br></br><br></br>
                    Thank you for being a part of World Wide Prayer.<br></br>
                    </strong>
                  </p>

                  <br></br>

                  {/* <!-- </div> -->
                <!-- </div> --> */}
                  <p className={styles.gatherQuote}>
                    <i><strong>"For where two or three gather together in my name, there I am with
                      them."<br></br>(Mt
                      18:20)</strong></i></p>

                  <p className={styles.timerDescription}>
                    <i><b>Time
                      until next live prayer with others around the world:<br></br></b></i></p>

                  <div style={{textAlign:"center", color: "rgb(255, 255, 255)"}}>
                    <b> <br></br>
                      <p id="hours"></p>
                      <p id="minutes"></p>
                      <p id="seconds">
                      </p>
                    </b>
                  </div>
                  <br></br>
                  <b>
                    <p id="prayer_times_description">
                      Prayer times:</p>
                  </b>
                  <b>
                    <div id="times_of_prayer">
                      <p id="time_one"></p>
                      <p id="time_two"></p>
                      <p id="time_three"></p>
                    </div>
                  </b>

                  <b>
                    {/* <!-- add _animtated to the id animate the number --> */}
                    <p id="people_in_meditation_top_of_homepage">
                    </p>
                  </b>


                  <br></br>

                  <div id="bottom_navbar">
                    <div id="tutorial_button_container">
                      <img id="tutorial_button_icon" src="images/logo2_512_by_512.png"></img>
                      <p id="tutorial_button_text">Click for a Tutorial!</p>
                    </div>

                  </div>

                  {introSlideshowModalIsOpen && <IntroSlideshow />}

                </div>

                <div id="bottom_of_homepage">
                  <div id="bottom_container">
                    <PeopleCounter />


                    {/* <!-- <div id="Login and Register" className="loginandregister"> </div> -->

                <!-- none of this worked in getting the text centered vertically; apparently there's no simple way to do it -->
                <!-- <div style="display:flex;justify-content:center;align-items:center;"> -->
                <b>
                  <p id="meditation_text">
                    Lord, thank You for this day.</p>
                </b>
                <!-- </div> -->

                <!-- <script> $(document.body).addClass('indexBody'); </script> -->

                <!-- <script src="https://code.jquery.com/jquery-3.4.1.min.js"
              integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous">
              </script> --> */}



                  </div>
                </div>
              </div>

            </div>



            {/* <!-- <script type="text/javascript" src="js/settings.js?version=1"></script> --> */}


            {/* <!-- <script type="text/javascript" src="./js/app.js?version=5"></script> --> */}

            {/* <!-- <script> */}

            {/* $('document').ready(function () {

          // need to call if this is the first page open because barba-transition.js won't run
          // if (!indexPageWasInitialized) {
            initIndexPage();
          // }

        });


      </script> -->
    */}




            {/* // <!-- <script type="text/javascript" src="js/global-functions.js?version=34"></script> --> */}

            {/* // <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.min.js"></script> --> */}
            {/* // <!-- <script type="text/javascript" src="js/barba-transition.js?version=32"></script> --> */}

            {/* // <!-- <script type="text/javascript" src="js/index.js?version=207"></script> --> */}

          </div>

        </div>
      </div>
);
  };
  
  export default Home;
  