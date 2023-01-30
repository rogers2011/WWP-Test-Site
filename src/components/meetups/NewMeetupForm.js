import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) { //How we extract what the user enters
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupDate = {
title:enteredTitle,
image:enteredImage,
address:enteredAddress,
description:enteredDescription,

    };
    console.log(meetupDate);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Meetup Title </label>
          {/* htmlFOr and className are  elements that differ from common html syntax (class, html)   */}
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image"> Meetup Image </label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Address </label>
          
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description </label>
        
          <textarea
            name="description"
            defaultValue="Description."
            required
            rows="5" ref={descriptionInputRef}
          />
          {/* Cannot put anything between the >< or an error will appear. Better to end the text area with <text area ... />  */}
        </div>

        <div className={classes.actions}>
          <button> Add Meetup </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm; //exportting this makes it available to things outside this file
