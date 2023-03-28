
function ContactUsModal(props) {


    function toggleContactUsPopup() {
        if (document.getElementById("contact_us_popup").style.opacity == 0) {
          document.getElementById("contact_us_popup").style.opacity = 1;
          document.getElementById("contact_us_popup").style.transform = 'scale(1)';
          document.getElementById("myModal").style.display = "block";

          document.getElementById("menu_buttons_container_top_bar").style.opacity = 0;
          document.getElementById("menu_buttons_container_top_bar").style.transform = 'scale(0)';
          console.log('set opacity to 0');
        } else {
          document.getElementById("contact_us_popup").style.opacity = 0;
          document.getElementById("contact_us_popup").style.transform = 'scale(0)';
          document.getElementById("myModal").style.display = "none";

          document.getElementById("menu_buttons_container_top_bar").style.opacity = 1;
          document.getElementById("menu_buttons_container_top_bar").style.transform = 'scale(1)';
          console.log('set opacity to 1');
        }
      }

    function sendContactUsEmail() {

    }


    //   function sendContactUsEmail() {
          
    //     var snackbarMessage = document.createElement('div');
  
    //     if (!document.getElementById("contact_us_textarea").value) {
    //       snackbarMessage.innerHTML = "There's no message written.";
    //       snackbarMessage.className = "show";
    //       setTimeout(function() {
    //         snackbarMessage.className = snackbarMessage.className.replace("show", "");
    //       }, 3000);

    //       return;
    //     }

    //     if (!document.getElementById("contact_us_user_email").value) {
    //       snackbarMessage.innerHTML = "Please provide your email so we can get back to you about your issue. Thank you.";
    //       snackbarMessage.className = "show";
    //       setTimeout(function() {
    //         snackbarMessage.className = snackbarMessage.className.replace("show", "");
    //       }, 3000);

    //       return;
    //     }

    //     var username = '';

    //     let time_reported = new Date();
    //     var subject = " Message from " + username;
    //     var message = "Username of person contacting us: " + username + "\n" +
    //       "Time report was made: " + time_reported + "\n" +
    //       "User's name: " + document.getElementById("contact_us_name").value + "\n" +
    //       "User's email: " + document.getElementById("contact_us_user_email").value + "\n\n" +
    //       document.getElementById("contact_us_textarea").value;

    //     var form_data = new FormData();
    //     form_data.append("subject", subject);
    //     form_data.append("message", message);
    //     form_data.append("action", "reportEntryViaUsername");
    //     form_data.append("email_type", "support");

    //     $.ajax({
    //       url: "create_prayer_room_functions.php",
    //       cache: false,
    //       contentType: false,
    //       processData: false,
    //       method: 'POST',
    //       type: 'POST', // For jQuery < 1.9
    //       data: form_data,
    //       success: function(response) {

    //         console.log(response);

    //         if (response.includes('Entry successfully reported.')) {

    //           toggleContactUsPopup();

    //           snackbarMessage.innerHTML = "We have received your message!";
    //           snackbarMessage.className = "show";
    //           setTimeout(function() {
    //             snackbarMessage.className = snackbarMessage.className.replace("show", "");
    //           }, 3000);

    //         } else if (response.includes('Entry not reported for some reason.')) {
    //           snackbarMessage.innerHTML = "Sorry, your message could not be sent. Please try again later, or email us at reports@worldwideprayer.world.";
    //           snackbarMessage.className = "show";
    //           setTimeout(function() {
    //             snackbarMessage.className = snackbarMessage.className.replace("show", "");
    //           }, 3000);
    //         }

    //       },
    //       error: function(error) {
    //         console.log("Error sending entry:", error);
    //       }
    //     });
    //   }


      return(

        
        <div id="myModal" className="modal" style={{zIndex: 11}}>
  
        <div id="contact_us_close_button" onClick={toggleContactUsPopup}>X</div>

        <div id="contact_us_popup" className="row">
          <div className="col-md-6 " id="form_container">
            <h2 id="contact_us_title">Contact Us</h2>
            <p id="contact_us_description">
              Please send your message below. We will get back to you as soon as we can!
              <br></br>
              (You can also contact us by emailing support@worldwideprayer.world directly if you would like.)
            </p>

            <div className="row">
              <div className="col-sm-12 form-group">
                {/* <!-- <label className="contact_us_label" htmlFor="message">
                  Message:</label> --> */}
                <textarea placeholder="Tell us something we can fix...." id="contact_us_textarea" className="form-control" type="textarea" id="message" name="message" maxLength="6000" rows="7"></textarea>
              </div>
            </div>
            <div id="contact_us_user_info_container" className="row">
              <div className="col-sm-6 form-group">
                <label className="contact_us_label" htmlFor="name">
                  Your Name:</label>
                <input id="contact_us_name" type="text" className="form-control" id="name" name="name" required>
                  </input>
              </div>
              <div className="col-sm-6 form-group">
                <label className="contact_us_label" htmlFor="email">
                  Email:</label>
                <input id="contact_us_user_email" type="email" className="form-control" id="email" name="email" required>
                  </input>
              </div>
            </div>



            <div className="row">
              <div className="col-sm-12 form-group">
                <button id="contact_us_send_message_button" onClick={sendContactUsEmail} className="btn btn-lg btn-default pull-right">Send Message</button>
              </div>
            </div>

            <div id="success_message" style={{width: "100%", height: "100%", display: "none"}}>
              <h3>Posted your message successfully!</h3>
            </div>
            <div id="error_message" style={{ width: "100%", height: "100%", display: "none"}}>
              <h3>Error</h3>
              Sorry there was an error sending your form.

            </div>
          </div>
        </div>

      </div>

      );


}

export default ContactUsModal