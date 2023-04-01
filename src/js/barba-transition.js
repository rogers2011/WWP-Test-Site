import $ from 'jquery';

global.websiteFullURL = 'https://worldwideprayer.world/'
// global.currentlyWorkingURL = global.websiteFullURL
global.currentlyWorkingURL = 'http://localhost:3000/'
global.tempWebsiteFullURL = 'https://test.worldwideprayer.world/react_files/'

global.isUserLoggedIn = undefined;
// variable to know if user just entered website or is instead clicking between pages (useful because we only want to load user data once when they first start their time on the site instead of every time they go to a page)
global.userDataLoaded = undefined;

// global variables for all files on the website (mainly user data so only have to access db once to get it)
global.openSideNavs = [];
global.openSideNavElements = [];


global.prayerRoomRows = [];
global.intentionRows = [];
global.testimonialRows = [];
global.savePrayerRoomButtons = [];
global.prayerTimeElements = [];
global.intentionTextElements = [];
global.testimonialTextElements = [];

global.idList = [];
global.creatorNameList = [];
global.roomNameList = [];
global.usernameList = [];
global.profilePicList = [];
global.roomPasswordList = [];
global.textRefList = [];
global.backgroundRefList = [];
global.musicRefList = [];
global.recordingRefList = [];
global.prayerLengthList = [];
global.prayerDatetimeList = [];
global.afterPrayerTextRefList = [];
global.descriptionTextRefList = [];
global.prayerIsRecurringList = [];
global.timeToDeleteOrRenewPrayerList = [];
global.minutesBetweenPrayersList = [];
global.hoursBetweenPrayersList = [];
global.daysBetweenPrayersList = [];
global.numRepeatsList = [];
global.tagsList = [];
global.prayerRoomsReactsArrays = [];


global.testimonialsIDList = [];
global.testimonialsUsernameList = [];
global.testimonialsTitleList = [];
global.testimonialsTextRefList = [];
global.testimonialsTagsList = [];
global.testimonialsDateandtimeList = [];
global.testimonialsProfilePicRefList = [];
global.testimonialsReactsArrays = [];

global.pearlsRows = [];
global.pearlsIDList = [];
global.pearlsUsernameList = [];
global.pearlsProfilePicRefList = [];
global.pearlsCreatorNameList = [];
global.pearlsTitleList = [];
global.pearlsRoomPasswordList = [];
global.pearlsTextRefList = [];
global.pearlsBackgroundRefList = [];
global.pearlsMusicRefList = [];
global.pearlsDateandtimeVisibleList = [];
global.pearlsDateandtimeCreatedList = [];
global.pearlsTagsList = [];
global.pearlsReactsArrays = [];

global.pearlsTitleList = [];
global.dateandtimeVisibleList = [];
global.dateandtimeCreatedList = [];

global.titleList = [];
global.categoryList = [];
global.dateandtimeList = [];

global.usersIDList = [];
global.usersFirstNameList = [];
global.usersLastNameList = [];
global.usersEmailList = [];
global.usersUsernameList = [];
global.usersGenderList = [];
global.usersDOBList = [];
global.usersProfilePicRefList = [];
global.usersBannerPicRefList = [];
global.usersAboutMeList = [];
global.usersUsername1LowercaseList = [];
global.usersDateandtimeList = [];
global.usersCurrentLocationList = [];
global.usersNumPostsList = [];
global.usersNumCommentsList = [];
global.usersNumLikesList = [];
global.usersNumDislikesList = [];
global.usersNumFollowersList = [];
global.usersNumFollowingList = [];
global.followedUsersIDList = [];
global.userRows = [];
global.aboutMeElements = [];

global.afterPrayerTextRef = undefined;

global.username1_lowercase = undefined;
global.dateandtime = undefined;
global.current_location = undefined;

global.user_reacts_array = [];
global.user_reacts_arrays = [];
global.user_reacts_ids = [];
global.user_reacts_tables_reacting_to = [];
global.user_reacts_entryIDs = [];
global.intentions_user_reacts_arrays = [];
global.intentions_user_reacts_entryIDs = [];
global.testimonials_user_reacts_arrays = [];
global.testimonials_user_reacts_entryIDs = [];
global.pearls_user_reacts_arrays = [];
global.pearls_user_reacts_entryIDs = [];
global.prayer_rooms_user_reacts_arrays = [];
global.prayer_rooms_user_reacts_entryIDs = [];

global.id = undefined;
global.numFollowing = undefined;
global.other_user_numFollowing = undefined;
global.numFollowers = undefined;
global.other_user_numFollowers = undefined;
global.numPosts = undefined;
global.other_user_numPosts = undefined;
global.numComments = undefined;
global.other_user_numComments = undefined;
global.numLikes = undefined;
global.other_user_numLikes = undefined;
global.numDislikes = undefined;
global.other_user_numDislikes = undefined;
global.numAttendedPrayersThisWeek = undefined;
global.other_user_numAttendedPrayersThisWeek = undefined;
global.numAttendedPrayersThisMonth = undefined;
global.other_user_numAttendedPrayersThisMonth = undefined;
global.numTotalAttendedPrayers = undefined;
global.other_user_numTotalAttendedPrayers = undefined;
global.numPeoplePrayedWithThisWeek = undefined;
global.other_user_numPeoplePrayedWithThisWeek = undefined;
global.numPeoplePrayedWithThisMonth = undefined;
global.other_user_numPeoplePrayedWithThisMonth = undefined;
global.numTotalPeoplePrayedWith = undefined;
global.other_user_numTotalPeoplePrayedWith = undefined;
global.numTimeInMeditationThisWeek = undefined;
global.other_user_numTimeInMeditationThisWeek = undefined;
global.numTimeInMeditationThisMonth = undefined;
global.other_user_numTimeInMeditationThisMonth = undefined;
global.numTotalTimeInMeditation = undefined;
global.other_user_numTotalTimeInMeditation = undefined;
global.numTimePrayingForIntentionsThisWee = undefined;
global.other_user_numTimePrayingForIntentionsThisWeek = undefined;
global.numTimePrayingForIntentionsThisMonth = undefined;
global.other_user_numTimePrayingForIntentionsThisMonth = undefined;
global.numTotalTimePrayingForIntentions = undefined;
global.other_user_numTotalTimePrayingForIntentions = undefined;
global.default_profile_pic = "https://worldwideprayer.world/images/logo2_512_by_512.png";
global.default_banner_pic = "https://worldwideprayer.world/images/logo2_512_by_512.png";
global.profile_pic_ref = global.default_profile_pic;
global.other_user_profile_pic_ref = global.default_profile_pic;
global.banner_pic_ref = global.default_banner_pic;
global.other_user_banner_pic_ref = global.default_banner_pic;
global.first_name = undefined;
global.other_user_first_name = undefined;
global.last_name = undefined;
global.other_user_last_name = undefined;
global.username = undefined;
global.username1 = undefined;
global.other_user_username = undefined;
global.other_user_username1 = undefined;
global.email = undefined;
global.other_user_email = undefined;
global.about_me = undefined;
global.other_user_about_me = undefined;
global.gender = undefined;
global.other_user_gender = undefined;
global.dob = undefined;
global.other_user_dob = undefined;
global.xGuest = "Guest" + Math.floor((Math.random() * 100000) + 1);
global.db = undefined;
global.worker = undefined;
global.gatherWorker = undefined;
global.isMobile = false;
global.checkIfBodyTagLoadedSettings = undefined;
global.checkIfBodyTagLoadedAbout = undefined;
global.checkIfBodyTagLoadedMap = undefined;
global.checkIfBodyTagLoadedDonate = undefined;
global.checkIfBodyTagLoadedIndex = undefined;
global.checkIfBodyTagLoadedLogin = undefined;
global.checkIfBodyTagLoadedMyProfile = undefined;
global.bodyClassName = undefined;
global.headLoaded = undefined;
global.locationReloaded = undefined;
global.locationReloaded2 = undefined;
global.barbaDummyVar = {};
global.boolean1 = undefined;
global.snackbarMessage = undefined;
global.firstPageOfSession = true;
global.savePrayerRoomButtons = [];
global.intentionsIDList = [];
global.intentionsUsernameList = [];
global.intentionsTitleList = [];
global.intentionsTextRefList = [];
global.intentionsTagsList = [];
global.intentionsDateandtimeList = [];
global.intentionsProfilePicList = [];
global.intentionsReactsArrays = [];

global.prayerRoomRows = [];
global.intentionRoomRows = [];


global.idListSingle = [];
global.roomNameListSingle = [];
global.usernameListSingle = [];
global.profilePicListSingle = [];
global.roomPasswordListSingle = [];
global.textRefListSingle = [];
global.backgroundRefListSingle = [];
global.musicRefListSingle = [];
global.recordingRefListSingle = [];
global.afterPrayerTextRefListSingle = [];
global.descriptionTextRefListSingle = [];
global.creatorNameListSingle = [];
global.prayerLengthListSingle = [];
global.prayerDatetimeListSingle = [];
global.prayerIsRecurringListSingle = [];
global.timeToDeleteOrRenewPrayerListSingle = [];
global.minutesBetweenPrayersListSingle = [];
global.hoursBetweenPrayersListSingle = [];
global.daysBetweenPrayersListSingle = [];
global.numRepeatsListSingle = [];
global.tagsListSingle = [];
global.prayerRoomsReactsArraysSingle = [];


export function getUserDataFromResponse(response) {
    console.log("response from getUserDataFromResponse: " + response);
    response = JSON.parse(response);
    console.log("response from getUserDataFromResponse: ", response);

    global.isUserLoggedIn = true;
    global.id = response["user"]["id"];
    console.log("id " + global.id);
    global.first_name = response["user"]["first_name"];
    console.log("first_name " + global.first_name);
    global.last_name = response["user"]["last_name"];
    global.username1 = response["user"]["username1"];
    global.username = global.username1;
    global.other_user_username = global.username;
    global.other_user_username1 = global.username;
    global.email = response["user"]["email"];
    global.other_user_email = global.email;
    console.log("other_user_email " + global.other_user_email);

    global.gender = response["user"]["gender"];
    global.dob = response["user"]["dob"];
    global.About_Me = response["user"]["About_Me"];
    global.profile_pic_ref = response["user"]["profile_pic_ref"] || ' ';
    global.banner_pic_ref = response["user"]["banner_pic_ref"] || ' ';

    global.username1_lowercase = response["user"]["username1_lowercase"] || ' ';
    global.dateandtime = response["user"]["dateandtime"];
    global.current_location = response["user"]["current_location"] || ' ';

    global.numFollowing = response["user"]["numFollowing"] || 0;
    global.numFollowers = response["user"]["numFollowers"] || 0;

    console.log("numFollowing: " + global.numFollowing);
    console.log("numFollowers: " + global.numFollowers);

    global.numPosts = response["user"]["numPosts"] || 0;
    global.numComments = response["user"]["numComments"] || 0;
    global.numLikes = response["user"]["numLikes"] || 0;
    global.numDislikes = response["user"]["numDislikes"] || 0;
    global.numAttendedPrayersThisWeek = response["user"]["numAttendedPrayersThisWeek"] || 0;
    global.numAttendedPrayersThisMonth = response["user"]["numAttendedPrayersThisMonth"] || 0;
    global.numTotalAttendedPrayers = response["user"]["numTotalAttendedPrayers"] || 0;
    global.numPeoplePrayedWithThisWeek = response["user"]["numPeoplePrayedWithThisWeek"] || 0;
    global.numPeoplePrayedWithThisMonth = response["user"]["numPeoplePrayedWithThisMonth"] || 0;
    global.numTotalPeoplePrayedWith = response["user"]["numTotalPeoplePrayedWith"] || 0;
    global.numTimeInMeditationThisWeek = response["user"]["numTimeInMeditationThisWeek"] || 0;
    global.numTimeInMeditationThisMonth = response["user"]["numTimeInMeditationThisMonth"] || 0;
    global.numTotalTimeInMeditation = response["user"]["numTotalTimeInMeditation"] || 0;
    global.numTimePrayingForIntentionsThisWeek = response["user"]["numTimePrayingForIntentionsThisWeek"] || 0;
    global.numTimePrayingForIntentionsThisMonth = response["user"]["numTimePrayingForIntentionsThisMonth"] || 0;
    global.numTotalTimePrayingForIntentions = response["user"]["numTotalTimePrayingForIntentions"] || 0;

    storeUserDataInLocalStorage();

}

function storeUserDataInLocalStorage() {
    localStorage.setItem("isUserLoggedIn", global.isUserLoggedIn);
    localStorage.setItem("id", global.id);
    localStorage.setItem("first_name", global.first_name);
    localStorage.setItem("last_name", global.last_name);
    localStorage.setItem("username1", global.username1);
    localStorage.setItem("username", global.username);
    localStorage.setItem("other_user_username1", global.other_user_username1);
    localStorage.setItem("other_user_username", global.other_user_username);
    localStorage.setItem("email", global.email);
    localStorage.setItem("other_user_email", global.other_user_email);
    localStorage.setItem("gender", global.gender);
    localStorage.setItem("dob", global.dob);
    localStorage.setItem("profile_pic_ref", global.profile_pic_ref);
    localStorage.setItem("banner_pic_ref", global.banner_pic_ref);
    localStorage.setItem("About_Me", global.About_Me);
    localStorage.setItem("username1_lowercase", global.username1_lowercase);
    localStorage.setItem("dateandtime", global.dateandtime);
    localStorage.setItem("current_location", global.current_location);
    localStorage.setItem("numFollowing", global.numFollowing);
    localStorage.setItem("numFollowers", global.numFollowers);
    localStorage.setItem("numPosts", global.numPosts);
    localStorage.setItem("numComments", global.numComments);
    localStorage.setItem("numLikes", global.numLikes);
    localStorage.setItem("numDislikes", global.numDislikes);
    localStorage.setItem("numAttendedPrayersThisWeek", global.numAttendedPrayersThisWeek);
    localStorage.setItem("numAttendedPrayersThisMonth", global.numAttendedPrayersThisMonth);
    localStorage.setItem("numTotalAttendedPrayers", global.numTotalAttendedPrayers);
    localStorage.setItem("numPeoplePrayedWithThisWeek", global.numPeoplePrayedWithThisWeek);
    localStorage.setItem("numPeoplePrayedWithThisMonth", global.numPeoplePrayedWithThisMonth);
    localStorage.setItem("numTotalPeoplePrayedWith", global.numTotalPeoplePrayedWith);
    localStorage.setItem("numTimeInMeditationThisWeek", global.numTimeInMeditationThisWeek);
    localStorage.setItem("numTimeInMeditationThisMonth", global.numTimeInMeditationThisMonth);
    localStorage.setItem("numTotalTimeInMeditation", global.numTotalTimeInMeditation);
    localStorage.setItem("numTimePrayingForIntentionsThisWeek", global.numTimePrayingForIntentionsThisWeek);
    localStorage.setItem("numTimePrayingForIntentionsThisMonth", global.numTimePrayingForIntentionsThisMonth);
    localStorage.setItem("numTotalTimePrayingForIntentions", global.numTotalTimePrayingForIntentions);

}

function getUserDataFromLocalStorage() {
    global.isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    console.log("isUserLoggedIn:", global.isUserLoggedIn);
    global.id = localStorage.getItem("id");
    global.first_name = localStorage.getItem("first_name");
    global.last_name = localStorage.getItem("last_name");
    global.username1 = localStorage.getItem("username1");
    global.username = localStorage.getItem("username");
    // other_user_username = localStorage.getItem("other_user_username");
    // other_user_username1 = localStorage.getItem("other_user_username1");

    global.email = localStorage.getItem("email");
    // other_user_email = localStorage.getItem("other_user_email");
    global.gender = localStorage.getItem("gender");
    global.dob = localStorage.getItem("dob");
    global.profile_pic_ref = localStorage.getItem("profile_pic_ref");
    global.banner_pic_ref = localStorage.getItem("banner_pic_ref");
    global.About_Me = localStorage.getItem("About_Me");

    global.username1_lowercase = localStorage.getItem("username1_lowercase");
    global.dateandtime = localStorage.getItem("dateandtime");
    global.current_location = localStorage.getItem("current_location");

    global.numFollowing = localStorage.getItem("numFollowing");
    global.numFollowers = localStorage.getItem("numFollowers");
    global.numPosts = localStorage.getItem("numPosts");
    global.numComments = localStorage.getItem("numComments");
    global.numLikes = localStorage.getItem("numLikes");
    global.numDislikes = localStorage.getItem("numDislikes");
    global.numAttendedPrayersThisWeek = localStorage.getItem("numAttendedPrayersThisWeek");
    global.numAttendedPrayersThisMonth = localStorage.getItem("numAttendedPrayersThisMonth");
    global.numTotalAttendedPrayers = localStorage.getItem("numTotalAttendedPrayers");
    global.numPeoplePrayedWithThisWeek = localStorage.getItem("numPeoplePrayedWithThisWeek");
    global.numPeoplePrayedWithThisMonth = localStorage.getItem("numPeoplePrayedWithThisMonth");
    global.numTotalPeoplePrayedWith = localStorage.getItem("numTotalPeoplePrayedWith");
    global.numTimeInMeditationThisWeek = localStorage.getItem("numTimeInMeditationThisWeek");
    global.numTimeInMeditationThisMonth = localStorage.getItem("numTimeInMeditationThisMonth");
    global.numTotalTimeInMeditation = localStorage.getItem("numTotalTimeInMeditation");
    global.numTimePrayingForIntentionsThisWeek = localStorage.getItem("numTimePrayingForIntentionsThisWeek");
    global.numTimePrayingForIntentionsThisMonth = localStorage.getItem("numTimePrayingForIntentionsThisMonth");
    global.numTotalTimePrayingForIntentions = localStorage.getItem("numTotalTimePrayingForIntentions");

    console.log("id: " + global.id);
    console.log("first_name:", global.first_name);
    console.log("last_name:", global.last_name);
    console.log("email: " + global.email);
    console.log("gender: " + global.gender);
    console.log("dob: " + global.dob);
    console.log("profile_pic_ref: " + global.profile_pic_ref);
    console.log("banner_pic_ref: " + global.banner_pic_ref);
    console.log("About_Me: " + global.About_Me);

    console.log("username1_lowercase: " + global.username1_lowercase);
    console.log("dateandtime: " + global.dateandtime);
    console.log("current_location: " + global.current_location);

    console.log("numPosts: " + global.numPosts);
    console.log("numComments: " + global.numComments);
    console.log("numLikes: " + global.numLikes);
    console.log("numDislikes: " + global.numDislikes);
    console.log("numFollowing: " + global.numFollowing);
    console.log("numFollowers: " + global.numFollowers);
}


function signOut() {

    global.isUserLoggedIn = false;
    global.id = '';
    global.first_name = '';
    global.last_name = '';
    global.username1 = '';
    global.username = '';
    // other_user_username = '';
    // other_user_username1 = '';
    global.email = '';
    // other_user_email = '';
    global.gender = '';
    global.dob = ''
    global.profile_pic_ref = global.default_profile_pic;
    global.About_Me = '';
    global.username1_lowercase = '';
    global.dateandtime = '';
    global.current_location = '';
    global.banner_pic_ref = global.default_banner_pic;
    global.numFollowing = 0;
    global.numFollowers = 0;
    global.numPosts = 0;
    global.numComments = 0;
    global.numLikes = 0;
    global.numDislikes = 0;
    global.numAttendedPrayersThisWeek = 0;
    global.numAttendedPrayersThisMonth = 0;
    global.numTotalAttendedPrayers = 0;
    global.numPeoplePrayedWithThisWeek = 0;
    global.numPeoplePrayedWithThisMonth = 0;
    global.numTotalPeoplePrayedWith = 0
    global.numTimeInMeditationThisWeek = 0;
    global.numTimeInMeditationThisMonth = 0;
    global.numTotalTimeInMeditation = 0;
    global.numTimePrayingForIntentionsThisWeek = 0;
    global.numTimePrayingForIntentionsThisMonth = 0;
    global.numTotalTimePrayingForIntentions = 0;

    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("id");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("username1");
    localStorage.removeItem("username");
    localStorage.removeItem("other_user_username");
    localStorage.removeItem("other_user_username1");
    localStorage.removeItem("email");
    localStorage.removeItem("other_user_email");
    localStorage.removeItem("gender");
    localStorage.removeItem("dob");
    localStorage.removeItem("profile_pic_ref");
    localStorage.removeItem("banner_pic_ref");
    localStorage.removeItem("About_Me");
    localStorage.removeItem("username1_lowercase");
    localStorage.removeItem("dateandtime");
    localStorage.removeItem("current_location");
    localStorage.removeItem("numFollowing");
    localStorage.removeItem("numFollowers");
    localStorage.removeItem("numPosts");
    localStorage.removeItem("numComments");
    localStorage.removeItem("numLikes");
    localStorage.removeItem("numDislikes");
    localStorage.removeItem("numAttendedPrayersThisWeek");
    localStorage.removeItem("numAttendedPrayersThisMonth");
    localStorage.removeItem("numTotalAttendedPrayers");
    localStorage.removeItem("numPeoplePrayedWithThisWeek");
    localStorage.removeItem("numPeoplePrayedWithThisMonth");
    localStorage.removeItem("numTotalPeoplePrayedWith");
    localStorage.removeItem("numTimeInMeditationThisWeek");
    localStorage.removeItem("numTimeInMeditationThisMonth");
    localStorage.removeItem("numTotalTimeInMeditation");
    localStorage.removeItem("numTimePrayingForIntentionsThisWeek");
    localStorage.removeItem("numTimePrayingForIntentionsThisMonth");
    localStorage.removeItem("numTotalTimePrayingForIntentions");

    window.open('./login', '_self');
}

export function setupSideNav() {
    if (!global.isUserLoggedIn) { // if the user is logged in their username will have been retrieved (is in barba-transition.js)
        global.username1 = global.xGuest; // so they show up as guest when added to the meditation
        global.email = global.xGuest;
        document.getElementById("sign-in").childNodes[0].nodeValue = 'Sign In/Register ';
        document.getElementById("sign-in-icon").src = './images/login-icon-8a2be2.png';
        global.boolean1 = false;

        document.querySelector("#menu_buttons_top_row #username_in_menu_logo").innerHTML = "Login / Register";
        document.querySelector("#menu_buttons_container_top_bar #username_in_menu_logo").innerHTML = "Login / Register";

    } else { // user is signed in
        // global.username1 = first_name + " " + last_name;
        document.getElementById("sign-in").childNodes[0].nodeValue = 'Sign Out ';
        document.getElementById("sign-in-icon").src = './images/logout-icon-8a2be2.png';
        global.boolean1 = true;

        document.querySelector("#menu_buttons_top_row #main_menu_button_logo").src = global.profile_pic_ref;
        document.querySelector("#menu_buttons_top_row #username_in_menu_logo").innerHTML = global.username;

        document.querySelector("#menu_buttons_container_top_bar #main_menu_button_logo").src = global.profile_pic_ref;
        document.querySelector("#menu_buttons_container_top_bar #username_in_menu_logo").innerHTML = global.username;

        document.querySelector("#menu_buttons_container_top_bar #main_menu_button_logo").onerror = function (event) {
            this.src = global.default_profile_pic;
        };

        document.querySelector("#menu_buttons_top_row #main_menu_button_logo").onerror = function (event) {
            this.src = global.default_profile_pic;
        };

        // document.querySelector("#menu_buttons_container_top_bar #main_menu_container").style.offsetHeight 
        // = document.querySelector("#menu_buttons_container_top_bar #intentions_menu").offsetHeight;
        // document.querySelector("#menu_buttons_container_top_bar .menu-container").style.minWidth = document.getElementById("intentions_menu").style.width;

        // console.log("height:", document.getElementById("intentions_menu").style.height)
    }


    document.getElementById("your-profile").onclick = function () {
        if (global.isUserLoggedIn) {
            // user is signed in; go to their profile
            window.open("./user/" + global.username, "_self");

        } else {
            // user is a guest
            global.snackbarMessage.innerHTML = "Create an account to have a profile!";
            global.snackbarMessage.className = "show";
            setTimeout(function () { global.snackbarMessage.className = global.snackbarMessage.className.replace("show", ""); }, 7000);
        }
    }

    document.getElementById('username_in_menu').innerHTML = global.username1;

    console.log("in setupSideNav() | global.username1: " + global.username1, "isUserLoggedIn:", global.isUserLoggedIn);

    document.getElementById('sign-in').onclick = function () {
        signOut();
        window.open("./login", "_self");
    }

    document.getElementById("your-profile").onclick = function () {
        if (global.boolean1 == 1) {
            // user is signed in; go to their profile
            window.open("./user/" + global.username1, "_self");

        } else {
            // user is a guest; go to world wide feed
            // window.open("./world-faith-feed", "_self");
            global.snackbarMessage.innerHTML = "Create an account to have a profile!";
            global.snackbarMessage.className = "show";
            setTimeout(function () { global.snackbarMessage.className = global.snackbarMessage.className.replace("show", ""); }, 3000);
        }
    }

    sessionStorage.coming_from_prayer = "false" // only time this should be true is when user enters the prayer map after a prayer; setting it to false here cause this gets called by every page
}


// call to get the user data for when they're signed in
getUserDataFromLocalStorage();

// }

// // You can customize the rule of pjax transition activation by adding the code below.
// Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;
// Barba.Pjax.preventCheck = function(evt, element) {
//     if(element){
//     /**
//      * You Can Add Your Custom Check Here
//      */
//       if (!Barba.Pjax.originalPreventCheck(evt, element)) {
//             return false;
//         }
//   }
//     return true;
// };
// // Now let’s add custom check to make pjax transition disabled when links ending with extensions clicked.
// global.no_barba_extensions = [
//     '.pdf', '.jpg', '.jpeg', '.png', '.gif', '.mp4', '.avi',
//     '.mp3', '.csv', '.txt', '.flv', '.wmv', '.tar', '.zip', '.gzip', '.3gp'
// ];
// global.ref = element.pathname;
// // by extension
// $.each(no_barba_extensions, function (i, pattern) {
//     // ends-with match
//     if ((ref.lastIndexOf(pattern) + pattern.length === ref.length) && (pattern.length <= ref.length)) {
//         return false;
//     }
// });



// Generally speaking, mobile device has lower spec rather than desktop PC. So if you use rich animation between pages, it might not animate like you imagine on smartphone. At this time, you may have to consider turning off Barba.js.
// global.ww = $(window).width(); // window width
// global.ww = window.innerWidth;
// global.pjax_min_window_size = 768; // portrait tablet width
// /* enable barba.js when window size is larger than 'pjax_min_window_size' */
// if (ww >= pjax_min_window_size) {
//     /* init Pjax */
//     Barba.Pjax.init();
//     Barba.Prefetch.init();
// }


// When using Google Analytics or Tag Manager, you have to send pageview on every page transition.
// Barba.Dispatcher.on('initStateChange', function () {
//     if (Barba.HistoryManager.history.length <= 1) {
//         return;
//     }
//     if (typeof gtag === 'function') {
//         // send statics by Google Analytics(gtag.js)
//         gtag('config', 'YOUR_TRACKING_ID', { 'page_path': location.pathname, 'use_amp_client_id': true });
//     } else {
//         // send statics by Google Analytics(analytics.js) or Google Tag Manager
//         if (typeof ga === 'function') {
//             var trackers = ga.getAll();
//             trackers.forEach(function (tracker) {
//                 ga(tracker.get('name') + '.send', 'pageview', location.pathname, { 'useAmpClientId': true });
//             });
//         }
//     }
// });

// console.log("transitioninprogress?: " + Barba.Pjax.transitionProgress);

// global.FadeTransition = Barba.BaseTransition.extend({
// 	start: function () {
// 		/**
// 	* This function is automatically called as soon the Transition starts
// 	* this.newContainerLoading is a Promise for the loading of the new container
// 	* (Barba.js also comes with an handy Promise polyfill!)
// 	*/
// 		// As soon the loading is finished and the old page is faded out, let's fade the new page
// 		Promise
// 			.all([this.newContainerLoading, this.fadeOut()])
// 			.then(this.fadeIn.bind(this));
// 	},
// 	fadeOut: function () {

// 		console.log("fadeOut about.html");
// 		// this.oldContainer;

// 	},
// 	fadeIn: function () {

// 		console.log("fadeIn about.html");

// 		this.newContainer.classList.add("slide-in");

// 		var that = this;

// 		this.newContainer.addEventListener('animationend', function () { // runs when animation ends (get rid of old container)
// 			that.newContainer.classList.remove('slide-in');
// 			that.done();
// 		});

// 	}
// });
// /**
// * Next step, you have to tell Barba to use the new Transition
// */
// Barba.Pjax.getTransition = function () {
// 	/**
// * Here you can use your own logic!
// * For example you can use different Transition based on the current page or link...
// */
// 	return FadeTransition;
// };


// // importing all the necessary javascript files
// global.w = document.createElement('script');
// global.x = document.createElement('script');
// global.y = document.createElement('script');
// w.type = "text/javascript";
// x.type = "text/javascript";
// y.type = "text/javascript";
// // global.z = document.createElement('script');

// // having these next functions and the code after to make sure all javascript files are loaded before barba tries to initialize anything in on('newPageReady...)
// function checkY() {
//     if (y.readyState) {  // only required for IE <9
//         y.onreadystatechange = function () {
//             if (y.readyState === "loaded" || y.readyState === "complete") {
//                 y.onreadystatechange = null;
//                 // console.log("before start() settings.html");
//                 Barba.Pjax.start();
//             }
//         };
//     } else {  //Others
//         y.onload = function () {
//             // console.log("before start() settings.html");
//             Barba.Pjax.start();
//         };
//     }
// }

// function checkX() {
//     if (x.readyState) {  // only required for IE <9
//         x.onreadystatechange = function () {
//             if (x.readyState === "loaded" || x.readyState === "complete") {
//                 x.onreadystatechange = null;
//                 checkY();
//             }
//         };
//     } else {  //Others
//         x.onload = function () {
//             checkY();
//         };
//     }
// }

// if (w.readyState) {  // only required for IE <9
//     w.onreadystatechange = function () {
//         if (w.readyState === "loaded" || w.readyState === "complete") {
//             w.onreadystatechange = null;
//             checkX();
//         }
//     };
// } else {  //Others
//     w.onload = function () {
//         checkX();
//     };
// }

// w.src = './js/settings.js';
// x.src = './js/index.js';
// y.src = './js/my_profile.js';
// // w.src = './settings.js';
// document.getElementsByTagName("head")[0].appendChild(w);
// document.getElementsByTagName("head")[0].appendChild(x);
// document.getElementsByTagName("head")[0].appendChild(y);
// document.getElementsByTagName("head")[0].appendChild(x);


if (document.getElementById("snackbar")) {
    global.snackbarMessage = document.getElementById("snackbar");
}


if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    global.isMobile = true;
}

// In Barba, scripts don't get evaluated when loading a new container. It can be done easily using Events like this:
// Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {

// end the countdown worker that's set in index.js so nothing is attempted to be updated when pages switch (trying to do this in window.onbeforeunload in index.js wasn't working)
if (global.worker) {
    global.worker.terminate();
}
if (global.gatherWorker) {
    global.gatherWorker.terminate();
}

// add css files to header
// $("head").append('<link rel="stylesheet" type="text/css" href="' + "../css/global-styles.css?version=1" + '">"');

// if (!headLoaded) {
//     $("head").load("head.html")
//     headLoaded = true;
// }

// document.getElementsByTagName('head')[0].innerHTML = '';

// if (!locationReloaded2) {
//     locationReloaded = true;
// locationReloaded2 = true;
// location.reload();

// }

var cssId = 'globalStylesCSS';
if (!document.getElementById(cssId)) // only load the css file if it was not loaded already
{
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    if (!global.isMobile) {
        link.href = global.tempWebsiteFullURL + 'css/global-styles.css?version=' + Date.now(); // make sure the CSS path is absolute so it is loaded from your servers
    } else {
        link.href = global.tempWebsiteFullURL + 'css/global-styles-mobile.css?version=' + Date.now();
        // link.href = 'css/global-styles.css?version=' + Date.now();
    }
    link.media = 'all';
    head.appendChild(link);
}
cssId = 'fontAwesomeCSS';
if (!document.getElementById(cssId)) // only load the css file if it was not loaded already
{
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    link.media = 'all';
    head.appendChild(link);
}
cssId = 'w3SchoolsCSS';
if (!document.getElementById(cssId)) // only load the css file if it was not loaded already
{
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://www.w3schools.com/w3css/4/w3.css'; // make sure the CSS path is absolute so it is loaded from your servers
    link.media = 'all';
    head.appendChild(link);
}
// <link rel='manifest' href='/manifest.json'>
cssId = 'manifestJSON';
if (!document.getElementById(cssId)) // only load the css file if it was not loaded already
{
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'manifest';
    link.href = '../manifest.json'; // make sure the CSS path is absolute so it is loaded from your servers
    head.appendChild(link);
}

// var scriptId = 'globalFunctionsJS';
// if (!document.getElementById(scriptId)) // only load the maps api file if it was not loaded already
// {
//     var scriptSrc = "js/global-functions.js?version=" + Date.now();
//     // $("head").append('<script type="text/javascript" id="' + scriptId + '" src="' + scriptSrc + '"></script>');
//     console.log("scriptSrc: " + scriptSrc);
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.id = scriptId;
//     script.type = 'text/javascript';
//     script.src = scriptSrc; // make sure the path is absolute so it is loaded from the server
//     head.appendChild(script);
// }

// scriptId = 'markJS';
// if (!document.getElementById(scriptId)) // only load the maps api file if it was not loaded already
// {
//     var scriptSrc = "dist/mark.min.js?version=" + Date.now();
//     // $("head").append('<script type="text/javascript" id="' + scriptId + '" src="' + scriptSrc + '"></script>');
//     console.log("scriptSrc: " + scriptSrc);
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.id = scriptId;
//     script.type = 'text/javascript';
//     script.charset = 'UTF-8';
//     script.src = scriptSrc; // make sure the path is absolute so it is loaded from the server
//     head.appendChild(script);
// }

// scriptId = 'lessJS';
// if (!document.getElementById(scriptId)) // only load the maps api file if it was not loaded already
// {
//     var scriptSrc = "https://cdn.jsdelivr.net/npm/less@4.1.1";
//     // $("head").append('<script type="text/javascript" id="' + scriptId + '" src="' + scriptSrc + '"></script>');
//     console.log("scriptSrc: " + scriptSrc);
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.id = scriptId;
//     script.type = 'text/javascript';
//     script.charset = 'UTF-8';
//     script.src = scriptSrc; // make sure the path is absolute so it is loaded from the server
//     head.appendChild(script);
// }


// scriptId = 'JSSearch';
// if (!document.getElementById(scriptId)) // only load the maps api file if it was not loaded already
// {
//     var scriptSrc = "js-search/dist/umd/js-search.min.js?version=" + Date.now();
//     // $("head").append('<script type="text/javascript" id="' + scriptId + '" src="' + scriptSrc + '"></script>');
//     console.log("scriptSrc: " + scriptSrc);
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.id = scriptId;
//     script.type = 'text/javascript';
//     script.charset = 'UTF-8';
//     script.src = scriptSrc; // make sure the path is absolute so it is loaded from the server
//     head.appendChild(script);
// }

// <script type="module" src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate"></script>
// scriptId = 'pwaJS';
// if (!document.getElementById(scriptId)) // only load the maps api file if it was not loaded already
// {
//     var scriptSrc = "https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate";
//     // $("head").append('<script type="text/javascript" id="' + scriptId + '" src="' + scriptSrc + '"></script>');
//     console.log("scriptSrc: " + scriptSrc);
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.id = scriptId;
//     script.type = 'text/javascript';
//     script.src = scriptSrc; // make sure the path is absolute so it is loaded from the server
//     head.appendChild(script);
// }


// console.log("first page of session without transitioning yet is open: " + Barba.HistoryManager.history.length);


// if (Barba.HistoryManager.history.length <= 2) {
// if (firstPageOfSession) {
//     // return;
//     console.log("first page of session without transitioning yet is open: " + Barba.HistoryManager.history.length);

//     firstPageOfSession = false;

// } else {
//     console.log("not first page open: " + Barba.HistoryManager.history.length);
//     // TO RE-EVALUATE SCRIPT TAGS IN THE BODY OF THE HTML
//     $(container).find('script').each(function (i, script) {
//         var $script = $(script);
//         if ($script.attr('src') && !$script.attr('src').includes('barba')) { // otherwise will keep loading this same js file over and over again and break the page; some script tags have code within them (don't have a src attribute) and want to run them (we just don't want to keep running the barba import tags)
//             console.log("src: " + $script.attr('src'));
//             $.ajax({
//                 url: $script.attr('src'),
//                 cache: true,
//                 dataType: 'script',
//                 success: function () {
//                     $script.trigger('load');
//                 }
//             });
//         }
//     });
// }
// console.log("new page ready; currentStatus: ", currentStatus, " oldStatus: ", oldStatus, " container: ", container);

// // initialize the webpage with the correct js function depending on the webpage
// if (document.URL.includes("index")) {
//     // if (!indexPageWasInitialized) {
//     initIndexPage();
//     // }
// }
// if (document.URL.includes("settings")) {
//     // if (!settingsPageWasInitialized) {
//     initSettingsPage();
//     // }
// }

// TO MODIFY THE HEAD TAGS WHEN SWITCHING PAGES
// if (Barba.HistoryManager.history.length === 1) {
//     // return;
// } else {
//     var $newPageHead = $('<head />').html(
//         $.parseHTML(
//             newPageRawHTML.match('/<head[^>]*>([sS.]*)</head > /i ')[ 0 ], // place I copied this from didn't have quotes around what's inside match() but idk
//         document,
//                 true
//             )
//         );
//     var headTags = [
//         "meta[name='keywords']",
//         "meta[name='description']",
//         "meta[property^='og']",
//         "meta[name^='twitter']",
//         "meta[itemprop]",
//         "link[itemprop]",
//         "link[rel='prev']",
//         "link[rel='next']",
//         "link[rel='canonical']",
//         "link[rel='alternate']"
//     ].join(',');
//     $('head').find(headTags).remove();
//     $newPageHead.find(headTags).appendTo('head');
// }


// if (checkIfBodyTagLoadedSettings) {
//     clearInterval(checkIfBodyTagLoadedSettings);
//     console.log("checkIfBodyTagLoadedSettings", checkIfBodyTagLoadedSettings);
// }
// if (checkIfBodyTagLoadedAbout) {
//     clearInterval(checkIfBodyTagLoadedAbout);
//     console.log("checkIfBodyTagLoadedAbout", checkIfBodyTagLoadedAbout);
// }
// if (checkIfBodyTagLoadedMap) {
//     clearInterval(checkIfBodyTagLoadedMap);
//     console.log("checkIfBodyTagLoadedMap", checkIfBodyTagLoadedMap);
// }
// if (checkIfBodyTagLoadedDonate) {
//     clearInterval(checkIfBodyTagLoadedDonate);
//     console.log("checkIfBodyTagLoadedDonate", checkIfBodyTagLoadedDonate);
// }
// if (checkIfBodyTagLoadedIndex) {
//     clearInterval(checkIfBodyTagLoadedIndex);
//     console.log("checkIfBodyTagLoadedIndex", checkIfBodyTagLoadedIndex);
// }
// if (checkIfBodyTagLoadedLogin) {
//     clearInterval(checkIfBodyTagLoadedLogin);
//     console.log("checkIfBodyTagLoadedLogin", checkIfBodyTagLoadedLogin);
// }
// if (checkIfBodyTagLoadedMyProfile) {
//     clearInterval(checkIfBodyTagLoadedMyProfile);
//     console.log("checkIfBodyTagLoadedMyProfile", checkIfBodyTagLoadedMyProfile);
// }


// var currentURL = currentStatus.url;
// var currentURL = location.href;
// if (currentURL.includes(".cf/donate")) {
//     bodyClassName = "donateBody";
// }
// else if (currentURL.includes(".cf/settings")) {
//     bodyClassName = "settingsBody";
// }
// else if (currentURL.includes(".cf/login")) {
//     bodyClassName = "loginBody";
// }
// else if (currentURL.includes(".cf/user/") || currentURL.includes(".cf/world-faith-feed") || currentURL.includes(".cf/Homepage")) {
//     bodyClassName = "myProfileBody";
// }
// else if (currentURL.includes(".cf/about")) {
//     bodyClassName = "aboutBody";
// }
// else if (currentURL.includes(".cf/index")) {
//     bodyClassName = "indexBody";
// }
// else if (currentURL.includes(".cf/gather")) {
//     bodyClassName = "gatherBody";
// }
// else if (currentURL.includes(".cf/pray")) {
//     bodyClassName = "prayBody";
// }
// else {
//     bodyClassName = "";
// }

// });

// var checkIfBodyTagLoaded = setInterval(function () {
//     // timeout--;
//     if (document.body.className !== bodyClassName) {

//         // barba.hooks.afterEnter(function() {
//         // initSettingsPage();
//         document.body.className = bodyClassName;
//         // console.log("loaded3");
//         //   });
//         // if (!settingsPageWasInitialized) {
//         // initSettingsPage();
//         // }

//         console.log("loaded4");

//     }
//     // else if (timeout > 0) {
//     // }
//     // External library failed to load
//     // checkIfBodyTagLoadedSettings();
// }, 300);

// var checkIfUserAuthChecked = function () {
//     setTimeout(function () {
//         // timeout--;
//         if (typeof globalFunctions !== 'undefined' && document.getElementById("username_in_menu") && !document.getElementById("username_in_menu").innerHTML) { // no username would be in the menu if the auth was not checked

//             $('document').ready(function () {

// addUserAuthStateChangeListener();
// recheckUserAuth();


// console.log("loaded");


// });
// External file loaded
// initSettingsPage();
// console.log("loaded");
// }
// else if (timeout > 0) {
// }
// else {
// External library failed to load
// checkIfUserAuthChecked();
// console.log("not loaded");
// }
// }, 300);
// };

// checkIfUserAuthChecked();


// var FadeTransition = Barba.BaseTransition.extend({
//     start: function () {
//         /**
// * This function is automatically called as soon the Transition starts
// * this.newContainerLoading is a Promise for the loading of the new container
// * (Barba.js also comes with an handy Promise polyfill!)
// */

//         // As soon the loading is finished and the old page is faded out, let's fade the new page
//         Promise
//             .all([this.newContainerLoading, this.fadeOut()])
//             .then(this.fadeIn.bind(this));
//     },
//     fadeOut: function () {
//         /**
// * this.oldContainer is the HTMLElement of the old Container
// */

//         // need to reset variable if user is leaving index.html so init() will be called again once index.html is re-entered
//         // if (!document.URL.includes("index")) {
//         //     indexPageWasInitialized = false;
//         // }
//         // if (!document.URL.includes("settings")) {
//         //     settingsPageWasInitialized = false;
//         // }

//         // console.log("fadeOut: " + document.URL);

//         // remove any listeners (countdown is in index.js - need to remove if coming from index.html or will get errors)
//         // can't just do if (countdown) {clearInterval(countdown)} because you get an error saying countdown is undefined
//         $(this.oldContainer).find('script').each(function (i, script) {
//             var $script = $(script);
//             if ($script.attr('src') && $script.attr('src').includes('index.js')) {  // means the index.js script tag was loaded somewhere in the body of the page we are coming from
//                 console.log("coming from a page with an index.js script tag");
//                 clearInterval(countdown);
//                 document.getElementsByTagName("BODY")[0].removeEventListener('mousemove', mouseMoveFunction);
//             }
//             else if ($script.attr('src') && $script.attr('src').includes('my_profile.js')) {
//                 document.getElementsByTagName("BODY")[0].removeEventListener('mousemove', mouseMoveFunction);

//                 document.getElementById("myProfileCSS").parentNode.removeChild(document.getElementById("myProfileCSS")); // the styling was messing up some other pages
//                 document.getElementById("stylesCSS").parentNode.removeChild(document.getElementById("stylesCSS")); // the styling was messing up some other pages
//                 document.getElementById("croppieCSS").parentNode.removeChild(document.getElementById("croppieCSS"));
//                 document.getElementById("croppieJS").parentNode.removeChild(document.getElementById("croppieJS"));
//                 document.getElementsByTagName("base")[0].parentNode.removeChild(document.getElementsByTagName("base")[0]);

//                 document.getElementsByTagName("html")[0].className = "";

//                 // if (global.isMobile) {
//                 //     document.getElementsByTagName("html")[0].style.width = "980px";
//                 // }
//             } 
//             // else {
//             //     document.getElementsByTagName("html")[0].style.width = "";
//             //     document.getElementsByTagName("html")[0].style.height = "";
//             //     document.getElementsByTagName("body")[0].style.width = "";
//             //     document.getElementsByTagName("body")[0].style.height = "";
//             //     console.log("reset html and body height and width");
//             // }
//         });

//         $(window).unbind("resize");
//         $(window).unbind("focus");
//         $(window).unbind("blur");
//         $(window).unbind("scroll");
//         $(window).unbind("click");




//         // document.getElementsByTagName('head')[0].innerHTML = '';


//         return $(this.oldContainer).animate({ opacity: 0 }).promise();
//     },
//     fadeIn: function () {

//         // console.log("fade innnn: " + document.URL);

//         // // so will have correct styling even after page transition 
//         // if (!document.URL.includes("index")) {
//         //     document.getElementsByTagName('body')[0].className = 'indexBody';
//         // }
//         // else if (!document.URL.includes("settings")) {
//         //     document.getElementsByTagName('body')[0].className = 'settingsBody';
//         // }
//         // else if (!document.URL.includes("about")) {
//         //     document.getElementsByTagName('body')[0].className = 'aboutBody';
//         // }

//         // THIS WILL PROVIDE A SLIDE-IN TRANSITION WHERE NEXT PAGE SLIDES IN FROM THE RIGHT
//         // this.newContainer.classList.add("slide-in");

//         // var that = this;

//         // this.newContainer.addEventListener('animationend', function () { // runs when animation ends (get rid of old container)
//         // 	that.newContainer.classList.remove('slide-in');
//         // 	that.done();
//         // });


//         // THIS WILL PROVIDE A FADE TRANSITION WHERE SCREEN GOES GRAY FOR A SECOND THEN NEXT PAGE OPENS -- NEED THE RETURN STATEMENT IN "fadeOut" FOR THIS
//         /**
// * this.newContainer is the HTMLElement of the new Container
// * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
// * Please note, newContainer is available just after newContainerLoading is resolved!
// */

//         var _this = this;
//         var $el = $(this.newContainer);
//         $(this.oldContainer).hide();
//         $el.css({
//             visibility: 'visible',
//             opacity: 0
//         });
//         $el.animate({ opacity: 1 }, 1000, function () {
//             /**
// * Do not forget to call .done() as soon your transition is finished!
// * .done() will automatically remove from the DOM the old Container
// */
//             _this.done();
//         });
//     }
// });
// /**
//  * Next step, you have to tell Barba to use the new Transition
//  */
// Barba.Pjax.getTransition = function () {
//     /**
// * Here you can use your own logic!
// * For example you can use different Transition based on the current page or link...
// */
//     return FadeTransition;
// };



// Barba.Pjax.start();


var widthOfIcon;
if (global.isMobile) {
    widthOfIcon = '60';
} else {
    widthOfIcon = '50';
}

var checkIfSidenavLoaded = function () {
    setTimeout(function () {
        // timeout--;
        // if (typeof barbaDummyVar !== 'undefined') {
        // if (parseInt(document.getElementById("logo_in_menu").getBoundingClientRect().width) >= '280') {

        if (parseInt($("#share_row .telegram-icon").width()) >= widthOfIcon) {

            // External file loaded
            document.body.style.display = "block";
            // console.log("barbajs loaded");
            console.log("width now:", document.getElementById("logo_in_menu").style.width);
        }
        // else if (timeout > 0) {
        // }
        else {
            // External library failed to load
            checkIfSidenavLoaded();
            // console.log("barbajs not loaded");
            console.log("width:", parseInt($("#share_row .telegram-icon").width()), " widthOfLogo", widthOfIcon);
        }
    }, 100);
};

if ((!document.URL.includes(".world/pray") && !document.URL.includes(".world/gather")) || document.URL.includes('.world/prayer_room.php')) { // prayer page doesn't have the sidenavmenu so don't want this running

    $('document').ready(function () {

        // checkIfSidenavLoaded();


        if ((!document.body.id == 'index_body') && (!document.URL.includes(".world/map"))) {
            // make the menus disappear if the user scrolls down and appear if the user scrolls up
            var previousPosition = window.pageYOffset || document.documentElement.scrollTop;
            previousPosition = 999999; // otherwise you must scroll up and then scroll down to make the menus disappear because the above line that's now commented out makes previousPosition = 0
            window.onscroll = function () {
                var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
                // console.log("currentPosition:", currentPosition, "previousPosition:", previousPosition);

                if (previousPosition > currentPosition) {
                    if (document.getElementById("menu_buttons_container_top_bar").style.opacity == 0) {
                        // console.log('scrolling up while menus opacity == 0');
                        document.getElementById("menu_buttons_container_top_bar").style.opacity = 1;
                        document.getElementById("menu_buttons_container_top_bar").style.transform = 'scale(1)';
                    }
                } else {
                    if (document.getElementById("menu_buttons_container_top_bar").style.opacity == 1) {
                        // console.log('scrolling down while menus opacity == 1');
                        document.getElementById("menu_buttons_container_top_bar").style.opacity = 0;
                        document.getElementById("menu_buttons_container_top_bar").style.transform = 'scale(0)';
                    }
                }

                previousPosition = currentPosition;
            };

        }

    });

}


