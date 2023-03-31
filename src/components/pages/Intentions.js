import SortEntriesMenu from "../SortEntriesMenu";
import AddTagsHTML from "../AddTagsHTML";
import {
  closeMenusWindow, ChangeIntentionsShown,
  postIntention, loadSearchResults
} from "../../js/global-functions.js"
import styles from "../../css/common-entry-styling.module.css"

const cssId = 'toggleSwitchCSS';

{/* // <link href="https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css" rel="stylesheet" type="text/css"> */ }
if (!document.getElementById(cssId)) // only load the css file if it was not loaded already
{
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.id = cssId;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css'; // make sure the CSS path is absolute so it is loaded from your servers
  link.media = 'all';
  head.appendChild(link);
}


function showIntentionCreator() {
  if (!localStorage.getItem('isUserLoggedIn')) {

    // snackbarMessage.innerHTML = "Please login to post an intention!";
    // snackbarMessage.className = "show";
    // setTimeout(function() {
    //     snackbarMessage.className = snackbarMessage.className.replace("show", "");
    // }, 3000);

    return;
  }
  // document.getElementById("show_intention_creator_button").style.display = "none";
  if (document.getElementById("create_intention_container").style.display == "flex") {
    document.getElementById("create_intention_container").style.display = "none";
    document.getElementById("create_intention_container").style.opacity = 0;
    document.getElementById("create_intention_container").style.transform = "scale(0)";
  } else {
    document.getElementById("create_intention_container").style.display = "flex";
    document.getElementById("create_intention_container").style.opacity = 1;
    document.getElementById("create_intention_container").style.transform = "scale(1)";
  }
}

function Home() {

  return (
    <>



      <div id="intentionsSideNav" className="sidenav menu-list-item-map" style={{zIndex: "100"}}>
        {/* <button id="intentions_menu_close_button" className="closebtn">x</button> */}
        {/* <button className="close_menus_window_button" onClick={closeMenusWindow}>xxx</button> */}

        <div className="logo_in_menu_container">
          <img id="logo_in_intentions_menu" src={require("../../images/Ask-God-Together-Logo-1.png")} width="150" height="150" alt="worldwideprayer" />
        </div>

        <div id="prayer-intentions-tab-container" className="switch-toggle switch-3">
          {/* <!-- these classes are from the imported file https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css (imported in header)--> */}
          <input id="all_intentions" name="state-d" type="radio" value="1" checked="" />
          <label id="all_intentions_label" htmlFor="all_intentions" onClick={()=>{ChangeIntentionsShown('ALL')}}>All Prayers</label>

          {/* <!-- neutral button for when user hasn't set their gender yet (becomes disabled after user chooses one) -->
            <!-- <div id="na" style="display: none;">
            <input name="state-d" type="radio" disabled checked="checked" />
            <label id="naLabel" htmlFor="na" className="disabled" onClick="">&nbsp;</label>
        </div> --> */}

          <input id="my_intentions" name="state-d" type="radio" value="0" />
          <label id="my_intentions_label" htmlFor="my_intentions" onClick={()=>{ChangeIntentionsShown('MINE')}}>My Prayers</label>

          <input id="saved_intentions" name="state-d" type="radio" value="0" />
          <label id="saved_intentions_label" htmlFor="saved_intentions" onClick={()=>{ChangeIntentionsShown('SAVED')}}>Saved Prayers</label>

          <input id="followed_intentions" name="state-d" type="radio" value="0" />
          <label id="followed_intentions_label" htmlFor="followed_intentions" onClick={()=>{ChangeIntentionsShown('FOLLOWED')}}>Followed Prayers</label>

        </div>

        <hr className="create_intention_divider" />

        <button id="show_intention_creator_button" className="menu-list-item create_intention_button" type="submit" onClick={()=>{showIntentionCreator()}}>Offer a Prayer</button>

        <div id="create_intention_container" className="create_intention_container_3">

          <div className="create_intention_title">
            Offer a Prayer
          </div>

          <hr className="create_intention_title_divider" />

          <div className="create_intention_container_2">
            <div className="create_intention_container_1">

              <div className="intention_title_input_container">
                <input type="text" id="intention_title_input" name="intention_title_input" placeholder="Intention Title" autoComplete="off" maxLength="100" /><br />
              </div>

              <textarea id="intentions_text_area" name="intentionsTextArea" placeholder="Intention Description" style={{justifyContent: "center", textAlign: "left"}} wrap="hard" maxLength="5000000"></textarea>
            </div>
          </div>

          <AddTagsHTML />

          <button id="post_intention_button" className="menu-list-item create_intention_button" type="submit" onClick={()=>{postIntention()}}>Let's Ask God Together</button>

        </div>

        <hr className="create_intention_divider" />

        <div className="menu_title_container">

          <div id="intentions_menu_title">Intentions</div>

          <SortEntriesMenu />

        </div>

        <hr id="intentions_menu_divider" />

        {/* <!-- search bar --> */}
        <div id="search-container" className="search-container">
          {/* <!-- the 'w3-card-4 give those two column borders on the sides of this -->
            <!-- <form action="/action_page.php"> -->
            <!-- <form> --> */}
          <div id="search-form-container" className="search-form-container">
            <div id="intentions_menu_input_container" className="search-form-cell">
              <input id="intentions_menu_search_input" type="text" onClick={()=>{loadSearchResults(1, 0, 'INTENTIONS')}} onKeyUp={()=>{loadSearchResults(0, 0, 'INTENTIONS')}} placeholder="Search for intentions...." name="search" />
            </div>
            {/* <!-- <div className="search-form-cell"> -->
                <!-- disabling this button cause it doesn't do anything anyway and if not disabled when the user clicks it the search results disappear -->
                <!-- <button type="button" disabled><i className="fa fa-search" style="color:purple"></i></button> -->
                <!-- </div> --> */}
          </div>
          {/* <!-- </form> --> */}
          <div id="search_results" className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width:"500px"}}>

          </div>
        </div>

        <div id="intentionsMenuList" className="menu-list-item-map">

        </div>

      </div>


    </>
  );
}

export default Home;
