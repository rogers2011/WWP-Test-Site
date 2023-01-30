//file that should hold the main navigation component.
//It is not loaded as a page with the help of the router, so it should be in the components folder, not the pages folder.
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css' //can call it anything. Classes is chosen because it is a js object where all the classes in this css file are properties of this objevt. Then use the js code to attach the classes to that element

function MainNavigation() {
  return (
    <header className = {classes.header}>
      <div className = {classes.logo}>React Meetups</div>
      <nav>
        <ul>
          {/* ul is a list */}
          {/* li is list item*/}
          <li>
            {/* Should not use a href (anchor tag) linkage. The issue is whenever we click it, a new request will be sent to the server. The server will reply with that application and the router will find which page to load. This is already redundant because we already are in our running react application.   */}
            {/* Link prevents the broswer default oif senidng the request, instead it parses the link you want ot go to, changes that url in the bar, then loads the papropriate page on the screen. It stays on the already loaded page and does not send the extrea request.*/}
            <Link to="/">All Meetups</Link> {/* / is the url to the All Meetups page*/}
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>{/* /new-meetup is the url to the New Meetups page*/}
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>{/* /favorites is the url to the favorites page*/}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
