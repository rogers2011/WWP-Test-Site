import $ from 'jquery';
import { Editor } from '@tinymce/tinymce-react';
import { setupSideNav } from './barba-transition';
import { closeMenusWindow, fixPrayerRoomURLs, parsePrayerRoomResponse, 
    clearPrayerRoomsList, removeAddedTag, escapeRegExp } from "./global-functions";

// declare global variables
var settingsPageWasInitialized;
//var db = firebase.firestore();
var errorMessage = document.getElementById("error");
var snackbarMessage = document.getElementById("snackbar");
var currentUser;
// You can just check if the variable has a truthy value or not. That means
// if( value ) { }
// will evaluate to true if value is not:
// null
// undefined
// NaN
// empty string ("")
// 0
// false

var recording_file_data, music_file_data, background_file_data;

var idListSingle = [];
var creatorNameListSingle = [];
var roomNameListSingle = [];
var usernameListSingle = [];
var profilePicListSingle = [];
var roomPasswordListSingle = [];
var textRefListSingle = [];
var backgroundRefListSingle = [];
var musicRefListSingle = [];
var recordingRefListSingle = [];
var prayerLengthListSingle = [];
var prayerDatetimeListSingle = [];
var afterPrayerTextRefListSingle = [];
var descriptionTextRefListSingle = [];
var prayerIsRecurringListSingle = [];
var timeToDeleteOrRenewPrayerListSingle = [];
var minutesBetweenPrayersListSingle = [];
var hoursBetweenPrayersListSingle = [];
var daysBetweenPrayersListSingle = [];
var numRepeatsListSingle = [];
var tagsListSingle = [];
var prayerRoomsReactsArraysSingle = [];


var PageWasModified = false;

// get all current data
var currentFirstName = document.getElementById("current_firstname");
var currentLastName = document.getElementById("current_lastname");
var currentPassword = document.getElementById("current_password");
var currentDOB = document.getElementById("current_dob");
var dobChangeElement = document.getElementById("dob_submit");
var currentGender = document.getElementById("current_gender");
var country = document.getElementById("countryId");
var state = document.getElementById("stateId");
var city = document.getElementById("cityId");
var currentLocation = document.getElementById("current_location");
var notification1Clock = document.getElementById("notification1_clock");
var notification2Clock = document.getElementById("notification2_clock");
var notification3Clock = document.getElementById("notification3_clock");

// var prayerTextArea = document.getElementById('prayer_text_area')

var prayerText_array = [];
var textRef_array = [];
var afterPrayerTextRef_array = [];
var afterPrayerText_array = [];
var prayer_time_array = [];
var prayer_date_array = [];
var prayerDatetime_array = [];
var makePrayerRecurring_array = [];
var time_between_recurring_prayers_minutes_array = [];
var time_between_recurring_prayers_hours_array = [];
var time_between_recurring_prayers_days_array = [];
var num_repeats_array = [];
var backgroundCheckbox_array = [];
var musicRef_array = [];// music_file_data);
var musicCheckbox_array = [];
var recordingRef_array = []; // recording_file_data);              // Appending parameter named file with properties of file_field to form_data
var backgroundRef_array = [];

var music_array = [];// music_file_data);
var recording_array = []; // recording_file_data);              // Appending parameter named file with properties of file_field to form_data
var background_array = [];

// var descriptionTextArea = document.getElementById('description_text_area')
// var afterPrayerTextArea = document.getElementById('after_prayer_text_area');
var prayerTextArea;
var descriptionTextArea;
var afterPrayerTextArea;

var roomName = document.getElementById('room_name')
var roomPassword = document.getElementById('room_password')
var prayerCreatorName = document.getElementById('leader_name')
var prayerDate = document.getElementById('prayer_date')
var prayerTime = document.getElementById('prayer_time')
var musicChoicesCheckboxes = document.getElementsByClassName('music_checkbox')
var backgroundChoicesCheckboxes = document.getElementsByClassName('background_checkbox')
var prayerLength = document.getElementById('prayer_length')
var prayerDate = document.getElementById('prayer_date')
var prayerTime = document.getElementById('prayer_time')
var music_file_src = document.getElementById('music_file_src');
var music_file_video_element = document.getElementById('music_file_video_element');
var recording_file_src = document.getElementById('recording_file_src');
var recording_file_video_element = document.getElementById('recording_file_video_element');

var pearlsTitleInput = document.getElementById("room_name");
var pearlsPasswordInput = document.getElementById("room_password");
var pearlsCreatorNameInput = document.getElementById("leader_name");

// display all the current data on the page
var first_name = localStorage.getItem("first_name");
var last_name = localStorage.getItem("last_name");
var email = localStorage.getItem("email");
console.log("email: " + email);
var gender = localStorage.getItem("gender");
console.log("gender: " + gender);
var dob = localStorage.getItem("dob");
var prayerDatetime;

var profilePic = document.getElementById("profile_pic");

var userLocation = localStorage.getItem("location"); // USING THE NAME 'location' FOR THE VARIABLE, THE BROWSER THROUGHT I WAS TRYING TO CHANGE THE WEBPAGE LIKE WITH 'window.location = ' LOL
var notification1Time = localStorage.getItem("prayer_notification1_time");
var notification2Time = localStorage.getItem("prayer_notification2_time");
var notification3Time = localStorage.getItem("prayer_notification3_time");



var password = "********";
var prayerTextArea_full;
var currentURL = window.location.href;
var roomIDFromURL = currentURL.substring(currentURL.indexOf('roomID/') + 7, currentURL.length);
console.log("roomIDFromURL", roomIDFromURL);

var slideIndex = 0;
var slide_number_element;

// DISABLING THIS FOR NOW BECAUSE THE DIRECTLY CHANGING THE NUMBER BY CLICKING ON IT IS NOT WORKING CORRECTLY AND I DON'T WANT TO TAKE THE TIME TO FIX IT RIGHT NOW
if (document.getElementById('slide_number')) {
    document.getElementById('slide_number').disabled = true;
}

// if (!document.URL.includes(".world/cast-pearls")) {
//     showSlides(slideIndex);

//     slide_number_element = document.getElementById("slide_number") // get the input element
//     slide_number_element.addEventListener('change', resizeInput); // bind the "resizeInput" callback on "input" event
//     resizeInput.call(slide_number_element); // immediately call the function

// }

function resizeInput() {
    this.style.width = this.value.length + "ch";
}

function checkInputMinMax() {
    var _this = $('#slide_number');
    var min = parseInt(_this.attr('min')) || 1; // if min attribute is not defined, 1 is default
    var max = parseInt(_this.attr('max')) || 30; // if max attribute is not defined, 30 is default
    var val = parseInt(_this.val()) || (min - 1); // if input char is not a number the value will be (min - 1) so first condition will be true
    console.log('val', val, 'min', min, 'max', max);
    if (val < min) {
        // _this.val(min);
        // _this.val(max);
        if (val == (min - 1)) {
            textRefListSingle[0].length < 30 ? _this.val(textRefListSingle[0].length) : _this.val(30) // go to either 30 if the user used all 30 slides or go to the latest slide
        } else {
            _this.val(max);
        }
    }
    else if (val > max) {
        // _this.val(max);
        _this.val(min);
    }
    else if (val > textRefListSingle[0].length + 1) {
        console.log('setting this to ' + min);
        _this.val(min);
    } 

}

// prevent user from typing in values larger or lower than max/min of inputs with type number
$(document).on('keyup', 'input[type=number]', function () {
    checkInputMinMax();
});

// function onSlideNumberChange(e) {
//     if (isMobile) {
//         e.style.width = ((e.value.length + 1) * 20) + 'px';
//     } else {
//         e.style.width = ((e.value.length + 1) * 50) + 'px';
//     }
// }

function plusSlides(n) {
    if (PageWasModified == true) {
        snackbarMessage.innerHTML = "Please save this prayer room first.";
        snackbarMessage.className = "show";
        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
        return;
    }



    // prayerText_array[slideIndex] = prayerTextArea.innerHTML || "";
    // afterPrayerText_array[slideIndex] = afterPrayerTextArea.innerHTML || "";
    // prayer_time_array[slideIndex] = document.getElementById("prayer_time").value || "";
    // prayer_date_array[slideIndex] = document.getElementById("prayer_date").value || "";
    // prayerDatetime = Date.parse(document.getElementById("prayer_date").value.replace(/-/g, "/") + " " + document.getElementById("prayer_time").value.replace(/-/g, "/")) / 1000
    // prayerDatetime_array[slideIndex] = prayerDatetime || "";
    // makePrayerRecurring_array[slideIndex] = document.getElementById("make_prayer_recurring_checkbox").checked || false;
    // time_between_recurring_prayers_minutes_array[slideIndex] = document.getElementById("time_between_recurring_prayers_minutes").value || "";
    // time_between_recurring_prayers_hours_array[slideIndex] = document.getElementById("time_between_recurring_prayers_hours").value || "";
    // time_between_recurring_prayers_days_array[slideIndex] = document.getElementById("time_between_recurring_prayers_days").value || "";
    // num_repeats_array[slideIndex] = document.getElementById("num_repeats").value || "";


    //backgroundCheckbox_array[slideIndex] = backgroundCheckbox_array.innerHTML || "";


    //musicRef_array[slideIndex] = musicRef_array.innerHTML || "";// music_file_data);
    //musicCheckbox_array[slideIndex] = musicCheckbox_array.innerHTML || "";
    //recordingRef_array[slideIndex] = recording_array.innerHTML || ""; // recording_file_data);              // Appending parameter named file with properties of file_field to form_data
    //backgroundRef_array[slideIndex] = background_array.innerHTML || "";

    // console.log("prayerText_array[current]", prayerText_array[slideIndex]);
    // console.log("afterPrayerText_array[current]", afterPrayerText_array[slideIndex]);
    // console.log("prayer_time_array[current]", prayer_time_array[slideIndex]);
    // console.log("prayer_date_array[current]", prayer_date_array[slideIndex]);
    // console.log("prayerDatetime_array[current]", prayerDatetime_array[slideIndex]);
    // console.log("makePrayerRecurring_array[current]", makePrayerRecurring_array[slideIndex]);
    // console.log("time_between_recurring_prayers_minutes_array[current]", time_between_recurring_prayers_minutes_array[slideIndex]);
    // console.log("time_between_recurring_prayers_hours_array[current]", time_between_recurring_prayers_hours_array[slideIndex]);
    // console.log("time_between_recurring_prayers_days_array[current]", time_between_recurring_prayers_days_array[slideIndex]);
    // console.log("num_repeats_array[current]", num_repeats_array[slideIndex]);
    // console.log("backgroundCheckbox_array[current]", backgroundCheckbox_array[slideIndex]);
    // console.log("musicRef_array[current]", musicRef_array[slideIndex]);
    // console.log("musicCheckbox_array[current]", musicCheckbox_array[slideIndex]);
    // console.log("recordingRef_array[current]", recordingRef_array[slideIndex]);
    // console.log("backgroundRef_array[current]", backgroundRef_array[slideIndex]);

    console.log('n', n, 'slideIndex', slideIndex);

    if (!textRefListSingle[0]) {
        console.log('No text ref');
        return;
    }

    // only go to the next newest prayer
    // if (((slideIndex < textRefListSingle[0].split(' ').length) && (n > 0)) || ((slideIndex != 0) && (n < 0))) {
    // if (((slideIndex <= textRefListSingle[0].length) && (textRefListSingle[0][textRefListSingle[0].length-1]))) {// && (n > 0)) || ((slideIndex != 0) && (n < 0))) { // only allow the user to continue past their last saved prayer
        // console.log('changing slides');
    document.getElementById('slide_number').value = Number(document.getElementById('slide_number').value) + n;
    checkInputMinMax();
    resizeInput.call(slide_number_element);

    console.log(textRefListSingle[0]);

    // if the user was at the newest slide possible but didn't actually end up saving a prayer, remove the empty values from the arrays before slideIndex is incremented
    if (((slideIndex != 0) && (n < 0) && (slideIndex == textRefListSingle[0].length - 1) && (!textRefListSingle[0][slideIndex]) 
        || (n > 0 && !textRefListSingle[0][slideIndex]))) {
        textRefListSingle[0].splice(slideIndex, 1);
        afterPrayerTextRefListSingle[0].splice(slideIndex, 1);
        prayerDatetimeListSingle[0].splice(slideIndex, 1);
        prayerIsRecurringListSingle[0].splice(slideIndex, 1);
        timeToDeleteOrRenewPrayerListSingle[0].splice(slideIndex, 1);
        minutesBetweenPrayersListSingle[0].splice(slideIndex, 1);
        hoursBetweenPrayersListSingle[0].splice(slideIndex, 1);
        daysBetweenPrayersListSingle[0].splice(slideIndex, 1);
        numRepeatsListSingle[0].splice(slideIndex, 1);
        musicRefListSingle[0].splice(slideIndex, 1);
        recordingRefListSingle[0].splice(slideIndex, 1);
        backgroundRefListSingle[0].splice(slideIndex, 1);
    }

    console.log(textRefListSingle[0]);
    console.log("document.getElementById('slide_number').value:", document.getElementById('slide_number').value);

    if (n > 0 && !textRefListSingle[0][slideIndex]) {
        slideIndex = -1;
        document.getElementById('slide_number').value = 1;
    }
    
    showSlides(slideIndex += n);

    // if (slideIndex == textRefListSingle[0].split(' ').length - 1) {
    if (slideIndex == textRefListSingle[0].length) {
        textRefListSingle[0][slideIndex] = "";
        afterPrayerTextRefListSingle[0][slideIndex] = "";
        prayerDatetimeListSingle[0][slideIndex] = "";
        prayerIsRecurringListSingle[0][slideIndex] = "";
        timeToDeleteOrRenewPrayerListSingle[0][slideIndex] = "";
        minutesBetweenPrayersListSingle[0][slideIndex] = "";
        hoursBetweenPrayersListSingle[0][slideIndex] = "";
        daysBetweenPrayersListSingle[0][slideIndex] = "";
        numRepeatsListSingle[0][slideIndex] = "";
        musicRefListSingle[0][slideIndex] = "";
        recordingRefListSingle[0][slideIndex] = "";
        backgroundRefListSingle[0][slideIndex] = "";
    }


    getPrayerRoomSettings(0, slideIndex);

    // }

    // if ((slideIndex < prayerText_array.length) && (slideIndex < prayer_date_array.length)) {



    // getPrayerRoomSettings(0, slideIndex);

    // prayerText_array[slideIndex] = prayerTextArea.innerHTML || "";
    // afterPrayerText_array[slideIndex] = afterPrayerTextArea.innerHTML || "";
    // prayer_time_array[slideIndex] = document.getElementById("prayer_time").value || "";
    // prayer_date_array[slideIndex] = document.getElementById("prayer_date").value || "";
    // prayerDatetime = Date.parse(document.getElementById("prayer_date").value.replace(/-/g, "/") + " " + document.getElementById("prayer_time").value.replace(/-/g, "/")) / 1000
    // prayerDatetime_array[slideIndex] = prayerDatetime || "";
    // makePrayerRecurring_array[slideIndex] = document.getElementById("make_prayer_recurring_checkbox").checked || false;
    // time_between_recurring_prayers_minutes_array[slideIndex] = document.getElementById("time_between_recurring_prayers_minutes").value || "";
    // time_between_recurring_prayers_hours_array[slideIndex] = document.getElementById("time_between_recurring_prayers_hours").value || "";
    // time_between_recurring_prayers_days_array[slideIndex] = document.getElementById("time_between_recurring_prayers_days").value || "";
    // num_repeats_array[slideIndex] = document.getElementById("num_repeats").value || "";
    //backgroundCheckbox_array[slideIndex] = backgroundCheckbox_array.innerHTML || "";
    //musicRef_array[slideIndex] = musicRef_array.innerHTML || "";// music_file_data);
    //musicCheckbox_array[slideIndex] = musicCheckbox_array.innerHTML || "";
    //recordingRef_array[slideIndex] = recordingRef_array.innerHTML || ""; // recording_file_data);              // Appending parameter named file with properties of file_field to form_data
    //backgroundRef_array[slideIndex] = backgroundRef_array.innerHTML || "";

    // }



    // prayerTextArea.innerHTML = prayerText_array[slideIndex] || "";
    // afterPrayerText_array.innerHTML = afterPrayerTextArea[slideIndex] || "";
    // document.getElementById("prayer_time").value = prayer_time_array[slideIndex] || "";
    // document.getElementById("prayer_date").value = prayer_date_array[slideIndex] || "";
    // //prayerDatetime_array.innerHTML                                          = prayerDatetime_array[slideIndex]                           || "";
    // document.getElementById("make_prayer_recurring_checkbox").checked = makePrayerRecurring_array[slideIndex] || "";
    // document.getElementById("time_between_recurring_prayers_minutes").value = time_between_recurring_prayers_minutes_array[slideIndex] || "";
    // document.getElementById("time_between_recurring_prayers_hours").value = time_between_recurring_prayers_hours_array[slideIndex] || "";
    // document.getElementById("time_between_recurring_prayers_days").value = time_between_recurring_prayers_days_array[slideIndex] || "";
    // num_repeats_array.innerHTML = num_repeats_array[slideIndex] || "";
    //backgroundCheckbox_array.innerHTML = backgroundCheckbox_array[slideIndex] || "";


    //musicRef_array.innerHTML = musicRef_array[slideIndex] || "";// music_file_data);
    //musicCheckbox_array.innerHTML = musicCheckbox_array[slideIndex] || "";
    //recordingRef_array.innerHTML = recordingRef_array[slideIndex] || ""; // recording_file_data);              // Appending parameter named file with properties of file_field to form_data
    //backgroundRef_array.innerHTML = backgroundRef_array[slideIndex] || "";

    //console.log("prayerTextArea", prayerTextArea.innerHTML);

}

function currentSlide(n) {
    showSlides(slideIndex = n);
    // prayerTextArea.innerHTML                                 = prayerText_array[slideIndex]                                  || "";
    // afterPrayerTextArea.innerHTML                            = afterPrayerTextRef_array[slideIndex]                       || "";
    // document.getElementById("prayer_time").value             = prayer_time_array[slideIndex]                              || "";
    // document.getElementById("prayer_date").value             = prayer_date_array[slideIndex]                              || "";
    // prayerDatetime_array.innerHTML                          = prayerDatetime_array[slideIndex]                           || "";
    // makePrayerRecurring_array.innerHTML                     = makePrayerRecurring_array[slideIndex]                      || "";
    // time_between_recurring_prayers_minutes_array.innerHTML  = time_between_recurring_prayers_minutes_array[slideIndex]   || "";
    // time_between_recurring_prayers_hours_array.innerHTML    = time_between_recurring_prayers_hours_array[slideIndex]     || "";
    // time_between_recurring_prayers_days_array.innerHTML     = time_between_recurring_prayers_days_array[slideIndex]      || "";
    // num_repeats_array.innerHTML                             = num_repeats_array[slideIndex]                              || "";
    // backgroundCheckbox_array.innerHTML                      = backgroundCheckbox_array[slideIndex]                       || "";
    // musicRef_array.innerHTML                                = musicRef_array[slideIndex]                                 || "";// music_file_data);
    // musicCheckbox_array.innerHTML                           = musicCheckbox_array[slideIndex]                            || "";
    // recordingRef_array.innerHTML                            = recordingRef_array[slideIndex]                             || ""; // recording_file_data);              // Appending parameter named file with properties of file_field to form_data
    // backgroundRef_array.innerHTML                           = backgroundRef_array[slideIndex]                            || ""; 
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    console.log('slideIndex1:', slideIndex)

    if (n > slides.length - 1) { slideIndex = 0 }
    // if (n < 0) { slideIndex = slides.length - 1 }
    if (n < 0) { slideIndex = document.getElementById('slide_number').value - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    console.log('slideIndex2:', slideIndex)

}

// function createPrayerRoom() {
//   
//     $.ajax({
//         type: "POST",
//         url: "create_prayer_room_functions.php",
//         data: {
//             action: 'createPrayerRoom',
//             prayerText: prayerTextArea_full,
//             music_ref: music_ref,
//             background_ref: background_ref,
//             recording_ref, recording_ref,
//             email: email
//         },
//         success: function (response) {
//             console.log("response:", response);// response.responseText);
//             if (response.includes("Prayer saved!")) {
//                 snackbarMessage.innerHTML = "Prayer saved!";
//                 snackbarMessage.className = "show";
//                 setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
//             }
//         },
//         error: function (error) {
//             console.log("There was an error saving the prayer text: ", error);
//             snackbarMessage.innerHTML = "There was an error saving the prayer: ", error;
//             snackbarMessage.className = "show";
//             setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
//         }
//     });
// }
function createPrayerRoom() {
    var background_ref = ''
    var music_ref = ''
    var recording_ref = ''
    $.ajax({
        type: "POST",
        url: "create_prayer_room_functions.php",
        data: {
            action: 'createPrayerRoom',
            prayerText: prayerTextArea.value,
            music_ref: music_ref,
            background_ref: background_ref,
            recording_ref, recording_ref,
            email: email
        },
        success: function (response) {
            console.log("response:", response);// response.responseText);
            if (response.includes("Prayer saved!")) {
                snackbarMessage.innerHTML = "Prayer saved!";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            }
        },
        error: function (error) {
            console.log("There was an error saving the prayer text: ", error);
            snackbarMessage.innerHTML = "There was an error saving the prayer: " + error;
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
        }
    });
}

// function submitPrayerText() {

//  $.ajax({
//         type: "POST",
//         url: "create_prayer_room_functions.php",
//         data: {
//             action: 'savePrayerText',
//             prayerText: prayerTextArea.full,
//             email: email
//         },
//         success: function (response) {
//             console.log("response:", response);// response.responseText);
//             if (response.includes("Prayer saved!")) {
//                 snackbarMessage.innerHTML = "Prayer saved!";
//                 snackbarMessage.className = "show";
//                 setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
//             }
//         },
//         error: function (error) {
//             console.log("There was an error saving the prayer text: ", error);
//             snackbarMessage.innerHTML = "There was an error saving the prayer: ", error;
//             snackbarMessage.className = "show";
//             setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
//         }
//     });
// }


// set the default times of the notifications on the notification clocks
function setDefaultClockTimes() {
    // fill in the time of the prayers depending on timezone for each notification switch
    var notification1Text = document.getElementById("notification1");
    var notification2Text = document.getElementById("notification2");
    var notification3Text = document.getElementById("notification3");
    var date1 = new Date();
    var date2 = new Date();
    var date3 = new Date();

    date1.setUTCHours(11);
    date1.setUTCMinutes(0);
    // notification1Text.innerHTML = date.getHours();
    notification1Text.innerHTML = formatAMPM(date1) + " Prayer";
    date2.setUTCHours(19);
    date2.setUTCMinutes(0);
    notification2Text.innerHTML = formatAMPM(date2) + " Prayer";
    date3.setUTCHours(1);
    date3.setUTCMinutes(0);
    notification3Text.innerHTML = formatAMPM(date3) + " Prayer";

    // set the times of the clocks
    var notification1Clock = document.getElementById("notification1_clock");
    var notification2Clock = document.getElementById("notification2_clock");
    var notification3Clock = document.getElementById("notification3_clock");
    var date1Hours = date1.getHours();
    var date2Hours = date2.getHours();
    var date3Hours = date3.getHours();

    // let the default notification times be 5 minutes before the prayers
    // if (date1TimeOnClockHours === 0) {
    //     date1TimeOnClockHours++;
    // }
    if (date1Hours < 10) {
        notification1Clock.value = "0" + (date1Hours - 1) + ":55";
    } else {
        notification1Clock.value = (date1Hours - 1) + ":55";
    }
    if (date2Hours < 10) {
        notification2Clock.value = "0" + (date2Hours - 1) + ":55";
    } else {
        notification2Clock.value = (date2Hours - 1) + ":55";
    }
    if (date3Hours < 10) {
        notification3Clock.value = "0" + (date3Hours - 1) + ":55";
    } else {
        notification3Clock.value = (date3Hours - 1) + ":55";
    }
}


// save the time the user wants the notification at for the given prayer
function onTimeSettingChange(timeChooserElement, prayerNum) {
    var newTime = timeChooserElement.value;
    // save the new time set by the user in local storage
    localStorage.setItem("prayer_notification" + prayerNum + "_time", newTime);
    console.log("prayer_notification" + prayerNum + "_time: " + newTime + " was set ")
}

// save whether or not the user wants a notification for the given prayer
function onNotificationCheckboxChange(prayerNum) {
    var notification1_checkbox = document.getElementById("notification1_checkbox");
    var notification2_checkbox = document.getElementById("notification2_checkbox");
    var notification3_checkbox = document.getElementById("notification3_checkbox");

    if (prayerNum === 1) {
        if (notification1_checkbox.checked) {
            localStorage.setItem("want_notification_for_prayer1", true);
            // localStorage.setItem("prayer_notification1_time", ) // shouldn't need this?
        } else {
            localStorage.removeItem("want_notification_for_prayer1");
        }
    } else if (prayerNum === 2) {
        if (notification2_checkbox.checked) {
            localStorage.setItem("want_notification_for_prayer2", true);
            // localStorage.setItem("prayer_notification2_time", ) // shouldn't need this?
        } else {
            localStorage.removeItem("want_notification_for_prayer2");
        }
    } else if (prayerNum === 3) {
        if (notification3_checkbox.checked) {
            localStorage.setItem("want_notification_for_prayer3", true);
            // localStorage.setItem("prayer_notification3_time", ) // shouldn't need this?
            console.log("notification 3 turned on");
        } else {
            localStorage.removeItem("want_notification_for_prayer3");
            console.log("notification 3 turned off");
        }
    }
}


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

var stopMusic;
// function to play the song the user just chose for them to listen to before they decide to go with it
function onMusicChoiceChange(element) {

    // stop any music pausing timeout that is active because if simply switching between songs then the song will get cutoff early from a previous timeout
    if (stopMusic) {
        clearTimeout(stopMusic);
    }

    // pause any other music playing and uncheck any other boxes
    var audioElements = document.getElementsByClassName('prayer_music');
    var elements = document.getElementsByClassName('music_checkbox');
    for (var i = 0; i < audioElements.length; i++) {
        // audioElements[i].pause();
    }
    for (var i = 0; i < elements.length; i++) {
        if (elements[i] != element) {
            elements[i].checked = false;
        }
    }

    var numMusicChoice = $(".music_checkbox").index(element);
    var musicAudioElement = document.getElementsByClassName('prayer_music')[numMusicChoice];
    if (element.checked) { // the user just checked the box
        // musicAudioElement.volume = 0.05;
        // musicAudioElement.play();
        music_file_src.src = element.value;
        music_file_video_element.load();
        music_file_video_element.play();
        // document.getElementById("music_file_label").innerHTML = element.value;
        // stop music after a few seconds
        // stopMusic = setTimeout(function () {
        //     musicAudioElement.pause();
        //     console.log('pausing');
        // }, 15000);

        document.getElementById('music_file').value = '';
        document.getElementById('music_file').type = 'text';
        document.getElementById('music_file').type = 'file';
    } else { // the user unchecked the box
        // musicAudioElement.pause();
        music_file_video_element.pause();
        // document.getElementById("music_file_label").innerHTML = "No music chosen.";
    }

    if ($("#music_file").prop("files") && $("#music_file").prop("files")[0]
        && $("#music_file").prop("files")[0].name) { // user uploaded their own file
        console.log("element:", $("#music_file").prop("files")[0]);
        document.getElementById("music_file_label").innerHTML = $("#music_file").prop("files")[0].name;
        music_file_src.src = URL.createObjectURL(element.files[0]);
        music_file_video_element.load();
        music_file_video_element.play();
    }

}

// function to display the chosen background before the user decides to go with it
function onBackgroundChoiceChange(element) {

    // uncheck any other boxes
    var elements = document.getElementsByClassName('background_checkbox');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i] != element) {
            elements[i].checked = false;
        }
    }

    if (element.checked) { // the user just checked the box
        document.getElementById('background_preview').src = element.value;
        // document.getElementById("background_url_label").innerHTML = element.value;
        // resetting the background file element
        document.getElementById('background_file').value = '';
        document.getElementById('background_file').type = 'text';
        document.getElementById('background_file').type = 'file';
    } else { // the user unchecked the box
        document.getElementById('background_preview').src = '';
        // document.getElementById("background_url_label").innerHTML = "No background chosen.";
    }

    if ($("#background_file").prop("files") && $("#background_file").prop("files")[0]
        && $("#background_file").prop("files")[0].name) { // user uploaded their own file
        document.getElementById("background_file_label").innerHTML = $("#background_file").prop("files")[0].name;;
        document.getElementById('background_preview').src = URL.createObjectURL(element.files[0]);
    }

}

function onMusicFileChange(inputElement) {
    music_file_src.src = URL.createObjectURL(inputElement.files[0]);
    music_file_video_element.load();
    music_file_video_element.play();

    var elements = document.getElementsByClassName('music_checkbox');
    for (var i = 0; i < elements.length; i++) {
        elements[i].checked = false;
    }

    document.getElementById("music_file_label").innerHTML = $("#music_file").prop("files")[0].name;
}

function onRecordingFileChange(inputElement) {
    recording_file_src.src = URL.createObjectURL(inputElement.files[0]);
    recording_file_video_element.load();
    recording_file_video_element.play();

    document.getElementById("recording_file_label").innerHTML = $("#recording_file").prop("files")[0].name;
}

function clearMusic() {
    var checkboxElements = document.getElementsByClassName('music_checkbox');
    for (var i = 0; i < checkboxElements.length; i++) {
        checkboxElements[i].checked = false;
    }
    document.getElementById('music_file').value = '';
    document.getElementById('music_file').type = 'text';
    document.getElementById('music_file').type = 'file';

    music_file_src.src = "https://worldwideprayer.world/PrayerMusic/soundless_recording_short.m4a";
    music_file_video_element.load();
    music_file_video_element.play();

    document.getElementById("music_file_label").innerHTML = "";

    return false;
}

function clearBackground() {
    var checkboxElements = document.getElementsByClassName('background_checkbox');
    for (var i = 0; i < checkboxElements.length; i++) {
        checkboxElements[i].checked = false;
    }
    document.getElementById('background_file').value = '';
    document.getElementById('background_file').type = 'text';
    document.getElementById('background_file').type = 'file';

    document.getElementById('background_preview').src = '';

    return false;
}

function clearRecording() {
    document.getElementById('recording_file').value = '';
    document.getElementById('recording_file').type = 'text';
    document.getElementById('recording_file').type = 'file';

    recording_file_src.src = "https://worldwideprayer.world/PrayerMusic/soundless_recording_short.m4a";
    recording_file_video_element.load();
    recording_file_video_element.play();

    return false;
}

function deletePrayerRoomFunction(e) {
    console.log("deleting prayer room");
}

function retrieveTextFromFile(textRef, textPurpose, textAreaElement) {

    console.log('textRef1:', textRef);

    // if (textRef.includes('PrayerRoomPrayers')) {
    //     textRef = fixPrayerRoomURLs(textRef)
    // }
    // console.log('textRef2:', textRef);

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onload = function (event) {

        var text = xhr.responseText;

        // console.log('xhr', xhr);
        // console.log('event', event);
        switch (xhr.status) {
            case 404:
                //   alert('File not found'); 
                text = 'Sorry, an error occurred in retrieving your ' + textPurpose + '.';
                snackbarMessage.innerHTML = text;
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                break;
            case 500:
                //   alert('Server error'); 
                text = 'Sorry, an error occurred in retrieving your ' + textPurpose + '.';
                snackbarMessage.innerHTML = text;
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                break;
            case 0:
                //   alert('Request aborted');
                text = 'Sorry, an error occurred in retrieving your ' + textPurpose + '.';
                snackbarMessage.innerHTML = text;
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                break;
            default:
                break;
        }

        // console.log('text', text);

        textAreaElement.innerHTML = text;

        text = textAreaElement.textContent;

        textAreaElement.innerHTML = text;

    };
    xhr.open('GET', textRef);
    xhr.send();
}

export function getPearlsSettings(numRow) {
    var pearlsIDFromURL;
    if (!global.pearlsIDList[numRow]) {
        document.getElementById('roomID_title').innerHTML = 'These pearls do not exist! No pearls selected.';
        window.history.pushState("", document.title, "/cast-pearls/pearlsID/new-pearls");
        pearlsIDFromURL = 'noID';
    } else {
        document.getElementById('roomID_title').innerHTML = 'Pearls ID: ' + global.pearlsIDList[numRow];
        window.history.pushState("", document.title, "/cast-pearls/pearlsID/" + global.pearlsIDList[numRow]);
        pearlsIDFromURL = global.pearlsIDList[numRow];
    }



    // numRow = $('.prayer_room_row').index(this);

    // console.log("loading prayer room settings | numRow: " + numRow);

    document.getElementById("settings_container").scrollIntoView();
    closeMenusWindow();
    // console.log("textRefList[numRow]: " + textRefList[numRow]); // Example value: \/home1\/crdhl1x4\/public_html\/PrayerRoomPrayers\/TextFiles\/

    // get pearls text
    if (global.pearlsTextRefList[numRow]) {
        let textRef = global.pearlsTextRefList[numRow];
        retrieveTextFromFile(textRef, 'pearls', prayerTextArea);
    } else {
        prayerTextArea.innerHTML = '';
    }

    if (global.pearlsTitleList[numRow]) {
        pearlsTitleInput.value = global.pearlsTitleList[numRow];
    } else {
        pearlsTitleInput.value = '';
    }
    if (global.pearlsRoomPasswordList[numRow]) {
        pearlsPasswordInput.value = global.pearlsRoomPasswordList[numRow];
    } else {
        pearlsPasswordInput.value = '';
    }
    if (global.pearlsCreatorNameList[numRow]) {
        pearlsCreatorNameInput.value = global.pearlsCreatorNameList[numRow];
    } else {
        pearlsCreatorNameInput.value = '';
    }

    var musicRef = global.pearlsMusicRefList[numRow];
    if (musicRef) {
        if (musicRef.includes('/Pearls\\/MusicFiles\\/')) { // user uploaded their own file
            document.getElementById('music_file_label').innerHTML = musicRef;
            music_file_src.src = musicRef;
            music_file_video_element.load();
            music_file_video_element.play();
        } else {
            musicRef = musicRef.replace(new RegExp(escapeRegExp("\\"), 'g'), "");
            for (var i = 0; i < musicChoicesCheckboxes.length; i++) {
                // console.log('musicChoicesCheckboxes[i].value: ' + musicChoicesCheckboxes[i].value);
                // console.log('musicRef: ' + musicRef);
                if (musicChoicesCheckboxes[i].value == musicRef) {
                    musicChoicesCheckboxes[i].checked = 1;
                    music_file_src.src = 'https://worldwideprayer.world/' + musicRef;
                    music_file_video_element.load();
                    // music_file_video_element.play();
                } else {
                    musicChoicesCheckboxes[i].checked = 0;
                }
            }
        }
    } else {
        music_file_src.src = '';
        music_file_video_element.pause();
        for (var i = 0; i < musicChoicesCheckboxes.length; i++) {
            musicChoicesCheckboxes[i].checked = 0;
        }
    }
    var backgroundRef = global.pearlsBackgroundRefList[numRow];
    if (backgroundRef) {
        if (backgroundRef.includes('/Pearls\\/BackgroundFiles\\/')) { // user uploaded their own file
            document.getElementById('background_preview').src = backgroundRef;
            document.getElementById('background_url_label').innerHTML = backgroundRef;
        } else {
            backgroundRef = backgroundRef.replace(new RegExp(escapeRegExp("\\"), 'g'), "");
            for (var i = 0; i < backgroundChoicesCheckboxes.length; i++) {

                // console.log(backgroundChoicesCheckboxes[i].value, String(backgroundRef), String(backgroundChoicesCheckboxes[i].value) == String(backgroundRef))

                if (backgroundChoicesCheckboxes[i].value == backgroundRef) {
                    backgroundChoicesCheckboxes[i].checked = 1;
                    document.getElementById('background_preview').src = backgroundRef;
                } else {
                    backgroundChoicesCheckboxes[i].checked = 0;
                }
            }
        }
    } else {
        for (var i = 0; i < backgroundChoicesCheckboxes.length; i++) {
            backgroundChoicesCheckboxes[i].checked = 0;
        }
    }

    // convert pearls datetime to date and time values
    // if (pearlsDateandtimeVisibleList[numRow]) {
    //     var dateandtimeVisible = Number(pearlsDateandtimeVisibleList[numRow]);
    //     // Create a new JavaScript Date object based on the timestamp
    //     // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    //     var date = new Date(dateandtimeVisible * 1000);

    //     var year = date.getFullYear();
    //     var month = date.getMonth() + 1;
    //     var day = date.getDate();
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var seconds = date.getSeconds();
    //     // var AMPM = 'AM';

    //     if (month < 10) {
    //         month = '0' + month;
    //     }
    //     if (day < 10) {
    //         day = '0' + day;
    //     }
    //     // if (hours > 12) {
    //     //     hours = hours - 12;
    //     //     AMPM = 'PM';
    //     // }
    //     if (hours < 10) {
    //         hours = '0' + hours;
    //     }
    //     if (minutes < 10) {
    //         minutes = '0' + minutes;
    //     }

    //     // prayerDate.value = month + ':' + day + ':' + year;
    //     // console.log(year + "-" + month + "-" + day);
    //     prayerDate.value = year + '-' + month + '-' + day;
    //     // prayerTime.value = hours + ':' + minutes + ' ' + AMPM;
    //     prayerTime.value = hours + ':' + minutes;

    // } else {
    //     prayerDate.value = 'yyyy-mm-dd';
    //     prayerTime.value = '--:--';
    // }


    // show tags
    let containerElement = document.querySelector(".grid-item #addedTagsContainer");
    var addedTagButtonsTemp = document.querySelectorAll('#addedTagsContainer .added_tag_button');
    var find = '||||| ';
    var replace = ',';
    var tagsListStringTemp = global.pearlsTagsList.toString().replace(new RegExp(escapeRegExp(find), 'g'), replace);
    var tagsListArray = tagsListStringTemp.split(',');
    loop1:
    for (var i = 0; i < tagsListArray.length; i++) {
        loop2:
        for (var j = 0; j < addedTagButtonsTemp.length; j++) {
            if (addedTagButtonsTemp[j].innerHTML.substring(0, addedTagButtonsTemp[j].innerHTML.lastIndexOf(' X')) == tagsListArray[i]) {
                continue loop1; // don't add tag if it was already added
            }
        }
        var addedTagButton = document.createElement('button');
        addedTagButton.innerHTML = tagsListArray[i] + ' X';
        addedTagButton.className = 'added_tag_button';

        var addedTagButtonContainer = document.createElement('div');
        addedTagButtonContainer.className = 'added_tag_button_container';
        addedTagButtonContainer.appendChild(addedTagButton);
        // addedTagButtonContainer.appendChild(xElement);
        addedTagButtonContainer.onclick = function () { removeAddedTag(this) }

        containerElement.insertBefore(addedTagButtonContainer, containerElement.firstChild)

    }

}

function editedpage() {

    PageWasModified = true;

}


export function getPrayerRoomSettings(numRow, num_prayer, reset_slides = false) {

    if (reset_slides == true) {
        slideIndex = 0;
        document.getElementById('slide_number').value = 1;
    }

    console.log('numRow:', numRow);
    console.log('idListSingle:', idListSingle);
    if (!idListSingle) {
        if (currentURL.includes('create-prayer-room')) {
            document.getElementById('roomID_title').innerHTML = 'This room does not exist! No room selected.';
            window.history.pushState("", document.title, "/create-prayer-room/roomID/new-room");
        }
        // else {
        //     document.getElementById('roomID_title').innerHTML = 'These pearls do not exist! No pearls selected.';
        //     window.history.pushState("", document.title, "/cast-pearls/pearlsID/new-pearls");
        // }
    } else if (global.username != usernameListSingle) { // only let the room settings be accessed by the person who created it
        if (currentURL.includes('create-prayer-room')) {
            document.getElementById('roomID_title').innerHTML = 'This room does not exist! No room selected.';
            window.history.pushState("", document.title, "/create-prayer-room/roomID/new-room");
        }
    } else {
        if (currentURL.includes('create-prayer-room')) {
            document.getElementById('roomID_title').innerHTML = 'Room ID: ' + idListSingle;
            window.history.pushState("", document.title, "/create-prayer-room/roomID/" + idListSingle);
        }
        // else {
        //     document.getElementById('roomID_title').innerHTML = 'Pearls ID: ' + idListSingle[numRow];
        //     window.history.pushState("", document.title, "/cast-pearls/pearlsID/" + idListSingle[numRow]);
        // }

        roomIDFromURL = idListSingle[0];
    }

    // numRow = $('.prayer_room_row').index(this);

    // console.log("loading prayer room settings | numRow: " + numRow);

    document.getElementById("settings_container").scrollIntoView();

    console.log('num_prayer:', num_prayer);
    console.log("textRefListSingle[numRow]: ", textRefListSingle[numRow]); // Example value: \/home1\/crdhl1x4\/public_html\/PrayerRoomPrayers\/TextFiles\/

    // get prayer text
    if (textRefListSingle[numRow] && textRefListSingle[numRow] != 'undefined') {
        var textRef = textRefListSingle[numRow];

        let textRef_array = textRef//.split(' ');
        // console.log('textRef_array[num_prayer]', textRef_array[num_prayer]);

        if (textRef_array[num_prayer]) {
            retrieveTextFromFile(textRef_array[num_prayer], 'prayer', prayerTextArea);
        } else {
            prayerTextArea.innerHTML = '';
        }
    } else {
        prayerTextArea.innerHTML = '';
    }

    // get after prayer text
    if (afterPrayerTextRefListSingle[numRow] && afterPrayerTextRefListSingle[numRow] != 'undefined') {
        var afterPrayerTextRef = afterPrayerTextRefListSingle[numRow];

        let afterPrayerTextRef_array = afterPrayerTextRef//.split(' ');

        if (afterPrayerTextRef_array[num_prayer] && afterPrayerTextRef_array[num_prayer] != 'no_after_prayer_text') {
            retrieveTextFromFile(afterPrayerTextRef_array[num_prayer], 'after prayer text', afterPrayerTextArea);
        } else {
            afterPrayerTextArea.innerHTML = '';
        }
    } else {
        afterPrayerTextArea.innerHTML = '';
    }

    // get description text
    if (descriptionTextRefListSingle[numRow] && descriptionTextRefListSingle[numRow] != 'undefined') {
        let descriptionTextRef = descriptionTextRefListSingle[numRow];
        retrieveTextFromFile(descriptionTextRef, 'room description', descriptionTextArea);
    } else {
        descriptionTextArea.innerHTML = '';
    }

    if (roomNameListSingle) {
        roomName.value = roomNameListSingle;
    } else {
        roomName.value = '';
    }
    if (roomPasswordListSingle) {
        roomPassword.value = roomPasswordListSingle;
    } else {
        roomPassword.value = '';
    }
    if (creatorNameListSingle) {
        prayerCreatorName.value = creatorNameListSingle;
    } else {
        prayerCreatorName.value = '';
    }

    if (musicRefListSingle[numRow] && musicRefListSingle[numRow] != 'undefined') {
        var musicRef = musicRefListSingle[numRow];

        musicRef_array = musicRef[num_prayer]//.split(' ');
        console.log(musicRef_array);
        if (musicRef_array == 'no_music') {
            clearMusic();
        } else if (musicRef_array) {
            musicRef_array = musicRef_array.replace(new RegExp(escapeRegExp("\\"), 'g'), "");

            if (musicRef_array.includes('PrayerRoomPrayers')) { // user uploaded their own file
                document.getElementById('music_file_label').innerHTML = musicRef_array;
                music_file_src.src = musicRef_array;
                music_file_video_element.load();
                music_file_video_element.play();
            } else {
                for (var i = 0; i < musicChoicesCheckboxes.length; i++) {
                    // console.log('musicChoicesCheckboxes[i].value: ' + musicChoicesCheckboxes[i].value);
                    // console.log('musicRef: ' + musicRef);
                    if (musicChoicesCheckboxes[i].value == musicRef_array) {
                        musicChoicesCheckboxes[i].checked = 1;
                        music_file_src.src = 'https://worldwideprayer.world/' + musicRef_array;
                        music_file_video_element.load();
                        // music_file_video_element.play();
                    } else {
                        musicChoicesCheckboxes[i].checked = 0;
                    }
                }
            }
        } else {
            clearMusic();
        }
    } else {
        music_file_src.src = '';
        music_file_video_element.pause();
        for (var i = 0; i < musicChoicesCheckboxes.length; i++) {
            musicChoicesCheckboxes[i].checked = 0;
        }
    }


    if (backgroundRefListSingle[numRow] && backgroundRefListSingle[numRow] != 'undefined') {
        var backgroundRef = backgroundRefListSingle[numRow];

        backgroundRef_array = backgroundRef[num_prayer]//.split(' ');
        if (backgroundRef_array == 'no_background') {
            clearBackground();
        } else if (backgroundRef_array) {
            backgroundRef_array = backgroundRef_array.replace(new RegExp(escapeRegExp("\\"), 'g'), "");

            if (backgroundRef_array.includes('PrayerRoomPrayers')) { // user uploaded their own file
                document.getElementById('background_preview').src = backgroundRef_array;
                document.getElementById('background_url_label').innerHTML = backgroundRef_array;
            } else {
                document.getElementById('background_preview').src = backgroundRef_array;
                for (var i = 0; i < backgroundChoicesCheckboxes.length; i++) {
                    // console.log('backgroundChoicesCheckboxes[i].value: ' + backgroundChoicesCheckboxes[i].value);
                    // console.log('backgroundRef: ' + backgroundRef);
                    if (backgroundChoicesCheckboxes[i].value == backgroundRef_array) {
                        backgroundChoicesCheckboxes[i].checked = 1;
                        // music_file_video_element.play();
                    } else {
                        backgroundChoicesCheckboxes[i].checked = 0;
                    }
                }
            }
        } else {
            clearBackground();
        }
    } else {
        for (var i = 0; i < backgroundChoicesCheckboxes.length; i++) {
            backgroundChoicesCheckboxes[i].checked = 0;
        }
    }

    if (recordingRefListSingle[numRow] && recordingRefListSingle[numRow] != 'undefined') {
        let recordingRef = recordingRefListSingle[numRow];

        recordingRef_array = recordingRef[num_prayer]//.split(' ');
        console.log('recordingRef_array: ' + recordingRef_array);
        if (recordingRef_array == 'no_recording') {
            clearRecording();
        } else if (recordingRef_array) {
            recordingRef_array = recordingRef_array.replace(new RegExp(escapeRegExp("\\"), 'g'), "");

            if (recordingRef_array.includes('PrayerRoomPrayers')) { // user uploaded their own file
                recording_file_src.src = recordingRef_array;
                console.log("recording_file_src", recording_file_src);
                recording_file_video_element.load(); //call this to just preload the audio without playing
            }
        } else {
            clearRecording();
        }
    } else {
        recording_file_src.src = '';
    }

    console.log('prayerDatetimeListSingle', prayerDatetimeListSingle);
    // convert prayer datetime to date and time values
    if (prayerDatetimeListSingle[numRow] && prayerDatetimeListSingle[numRow] != 'undefined') {
        var prayerDateTime = prayerDatetimeListSingle[numRow];
        var minutesBetweenPrayers = minutesBetweenPrayersListSingle[numRow];
        var hoursBetweenPrayers = hoursBetweenPrayersListSingle[numRow];
        var daysBetweenPrayers = daysBetweenPrayersListSingle[numRow];
        var numRepeats = numRepeatsListSingle[numRow];

        var prayerDateTime_array = prayerDateTime;
        console.log(prayerDateTime, ' | ', prayerDatetime_array);
        if (prayerDateTime_array[num_prayer]) {
            time_between_recurring_prayers_minutes_array = minutesBetweenPrayers.map(Number);
            time_between_recurring_prayers_hours_array = hoursBetweenPrayers.map(Number);
            time_between_recurring_prayers_days_array = daysBetweenPrayers.map(Number);
            num_repeats_array = numRepeats.map(Number);
            // new Date() will assume the timestamp is in UTC time and will change the time when converting it to local time (e.g. 4 hours before)
            // for instance, a prayer set at 9:00am EST would become 5am EST because new Date() thought 9am was in UTC time)
            // so adding this (getTimezoneOffset() returns the offset in minutes)

            // console.log("(new Date()).getTimezoneOffset():", (new Date()).getTimezoneOffset());

            // console.log("prayerDateTime1:", prayerDateTime)
            // prayerDateTime -= (new Date()).getTimezoneOffset() * 60;
            // console.log("prayerDateTime2:", prayerDateTime)

            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(Number(prayerDateTime_array[num_prayer]) * 1000);

            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            // var AMPM = 'AM';

            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            // if (hours > 12) {
            //     hours = hours - 12;
            //     AMPM = 'PM';
            // }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            // prayerDate.value = month + ':' + day + ':' + year;
            // console.log(year + "-" + month + "-" + day);
            prayerDate.value = year + '-' + month + '-' + day;
            // prayerTime.value = hours + ':' + minutes + ' ' + AMPM;
            prayerTime.value = hours + ':' + minutes;

            prayer_time_array[slideIndex] = prayerTime.value;
            prayer_date_array[slideIndex] = prayerDate.value;


        } else {
            prayerDate.value = 'yyyy-MM-dd';
            prayerTime.value = "HH:mm";
        }

    } else {
        prayerDate.value = 'yyyy-MM-dd';
        prayerTime.value = "HH:mm";
    }

    if (prayerIsRecurringListSingle[numRow] != 0 && num_repeats_array[num_prayer]) {
        document.getElementById("make_prayer_recurring_checkbox").checked = true;
        document.getElementById("time_between_recurring_prayers_minutes").value = time_between_recurring_prayers_minutes_array[num_prayer];
        document.getElementById("time_between_recurring_prayers_hours").value = time_between_recurring_prayers_hours_array[num_prayer];
        document.getElementById("time_between_recurring_prayers_days").value = time_between_recurring_prayers_days_array[num_prayer];
        document.getElementById("num_repeats").value = num_repeats_array[num_prayer];
    } else {
        document.getElementById("make_prayer_recurring_checkbox").checked = false;
        document.getElementById("time_between_recurring_prayers_minutes").value = '';
        document.getElementById("time_between_recurring_prayers_hours").value = '';
        document.getElementById("time_between_recurring_prayers_days").value = '';
        document.getElementById("num_repeats").value = '';
    }

    updatePrayerDatetimeList(prayerDateTime_array);

    // if (prayerLengthListSingle[numRow]) {
    //     document.getElementById("prayer_length").value = prayerLengthListSingle[numRow];
    // }

    // show tags
    let containerElement = document.querySelector(".grid-item #addedTagsContainer");
    var addedTagButtonsTemp = document.querySelectorAll('#addedTagsContainer .added_tag_button');
    var find = '||||| ';
    var replace = ',';
    var tagsListStringTemp = tagsListSingle.toString().replace(new RegExp(escapeRegExp(find), 'g'), replace);
    var tagsListSingleArray = tagsListStringTemp.split(',');
    if (tagsListSingleArray && tagsListSingleArray[0].trim()) {
        loop1:
        for (var i = tagsListSingleArray.length - 1; i > -1; i--) { // if you don't go with i starting at the end of the array the tags get reversed
            if (!tagsListSingleArray[i]) {
                tagsListSingleArray.splice(i, 1);
                continue;
            }
            tagsListSingleArray[i] = tagsListSingleArray[i].replace(/\\\//g, '/');
            loop2:
            for (var j = 0; j < addedTagButtonsTemp.length; j++) {
                if (addedTagButtonsTemp[j].innerHTML.substring(0, addedTagButtonsTemp[j].innerHTML.lastIndexOf(' X')) == tagsListSingleArray[i]) {
                    continue loop1; // don't add tag if it was already added
                }
            }
            var addedTagButton = document.createElement('button');
            addedTagButton.innerHTML = tagsListSingleArray[i] + ' X'; // replacing the \/ automatically added to / when it comes from the database, back to /
            addedTagButton.className = 'added_tag_button';

            var addedTagButtonContainer = document.createElement('div');
            addedTagButtonContainer.className = 'added_tag_button_container';
            addedTagButtonContainer.appendChild(addedTagButton);
            // addedTagButtonContainer.appendChild(xElement);
            addedTagButtonContainer.onclick = function () { removeAddedTag(this) }

            containerElement.insertBefore(addedTagButtonContainer, containerElement.firstChild)

        }
    }

}

function updatePrayerDatetimeList(prayerDateTime_array) {

    // clear list first
    while (document.getElementById('prayer_room_datetimes_list').hasChildNodes()) {
        document.getElementById('prayer_room_datetimes_list').removeChild(document.getElementById('prayer_room_datetimes_list').lastChild);
    }
    // populate list
    let sorted_datetimes = prayerDateTime_array.slice().sort(); // to get first prayers of the day first; slice() copies the array so the same one is not referred to and prayerDatetimeListSingle doesn't get changed (was happening without)
    for (var i = 0; i < sorted_datetimes.length; i++) {
        if (sorted_datetimes[i]) {
            var prayer_datetime = document.createElement("li");
            var datetime_as_date = new Date(Number(sorted_datetimes[i]) * 1000);
            // /^\d$/.test() checks if the value is a single digit
            var formatted_datetime = (/^\d$/.test((datetime_as_date.getMonth() + 1)) ? '0' + (datetime_as_date.getMonth() + 1) : (datetime_as_date.getMonth() + 1)) +
                "/" + (/^\d$/.test(datetime_as_date.getDate()) ? '0' + datetime_as_date.getDate() : (datetime_as_date.getDate())) +
                "/" + datetime_as_date.getFullYear() +
                " " + (/^\d$/.test(datetime_as_date.getHours()) ? '0' + datetime_as_date.getHours() : datetime_as_date.getHours()) +
                ":" + (/^\d$/.test(datetime_as_date.getMinutes()) ? '0' + datetime_as_date.getMinutes() : datetime_as_date.getMinutes());
            // ":"+datetime_as_date.getSeconds();
            // get the correct slide number for each prayer
            var j = 0;
            for (j = 0; j < prayerDateTime_array.length; j++) {
                if (prayerDateTime_array[j] == sorted_datetimes[i]) {
                    break;
                }
            }
            prayer_datetime.innerHTML = "Prayer " + (j + 1) + ": " + formatted_datetime;
            prayer_datetime.className += " prayer_datetime_row";
            document.getElementById('prayer_room_datetimes_list').appendChild(prayer_datetime);
        }
    }

}

function onMakePrayerRecurringCheckboxChange(isOn) {
    if (isOn) {
        if (!document.getElementById("time_between_recurring_prayers_minutes").value &&
            !document.getElementById("time_between_recurring_prayers_hours").value &&
            !document.getElementById("time_between_recurring_prayers_days").value &&
            !document.getElementById("num_repeats").value) { // don't want to overwrite stuff already there

            document.getElementById("time_between_recurring_prayers_minutes").value = 0;
            document.getElementById("time_between_recurring_prayers_hours").value = 0;
            document.getElementById("time_between_recurring_prayers_days").value = 1;
            document.getElementById("num_repeats").value = -1;
        }
    } else {
        document.getElementById("time_between_recurring_prayers_minutes").value = null;
        document.getElementById("time_between_recurring_prayers_hours").value = null;
        document.getElementById("time_between_recurring_prayers_days").value = null;
        document.getElementById("num_repeats").value = null;
    }
}

// FUNCTION THAT INITIALIZES THE PAGE
function initSettingsPage() {

    document.getElementById("prayer_date").min = new Date().toISOString().split("T")[0];

    if (document.getElementById("prayer_text_area_ifr")) {
        prayerTextArea = document.getElementById("prayer_text_area_ifr").contentDocument.getElementById("tinymce");
    }
    if (document.getElementById("description_text_area_ifr")) {
        descriptionTextArea = document.getElementById("description_text_area_ifr").contentDocument.getElementById("tinymce");
    }
    if (document.getElementById("after_prayer_text_area_ifr")) {
        afterPrayerTextArea = document.getElementById("after_prayer_text_area_ifr").contentDocument.getElementById("tinymce");
    }

    if (isInt(roomIDFromURL)) {

        document.getElementById('roomID_title').innerHTML = 'Room ID: ' + roomIDFromURL;

        $.ajax({
            type: "POST",
            url: "create_prayer_room_functions.php",
            data: {
                action: 'getPrayerRooms',
                roomID: roomIDFromURL
            },
            // data: JSON.stringify([1, 2, 3]),
            // dataType: "json",
            // contentType: 'application/json; charset=utf-8',
            success: function (response) {

                clearPrayerRoomsList();
                parsePrayerRoomResponse(response, true);
                console.log('textRefListSingle3: ', textRefListSingle);
                getPrayerRoomSettings(0, 0);

            },
            error: function (error) {
                console.log("There was an error getting the prayer room: ", error);
                snackbarMessage.innerHTML = "There was an error getting the prayer room: " + error;
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            }
        });
    } else {
        roomIDFromURL = 'noID';
        document.getElementById('roomID_title').innerHTML = 'Room ID: No room selected.';
        if (document.getElementById("prayer_room_datetimes_list_container")) {
            document.getElementById("prayer_room_datetimes_list_container").style.display = 'none';
        }
    }

    console.log("initSettingsPage() called");

    setupSideNav();

    givePHPSomeInfo();

    document.body.className = "settingsBody";

    // disable all buttons if the user is not signed in
    if (!localStorage.getItem("isUserLoggedIn")) {
        var inputs = document.getElementsByTagName('input');
        var labels = document.getElementsByTagName('label');
        var buttons = document.getElementsByTagName('button');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type != "file") {
                inputs[i].disabled = true;
            }
        }
        for (var i = 0; i < buttons.length; i++) {
            if (!buttons[i].className.includes("close_menus_window_button") && !buttons[i].className.includes("closebtn") &&
                !buttons[i].className.includes("menu-list-item")) {
                buttons[i].disabled = true;
            }
        }
        snackbarMessage.innerHTML = "Login to create a room!";
        snackbarMessage.className = "show";
        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

        document.getElementById("roomID_title").innerHTML = "Login to create a room!";
    }


    // add listener checking whether or not user is signed in so if user signs out/clicks to sign in in the menu it will work
    //addUserAuthStateChangeListener();

    // $(document.body).removeClass(); // remove all classes from the body (so nothing is carried over from page you came from)

    // var bodyTag = document.getElementById("body_div");
    // bodyTag.style = "background-image: url('1280px-Father_Serra_Cross_with_Ventura_County_Fairground_and_Channel_Islands_in_background.jpg'); background-size: cover; -ms-background-size: cover; -o-background-size: cover; -moz-background-size: cover; -webkit-background-size: cover; background-color: rgba(252, 238, 110, 0.4);";

    // can't get favicon to appear in Firefox without this
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = "/favicon.ico?t=@DateTime.Now.Ticks";
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(link);

    // see if you can get unique (sort of) device id
    // if (window.requestIdleCallback) {
    //     requestIdleCallback(function () {
    //         Fingerprint2.get(function (components) {

    //         })
    //     })
    // } else {
    //     setTimeout(function () {
    //         Fingerprint2.get(function (components) {
    //         })
    //     }, 500)
    // }

    // if (window.Fingerprint2 === undefined) { // adblockers are likely preventing the scripts at the top of this file from loading (adblockers also prevent google analytics from working)

    // 	document.getElementById("filler_tag").style = "visibility: hidden;";
    // 	document.getElementById("popup_if_cannot_load_scripts").style = "height:100vh;color:white; display: block;";
    // 	bodyTag.style = "background-image: url('christian_painting.jpg'); background-size: cover;";

    // 	document.getElementById("about_container").style = "display: none;";
    // 	document.getElementById("about_text").style = "display: none;";
    // 	document.getElementById("how_it_works_text").style = "display: none;";

    // }

    var isMobile = false;

    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;

    }
    if (isMobile) {
        //   <!-- <!-- $('html').addClass('mobile'); --> -->
        //   <!-- console.log("using mobile"); -->
        //   <!-- <!-- change layout if using phone to access website --> -->

        // 	<!-- document.getElementById("about_container").style = ""; -->
        // 	<!-- document.getElementById("about_text").style = "background-color: rgba(252, 238, 110, 0.4); margin: 0 auto; width:80%; padding: 2%; font-size:300%; color:white; font-family: TimesNewRoman; text-align: left;"; -->
        // 	<!-- document.getElementById("about_body_tag").style = "background-image: url('1280px-Father_Serra_Cross_with_Ventura_County_Fairground_and_Channel_Islands_in_background.jpg'); background-size: 100% 100%; background-repeat: no-repeat;"; -->


    }


    document.getElementsByTagName('body')[0].className = 'settingsBody';


    // make the background take up the whole page in case the content itself does not
    $('document').ready(function () {

        if (document.getElementsByTagName('body')[0].style.height < '100vh') {
            document.getElementsByTagName('body')[0].style.height = '100vh';
        }

    });




    document.body.style.display = "block";
}


// document.body.style.display = "none";

var isMobile;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

// console.log("settingsPageCSS added?", document.getElementById(cssId));

// load the necessary css files for settings.html
var cssId = 'settingsPageCSS';
if (!document.getElementById(cssId)) // only load the css file if it was not loaded already
{
    console.log("ismobillee?", isMobile);
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    if (!isMobile) {
        link.href = 'css/create_prayer_room.css?version=' + Date.now(); // make sure the CSS path is absolute so it is loaded from your servers
    } else {
        // link.href = 'css/create_prayer_room-mobile.css?version=' + Date.now();
        link.href = 'css/create_prayer_room-mobile.css?version=' + Date.now();
        console.log("link added");
    }
    link.media = 'all';
    head.appendChild(link);
}
// cssId = 'globalStylesCSS'; // loaded in barba-transition.js
// if (!document.getElementById(cssId)) // only load the css file if it was not loaded already
// {
//     var head  = document.getElementsByTagName('head')[0];
//     var link  = document.createElement('link');
//     link.id   = cssId;
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'https://testing2.worldwideprayer.cf/css/global-styles.css?version=2'; // make sure the CSS path is absolute so it is loaded from your servers
//     link.media = 'all';
//     head.appendChild(link);
// }

// {/* <script type="text/javascript" src="js/barba-transition.js?version=28"></script> */}
var scriptId = 'barbaTransitionJS';
if (!document.getElementById(scriptId)) // only load the maps api file if it was not loaded already
{
    var scriptSrc = "js/barba-transition.js?version=" + Date.now();
    // $("head").append('<script type="text/javascript" id="' + scriptId + '" src="' + scriptSrc + '"></script>');
    console.log("scriptSrc: " + scriptSrc);
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = scriptSrc; // make sure the path is absolute so it is loaded from the server
    head.appendChild(script);
}

var checkIfScriptLoaded = function () {
    setTimeout(function () {
        // timeout--;
        if (typeof globalFunctions !== 'undefined' && typeof barbaDummyVar !== 'undefined') {

            $('document').ready(function () {
                console.log('initializing text editors');

                // if (tinymce.editors) {
                for (var i = 0; i < Editor.tinymce.editors.length; i++) {
                    console.log('in for loop:', i);
                    Editor.tinymce.editors[i].on('init', function (ed, e) {
                        console.log('editor', i, 'has been initialized');
                        // Update HTML view textarea (that is the one used to send the data to server).
                        // if ((i == tinymce.editors.length) && !settingsPageWasInitialized) {
                        if (!settingsPageWasInitialized) {
                            settingsPageWasInitialized = true;
                            initSettingsPage();
                        }
                        // ed.save();
                    });
                }

                if (!settingsPageWasInitialized) {
                    var checkForTextEditors = setInterval(function () {
                        if (document.getElementById("prayer_text_area_ifr")) {
                            settingsPageWasInitialized = true;
                            clearInterval(checkForTextEditors);
                            initSettingsPage();
                        }
                    }, 50);
                }

                // initSettingsPage();

                // if (!settingsPageWasInitialized) {
                // initSettingsPage();
                // }

                // checkIfBodyTagLoaded();

                console.log("loaded2");

                // } else {
                //     console.log("tinymce editors are undefined");
                // }

            });
            // External file loaded
            // initSettingsPage();
            console.log("loaded");
        }
        // else if (timeout > 0) {
        // }
        else {
            // External library failed to load
            checkIfScriptLoaded();
            console.log("not loaded");
        }
    }, 100);
};

// checkIfScriptLoaded();

function givePHPSomeInfo() {
    // give php the value of the user's email because it is needed if they change their profile picture (which is done through php and no javascript because doing through javascript seems to require converting to a base64 string and things get messed up)
    $.ajax({
        type: "POST",
        url: "create_prayer_room.php",
        data: {
            email: email,
            profile_pic_ref: global.profile_pic_ref,
            action: 'giveUserInfo'
        },
        success: function (response) {

            console.log(response);

        },
        error: function (error) {
            console.log("Error giving email: " + error);
        }
    });
}

function func(option) {

    prayerDatetime = Date.parse(document.getElementById("prayer_date").value.replace(/-/g, "/") + " " + document.getElementById("prayer_time").value.replace(/-/g, "/")) / 1000

    // cron job to renew prayers is every 15 minutes so making time between 20 min just for some room I guess
    if (prayerDatetimeListSingle[0]) {
        // console.log(prayerDatetimeListSingle[0]);
        let currentPrayerDateTimes = prayerDatetimeListSingle[0];
        for (var i = 0; i < currentPrayerDateTimes.length; i++) {
            if (i != slideIndex) {
                console.log('i: ', i, 'slideIndex: ', slideIndex, 'prayerDatetime: ', prayerDatetime, 'other time + 20: ', (Number(currentPrayerDateTimes[i]) + 20 * 60), 'other time - 20: ', Number(currentPrayerDateTimes[i]) - 20 * 60)
                if ((prayerDatetime < (Number(currentPrayerDateTimes[i]) + 20 * 60)) && (prayerDatetime > (Number(currentPrayerDateTimes[i]) - 20 * 60))) { // prayerDatetime is within 20 minutes of another prayer, can't save the room
                    snackbarMessage.innerHTML = "All prayers in the same prayer room must be at least 20 minutes apart.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                    return;
                }
            }
        }
    }

    var confirmOverwrite = false;
    var confirmNewRoom = false;

    if (option == 'new') {
        confirmNewRoom = window.confirm("Are you sure you want to create this room?");
    } else if (option == 'overwrite') {
        if (document.getElementById('roomID_title').innerHTML.includes("No room")) {
            snackbarMessage.innerHTML = "You are not currently editing any room.";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            return;
        } else {
            confirmOverwrite = window.confirm("Are you sure you want to change this room?");
        }
    }

    if (confirmOverwrite || confirmNewRoom) {

        var form_data = new FormData();                  // Creating object of FormData class

        recording_file_data = $("#recording_file").prop("files")[0];   // Getting the properties of file from file field
        if (confirmOverwrite && !recording_file_data) {
            form_data.append("notOverwritingRecording", true);
        }
        // if (!recording_file_data && recordingRefListSingle && recordingRefListSingle[0] && recordingRefListSingle[0][slideIndex]) { // if the user saved a file previously and is overwriting the prayer room, that previously saved file will be lost during the overwrite (can't load stuff into an input element programmatically) unless we retrieve it with this
        //     var blob = null
        //     var xhr1 = new XMLHttpRequest()
        //     // xhr1.responseType = "blob"
        //     xhr1.open("GET", recordingRefListSingle[0][slideIndex].replace(new RegExp(escapeRegExp("\\"), 'g'), ""), false)
        //     xhr1.onload = function () {
        //         blob = xhr1.response;
        //         recording_file_data = blob;
        //         // console.log(xhr1);
        //         // console.log(recording_file_data);
        //         // recording_file_data.name = xhr1.responseURL;

        //         // convert blob to file
        //         recording_file_data = new File([recording_file_data], xhr1.responseURL, {type: recording_file_data.type});

        //     }
        //     xhr1.send()
        // }

        // if (recording_file_data) {
        //     // console.log('$("#recording_file").prop("files")[0]', $("#recording_file").prop("files")[0]);
        //     document.getElementById("recording_file_label").innerHTML = $("#recording_file").prop("files")[0].name;
        // }

        music_file_data = $("#music_file").prop("files")[0];
        // if (!music_file_data && musicRefListSingle && musicRefListSingle[0] && musicRefListSingle[0][slideIndex]
        //     && (!musicRefListSingle[0][slideIndex].includes('/PrayerMusic/') | !musicRefListSingle[0][slideIndex].includes('/PrayerMusic\\'))) { // if the user saved a file previously and is overwriting the prayer room, that previously saved file will be lost during the overwrite (can't load stuff into an input element programmatically) unless we retrieve it with this
        //     var blob = null
        //     var xhr2 = new XMLHttpRequest()
        //     xhr2.open("GET", musicRefListSingle[0][slideIndex].replace(new RegExp(escapeRegExp("\\"), 'g'), ""), false)
        //     // xhr2.responseType = "blob"
        //     xhr2.onload = function () {
        //         blob = xhr2.response;
        //         music_file_data = blob;
        //         // music_file_data.name = xhr2.responseURL;

        //         // convert blob to file
        //         music_file_data = new File([music_file_data], xhr2.responseURL, {type: music_file_data.type});
        //     }
        //     xhr2.send()
        // }

        // if (music_file_data) {
        //     // console.log('$("#music_file").prop("files")[0]', $("#music_file").prop("files")[0]);
        //     document.getElementById("music_file_label").innerHTML = $("#music_file").prop("files")[0].name;
        // }

        background_file_data = $("#background_file").prop("files")[0];
        // if (!background_file_data && backgroundRefListSingle && backgroundRefListSingle[0] && backgroundRefListSingle[0][slideIndex]
        //     && (!backgroundRefListSingle[0][slideIndex].includes('/BackgroundGifs/') | !backgroundRefListSingle[0][slideIndex].includes('/BackgroundGifs\\'))) { // if the user saved a file previously and is overwriting the prayer room, that previously saved file will be lost during the overwrite (can't load stuff into an input element programmatically) unless we retrieve it with this
        //     var blob = null
        //     var xhr3 = new XMLHttpRequest()
        //     xhr3.open("GET", backgroundRefListSingle[0][slideIndex].replace(new RegExp(escapeRegExp("\\"), 'g'), ""), false)
        //     // xhr3.responseType = "blob"
        //     xhr3.onload = function () {
        //         blob = xhr3.response;
        //         background_file_data = blob;
        //         // background_file_data.name = xhr3.responseURL;

        //         // convert blob to file
        //         background_file_data = new File([background_file_data], xhr3.responseURL, {type: background_file_data.type});
        //     }
        //     xhr3.send()
        // }

        // if (background_file_data) {
        //     // console.log('$("#background_file").prop("files")[0]', $("#background_file").prop("files")[0]);
        //     document.getElementById("background_file_label").innerHTML = $("#background_file").prop("files")[0].name;
        // }
        // console.log('recording_file_data:', recording_file_data);
        form_data.append("recordingfile", recording_file_data);              // Appending parameter named file with properties of file_field to form_data
        form_data.append("musicfile", music_file_data);
        form_data.append("backgroundfile", background_file_data);

        var musicCheckBoxChecked = false;
        for (var i = 0; i < document.getElementsByClassName('music_checkbox').length; i++) {
            form_data.append("musicCheckbox" + (i + 1), document.getElementsByClassName('music_checkbox')[i].checked);
            if (document.getElementsByClassName('music_checkbox')[i].checked) {
                musicCheckBoxChecked = true;
            }
        }

        if (confirmOverwrite && !music_file_data && !musicCheckBoxChecked) { // if user did not upload a new music file or choose a new one, we want to keep his/her old one
            form_data.append("notOverwritingMusicFile", true);
        }

        var backgroundCheckBoxChecked = false;
        for (var i = 0; i < document.getElementsByClassName('background_checkbox').length; i++) {
            form_data.append("backgroundCheckbox" + (i + 1), document.getElementsByClassName('background_checkbox')[i].checked);
            if (document.getElementsByClassName('background_checkbox')[i].checked) {
                backgroundCheckBoxChecked = true;
            }
        }

        if (confirmOverwrite && !music_file_data && !backgroundCheckBoxChecked) { // if user did not upload a new background file or choose a new one, we want to keep his/her old one
            form_data.append("notOverwritingBackgroundFile", true);
        }

        form_data.append("prayerText", document.getElementById("prayer_text_area_ifr").contentDocument.getElementById("tinymce").innerHTML);
        form_data.append("afterPrayerTextArea", document.getElementById("after_prayer_text_area_ifr").contentDocument.getElementById("tinymce").innerHTML);
        form_data.append("descriptionTextArea", document.getElementById("description_text_area_ifr").contentDocument.getElementById("tinymce").innerHTML);

        form_data.append("makePrayerRecurring", document.getElementById("make_prayer_recurring_checkbox").checked);
        form_data.append("time_between_recurring_prayers_minutes", document.getElementById("time_between_recurring_prayers_minutes").value || 0);
        form_data.append("time_between_recurring_prayers_hours", document.getElementById("time_between_recurring_prayers_hours").value || 0);
        form_data.append("time_between_recurring_prayers_days", document.getElementById("time_between_recurring_prayers_days").value || 0);
        form_data.append("num_repeats", document.getElementById("num_repeats").value || 0);

        form_data.append("room_name", document.getElementById("room_name").value);

        form_data.append("password", document.getElementById("room_password").value);

        form_data.append("leader_name", document.getElementById("leader_name").value);

        form_data.append("prayer_date", document.getElementById("prayer_date").value.replace(/-/g, "/"));

        form_data.append("prayer_time", document.getElementById("prayer_time").value.replace(/-/g, "/"));

        // prayerDatetime += (new Date()).getTimezoneOffset() * 60;
        form_data.append("prayerDatetime", prayerDatetime);

        // form_data.append("prayer_length", document.getElementById("prayer_length").value);

        var prayerRoomTags = '';
        var addedTagButtons = document.querySelectorAll('.grid-item .added_tag_button');
        for (var i = 0; i < addedTagButtons.length; i++) {
            if (i == 0) {
                prayerRoomTags = addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.length - 2);
            } else {
                prayerRoomTags += '||||| ' + addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.length - 2);
            }
        }
        form_data.append("prayerRoomTags", prayerRoomTags);
        form_data.append("slideIndex", slideIndex);
        form_data.append("profile_pic_ref", global.profile_pic_ref);
        form_data.append("email", email);
        form_data.append("username", global.username);
        form_data.append("roomID", roomIDFromURL);
        form_data.append("overwriting", confirmOverwrite);

        console.log('textRefListSingle[0].join(" ")', (textRefListSingle[0] != undefined) ? textRefListSingle[0].join(' ') : []);
        form_data.append("textRef_array", (textRefListSingle[0] != undefined) ? textRefListSingle[0].join(' ') : []);
        form_data.append("afterPrayerTextRef_array", (afterPrayerTextRefListSingle[0] != undefined) ? afterPrayerTextRefListSingle[0].join(' ') : []);
        form_data.append("description_text_ref", (descriptionTextRefListSingle[0] != undefined) ? descriptionTextRefListSingle[0].join(' ') : []);
        form_data.append("prayerDatetime_array", (prayerDatetimeListSingle[0] != undefined) ? prayerDatetimeListSingle[0].join(' ') : []);
        form_data.append("makePrayerRecurring_array", (prayerIsRecurringListSingle[0] != undefined) ? prayerIsRecurringListSingle[0].join(' ') : []);
        form_data.append("time_between_recurring_prayers_minutes_array", (minutesBetweenPrayersListSingle[0] != undefined) ? minutesBetweenPrayersListSingle[0].join(' ') : []);
        form_data.append("time_between_recurring_prayers_hours_array", (hoursBetweenPrayersListSingle[0] != undefined) ? hoursBetweenPrayersListSingle[0].join(' ') : []);
        form_data.append("time_between_recurring_prayers_days_array", (daysBetweenPrayersListSingle[0] != undefined) ? daysBetweenPrayersListSingle[0].join(' ') : []);
        form_data.append("timeToDeleteOrRenewPrayer_array", (timeToDeleteOrRenewPrayerListSingle[0] != undefined) ? timeToDeleteOrRenewPrayerListSingle[0].join(' ') : []);
        form_data.append("num_repeats_array", (numRepeatsListSingle[0] != undefined) ? numRepeatsListSingle[0].join(' ') : []);
        form_data.append("musicRef_array", (musicRefListSingle[0] != undefined) ? musicRefListSingle[0].join(' ') : []);// music_file_data);
        form_data.append("recordingRef_array", (recordingRefListSingle[0] != undefined) ? recordingRefListSingle[0].join(' ') : []); // recording_file_data);              // Appending parameter named file with properties of file_field to form_data
        form_data.append("backgroundRef_array", (backgroundRefListSingle[0] != undefined) ? backgroundRefListSingle[0].join(' ') : []);

        $.ajax({
            url: "save_prayer_room_settings_ajax.php",
            cache: false,
            contentType: false,
            processData: false,
            method: 'POST',
            type: 'POST', // For jQuery < 1.9
            data: form_data,
            success: function (response) {

                console.log(response);

                if (response.includes('The text for the prayer cannot be empty.')) {
                    snackbarMessage.innerHTML = "The text for the prayer cannot be empty.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The name for the room cannot be empty.')) {
                    snackbarMessage.innerHTML = "The name for the room cannot be empty.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The date for the prayer cannot be empty.')) {
                    snackbarMessage.innerHTML = "The date for the prayer cannot be empty.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The time of day for the prayer cannot be empty.')) {
                    snackbarMessage.innerHTML = "The time of day for the prayer cannot be empty.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The music file must be an audio file.')) {
                    snackbarMessage.innerHTML = "The music file must be mp3, .ogg, or .wav.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The music file must be less than 1 GB.')) {
                    snackbarMessage.innerHTML = "The music file must be less than 1 GB.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The background must be an image/gif file.')) {
                    snackbarMessage.innerHTML = "The background must be .jpeg, .jpg, .png, or .gif.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The background file must be less than 1 GB.')) {
                    snackbarMessage.innerHTML = "The background file must be less than 1 GB.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The recording must be an audio file.')) {
                    snackbarMessage.innerHTML = "The recording must be .mp3, .ogg, or .wav.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('The recording must be less than 1 GB.')) {
                    snackbarMessage.innerHTML = "The recording must be less than 1 GB.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('Prayer room successfully saved!')) {
                    snackbarMessage.innerHTML = "Prayer room successfully saved!";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                    PageWasModified = false;

                    let responseAsString = response;
                    response = JSON.parse(response);
                    console.log("response from successful prayer room settings save: ", response);


                    // $response["RefArrays"]["textRef_array"]                  = $textRef_array;
                    // $response["RefArrays"]["musicRef_array"]                 = $musicRef_array;
                    // $response["RefArrays"]["backgroundRef_array"]            = $backgroundRef_array;
                    // $response["RefArrays"]["recordingRef_array"]             = $recordingRef_array;
                    // $response["RefArrays"]["username"]                       = $username;
                    // $response["RefArrays"]["profile_pic_ref"]                = $profile_pic_ref;
                    // $response["RefArrays"]["roomName"]                       = $roomName;
                    // $response["RefArrays"]["roomPassword"]                   = $roomPassword;
                    // $response["RefArrays"]["creator_name"]                   = $creator_name;
                    // $response["RefArrays"]["prayerLength"]                   = $prayerLength;
                    // $response["RefArrays"]["prayerDatetime_array"]                   = $prayerDatetime_array;
                    // $response["RefArrays"]["afterPrayerTextRef_array"]       = $afterPrayerTextRef_array;
                    // $response["RefArrays"]["description_text_ref"]           = $description_text_ref;
                    // $response["RefArrays"]["makePrayerRecurring_array"]              = $makePrayerRecurring_array;
                    // $response["RefArrays"]["timeToDeleteOrRenewPrayer_array"]      = $timeToDeleteOrRenewPrayer_array;
                    // $response["RefArrays"]["time_between_recurring_prayers_minutes_array"]          = $time_between_recurring_prayers_minutes_array;
                    // $response["RefArrays"]["time_between_recurring_prayers_hours_array"]            = $time_between_recurring_prayers_hours_array;
                    // $response["RefArrays"]["time_between_recurring_prayers_days_array"]             = $time_between_recurring_prayers_days_array;
                    // $response["RefArrays"]["num_repeats_array"]                     = $num_repeats_array;
                    // $response["RefArrays"]["tags"]                           = $tags;

                    // textRefListSingle = response["RefArrays"]["textRef_array"].split('","');
                    // afterPrayerTextRefListSingle = response["RefArrays"]["afterPrayerTextRef_array"].split('","');
                    // prayerDatetimeListSingle = response["RefArrays"]["prayerDatetime_array"].split('","');
                    // prayerIsRecurringListSingle = response["RefArrays"]["makePrayerRecurring_array"].split('","');
                    // timeToDeleteOrRenewPrayerListSingle = response["RefArrays"]["timeToDeleteOrRenewPrayer_array"];
                    // minutesBetweenPrayersListSingle = response["RefArrays"]["time_between_recurring_prayers_minutes_array"].split('","');
                    // hoursBetweenPrayersListSingle = response["RefArrays"]["time_between_recurring_prayers_hours_array"].split('","');
                    // daysBetweenPrayersListSingle = response["RefArrays"]["time_between_recurring_prayers_days_array"].split('","');
                    // numRepeatsListSingle = response["RefArrays"]["num_repeats_array"].split('","');
                    // musicRefListSingle = response["RefArrays"]["musicRef_array"].split('","');
                    // recordingRefListSingle = response["RefArrays"]["recordingRef_array"].split('","');
                    // backgroundRefListSingle = response["RefArrays"]["backgroundRef_array"].split('","');


                    // update arrays

                    roomNameListSingle[0] = roomName.value;
                    usernameListSingle[0] = global.username;
                    profilePicListSingle[0] = global.profile_pic_ref;

                    descriptionTextRefListSingle[0] = response['RefArrays']['description_text_ref'];
                    roomPasswordListSingle[0] = response['RefArrays']['roomPassword'];

                    creatorNameListSingle[0] = [response["RefArrays"]['creator_name']];
                    prayerLengthListSingle[0] = [response['RefArrays']['prayerLength']];

                    tagsListSingle[0] = response['RefArrays']['tags'];
                    prayerRoomsReactsArraysSingle[0] = [0, 0, 0, 0, 0, 0];

                    // creatorNameListSingle = response["RefArrays"]["creator_name"].split(' ');
                    // descriptionTextRefListSingle = response["RefArrays"]["description_text_ref"].split(' ');

                    textRefListSingle = response["RefArrays"]["textRef_array"].split(' ');
                    afterPrayerTextRefListSingle = response["RefArrays"]["afterPrayerTextRef_array"].split(' ');

                    musicRefListSingle = response["RefArrays"]["musicRef_array"].split(' ');
                    recordingRefListSingle = response["RefArrays"]["recordingRef_array"].split(' ');
                    backgroundRefListSingle = response["RefArrays"]["backgroundRef_array"].split(' ');

                    prayerDatetimeListSingle = [response["RefArrays"]["prayerDatetime_array"].split(' ')];
                    prayerIsRecurringListSingle = [response["RefArrays"]["makePrayerRecurring_array"].split(' ')];
                    timeToDeleteOrRenewPrayerListSingle = [response["RefArrays"]["timeToDeleteOrRenewPrayer_array"].split(' ')];
                    minutesBetweenPrayersListSingle = [response["RefArrays"]["time_between_recurring_prayers_minutes_array"].split(' ')];
                    hoursBetweenPrayersListSingle = [response["RefArrays"]["time_between_recurring_prayers_hours_array"].split(' ')];
                    daysBetweenPrayersListSingle = [response["RefArrays"]["time_between_recurring_prayers_days_array"].split(' ')];
                    numRepeatsListSingle = [response["RefArrays"]["num_repeats_array"].split(' ')];


                    console.log('textRefListSingle after save: ', textRefListSingle);

                    // fix the newly added URLs if there are any
                    // different type of a array going in then when called after parseprayerroomresponse() - e.g. [['textref1'], ['textref2']] going in here
                    // while in parseprayerroomresponse() it's ['textref1', 'textref2'] and that leads to these ending up being a 1D array but you need
                    // them to be 2D arrays so adding the [] around them
                    // textRefListSingle = [fixPrayerRoomURLs(textRefListSingle)];
                    // afterPrayerTextRefListSingle = [fixPrayerRoomURLs(afterPrayerTextRefListSingle)];
                    // descriptionTextRefListSingle = [fixPrayerRoomURLs(descriptionTextRefListSingle)];
                    // musicRefListSingle = [fixPrayerRoomURLs(musicRefListSingle)];
                    // backgroundRefListSingle = [fixPrayerRoomURLs(backgroundRefListSingle)];
                    // recordingRefListSingle = [fixPrayerRoomURLs(recordingRefListSingle)];

                    // convert arrays from [['textref1'], ['textref2']] to ['textref1', 'textref2'] (see above)
                    textRefListSingle = [].concat(...textRefListSingle);
                    afterPrayerTextRefListSingle = [].concat(...afterPrayerTextRefListSingle);
                    descriptionTextRefListSingle = [].concat(...descriptionTextRefListSingle);
                    musicRefListSingle = [].concat(...musicRefListSingle);
                    backgroundRefListSingle = [].concat(...backgroundRefListSingle);
                    recordingRefListSingle = [].concat(...recordingRefListSingle);

                    // make arrays be 1x1 with URLs separated by spaces so fixPrayerRoomURLs will work (making same format as arrays that go in from parsePrayerRoomResponse())
                    textRefListSingle = [textRefListSingle.join(' ')];
                    afterPrayerTextRefListSingle = [afterPrayerTextRefListSingle.join(' ')];
                    descriptionTextRefListSingle = [descriptionTextRefListSingle.join(' ')];
                    musicRefListSingle = [musicRefListSingle.join(' ')];
                    backgroundRefListSingle = [backgroundRefListSingle.join(' ')];
                    recordingRefListSingle = [recordingRefListSingle.join(' ')];

                    console.log('textRefListSingle after converting: ', textRefListSingle);

                    textRefListSingle = fixPrayerRoomURLs(textRefListSingle, false);
                    afterPrayerTextRefListSingle = fixPrayerRoomURLs(afterPrayerTextRefListSingle, false);
                    descriptionTextRefListSingle = fixPrayerRoomURLs(descriptionTextRefListSingle, false);
                    musicRefListSingle = fixPrayerRoomURLs(musicRefListSingle, false);
                    backgroundRefListSingle = fixPrayerRoomURLs(backgroundRefListSingle, false);
                    recordingRefListSingle = fixPrayerRoomURLs(recordingRefListSingle, false);

                    // // get rid of undefined values in the arrays
                    // removeUndefinedValuesFromArray(textRefListSingle);
                    // removeUndefinedValuesFromArray(afterPrayerTextRefListSingle);
                    // removeUndefinedValuesFromArray(prayerDatetimeListSingle);
                    // removeUndefinedValuesFromArray(prayerIsRecurringListSingle);
                    // removeUndefinedValuesFromArray(timeToDeleteOrRenewPrayerListSingle);
                    // removeUndefinedValuesFromArray(minutesBetweenPrayersListSingle);
                    // removeUndefinedValuesFromArray(hoursBetweenPrayersListSingle);
                    // removeUndefinedValuesFromArray(daysBetweenPrayersListSingle);
                    // removeUndefinedValuesFromArray(numRepeatsListSingle);
                    // removeUndefinedValuesFromArray(musicRefListSingle);
                    // removeUndefinedValuesFromArray(recordingRefListSingle);
                    // removeUndefinedValuesFromArray(backgroundRefListSingle);

                    console.log('textRefListSingle after fixing urls: ', textRefListSingle);


                    if (confirmNewRoom) {
                        var tempRoomIDFromURL = responseAsString.substring(responseAsString.indexOf('roomID from table: ') + 'roomID from table: '.length,
                            responseAsString.indexOf(' end of roomID value'));

                        console.log('tempRoomIDFromURL', tempRoomIDFromURL);

                        if (tempRoomIDFromURL != 0) { // If the room is overwritten instead of created this will be 0
                            roomIDFromURL = tempRoomIDFromURL;
                            document.getElementById('roomID_title').innerHTML = 'Room ID: ' + roomIDFromURL;
                            window.history.pushState("", document.title, "/create-prayer-room/roomID/" + roomIDFromURL);
                        }


                        // disable the create button for a certain amount of time to prevent spam
                        document.getElementById('save_button_new').disabled = true;
                        setTimeout(function () { document.getElementById('save_button_new').disabled = false; }, 10000);
                    }

                    // update prayer room datetimes if new datetime added
                    var prayerDateTime_array = prayerDatetimeListSingle[0];
                    updatePrayerDatetimeList(prayerDateTime_array);

                    idListSingle[0] = roomIDFromURL;


                    closeMenusWindow();

                } else if (response.includes('Prayer room information not saved for some reason.')) {
                    snackbarMessage.innerHTML = "Prayer room information not saved for some reason.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('This room does not exist anymore. Please save it as a new one.')) {
                    snackbarMessage.innerHTML = "This room does not exist anymore. Please save it as a new one.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                }

            },
            error: function (error) {
                console.log("Error giving file:", error);
            }
        });
    }

}

function preview_room() {
    if (!isInt(roomIDFromURL)) {
        snackbarMessage.innerHTML = "The room must be saved before it can be previewed.";
        snackbarMessage.className = "show";
        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
    } else {
        window.open("PrayerRoom/" + roomIDFromURL + "?preview=true&numPrayer=" + slideIndex, "_blank");
    }
}

function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}