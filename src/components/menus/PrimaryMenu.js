import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import styles from '../../css/primary-menu.module.css'


// Have to do it this way to get the active class functionality (where if you click on one of the nav links
// it will have the active class added to it). I tried different things but I couldn't add more to the className
// attribute in each NavLink element without the function not working anymore.
const navLinkStyles = `${styles.navLink}`
const isActiveClassFunc = ({ isActive }) => (isActive ? `${navLinkStyles} ${styles.active}` : navLinkStyles);


function PrimaryMenu() {

  return (
    <nav className={styles.primaryMenuContainer}>
        <NavLink to="/map" className={isActiveClassFunc}>Map</NavLink>
        <NavLink to="/" className={isActiveClassFunc}>Home</NavLink>
        <NavLink to="/intentions" className={isActiveClassFunc}>Intentions</NavLink>
        <NavLink to="/testimonials" className={isActiveClassFunc}>Testimonials</NavLink>
        <NavLink to="/pearls" className={isActiveClassFunc}>Pearls</NavLink>
        <NavLink to="/prayer-rooms" className={isActiveClassFunc}>Prayer Rooms</NavLink>
    </nav>
  );
}

export default PrimaryMenu;
