import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import styles from '../../css/top-menu.module.css'
import ContactUsButton from "../ContactUsButton";

function PrimaryMenu() {

  const loggedIn = false

  return (
    <nav className={styles.topMenuContainer}>
        {/* If the user is logged in show their profile pic and if they click it go to their profile/settings.
        If they are not logged in show a link for them to go to the login screen. */}
        {loggedIn ? <NavLink to="/profile" className={styles.profilePic}>Profile Pic</NavLink>
        : <NavLink to="/login" className={styles.loginLink}>Create Account</NavLink>}
                            <ContactUsButton />
        {/* Show a link to the most currently active prayer room and show how many people are in it */}
        <NavLink to="/largest-prayer-room" className={styles.livePrayerMessage}>5324 people are currently praying together! (Go to largest prayer room.)</NavLink>
    </nav>
  );
}

export default PrimaryMenu;
