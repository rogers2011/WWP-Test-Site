

function MenuButtons(props) {

    return (

        <div>
            <div id="menu_buttons_container" style={{display: "none"}}>

                <div id="menu_buttons_top_row">

                    <div id="main_menu_container" className="menu-container">
                        <div id="main_menu_button" className="dropbtn-menu">
                            {/* <div className="container_menu_button" onClick="menuButtonClick(this)">
        <div className="bar1_menu_button"></div>
                            <div className="bar2_menu_button"></div>
                            <div className="bar3_menu_button"></div>
        <img src="images/hamburger_button_icon_300x200_9966cc2.png" id="main_menu_button_logo"> */}
                            <img src="images/logo2_192_by_1923.png" id="main_menu_button_logo" />
                            <div id="username_in_menu_logo"></div>
                        </div>
                    </div>

                    <div id="intentions_menu" className="menu-container">
                        <div id="intentions_logo_container" className="dropbtn-menu">
                            <img src="images/Ask-God-Together-Logo-1.png" id="intentions_button_logo" />
                        </div>
                    </div>

                    <div id="testimonials_menu" className="menu-container">
                        <div id="testimonials_logo_container" className="dropbtn-menu">
                            <img src="images/Testimonials-Logo-1.png" id="testimonials_button_logo" />
                        </div>
                    </div>

                </div>

                <div id="menu_buttons_bottom_row">

                    <div id="pearls_menu" className="menu-container">
                        <div id="pearls_logo_container" className="dropbtn-menu">
                            <img src="images/Pearls-Logo-1.png" id="pearls_button_logo" />
                        </div>
                    </div>

                    <div id="prayer_rooms_menu" className="menu-container">
                        <div id="prayer_rooms_logo_container" className="dropbtn-menu">
                            <img src="images/Prayer-Rooms-Logo-1.png" id="prayer_rooms_button_logo" />
                        </div>
                    </div>

                </div>

            </div>

        </div>


    );

}

export default MenuButtons