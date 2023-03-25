import MenuButtons from "./MenuButtons";
import MainMenu from "./layout/MainMenu";
import ContentPage from "./ContentPage";

function PrimaryMenu(props) {


    function showMenus() {
        document.getElementById("menus_container").style.opacity = 1;
        document.getElementById("menus_container").style.transform = 'scale(1)';
    }

    function closeMenus() {
        document.getElementById("menus_container").style.opacity = 0;
        document.getElementById("menus_container").style.transform = 'scale(0)';
    }

    return (

        <div id="menu_and_content_container">
            {/* <button id="showMenusButton" onClick="showMenus()">Display menus</button> */}

            {/* <?php
    include("./menu_buttons_as_top_bar.php");
    ?> */}

            <div id="menus_container" className="menu_is_open">

                {/* <a href="javascript:void(0)" id="close_menus_button" className="closebtn" onClick="closeMenus()">&times;</a> */}

            <MenuButtons />

        <div id="sidenavs_container">

            <MainMenu />

            <ContentPage />


            {/* <?php
            include('./intentionsSideNav.php');
            ?>

            <?php
            include('./testimonialsSideNav.php');
            ?>

            <?php
            include('./blogsSideNav.php');
            ?>

            <?php
            include('./myPrayerRoomsSideNav.php');
            ?> */}

        </div>

            </div>

        </div>
    );

}

export default PrimaryMenu