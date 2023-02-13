

function MainMenu(props) {

    function closeMenusWindow() {

    }

    function enterMap() {

    }

    return (
        <div id="mySidenav" className="sidenav menu-list-item-map" style={{zIndex: 100}}>
            <button id="main_menu_close_button" className="closebtn">x</button>
            <button className="close_menus_window_button" onClick={closeMenusWindow}>xxx</button>

            <div className="logo_in_menu_container">
                <img id="logo_in_menu" src="images/logo2_512_by_512.png" className="w3-circle" width="150" height="150" alt="worldwideprayer" />
            </div>

            <div id="username_in_menu"></div>

            <div id="menu_list" className="menu-list-item-map">
                <a id="homepage-button" className="btn btn-info menu-list-item" href=".">Home
            <img id="homepage-button-icon" src="./images/hands_praying-8a2be2.png" />
                </a>
                <a id="your-profile" className="btn btn-info menu-list-item">My Profile
            <img id="your-profile-icon" src="./images/profile-icon-8a2be23.png" />
                </a>
                <a id="enterWWPMap" className="btn btn-info menu-list-item" href="./map" onClick={enterMap}>WWP Map
            <img id="enterWWPMap-icon" src="./images/globe-icon-8a2be2.png" />
                </a>
                <a id="prayer-settings" className="btn btn-info menu-list-item" href="./settings">Settings
            <img id="prayer-settings-icon" src="./images/settings-icon-8a2be2.png" />
                </a>
                <a id="enterAbout" className="btn btn-info menu-list-item" href="./about">About WWP
            <img id="enterAbout-icon" src="./images/cross-icon-8a2be2.png" />
                </a>
                <a id="donate" className="btn btn-info menu-list-item" href="./donate">Donate
            <img id="donate-icon" src="./images/support-icon-8a2be2.png" />
                </a>
                <a id="sign-in" className="btn btn-info menu-list-item">Sign In/Register
            <img id="sign-in-icon" src="./images/login-icon-8a2be2.png" />
                </a>
                <div id="follow" className="btn btn-info menu-list-item">
                    <div id="follow-button-title">Follow:</div>
                    <a href="https://gab.com/realWWP" target="_blank" rel="noopener noreferrer">
                        <div className="gab-icon menu-item-icon"></div>
                    </a>
                    <a href="https://t.me/worldwideprayer" target="_blank" rel="noopener noreferrer">
                        <div className="telegram-icon menu-item-icon"></div>
                    </a>
                    <a href="https://parler.com/profile/realWWP" target="_blank" rel="noopener noreferrer">
                        <div className="parler-icon menu-item-icon"></div>
                    </a>
                    <a href="https://mewe.com/group/6020026fae11380f2f1c9193" target="_blank" rel="noopener noreferrer">
                        <div className="mewe-icon menu-item-icon"></div>
                    </a>
                </div>

            </div>

            <div id="share_row_container">
                {/* <!-- putting hr in here cause this container is position absolute (if hr was outside it, it wouldn't be in the right position) --> */}
                <hr />

                <div id="share_row_title">
                    Spread the word!
                        </div>
                <div id="share_row">
                    <a href="https://telegram.me/share/?url=https%3A%2F%2Fwww.worldwideprayer.world/" target="_blank" rel="noopener noreferrer">
                        <div className="telegram-icon"></div>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                                </svg> --> */}
                    </a>
                    {/* <!-- Parler share link no longer works. Just removing this with "display: none;" for now. --> */}
                    <a style={{display: "none !important"}} href="https://parler.com/new-post?message=Change%20yourself.%20Change%20the%20world.%20God%20is%20listening.%20https%3A%2F%2Fwww.worldwideprayer.world%2F" target="_blank" rel="noopener noreferrer">
                        <div className="parler-icon"></div>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg> --> */}
                    </a>
                    <a href="https://mewe.com/share?link=https%3A%2F%2Fwww.worldwideprayer.world/" target="_blank" rel="noopener noreferrer">
                        <div className="mewe-icon"></div>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg> --> */}
                    </a>
                    {/* <!-- source -> The url-encoded source of the content (e.g. your website or application name) --> */}

                    {/* <!-- EXAMPLE GAB SHARE LINK -->
            <!-- https://gab.com/compose?url=https%3A%2F%2Fpopulist.press%2Fbannon-goes-off-elites-in-epic-rant-everyone-must-see%2F --> */}
                </div>
            </div>

            <div id="important_links_container">
                {/* <!-- putting hr in here cause this container is position absolute (if hr was outside it, it wouldn't be in the right position) --> */}
                <hr />

                <div id="important_links_title">
                    Important Links!
        </div>
                <div id="important_links_row">
                    <a href="https://www.givesendgo.com/worldwideprayer" target="_blank" rel="noopener noreferrer">
                        <div className="givesendgo-icon"></div>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                                </svg> --> */}
                    </a>
                    {/* <!-- Parler share link no longer works. Just removing this with "display: none;" for now. --> */}
                    <a href="https://www.freenewworld.org/" target="_blank" rel="noopener noreferrer">
                        <div className="freenewworld-icon"></div>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg> --> */}
                    </a>
                </div>

            </div>

            {/* <!-- <button className="js-push-button" disabled>
                        Enable Push Messages
						</button> --> */}


        </div>
    );

}

export default MainMenu