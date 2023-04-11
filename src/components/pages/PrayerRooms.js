import React, { useRef } from 'react';
import SortEntriesMenu from "../SortEntriesMenu";
import AddTagsHTML from "../AddTagsHTML";
// import { Editor } from '@tinymce/tinymce-react';
import {
  ChangeRoomsShown,
  createPrayerRoom, loadSearchResults
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


function showprayer_roomCreator() {
  if (!localStorage.getItem('isUserLoggedIn')) {

    global.snackbarMessage.innerHTML = "Please login to create a prayer room!";
    global.snackbarMessage.className = "show";
    setTimeout(function () {
      global.snackbarMessage.className = global.snackbarMessage.className.replace("show", "");
    }, 3000);

    return;
  }
  // document.getElementById("show_prayer_room_creator_button").style.display = "none";
  if (document.getElementById("create_prayer_r_container").style.display == "flex") {
    document.getElementById("create_prayer_room_container").style.display = "none";
    document.getElementById("create_prayer_room_container").style.opacity = 0;
    document.getElementById("create_prayer_room_container").style.transform = "scale(0)";
  } else {
    document.getElementById("create_prayer_room_container").style.display = "flex";
    document.getElementById("create_prayer_room_container").style.opacity = 1;
    document.getElementById("create_prayer_room_container").style.transform = "scale(1)";
  }
}


function PrayerRooms() {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>

      {/* <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button> */}



<div id="myPrayerRoomsSideNav" class="sidenav menu-list-item-map" style="z-index: 100;">
    <button id="prayer_rooms_menu_close_button" class="closebtn">x</button>
    <button class="close_menus_window_button" onclick="closeMenusWindow()">xxx</button>

    <div class="logo_in_menu_container">
        <img id="logo_in_my_rooms_menu" src="images/Prayer-Rooms-Logo-1.png" class="w3-circle" width="150" height="150" alt="worldwideprayer">
    </img>
    </div>

    <a href="./create-prayer-room" class="btn btn-info menu-list-item create_prayer_room_button">Create Prayer Room</a>

<div id="prayer-rooms-tab-container" class="switch-toggle switch-3">
    {/*<!-- these classes are from the imported file https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css (imported in header)--> */}
    <input id="all_rooms" name="state-d" type="radio" value="1" checked="" />
    <label id="all_rooms_label" for="all_rooms" onclick= { () => {ChangeRoomsShown('ALL')}}>All Rooms</label>

    {/*<!-- neutral button for when user hasn't set their gender yet (becomes disabled after user chooses one) -->*/}
    {/*<!-- <div id="na" style="display: none;">
        <input name="state-d" type="radio" disabled checked="checked" />
        <label id="naLabel" for="na" class="disabled" onclick="">&nbsp;</label>
    </div>*/}

    <input id="my_rooms" name="state-d" type="radio" value="0" />
    <label id="my_rooms_label" for="my_rooms" onclick= { () => {ChangeRoomsShown('MINE')}}>My Rooms</label>

    <input id="saved_rooms" name="state-d" type="radio" value="0" />
    <label id="saved_rooms_label" for="saved_rooms" onclick= { () => {ChangeRoomsShown('SAVED')}}>Saved Rooms</label>

    <input id="followed_rooms" name="state-d" type="radio" value="0" />
    <label id="followed_rooms_label" for="followed_rooms" onclick= { () => {ChangeRoomsShown('FOLLOWED')}}>Followed Rooms</label>

</div>

<hr id="prayer_rooms_menu_divider"/>

        <button id="show_prayer_room_creator_button" className="menu-list-item create_prayer_room_button" type="submit" onClick={() => { showPrayerRoomCreator() }}>Create Prayer Room</button>

        <div id="search-container" class="search-container">

          <div className="create_prayer_room_title">
            Cast Your Pearl
          </div>

          <hr className="create_prayer_room_title_divider" />

          <div className="create_prayer_room_container_2">
            <div className="create_prayer_room_container_1">

              {/* <textarea id="prayer_rooms_text_area" name="prayer_roomsTextArea" placeholder="prayer_room Description" style={{ justifyContent: "center", textAlign: "left" }} wrap="hard" maxLength="5000000"></textarea> */}
            </div>
          </div>

          <AddTagsHTML />

          <button id="create_prayer_room_button" className="menu-list-item create_prayer_room_button" type="submit" onClick={() => { createPrayerRoom() }}>Cast Your Pearl</button>

        </div>

        <hr className="create_prayer_room_divider" />

        <div className="menu_title_container">

          <div id="prayer_room_menu_title">Prayer Rooms</div>

          <SortEntriesMenu />

        </div>

        <hr id="prayer_room_menu_divider" />

        {/* <!-- search bar --> */}
        <div id="search-container" className="search-container">
          {/* <!-- the 'w3-card-4 give those two column borders on the sides of this -->
            <!-- <form action="/action_page.php"> -->
            <!-- <form> --> */}
        <div id="search-form-container" class="search-form-container">
            <div id="prayer_rooms_menu_input_container" class="search-form-cell">
                <input id="prayer_menu_search_input" type="text" onclick="loadSearchResults(1, 0, 'PRAYERROOMS')" onkeyup="loadSearchResults(0, 0, 'PRAYERROOMS')" placeholder="Search for rooms...." name="search"/>
            </div>
            {/*<!-- <div class="search-form-cell"> -->}
            <!-- disabling this button cause it doesn't do anything anyway and if not disabled when the user clicks it the search results disappear -->
            <!-- <button type="button" disabled><i class="fa fa-search" style="color:purple"></i></button> -->
        {<!-- </div> --> */}
        </div>
          {/* <!-- </form> --> */}
          <div id="search_results" className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: "500px" }}>

          </div>
        </div>

        <div id="myRoomsMenuList" class="menu-list-item-map">

        </div>

      </div>


    </>
  );
}

export default PrayerRooms;
