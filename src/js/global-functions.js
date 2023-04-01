// this variable is useful for other files to check if this 'global-function.js' file has loaded  (you write 'if (typeof globalFunctions !== 'undefined') {}' ... )
var currentRoomsSelection = '';
var currentIntentionsSelection = '';
var currentTestimonialsSelection = '';
var currentPearlsSelection = '';
var numRowsRetrieved = 0;
var numUsersRetrievedFromSearch = 0;
var numRowsTemp = 0;
var loadPrayerRoomsListTriggered = false;
var loadIntentionsListTriggered = false;
var loadTestimonialsListTriggered = false;
var loadPearlsListTriggered = false;
var roomCounter = 0;
var noPrayerRoomsMessageAppended = false;
var numCalled = 0;

var prayerRoomMenuClicked = false;
var intentionsMenuClicked = false;
var testimonialsMenuClicked = false;
var pearlsMenuClicked = false;

var currentMenuName = '';

var reportingEntry = false;

var updateRowTimesInterval;

var now;// = new Date();
var d1, d2, d3;
var millisTillPrayer1;// = d1 - now;
var millisTillPrayer2;// = d2 - now;
var millisTillPrayer3;// = d3 - now;
var shortestTimeTillPrayer;
var longestTimeTillPrayer;
var hours, minutes, seconds, timeLeft, now2;
var timeAtNextPrayer;// = new Date().getTime() + shortestTimeTillPrayer;
var nextPrayerNum;
// var email, profile_pic_ref;
var userDataRetrieved = false;
var snackbarMessage;
// let prayerMenuToggleButtonBackgroundColor = 'rgb(77, 39, 115);';
let prayerMenuToggleButtonBackgroundColor = 'mediumpurple';


if (document.getElementById("snackbar")) {
    snackbarMessage = document.getElementById("snackbar");
}

function countdownTimerFunction() {

    // console.log("timeLeft", timeLeft);
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (hours < 10) {
        document.getElementById("hours").innerHTML = "0" + hours + ":";
    }
    else {
        document.getElementById("hours").innerHTML = hours + ":";
    }
    if (minutes < 10) {
        document.getElementById("minutes").innerHTML = "0" + minutes + ":";
    }
    else {
        document.getElementById("minutes").innerHTML = minutes + ":";
    }
    if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds;
    }
    else {
        document.getElementById("seconds").innerHTML = seconds;
    }

    // // check whether or not to send notification to user that prayer is starting soon
    // if ((nextPrayerNum === 1 && localStorage.getItem("want_notification_for_prayer1")) || (nextPrayerNum === 2 && localStorage.getItem("want_notification_for_prayer2"))
    //     || (nextPrayerNum === 3 && localStorage.getItem("want_notification_for_prayer3"))) { // check if user has the notification setting turned on for this prayer

    //     var notificationTime = localStorage.getItem("prayer_notification" + nextPrayerNum + "_time");

    //     // set default to 5 minutes before prayer in case the user did not set a time
    //     if (!notificationTime) {
    //         // console.log("notification time not set for prayer" + nextPrayerNum);
    //         // check if it is time to send the notification
    //         if (timeLeft <= 60 * 5 * 1000 && notificationSent === false) { // 5 minutes left, send user notification (will even when website is in background as long as it's open somewhere)
    //             notificationSent = true;
    //             if (!localStorage.getItem("prayer" + nextPrayerNum + "_notification_went_off")) { // otherwise when user refreshes page notification will go off again
    //                 notifyMe();
    //                 localStorage.setItem("prayer" + nextPrayerNum + "_notification_went_off", true);
    //             }
    //         }

    //         // reset that the notification did not go off so it can go off again
    //         if (localStorage.getItem("prayer" + nextPrayerNum + "_notification_went_off")) { // if the notification did go off
    //             if (timeLeft > 60 * 5 * 1000) { // if the user has the notification go off and then comes back the next day with less 5 minutes to go, the notification won't go off again -- but that's a small error
    //                 localStorage.removeItem("prayer" + nextPrayerNum + "_notification_went_off")
    //             }
    //         }

    //     } else {
    //         // notification time format is hh:mm (24 hour based, not 12 hour)
    //         var hourOfNotification = notificationTime.substring(0, notificationTime.indexOf(':'));
    //         var minuteOfNotification = notificationTime.substring(notificationTime.indexOf(':') + 1, notificationTime.length);
    //         // convert notification time to milliseconds
    //         // notificationTimeBeforePrayer = hourOfNotification * 60 * 60 * 1000 + minuteOfNotification * 60 * 1000;
    //         // convert notification time to a date object in order to get the time left until the notification
    //         // if (!notificationTimeAsDateSet) {
    //         var notificationTimeAsDate = new Date();
    //         notificationTimeAsDate.setHours(hourOfNotification);
    //         notificationTimeAsDate.setMinutes(minuteOfNotification); // since this gets reset every time the seconds are alway zero; still works though when the now2 minute changes
    //         // }

    //         var timeLeftUntilNotification = notificationTimeAsDate.getTime() - now2;

    //         // console.log("timeLeftUntilNotification for prayer" + nextPrayerNum + ": " + timeLeftUntilNotification);

    //         // check if it is time to send the notification
    //         if (timeLeftUntilNotification <= 0 && notificationSent === false) { // 5 minutes left, send user notification (will even when website is in background as long as it's open somewhere)
    //             notificationSent = true;
    //             if (!localStorage.getItem("prayer" + nextPrayerNum + "_notification_went_off")) { // otherwise when user refreshes page notification will go off again
    //                 notifyMe();
    //                 localStorage.setItem("prayer" + nextPrayerNum + "_notification_went_off", true);
    //             }
    //         }

    //         // reset that the notification did not go off so it can go off again
    //         if (localStorage.getItem("prayer" + nextPrayerNum + "_notification_went_off")) { // if the notification did go off
    //             if (timeLeftUntilNotification > 0) { // if the user has the notification go off and then comes back the next day after the notification should have gone off, the notification won't go off again -- but that's a small error
    //                 localStorage.removeItem("prayer" + nextPrayerNum + "_notification_went_off")
    //             }
    //         }
    //     }


    // }


    // CODE FOR CREATING NOTIFICATIONS EVEN WHEN WEBSITE IS NOT OPEN (NEED SERVER (AWARDSPACE) TO ENABLE OUTBOUND CONNECTIONS (NEED PREMIUM ACCOUNT)); OTHER STORAGE SITES ARE NOT DYNAMIC, ONLY STATIC HOSTING (DON'T WORK) -- SPENT A LOT OF TIME ON THIS TRYING A BUNCH OF DIFFERENT WAYS; DON'T WASTE TIME. JUST WAIT UNTIL PAYING FOR SERVER AND THEN YOU CAN DO IT
    // if (timeLeft <= (10 * 60 * 60 * 1000) && notificationSent2 === false) {
    //     notificationSent2 = true;
    //     // contact firebase to send the notification using our server
    //     deviceToken = localStorage.getItem("device_token");
    //     console.log("deviceToken: " + deviceToken);
    // jQuery.ajax({
    //     type: "POST",
    //     url: 'notifications.php',
    //     dataType: 'json',
    //     data: { functionname: 'sendNotification', arguments: [deviceToken] },

    //     success: function (obj, textstatus) {
    //         console.log(textstatus);
    //         console.log(obj);
    //         if (!('error' in obj)) {
    //             yourVariable = obj.result;
    //             console.log(yourVariable);
    //         }
    //         else {
    //             console.log(obj.error);
    //         }
    //         console.log("notificationSent2: " + notificationSent2);
    //     }
    // });
    // myPhpFunctionCall();

    // $.ajax({
    //     url: 'https://firebasestorage.googleapis.com/v0/b/prayerapp1.appspot.com/o/notifications.php?alt=media&token=978d31db-f0ae-4afc-b7b8-ea75cd084949',
    //     type: 'POST',
    //     data: {token:deviceToken},
    //     success: function(data) {
    //         console.log("firebase storage");
    //         console.log(data); // Inspect this in your console
    //     }
    // });

    // $.ajax({
    //     url: 'https://www.needtorunphpfile.cf/notifications.php',
    //     type: 'POST',
    //     data: {token:deviceToken},
    //     success: function(data) {
    //         console.log("infinity free");
    //         console.log(data); // Inspect this in your console
    //     }
    // });

    // $.ajax({
    //     url: 'https://drive.google.com/file/d/1AkPxg-LjdDdYMnerwlhoP1aa4NNF_3D-/view?usp=sharing',
    //     type: 'POST',
    //     data: {token:deviceToken},
    //     success: function(data) {
    //         console.log("google drive");
    //         console.log(data); // Inspect this in your console
    //     }
    // });

    // // curl --header "Authorization: key=AAAAVO_p6BQ:APA91bH6uVVmpUyuiw4IeBs55spP333X7iVyBx-rXdR4hP_qlwaUQ21YjNmOKT5B_UE4YxwpiqvgKFWfhjbaTD4q8S1azV6JQn7hrBNrRSMnQ3HWfToXNKdBZDdiK7__VPF0fpjFPwEVLWvPTg2HjT4H0Ez8biCc_A" --header
    // // "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d
    // // "{\"registration_ids\":[\"dtajkDZq01UsKLwXhKauLL:APA91bG2GO-iVx8Mh28f7bKU34GXpF_ppEnq4wWYJ_IB0oN-hKjK2C0mRklRu383K4dqXSu5X_SYvHem_R932vIceSMn5Lh6fF8-bejqvE-9CdZDK9HNKjW3xOYMTQxlnRlDBx_bonJP\"]}"


    // $.ajax({
    //     url: 'https://fcm.googleapis.com/fcm/send',
    //     data: '{"registration_ids":"["' + deviceToken + '"]"}',
    //     contentType: 'application/json',
    //     processData: false,
    //     beforeSend: function (xhr) {
    //         xhr.setRequestHeader("Authorization", "key=AAAAVO_p6BQ:APA91bH6uVVmpUyuiw4IeBs55spP333X7iVyBx-rXdR4hP_qlwaUQ21YjNmOKT5B_UE4YxwpiqvgKFWfhjbaTD4q8S1azV6JQn7hrBNrRSMnQ3HWfToXNKdBZDdiK7__VPF0fpjFPwEVLWvPTg2HjT4H0Ez8biCc_A")
    //         // xhr.setRequestHeader("Content-Type", "application/json")
    //     }, success: function (data) {
    //         alert(data);
    //         //process the JSON data etc
    //     }, error: function(error) {
    //         console.log("1 " + error);
    //     }
    // })

    // $.ajax({
    //     type: 'POST',
    //     url: "https://fcm.googleapis.com/fcm/send",
    //     headers: {
    //         Authorization: 'key=' + 'AAAAVO_p6BQ:APA91bH6uVVmpUyuiw4IeBs55spP333X7iVyBx-rXdR4hP_qlwaUQ21YjNmOKT5B_UE4YxwpiqvgKFWfhjbaTD4q8S1azV6JQn7hrBNrRSMnQ3HWfToXNKdBZDdiK7__VPF0fpjFPwEVLWvPTg2HjT4H0Ez8biCc_A'
    //     },
    //     contentType: 'application/json',
    //     dataType: 'json',
    //     data: JSON.stringify({
    //         // "message":
    //         // {
    //             "to": deviceToken,
    //             "notification":
    //             {
    //                 "title": "Test", 
    //                 "body": "Test"
    //             }
    //         // }
    //     }),
    //     success: function (response) {
    //         console.log(response);
    //     },
    //     error: function (xhr, status, error) {
    //         console.log("tooken: " + deviceToken);
    //         console.log(xhr.error);
    //         console.log(status);
    //         console.log(error);
    //     }
    // });
    // }
};

function startCountdownTimer() {

    var time1Element = document.getElementById("time_one");
    var time2Element = document.getElementById("time_two");
    var time3Element = document.getElementById("time_three");

    if (!time1Element) {
        time1Element = document.getElementById("hours")
    }
    if (!time2Element) {
        time2Element = document.getElementById("minutes")
    }
    if (!time3Element) {
        time3Element = document.getElementById("seconds")
    }

    var timeAtNextPrayer, now2, timeLeft, nextPrayerNum;

    if (typeof (Worker) !== "undefined") {
        if (typeof (worker) == "undefined") {
            worker = new Worker("js/worker.js?version=" + Date.now());
        }
        worker.onmessage = function (event) {
            //   document.getElementById("result").innerHTML = event.data;
            // console.log(event.data);
            // display the times of the prayers for the user in their timezone
            time1Element.innerHTML = event.data[5];
            time2Element.innerHTML = event.data[6];
            time3Element.innerHTML = event.data[7];

            // update the countdown timer in countdownTimerFunction()
            timeLeft = event.data[0];
            timeAtNextPrayer = event.data[1];
            shortestTimeTillPrayer = event.data[2];
            longestTimeTillPrayer = event.data[3];
            nextPrayerNum = event.data[4];

            if (document.hasFocus()) { // only open page if the website is in focus

                // check if the prayer page should open
                // console.log("longestTimeTillPrayer:", longestTimeTillPrayer); // 50426998
                if (!document.URL.includes(".world/pray")) {
                    if (((24 * 60 * 60 * 1000) - longestTimeTillPrayer) < (60 * 1000)) { // if prayer started less than a minute ago, join
                        window.open("./pray", "_self"); // _self is so the page is open in the same window and same tab
                    }
                    else if (shortestTimeTillPrayer <= 0) {
                        window.open("./pray", "_self");
                    }
                }

                // console.log("shortestTimeTillPrayer:", shortestTimeTillPrayer); // 26998
                // check if the gather page should open
                if (shortestTimeTillPrayer > 60 * 1000) { // if still more than a minute to go until prayer
                    if (!document.URL.includes(".world/gather")) {
                        // if the prayer started one minute ago or less send the user directly into the prayer
                        if (longestTimeTillPrayer >= (24 * 60 * 60 * 1000 - 60 * 1000)) { // >= 24 hours minus 1 minute
                            window.open("./gather", "_self")
                        }
                        else {

                            setTimeout(function myFunction() {
                                // I don't need anything to repeat, this code will be re run every prayer
                                //open the transition page
                                window.open("./gather", "_self") // _self is so the page is open in the same window and same tab
                            }, shortestTimeTillPrayer - 60 * 1000); // start the transition page when there is a minute left to go
                        }
                    }
                }
                else { // start the transition page because there is less than a minute left to go
                    if (longestTimeTillPrayer >= (24 * 60 * 60 * 1000 - 60 * 1000)) { // >= 24 hours minus 1 minute
                        if (!document.URL.includes(".world/pray")) {

                            window.open("./pray", "_self")
                        }
                    } else {
                        if (!document.URL.includes(".world/gather")) {

                            window.open("./gather", "_self") // _self is so the page is open in the same window and same tab
                        }
                    }
                }
            }

            countdownTimerFunction();

        };
    } else {
        // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
        console.log("Sorry, your browser does not support Web Workers...");
        // alert("Sorry, your browser does not support Web Workers...");
        // run the code that is in the web worker anyway (just won't run in background)
        // display the times of prayer
        d1 = new Date();
        d1.setUTCMinutes(0);
        d1.setUTCSeconds(0);
        d2 = new Date();
        d2.setUTCMinutes(0);
        d2.setUTCSeconds(0);
        d3 = new Date();
        d3.setUTCMinutes(0);
        d3.setUTCSeconds(0);
        d1.setUTCHours(11);
        time1Element.innerHTML = d1.toLocaleTimeString();
        d2.setUTCHours(19);
        time2Element.innerHTML = d2.toLocaleTimeString();
        d3.setUTCHours(1);
        time3Element.innerHTML = d3.toLocaleTimeString();

        // postMessage([d1.toLocaleTimeString(), d2.toLocaleTimeString(), d3.toLocaleTimeString()]);


        // open transition to prayer page at the appropriate times
        var now;
        var millisTillPrayer1;
        var millisTillPrayer2;
        var millisTillPrayer3;
        // var shortestTimeTillPrayer;
        // var longestTimeTillPrayer;
        // var timeAtNextPrayer;
        // var nextPrayerNum;
        // var timeLeft;
        var now2;

        setInterval(function () {

            now = new Date();
            millisTillPrayer1 = d1 - now;
            millisTillPrayer2 = d2 - now;
            millisTillPrayer3 = d3 - now;

            //console.log("millisTillPrayer2: " + millisTillPrayer2);
            if (millisTillPrayer1 < 0) {
                millisTillPrayer1 += 24 * 60 * 60 * 1000; // it's after 10am, try 10am tomorrow.
            }
            if (millisTillPrayer2 < 0) {
                millisTillPrayer2 += 24 * 60 * 60 * 1000;
            }
            if (millisTillPrayer3 < 0) {
                millisTillPrayer3 += 24 * 60 * 60 * 1000;
            }
            if (millisTillPrayer1 < millisTillPrayer2 && millisTillPrayer1 < millisTillPrayer3) {
                shortestTimeTillPrayer = millisTillPrayer1;
                nextPrayerNum = 1;
            }
            if (millisTillPrayer2 < millisTillPrayer1 && millisTillPrayer2 < millisTillPrayer3) {
                shortestTimeTillPrayer = millisTillPrayer2;
                nextPrayerNum = 2;
            }
            if (millisTillPrayer3 < millisTillPrayer1 && millisTillPrayer3 < millisTillPrayer2) {
                shortestTimeTillPrayer = millisTillPrayer3;
                nextPrayerNum = 3;
            }
            longestTimeTillPrayer = millisTillPrayer1;
            if (longestTimeTillPrayer < millisTillPrayer2) {
                longestTimeTillPrayer = millisTillPrayer2;
            }
            if (longestTimeTillPrayer < millisTillPrayer3) {
                longestTimeTillPrayer = millisTillPrayer3;
            }
            //console.log("shortestTimeTillPrayer: " + shortestTimeTillPrayer); 

            // var hours, minutes, seconds;
            timeAtNextPrayer = new Date().getTime() + shortestTimeTillPrayer;
            // console.log("in worker.js, timeAtNextPrayer: " + timeAtNextPrayer);

            now2 = new Date().getTime();
            timeLeft = timeAtNextPrayer - now2;

            // postMessage([timeLeft, timeAtNextPrayer, shortestTimeTillPrayer, longestTimeTillPrayer, nextPrayerNum,
            //     d1.toLocaleTimeString(), d2.toLocaleTimeString(), d3.toLocaleTimeString()]);

            // check if the gather or prayer page should open
            if (shortestTimeTillPrayer > 60 * 1000) { // if still more than a minute to go until prayer
                // if the prayer started one minute ago or less send the user directly into the prayer
                if (longestTimeTillPrayer >= (24 * 60 * 60 * 1000 - 60 * 1000)) { // >= 24 hours minus 1 minute
                    window.open("./pray", "_self")
                }
                else {
                    setTimeout(function myFunction() {
                        // I don't need anything to repeat, this code will be re run every prayer
                        //open the transition page
                        window.open("./gather", "_self") // _self is so the page is open in the same window and same tab
                    }, shortestTimeTillPrayer - 60 * 1000); // start the transition page when there is a minute left to go
                }
            }
            else { // start the transition page because there is less than a minute left to go
                if (longestTimeTillPrayer >= (24 * 60 * 60 * 1000 - 60 * 1000)) { // >= 24 hours minus 1 minute
                    window.open("./pray", "_self")
                } else {
                    window.open("./gather", "_self") // _self is so the page is open in the same window and same tab
                }
            }

            countdownTimerFunction();


        }, 1000);
    }
}

function sort_entries(e, sortEntriesBy) {
    console.log(e);

    var category;
    let action = 'getSortedEntries';
    let menu_id = e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    var entries_sorted_by_text;

    console.log('sortEntriesBy', sortEntriesBy);
    clearPrayerRoomsList();
    if (menu_id == 'intentionsSideNav') {
        if (currentIntentionsSelection == 'getMyIntentions') {
            category = 'MINE';
        } else if (currentIntentionsSelection == 'getMySavedIntentions') {
            category = 'SAVED';
        } else if (currentIntentionsSelection == 'getFollowedIntentions') {
            category = 'FOLLOWED';
        } else {
            category = 'ALL';
        }

        loadIntentionsList(action = action, '', limit = 20, intentionsSeachInput = intentionsSearchInput, '', sortBy = sortEntriesBy, category = category);
        entries_sorted_by_text = document.querySelector('#intentionsSideNav .entries_sorted_by_text');
    } else if (menu_id == 'testimonialsSideNav') {
        if (currentTestimonialsSelection == 'getMyTestimonials') {
            category = 'MINE';
        } else if (currentTestimonialsSelection == 'getMySavedTestimonials') {
            category = 'SAVED';
        } else if (currentTestimonialsSelection == 'getFollowedTestimonials') {
            category = 'FOLLOWED';
        } else {
            category = 'ALL';
        }

        loadTestimonialsList(action = action, '', limit = 20, testimonialsSearchInput = testimonialsSearchInput, '', sortBy = sortEntriesBy, category = category);
        entries_sorted_by_text = document.querySelector('#testimonialsSideNav .entries_sorted_by_text');
    } else if (menu_id == 'pearlsSideNav') {
        if (currentPearlsSelection == 'getMyPearls') {
            category = 'MINE';
        } else if (currentPearlsSelection == 'getMySavedPearls') {
            category = 'SAVED';
        } else if (currentPearlsSelection == 'getFollowedPearls') {
            category = 'FOLLOWED';
        } else {
            category = 'ALL';
        }

        loadPearlsList(action = action, '', limit = 20, pearlsSearchInput = pearlsSearchInput, '', sortBy = sortEntriesBy, category = category);
        entries_sorted_by_text = document.querySelector('#pearlsSideNav .entries_sorted_by_text');
    } else if (menu_id == 'myPrayerRoomsSideNav') {
        if (currentRoomsSelection == 'getMyPrayerRooms') {
            category = 'MINE';
        } else if (currentRoomsSelection == 'getMySavedPrayerRooms') {
            category = 'SAVED';
        } else if (currentRoomsSelection == 'getFollowedPrayerRooms') {
            category = 'FOLLOWED';
        } else {
            category = 'ALL';
        }

        loadPrayerRoomsList(action = action, '', limit = 20, prayerRoomsSearchInput = prayerRoomsSearchInput, '', sortBy = sortEntriesBy, category = category);
        entries_sorted_by_text = document.querySelector('#myPrayerRoomsSideNav .entries_sorted_by_text');
    }

    entries_sorted_by_text.innerHTML = sortEntriesBy;

    // the heart emoji will show up white without this
    if (entries_sorted_by_text.innerHTML.includes('❤')) {
        entries_sorted_by_text.style.color = 'red';
    } else {
        entries_sorted_by_text.style.color = '';
    }

    /*
    var form_data = new FormData();
    form_data.append('action', 'getSortedEntries');
    form_data.append('sortBy', sortBy);
    form_data.append('entryType', entryType);
    form_data.append('searchInput', searchInput);
    form_data.append('limit', 20);
    $.ajax({
        url: 'create_prayer_room_functions.php',
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        data: form_data,
        success: function (response) {

            console.log(response);

            if (response.includes('Entries successfully retrieved.')) {


                if (menu_id = 'intentionsSideNav') {
                    parseIntentionsResponse(response);
                } else if (menu_id = 'testimonialsSideNav') {
                    entryType = 'testimonial';
                } else if (menu_id = 'pearlsSideNav') {
                    entryType = 'pearls';
                } else if (menu_id = 'myPrayerRoomsSideNav') {
                    entryType = 'prayer room';
                }


            } else if (response.includes('Entries not retrieved for some reason.')) {
                snackbarMessage.innerHTML = "Sorry, an error occurred. Please try again later, or email us at support@worldwideprayer.world.";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            }

        },
        error: function (error) {
            console.log("Error sending entry:", error);
        }
    });
    */


}

function reportEntryFunction(e, thingReported) {

    // disable all report buttons for 5 seconds so we don't get spammed
    if (!reportingEntry) {
        reportingEntry = true;
        setTimeout(function () {
            reportingEntry = false;
        }, 10000)

        console.log("e: ", e, "this: ", + this);

        var index;
        var username_of_creator;
        var entry_id;

        if (thingReported == 'intention') {
            index = $('#intentionsSideNav .room_row_reportbtn').index(e);
            username_of_creator = intentionsUsernameList[index];
            entry_id = intentionsIDList[index];
            // console.log("index: ", index);
        } else if (thingReported == 'testimonial') {
            index = $('#testimonialsSideNav .room_row_reportbtn').index(e);
            username_of_creator = testimonialsUsernameList[index];
            entry_id = testimonialsIDList[index];
        } else if (thingReported == 'pearls') {
            index = $('#pearlsSideNav .room_row_reportbtn').index(e);
            username_of_creator = pearlsUsernameList[index];
            entry_id = pearlsIDList[index];
        } else if (thingReported == 'prayer room') {
            index = $('#myPrayerRoomsSideNav .room_row_reportbtn').index(e);
            username_of_creator = usernameList[index];
            entry_id = idList[index];
        } else if (thingReported == 'user') {
            index = $('#search_results_users .room_row_reportbtn').index(e);
            username_of_creator = usersUsernameList[index];
            entry_id = usersIDList[index];
        }

        let time_reported = new Date();
        var subject = thingReported + " reported on " + time_reported + " by " + username + " against " + username_of_creator;
        var message = "Thing reported: " + thingReported + "\n" + "Username of person reporting: " + username + "\n" +
            "Username of person being reported: " + username_of_creator + "\n" +
            "ID of entry being reported: " + entry_id + "\n" +
            "Time report was made: " + time_reported;

        var form_data = new FormData();
        form_data.append("subject", subject);
        form_data.append("message", message);
        form_data.append("action", "reportEntryViaUsername");

        $.ajax({
            url: "create_prayer_room_functions.php",
            cache: false,
            contentType: false,
            processData: false,
            method: 'POST',
            type: 'POST', // For jQuery < 1.9
            data: form_data,
            success: function (response) {

                console.log(response);

                if (response.includes('Entry successfully reported.')) {

                    e.style.display = 'none';

                    snackbarMessage.innerHTML = "The " + thingReported + " has been reported and will be reviewed.";
                    if (thingReported == 'pearls') {
                        snackbarMessage.innerHTML = "The " + thingReported + " have been reported and will be reviewed.";
                    }
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                } else if (response.includes('Entry not reported for some reason.')) {
                    snackbarMessage.innerHTML = "Sorry, the " + thingReported + " could not be reported. Please try again later, or email us at reports@worldwideprayer.world.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                }

            },
            error: function (error) {
                console.log("Error sending entry:", error);
            }
        });

    } else {
        snackbarMessage.innerHTML = "Disabling reporting for 10 seconds so we don't get spammed.";
        snackbarMessage.className = "show";
        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
    }

    return false;

}

function displayReacts(reactsContainer, reactsArrays, rowCounter, thingReactingTo) {
    reactsArray = reactsArrays[rowCounter]; // convert the string of reacts to an array
    if (!reactsArray) {
        reactsArray = [0, 0, 0, 0, 0, 0];
    }

    if (reactsArray.length <= 1) {
        reactsArray = [0, 0, 0, 0, 0, 0];
    }

    user_reacts_array = [0, 0, 0, 0, 0, 0];
    if (thingReactingTo == 'intention') {
        entry_id = intentionsIDList[rowCounter];
        table_reacting_to = 'intentions';
    } else if (thingReactingTo == 'testimonial') {
        entry_id = testimonialsIDList[rowCounter];
        table_reacting_to = 'testimonials';
    } else if (thingReactingTo == 'pearls') {
        entry_id = pearlsIDList[rowCounter];
        table_reacting_to = 'pearls';
    } else if (thingReactingTo == 'prayer room') {
        entry_id = idList[rowCounter];
        table_reacting_to = 'prayer_rooms';
    }
    for (var i = 0; i < user_reacts_arrays.length; i++) {
        if ((user_reacts_tables_reacting_to[i] == table_reacting_to) && (user_reacts_entryIDs[i] == entry_id)) {
            user_reacts_array = user_reacts_arrays[i].split(' ');
        }
    }

    for (var i = 0; i < reactsArray.length; i++) {

        var emoji_container = document.createElement("div");
        emoji_container.onclick = function () {
            giveReactionFunction(this, thingReactingTo)
        };
        emoji_container.className = "emoji_container";

        var emoji = document.createElement("div");
        emoji.className = "emoji";

        if (i == 0) {
            emoji.innerHTML = "&#128077"; //👍
        } else if (i == 1) {
            emoji.innerHTML = "🙏";
        } else if (i == 2) {
            emoji.innerHTML = "❤";
        } else if (i == 3) {
            emoji.innerHTML = "😇";
        } else if (i == 4) {
            emoji.innerHTML = "🎯";
        } else if (i == 5) {
            emoji.innerHTML = "😡";
        }

        var numReacts = document.createElement("div");
        numReacts.className = "num_reacts";
        numReacts.innerHTML = reactsArray[i];

        user_reacts_array = user_reacts_array.map(Number);
        if (user_reacts_array[i] > 0) {
            numReacts.className += " user_reacted";
        }

        // console.log('i: ' + i, 'emoji: ' + emoji.innerHTML, 'numReacts: ' + numReacts.innerHTML);

        emoji_container.appendChild(emoji);
        emoji_container.appendChild(numReacts);
        reactsContainer.appendChild(emoji_container);
    }
}

function giveReactionFunction(e, thingReactingTo) {

    if (!isUserLoggedIn) {
        snackbarMessage.innerHTML = "Please login first.";
        snackbarMessage.className = "show";
        setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

        return;
    }

    console.log("e:", e);

    var index;
    var entry_id;
    var entry_reacts_array;

    if (thingReactingTo == 'intention') {
        index = $('#intentionsSideNav .reacts_container').index(e.parentElement);
        entry_id = intentionsIDList[index];
        entry_reacts_array = intentionsReactsArrays[index];
        table_reacting_to = 'intentions';
    } else if (thingReactingTo == 'testimonial') {
        index = $('#testimonialsSideNav .reacts_container').index(e.parentElement);
        entry_id = testimonialsIDList[index];
        entry_reacts_array = testimonialsReactsArrays[index];
        table_reacting_to = 'testimonials';
    } else if (thingReactingTo == 'pearls') {
        index = $('#pearlsSideNav .reacts_container').index(e.parentElement);
        entry_id = pearlsIDList[index];
        entry_reacts_array = pearlsReactsArrays[index];
        table_reacting_to = 'pearls';
    } else if (thingReactingTo == 'prayer room') {
        index = $('#myPrayerRoomsSideNav .reacts_container').index(e.parentElement);
        entry_id = idList[index];
        entry_reacts_array = prayerRoomsReactsArrays[index];
        table_reacting_to = 'prayer_rooms';
    }

    console.log("table_reacting_to:", table_reacting_to, "index:", index, "entry_id:", entry_id);

    if (index == -1) {
        console.log('index is -1');
        return;
    }


    user_reacts_array = [0, 0, 0, 0, 0, 0];
    var id = '';
    var num_array = -1;
    for (var i = 0; i < user_reacts_arrays.length; i++) {
        if ((user_reacts_tables_reacting_to[i] == table_reacting_to) && (user_reacts_entryIDs[i] == entry_id)) {

            if ((user_reacts_arrays[i][0]) && ((typeof user_reacts_arrays[i][0] === 'string') || (user_reacts_arrays[i][0] instanceof String))) {
                user_reacts_arrays[i] = user_reacts_arrays[i].split(' ').map(Number);
            }

            user_reacts_array = user_reacts_arrays[i];

            id = user_reacts_ids[i];
            num_array = i;
            break;
        }
    }

    console.log("num_array", num_array);
    console.log("entry_reacts_array1", entry_reacts_array);

    // convert string arrays to int arrays
    user_reacts_array = user_reacts_array.map(Number);
    entry_reacts_array = entry_reacts_array.map(Number);

    if (entry_reacts_array.includes(NaN)) {
        console.log('entry_reacts_array was never set.')
        entry_reacts_array = [0, 0, 0, 0, 0, 0];
    }

    console.log("user_reacts_array:", user_reacts_array);
    console.log("entry_reacts_array:", entry_reacts_array);
    console.log("user_reacts_arrays:", user_reacts_arrays[num_array]);

    if (e.innerHTML.includes("👍")) {
        numEmoji = 0;
        if (user_reacts_array[numEmoji] == 0) {
            user_reacts_array[numEmoji] = 1;
            entry_reacts_array[numEmoji]++;
            if (num_array > -1) {
                user_reacts_arrays[num_array][numEmoji] = user_reacts_arrays[num_array][numEmoji] + 1;
            }
        } else {
            user_reacts_array[numEmoji] = 0;
            entry_reacts_array[numEmoji]--;
            if (num_array > -1) { user_reacts_arrays[num_array][numEmoji] = user_reacts_arrays[num_array][numEmoji] - 1; }
        }
    } else if (e.innerHTML.includes("🙏")) {
        numEmoji = 1;
        if (user_reacts_array[numEmoji] == 0) {
            user_reacts_array[numEmoji] = 1;
            entry_reacts_array[numEmoji]++;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]++;
        } else {
            user_reacts_array[numEmoji] = 0;
            entry_reacts_array[numEmoji]--;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]--;
        }
    } else if (e.innerHTML.includes("❤")) {
        numEmoji = 2;
        if (user_reacts_array[numEmoji] == 0) {
            user_reacts_array[numEmoji] = 1;
            entry_reacts_array[numEmoji]++;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]++;
        } else {
            user_reacts_array[numEmoji] = 0;
            entry_reacts_array[numEmoji]--;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]--;
        }
    } else if (e.innerHTML.includes("😇")) {
        numEmoji = 3;
        if (user_reacts_array[numEmoji] == 0) {
            user_reacts_array[numEmoji] = 1;
            entry_reacts_array[numEmoji]++;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]++;
        } else {
            user_reacts_array[numEmoji] = 0;
            entry_reacts_array[numEmoji]--;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]--;
        }
    } else if (e.innerHTML.includes("🎯")) {
        numEmoji = 4;
        if (user_reacts_array[numEmoji] == 0) {
            user_reacts_array[numEmoji] = 1;
            entry_reacts_array[numEmoji]++;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]++;
        } else {
            user_reacts_array[numEmoji] = 0;
            entry_reacts_array[numEmoji]--;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]--;
        }
    } else if (e.innerHTML.includes("😡")) {
        numEmoji = 5;
        if (user_reacts_array[numEmoji] == 0) {
            user_reacts_array[numEmoji] = 1;
            entry_reacts_array[numEmoji]++;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]++;
        } else {
            user_reacts_array[numEmoji] = 0;
            entry_reacts_array[numEmoji]--;
            if (num_array > -1) user_reacts_arrays[num_array][numEmoji]--;
        }
    } else {
        console.log("no emoji pressed?");
        return;
    }


    console.log("user_reacts_array2:", user_reacts_array);
    console.log("entry_reacts_array2:", entry_reacts_array);
    console.log("user_reacts_arrays2:", user_reacts_arrays[num_array]);

    var form_data = new FormData();

    user_reacts_array_as_string = "";
    for (var i = 0; i < user_reacts_array.length; i++) {
        if (i == user_reacts_array.length - 1) {
            user_reacts_array_as_string += user_reacts_array[i];
        } else {
            user_reacts_array_as_string += user_reacts_array[i] + " ";
        }
    }
    entry_reacts_array_as_string = "";
    for (var i = 0; i < entry_reacts_array.length; i++) {
        if (i == entry_reacts_array.length - 1) {
            entry_reacts_array_as_string += entry_reacts_array[i];
        } else {
            entry_reacts_array_as_string += entry_reacts_array[i] + " ";
        }
    }

    console.log("user_reacts_array_as_string:", user_reacts_array_as_string);
    console.log("entry_reacts_array_as_string:", entry_reacts_array_as_string);
    form_data.append("id", id);
    form_data.append("thingReactingTo", thingReactingTo);
    form_data.append("entry_id", entry_id);
    form_data.append("user_reacts_array", user_reacts_array_as_string);
    form_data.append("entry_reacts_array", entry_reacts_array_as_string);
    form_data.append("username", username);
    form_data.append("action", 'giveReaction');

    $.ajax({
        url: "create_intention_functions.php",
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        data: form_data,
        success: function (response) {

            console.log(response);

            if (response.includes('Reaction successful.')) {

                entry_id = entry_id.toString();

                console.log("entry_id as string", entry_id);

                // change the count of the reaction shown and highlight/unhighlight it
                if (thingReactingTo == 'intention') {
                    index2 = $('#intentionsSideNav .emoji_container').index(e);
                    num_reacts_element = $('#intentionsSideNav .num_reacts')[index2];
                    // console.log("index:", index, "index2:", index2);
                    intentionsReactsArrays[index] = entry_reacts_array;
                } else if (thingReactingTo == 'testimonial') {
                    index2 = $('#testimonialsSideNav .emoji_container').index(e);
                    num_reacts_element = $('#testimonialsSideNav .num_reacts')[index2];
                    testimonialsReactsArrays[index] = entry_reacts_array;
                } else if (thingReactingTo == 'pearls') {
                    index2 = $('#pearlsSideNav .emoji_container').index(e);
                    num_reacts_element = $('#pearlsSideNav .num_reacts')[index2];
                    pearlsReactsArrays[index] = entry_reacts_array;
                } else if (thingReactingTo == 'prayer room') {
                    index2 = $('#myPrayerRoomsSideNav .emoji_container').index(e);
                    num_reacts_element = $('#myPrayerRoomsSideNav .num_reacts')[index2];
                    prayerRoomsReactsArrays[index] = entry_reacts_array;
                }

                if (num_reacts_element.className.includes("user_reacted")) {
                    num_reacts_element.innerHTML = Number(num_reacts_element.innerHTML) - 1
                    num_reacts_element.classList.remove("user_reacted");
                } else {
                    num_reacts_element.innerHTML = Number(num_reacts_element.innerHTML) + 1
                    num_reacts_element.className += " user_reacted";
                }


            } else if (response.includes('Reaction not successful for some reason.')) {
                snackbarMessage.innerHTML = "Sorry an error occurred.";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            }

        },
        error: function (error) {
            console.log("Error sending reaction:", error);
        }
    });

}

function deleteEntryFunction(e, thingDeleted) {

    var index;
    var entry_id;

    if (thingDeleted == 'intention') {
        index = $('#intentionsSideNav .room_row_deletebtn').index(e);
        entry_id = intentionsIDList[index];
    } else if (thingDeleted == 'testimonial') {
        index = $('#testimonialsSideNav .room_row_deletebtn').index(e);
        entry_id = testimonialsIDList[index];
    } else if (thingDeleted == 'pearls') {
        index = $('#pearlsSideNav .room_row_deletebtn').index(e);
        entry_id = pearlsIDList[index];
    } else if (thingDeleted == 'prayer room') {
        index = $('#myPrayerRoomsSideNav .room_row_deletebtn').index(e);
        entry_id = idList[index];
    }

    // console.log("intentionsIDList", intentionsIDList);
    // console.log("thingDeleted", thingDeleted);
    // console.log("idList", idList);
    // console.log("index: ", index);
    // console.log("entry_id", entry_id);


    var confirmDelete = false;

    if (thingDeleted == 'pearls') {
        confirmDelete = confirm("Are you sure you want to delete these " + thingDeleted + "?");
    } else {
        confirmDelete = confirm("Are you sure you want to delete this " + thingDeleted + "?");
    }

    if (!confirmDelete) {
        return;
    }

    var form_data = new FormData();

    form_data.append("thingDeleted", thingDeleted);
    form_data.append("entry_id", entry_id);
    form_data.append("action", 'deleteEntry');

    $.ajax({
        url: "create_prayer_room_functions.php",
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        data: form_data,
        success: function (response) {

            console.log(response);

            if (response.includes('Entry successfully deleted.')) {
                snackbarMessage.innerHTML = "Entry successfully deleted.";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                entry_id = entry_id.toString();

                console.log("entry_id as string", entry_id);

                // remove the deleted element from its lists and from the DOM
                if (thingDeleted == 'intention') {
                    intentionsIDList.splice(intentionsIDList.indexOf(entry_id), 1);
                    intentionsProfilePicList.splice(intentionsProfilePicList.indexOf(entry_id), 1);
                    intentionsTagsList.splice(intentionsTagsList.indexOf(entry_id), 1);
                    intentionsTextRefList.splice(intentionsTextRefList.indexOf(entry_id), 1);
                    intentionsTitleList.splice(intentionsTitleList.indexOf(entry_id), 1);
                    intentionsUsernameList.splice(intentionsUsernameList.indexOf(entry_id), 1);
                    intentionsDateandtimeList.splice(intentionsDateandtimeList.indexOf(entry_id), 1);

                } else if (thingDeleted == 'testimonial') {
                    testimonialsIDList.splice(testimonialsIDList.indexOf(entry_id), 1);
                    testimonialsProfilePicRefList.splice(testimonialsProfilePicRefList.indexOf(entry_id), 1);
                    testimonialsTagsList.splice(testimonialsTagsList.indexOf(entry_id), 1);
                    testimonialsTextRefList.splice(testimonialsTextRefList.indexOf(entry_id), 1);
                    testimonialsTitleList.splice(testimonialsTitleList.indexOf(entry_id), 1);
                    testimonialsUsernameList.splice(testimonialsUsernameList.indexOf(entry_id), 1);
                    testimonialsDateandtimeList.splice(testimonialsDateandtimeList.indexOf(entry_id), 1);

                } else if (thingDeleted == 'pearls') {
                    pearlsIDList.splice(pearlsIDList.indexOf(entry_id), 1);
                    pearlsProfilePicRefList.splice(pearlsProfilePicRefList.indexOf(entry_id), 1);
                    pearlsTagsList.splice(pearlsTagsList.indexOf(entry_id), 1);
                    pearlsTextRefList.splice(pearlsTextRefList.indexOf(entry_id), 1);
                    pearlsTitleList.splice(pearlsTitleList.indexOf(entry_id), 1);
                    pearlsUsernameList.splice(pearlsUsernameList.indexOf(entry_id), 1);
                    pearlsDateandtimeCreatedList.splice(pearlsDateandtimeCreatedList.indexOf(entry_id), 1);
                    pearlsDateandtimeVisibleList.splice(pearlsDateandtimeVisibleList.indexOf(entry_id), 1);
                    pearlsMusicRefList.splice(pearlsMusicRefList.indexOf(entry_id), 1);
                    pearlsCreatorNameList.splice(pearlsCreatorNameList.indexOf(entry_id), 1);
                    pearlsBackgroundRefList.splice(pearlsBackgroundRefList.indexOf(entry_id), 1);
                    pearlsRoomPasswordList.splice(pearlsRoomPasswordList.indexOf(entry_id), 1);

                } else if (thingDeleted == 'prayer room') {
                    // console.log("indexOf:", idList.indexOf(entry_id));
                    idList.splice(idList.indexOf(entry_id), 1);
                    creatorNameList.splice(creatorNameList.indexOf(entry_id), 1);
                    roomNameList.splice(roomNameList.indexOf(entry_id), 1);
                    usernameList.splice(usernameList.indexOf(entry_id), 1);
                    profilePicList.splice(profilePicList.indexOf(entry_id), 1);
                    roomPasswordList.splice(roomPasswordList.indexOf(entry_id), 1);
                    textRefList.splice(textRefList.indexOf(entry_id), 1);
                    backgroundRefList.splice(backgroundRefList.indexOf(entry_id), 1);
                    musicRefList.splice(musicRefList.indexOf(entry_id), 1);
                    recordingRefList.splice(recordingRefList.indexOf(entry_id), 1);
                    prayerLengthList.splice(prayerLengthList.indexOf(entry_id), 1);
                    prayerDatetimeList.splice(prayerDatetimeList.indexOf(entry_id), 1);
                    afterPrayerTextRefList.splice(afterPrayerTextRefList.indexOf(entry_id), 1);
                    descriptionTextRefList.splice(descriptionTextRefList.indexOf(entry_id), 1);
                    prayerIsRecurringList.splice(prayerIsRecurringList.indexOf(entry_id), 1);
                    timeToDeleteOrRenewPrayerList = timeToDeleteOrRenewPrayerList.splice(timeToDeleteOrRenewPrayerList.indexOf(entry_id), 1);
                    minutesBetweenPrayersList.splice(minutesBetweenPrayersList.indexOf(entry_id), 1);
                    hoursBetweenPrayersList.splice(hoursBetweenPrayersList.indexOf(entry_id), 1);
                    daysBetweenPrayersList.splice(daysBetweenPrayersList.indexOf(entry_id), 1);
                    numRepeatsList.splice(numRepeatsList.indexOf(entry_id), 1);
                    tagsList.splice(tagsList.indexOf(entry_id), 1);
                }

                let entry_row_element = e.parentElement.parentElement.parentElement;
                entry_row_element.parentNode.removeChild(entry_row_element);


            } else if (response.includes('Entry not deleted for some reason.')) {
                snackbarMessage.innerHTML = "Entry not deleted for some reason.";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            }

        },
        error: function (error) {
            console.log("Error sending entry:", error);
        }
    });
}

function ChangeRoomsShown(category) {
    var entries_sorted_by_text = document.querySelector('#myPrayerRoomsSideNav .entries_sorted_by_text');
    entries_sorted_by_text.innerHTML = 'Newest';
    entries_sorted_by_text.style.color = '';

    if (category == 'ALL') {
        document.getElementById('my_rooms_menu_title').innerHTML = "Prayer Rooms Worldwide";
        document.getElementById('all_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('my_rooms_label').style = "background-color: " + 'none';
        document.getElementById('saved_rooms_label').style = "background-color: " + 'none';
        document.getElementById('followed_rooms_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentRoomsSelection = '';

        loadPrayerRoomsList('', '', 20, '', '');

    } else if (category == 'MINE') {
        // console.log("clicked my prayer rooms");
        document.getElementById('my_rooms_menu_title').innerHTML = "My Prayer Rooms";
        document.getElementById('all_rooms_label').style = "background-color: " + 'none';
        document.getElementById('my_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('saved_rooms_label').style = "background-color: " + 'none';
        document.getElementById('followed_rooms_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentRoomsSelection = 'getMyPrayerRooms';

        loadPrayerRoomsList('getMyPrayerRooms', '', 20, '', '');

    } else if (category == 'SAVED') {
        document.getElementById('my_rooms_menu_title').innerHTML = "Saved Prayer Rooms";
        document.getElementById('all_rooms_label').style = "background-color: " + 'none';
        document.getElementById('my_rooms_label').style = "background-color: " + 'none';
        document.getElementById('saved_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('followed_rooms_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentRoomsSelection = 'getMySavedPrayerRooms';

        loadPrayerRoomsList('getMySavedPrayerRooms', '', 20, '', '');
    } else if (category == 'FOLLOWED') {
        document.getElementById('my_rooms_menu_title').innerHTML = "Followed Prayer Rooms";
        document.getElementById('all_rooms_label').style = "background-color: " + 'none';
        document.getElementById('my_rooms_label').style = "background-color: " + 'none';
        document.getElementById('saved_rooms_label').style = "background-color: " + 'none';
        document.getElementById('followed_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;

        clearPrayerRoomsList();

        currentRoomsSelection = 'getFollowedPrayerRooms';

        loadPrayerRoomsList(currentRoomsSelection, '', 20, '', '');
    }
}

function ChangePearlsShown(category) {

    var entries_sorted_by_text = document.querySelector('#pearlsSideNav .entries_sorted_by_text');
    entries_sorted_by_text.innerHTML = 'Newest';
    entries_sorted_by_text.style.color = '';

    if (category == 'ALL') {
        document.getElementById('pearls_menu_title').innerHTML = "Pearls Cast Worldwide";
        document.getElementById('all_pearls_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('my_pearls_label').style = "background-color: " + 'none';
        document.getElementById('saved_pearls_label').style = "background-color: " + 'none';
        document.getElementById('followed_pearls_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentPearlsSelection = '';

        loadPearlsList(currentPearlsSelection, '', 20, '', '');

    } else if (category == 'MINE') {
        document.getElementById('pearls_menu_title').innerHTML = "My Pearls";
        document.getElementById('all_pearls_label').style = "background-color: " + 'none';
        document.getElementById('my_pearls_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('saved_pearls_label').style = "background-color: " + 'none';
        document.getElementById('followed_pearls_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentPearlsSelection = 'getMyPearls';

        loadPearlsList(currentPearlsSelection, '', 20, '', '');

    } else if (category == 'SAVED') {
        document.getElementById('pearls_menu_title').innerHTML = "Saved Pearls";
        document.getElementById('all_pearls_label').style = "background-color: " + 'none';
        document.getElementById('my_pearls_label').style = "background-color: " + 'none';
        document.getElementById('saved_pearls_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('followed_pearls_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentPearlsSelection = 'getMySavedPearls';

        loadPearlsList(currentPearlsSelection, '', 20, '', '');
    } else if (category == 'FOLLOWED') {
        document.getElementById('pearls_menu_title').innerHTML = "Followed Pearls";
        document.getElementById('all_pearls_label').style = "background-color: " + 'none';
        document.getElementById('my_pearls_label').style = "background-color: " + 'none';
        document.getElementById('saved_pearls_label').style = "background-color: " + 'none';
        document.getElementById('followed_pearls_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;

        clearPrayerRoomsList();

        currentPearlsSelection = 'getFollowedPearls';

        loadPearlsList(currentPearlsSelection, '', 20, '', '');
    }
}

function ChangeIntentionsShown(category) {

    var entries_sorted_by_text = document.querySelector('#intentionsSideNav .entries_sorted_by_text');
    entries_sorted_by_text.innerHTML = 'Newest';
    entries_sorted_by_text.style.color = '';

    if (category == 'ALL') {
        document.getElementById('intentions_menu_title').innerHTML = "Intentions Worldwide";
        document.getElementById('all_intentions_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('my_intentions_label').style = "background-color: " + 'none';
        document.getElementById('saved_intentions_label').style = "background-color: " + 'none';
        document.getElementById('followed_intentions_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentIntentionsSelection = '';

        loadIntentionsList(currentIntentionsSelection, '', 20, '', '');

    } else if (category == 'MINE') {
        document.getElementById('intentions_menu_title').innerHTML = "My Intentions";
        document.getElementById('all_intentions_label').style = "background-color: " + 'none';
        document.getElementById('my_intentions_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('saved_intentions_label').style = "background-color: " + 'none';
        document.getElementById('followed_intentions_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentIntentionsSelection = 'getMyIntentions';

        loadIntentionsList(currentIntentionsSelection, '', 20, '', '');

    } else if (category == 'SAVED') {
        document.getElementById('intentions_menu_title').innerHTML = "Saved Intentions";
        document.getElementById('all_intentions_label').style = "background-color: " + 'none';
        document.getElementById('my_intentions_label').style = "background-color: " + 'none';
        document.getElementById('saved_intentions_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('followed_intentions_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentIntentionsSelection = 'getMySavedIntentions';

        loadIntentionsList(currentIntentionsSelection, '', 20, '', '');
    } else if (category == 'FOLLOWED') {
        document.getElementById('intentions_menu_title').innerHTML = "Followed Intentions";
        document.getElementById('all_intentions_label').style = "background-color: " + 'none';
        document.getElementById('my_intentions_label').style = "background-color: " + 'none';
        document.getElementById('saved_intentions_label').style = "background-color: " + 'none';
        document.getElementById('followed_intentions_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;

        clearPrayerRoomsList();

        currentIntentionsSelection = 'getFollowedIntentions';

        loadIntentionsList(currentIntentionsSelection, '', 20, '', '');
    }
}

function ChangeTestimonialsShown(category) {

    var entries_sorted_by_text = document.querySelector('#testimonialsSideNav .entries_sorted_by_text');
    entries_sorted_by_text.innerHTML = 'Newest';
    entries_sorted_by_text.style.color = '';

    if (category == 'ALL') {
        document.getElementById('testimonials_menu_title').innerHTML = "Testimonials Worldwide";
        document.getElementById('all_testimonials_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('my_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('saved_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('followed_testimonials_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentTestimonialsSelection = '';

        loadTestimonialsList(currentTestimonialsSelection, '', 20, '', '');

    } else if (category == 'MINE') {
        document.getElementById('testimonials_menu_title').innerHTML = "My Testimonials";
        document.getElementById('all_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('my_testimonials_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('saved_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('followed_testimonials_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentTestimonialsSelection = 'getMyTestimonials';

        loadTestimonialsList(currentTestimonialsSelection, '', 20, '', '');

    } else if (category == 'SAVED') {
        document.getElementById('testimonials_menu_title').innerHTML = "Saved Testimonials";
        document.getElementById('all_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('my_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('saved_testimonials_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
        document.getElementById('followed_testimonials_label').style = "background-color: " + 'none';

        clearPrayerRoomsList();

        currentTestimonialsSelection = 'getMySavedTestimonials';

        loadTestimonialsList(currentTestimonialsSelection, '', 20, '', '');
    } else if (category == 'FOLLOWED') {
        document.getElementById('testimonials_menu_title').innerHTML = "Followed Testimonials";
        document.getElementById('all_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('my_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('saved_testimonials_label').style = "background-color: " + 'none';
        document.getElementById('followed_testimonials_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;

        clearPrayerRoomsList();

        currentTestimonialsSelection = 'getFollowedTestimonials';

        loadTestimonialsList(currentTestimonialsSelection, '', 20, '', '');
    }
}

function enterMap() {
    // don't want to show dialog and ask for location in map if coming from this button
    sessionStorage.coming_from_prayer = "false";
    sessionStorage.took_location = "true";
}

function notifyMe() {
    if (Notification.permission !== 'granted')
        Notification.requestPermission();
    else {
        var notification = new Notification('Notification title', {
            icon: 'images/logo2_512_by_512.png',
            body: 'Worldwide prayer is starting soon! Join and become closer to God.',
        });
        notification.onclick = function () {
            window.open('.', "_self");
            // window.focus(); //this.close(); // switch the focus to the tab that called the notification
        };
    }
}

var notificationSent = false;
var notificationSent2 = false;
var timeLeft;
var nextPrayerNum;
function notifyMe() {
    if (Notification.permission !== 'granted')
        Notification.requestPermission();
    else {
        var notification = new Notification('Notification title', {
            icon: 'images/logo2_512_by_512.png',
            body: 'Worldwide prayer is starting soon! Join and become closer to God.',
        });
        notification.onclick = function () {
            window.open('.', "_self");
            // window.focus(); //this.close(); // switch the focus to the tab that called the notification
        };
    }
}


function checkForNotifications() {
    // check whether or not to send notification to user that prayer is starting soon
    if ((nextPrayerNum === 1 && localStorage.getItem("want_notification_for_prayer1")) || (nextPrayerNum === 2 && localStorage.getItem("want_notification_for_prayer2"))
        || (nextPrayerNum === 3 && localStorage.getItem("want_notification_for_prayer3"))) { // check if user has the notification setting turned on for this prayer

        var notificationTime = localStorage.getItem("prayer_notification" + nextPrayerNum + "_time");

        // set default to 5 minutes before prayer in case the user did not set a time
        if (!notificationTime) {
            // console.log("notification time not set for prayer" + nextPrayerNum);
            // check if it is time to send the notification
            if (timeLeft <= 60 * 5 * 1000 && notificationSent === false) { // 5 minutes left, send user notification (will even when website is in background as long as it's open somewhere)
                notificationSent = true;
                if (!localStorage.getItem("prayer" + nextPrayerNum + "_notification_went_off")) { // otherwise when user refreshes page notification will go off again
                    notifyMe();
                    localStorage.setItem("prayer" + nextPrayerNum + "_notification_went_off", true);
                }
            }

            // reset that the notification did not go off so it can go off again
            if (localStorage.getItem("prayer" + nextPrayerNum + "_notification_went_off")) { // if the notification did go off
                if (timeLeft > 60 * 5 * 1000) { // if the user has the notification go off and then comes back the next day with less 5 minutes to go, the notification won't go off again -- but that's a small error
                    localStorage.removeItem("prayer" + nextPrayerNum + "_notification_went_off")
                }
            }

        } else {
            // notification time format is hh:mm (24 hour based, not 12 hour)
            var hourOfNotification = notificationTime.substring(0, notificationTime.indexOf(':'));
            var minuteOfNotification = notificationTime.substring(notificationTime.indexOf(':') + 1, notificationTime.length);
            // convert notification time to milliseconds
            // notificationTimeBeforePrayer = hourOfNotification * 60 * 60 * 1000 + minuteOfNotification * 60 * 1000;
            // convert notification time to a date object in order to get the time left until the notification
            // if (!notificationTimeAsDateSet) {
            var notificationTimeAsDate = new Date();
            notificationTimeAsDate.setHours(hourOfNotification);
            notificationTimeAsDate.setMinutes(minuteOfNotification); // since this gets reset every time the seconds are alway zero; still works though when the now2 minute changes
            // }
            var now2 = new Date().getTime();

            // console.log("notificationTimeAsDate: ", notificationTimeAsDate, "now2: ", now2);

            var timeLeftUntilNotification = notificationTimeAsDate.getTime() - now2;

            // console.log("notificationTimeAsDate: " + notificationTimeAsDate, "timeLeftUntilNotification for prayer" + nextPrayerNum + ": " + timeLeftUntilNotification);

            // check if it is time to send the notification
            if (timeLeftUntilNotification <= 0 && notificationSent === false) { // 5 minutes left, send user notification (will even when website is in background as long as it's open somewhere)
                notificationSent = true;
                if (!localStorage.getItem("prayer" + nextPrayerNum + "_notification_went_off")) { // otherwise when user refreshes page notification will go off again
                    notifyMe();
                    localStorage.setItem("prayer" + nextPrayerNum + "_notification_went_off", true);
                }
            }

            // reset that the notification did not go off so it can go off again
            if (localStorage.getItem("prayer" + nextPrayerNum + "_notification_went_off")) { // if the notification did go off
                if (timeLeftUntilNotification > 0) { // if the user has the notification go off and then comes back the next day after the notification should have gone off, the notification won't go off again -- but that's a small error
                    localStorage.removeItem("prayer" + nextPrayerNum + "_notification_went_off")
                }
            }
        }


    }
}

// start worker that will help with checking if a notification should go off
var notification_worker;
if (typeof (Worker) !== "undefined") {
    if (typeof (notification_worker) == "undefined") {
        notification_worker = new Worker("js/notification-worker.js?version=" + Date.now());
    }
    notification_worker.onmessage = function (event) {
        //   document.getElementById("result").innerHTML = event.data;
        // console.log(event.data);

        timeLeft = event.data[0];
        nextPrayerNum = event.data[1];

        checkForNotifications();

    };
} else {
    // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    console.log("Sorry, your browser does not support Web Workers...");
    // alert("Sorry, your browser does not support Web Workers...");
    // run the code that is in the web worker anyway (just won't run in background)
    var d1, d2, d3;

    // display the times of prayer
    d1 = new Date();
    d1.setUTCMinutes(0);
    d1.setUTCSeconds(0);
    d2 = new Date();
    d2.setUTCMinutes(0);
    d2.setUTCSeconds(0);
    d3 = new Date();
    d3.setUTCMinutes(0);
    d3.setUTCSeconds(0);
    d1.setUTCHours(11);
    d2.setUTCHours(19);
    d3.setUTCHours(1);

    var now;
    var millisTillPrayer1;
    var millisTillPrayer2;
    var millisTillPrayer3;
    var shortestTimeTillPrayer;
    var longestTimeTillPrayer;
    var timeAtNextPrayer;
    var now2;

    setInterval(function () {

        now = new Date();
        millisTillPrayer1 = d1 - now;
        millisTillPrayer2 = d2 - now;
        millisTillPrayer3 = d3 - now;

        if (millisTillPrayer1 < 0) {
            millisTillPrayer1 += 24 * 60 * 60 * 1000; // it's after 10am, try 10am tomorrow.
        }
        if (millisTillPrayer2 < 0) {
            millisTillPrayer2 += 24 * 60 * 60 * 1000;
        }
        if (millisTillPrayer3 < 0) {
            millisTillPrayer3 += 24 * 60 * 60 * 1000;
        }
        if (millisTillPrayer1 < millisTillPrayer2 && millisTillPrayer1 < millisTillPrayer3) {
            shortestTimeTillPrayer = millisTillPrayer1;
            nextPrayerNum = 1;
        }
        if (millisTillPrayer2 < millisTillPrayer1 && millisTillPrayer2 < millisTillPrayer3) {
            shortestTimeTillPrayer = millisTillPrayer2;
            nextPrayerNum = 2;
        }
        if (millisTillPrayer3 < millisTillPrayer1 && millisTillPrayer3 < millisTillPrayer2) {
            shortestTimeTillPrayer = millisTillPrayer3;
            nextPrayerNum = 3;
        }
        longestTimeTillPrayer = millisTillPrayer1;
        if (longestTimeTillPrayer < millisTillPrayer2) {
            longestTimeTillPrayer = millisTillPrayer2;
        }
        if (longestTimeTillPrayer < millisTillPrayer3) {
            longestTimeTillPrayer = millisTillPrayer3;
        }

        timeAtNextPrayer = new Date().getTime() + shortestTimeTillPrayer;

        now2 = new Date().getTime();
        timeLeft = timeAtNextPrayer - now2;


        checkForNotifications();


    }, 1000);
}


function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi,
        function (match) {
            return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
        });
}


function recheckUserAuth() {
    // var checkIfScriptLoaded = function () {
    // setTimeout(function () {
    // timeout--;
    // if (typeof globalFunctions !== 'undefined') {

    // addUserAuthStateChangeListener();

    var user = firebase.auth().currentUser;
    console.log("user:", user);
    console.log("url", location.href);

    if (user) {
        // User is signed in.

        boolean1 = 1;

        username1 = user.displayName;

        if (document.getElementById("username_in_menu")) {
            document.getElementById("username_in_menu").innerHTML = user.displayName;
        }

        if (document.getElementById("sign-in")) {
            document.getElementById("sign-in").childNodes[0].nodeValue = 'Sign Out ';
            document.getElementById("sign-in-icon").src = './images/logout-icon-8a2be2.png';
        }

    } else {
        // No user is signed in.

        boolean1 = 0;

        if (!username1) {
            var xGuest = Math.floor((Math.random() * 100000) + 1);
            var username1Guest = "Guest" + xGuest;
            username1 = username1Guest;
        }

        if (document.getElementById("username_in_menu")) {
            document.getElementById("username_in_menu").innerHTML = username1Guest;
        }

        if (document.getElementById("sign-in")) {
            document.getElementById("sign-in").childNodes[0].nodeValue = 'Sign In/Register ';
            document.getElementById("sign-in-icon").src = './images/login-icon-8a2be2.png';
        }

        console.log("document.getElementById('sign-in')", document.getElementById('sign-in'));
    }

    if (document.getElementById('sign-in')) {
        console.log("sign-in element not null");
        document.getElementById('sign-in').onclick = function () {

            console.log("boolean1", boolean1);

            if (boolean1 == 1) { // user was signed in when they clicked the button; just want to sign out, don't take them to login.html - they can click the button again if they want to go there
                firebase.auth().signOut().then(function () {
                    // Sign-out successful.
                    console.log("user signed out successfully");

                    var a = document.getElementById('sign-in'); //or grab it by tagname etc
                    a.href = "./login";
                    a.childNodes[0].nodeValue = "Sign In/Register ";

                    snackbarMessage.innerHTML = "You have signed out successfully.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    // firebase.auth().onAuthStateChanged() WILL RUN AUTOMATICALLY SO THE USERNAME AND STUFF WILL BE UPDATED AUTOMATICALLY

                }).catch(function (error) {
                    // An error happened.
                    console.log("error trying to sign out: " + error);

                    snackbarMessage.innerHTML = "Sorry, an error occurred when trying to sign out: " + error;
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 7000);
                });

                //document.getElementById("sign-in").textContent = 'Sign In';

            } else { // user was signed out - they want to login
                //}​ else if (boolean1 == 0)  {	

                //document.getElementById("sign-in").textContent = 'Sign Out';
                // var a = document.getElementById('sign-in'); //or grab it by tagname etc
                // a.href = "";

                window.open("./login", "_self");
            }
        }
    }

    if (document.getElementById("your-profile")) {
        document.getElementById("your-profile").onclick = function () {
            if (boolean1 == 1) {
                // user is signed in; go to their profile
                window.open("./user/" + username1, "_self");

            } else {
                // user is a guest; go to world wide feed
                // window.open("./world-faith-feed", "_self");
                snackbarMessage.innerHTML = "Create an account to have a profile!";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            }
        }
    }

    // console.log("loaded");
    // }
    // else if (timeout > 0) {
    // }
    //     else {
    //         // External library failed to load
    //         checkIfScriptLoaded();
    //         console.log("not loaded");
    //     }
    // }, 100);
    // }

    // checkIfScriptLoaded();
}

if ((!document.URL.includes("/pray") && !document.URL.includes("/gather"))) { // prayer page doesn't have the sidenavmenu so don't want this running

    // <!-- SCRIPT FOR HELP WITH SEARCH RESULTS FUNCTIONS -->
    // declaring these variables so they won't be undeclared when loadSearchResults() is called (need these to be global and not just have scope within loadSearchResults() alone)
    var userStoppedTypingInterval;
    var userStopped = true;
    var loadedResults = false;
    var loadedResultsFromScroll = false;
    var firstClickOnSearchBar = true;
    var usernamesList1 = [];
    var lastDocInList;
    var input = document.getElementById('prayer_menu_search_input');
    var searchResultsDiv = document.getElementById("search_results");
    var limit = 0;
    var tempDateTimeList = [];
    var tempPrayerTimeElements = [];
    var searchInput
    var prayerRoomsSearchInput;
    var intentionsSearchInput;
    var testimonialsSearchInput;
    var pearlsSearchInput;
    var usersSearchInput;
    var savedRoomsUsernameList = [];
    var savedRoomsIdList = [];
    var savedIntentionsIdList = [];
    var savedIntentionsUsernameList = [];
    var savedTestimonialsIdList = [];
    var savedTestimonialsUsernameList = [];
    var savedPearlsIdList = [];
    var savedPearlsUsernameList = [];
    var goingToProfile = false;

    function goToProfile(e, listType) {

        goingToProfile = true;

        console.log("e: ", e, "listType: ", listType);

        var index;
        var username_of_creator;

        if (listType == 'intention') {
            index = $('#intentionsSideNav .entry_row_username').index(e);
            username_of_creator = intentionsUsernameList[index];
        } else if (listType == 'testimonial') {
            index = $('#testimonialsSideNav .entry_row_username').index(e);
            username_of_creator = testimonialsUsernameList[index];
        } else if (listType == 'pearls') {
            index = $('#pearlsSideNav .entry_row_username').index(e);
            username_of_creator = pearlsUsernameList[index];
        } else if (listType == 'prayer room') {
            index = $('#myPrayerRoomsSideNav .entry_row_username').index(e);
            username_of_creator = usernameList[index];
        } else if (listType == 'user') {
            index = $('#search_results_users .entry_row_username').index(e);
            username_of_creator = usersUsernameList[index];
        }

        window.open("user/" + username_of_creator, "_self");
    }

    function updateRowTime() {
        // console.log("tempPrayerTimeElements", tempPrayerTimeElements);
        // console.log("tempDateTimeList", tempDateTimeList);

        // right now, tempDateTimeList might look like this: ['1647007200 1647093600', '1644948000', '1644973200', '1645023600 1644976800'] with multiple prayers in same prayer room
        // want to create an array with just the datetimes of the next earliest prayers
        var tempDateTimeListNextPrayers = [];
        for (var i = 0; i < tempDateTimeList.length; i++) {

            tempArr = tempDateTimeList[i].split(' ');
            // console.log('i:', i, 'tempArr:', tempArr);

            // set initial value for the array
            tempDateTimeListNextPrayers[i] = tempArr[0];

            for (var j = 0; j < tempArr.length; j++) {
                if (tempArr[j] < tempDateTimeListNextPrayers[i]) {
                    tempDateTimeListNextPrayers[i] = tempArr[j];
                }
            }
        }

        for (var i = 0; i < tempPrayerTimeElements.length; i++) {
            var timeToShow = '';
            // if (i == 3) {
            //     console.log("Number(tempDateTimeListNextPrayers[i]):", Number(tempDateTimeListNextPrayers[i]), Number((new Date()).getTimezoneOffset() * 60), (Number(tempDateTimeListNextPrayers[i])) + Number((new Date()).getTimezoneOffset() * 60), Number((new Date())));
            // }
            let date = new Date((Number(tempDateTimeListNextPrayers[i]) * 1000)); //- Number((new Date()).getTimezoneOffset() * 60 * 1000));
            let now = new Date();
            // console.log(date, now);
            let diff = date - now;
            let year = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            let month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
            let day = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor(diff / (1000 * 60 * 60));
            let minutes = Math.floor(diff / (1000 * 60));
            let seconds = Math.floor(diff / 1000);
            // if (i == 3) {
            //     console.log(date, now, year, month, day, hours, minutes, seconds);
            // }
            if (year > 0) {
                if (year == 1) {
                    timeToShow = year + " year";
                } else {
                    timeToShow = year + " years";
                }
            } else if (month > 0) {
                if (month == 1) {
                    timeToShow = month + " month";
                } else {
                    timeToShow = month + " months";
                }
            } else if (day > 0) {
                if (day == 1) {
                    timeToShow = day + " day";
                } else {
                    timeToShow = day + " days";
                }
            } else if (hours > 0) {
                if (hours == 1) {
                    timeToShow = hours + " hour";
                } else {
                    timeToShow = hours + " hours";
                }
            } else if (minutes > 0) {
                if (minutes == 1) {
                    timeToShow = minutes + " minute";
                } else {
                    timeToShow = minutes + " minutes";
                }
            } else if (seconds > 0) {
                if (seconds == 1) {
                    timeToShow = seconds + " second";
                } else {
                    timeToShow = seconds + " seconds";
                }
            } else {
                timeToShow = "Praying";
            }

            if (timeToShow.includes("hour")) {
                minutes = minutes - hours * 60
                if (minutes == 1) {
                    timeToShow += "<br/>" + minutes + " minute";
                } else {
                    timeToShow += "<br/>" + minutes + " minutes";
                }

                seconds = seconds - minutes * 60 - hours * 60 * 60
                if (seconds == 1) {
                    timeToShow += "<br/>" + seconds + " second";
                } else {
                    timeToShow += "<br/>" + seconds + " seconds";
                }
            } else if (timeToShow.includes("minute")) {
                seconds = seconds - minutes * 60
                if (seconds == 1) {
                    timeToShow += "<br/>" + seconds + " second";
                } else {
                    timeToShow += "<br/>" + seconds + " seconds";
                }
            }

            // if (i == tempPrayerTimeElements.length - 1) {
            // console.log("date: " + date, "now: " + now, "diff: " + diff);
            // console.log("diff: " + diff, "seconds: " + seconds, "timeToShow: " + timeToShow);
            // }

            tempPrayerTimeElements[i].innerHTML = ' ' + timeToShow;

        }
    }

    // show more results if user scrolls to bottom of current results
    searchResultsDiv.onscroll = function () {
        // 							$().scrollTop()//how much has been scrolled
        // 							$().innerHeight()// inner height of the element
        // 							DOMElement.scrollHeight//height of the content of the element
        // console.log("scrollTop: " + $(this).scrollTop());
        console.log("innerHeight: " + $(this).innerHeight());
        // console.log("scrollHeight: " + $(this)[0].scrollHeight);

        if (!loadedResultsFromScroll) {
            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) { // when user scrolls to bottom of searchResultsDiv
                loadSearchResults(0, 1, currentMenuName);
                loadedResultsFromScroll = true;
            }
        }
    }

    function loadSearchResults(userClicked, calledFromScrolling, menuName) { // userClicked will be 1 if the user clicked to load this function or 0 if the user typed

        currentMenuName = menuName;

        // console.log("userClicked: " + userClicked);

        // reset the interval checking if the user stopped typing every time the user types
        if (!calledFromScrolling && !userClicked) { // the user typed something
            if (userStoppedTypingInterval !== undefined) {
                clearTimeout(userStoppedTypingInterval);
                if (userStopped) {
                    loadedResults = false;
                }
            }
            userStoppedTypingInterval = setTimeout(function () {
                //  console.log("userStopped = true");
                if (!loadedResults) {
                    // if user typed (or cleared their result) when userStopped was false and then finishes their input, the query wouldn't go through without calling loadSearchResults() again
                    usernamesList1 = [];
                    loadSearchResults(0, 0, currentMenuName);
                    // setTimeout(function() {loadSearchResults(0,0, menuName)}, 2000);
                }
                userStopped = true;
            }, 200);
        }

        if (!calledFromScrolling) {
            lastDocInList = undefined; // need to reset or else searching when typing won't work right
        }

        // Declare variables
        var dbSearchRef = undefined, searchInput, dateandtimesUsersCreatedList = [],
            numRoomsGettingFromDatabase = 20, wordAfterInputText, wordToBeGreaterThan, lastLetterOfWordAfterInputText, i = 0;

        if (currentMenuName == 'PRAYERROOMS') {
            input = document.getElementById("prayer_menu_search_input");
        } else if (currentMenuName == 'INTENTIONS') {
            input = document.getElementById("intentions_menu_search_input");
        } else if (currentMenuName == 'TESTIMONIALS') {
            input = document.getElementById("testimonials_menu_search_input");
        } else if (currentMenuName == 'PEARLS') {
            input = document.getElementById("pearls_menu_search_input");
        } else if (currentMenuName == 'SEARCH_USERS') {
            input = document.getElementById("search_for_users_input");
        }

        if (input.value.length > 0) {
            searchInput = input.value.toLowerCase();
        }

        // only let the run every second (if user types fast, no point in doing a billion searches, just do the search when they stop typing)
        if (userStopped || firstClickOnSearchBar || calledFromScrolling) {
            userStopped = false;
            loadedResults = true;

            // console.log("userClicked: " + userClicked + " usernamesList1.length: " + usernamesList1.length);
            // if (!userClicked && roomNameList.length > 0 && !calledFromScrolling) { // if the user is typing a new query, remove the results from the previous one
            //     removeSearchResults(userClicked);
            //     roomNameList = [];
            //     // console.log('username list cleared');
            // }

            // console.log("firstClick: " + firstClickOnSearchBar);
            // DO THE CORRECT QUERY DEPENDING ON WHAT THE USER TYPES IN (OR IF HE/SHE JUST CLICKED THE SEARCH BAR)
            // if ((userClicked === 1 && firstClickOnSearchBar) || input.value.length === 0) {
            // if (input.value.length === 0) {
            //     console.log("clicking with no input");
            //     // console.log("lastDocInList: " + lastDocInList);
            //     if (lastDocInList !== undefined) {
            //         query = 'mostRecent'; // this gets the newest rooms
            //         limit = 0;
            //     }
            //     else {
            //         query = 'mostRecent'; // this gets the newest rooms
            //         limit = numRoomsGettingFromDatabase;
            //     }
            // }
            // // else if (userClicked === 0 && input.value.length === 1) {
            // else if (input.value.length === 1) {
            //     wordAfterInputText = String.fromCharCode(searchInput.charCodeAt(0) + 1);

            //     wordToBeGreaterThan = "                                                                                !"; // hopefully no username will be earlier than this alphabetically (won't come up in query if is)
            //     if (roomNameList.length > 0) {
            //         wordToBeGreaterThan = roomNameList[roomNameList.length - 1];
            //         //                String lastLetterOfLastWordInListPlusOne = String.valueOf(((int) wordToBeGreaterThan.charAt(wordToBeGreaterThan.length()-1))+1);
            //         //                wordToBeGreaterThan = wordToBeGreaterThan.substring(0, wordToBeGreaterThan.length()-1).concat(lastLetterOfLastWordInListPlusOne);
            //     }

            //     if (lastDocInList !== undefined) {
            //         startAfter = idList[roomNameList.length - 1];
            //         limit = numRoomsGettingFromDatabase;
            //     } else {
            //         limit = numRoomsGettingFromDatabase;
            //     }

            //     console.log("1 char input: " + searchInput + " wordToBeGreaterThan: " + wordToBeGreaterThan + " wordAfterInputText: " + wordAfterInputText);
            // } else { // search input text is more than 1 letter

            //     // if inputtext is bar, we want to get bas, then query strings >= bar but less than bas to get all users in the database containing bar

            //     // get everything but last letter of input text
            //     wordAfterInputText = searchInput.substring(0, searchInput.length - 1);
            //     // append the letter after the last letter of the input text
            //     lastLetterOfWordAfterInputText = String.fromCharCode(searchInput.charCodeAt(searchInput.length - 1) + 1);
            //     wordAfterInputText = wordAfterInputText.concat(lastLetterOfWordAfterInputText);

            //     wordToBeGreaterThan = "                                                                                !"; // hopefully no username will be earlier than this alphabetically (won't come up in query if is)
            //     if (usernamesList1.length > 0) {
            //         wordToBeGreaterThan = usernamesList1[usernamesList1.length - 1];
            //         //                String lastLetterOfLastWordInListPlusOne = String.valueOf(((int) wordToBeGreaterThan.charAt(wordToBeGreaterThan.length()-1))+1);
            //         //                wordToBeGreaterThan = wordToBeGreaterThan.substring(0, wordToBeGreaterThan.length()-1).concat(lastLetterOfLastWordInListPlusOne);
            //     }


            //     //    System.out.println("text: " + text + " lastLetterOfWordAfterInputText: " + lastLetterOfWordAfterInputText + " wordAfterInputText: "+ wordAfterInputText);

            //     if (lastDocInList !== undefined) {
            //         startAfter = idList[roomNameList.length - 1];
            //         limit = numRoomsGettingFromDatabase;
            //     } else {
            //         limit = numRoomsGettingFromDatabase;
            //     }

            //     console.log(">1 char input: " + searchInput + " wordToBeGreaterThan: " + wordToBeGreaterThan + " wordAfterInputText: " + wordAfterInputText);
            // }

            // // DO THE QUERY AND SHOW THE RESULTS
            // searchResultsDiv.style.display = "block"; // the class "w3-dropdown-content" sets display to "none" so need to do this to show the results

            // if (isMobile) { // idk why but won't show on phone when display is block
            //     searchResultsDiv.style.display = "contents";
            // }

            // if (firstClickOnSearchBar) {
            // console.log("loading things based on search input");
            clearPrayerRoomsList();
            console.log("currentMenuName: ", currentMenuName, 'searchInput: ', searchInput);
            if (currentMenuName == 'PRAYERROOMS') {
                prayerRoomsSearchInput = searchInput;
                loadPrayerRoomsList(currentRoomsSelection, '', 10, prayerRoomsSearchInput, 'ASC');
            } else if (currentMenuName == 'INTENTIONS') {
                intentionsSearchInput = searchInput;
                loadIntentionsList(currentIntentionsSelection, '', 10, intentionsSearchInput, 'ASC')
            } else if (currentMenuName == 'TESTIMONIALS') {
                testimonialsSearchInput = searchInput;
                loadTestimonialsList(currentTestimonialsSelection, '', 10, testimonialsSearchInput, 'ASC')
            } else if (currentMenuName == 'PEARLS') {
                pearlsSearchInput = searchInput;
                loadPearlsList(currentPearlsSelection, '', 10, pearlsSearchInput, 'ASC')
            } else if (currentMenuName == 'SEARCH_USERS') {
                usersSearchInput = searchInput;
                loadUsersList(usersSearchInput, 10);
            }
            // }

            // it's no longer the user's first click on the searchbar
            firstClickOnSearchBar = false;
        }
    }

    function loadUsersList(usersSearchInput, limit) {
        console.log(numUsersRetrievedFromSearch, usersSearchInput, limit);
        $.ajax({
            type: "POST",
            url: "update_count.php",
            data: {
                action: 'getUsers',
                searchInput: usersSearchInput,
                start: numUsersRetrievedFromSearch,
                limit: limit
            },
            success: function (response) {
                console.log("response:", response);// response.responseText);

                response = JSON.parse(response);

                console.log("response parsed:", response);

                parseGetUsersResponse(response);


                if (response['error'] == true) {
                    snackbarMessage.innerHTML = "An error occurred. Sorry, we could not get any users.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response['error'] == false) {

                    if (location.href.includes('/my_profile.php') || location.href.includes('/user/')) {
                        // function located in my_profile.js; show users in a list there
                        addUsersToList();
                    }
                } else {
                    // could just be that the search input didn't return any users
                    // snackbarMessage.innerHTML = "An error occurred. Sorry, we could not get any users.";
                    // snackbarMessage.className = "show";
                    // setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                }

            },
            error: function (error) {
                console.log("There was an error trying to get users:", error);
            }
        });
    }

    function goToUsersProfileFunction() {
        numRow = $('#search_results_users .room_row_info_container').index(this);

        if (numRow < 0) {
            numRow = $('#user_rows_sidenav .room_row_info_container').index(this);
        }

        console.log("numRow: " + numRow, "username1: " + usersUsernameList[numRow]);

        window.open("./user/" + usersUsernameList[numRow]);
    }

    function addUsersToList() {

        for (var numRow = numRowsTemp; numRow < numUsersRetrievedFromSearch; numRow++) {

            var userRow = document.createElement("a");
            userRows[numRow] = userRow;
            userRow.className = "btn btn-info menu-list-item prayer_room_row";
            document.getElementById("search_results_users").appendChild(userRow);

            var infoContainer = document.createElement("div");
            infoContainer.className = "room_row_info_container";
            infoContainer.onclick = goToUsersProfileFunction;
            userRow.appendChild(infoContainer);

            var profilePic = document.createElement("img");
            profilePic.className = "w3-circle room_row_profile_pic";
            profilePic.onerror = function (event) {
                this.src = default_profile_pic;
            };
            profilePic.src = usersProfilePicRefList[numRow];
            infoContainer.appendChild(profilePic);

            var usernameElement = document.createElement("div");
            usernameElement.className = "room_row_name";
            if (usersUsernameList[numRow]) {
                usernameElement.innerHTML = ' ' + usersUsernameList[numRow].split("\n").join("<br>");
                console.log("usersSearchInput", usersSearchInput)
                if (usersSearchInput != undefined) {
                    var markJSInstance = new Mark(usernameElement);
                    markJSInstance.mark(usersSearchInput);
                }
            } else {
                usernameElement.innerHTML += 'User ' + (numRow + 1); // roomCounter starts at 0
            }
            infoContainer.appendChild(usernameElement);

            var aboutMeElement = document.createElement("div");
            aboutMeElements[numRow] = aboutMeElement;
            aboutMeElement.className = "about_me_element";
            aboutMeElement.innerHTML = usersAboutMeList[numRow];
            userRow.appendChild(aboutMeElement);

            var secondRowContainer = document.createElement("div");
            secondRowContainer.className = "room_second_row_container";
            userRow.append(secondRowContainer);

            var optionsContainer = document.createElement("div");
            optionsContainer.className = "room_options_container";
            secondRowContainer.append(optionsContainer);

            // var followUser = document.createElement("img");
            // followUser.className = "room_row_savebtn";
            // followUser.src = "images/save_icon_purple.png";
            // followUser.onclick = followUserFunction;
            // optionsContainer.appendChild(followUser);

            // console.log('testimonialsIdList:', testimonialsIdList, 'idList[numRow]:', idList[numRow]);
            // if (!username || !isUserLoggedIn || followedUsersIDList.includes(followedUsersIDList[numRow])) { // if the prayer room has already been saved by the user, don't show the option to save it
            //     followUser.style.display = 'none';
            // }

            // add a button to report rooms that aren't the user's
            if (username != usersUsernameList[numRow]) {
                var reportUser = document.createElement("img")
                reportUser.className = "room_row_reportbtn";
                reportUser.src = "images/report_icon_purple.png";
                reportUser.onclick = function () {
                    reportEntryFunction(this, 'user')
                };
                optionsContainer.appendChild(reportUser);
            }


            userRow.style.opacity = 1;
            userRow.style.transform = 'scale(1)';

        }

        numRowTemp = numUsersRetrievedFromSearch;

    }

    function parseGetUsersResponse(response) {


        // id | first_name | last_name | username1 | email | encrypted_password | salt | gender | dob | confirm | profile_pic_ref | banner_pic_ref
        // | About_Me | username1_lowercase | dateandtime | current_location | numPosts | numComments | numLikes | numDislikes | numFollowers
        // | numFollowing

        numUsersRetrievedFromSearch += response["user"]["numUsers"]


        // console.log("numPrayerRooms: ", numPrayerRooms);
        let usersIDListTemp = response['user']['id'];
        let usersFirstNameListTemp = response['user']['first_name'];
        let usersLastNameListTemp = response['user']['last_name'];
        let usersUsernameListTemp = response['user']['username1'];
        let usersEmailListTemp = response['user']['email'];
        let usersGenderListTemp = response['user']['gender'];
        let usersDOBListTemp = response['user']['dob'];
        let usersProfilePicRefListTemp = response['user']['profile_pic_ref'];
        let usersBannerPicRefListTemp = response['user']['banner_pic_ref'];
        let usersAboutMeListTemp = response['user']['About_Me'];
        let usersUsername1LowercaseListTemp = response['user']['username1_lowercase'];
        let usersDateandtimeListTemp = response['user']['dateandtime'];
        let usersCurrentLocationListTemp = response['user']['current_location'];
        let usersNumPostsListTemp = response['user']['numPosts'];
        let usersNumCommentsListTemp = response['user']['numComments'];
        let usersNumLikesListTemp = response['user']['numLikes'];
        let usersNumDislikesListTemp = response['user']['numDislikes'];
        let usersNumFollowersListTemp = response['user']['numFollowers'];
        let usersNumFollowingListTemp = response['user']['numFollowing'];

        console.log("usersUsernameListTemp", usersUsernameListTemp);
        console.log("usersEmailListTemp", usersEmailListTemp);

        if (usersUsernameListTemp) {

            // find = '\\u2019';
            // replace = "\'";
            // usersUsernameListTemp = usersUsernameListTemp.replace(new RegExp(escapeRegExp(find), 'g'), replace);


            usersIDList.push(...usersIDListTemp); // it has ints not strings so no ""
            usersFirstNameList.push(...usersFirstNameListTemp);
            usersLastNameList.push(...usersLastNameListTemp);
            usersUsernameList.push(...usersUsernameListTemp);
            usersEmailList.push(...usersEmailListTemp);
            usersGenderList.push(...usersGenderListTemp);
            usersDOBList.push(...usersDOBListTemp);
            usersProfilePicRefList.push(...usersProfilePicRefListTemp);
            usersBannerPicRefList.push(...usersBannerPicRefListTemp);
            usersAboutMeList.push(...usersAboutMeListTemp);
            usersUsername1LowercaseList.push(...usersUsername1LowercaseListTemp);
            usersDateandtimeList.push(...usersDateandtimeListTemp);
            usersCurrentLocationList.push(...usersCurrentLocationListTemp);
            usersNumPostsList.push(...usersNumPostsListTemp);
            usersNumCommentsList.push(...usersNumCommentsListTemp);
            usersNumLikesList.push(...usersNumLikesListTemp);
            usersNumDislikesList.push(...usersNumDislikesListTemp);
            usersNumFollowersList.push(...usersNumFollowersListTemp);
            usersNumFollowingList.push(...usersNumFollowingListTemp);

        }

        console.log("usersUsernameList: ", usersUsernameList);
        console.log("usersAboutMeList: ", usersAboutMeList);

    }

    function clearPrayerRoomsList() {
        idList = [];
        creatorNameList = [];
        roomNameList = [];
        usernameList = [];
        profilePicList = [];
        roomPasswordList = [];
        textRefList = [];
        backgroundRefList = [];
        musicRefList = [];
        recordingRefList = [];
        prayerLengthList = [];
        prayerDatetimeList = [];
        afterPrayerTextRefList = [];
        descriptionTextRefList = [];
        prayerIsRecurringList = [];
        timeToDeleteOrRenewPrayerList = [];
        minutesBetweenPrayersList = [];
        hoursBetweenPrayersList = [];
        daysBetweenPrayersList = [];
        numRepeatsList = [];
        tagsList = [];
        prayerRoomsReactsArrays = [];

        pearlsIDList = [];
        pearlsUsernameList = [];
        pearlsProfilePicRefList = [];
        pearlsCreatorNameList = [];
        pearlsTitleList = [];
        pearlsRoomPasswordList = [];
        pearlsTextRefList = [];
        pearlsBackgroundRefList = [];
        pearlsMusicRefList = [];
        pearlsDateandtimeVisibleList = [];
        pearlsDateandtimeCreatedList = [];
        pearlsTagsList = [];
        pearlsReactsArrays = [];

        intentionsIDList = [];
        intentionsUsernameList = [];
        intentionsTitleList = [];
        intentionsTextRefList = [];
        intentionsTagsList = [];
        intentionsDateandtimeList = [];
        intentionsProfilePicList = [];
        intentionsReactsArrays = [];

        testimonialsIDList = [];
        testimonialsUsernameList = [];
        testimonialsTitleList = [];
        testimonialsTextRefList = [];
        testimonialsTagsList = [];
        testimonialsDateandtimeList = [];
        testimonialsProfilePicRefList = [];
        testimonialsReactsArrays = [];

        usersIDList = [];
        usersFirstNameList = [];
        usersLastNameList = [];
        usersUsernameList = [];
        usersEmailList = [];
        usersGenderList = [];
        usersDOBList = [];
        usersProfilePicRefList = [];
        usersBannerPicRefList = [];
        usersAboutMeList = [];
        usersUsername1LowercaseList = [];
        usersDateandtimeList = [];
        usersCurrentLocationList = [];
        usersNumPostsList = [];
        usersNumCommentsList = [];
        usersNumLikesList = [];
        usersNumDislikesList = [];
        usersNumFollowersList = [];
        usersNumFollowingList = [];

        numUsersRetrievedFromSearch = 0;
        numRowsTemp = 0;
        numRowsRetrieved = 0;
        roomCounter = 0;
        noPrayerRoomsMessageAppended = false;

        prayerRoomRows = [];
        intentionRows = [];
        testimonialRows = [];
        savePrayerRoomButtons = [];
        prayerTimeElements = [];
        intentionTextElements = [];
        testimonialTextElements = [];

        pearlsRows = [];
        pearlsTextElements = [];


        var roomsMenuList = document.getElementById('myRoomsMenuList');
        var intentionsMenuList = document.getElementById('intentionsMenuList');
        var testimonialsMenuList = document.getElementById('testimonialsMenuList');
        var pearlsMenuList = document.getElementById('pearlsMenuList');
        if (openSideNavs[openSideNavs.length - 1] == 'PRAYERROOMS') {
            while (roomsMenuList.hasChildNodes()) {
                roomsMenuList.removeChild(roomsMenuList.lastChild);
            }
        }
        if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
            while (intentionsMenuList.hasChildNodes()) {
                intentionsMenuList.removeChild(intentionsMenuList.lastChild);
            }
        }
        if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
            while (testimonialsMenuList.hasChildNodes()) {
                testimonialsMenuList.removeChild(testimonialsMenuList.lastChild);
            }
        }
        if (openSideNavs[openSideNavs.length - 1] == 'PEARLS') {
            while (pearlsMenuList.hasChildNodes()) {
                pearlsMenuList.removeChild(pearlsMenuList.lastChild);
            }
        }
        if (currentMenuName == 'SEARCH_USERS') {
            while (document.getElementById("search_results_users").hasChildNodes()) {
                document.getElementById("search_results_users").removeChild(document.getElementById("search_results_users").lastChild);
            }
        }

        if (updateRowTimesInterval) {
            clearInterval(updateRowTimesInterval);
        }
    }

    function removeSearchResults(userClicked) {
        // check if search bar has focus
        var searchBar = document.getElementById('search-form-container');
        var searchBarHasFocus = (document.activeElement === searchBar);

        if ((userClicked && !searchBarHasFocus) || !userClicked) { // user clicked outside of search bar - stop showing the results | or user typed in new query, remove previous results
            firstClickOnSearchBar = true; // reset that the user hasn't clicked on the searchbar yet
            var searchResults = document.getElementById('search_results');
            while (searchResults.hasChildNodes()) {
                searchResults.removeChild(searchResults.lastChild);
            }
        }

    }

    // load more rooms when the user scrolls to the bottom of the list
    $('#myPrayerRoomsSideNav').scroll(function () {
        // console.log('document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom', document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom)
        // console.log('document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom', document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom);
        if (document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom
            - document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom - 30 <= 0 && (idList.length > 5)) {
            loadPrayerRoomsList(currentRoomsSelection, 'mostRecent', 10, prayerRoomsSearchInput, '');
        }
    });

    function goToPrayerRoomFunction(e) {

        if (goingToProfile) { // username of the post was clicked
            return;
        }

        numRow = $('#myPrayerRoomsSideNav .prayer_room_row').index(this.parentElement);

        if (numRow == -1) {
            numRow = $('#myPrayerRoomsSideNav .prayer_room_row').index(this.parentElement.parentElement);
        }

        console.log("numRow: " + numRow, "id: " + idList[numRow], "textRef: " + textRefList[numRow]);

        window.open("PrayerRoom/" + idList[numRow], "_self");
    }

    function savePrayerRoomFunction(e) {

        if (!username || !isUserLoggedIn) { // if the prayer room has already been saved by the user, don't show the option to save it
            snackbarMessage.innerHTML = "Login to save prayer rooms!";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            return;
        }

        numRow = $('#myPrayerRoomsSideNav .room_row_savebtn').index(this);

        roomID = idList[numRow];

        console.log("Saving prayer room. this: " + this + ", numRow: " + numRow + ", roomID: " + roomID);

        $.ajax({
            type: "POST",
            url: "create_prayer_room_functions.php",
            data: {
                action: 'saveOtherPrayerRoom',
                username: username,
                roomID: roomID
            },
            success: function (response) {
                console.log("response:", response);// response.responseText);

                if (response.includes('Prayer room not saved for some reason.')) {
                    snackbarMessage.innerHTML = "An error occurred. Sorry, the prayer room was not saved.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('Prayer room successfully saved!')) {
                    snackbarMessage.innerHTML = "Prayer room saved!";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    $('#myPrayerRoomsSideNav .room_row_savebtn')[numRow].style.display = 'none';
                } else if (response.includes('Prayer room already saved for this user.')) {
                    snackbarMessage.innerHTML = "Prayer room has already been saved.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    $('#myPrayerRoomsSideNav .room_row_savebtn')[numRow].style.display = 'none';
                }

            },
            error: function (error) {
                console.log("There was an error saving the prayer room:", error);
            }
        });
    }

    function editPrayerRoomFunction(e) {

        console.log(this);

        var numRowWithEditButton = $('#myPrayerRoomsSideNav .room_row_editbtn').index(this);
        // console.log("numRowWithEditButton: " + numRowWithEditButton);
        var count = -1;
        var numRow = -1;
        for (var i = 0; i < usernameList.length; i++) { // doing this because user could click to edit the room from the 'All Prayer Rooms' menu for instance so not all would have the 'room_row_editbtn' class
            // console.log("username: " + username + " | usernameList[i]: " + usernameList[i]);
            if (username == usernameList[i]) {
                count++;
                // console.log("count: " + count);
                if (count == numRowWithEditButton) {
                    numRow = i;
                    break;
                }
            }
        }

        // if already in the create-prayer-room page, no need to reload the page just input the info of the room where it goes
        if (document.URL.includes("/create-prayer-room")) {

            // console.log("calling getPrayerRoomSettings()");
            getSinglePrayerRoom(numRow);
            getPrayerRoomSettings(0, 0, reset_slides = true);

            return;
        } else {
            window.open("create-prayer-room/roomID/" + idList[numRow], "_self");
        }
    }

    function loadPrayerRoomsList(action, query, limit, prayerRoomsSearchInput, orderBy, sortBy, category) {

        if (sortBy) {
            php_url = 'create_prayer_room_functions.php';
        } else {
            php_url = "create_prayer_room_functions.php";
        }

        console.log("loadPrayerRoomsListTriggered", loadPrayerRoomsListTriggered);
        if (!loadPrayerRoomsListTriggered) {
            loadPrayerRoomsListTriggered = true;

            numCalled++;
            console.log("NUMBER OF TIMES CALLED:", numCalled);

            var menu_list = document.getElementById("myRoomsMenuList");

            if (!action) {
                console.log("loading default action (getting all prayer rooms)");
                action = 'getPrayerRooms';
                usernameInput = '';
                document.getElementById('my_rooms_menu_title').innerHTML = "Prayer Rooms Worldwide";
                document.getElementById('all_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('my_rooms_label').style = "background-color: " + 'none';
                document.getElementById('saved_rooms_label').style = "background-color: " + 'none';
                document.getElementById('followed_rooms_label').style = "background-color: " + 'none';
            } else if (action == 'getMyPrayerRooms') {
                usernameInput = username;
                document.getElementById('my_rooms_menu_title').innerHTML = "My Prayer Rooms";
                document.getElementById('all_rooms_label').style = "background-color: " + 'none';
                document.getElementById('my_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('saved_rooms_label').style = "background-color: " + 'none';
                document.getElementById('followed_rooms_label').style = "background-color: " + 'none';
            } else if (action == 'getMySavedPrayerRooms') {
                usernameInput = username;
                document.getElementById('my_rooms_menu_title').innerHTML = "Saved Prayer Rooms";
                document.getElementById('all_rooms_label').style = "background-color: " + 'none';
                document.getElementById('my_rooms_label').style = "background-color: " + 'none';
                document.getElementById('saved_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('followed_rooms_label').style = "background-color: " + 'none';
            } else if (action == 'getFollowedPrayerRooms') {
                usernameInput = username;
                document.getElementById('my_rooms_menu_title').innerHTML = "Followed Prayer Rooms";
                document.getElementById('all_rooms_label').style = "background-color: " + 'none';
                document.getElementById('my_rooms_label').style = "background-color: " + 'none';
                document.getElementById('saved_rooms_label').style = "background-color: " + 'none';
                document.getElementById('followed_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
            }

            $.ajax({
                type: "POST",
                url: "create_prayer_room_functions.php",
                data: {
                    action: 'getSavedRoomsByUsername',
                    username: username
                },
                success: function (response2) {
                    console.log("response2:", response2);// response.responseText);

                    numRows = response2.slice(response2.indexOf("numPrayerRooms") + "numPrayerRooms".length + 2);
                    numRows = numRows.substring(0, numRows.length - 1);
                    // console.log("numRows: ", numRows);
                    var usernameListString;
                    var idListString;

                    usernameListString = response2.split(",", numRows).toString();
                    // console.log("usernameListString1: " + usernameListString);
                    response2 = response2.substring(response2.indexOf(usernameListString) + usernameListString.length + 1);

                    idListString = response2.split(",", numRows).toString();
                    console.log("idListString: " + idListString);
                    response2 = response2.substring(response2.indexOf(idListString) + idListString.length + 1);

                    usernameListString = usernameListString.substring(usernameListString.indexOf(":") + 1, usernameListString.length);
                    usernameListString = usernameListString.substring(2, usernameListString.length - 2);

                    idListString = idListString.substring(idListString.indexOf(":") + 1, idListString.length);
                    idListString = idListString.substring(1, idListString.length - 1); // 1 instead of 2 because it's ints not strings with ""
                    console.log('idListString2: ' + idListString);

                    savedRoomsUsernameList = usernameListString.split('","');
                    savedRoomsIdList = idListString.split(',');
                    // console.log("savedRoomsIdList2:", savedRoomsIdList);
                    // savedRoomsIdList = savedRoomsIdList.map(Number); // convert to array of ints

                    // console.log("numRowsRetrieved", numRowsRetrieved);

                    console.log("action:", action);

                    // CAN'T POST AN ARRAY TO THE PHP FILE FOR SOME REASON SO CAN SEND THE ARRAY OF ROOMIDS THAT THE USER SAVED TO ONLY GET THOSE
                    // SO IN THE FUNCTION ASKING FOR THE USER'S SAVED ROOMS AM JUST CHECKING AGAIN WHICH ROOM IDS THEY HAVE SAVED IN THE DATABASE
                    // IT'S A NONIDEAL NUMBER OF READS BUT DON'T KNOW HOW ELSE TO DO IT
                    $.ajax({
                        type: "POST",
                        url: php_url,
                        data: {
                            action: action,
                            query: query,
                            start: numRowsRetrieved,
                            limit: limit,
                            searchInput: prayerRoomsSearchInput,
                            orderBy: orderBy,
                            username: usernameInput,
                            sortBy: sortBy,
                            entryType: 'prayer room',
                            category: category
                        },
                        // data: JSON.stringify([1, 2, 3]),
                        // dataType: "json",
                        // contentType: 'application/json; charset=utf-8',
                        success: function (response) {

                            roomsWereRetrieved = parsePrayerRoomResponse(response);

                            // if person is looking at their created prayer rooms but there aren't any show a message saying they can create one
                            if (action == 'getMyPrayerRooms' && roomsWereRetrieved == 0 && !noPrayerRoomsMessageAppended) {
                                var createPrayerRoomButton = document.createElement("a");
                                createPrayerRoomButton.className = "btn btn-info menu-list-item prayer_room_row cursor-pointer";
                                createPrayerRoomButton.innerHTML = "You have no prayer rooms. Create one here!"
                                createPrayerRoomButton.onclick = function () {
                                    window.open('./create-prayer-room');
                                };

                                menu_list.appendChild(createPrayerRoomButton);
                                noPrayerRoomsMessageAppended = true;
                            }

                            console.log('numRowsRetrieved', numRowsRetrieved);

                            for (roomCounter; roomCounter < numRowsRetrieved; roomCounter++) {
                                // console.log("roomCounter:", roomCounter);
                                var prayerRoomRow = document.createElement("a");
                                prayerRoomRow.className = "btn btn-info menu-list-item prayer_room_row";

                                menu_list.appendChild(prayerRoomRow);

                                var roomInfoContainer = document.createElement("div");
                                roomInfoContainer.className = "room_row_info_container";
                                roomInfoContainer.onclick = goToPrayerRoomFunction;
                                prayerRoomRow.appendChild(roomInfoContainer);
                                prayerRoomRows[roomCounter] = prayerRoomRow;

                                var profilePic = document.createElement("img");
                                profilePic.className = "w3-circle room_row_profile_pic";
                                profilePic.onerror = function (event) {
                                    this.src = default_profile_pic;
                                };
                                profilePic.src = profilePicList[roomCounter];
                                roomInfoContainer.appendChild(profilePic);

                                var username_div = document.createElement("div");
                                username_div.className = "entry_row_username";
                                if (usernameList[roomCounter]) {
                                    username_div.innerHTML = usernameList[roomCounter];
                                    username_div.onclick = function () {
                                        goToProfile(this, "prayer room");
                                    }
                                    if (prayerRoomsSearchInput != undefined) {
                                        var markJSInstance = new Mark(username_div);
                                        markJSInstance.mark(prayerRoomsSearchInput);
                                    }
                                }
                                roomInfoContainer.appendChild(username_div)

                                var last_update_datetime = document.createElement('div');
                                last_update_datetime.className = "entry_row_datetime";
                                if (prayerDatetimeList[roomCounter]) {
                                    // get the next closest datetime
                                    let dateandtimesOfRoom = prayerDatetimeList[roomCounter].split(' ');
                                    var closestDateandtimeToNow = dateandtimesOfRoom[0];
                                    var numPrayerInRoom = 0;
                                    numPrayerInRoom = 0;
                                    for (var i = 1; i < dateandtimesOfRoom.length; i++) {
                                        if (dateandtimesOfRoom[i] < closestDateandtimeToNow) {
                                            closestDateandtimeToNow = dateandtimesOfRoom[i];
                                            numPrayerInRoom = i;
                                        }
                                    }
                                    // last_update_datetime.innerHTML = prayerDatetimeList[numPrayerInRoom];
                                    let datetime_as_date = new Date(Number(closestDateandtimeToNow) * 1000);
                                    let formatted_datetime = (/^\d$/.test((datetime_as_date.getMonth() + 1)) ? '0' + (datetime_as_date.getMonth() + 1) : (datetime_as_date.getMonth() + 1)) +
                                        "/" + (/^\d$/.test(datetime_as_date.getDate()) ? '0' + datetime_as_date.getDate() : (datetime_as_date.getDate())) +
                                        "/" + String(datetime_as_date.getFullYear()).substring(2, 4) +
                                        " " + (/^\d$/.test(datetime_as_date.getHours()) ? '0' + datetime_as_date.getHours() : datetime_as_date.getHours()) +
                                        ":" + (/^\d$/.test(datetime_as_date.getMinutes()) ? '0' + datetime_as_date.getMinutes() : datetime_as_date.getMinutes());

                                    last_update_datetime.innerHTML = formatted_datetime;
                                }
                                roomInfoContainer.appendChild(last_update_datetime);


                                var reactsContainer = document.createElement("div");
                                reactsContainer.className = "reacts_container";
                                prayerRoomRow.appendChild(reactsContainer);

                                // display the emojis and their numbers
                                displayReacts(reactsContainer, prayerRoomsReactsArrays, roomCounter, 'prayer room');


                                var roomName = document.createElement("div");
                                roomName.className = "room_row_name";
                                roomName.onclick = goToPrayerRoomFunction;
                                roomName.innerHTML = roomNameList[roomCounter];
                                if (prayerRoomsSearchInput != undefined) {
                                    var markJSInstance = new Mark(roomName);
                                    markJSInstance.mark(prayerRoomsSearchInput);
                                }
                                if (!roomNameList[roomCounter]) {
                                    roomName.innerHTML += 'Room ' + (roomCounter + 1); // roomCounter starts at 0
                                }
                                prayerRoomRow.appendChild(roomName);

                                var tagsRowContainer = document.createElement("div");
                                tagsRowContainer.className = "tags_row_container";
                                prayerRoomRow.append(tagsRowContainer);

                                var tags = document.createElement("div");
                                tags.className = "intention_row_category";
                                if (tagsList[roomCounter]) {
                                    tags.innerHTML = ' ' + tagsList[roomCounter].replace(new RegExp(escapeRegExp('||||| '), 'g'), ', ').replace(new RegExp(escapeRegExp('\\/'), 'g'), '/');
                                }
                                tagsRowContainer.appendChild(tags);
                                if (prayerRoomsSearchInput != undefined) {
                                    var markJSInstance = new Mark(tags);
                                    // console.log("markJSInstance", markJSInstance, "tags", tags, "prayerRoomsSearchInput", prayerRoomsSearchInput);
                                    markJSInstance.mark(prayerRoomsSearchInput);
                                }

                                var secondRowContainer = document.createElement("div");
                                secondRowContainer.className = "room_second_row_container";
                                prayerRoomRow.append(secondRowContainer);

                                var prayerTime = document.createElement("div");
                                prayerTime.className = "room_row_time";
                                prayerTime.onclick = goToPrayerRoomFunction;
                                // var timeToShow = '';
                                // let date = new Date((Number(prayerDatetimeList[roomCounter]) * 1000));// - Number((new Date()).getTimezoneOffset() * 60 * 1000));
                                // let now = new Date();
                                // // console.log(date, now);
                                // let diff = date - now;
                                // // console.log("date: " + date, "now: " + now, "diff: " + diff);
                                // let year = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
                                // let month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
                                // let day = Math.floor(diff / (1000 * 60 * 60 * 24));
                                // let hours = Math.floor(diff / (1000 * 60 * 60));
                                // let minutes = Math.floor(diff / (1000 * 60));
                                // let seconds = Math.floor(diff / 1000);
                                // if (year > 0) {
                                //     if (year == 1) {
                                //         timeToShow = year + " year";
                                //     } else {
                                //         timeToShow = year + " years";
                                //     }
                                // } else if (month > 0) {
                                //     if (month == 1) {
                                //         timeToShow = month + " month";
                                //     } else {
                                //         timeToShow = month + " months";
                                //     }
                                // } else if (day > 0) {
                                //     if (day == 1) {
                                //         timeToShow = day + " day";
                                //     } else {
                                //         timeToShow = day + " days";
                                //     }
                                // } else if (hours > 0) {
                                //     if (hours == 1) {
                                //         timeToShow = hours + " hour";
                                //     } else {
                                //         timeToShow = hours + " hours";
                                //     }
                                // } else if (minutes > 0) {
                                //     if (minutes == 1) {
                                //         timeToShow = minutes + " minute";
                                //     } else {
                                //         timeToShow = minutes + " minutes";
                                //     }
                                // } else if (seconds > 0) {
                                //     if (seconds == 1) {
                                //         timeToShow = seconds + " second";
                                //     } else {
                                //         timeToShow = seconds + " seconds";
                                //     }
                                // } else {
                                //     timeToShow = "Praying";
                                // }

                                // if (timeToShow.includes("hour")) {
                                //     minutes = minutes - hours * 60
                                //     if (minutes == 1) {
                                //         timeToShow += "<br/>" + minutes + " minute";
                                //     } else {
                                //         timeToShow += "<br/>" + minutes + " minutes";
                                //     }

                                //     seconds = seconds - minutes * 60 - hours * 60 * 60
                                //     if (seconds == 1) {
                                //         timeToShow += "<br/>" + seconds + " second";
                                //     } else {
                                //         timeToShow += "<br/>" + seconds + " seconds";
                                //     }
                                // } else if (timeToShow.includes("minute")) {
                                //     seconds = seconds - minutes * 60
                                //     if (seconds == 1) {
                                //         timeToShow += "<br/>" + seconds + " second";
                                //     } else {
                                //         timeToShow += "<br/>" + seconds + " seconds";
                                //     }
                                // }

                                // prayerTime.innerHTML = ' ' + timeToShow;
                                prayerTime.innerHTML = '';

                                prayerTimeElements[roomCounter] = prayerTime;
                                secondRowContainer.appendChild(prayerTime);

                                var optionsContainer = document.createElement("div");
                                optionsContainer.className = "room_options_container";
                                secondRowContainer.append(optionsContainer);

                                var savePrayerRoom = document.createElement("img");
                                savePrayerRoom.className = "room_row_savebtn";
                                savePrayerRoom.src = "images/save_icon_purple.png";
                                savePrayerRoom.onclick = savePrayerRoomFunction;
                                savePrayerRoomButtons.push(savePrayerRoom);
                                optionsContainer.appendChild(savePrayerRoom);
                                // console.log('savedRoomsIdList:', savedRoomsIdList, 'idList[roomCounter]:', idList[roomCounter]);
                                if (savedRoomsIdList.includes(idList[roomCounter])) { // if the prayer room has already been saved by the user, don't show the option to save it
                                    savePrayerRoom.style.display = 'none';
                                }

                                // for the user's own rooms add a button for them to change that room's settings
                                if (username == usernameList[roomCounter]) {
                                    var editPrayerRoom = document.createElement("img");
                                    editPrayerRoom.className = "room_row_editbtn";
                                    editPrayerRoom.src = "images/edit_icon_purple.png";
                                    editPrayerRoom.onclick = editPrayerRoomFunction;
                                    optionsContainer.appendChild(editPrayerRoom);

                                    var deletePrayerRoom = document.createElement("img")
                                    deletePrayerRoom.className = "room_row_deletebtn";
                                    deletePrayerRoom.src = "images/delete_icon_purple.png";
                                    deletePrayerRoom.onclick = function () {
                                        deleteEntryFunction(this, 'prayer room')
                                    };
                                    optionsContainer.appendChild(deletePrayerRoom);
                                }

                                // add a button to report rooms that aren't the user's
                                if (username != usernameList[roomCounter]) {
                                    var reportPrayerRoom = document.createElement("img")
                                    reportPrayerRoom.className = "room_row_reportbtn";
                                    reportPrayerRoom.src = "images/report_icon_purple.png";
                                    reportPrayerRoom.onclick = function () {
                                        reportEntryFunction(this, 'prayer room')
                                    };
                                    optionsContainer.appendChild(reportPrayerRoom);
                                }

                            }

                            loadPrayerRoomsListTriggered = false;

                            if (prayerRoomRows.length > 0) {
                                setTimeout(function () {
                                    for (var i = 0; i < prayerRoomRows.length; i++) {
                                        prayerRoomRows[i].style.opacity = 1;
                                        prayerRoomRows[i].style.transform = 'scale(1)';
                                    }
                                }, 0);
                            }

                            console.log

                            // add on new rows to variables for reference (for some reason was getting out of scope problems when trying to access prayerDatetimeList at some points for instance)
                            for (var i = 0; i < prayerDatetimeList.length; i++) {
                                if (tempDateTimeList[i] != prayerDatetimeList[i]) {
                                    tempDateTimeList[i] = prayerDatetimeList[i];
                                }
                            }
                            for (var i = 0; i < prayerTimeElements.length; i++) {
                                if (tempPrayerTimeElements[i] != prayerTimeElements[i]) {
                                    tempPrayerTimeElements[i] = prayerTimeElements[i];
                                }
                            }

                            updateRowTimesInterval = setInterval(function () { updateRowTime() }, 1000);


                        },
                        error: function (error) {
                            console.log("There was an error getting the prayer rooms: ", error);
                            snackbarMessage.innerHTML = "There was an error getting the prayer rooms: ", error;
                            snackbarMessage.className = "show";
                            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                        }
                    });

                },
                error: function (error) {
                    console.log("There was an error getting the saved prayer rooms:", error);
                }
            });
        }
    }

    function fixPrayerRoomURLs(array, URLs_have_space = true) {

        console.log('array1:', array);

        fixed_array = [];



        for (var i = 0; i < array.length; i++) {
            fixed_array[i] = [];
            console.log(array[i]);
            var tempArray;
            var ext;
            // if (URLs_have_space) {
            // tempArray = array[i].split('.txt ');
            tempArray = array[i].split(' ');
            // } else {
            // tempArray = array;
            // }
            console.log('tempArray: ', tempArray, ' tempArray.length:', tempArray.length);
            for (var j = 0; j < tempArray.length; j++) {
                // console.log('array11:', array[i]);
                var str = tempArray[j];
                console.log('str1:', str);
                // if they say /PrayerMusic/ or /BackgroundGifs/ then they shouldn't have 'https://worldwideprayer.world/' added before or else they won't load correctly in the prayer room settings page
                if (str.includes('no_music') || str.includes('no_background') || str.includes('no_recording') || str.includes('no_after_prayer_text')
                    || str.includes('/PrayerMusic') || str.includes('/BackgroundGifs')) {

                } else {
                    str = 'https://worldwideprayer.world/' + str.substring(str.indexOf('PrayerRoomPrayers'), str.length);
                }

                // .txt may have been removed from the .split('.txt ') above so need to add it back
                // if (!str.includes('.txt')) {
                //     str =
                // }

                // .trim() will remove leading and trailing whitespace from the string. encodeURIComponent will URL-encode it.
                // str = encodeURIComponent(str.trim()); -- not working lol
                // str = str.replace(/ /g,"%20");

                // console.log('str2:', str);
                fixed_array[i][j] = str;
            }
        }

        console.log('array2:', fixed_array);

        return fixed_array;

        // function fixPrayerRoomURLs(str) {


        // var i = -1;
        // var iTemp = -1;
        // var iTemp2 = -1;

        // console.log(str);

        // while ((i = str.indexOf('PrayerRoomPrayers', i + 1)) != -1) {
        //     console.log('i1:', i);

        //     if (iTemp == -1) {
        //         // may be no_music, no_background, or no_recording instead of an actual URL
        //         if (str.substring(iTemp, i).includes('no_music') || str.substring(iTemp, i).includes('no_background') || str.substring(iTemp, i).includes('no_recording')) {
        //             if (!str.substring(iTemp, i + 1).includes('","')) { // no_music, no_background, or no_recording is within the same prayer room (separated by a space instead of ",")
        //                 str = str.substring(0, str.indexOf(' ') + 1) + 'https://worldwideprayer.world/' + str.substring(i, str.length);
        //             } else {
        //                 str = str.substring(0, str.indexOf('","') + 3) + 'https://worldwideprayer.world/' + str.substring(i, str.length);
        //             }
        //         } else {
        //             str = 'https://worldwideprayer.world/' + str.substring(i, str.length);
        //         }
        //     } 
        //     else if (str.substring(iTemp, i + 1).includes('","') && str.substring(iTemp, i + 1).includes(' ')) {
        //         if (str.substring(iTemp, i).includes('no_music') || str.substring(iTemp, i).includes('no_background') || str.substring(iTemp, i).includes('no_recording')) {
        //             // str.indexOf(' ', str.indexOf(' ', iTemp)) + 1) should get the second occurrence of ' ' in the string
        //             str = str.substring(0, str.indexOf(' ', str.indexOf(' ', iTemp)) + 1) + 'https://worldwideprayer.world/' + str.substring(i, str.length);
        //         } else {
        //             str = str.substring(0, str.indexOf(' ', iTemp) + 1) + 'https://worldwideprayer.world/' + str.substring(i, str.length);
        //         }
        //     } else if (str.substring(iTemp, i + 1).includes('","')) { // checking for a '","' to make sure we went to the next text file and are not overwriting the previous text file name (if the user had 'PrayerRoomPrayers' in their username)
        //         if (str.substring(iTemp, i).includes('no_music') || str.substring(iTemp, i).includes('no_background') || str.substring(iTemp, i).includes('no_recording')) {
        //             str = str.substring(0, str.indexOf('","', str.indexOf('","', iTemp)) + 1) + ',"https://worldwideprayer.world/' + str.substring(i, str.length);
        //         } else {
        //             str = str.substring(0, str.indexOf('","', iTemp) + 1) + ',"https://worldwideprayer.world/' + str.substring(i, str.length);
        //         }
        //         console.log('i3:', i);
        //     } else if (!str.substring(iTemp, i + 1).includes('","')) {
        //         if (str.substring(iTemp, i).includes('no_music') || str.substring(iTemp, i).includes('no_background') || str.substring(iTemp, i).includes('no_recording')) {
        //             // str.indexOf(' ', str.indexOf(' ', iTemp)) + 1) should get the second occurrence of ' ' in the string
        //             str = str.substring(0, str.indexOf(' ', str.indexOf(' ', iTemp)) + 1) + 'https://worldwideprayer.world/' + str.substring(i, str.length);
        //         } else {
        //             str = str.substring(0, str.indexOf(' ', iTemp) + 1) + 'https://worldwideprayer.world/' + str.substring(i, str.length);
        //         }
        //     } else if (str.substring(iTemp, i + 1).includes('","')) { // checking for a '","' to make sure we went to the next text file and are not overwriting the previous text file name (if the user had 'PrayerRoomPrayers' in their username)
        //         if (str.substring(iTemp, i).includes('no_music') || str.substring(iTemp, i).includes('no_background') || str.substring(iTemp, i).includes('no_recording')) {
        //             str = str.substring(0, str.indexOf('","', str.indexOf('","', iTemp)) + 1) + ',"https://worldwideprayer.world/' + str.substring(i, str.length);
        //         } else {
        //             str = str.substring(0, str.indexOf('","', iTemp) + 1) + ',"https://worldwideprayer.world/' + str.substring(i, str.length);
        //         }
        //         console.log('i3:', i);
        //     }

        //     iTemp2 = i;

        //     // since the string is changing we need to refind the index that i should be
        //     // if (i < str.indexOf('PrayerRoomPrayers', iTemp)) {
        //     //     i = str.indexOf('PrayerRoomPrayers', i)
        //     // } else {
        //     //     i
        //     // }
        //     i = str.indexOf('PrayerRoomPrayers', iTemp);

        //     console.log('i:', i, 'iTemp:', iTemp, 'lastI:', str.lastIndexOf('PrayerRoomPrayers'),
        //         'str:', str);

        //     iTemp = iTemp2;
        // }

        // return str;
    }

    function parsePrayerRoomResponse(response, changing_settings = false) {


        // id | username_of_creator | profile_pic_ref | creator_name | room_name | room_password | text_ref | background_ref | music_ref | recording_ref | prayer_length | prayer_datetime

        console.log("response:", response);

        numPrayerRooms = response.slice(response.indexOf("numPrayerRooms") + "numPrayerRooms".length + 2);
        numPrayerRooms = numPrayerRooms.substring(0, numPrayerRooms.length - 1);

        numRowsRetrieved += Number(numPrayerRooms);

        // console.log("numPrayerRooms: ", numPrayerRooms);
        var idListString;
        var usernameListString;
        var profilePicRefListString;
        var creatorNameListString;
        var roomNameListString;
        var roomPasswordListString;
        var textRefListString;
        var backgroundRefListString;
        var musicRefListString;
        var recordingRefListString;
        var prayerLengthListString;
        var prayerDatetimeListString;
        var afterPrayerTextRefListString;
        var descriptionTextRefListString;
        var prayerIsRecurringListString;
        var timeToDeleteOrRenewPrayerListString;
        var minutesBetweenPrayersListString;
        var hoursBetweenPrayersListString;
        var daysBetweenPrayersListString;
        var numRepeatsListString;
        var tagsListString;
        var prayerRoomsReactsArraysString;

        idListString = response.split(",", numPrayerRooms).toString();
        // console.log("idListString: " + idListString);
        response = response.substring(response.indexOf(idListString) + idListString.length + 1);

        usernameListString = response.split(",", numPrayerRooms).toString();
        // console.log("usernameListString1: " + usernameListString);
        response = response.substring(response.indexOf(usernameListString) + usernameListString.length + 1);

        profilePicRefListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(profilePicRefListString) + profilePicRefListString.length + 1);

        creatorNameListString = response.split(",", numPrayerRooms).toString();
        // console.log("creatorNameListString: " + creatorNameListString);
        response = response.substring(response.indexOf(creatorNameListString) + creatorNameListString.length + 1);
        // console.log("response after first substring: " + response);

        roomNameListString = response.split(",", numPrayerRooms).toString();
        // console.log("roomNameListString: " + roomNameListString);
        response = response.substring(response.indexOf(roomNameListString) + roomNameListString.length + 1);
        // console.log("response after second substring: " + response);

        roomPasswordListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(roomPasswordListString) + roomPasswordListString.length + 1);
        // console.log('roomPasswordListString:', roomPasswordListString);

        textRefListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(textRefListString) + textRefListString.length + 1);
        // console.log('textRefListString:', textRefListString);

        backgroundRefListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(backgroundRefListString) + backgroundRefListString.length + 1);
        // console.log('backgroundRefListString:', backgroundRefListString);

        musicRefListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(musicRefListString) + musicRefListString.length + 1);
        // console.log('musicRefListString:', musicRefListString);

        recordingRefListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(recordingRefListString) + recordingRefListString.length + 1);
        // console.log('recordingRefListString:', recordingRefListString);

        prayerLengthListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(prayerLengthListString) + prayerLengthListString.length + 1);
        // console.log('prayerLengthListString:', prayerLengthListString);

        prayerDatetimeListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(prayerDatetimeListString) + prayerDatetimeListString.length + 1);
        // console.log('prayerDatetimeListString:', prayerDatetimeListString);

        afterPrayerTextRefListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(afterPrayerTextRefListString) + afterPrayerTextRefListString.length + 1);
        // console.log('afterPrayerTextRefListString3:', afterPrayerTextRefListString);
        descriptionTextRefListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(descriptionTextRefListString) + descriptionTextRefListString.length + 1);
        // console.log('descriptionTextRefListString3:', descriptionTextRefListString);
        prayerIsRecurringListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(prayerIsRecurringListString) + prayerIsRecurringListString.length + 1);
        // console.log('prayerIsRecurringListString3:', prayerIsRecurringListString);
        timeToDeleteOrRenewPrayerListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(timeToDeleteOrRenewPrayerListString) + timeToDeleteOrRenewPrayerListString.length + 1);
        // console.log('timeToDeleteOrRenewPrayerListString3:', timeToDeleteOrRenewPrayerListString);
        minutesBetweenPrayersListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(minutesBetweenPrayersListString) + minutesBetweenPrayersListString.length + 1);
        // console.log('minutesBetweenPrayersListString3:', minutesBetweenPrayersListString);
        hoursBetweenPrayersListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(hoursBetweenPrayersListString) + hoursBetweenPrayersListString.length + 1);
        // console.log('hoursBetweenPrayersListString3:', hoursBetweenPrayersListString);
        daysBetweenPrayersListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(daysBetweenPrayersListString) + daysBetweenPrayersListString.length + 1);
        // console.log('daysBetweenPrayersListString3:', daysBetweenPrayersListString);
        numRepeatsListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(numRepeatsListString) + numRepeatsListString.length + 1);
        // console.log('numRepeatsListString3:', numRepeatsListString);
        tagsListString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(tagsListString) + tagsListString.length + 1);
        // console.log('tagsListString3:', tagsListString);
        prayerRoomsReactsArraysString = response.split(",", numPrayerRooms).toString();
        response = response.substring(response.indexOf(prayerRoomsReactsArraysString) + prayerRoomsReactsArraysString.length + 1);
        // console.log('prayerRoomsReactsArraysString3:', prayerRoomsReactsArraysString);

        idListString = idListString.substring(idListString.indexOf(":") + 1, idListString.length);
        idListString = idListString.substring(1, idListString.length - 1); // 1 instead of 2 because it's ints not strings with ""
        // console.log('idListString2: ' + idListString);
        usernameListString = usernameListString.substring(usernameListString.indexOf(":") + 1, usernameListString.length);
        usernameListString = usernameListString.substring(2, usernameListString.length - 2);
        // console.log("creatorNameListString before substrings: " + creatorNameListString);
        profilePicRefListString = profilePicRefListString.substring(profilePicRefListString.indexOf(":") + 1, profilePicRefListString.length);
        profilePicRefListString = profilePicRefListString.substring(2, profilePicRefListString.length - 2);
        creatorNameListString = creatorNameListString.substring(creatorNameListString.indexOf(":") + 1, creatorNameListString.length);
        // console.log("creatorNameListString after first substring: " + creatorNameListString);
        creatorNameListString = creatorNameListString.substring(2, creatorNameListString.length - 2);
        roomNameListString = roomNameListString.substring(roomNameListString.indexOf(":") + 1, roomNameListString.length);
        roomNameListString = roomNameListString.substring(2, roomNameListString.length - 2);
        roomPasswordListString = roomPasswordListString.substring(roomPasswordListString.indexOf(":") + 1, roomPasswordListString.length);
        roomPasswordListString = roomPasswordListString.substring(2, roomPasswordListString.length - 2);
        textRefListString = textRefListString.substring(textRefListString.indexOf(":") + 1, textRefListString.length);
        textRefListString = textRefListString.substring(2, textRefListString.length - 2);
        backgroundRefListString = backgroundRefListString.substring(backgroundRefListString.indexOf(":") + 1, backgroundRefListString.length);
        backgroundRefListString = backgroundRefListString.substring(2, backgroundRefListString.length - 2);
        musicRefListString = musicRefListString.substring(musicRefListString.indexOf(":") + 1, musicRefListString.length);
        musicRefListString = musicRefListString.substring(2, musicRefListString.length - 2);
        recordingRefListString = recordingRefListString.substring(recordingRefListString.indexOf(":") + 1, recordingRefListString.length);
        recordingRefListString = recordingRefListString.substring(2, recordingRefListString.length - 2);
        prayerLengthListString = prayerLengthListString.substring(prayerLengthListString.indexOf(":") + 1, prayerLengthListString.length);
        prayerLengthListString = prayerLengthListString.substring(2, prayerLengthListString.length - 2);
        prayerDatetimeListString = prayerDatetimeListString.substring(prayerDatetimeListString.indexOf(":") + 1, prayerDatetimeListString.length);
        prayerDatetimeListString = prayerDatetimeListString.substring(2, prayerDatetimeListString.length - 2);
        afterPrayerTextRefListString = afterPrayerTextRefListString.substring(afterPrayerTextRefListString.indexOf(":") + 1, afterPrayerTextRefListString.length);
        afterPrayerTextRefListString = afterPrayerTextRefListString.substring(2, afterPrayerTextRefListString.length - 2);
        descriptionTextRefListString = descriptionTextRefListString.substring(descriptionTextRefListString.indexOf(":") + 1, descriptionTextRefListString.length);
        descriptionTextRefListString = descriptionTextRefListString.substring(2, descriptionTextRefListString.length - 2);
        prayerIsRecurringListString = prayerIsRecurringListString.substring(prayerIsRecurringListString.indexOf(":") + 1, prayerIsRecurringListString.length);
        prayerIsRecurringListString = prayerIsRecurringListString.substring(2, prayerIsRecurringListString.length - 2);
        timeToDeleteOrRenewPrayerListString = timeToDeleteOrRenewPrayerListString.substring(timeToDeleteOrRenewPrayerListString.indexOf(":") + 1, timeToDeleteOrRenewPrayerListString.length);
        timeToDeleteOrRenewPrayerListString = timeToDeleteOrRenewPrayerListString.substring(2, timeToDeleteOrRenewPrayerListString.length - 2);
        minutesBetweenPrayersListString = minutesBetweenPrayersListString.substring(minutesBetweenPrayersListString.indexOf(":") + 1, minutesBetweenPrayersListString.length);
        minutesBetweenPrayersListString = minutesBetweenPrayersListString.substring(2, minutesBetweenPrayersListString.length - 2);
        hoursBetweenPrayersListString = hoursBetweenPrayersListString.substring(hoursBetweenPrayersListString.indexOf(":") + 1, hoursBetweenPrayersListString.length);
        hoursBetweenPrayersListString = hoursBetweenPrayersListString.substring(2, hoursBetweenPrayersListString.length - 2);
        daysBetweenPrayersListString = daysBetweenPrayersListString.substring(daysBetweenPrayersListString.indexOf(":") + 1, daysBetweenPrayersListString.length);
        daysBetweenPrayersListString = daysBetweenPrayersListString.substring(2, daysBetweenPrayersListString.length - 2);
        numRepeatsListString = numRepeatsListString.substring(numRepeatsListString.indexOf(":") + 1, numRepeatsListString.length);
        numRepeatsListString = numRepeatsListString.substring(2, numRepeatsListString.length - 2);
        tagsListString = tagsListString.substring(tagsListString.indexOf(":") + 1, tagsListString.length);
        tagsListString = tagsListString.substring(2, tagsListString.length - 2);
        prayerRoomsReactsArraysString = prayerRoomsReactsArraysString.substring(prayerRoomsReactsArraysString.indexOf(":") + 1, prayerRoomsReactsArraysString.length);
        prayerRoomsReactsArraysString = prayerRoomsReactsArraysString.substring(2, prayerRoomsReactsArraysString.length - 2);

        console.log('prayerRoomsReactsArraysString4:', prayerRoomsReactsArraysString);

        // console.log("creatorNameListString: ", creatorNameListString);
        // console.log("roomNameListString: ", roomNameListString);
        // console.log("usernameListString: ", usernameListString);
        // console.log("roomPasswordListString: ", roomPasswordListString);
        console.log("idListString", idListString);

        if (idListString) {




            roomNameListString = unicodeToChar(roomNameListString)
            creatorNameListString = unicodeToChar(creatorNameListString)


            // var find = '\\u2019';
            // var replace = "\'";
            // roomNameListString = roomNameListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);

            find = '\\\\';
            replace = "\\";
            while (textRefListString.includes('\\\\')) {
                textRefListString = textRefListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);
            }
            while (afterPrayerTextRefListString.includes('\\\\')) {
                afterPrayerTextRefListString = afterPrayerTextRefListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);
            }
            while (musicRefListString.includes('\\\\')) {
                musicRefListString = musicRefListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);
            }
            while (backgroundRefListString.includes('\\\\')) {
                backgroundRefListString = backgroundRefListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);
            }
            while (recordingRefListString.includes('\\\\')) {
                recordingRefListString = recordingRefListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);
            }


            if (changing_settings == true) {
                idListSingle = idListString.split(','); // it has ints not strings so no ""
                // console.log('idListSingle: ', idListSingle);
                roomNameListSingle = roomNameListString.split('","');
                usernameListSingle = usernameListString.split('","');
                profilePicListSingle = profilePicRefListString.split('","');
                roomPasswordListSingle = roomPasswordListString.split('","');
                textRefListSingle = textRefListString.split('","');
                backgroundRefListSingle = backgroundRefListString.split('","');
                musicRefListSingle = musicRefListString.split('","');
                recordingRefListSingle = recordingRefListString.split('","');
                afterPrayerTextRefListSingle = afterPrayerTextRefListString.split('","');
                descriptionTextRefListSingle = descriptionTextRefListString.split('","');

                creatorNameListSingle = [creatorNameListString.split('","')];
                prayerLengthListSingle = [prayerLengthListString.split('","')[0].split(' ')];

                prayerDatetimeListSingle = [prayerDatetimeListString.split('","')[0].split(' ')];
                prayerIsRecurringListSingle = [prayerIsRecurringListString.split('","')[0].split(' ')];
                timeToDeleteOrRenewPrayerListSingle = [timeToDeleteOrRenewPrayerListString.split('","')[0].split(' ')];
                minutesBetweenPrayersListSingle = [minutesBetweenPrayersListString.split('","')[0].split(' ')];
                hoursBetweenPrayersListSingle = [hoursBetweenPrayersListString.split('","')[0].split(' ')];
                daysBetweenPrayersListSingle = [daysBetweenPrayersListString.split('","')[0].split(' ')];
                numRepeatsListSingle = [numRepeatsListString.split('","')[0].split(' ')];

                tagsListSingle = tagsListString.split('","');
                prayerRoomsReactsArraysSingle = prayerRoomsReactsArraysString.split('","');

                console.log('textRefListSingle before fix: ', textRefListSingle);

                textRefListSingle = fixPrayerRoomURLs(textRefListSingle);
                afterPrayerTextRefListSingle = fixPrayerRoomURLs(afterPrayerTextRefListSingle);
                descriptionTextRefListSingle = fixPrayerRoomURLs(descriptionTextRefListSingle);
                musicRefListSingle = fixPrayerRoomURLs(musicRefListSingle);
                backgroundRefListSingle = fixPrayerRoomURLs(backgroundRefListSingle);
                recordingRefListSingle = fixPrayerRoomURLs(recordingRefListSingle);

                console.log('textRefListSingle after fix: ', textRefListSingle);


                // removeUndefinedValuesFromArray(idListSingle);
                // removeUndefinedValuesFromArray(creatorNameListSingle);
                // removeUndefinedValuesFromArray(roomNameListSingle);
                // removeUndefinedValuesFromArray(usernameListSingle);
                // removeUndefinedValuesFromArray(profilePicListSingle);
                // removeUndefinedValuesFromArray(roomPasswordListSingle);
                // removeUndefinedValuesFromArray(textRefListSingle);
                // removeUndefinedValuesFromArray(backgroundRefListSingle);
                // removeUndefinedValuesFromArray(musicRefListSingle);
                // removeUndefinedValuesFromArray(recordingRefListSingle);
                // removeUndefinedValuesFromArray(prayerLengthListSingle);
                // removeUndefinedValuesFromArray(prayerDatetimeListSingle);
                // removeUndefinedValuesFromArray(afterPrayerTextRefListSingle);
                // removeUndefinedValuesFromArray(descriptionTextRefListSingle);
                // removeUndefinedValuesFromArray(prayerIsRecurringListSingle);
                // removeUndefinedValuesFromArray(timeToDeleteOrRenewPrayerListSingle);
                // removeUndefinedValuesFromArray(minutesBetweenPrayersListSingle);
                // removeUndefinedValuesFromArray(hoursBetweenPrayersListSingle);
                // removeUndefinedValuesFromArray(daysBetweenPrayersListSingle);
                // removeUndefinedValuesFromArray(numRepeatsListSingle);
                // removeUndefinedValuesFromArray(tagsListSingle);
                // removeUndefinedValuesFromArray(prayerRoomsReactsArraysSingle);

                for (var i = 0; i < prayerRoomsReactsArraysSingle.length; i++) {
                    if (!prayerRoomsReactsArraysSingle[i]) {
                        prayerRoomsReactsArraysSingle[i] = "0 0 0 0 0 0";
                        prayerRoomsReactsArraysSingle[i] = prayerRoomsReactsArraysSingle[i].split(' ').map(Number)
                    } else {
                        if ((prayerRoomsReactsArraysSingle[i]) && ((typeof prayerRoomsReactsArraysSingle[i] === 'string') || (prayerRoomsReactsArraysSingle[i] instanceof String))) {
                            prayerRoomsReactsArraysSingle[i] = prayerRoomsReactsArraysSingle[i].trim()
                            prayerRoomsReactsArraysSingle[i] = prayerRoomsReactsArraysSingle[i].replace(/ +/g, " "); // remove extra whitespace between the numbers
                            prayerRoomsReactsArraysSingle[i] = prayerRoomsReactsArraysSingle[i].split(' ').map(Number)
                        }
                    }

                }

            } else {
                idList.push(...idListString.split(',')); // it has ints not strings so no ""
                creatorNameList.push(...creatorNameListString.split('","'));
                roomNameList.push(...roomNameListString.split('","'));
                usernameList.push(...usernameListString.split('","'));
                profilePicList.push(...profilePicRefListString.split('","'));
                roomPasswordList.push(...roomPasswordListString.split('","'));
                textRefList.push(...textRefListString.split('","'));
                backgroundRefList.push(...backgroundRefListString.split('","'));
                musicRefList.push(...musicRefListString.split('","'));
                recordingRefList.push(...recordingRefListString.split('","'));
                prayerLengthList.push(...prayerLengthListString.split('","'));
                prayerDatetimeList.push(...prayerDatetimeListString.split('","'));
                afterPrayerTextRefList.push(...afterPrayerTextRefListString.split('","'));
                descriptionTextRefList.push(...descriptionTextRefListString.split('","'));
                prayerIsRecurringList.push(...prayerIsRecurringListString.split('","'));
                timeToDeleteOrRenewPrayerList.push(...timeToDeleteOrRenewPrayerListString.split('","'));
                minutesBetweenPrayersList.push(...minutesBetweenPrayersListString.split('","'));
                hoursBetweenPrayersList.push(...hoursBetweenPrayersListString.split('","'));
                daysBetweenPrayersList.push(...daysBetweenPrayersListString.split('","'));
                numRepeatsList.push(...numRepeatsListString.split('","'));
                tagsList.push(...tagsListString.split('","'));
                prayerRoomsReactsArrays.push(...prayerRoomsReactsArraysString.split('","'));


                textRefList = fixPrayerRoomURLs(textRefList);
                afterPrayerTextRefList = fixPrayerRoomURLs(afterPrayerTextRefList);
                descriptionTextRefList = fixPrayerRoomURLs(descriptionTextRefList);
                musicRefList = fixPrayerRoomURLs(musicRefList);
                backgroundRefList = fixPrayerRoomURLs(backgroundRefList);
                recordingRefList = fixPrayerRoomURLs(recordingRefList);



                console.log('textRefListString', textRefListString, 'textRefList', textRefList);
                console.log('prayerRoomsReactsArrays.length: ', prayerRoomsReactsArrays.length);
                for (var i = 0; i < prayerRoomsReactsArrays.length; i++) {
                    console.log('prayerRoomsReactsArrays:', prayerRoomsReactsArrays, 'i:', i, 'prayerRoomsReactsArrays[i]:', prayerRoomsReactsArrays[i]);
                    if (!prayerRoomsReactsArrays[i]) {
                        prayerRoomsReactsArrays[i] = "0 0 0 0 0 0";
                        prayerRoomsReactsArrays[i] = prayerRoomsReactsArrays[i].split(' ').map(Number)
                    } else {
                        if ((prayerRoomsReactsArrays[i]) && ((typeof prayerRoomsReactsArrays[i] === 'string') || (prayerRoomsReactsArrays[i] instanceof String))) {
                            prayerRoomsReactsArrays[i] = prayerRoomsReactsArrays[i].trim()
                            prayerRoomsReactsArrays[i] = prayerRoomsReactsArrays[i].replace(/ +/g, " "); // remove extra whitespace between the numbers
                            prayerRoomsReactsArrays[i] = prayerRoomsReactsArrays[i].split(' ').map(Number)
                        }
                    }

                }
                console.log('prayerRoomsReactsArrays2:', prayerRoomsReactsArrays, 'i:', i, 'prayerRoomsReactsArrays[i]:', prayerRoomsReactsArrays[i]);

                console.log("idList: ", idList);
                // console.log("idList[18]: ", idList[18]);
                // console.log("creatorNameList: " + creatorNameList);
                // console.log("roomNameList: " + roomNameList);
                // console.log("usernameList: " + usernameList);
                // console.log("roomPasswordList: " + roomPasswordList);
                // console.log("textRefList: " + textRefList);
                // console.log("backgroundRefList: " + backgroundRefList);
                // console.log("musicRefList: " + musicRefList);
                // console.log("recordingRefList: " + recordingRefList);
                // console.log("prayerLengthList: " + prayerLengthList);
                // console.log("prayerDatetimeList: " + prayerDatetimeList);
            }

        }


    }

    function getSinglePrayerRoom(numRow) {
        console.log('numRow:', numRow);
        // idListSingle = idList[numRow].split();
        // creatorNameListSingle = creatorNameList[numRow].split();
        // roomNameListSingle = roomNameList[numRow].split();
        // usernameListSingle = usernameList[numRow].split();
        // profilePicListSingle = profilePicList[numRow].split();
        // roomPasswordListSingle = roomPasswordList[numRow].split();
        // textRefListSingle = textRefList[numRow].split();
        // backgroundRefListSingle = backgroundRefList[numRow].split();
        // musicRefListSingle = musicRefList[numRow].split();
        // recordingRefListSingle = recordingRefList[numRow].split();
        // prayerLengthListSingle = prayerLengthList[numRow].split();
        // prayerDatetimeListSingle = prayerDatetimeList[numRow].split();
        // afterPrayerTextRefListSingle = afterPrayerTextRefList[numRow].split();
        // descriptionTextRefListSingle = descriptionTextRefList[numRow].split();
        // prayerIsRecurringListSingle = prayerIsRecurringList[numRow].split();
        // timeToDeleteOrRenewPrayerListSingle = timeToDeleteOrRenewPrayerList[numRow].split();
        // minutesBetweenPrayersListSingle = minutesBetweenPrayersList[numRow].split();
        // hoursBetweenPrayersListSingle = hoursBetweenPrayersList[numRow].split();
        // daysBetweenPrayersListSingle = daysBetweenPrayersList[numRow].split();
        // numRepeatsListSingle = numRepeatsList[numRow].split();
        // tagsListSingle = tagsList[numRow].split();
        // prayerRoomsReactsArraysSingle = prayerRoomsReactsArrays[numRow];

        // console.log('textRefListSingle1', textRefListSingle);

        idListSingle = [idList[numRow]];
        // console.log('idList: ', idList);
        creatorNameListSingle = creatorNameList[numRow];
        roomNameListSingle = roomNameList[numRow];
        usernameListSingle = usernameList[numRow];
        profilePicListSingle = profilePicList[numRow];
        roomPasswordListSingle = roomPasswordList[numRow];
        textRefListSingle = [textRefList[numRow]];
        backgroundRefListSingle = [backgroundRefList[numRow]];
        musicRefListSingle = [musicRefList[numRow]];
        recordingRefListSingle = [recordingRefList[numRow]];
        prayerLengthListSingle = [prayerLengthList[numRow]];
        // console.log('prayerDatetimeList[numRow]: ', prayerDatetimeList[numRow]);
        prayerDatetimeListSingle = [prayerDatetimeList[numRow].split(' ')];
        afterPrayerTextRefListSingle = [afterPrayerTextRefList[numRow]];
        descriptionTextRefListSingle = [descriptionTextRefList[numRow]];
        prayerIsRecurringListSingle = [prayerIsRecurringList[numRow].split(' ')];
        timeToDeleteOrRenewPrayerListSingle = [timeToDeleteOrRenewPrayerList[numRow].split(' ')];
        minutesBetweenPrayersListSingle = [minutesBetweenPrayersList[numRow].split(' ')];
        hoursBetweenPrayersListSingle = [hoursBetweenPrayersList[numRow].split(' ')];
        daysBetweenPrayersListSingle = [daysBetweenPrayersList[numRow].split(' ')];
        numRepeatsListSingle = [numRepeatsList[numRow].split(' ')];
        tagsListSingle = tagsList[numRow];
        prayerRoomsReactsArraysSingle = prayerRoomsReactsArrays[numRow];

        console.log('textRefList', textRefList, 'textRefListSingle', textRefListSingle);

        for (var i = 0; i < prayerRoomsReactsArraysSingle.length; i++) {
            if (!prayerRoomsReactsArraysSingle[i]) {
                prayerRoomsReactsArraysSingle[i] = "0 0 0 0 0 0";
                prayerRoomsReactsArraysSingle[i] = prayerRoomsReactsArraysSingle[i].split(' ').map(Number)
            } else {
                if ((prayerRoomsReactsArraysSingle[i]) && ((typeof prayerRoomsReactsArraysSingle[i] === 'string') || (prayerRoomsReactsArraysSingle[i] instanceof String))) {
                    prayerRoomsReactsArraysSingle[i] = prayerRoomsReactsArraysSingle[i].trim()
                    prayerRoomsReactsArraysSingle[i] = prayerRoomsReactsArraysSingle[i].replace(/ +/g, " "); // remove extra whitespace between the numbers
                    prayerRoomsReactsArraysSingle[i] = prayerRoomsReactsArraysSingle[i].split(' ').map(Number)
                }
            }

        }

    }

    // load more intentions when the user scrolls to the bottom of the list
    $('#intentionsSideNav').scroll(function () {
        // console.log("scrolled intentions sidenav");
        // console.log('document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom', document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom)
        // console.log('document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom', document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom);
        if (document.getElementById("intentionsMenuList").getBoundingClientRect().bottom
            - document.getElementById("intentionsSideNav").getBoundingClientRect().bottom - 30 <= 0 && (intentionsIDList.length > 5)) {
            loadIntentionsList(currentIntentionsSelection, 'mostRecent', 10, intentionsSearchInput, '');
        }
    });

    function goToIntentionFunction(e) {
        numRow = $('#intentionsSideNav .room_row_info_container').index(this);

        console.log("numRow: " + numRow, "id: " + idList[numRow], "textRef: " + textRefList[numRow]);
    }

    function saveIntentionFunction(e) {

        if (!username || !isUserLoggedIn) { // if the prayer room has already been saved by the user, don't show the option to save it
            snackbarMessage.innerHTML = "Login to save intentions!";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            return;
        }

        numRow = $('#intentionsSideNav .room_row_savebtn').index(this);

        intentionID = intentionsIDList[numRow];

        console.log("Saving intention. this: " + this + ", numRow: " + numRow + ", intentionID: " + intentionID);

        $.ajax({
            type: "POST",
            url: "create_intention_functions.php",
            data: {
                action: 'saveIntention',
                username: username,
                intentionID: intentionID
            },
            success: function (response) {
                console.log("response:", response);// response.responseText);

                if (response.includes('Intention not saved for some reason.')) {
                    snackbarMessage.innerHTML = "An error occurred. Sorry, the intention was not saved.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('Intention successfully saved!')) {
                    snackbarMessage.innerHTML = "Intention saved!";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    $('#intentionsSideNav .room_row_savebtn')[numRow].style.display = 'none';

                } else if (response.includes('Intention already saved for this user.')) {
                    snackbarMessage.innerHTML = "Intention has already been saved.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    $('#intentionsSideNav .room_row_savebtn')[numRow].style.display = 'none';
                }

            },
            error: function (error) {
                console.log("There was an error saving the intention:", error);
            }
        });
    }

    function editIntentionFunction(e) {

        console.log(this);


    }

    function loadIntentionsList(action, query, limit, intentionsSearchInput, orderBy, sortBy, category) {
        var php_url = 'create_intention_functions.php';
        console.log('sortBy', sortBy);
        if (sortBy) {
            php_url = 'create_prayer_room_functions.php';
        }

        console.log("loadIntentionsListTriggered", loadIntentionsListTriggered);
        if (!loadIntentionsListTriggered) {
            loadIntentionsListTriggered = true;

            numCalled++;
            console.log("NUMBER OF TIMES CALLED:", numCalled);

            var menu_list = document.getElementById("intentionsMenuList");

            if (!action) {
                console.log("loading default action (getting all intentions)");
                action = 'getIntentions';
                usernameInput = '';
                document.getElementById('intentions_menu_title').innerHTML = "Intentions Worldwide";
                document.getElementById('all_intentions_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('my_intentions_label').style = "background-color: " + 'none';
                document.getElementById('saved_intentions_label').style = "background-color: " + 'none';
                document.getElementById('followed_intentions_label').style = "background-color: " + 'none';
            } else if (action == 'getMyIntentions') {
                usernameInput = username;
                document.getElementById('intentions_menu_title').innerHTML = "My Intentions";
                document.getElementById('all_intentions_label').style = "background-color: " + 'none';
                document.getElementById('my_intentions_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('saved_intentions_label').style = "background-color: " + 'none';
                document.getElementById('followed_intentions_label').style = "background-color: " + 'none';
            } else if (action == 'getMySavedIntentions') {
                usernameInput = username;
                document.getElementById('intentions_menu_title').innerHTML = "Saved Intentions";
                document.getElementById('all_intentions_label').style = "background-color: " + 'none';
                document.getElementById('my_intentions_label').style = "background-color: " + 'none';
                document.getElementById('saved_intentions_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('followed_intentions_label').style = "background-color: " + 'none';
            } else if (action == 'getFollowedIntentions') {
                usernameInput = username;
                document.getElementById('intentions_menu_title').innerHTML = "Followed Intentions";
                document.getElementById('all_intentions_label').style = "background-color: " + 'none';
                document.getElementById('my_intentions_label').style = "background-color: " + 'none';
                document.getElementById('saved_intentions_label').style = "background-color: " + 'none';
                document.getElementById('followed_intentions_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
            }

            $.ajax({
                type: "POST",
                url: 'create_intention_functions.php',
                data: {
                    action: 'getSavedIntentionsByUsername',
                    username: username
                },
                success: function (response2) {
                    console.log("response2 intentions:", response2);// response.responseText);

                    numPrayerRooms = response2.slice(response2.indexOf("numRows") + "numRows".length + 2);
                    numPrayerRooms = numPrayerRooms.substring(0, numPrayerRooms.length - 1);
                    // console.log("numPrayerRooms: ", numPrayerRooms);
                    var usernameListString;
                    var idListString;

                    usernameListString = response2.split(",", numPrayerRooms).toString();
                    // console.log("usernameListString1: " + usernameListString);
                    response2 = response2.substring(response2.indexOf(usernameListString) + usernameListString.length + 1);

                    idListString = response2.split(",", numPrayerRooms).toString();
                    console.log("idListString: " + idListString);
                    response2 = response2.substring(response2.indexOf(idListString) + idListString.length + 1);

                    usernameListString = usernameListString.substring(usernameListString.indexOf(":") + 1, usernameListString.length);
                    usernameListString = usernameListString.substring(2, usernameListString.length - 2);

                    idListString = idListString.substring(idListString.indexOf(":") + 1, idListString.length);
                    idListString = idListString.substring(1, idListString.length - 1); // 1 instead of 2 because it's ints not strings with ""
                    console.log('idListString2: ' + idListString);

                    savedIntentionsUsernameList = usernameListString.split('","');
                    savedIntentionsIdList = idListString.split(',');
                    // intentionsIdList = intentionsIdList.map(Number); // convert to array of ints

                    console.log("numRowsRetrieved", numRowsRetrieved);

                    console.log('php_url', php_url, 'action', action);
                    // CAN'T POST AN ARRAY TO THE PHP FILE FOR SOME REASON SO CAN SEND THE ARRAY OF ROOMIDS THAT THE USER SAVED TO ONLY GET THOSE
                    // SO IN THE FUNCTION ASKING FOR THE USER'S SAVED ROOMS AM JUST CHECKING AGAIN WHICH ROOM IDS THEY HAVE SAVED IN THE DATABASE
                    // IT'S A NONIDEAL NUMBER OF READS BUT DON'T KNOW HOW ELSE TO DO IT
                    $.ajax({
                        type: "POST",
                        url: php_url,
                        data: {
                            action: action,
                            query: query,
                            start: numRowsRetrieved,
                            limit: limit,
                            searchInput: intentionsSearchInput,
                            orderBy: orderBy,
                            username: usernameInput,
                            sortBy: sortBy,
                            entryType: 'intention',
                            category: category
                        },
                        // data: JSON.stringify([1, 2, 3]),
                        // dataType: "json",
                        // contentType: 'application/json; charset=utf-8',
                        success: function (response) {

                            roomsWereRetrieved = parseIntentionsResponse(response);

                            // if person is looking at their created prayer rooms but there aren't any show a message saying they can create one
                            if (action == 'getMyIntentions' && roomsWereRetrieved == 0 && !noPrayerRoomsMessageAppended) {
                                var createIntentionButton = document.createElement("a");
                                createIntentionButton.className = "btn btn-info menu-list-item prayer_room_row cursor-pointer";
                                createIntentionButton.innerHTML = "You have no intentions. Create one here!"
                                createIntentionButton.onclick = function () {
                                    window.open('./create-prayer-room');
                                };

                                menu_list.appendChild(createIntentionButton);
                                noPrayerRoomsMessageAppended = true;
                            }

                            console.log('numRowsRetrieved', numRowsRetrieved);

                            for (var i = roomCounter; i < numRowsRetrieved; i++) {
                                // console.log("roomCounter:", roomCounter);

                                addIntentionToList(addToTop = false)
                            }

                            loadIntentionsListTriggered = false;

                            if (intentionRows.length > 0) {
                                setTimeout(function () {
                                    for (var i = 0; i < intentionRows.length; i++) {
                                        intentionRows[i].style.opacity = 1;
                                        intentionRows[i].style.transform = 'scale(1)';
                                    }
                                }, 0);
                            }

                        },
                        error: function (error) {
                            console.log("There was an error getting the intentions: ", error);
                            snackbarMessage.innerHTML = "There was an error getting the intentions: ", error;
                            snackbarMessage.className = "show";
                            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                        }
                    });

                },
                error: function (error) {
                    console.log("There was an error getting the intentions:", error);
                }
            });
        }
    }

    function onIntentionCategoryChange(element) {
        // uncheck any other boxes
        elements = document.getElementsByClassName('intention_category_checkbox');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] != element) {
                elements[i].checked = false;
            }
        }
    }

    function addIntentionToList(addToTop = false) {
        var roomCounterTemp = 0;

        var intentionRow = document.createElement("a");
        intentionRow.className = "btn btn-info menu-list-item prayer_room_row";

        if (addToTop) {
            document.getElementById("intentionsMenuList").insertBefore(intentionRow, document.getElementById("intentionsMenuList").firstChild);
        } else {
            document.getElementById("intentionsMenuList").appendChild(intentionRow);
            roomCounterTemp = roomCounter;
        }

        intentionRows[roomCounterTemp] = intentionRow;

        var intentionInfoContainer = document.createElement("div");
        intentionInfoContainer.className = "room_row_info_container";
        intentionInfoContainer.onclick = goToIntentionFunction;
        intentionRow.appendChild(intentionInfoContainer);

        var profilePic = document.createElement("img");
        profilePic.className = "w3-circle room_row_profile_pic";
        profilePic.onerror = function (event) {
            this.src = default_profile_pic;
        };
        profilePic.src = intentionsProfilePicList[roomCounterTemp];
        intentionInfoContainer.appendChild(profilePic);

        var username_div = document.createElement("div");
        username_div.className = "entry_row_username";
        if (intentionsUsernameList[roomCounterTemp]) {
            username_div.innerHTML = intentionsUsernameList[roomCounterTemp];
            username_div.onclick = function () {
                goToProfile(this, "intention");
            }
            if (intentionsSearchInput != undefined) {
                var markJSInstance = new Mark(username_div);
                markJSInstance.mark(intentionsSearchInput);
            }
        }
        intentionInfoContainer.appendChild(username_div)

        var reactsContainer = document.createElement("div");
        reactsContainer.className = "reacts_container";
        intentionRow.appendChild(reactsContainer);

        // display the emojis and their numbers
        displayReacts(reactsContainer, intentionsReactsArrays, roomCounterTemp, 'intention');

        var title = document.createElement("div");
        title.className = "room_row_name";
        if (intentionsTitleList[roomCounterTemp]) {
            title.innerHTML = intentionsTitleList[roomCounterTemp].split("\n").join("<br>");
            // console.log('title innerhtml: ', unicodeToChar(intentionsTitleList[roomCounterTemp].split("\n").join("<br>")));
            if (intentionsSearchInput != undefined) {
                var markJSInstance = new Mark(title);
                markJSInstance.mark(intentionsSearchInput);
            }
        } else {
            title.innerHTML += 'Intention ' + (roomCounter + 1); // roomCounter starts at 0
        }
        intentionRow.appendChild(title);

        var tagsRowContainer = document.createElement("div");
        tagsRowContainer.className = "tags_row_container";
        intentionRow.append(tagsRowContainer);

        var tags = document.createElement("div");
        tags.className = "intention_row_category";
        // console.log("intentionsTagsList1:", intentionsTagsList);
        if (intentionsTagsList[roomCounterTemp]) {
            // console.log('intentionsTagsList[', roomCounterTemp, ']', intentionsTagsList[roomCounterTemp])
            tags.innerHTML = ' ' + intentionsTagsList[roomCounterTemp].replace(new RegExp(escapeRegExp('||||| '), 'g'), ', ').replace(new RegExp(escapeRegExp('\\/'), 'g'), '/');
        }
        tagsRowContainer.appendChild(tags);
        // console.log("searchInput1", intentionsSearchInput)
        if (intentionsSearchInput != undefined) {
            var markJSInstance = new Mark(tags);
            // console.log("markJSInstance", markJSInstance, "tags", tags, "intentionsSearchInput", intentionsSearchInput);
            markJSInstance.mark(intentionsSearchInput);
        }

        var intentionText = document.createElement("div");
        intentionTextElements[roomCounterTemp] = intentionText;
        intentionText.className = "intention_text";
        if (intentionsTextRefList[roomCounterTemp]) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'text';

            (function (index) {
                xhr.onload = function (event) {
                    // if (index == intentionTextElements.length - 1) {
                    var text = xhr.responseText;
                    // console.log("index", index, "responseText:", text);
                    // }

                    if (!text || text == '&lt;p&gt;&lt;br data-mce-bogus=&quot;1&quot;&gt;&lt;/p&gt;') {
                        intentionText.style.display = 'none';
                    } else {
                        intentionTextElements[index].innerHTML = text;
                        text = intentionTextElements[index].textContent;
                        intentionTextElements[index].innerHTML = text;
                    }

                    // if (intentionsSearchInput != undefined) {
                    //     var markJSInstance = new Mark(intentionTextElements[index]);
                    //     markJSInstance.mark(intentionsSearchInput);
                    // }
                };
            }(roomCounterTemp));

            // console.log(intentionsTextRefList[roomCounterTemp]);
            xhr.open('GET', intentionsTextRefList[roomCounterTemp]);
            xhr.send();
        }

        intentionRow.appendChild(intentionText);

        var secondRowContainer = document.createElement("div");
        secondRowContainer.className = "room_second_row_container";
        intentionRow.append(secondRowContainer);

        var optionsContainer = document.createElement("div");
        optionsContainer.className = "room_options_container";
        secondRowContainer.append(optionsContainer);

        var saveIntention = document.createElement("img");
        saveIntention.className = "room_row_savebtn";
        saveIntention.src = "images/save_icon_purple.png";
        saveIntention.onclick = saveIntentionFunction;
        optionsContainer.appendChild(saveIntention);

        // console.log('intentionsIdList:', intentionsIdList, 'idList[roomCounterTemp]:', idList[roomCounterTemp]);
        // console.log("username", username);
        if (savedIntentionsIdList.includes(intentionsIDList[roomCounterTemp])) { // if the prayer room has already been saved by the user, don't show the option to save it
            saveIntention.style.display = 'none';
        }

        // for the user's own rooms add a button for them to change that room's settings
        if (username1 == intentionsUsernameList[roomCounterTemp]) {
            // var editIntention = document.createElement("img");
            // editIntention.className = "room_row_editbtn";
            // editIntention.src = "images/edit_icon_purple.png";
            // editIntention.onclick = editIntentionFunction;
            // optionsContainer.appendChild(editIntention);

            var deleteIntention = document.createElement("img")
            deleteIntention.className = "room_row_deletebtn";
            deleteIntention.src = "images/delete_icon_purple.png";
            deleteIntention.onclick = function () {
                deleteEntryFunction(this, 'intention')
            };
            optionsContainer.appendChild(deleteIntention);
        }

        // add a button to report rooms that aren't the user's
        // console.log("username:", username, "intentionsUsernameList[roomCounterTemp]", intentionsUsernameList[roomCounterTemp]);
        if (username1 != intentionsUsernameList[roomCounterTemp]) {
            var reportIntention = document.createElement("img")
            reportIntention.className = "room_row_reportbtn";
            reportIntention.src = "images/report_icon_purple.png";
            reportIntention.onclick = function () {
                reportEntryFunction(this, 'intention')
            };
            optionsContainer.appendChild(reportIntention);
        }

        roomCounter++;
    }

    function postIntention() {

        if (!localStorage.getItem('isUserLoggedIn')) {

            snackbarMessage.innerHTML = "Please login to post an intention!";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

            return;
        }

        if (!document.getElementById("intention_title_input").value) {
            snackbarMessage.innerHTML = "The title for the intention cannot be empty.";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

            return;
        }

        if (document.getElementById("intention_title_input").value.includes(',') || document.getElementById("intention_title_input").value.includes('[') ||
            document.getElementById("intention_title_input").value.includes(']') || document.getElementById("intention_title_input").value.includes(':')) {
            snackbarMessage.innerHTML = "The title for the intention cannot contain ',', '[', ']', or ':'.";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

            return;
        }

        var form_data = new FormData();                  // Creating object of FormData class
        form_data.append("intentionText", document.getElementById("intentions_text_area_ifr").contentDocument.getElementById("tinymce").innerHTML);              // Appending parameter named file with properties of file_field to form_data
        form_data.append("intentionTitle", document.getElementById("intention_title_input").value)

        var intentionTags = '';
        var addedTagButtons = document.querySelectorAll('#intentionsSideNav .added_tag_button');
        for (var i = 0; i < addedTagButtons.length; i++) {
            if (i == 0) {
                intentionTags = addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.length - 2);
            } else {
                intentionTags += '||||| ' + addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.length - 2);
            }
        }
        form_data.append("intentionTags", intentionTags);

        form_data.append("username", username1)
        form_data.append("profile_pic_ref", profile_pic_ref)
        form_data.append("action", 'createIntention')

        $.ajax({
            url: "create_intention_functions.php",
            cache: false,
            contentType: false,
            processData: false,
            method: 'POST',
            type: 'POST', // For jQuery < 1.9
            data: form_data,
            success: function (response) {

                console.log(response);

                if (response.includes('Intention successfully saved!')) {
                    snackbarMessage.innerHTML = "Intention successfully offered up!";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    response = response.replace("Intention successfully saved!", '');

                    // disable the posting button for a certain amount of time to prevent spam
                    document.getElementById('post_intention_button').disabled = true;
                    setTimeout(function () { document.getElementById('post_intention_button').disabled = false; }, 10000);

                    parseIntentionsResponse(response, unshift = true);

                    addIntentionToList(addToTop = true);

                    if (intentionRows.length > 0) {
                        setTimeout(function () {
                            for (var i = 0; i < intentionRows.length; i++) {
                                intentionRows[i].style.opacity = 1;
                                intentionRows[i].style.transform = 'scale(1)';
                            }
                        }, 0);
                    }


                } else if (response.includes('Intention not saved for some reason.')) {
                    snackbarMessage.innerHTML = "Intention not saved for some reason.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                }

            },
            error: function (error) {
                console.log("Error sending intention text:", error);
            }
        });

    }

    function parseIntentionsResponse(response, unshift = false) {


        // id | username | title | text_ref | category | dateandtime

        console.log("response:", response);

        numRows = response.slice(response.indexOf("numRows") + "numRows".length + 2);
        numRows = numRows.substring(0, numRows.length - 1);

        numRowsRetrieved += Number(numRows);

        // console.log("numRows: ", numRows);
        var intentionsIDListString;
        var intentionsUsernameListString;
        var intentionsTitleListString;
        var intentionsTextRefListString;
        var intentionsTagsListString;
        var intentionsDateandtimeListString;
        var intentionsProfilePicRefListString;
        var intentionsReactsArraysString;

        intentionsIDListString = response.split(",", numRows).toString();
        // console.log("intentionsIDListString: " + intentionsIDListString);
        response = response.substring(response.indexOf(intentionsIDListString) + intentionsIDListString.length + 1);

        intentionsUsernameListString = response.split(",", numRows).toString();
        // console.log("intentionsUsernameListString1: " + intentionsUsernameListString);
        response = response.substring(response.indexOf(intentionsUsernameListString) + intentionsUsernameListString.length + 1);

        intentionsTitleListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(intentionsTitleListString) + intentionsTitleListString.length + 1);

        intentionsTextRefListString = response.split(",", numRows).toString();
        // console.log("intentionsTextRefListString: " + intentionsTextRefListString);
        response = response.substring(response.indexOf(intentionsTextRefListString) + intentionsTextRefListString.length + 1);
        // console.log("response after first substring: " + response);

        intentionsTagsListString = response.split(",", numRows).toString();
        // console.log("intentionsTagsListString: " + intentionsTagsListString);
        response = response.substring(response.indexOf(intentionsTagsListString) + intentionsTagsListString.length + 1);
        // console.log("response after second substring: " + response);

        intentionsDateandtimeListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(intentionsDateandtimeListString) + intentionsDateandtimeListString.length + 1);

        intentionsProfilePicRefListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(intentionsProfilePicRefListString) + intentionsProfilePicRefListString.length + 1);

        intentionsReactsArraysString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(intentionsReactsArraysString) + intentionsReactsArraysString.length + 1);


        intentionsIDListString = intentionsIDListString.substring(intentionsIDListString.indexOf(":") + 1, intentionsIDListString.length);
        intentionsIDListString = intentionsIDListString.substring(1, intentionsIDListString.length - 1); // 1 instead of 2 because it's ints not strings with ""
        // console.log('intentionsIDListString2: ' + intentionsIDListString);
        intentionsUsernameListString = intentionsUsernameListString.substring(intentionsUsernameListString.indexOf(":") + 1, intentionsUsernameListString.length);
        intentionsUsernameListString = intentionsUsernameListString.substring(2, intentionsUsernameListString.length - 2);
        // console.log("intentionsTextRefListString before substrings: " + intentionsTextRefListString);
        intentionsTitleListString = intentionsTitleListString.substring(intentionsTitleListString.indexOf(":") + 1, intentionsTitleListString.length);
        intentionsTitleListString = intentionsTitleListString.substring(2, intentionsTitleListString.length - 2);
        intentionsTextRefListString = intentionsTextRefListString.substring(intentionsTextRefListString.indexOf(":") + 1, intentionsTextRefListString.length);
        // console.log("intentionsTextRefListString after first substring: " + intentionsTextRefListString);
        intentionsTextRefListString = intentionsTextRefListString.substring(2, intentionsTextRefListString.length - 2);
        intentionsTagsListString = intentionsTagsListString.substring(intentionsTagsListString.indexOf(":") + 1, intentionsTagsListString.length);
        intentionsTagsListString = intentionsTagsListString.substring(2, intentionsTagsListString.length - 2);
        intentionsDateandtimeListString = intentionsDateandtimeListString.substring(intentionsDateandtimeListString.indexOf(":") + 1, intentionsDateandtimeListString.length);
        intentionsDateandtimeListString = intentionsDateandtimeListString.substring(2, intentionsDateandtimeListString.length - 2);
        intentionsProfilePicRefListString = intentionsProfilePicRefListString.substring(intentionsProfilePicRefListString.indexOf(":") + 1, intentionsProfilePicRefListString.length);
        intentionsProfilePicRefListString = intentionsProfilePicRefListString.substring(2, intentionsProfilePicRefListString.length - 2);
        intentionsReactsArraysString = intentionsReactsArraysString.substring(intentionsReactsArraysString.indexOf(":") + 1, intentionsReactsArraysString.length);
        intentionsReactsArraysString = intentionsReactsArraysString.substring(2, intentionsReactsArraysString.length - 2);

        console.log("intentionsTextRefListString: ", intentionsTextRefListString);
        // console.log("intentionsTagsListString: ", intentionsTagsListString);
        // console.log("intentionsUsernameListString: ", intentionsUsernameListString);
        // console.log("intentionsDateandtimeListString: ", intentionsDateandtimeListString);
        // console.log("intentionsIDListString", intentionsIDListString);
        // console.log("intentionsProfilePicRefListString", intentionsProfilePicRefListString);
        // console.log("intentionsReactsArraysString", intentionsReactsArraysString);

        if (intentionsIDListString) {

            // example url: \/home1\/crdhl1x4\/public_html\/Intentions\/IntentionTextFiles\/jrogers20@protonmail.com1627663590.txt
            var i = -1;
            var iTemp = -1;
            while ((i = intentionsTextRefListString.indexOf('Intentions', i + 1)) != -1) {
                if (iTemp == -1) {
                    intentionsTextRefListString = 'https://worldwideprayer.world/' + intentionsTextRefListString.substring(i, intentionsTextRefListString.length);
                }
                if (intentionsTextRefListString.substring(iTemp, i + 1).includes('","')) { // checking for a '","' to make sure we went to the next text file and are not overwriting the previous text file name (if the user had 'PrayerRoomPrayers' in their username)
                    intentionsTextRefListString = intentionsTextRefListString.substring(0, intentionsTextRefListString.indexOf('","', iTemp) + 1) + ',"https://worldwideprayer.world/' + intentionsTextRefListString.substring(i, intentionsTextRefListString.length);
                }
                iTemp = i;
            }


            intentionsTitleListString = unicodeToChar(intentionsTitleListString) // unicodeToChar converts stuff like \u2013 to their correct chars (e.g. \u2013 = an em dash)

            // let find = '\\u2019';
            // let replace = "\'";
            // intentionsTitleListString = intentionsTitleListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);

            if (unshift) {
                intentionsIDList.unshift(...intentionsIDListString.split(',')); // it has ints not strings so no ""
                intentionsTextRefList.unshift(...intentionsTextRefListString.split('","'));
                intentionsTagsList.unshift(...intentionsTagsListString.split('","'));
                intentionsUsernameList.unshift(...intentionsUsernameListString.split('","'));
                intentionsTitleList.unshift(...intentionsTitleListString.split('","'));
                intentionsDateandtimeList.unshift(...intentionsDateandtimeListString.split('","'));
                intentionsProfilePicList.unshift(...intentionsProfilePicRefListString.split('","'));
                intentionsReactsArrays.unshift(...intentionsReactsArraysString.split('","'));
            } else {
                intentionsIDList.push(...intentionsIDListString.split(',')); // it has ints not strings so no ""
                intentionsTextRefList.push(...intentionsTextRefListString.split('","'));
                intentionsTagsList.push(...intentionsTagsListString.split('","'));
                intentionsUsernameList.push(...intentionsUsernameListString.split('","'));
                intentionsTitleList.push(...intentionsTitleListString.split('","'));
                intentionsDateandtimeList.push(...intentionsDateandtimeListString.split('","'));
                intentionsProfilePicList.push(...intentionsProfilePicRefListString.split('","'));
                intentionsReactsArrays.push(...intentionsReactsArraysString.split('","'));
            }

            console.log("intentionsTextRefList: ", intentionsTextRefList);
            // console.log("intentionsIDList: ", intentionsIDList);
            // console.log("intentionsTitleList: ", intentionsTitleList);
            // console.log("intentionsTagsList", intentionsTagsList);

            for (var i = 0; i < intentionsReactsArrays.length; i++) {
                if (!intentionsReactsArrays[i]) {
                    intentionsReactsArrays[i] = "0 0 0 0 0 0";
                } else {
                    if ((intentionsReactsArrays[i][0]) && ((typeof intentionsReactsArrays[i][0] === 'string') || (intentionsReactsArrays[i][0] instanceof String))) {
                        intentionsReactsArrays[i] = intentionsReactsArrays[i].trim()
                        intentionsReactsArrays[i] = intentionsReactsArrays[i].replace(/ +/g, " "); // remove extra whitespace between the numbers
                    }
                }

                if ((intentionsReactsArrays[i][0]) && ((typeof intentionsReactsArrays[i][0] === 'string') || (intentionsReactsArrays[i][0] instanceof String))) {
                    intentionsReactsArrays[i] = intentionsReactsArrays[i].split(' ').map(Number)
                } else {
                    intentionsReactsArrays[i] = intentionsReactsArrays[i].map(Number)
                }
            }


            console.log("intentionsReactsArrays", intentionsReactsArrays);

        }

    }

    ///////////////////////////////////////////////////////////////////////

    $('#testimonialsSideNav').scroll(function () {
        // console.log("scrolled testimonials sidenav");
        // console.log('document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom', document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom)
        // console.log('document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom', document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom);
        if (document.getElementById("testimonialsMenuList").getBoundingClientRect().bottom
            - document.getElementById("testimonialsSideNav").getBoundingClientRect().bottom - 30 <= 0 && (testimonialsIDList.length > 5)) {
            loadTestimonialsList(currentTestimonialsSelection, 'mostRecent', 10, testimonialsSearchInput, '');
        }
    });

    function goToTestimonialFunction(e) {
        numRow = $('#testimonialsSideNav .room_row_info_container').index(this);

        console.log("numRow: " + numRow, "id: " + idList[numRow], "textRef: " + textRefList[numRow]);


    }

    function saveTestimonialFunction(e) {

        if (!username || !isUserLoggedIn) { // if the prayer room has already been saved by the user, don't show the option to save it
            snackbarMessage.innerHTML = "Login to save testimonials!";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            return;
        }

        numRow = $('#testimonialsSideNav .room_row_savebtn').index(this);

        testimonialID = testimonialsIDList[numRow];

        console.log("Saving testimonial. this: " + this + ", numRow: " + numRow + ", testimonialID: " + testimonialID);

        $.ajax({
            type: "POST",
            url: "create_testimonial_functions.php",
            data: {
                action: 'saveTestimonial',
                username: username,
                testimonialID: testimonialID
            },
            success: function (response) {
                console.log("response:", response);// response.responseText);

                if (response.includes('Testimonial not saved for some reason.')) {
                    snackbarMessage.innerHTML = "An error occurred. Sorry, the testimonial was not saved.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('Testimonial successfully saved!')) {
                    snackbarMessage.innerHTML = "Testimonial saved!";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    $('#testimonialsSideNav .room_row_savebtn')[numRow].style.display = 'none';

                } else if (response.includes('Testimonial already saved for this user.')) {
                    snackbarMessage.innerHTML = "Testimonial has already been saved.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    $('#testimonialsSideNav .room_row_savebtn')[numRow].style.display = 'none';
                }

            },
            error: function (error) {
                console.log("There was an error saving the testimonial:", error);
            }
        });
    }

    function editTestimonialFunction(e) {

        console.log(this);


    }

    function loadTestimonialsList(action, query, limit, testimonialsSearchInput, orderBy, category, sortBy, category) {

        if (sortBy) {
            php_url = 'create_prayer_room_functions.php';
        } else {
            php_url = "create_testimonial_functions.php";
        }

        console.log("loadTestimonialsListTriggered", loadTestimonialsListTriggered);
        if (!loadTestimonialsListTriggered) {
            loadTestimonialsListTriggered = true;

            numCalled++;
            console.log("NUMBER OF TIMES CALLED:", numCalled);

            var menu_list = document.getElementById("testimonialsMenuList");

            if (!action) {
                console.log("loading default action (getting all testimonials)");
                action = 'getTestimonials';
                usernameInput = '';
                document.getElementById('testimonials_menu_title').innerHTML = "Testimonials Worldwide";
                document.getElementById('all_testimonials_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('my_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('saved_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('followed_testimonials_label').style = "background-color: " + 'none';
            } else if (action == 'getMyTestimonials') {
                usernameInput = username;
                document.getElementById('testimonials_menu_title').innerHTML = "My Testimonials";
                document.getElementById('all_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('my_testimonials_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('saved_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('followed_testimonials_label').style = "background-color: " + 'none';
            } else if (action == 'getMySavedTestimonials') {
                usernameInput = username;
                document.getElementById('testimonials_menu_title').innerHTML = "Saved Testimonials";
                document.getElementById('all_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('my_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('saved_testimonials_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('followed_testimonials_label').style = "background-color: " + 'none';
            } else if (action == 'getFollowedTestimonials') {
                usernameInput = username;
                document.getElementById('testimonials_menu_title').innerHTML = "Followed Testimonials";
                document.getElementById('all_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('my_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('saved_testimonials_label').style = "background-color: " + 'none';
                document.getElementById('followed_testimonials_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
            }

            $.ajax({
                type: "POST",
                url: "create_testimonial_functions.php",
                data: {
                    action: 'getSavedTestimonialsByUsername',
                    username: username
                },
                success: function (response2) {
                    console.log("response2 testimonials:", response2);// response.responseText);

                    numPrayerRooms = response2.slice(response2.indexOf("numRows") + "numRows".length + 2);
                    numPrayerRooms = numPrayerRooms.substring(0, numPrayerRooms.length - 1);
                    // console.log("numPrayerRooms: ", numPrayerRooms);
                    var usernameListString;
                    var idListString;

                    usernameListString = response2.split(",", numPrayerRooms).toString();
                    // console.log("usernameListString1: " + usernameListString);
                    response2 = response2.substring(response2.indexOf(usernameListString) + usernameListString.length + 1);

                    idListString = response2.split(",", numPrayerRooms).toString();
                    console.log("idListString: " + idListString);
                    response2 = response2.substring(response2.indexOf(idListString) + idListString.length + 1);

                    usernameListString = usernameListString.substring(usernameListString.indexOf(":") + 1, usernameListString.length);
                    usernameListString = usernameListString.substring(2, usernameListString.length - 2);

                    idListString = idListString.substring(idListString.indexOf(":") + 1, idListString.length);
                    idListString = idListString.substring(1, idListString.length - 1); // 1 instead of 2 because it's ints not strings with ""
                    console.log('idListString2: ' + idListString);

                    savedTestimonialsUsernameList = usernameListString.split('","');
                    savedTestimonialsIdList = idListString.split(',');
                    // testimonialsIdList = testimonialsIdList.map(Number); // convert to array of ints

                    console.log("numRowsRetrieved", numRowsRetrieved);

                    // CAN'T POST AN ARRAY TO THE PHP FILE FOR SOME REASON SO CAN SEND THE ARRAY OF ROOMIDS THAT THE USER SAVED TO ONLY GET THOSE
                    // SO IN THE FUNCTION ASKING FOR THE USER'S SAVED ROOMS AM JUST CHECKING AGAIN WHICH ROOM IDS THEY HAVE SAVED IN THE DATABASE
                    // IT'S A NONIDEAL NUMBER OF READS BUT DON'T KNOW HOW ELSE TO DO IT
                    $.ajax({
                        type: "POST",
                        url: php_url,
                        data: {
                            action: action,
                            query: query,
                            start: numRowsRetrieved,
                            limit: limit,
                            searchInput: testimonialsSearchInput,
                            orderBy: orderBy,
                            username: usernameInput,
                            sortBy: sortBy,
                            entryType: 'testimonial',
                            category: category
                        },
                        // data: JSON.stringify([1, 2, 3]),
                        // dataType: "json",
                        // contentType: 'application/json; charset=utf-8',
                        success: function (response) {

                            roomsWereRetrieved = parseTestimonialsResponse(response);

                            // if person is looking at their created prayer rooms but there aren't any show a message saying they can create one
                            if (action == 'getMyTestimonials' && roomsWereRetrieved == 0 && !noPrayerRoomsMessageAppended) {
                                var createTestimonialButton = document.createElement("a");
                                createTestimonialButton.className = "btn btn-info menu-list-item prayer_room_row cursor-pointer";
                                createTestimonialButton.innerHTML = "You have no testimonials. Create one here!"
                                createTestimonialButton.onclick = function () {
                                    window.open('./create-prayer-room');
                                };

                                menu_list.appendChild(createTestimonialButton);
                                noPrayerRoomsMessageAppended = true;
                            }

                            console.log('numRowsRetrieved', numRowsRetrieved);

                            for (var i = roomCounter; i < numRowsRetrieved; i++) {
                                // console.log("roomCounter:", roomCounter);

                                addTestimonialToList(addToTop = false)
                            }

                            loadTestimonialsListTriggered = false;

                            if (testimonialRows.length > 0) {
                                setTimeout(function () {
                                    for (var i = 0; i < testimonialRows.length; i++) {
                                        testimonialRows[i].style.opacity = 1;
                                        testimonialRows[i].style.transform = 'scale(1)';
                                    }
                                }, 0);
                            }

                        },
                        error: function (error) {
                            console.log("There was an error getting the testimonials: ", error);
                            snackbarMessage.innerHTML = "There was an error getting the testimonials: ", error;
                            snackbarMessage.className = "show";
                            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                        }
                    });

                },
                error: function (error) {
                    console.log("There was an error getting the testimonials:", error);
                }
            });
        }
    }

    function onTestimonialCategoryChange(element) {
        // uncheck any other boxes
        elements = document.getElementsByClassName('testimonial_category_checkbox');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] != element) {
                elements[i].checked = false;
            }
        }
    }

    function addTestimonialToList(addToTop = false) {
        var roomCounterTemp = 0;

        var testimonialRow = document.createElement("a");
        testimonialRow.className = "btn btn-info menu-list-item prayer_room_row";

        if (addToTop) {
            document.getElementById("testimonialsMenuList").insertBefore(testimonialRow, document.getElementById("testimonialsMenuList").firstChild);
        } else {
            document.getElementById("testimonialsMenuList").appendChild(testimonialRow);
            roomCounterTemp = roomCounter;
        }

        testimonialRows[roomCounterTemp] = testimonialRow;

        var testimonialInfoContainer = document.createElement("div");
        testimonialInfoContainer.className = "room_row_info_container";
        testimonialInfoContainer.onclick = goToTestimonialFunction;
        testimonialRow.appendChild(testimonialInfoContainer);

        var profilePic = document.createElement("img");
        profilePic.className = "w3-circle room_row_profile_pic";
        profilePic.onerror = function (event) {
            this.src = default_profile_pic;
        };
        profilePic.src = testimonialsProfilePicRefList[roomCounterTemp];
        testimonialInfoContainer.appendChild(profilePic);

        var username_div = document.createElement("div");
        username_div.className = "entry_row_username";
        if (testimonialsUsernameList[roomCounterTemp]) {
            username_div.innerHTML = testimonialsUsernameList[roomCounterTemp];
            username_div.onclick = function () {
                goToProfile(this, "testimonial");
            }
            if (testimonialsSearchInput != undefined) {
                var markJSInstance = new Mark(username_div);
                markJSInstance.mark(testimonialsSearchInput);
            }
        }
        testimonialInfoContainer.appendChild(username_div)

        var reactsContainer = document.createElement("div");
        reactsContainer.className = "reacts_container";
        testimonialRow.appendChild(reactsContainer);

        // display the emojis and their numbers
        displayReacts(reactsContainer, testimonialsReactsArrays, roomCounterTemp, 'testimonial');

        var title = document.createElement("div");
        title.className = "room_row_name";
        if (testimonialsTitleList[roomCounterTemp]) {
            title.innerHTML = testimonialsTitleList[roomCounterTemp].split("\n").join("<br>");
            if (testimonialsSearchInput != undefined) {
                var markJSInstance = new Mark(title);
                markJSInstance.mark(testimonialsSearchInput);
            }
        } else {
            title.innerHTML += 'Testimonial ' + (roomCounter + 1); // roomCounter starts at 0
        }
        testimonialRow.appendChild(title);

        var tagsRowContainer = document.createElement("div");
        tagsRowContainer.className = "tags_row_container";
        testimonialRow.append(tagsRowContainer);

        var tags = document.createElement("div");
        tags.className = "testimonial_row_category";
        // console.log("testimonialsTagsList1:", testimonialsTagsList);
        if (testimonialsTagsList[roomCounterTemp]) {
            // console.log('testimonialsTagsList[', roomCounterTemp, ']', testimonialsTagsList[roomCounterTemp])
            tags.innerHTML = ' ' + testimonialsTagsList[roomCounterTemp].replace(new RegExp(escapeRegExp('||||| '), 'g'), ', ').replace(new RegExp(escapeRegExp('\\/'), 'g'), '/');
        }
        tagsRowContainer.appendChild(tags);
        console.log("searchInput1", testimonialsSearchInput)
        if (testimonialsSearchInput != undefined) {
            var markJSInstance = new Mark(tags);
            // console.log("markJSInstance", markJSInstance, "tags", tags, "testimonialsSearchInput", testimonialsSearchInput);
            markJSInstance.mark(testimonialsSearchInput);
        }

        var testimonialText = document.createElement("div");
        testimonialTextElements[roomCounterTemp] = testimonialText;
        testimonialText.className = "testimonial_text";
        if (testimonialsTextRefList[roomCounterTemp]) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'text';

            (function (index) {
                xhr.onload = function (event) {
                    // if (index == testimonialTextElements.length - 1) {
                    var text = xhr.responseText;
                    // console.log("index", index, "responseText:", text);
                    // }

                    if (!text || text == '&lt;p&gt;&lt;br data-mce-bogus=&quot;1&quot;&gt;&lt;/p&gt;') {
                        testimonialText.style.display = 'none';
                    } else {
                        testimonialTextElements[index].innerHTML = text;
                        text = testimonialTextElements[index].textContent;
                        testimonialTextElements[index].innerHTML = text;
                    }

                    // if (testimonialsSearchInput != undefined) {
                    //     var markJSInstance = new Mark(testimonialTextElements[index]);
                    //     markJSInstance.mark(testimonialsSearchInput);
                    // }
                };
            }(roomCounterTemp));

            // console.log(testimonialsTextRefList[roomCounterTemp]);
            xhr.open('GET', testimonialsTextRefList[roomCounterTemp]);
            xhr.send();
        }

        testimonialRow.appendChild(testimonialText);

        var secondRowContainer = document.createElement("div");
        secondRowContainer.className = "room_second_row_container";
        testimonialRow.append(secondRowContainer);

        var optionsContainer = document.createElement("div");
        optionsContainer.className = "room_options_container";
        secondRowContainer.append(optionsContainer);

        var saveTestimonial = document.createElement("img");
        saveTestimonial.className = "room_row_savebtn";
        saveTestimonial.src = "images/save_icon_purple.png";
        saveTestimonial.onclick = saveTestimonialFunction;
        optionsContainer.appendChild(saveTestimonial);

        // console.log('testimonialsIdList:', testimonialsIdList, 'idList[roomCounterTemp]:', idList[roomCounterTemp]);
        if (savedTestimonialsIdList.includes(testimonialsIDList[roomCounterTemp])) { // if the prayer room has already been saved by the user, don't show the option to save it
            saveTestimonial.style.display = 'none';
        }

        // for the user's own rooms add a button for them to change that room's settings
        if (username == testimonialsUsernameList[roomCounterTemp]) {
            // var editTestimonial = document.createElement("img");
            // editTestimonial.className = "room_row_editbtn";
            // editTestimonial.src = "images/edit_icon_purple.png";
            // editTestimonial.onclick = editTestimonialFunction;
            // optionsContainer.appendChild(editTestimonial);

            var deleteTestimonial = document.createElement("img");
            deleteTestimonial.className = "room_row_deletebtn";
            deleteTestimonial.src = "images/delete_icon_purple.png";
            deleteTestimonial.onclick = function () {
                deleteEntryFunction(this, 'testimonial')
            };
            optionsContainer.appendChild(deleteTestimonial);
        }

        // add a button to report rooms that aren't the user's
        if (username != testimonialsUsernameList[roomCounterTemp]) {
            var reportTestimonial = document.createElement("img")
            reportTestimonial.className = "room_row_reportbtn";
            reportTestimonial.src = "images/report_icon_purple.png";
            reportTestimonial.onclick = function () {
                reportEntryFunction(this, 'testimonial')
            };
            optionsContainer.appendChild(reportTestimonial);
        }

        roomCounter++;
    }

    function postTestimonial() {

        if (!localStorage.getItem('isUserLoggedIn')) {

            snackbarMessage.innerHTML = "Please login to post a testimonial!";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

            return;
        }

        if (!document.getElementById("testimonial_title_input").value) {
            snackbarMessage.innerHTML = "The title for the testimonial cannot be empty.";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

            return;
        }

        if (document.getElementById("testimonial_title_input").value.includes(',') || document.getElementById("testimonial_title_input").value.includes('[') ||
            document.getElementById("testimonial_title_input").value.includes(']') || document.getElementById("testimonial_title_input").value.includes(':')) {
            snackbarMessage.innerHTML = "The title for the testimonial cannot contain ',', '[', ']', or ':'.";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

            return;
        }

        var form_data = new FormData();                  // Creating object of FormData class
        form_data.append("testimonialText", document.getElementById("testimonials_text_area_ifr").contentDocument.getElementById("tinymce").innerHTML);              // Appending parameter named file with properties of file_field to form_data
        form_data.append("testimonialTitle", document.getElementById("testimonial_title_input").value)

        var testimonialTags = '';
        var addedTagButtons = document.querySelectorAll('#testimonialsSideNav .added_tag_button');
        for (var i = 0; i < addedTagButtons.length; i++) {
            if (i == 0) {
                testimonialTags = addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.length - 2);
            } else {
                testimonialTags += '||||| ' + addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.length - 2);
            }
        }
        form_data.append("testimonialTags", testimonialTags);

        form_data.append("username", username)
        form_data.append("profile_pic_ref", profile_pic_ref)
        form_data.append("action", 'createTestimonial')

        $.ajax({
            url: "create_testimonial_functions.php",
            cache: false,
            contentType: false,
            processData: false,
            method: 'POST',
            type: 'POST', // For jQuery < 1.9
            data: form_data,
            success: function (response) {

                console.log(response);

                if (response.includes('Testimonial successfully saved!')) {
                    snackbarMessage.innerHTML = "Testimonial successfully offered up!";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    response = response.replace("Testimonial successfully saved!", '');

                    // disable the posting button for a certain amount of time to prevent spam
                    document.getElementById('post_testimonial_button').disabled = true;
                    setTimeout(function () { document.getElementById('post_testimonial_button').disabled = false; }, 10000);

                    parseTestimonialsResponse(response, unshift = true);

                    addTestimonialToList(addToTop = true);

                    if (testimonialRows.length > 0) {
                        setTimeout(function () {
                            for (var i = 0; i < testimonialRows.length; i++) {
                                testimonialRows[i].style.opacity = 1;
                                testimonialRows[i].style.transform = 'scale(1)';
                            }
                        }, 0);
                    }


                } else if (response.includes('Testimonial not saved for some reason.')) {
                    snackbarMessage.innerHTML = "Testimonial not saved for some reason.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                }

            },
            error: function (error) {
                console.log("Error sending testimonial text:", error);
            }
        });

    }

    function parseTestimonialsResponse(response, unshift = false) {


        // id | username | title | text_ref | category | dateandtime

        console.log("response:", response);

        numRows = response.slice(response.indexOf("numRows") + "numRows".length + 2);
        numRows = numRows.substring(0, numRows.length - 1);

        numRowsRetrieved += Number(numRows);

        // console.log("numRows: ", numRows);
        var testimonialsIDListString;
        var testimonialsUsernameListString;
        var testimonialsTitleListString;
        var testimonialsTextRefListString;
        var testimonialsTagsListString;
        var testimonialsDateandtimeListString;
        var testimonialsProfilePicRefListString;
        var testimonialsReactsArraysString;

        testimonialsIDListString = response.split(",", numRows).toString();
        // console.log("testimonialsIDListString: " + testimonialsIDListString);
        response = response.substring(response.indexOf(testimonialsIDListString) + testimonialsIDListString.length + 1);

        testimonialsUsernameListString = response.split(",", numRows).toString();
        // console.log("testimonialsUsernameListString1: " + testimonialsUsernameListString);
        response = response.substring(response.indexOf(testimonialsUsernameListString) + testimonialsUsernameListString.length + 1);

        testimonialsTitleListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(testimonialsTitleListString) + testimonialsTitleListString.length + 1);

        testimonialsTextRefListString = response.split(",", numRows).toString();
        // console.log("testimonialsTextRefListString: " + testimonialsTextRefListString);
        response = response.substring(response.indexOf(testimonialsTextRefListString) + testimonialsTextRefListString.length + 1);
        // console.log("response after first substring: " + response);

        testimonialsTagsListString = response.split(",", numRows).toString();
        // console.log("testimonialsTagsListString: " + testimonialsTagsListString);
        response = response.substring(response.indexOf(testimonialsTagsListString) + testimonialsTagsListString.length + 1);
        // console.log("response after second substring: " + response);

        testimonialsDateandtimeListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(testimonialsDateandtimeListString) + testimonialsDateandtimeListString.length + 1);

        testimonialsProfilePicRefListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(testimonialsProfilePicRefListString) + testimonialsProfilePicRefListString.length + 1);

        testimonialsReactsArraysString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(testimonialsReactsArraysString) + testimonialsReactsArraysString.length + 1);


        testimonialsIDListString = testimonialsIDListString.substring(testimonialsIDListString.indexOf(":") + 1, testimonialsIDListString.length);
        testimonialsIDListString = testimonialsIDListString.substring(1, testimonialsIDListString.length - 1); // 1 instead of 2 because it's ints not strings with ""
        // console.log('testimonialsIDListString2: ' + testimonialsIDListString);
        testimonialsUsernameListString = testimonialsUsernameListString.substring(testimonialsUsernameListString.indexOf(":") + 1, testimonialsUsernameListString.length);
        testimonialsUsernameListString = testimonialsUsernameListString.substring(2, testimonialsUsernameListString.length - 2);
        // console.log("testimonialsTextRefListString before substrings: " + testimonialsTextRefListString);
        testimonialsTitleListString = testimonialsTitleListString.substring(testimonialsTitleListString.indexOf(":") + 1, testimonialsTitleListString.length);
        testimonialsTitleListString = testimonialsTitleListString.substring(2, testimonialsTitleListString.length - 2);
        testimonialsTextRefListString = testimonialsTextRefListString.substring(testimonialsTextRefListString.indexOf(":") + 1, testimonialsTextRefListString.length);
        // console.log("testimonialsTextRefListString after first substring: " + testimonialsTextRefListString);
        testimonialsTextRefListString = testimonialsTextRefListString.substring(2, testimonialsTextRefListString.length - 2);
        testimonialsTagsListString = testimonialsTagsListString.substring(testimonialsTagsListString.indexOf(":") + 1, testimonialsTagsListString.length);
        testimonialsTagsListString = testimonialsTagsListString.substring(2, testimonialsTagsListString.length - 2);
        testimonialsDateandtimeListString = testimonialsDateandtimeListString.substring(testimonialsDateandtimeListString.indexOf(":") + 1, testimonialsDateandtimeListString.length);
        testimonialsDateandtimeListString = testimonialsDateandtimeListString.substring(2, testimonialsDateandtimeListString.length - 2);
        testimonialsProfilePicRefListString = testimonialsProfilePicRefListString.substring(testimonialsProfilePicRefListString.indexOf(":") + 1, testimonialsProfilePicRefListString.length);
        testimonialsProfilePicRefListString = testimonialsProfilePicRefListString.substring(2, testimonialsProfilePicRefListString.length - 2);
        testimonialsReactsArraysString = testimonialsReactsArraysString.substring(testimonialsReactsArraysString.indexOf(":") + 1, testimonialsReactsArraysString.length);
        testimonialsReactsArraysString = testimonialsReactsArraysString.substring(2, testimonialsReactsArraysString.length - 2);

        // console.log("testimonialsTextRefListString: ", testimonialsTextRefListString);
        // console.log("testimonialsTagsListString: ", testimonialsTagsListString);
        // console.log("testimonialsUsernameListString: ", testimonialsUsernameListString);
        // console.log("testimonialsDateandtimeListString: ", testimonialsDateandtimeListString);
        console.log("testimonialsIDListString", testimonialsIDListString);
        console.log("testimonialsReactsArraysString", testimonialsReactsArraysString);

        if (testimonialsIDListString) {

            // example url: \/home1\/crdhl1x4\/public_html\/Testimonials\/TestimonialTextFiles\/jrogers20@protonmail.com1627663590.txt
            var i = -1;
            var iTemp = -1;
            while ((i = testimonialsTextRefListString.indexOf('Testimonials', i + 1)) != -1) {
                if (iTemp == -1) {
                    testimonialsTextRefListString = 'https://worldwideprayer.world/' + testimonialsTextRefListString.substring(i, testimonialsTextRefListString.length);
                }
                if (testimonialsTextRefListString.substring(iTemp, i + 1).includes('","')) { // checking for a '","' to make sure we went to the next text file and are not overwriting the previous text file name (if the user had 'PrayerRoomPrayers' in their username)
                    testimonialsTextRefListString = testimonialsTextRefListString.substring(0, testimonialsTextRefListString.indexOf('","', iTemp) + 1) + ',"https://worldwideprayer.world/' + testimonialsTextRefListString.substring(i, testimonialsTextRefListString.length);
                }
                iTemp = i;
            }

            testimonialsTitleListString = unicodeToChar(testimonialsTitleListString)

            // let find = '\\u2019';
            // let replace = "\'";
            // testimonialsTitleListString = testimonialsTitleListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);


            if (unshift) {
                testimonialsIDList.unshift(...testimonialsIDListString.split(',')); // it has ints not strings so no ""
                testimonialsTextRefList.unshift(...testimonialsTextRefListString.split('","'));
                testimonialsTagsList.unshift(...testimonialsTagsListString.split('","'));
                testimonialsUsernameList.unshift(...testimonialsUsernameListString.split('","'));
                testimonialsTitleList.unshift(...testimonialsTitleListString.split('","'));
                testimonialsDateandtimeList.unshift(...testimonialsDateandtimeListString.split('","'));
                testimonialsProfilePicRefList.unshift(...testimonialsProfilePicRefListString.split('","'));
                testimonialsReactsArrays.unshift(...testimonialsReactsArraysString.split('","'));
            } else {
                testimonialsIDList.push(...testimonialsIDListString.split(',')); // it has ints not strings so no ""
                testimonialsTextRefList.push(...testimonialsTextRefListString.split('","'));
                testimonialsTagsList.push(...testimonialsTagsListString.split('","'));
                testimonialsUsernameList.push(...testimonialsUsernameListString.split('","'));
                testimonialsTitleList.push(...testimonialsTitleListString.split('","'));
                testimonialsDateandtimeList.push(...testimonialsDateandtimeListString.split('","'));
                testimonialsProfilePicRefList.push(...testimonialsProfilePicRefListString.split('","'));
                testimonialsReactsArrays.push(...testimonialsReactsArraysString.split('","'));
            }


            for (var i = 0; i < testimonialsReactsArrays.length; i++) {
                // console.log('testimonialsReactsArrays', testimonialsReactsArrays);
                if (!testimonialsReactsArrays[i] || testimonialsReactsArrays[i].includes(null)) {
                    testimonialsReactsArrays[i] = "0 0 0 0 0 0";
                } else {
                    if ((testimonialsReactsArrays[i][0]) && ((typeof testimonialsReactsArrays[i][0] === 'string') || (testimonialsReactsArrays[i][0] instanceof String))) {
                        testimonialsReactsArrays[i] = testimonialsReactsArrays[i].trim();
                        testimonialsReactsArrays[i] = testimonialsReactsArrays[i].replace(/ +/g, " "); // remove extra whitespace between the numbers
                    }
                }

                // console.log('testimonialsReactsArrays', testimonialsReactsArrays);

                if ((testimonialsReactsArrays[i][0]) && ((typeof testimonialsReactsArrays[i][0] === 'string') || (testimonialsReactsArrays[i][0] instanceof String))) {
                    testimonialsReactsArrays[i] = testimonialsReactsArrays[i].split(' ').map(Number);
                } else {
                    testimonialsReactsArrays[i] = testimonialsReactsArrays[i].map(Number);
                }

                // console.log('testimonialsReactsArrays', testimonialsReactsArrays);
            }

        }

        // console.log("testimonialsIDList: ", testimonialsIDList);
        // console.log("testimonialsTitleList: ", testimonialsTitleList);
        // console.log("testimonialsTagsList", testimonialsTagsList);


    }


    ///////////////////////////////////////////////////////////////////////

    // load more rooms when the user scrolls to the bottom of the list
    $('#pearlsSideNav').scroll(function () {
        // console.log('document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom', document.getElementById("myPrayerRoomsSideNav").getBoundingClientRect().bottom)
        // console.log('document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom', document.getElementById("myRoomsMenuList").getBoundingClientRect().bottom);
        if (document.getElementById("pearlsMenuList").getBoundingClientRect().bottom
            - document.getElementById("pearlsSideNav").getBoundingClientRect().bottom - 30 <= 0 && (pearlsIDList.length > 5)) {
            loadPearlsList(currentPearlsSelection, 'mostRecent', 10, '', '');
        }
    });

    function goToPearlsFunction(e) {

        if (goingToProfile) { // username of the post was clicked
            return;
        }

        // console.log("this:", this);
        numRow = $('#pearlsSideNav .prayer_room_row').index(this.parentElement);

        if (numRow == -1) {
            numRow = $('#pearlsSideNav .prayer_room_row').index(this.parentElement.parentElement);
        }

        console.log("numRow: " + numRow, "id: " + pearlsIDList[numRow], "textRef: " + pearlsTextRefList[numRow]);

        window.open("PearlsCast/" + pearlsIDList[numRow], "_self");
    }

    function savePearlsFunction(e) {

        if (!username || !isUserLoggedIn) { // if the prayer room has already been saved by the user, don't show the option to save it
            snackbarMessage.innerHTML = "Login to save pearls!";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            return;
        }

        numRow = $('#pearlsSideNav .room_row_savebtn').index(this);

        pearlsID = pearlsIDList[numRow];

        console.log("Saving pearls. this: " + this + ", numRow: " + numRow + ", pearlsID: " + pearlsID);

        $.ajax({
            type: "POST",
            url: "create_prayer_room_functions.php",
            data: {
                action: 'savePearls',
                username: username,
                pearlsID: pearlsID
            },
            success: function (response) {
                console.log("response:", response);// response.responseText);

                if (response.includes('Pearls not saved for some reason.')) {
                    snackbarMessage.innerHTML = "An error occurred. Sorry, the pearls were not saved.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                } else if (response.includes('Pearls successfully saved!')) {
                    snackbarMessage.innerHTML = "Pearls saved!";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    $('#pearlsSideNav .room_row_savebtn')[numRow].style.display = 'none';

                } else if (response.includes('Pearls already saved for this user.')) {
                    snackbarMessage.innerHTML = "Pearls have already been saved.";
                    snackbarMessage.className = "show";
                    setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                    $('#pearlsSideNav .room_row_savebtn')[numRow].style.display = 'none';
                }

            },
            error: function (error) {
                console.log("There was an error saving the pearls:", error);
            }
        });
    }

    function editPearlsFunction(e) {

        console.log(this);

        var numRowWithEditButton = $('#pearlsSideNav .room_row_editbtn').index(this);
        // console.log("numRowWithEditButton: " + numRowWithEditButton);
        var count = -1;
        var numRow = -1;
        for (var i = 0; i < pearlsUsernameList.length; i++) { // doing this because user could click to edit the room from the 'All Prayer Rooms' menu for instance so not all would have the 'room_row_editbtn' class
            // console.log("username: " + username + " | usernameList[i]: " + usernameList[i]);
            if (username == pearlsUsernameList[i]) {
                count++;
                // console.log("count: " + count);
                if (count == numRowWithEditButton) {
                    numRow = i;
                    break;
                }
            }
        }

        // if already in the create-prayer-room page, no need to reload the page just input the info into of the room where it goes
        if (document.URL.includes("/cast-pearls")) {

            // console.log("calling getPearlsSettings()");
            getPearlsSettings(numRow);

            return;
        } else {
            window.open("cast-pearls/pearlsID/" + pearlsIDList[numRow], "_self");
        }


    }

    function loadPearlsList(action, query, limit, pearlsSearchInput, orderBy, sortBy, category) {

        if (sortBy) {
            php_url = 'create_prayer_room_functions.php';
        } else {
            php_url = "create_prayer_room_functions.php";
        }

        console.log("loadPearlsListTriggered", loadPearlsListTriggered);
        if (!loadPearlsListTriggered) {
            loadPearlsListTriggered = true;

            numCalled++;
            console.log("NUMBER OF TIMES CALLED:", numCalled);

            var menu_list = document.getElementById("pearlsMenuList");

            if (!action) {
                console.log("loading default action (getting all pearls)");
                action = 'getPearls';
                usernameInput = '';
                document.getElementById('pearls_menu_title').innerHTML = "Pearls Cast Worldwide";
                document.getElementById('all_pearls_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('my_pearls_label').style = "background-color: " + 'none';
                document.getElementById('saved_pearls_label').style = "background-color: " + 'none';
                document.getElementById('followed_pearls_label').style = "background-color: " + 'none';
            } else if (action == 'getMyPearls') {
                usernameInput = username;
                document.getElementById('pearls_menu_title').innerHTML = "My Pearls";
                document.getElementById('all_pearls_label').style = "background-color: " + 'none';
                document.getElementById('my_pearls_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('saved_pearls_label').style = "background-color: " + 'none';
                document.getElementById('followed_pearls_label').style = "background-color: " + 'none';
            } else if (action == 'getMySavedPearls') {
                usernameInput = username;
                document.getElementById('pearls_menu_title').innerHTML = "Saved Pearls";
                document.getElementById('all_pearls_label').style = "background-color: " + 'none';
                document.getElementById('my_pearls_label').style = "background-color: " + 'none';
                document.getElementById('saved_pearls_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                document.getElementById('followed_pearls_label').style = "background-color: " + 'none';
            } else if (action == 'getFollowedPearls') {
                usernameInput = username;
                document.getElementById('pearls_menu_title').innerHTML = "Followed Pearls";
                document.getElementById('all_pearls_label').style = "background-color: " + 'none';
                document.getElementById('my_pearls_label').style = "background-color: " + 'none';
                document.getElementById('saved_pearls_label').style = "background-color: " + 'none';
                document.getElementById('followed_pearls_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
            }

            $.ajax({
                type: "POST",
                url: "create_prayer_room_functions.php",
                data: {
                    action: 'getSavedPearlsByUsername',
                    username: username
                },
                success: function (response2) {
                    console.log("response2 pearls:", response2);// response.responseText);

                    numPrayerRooms = response2.slice(response2.indexOf("numRows") + "numRows".length + 2);
                    numPrayerRooms = numPrayerRooms.substring(0, numPrayerRooms.length - 1);
                    // console.log("numPrayerRooms: ", numPrayerRooms);
                    var usernameListString;
                    var idListString;

                    usernameListString = response2.split(",", numPrayerRooms).toString();
                    // console.log("usernameListString1: " + usernameListString);
                    response2 = response2.substring(response2.indexOf(usernameListString) + usernameListString.length + 1);

                    idListString = response2.split(",", numPrayerRooms).toString();
                    console.log("idListString: " + idListString);
                    response2 = response2.substring(response2.indexOf(idListString) + idListString.length + 1);

                    usernameListString = usernameListString.substring(usernameListString.indexOf(":") + 1, usernameListString.length);
                    usernameListString = usernameListString.substring(2, usernameListString.length - 2);

                    idListString = idListString.substring(idListString.indexOf(":") + 1, idListString.length);
                    idListString = idListString.substring(1, idListString.length - 1); // 1 instead of 2 because it's ints not strings with ""
                    console.log('idListString2: ' + idListString);

                    savedPearlsUsernameList = usernameListString.split('","');
                    savedPearlsIdList = idListString.split(',');

                    console.log("numRowsRetrieved", numRowsRetrieved);

                    // CAN'T POST AN ARRAY TO THE PHP FILE FOR SOME REASON SO CAN SEND THE ARRAY OF ROOMIDS THAT THE USER SAVED TO ONLY GET THOSE
                    // SO IN THE FUNCTION ASKING FOR THE USER'S SAVED ROOMS AM JUST CHECKING AGAIN WHICH ROOM IDS THEY HAVE SAVED IN THE DATABASE
                    // IT'S A NONIDEAL NUMBER OF READS BUT DON'T KNOW HOW ELSE TO DO IT
                    $.ajax({
                        type: "POST",
                        url: php_url,
                        data: {
                            action: action,
                            query: query,
                            start: numRowsRetrieved,
                            limit: limit,
                            searchInput: pearlsSearchInput,
                            orderBy: orderBy,
                            username: usernameInput,
                            sortBy: sortBy,
                            entryType: 'pearls',
                            category: category
                        },
                        // data: JSON.stringify([1, 2, 3]),
                        // dataType: "json",
                        // contentType: 'application/json; charset=utf-8',
                        success: function (response) {

                            roomsWereRetrieved = parsePearlsResponse(response);

                            // if person is looking at their created prayer rooms but there aren't any show a message saying they can create one
                            if (action == 'getMySavedPearls' && roomsWereRetrieved == 0 && !noPrayerRoomsMessageAppended) {
                                var createPearlsButton = document.createElement("a");
                                createPearlsButton.className = "btn btn-info menu-list-item prayer_room_row cursor-pointer";
                                createPearlsButton.innerHTML = "You have no pearls. Create some here!"
                                createPearlsButton.onclick = function () {
                                    window.open('./cast-pearls');
                                };

                                menu_list.appendChild(createPearlsButton);
                                noPrayerRoomsMessageAppended = true;
                            }

                            console.log('roomCounter: ' + roomCounter + ' | numRowsRetrieved', numRowsRetrieved);

                            for (var i = roomCounter; i < numRowsRetrieved; i++) {
                                // console.log("roomCounter:", roomCounter);

                                addPearlsToList()
                            }

                            loadPearlsListTriggered = false;

                            if (pearlsRows.length > 0) {
                                setTimeout(function () {
                                    for (var i = 0; i < pearlsRows.length; i++) {
                                        pearlsRows[i].style.opacity = 1;
                                        pearlsRows[i].style.transform = 'scale(1)';
                                    }
                                }, 0);
                            }

                        },
                        error: function (error) {
                            console.log("There was an error getting the pearls: ", error);
                            snackbarMessage.innerHTML = "There was an error getting the pearls: ", error;
                            snackbarMessage.className = "show";
                            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                        }
                    });

                },
                error: function (error) {
                    console.log("There was an error getting the pearls:", error);
                }
            });
        }
    }

    function onPearlsCategoryChange(element) {
        // uncheck any other boxes
        elements = document.getElementsByClassName('pearls_category_checkbox');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] != element) {
                elements[i].checked = false;
            }
        }
    }

    function addPearlsToList(addToTop = false) {
        var roomCounterTemp = 0;

        var pearlsRow = document.createElement("a");
        pearlsRows[roomCounter] = pearlsRow;
        pearlsRow.className = "btn btn-info menu-list-item prayer_room_row";

        if (addToTop) {
            document.getElementById("pearlsMenuList").insertBefore(pearlsRow, document.getElementById("pearlsMenuList").firstChild);
        } else {
            document.getElementById("pearlsMenuList").appendChild(pearlsRow);
            roomCounterTemp = roomCounter;
        }

        var pearlsInfoContainer = document.createElement("div");
        pearlsInfoContainer.className = "room_row_info_container";
        pearlsInfoContainer.onclick = goToPearlsFunction;
        pearlsRow.appendChild(pearlsInfoContainer);

        var profilePic = document.createElement("img");
        profilePic.className = "w3-circle room_row_profile_pic";
        profilePic.onerror = function (event) {
            this.src = default_profile_pic;
        };
        profilePic.src = pearlsProfilePicRefList[roomCounterTemp];
        pearlsInfoContainer.appendChild(profilePic);

        var username_div = document.createElement("div");
        username_div.className = "entry_row_username";
        if (pearlsUsernameList[roomCounterTemp]) {
            username_div.innerHTML = pearlsUsernameList[roomCounterTemp];
            username_div.onclick = function () {
                goToProfile(this, "pearls");
            }
            if (pearlsSearchInput != undefined) {
                var markJSInstance = new Mark(username_div);
                markJSInstance.mark(pearlsSearchInput);
            }
        }
        pearlsInfoContainer.appendChild(username_div)

        var reactsContainer = document.createElement("div");
        reactsContainer.className = "reacts_container";
        pearlsRow.appendChild(reactsContainer);

        // display the emojis and their numbers
        displayReacts(reactsContainer, pearlsReactsArrays, roomCounterTemp, 'pearls');

        var title = document.createElement("div");
        title.className = "room_row_name";
        if (pearlsTitleList[roomCounterTemp]) {
            title.innerHTML = pearlsTitleList[roomCounterTemp].split("\n").join("<br>");
            if (!pearlsTitleList[roomCounterTemp]) {
                title.innerHTML += 'Pearls ' + (roomCounter + 1); // roomCounter starts at 0
            }

            if (pearlsSearchInput != undefined) {
                var markJSInstance = new Mark(title);
                markJSInstance.mark(pearlsSearchInput);
            }
        }
        pearlsRow.appendChild(title);

        var tagsRowContainer = document.createElement("div");
        tagsRowContainer.className = "tags_row_container";
        pearlsRow.append(tagsRowContainer);

        var tags = document.createElement("div");
        tags.className = "pearls_row_category";
        if (pearlsTagsList[roomCounterTemp]) {
            // console.log('pearlsTagsList[', roomCounterTemp, ']', pearlsTagsList[roomCounterTemp])
            tags.innerHTML = ' ' + pearlsTagsList[roomCounterTemp].replace(new RegExp(escapeRegExp('||||| '), 'g'), ', ').replace(new RegExp(escapeRegExp('\\/'), 'g'), '/');
        }
        tagsRowContainer.appendChild(tags);
        if (pearlsSearchInput != undefined) {
            var markJSInstance = new Mark(tags);
            markJSInstance.mark(pearlsSearchInput);
        }

        var pearlsText = document.createElement("div");
        pearlsTextElements[roomCounterTemp] = pearlsText;
        pearlsText.className = "pearls_text";
        pearlsText.onclick = goToPearlsFunction;
        if (pearlsTextRefList[roomCounterTemp]) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'text';

            (function (index) {
                xhr.onload = function (event) {

                    var text = xhr.responseText;
                    // if (index == pearlsTextElements.length - 1) {
                    // console.log("index", index, "responseText:", text);
                    // }
                    pearlsTextElements[index].innerHTML = text;//.split("\n").join("<br>");

                    text = pearlsTextElements[index].textContent;

                    pearlsTextElements[index].innerHTML = text;

                    // if (pearlsSearchInput != undefined) {
                    //     var markJSInstance = new Mark(pearlsTextElements[index]);
                    //     markJSInstance.mark(pearlsSearchInput);
                    // }
                };
            }(roomCounterTemp));

            console.log(pearlsTextRefList[roomCounterTemp]);
            xhr.open('GET', pearlsTextRefList[roomCounterTemp]);
            xhr.send();
        }

        pearlsRow.appendChild(pearlsText);

        var secondRowContainer = document.createElement("div");
        secondRowContainer.className = "room_second_row_container";
        pearlsRow.append(secondRowContainer);

        var optionsContainer = document.createElement("div");
        optionsContainer.className = "room_options_container";
        secondRowContainer.append(optionsContainer);

        var savePearls = document.createElement("img");
        savePearls.className = "room_row_savebtn";
        savePearls.src = "images/save_icon_purple.png";
        savePearls.onclick = savePearlsFunction;
        optionsContainer.appendChild(savePearls);

        // console.log('pearlsIdList:', pearlsIdList, 'idList[roomCounterTemp]:', idList[roomCounterTemp]);
        if (savedPearlsIdList.includes(pearlsIDList[roomCounterTemp])) { // if the prayer room has already been saved by the user, don't show the option to save it
            savePearls.style.display = 'none';
        }

        // for the user's own rooms add a button for them to change that room's settings
        if (username == pearlsUsernameList[roomCounterTemp]) {
            var editPearls = document.createElement("img");
            editPearls.className = "room_row_editbtn";
            editPearls.src = "images/edit_icon_purple.png";
            editPearls.onclick = editPearlsFunction;
            optionsContainer.appendChild(editPearls);

            var deletePearls = document.createElement("img");
            deletePearls.className = "room_row_deletebtn";
            deletePearls.src = "images/delete_icon_purple.png";
            deletePearls.onclick = function () {
                deleteEntryFunction(this, 'pearls')
            };
            optionsContainer.appendChild(deletePearls);
        }

        // add a button to report rooms that aren't the user's
        if (username != pearlsUsernameList[roomCounterTemp]) {
            var reportPearls = document.createElement("img")
            reportPearls.className = "room_row_reportbtn";
            reportPearls.src = "images/report_icon_purple.png";
            reportPearls.onclick = function () {
                reportEntryFunction(this, 'pearls')
            };
            optionsContainer.appendChild(reportPearls);
        }

        roomCounter++;
    }


    function parsePearlsResponse(response, unshift = false) {


        // id | username_of_creator | profile_pic_ref | creator_name | room_name | room_password | text_ref | background_ref | music_ref | recording_ref | prayer_length | prayer_datetime

        console.log("response:", response);

        numRows = response.slice(response.indexOf("numRows") + "numRows".length + 2);
        numRows = numRows.substring(0, numRows.length - 1);

        numRowsRetrieved += Number(numRows);

        // console.log("numRows: ", numRows);
        var pearlsIDListString;
        var pearlsUsernameListString;
        var pearlsProfilePicRefListString;
        var pearlsCreatorNameListString;
        var pearlsTitleListString;
        var pearlsRoomPasswordListString;
        var pearlsTextRefListString;
        var pearlsBackgroundRefListString;
        var pearlsMusicRefListString;
        var pearlsDateandtimeVisibleListString;
        var pearlsDateandtimeCreatedListString;
        var pearlsTagsListString;
        var pearlsReactsArraysString;

        pearlsIDListString = response.split(",", numRows).toString();
        // console.log("pearlsIDListString: " + pearlsIDListString);
        response = response.substring(response.indexOf(pearlsIDListString) + pearlsIDListString.length + 1);

        pearlsUsernameListString = response.split(",", numRows).toString();
        // console.log("pearlsUsernameListString1: " + pearlsUsernameListString);
        response = response.substring(response.indexOf(pearlsUsernameListString) + pearlsUsernameListString.length + 1);

        pearlsProfilePicRefListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsProfilePicRefListString) + pearlsProfilePicRefListString.length + 1);

        pearlsCreatorNameListString = response.split(",", numRows).toString();
        // console.log("pearlsCreatorNameListString: " + pearlsCreatorNameListString);
        response = response.substring(response.indexOf(pearlsCreatorNameListString) + pearlsCreatorNameListString.length + 1);
        // console.log("response after first substring: " + response);

        pearlsTitleListString = response.split(",", numRows).toString();
        // console.log("pearlsTitleListString: " + pearlsTitleListString);
        response = response.substring(response.indexOf(pearlsTitleListString) + pearlsTitleListString.length + 1);
        // console.log("response after second substring: " + response);

        pearlsRoomPasswordListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsRoomPasswordListString) + pearlsRoomPasswordListString.length + 1);

        pearlsTextRefListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsTextRefListString) + pearlsTextRefListString.length + 1);

        pearlsBackgroundRefListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsBackgroundRefListString) + pearlsBackgroundRefListString.length + 1);

        pearlsMusicRefListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsMusicRefListString) + pearlsMusicRefListString.length + 1);

        pearlsDateandtimeVisibleListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsDateandtimeVisibleListString) + pearlsDateandtimeVisibleListString.length + 1);

        pearlsDateandtimeCreatedListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsDateandtimeCreatedListString) + pearlsDateandtimeCreatedListString.length + 1);

        pearlsTagsListString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsTagsListString) + pearlsTagsListString.length + 1);

        pearlsReactsArraysString = response.split(",", numRows).toString();
        response = response.substring(response.indexOf(pearlsReactsArraysString) + pearlsReactsArraysString.length + 1);


        pearlsIDListString = pearlsIDListString.substring(pearlsIDListString.indexOf(":") + 1, pearlsIDListString.length);
        pearlsIDListString = pearlsIDListString.substring(1, pearlsIDListString.length - 1); // 1 instead of 2 because it's ints not strings with ""
        // console.log('pearlsIDListString2: ' + pearlsIDListString);
        pearlsUsernameListString = pearlsUsernameListString.substring(pearlsUsernameListString.indexOf(":") + 1, pearlsUsernameListString.length);
        pearlsUsernameListString = pearlsUsernameListString.substring(2, pearlsUsernameListString.length - 2);
        // console.log("pearlsCreatorNameListString before substrings: " + pearlsCreatorNameListString);
        pearlsProfilePicRefListString = pearlsProfilePicRefListString.substring(pearlsProfilePicRefListString.indexOf(":") + 1, pearlsProfilePicRefListString.length);
        pearlsProfilePicRefListString = pearlsProfilePicRefListString.substring(2, pearlsProfilePicRefListString.length - 2);
        pearlsCreatorNameListString = pearlsCreatorNameListString.substring(pearlsCreatorNameListString.indexOf(":") + 1, pearlsCreatorNameListString.length);
        // console.log("pearlsCreatorNameListString after first substring: " + pearlsCreatorNameListString);
        pearlsCreatorNameListString = pearlsCreatorNameListString.substring(2, pearlsCreatorNameListString.length - 2);
        pearlsTitleListString = pearlsTitleListString.substring(pearlsTitleListString.indexOf(":") + 1, pearlsTitleListString.length);
        pearlsTitleListString = pearlsTitleListString.substring(2, pearlsTitleListString.length - 2);
        pearlsRoomPasswordListString = pearlsRoomPasswordListString.substring(pearlsRoomPasswordListString.indexOf(":") + 1, pearlsRoomPasswordListString.length);
        pearlsRoomPasswordListString = pearlsRoomPasswordListString.substring(2, pearlsRoomPasswordListString.length - 2);
        pearlsTextRefListString = pearlsTextRefListString.substring(pearlsTextRefListString.indexOf(":") + 1, pearlsTextRefListString.length);
        pearlsTextRefListString = pearlsTextRefListString.substring(2, pearlsTextRefListString.length - 2);
        pearlsBackgroundRefListString = pearlsBackgroundRefListString.substring(pearlsBackgroundRefListString.indexOf(":") + 1, pearlsBackgroundRefListString.length);
        pearlsBackgroundRefListString = pearlsBackgroundRefListString.substring(2, pearlsBackgroundRefListString.length - 2);
        pearlsMusicRefListString = pearlsMusicRefListString.substring(pearlsMusicRefListString.indexOf(":") + 1, pearlsMusicRefListString.length);
        pearlsMusicRefListString = pearlsMusicRefListString.substring(2, pearlsMusicRefListString.length - 2);
        pearlsDateandtimeVisibleListString = pearlsDateandtimeVisibleListString.substring(pearlsDateandtimeVisibleListString.indexOf(":") + 1, pearlsDateandtimeVisibleListString.length);
        pearlsDateandtimeVisibleListString = pearlsDateandtimeVisibleListString.substring(2, pearlsDateandtimeVisibleListString.length - 2);
        pearlsDateandtimeCreatedListString = pearlsDateandtimeCreatedListString.substring(pearlsDateandtimeCreatedListString.indexOf(":") + 1, pearlsDateandtimeCreatedListString.length);
        pearlsDateandtimeCreatedListString = pearlsDateandtimeCreatedListString.substring(2, pearlsDateandtimeCreatedListString.length - 2);
        pearlsTagsListString = pearlsTagsListString.substring(pearlsTagsListString.indexOf(":") + 1, pearlsTagsListString.length);
        pearlsTagsListString = pearlsTagsListString.substring(2, pearlsTagsListString.length - 2);
        pearlsReactsArraysString = pearlsReactsArraysString.substring(pearlsReactsArraysString.indexOf(":") + 1, pearlsReactsArraysString.length);
        pearlsReactsArraysString = pearlsReactsArraysString.substring(2, pearlsReactsArraysString.length - 2);

        // console.log("pearlsCreatorNameListString: ", pearlsCreatorNameListString);
        // console.log("pearlsTitleListString: ", pearlsTitleListString);
        // console.log("pearlsUsernameListString: ", pearlsUsernameListString);
        // console.log("pearlsRoomPasswordListString: ", pearlsRoomPasswordListString);
        // console.log("pearlsIDListString", pearlsIDListString);

        if (pearlsIDListString) {


            var i = -1;
            var iTemp = -1;
            while ((i = pearlsTextRefListString.indexOf('Pearls', i + 1)) != -1) {
                if (iTemp == -1) {
                    pearlsTextRefListString = 'https://worldwideprayer.world/' + pearlsTextRefListString.substring(i, pearlsTextRefListString.length);
                }
                if (pearlsTextRefListString.substring(iTemp, i + 1).includes('","')) { // checking for a '","' to make sure we went to the next text file and are not overwriting the previous text file name (if the user had 'Pearls' in their username)
                    pearlsTextRefListString = pearlsTextRefListString.substring(0, pearlsTextRefListString.indexOf('","', iTemp) + 1) + ',"https://worldwideprayer.world/' + pearlsTextRefListString.substring(i, pearlsTextRefListString.length);
                }
                iTemp = i;
            }

            var i = -1;
            var iTemp = -1;
            while ((i = pearlsMusicRefListString.indexOf('Pearls', i + 1)) != -1) {
                if (iTemp == -1) {
                    pearlsMusicRefListString = 'https://worldwideprayer.world/' + pearlsMusicRefListString.substring(i, pearlsMusicRefListString.length);
                }
                if (pearlsMusicRefListString.substring(iTemp, i + 1).includes('","')) { // checking for a '","' to make sure we went to the next text file and are not overwriting the previous text file name (if the user had 'Pearls' in their username)
                    pearlsMusicRefListString = pearlsMusicRefListString.substring(0, pearlsMusicRefListString.indexOf('","', iTemp) + 1) + ',"https://worldwideprayer.world/' + pearlsMusicRefListString.substring(i, pearlsMusicRefListString.length);
                }
                iTemp = i;
            }

            var i = -1;
            var iTemp = -1;
            while ((i = pearlsBackgroundRefListString.indexOf('Pearls', i + 1)) != -1) {
                if (iTemp == -1) {
                    pearlsBackgroundRefListString = 'https://worldwideprayer.world/' + pearlsBackgroundRefListString.substring(i, pearlsBackgroundRefListString.length);
                }
                if (pearlsBackgroundRefListString.substring(iTemp, i + 1).includes('","')) { // checking for a ' ' to make sure we went to the next text file and are not overwriting the previous text file name (if the user had 'Pearls' in their username)
                    pearlsBackgroundRefListString = pearlsBackgroundRefListString.substring(0, pearlsBackgroundRefListString.indexOf('","', iTemp) + 1) + ',"https://worldwideprayer.world/' + pearlsBackgroundRefListString.substring(i, pearlsBackgroundRefListString.length);
                }
                iTemp = i;
            }


            pearlsTitleListString = unicodeToChar(pearlsTitleListString)
            pearlsCreatorNameListString = unicodeToChar(pearlsCreatorNameListString)

            // let find = '\\u2019';
            // let replace = "\'";
            // pearlsTitleListString = pearlsTitleListString.replace(new RegExp(escapeRegExp(find), 'g'), replace);


            pearlsIDList.push(...pearlsIDListString.split(',')); // it has ints not strings so no ""
            pearlsCreatorNameList.push(...pearlsCreatorNameListString.split('","'));
            pearlsTitleList.push(...pearlsTitleListString.split('","'));
            pearlsUsernameList.push(...pearlsUsernameListString.split('","'));
            pearlsProfilePicRefList.push(...pearlsProfilePicRefListString.split('","'));
            pearlsRoomPasswordList.push(...pearlsRoomPasswordListString.split('","'));
            pearlsTextRefList.push(...pearlsTextRefListString.split('","'));
            pearlsBackgroundRefList.push(...pearlsBackgroundRefListString.split('","'));
            pearlsMusicRefList.push(...pearlsMusicRefListString.split('","'));
            pearlsDateandtimeVisibleList.push(...pearlsDateandtimeVisibleListString.split('","'));
            pearlsDateandtimeCreatedList.push(...pearlsDateandtimeCreatedListString.split('","'));
            pearlsTagsList.push(...pearlsTagsListString.split('","'));
            pearlsReactsArrays.push(...pearlsReactsArraysString.split('","'));


            for (var i = 0; i < pearlsReactsArrays.length; i++) {
                if (!pearlsReactsArrays[i]) {
                    pearlsReactsArrays[i] = "0 0 0 0 0 0";
                } else {
                    pearlsReactsArrays[i] = pearlsReactsArrays[i].trim()
                    pearlsReactsArrays[i] = pearlsReactsArrays[i].replace(/ +/g, " "); // remove extra whitespace between the numbers
                }

                pearlsReactsArrays[i] = pearlsReactsArrays[i].split(' ').map(Number)
            }

        }

        console.log("pearlsIDList: ", pearlsIDList);
        // console.log("idList[18]: ", idList[18]);
        // console.log("creatorNameList: " + creatorNameList);
        // console.log("roomNameList: " + roomNameList);
        // console.log("usernameList: " + usernameList);
        // console.log("roomPasswordList: " + roomPasswordList);
        // console.log("pearlsTextRefList: " + pearlsTextRefList);
        // console.log("backgroundRefList: " + backgroundRefList);
        // console.log("musicRefList: " + musicRefList);
        // console.log("recordingRefList: " + recordingRefList);
        // console.log("prayerLengthList: " + prayerLengthList);
        // console.log("prayerDatetimeList: " + prayerDatetimeList);

    }



}

function highlightMenu(menuType) {
    console.log("in highlightMenu", "menuType:", menuType);

    document.querySelector("#menus_container #main_menu_container").style.backgroundColor = "";
    document.querySelector("#menus_container #intentions_menu").style.backgroundColor = "";
    document.querySelector("#menus_container #testimonials_menu").style.backgroundColor = "";
    document.querySelector("#menus_container #pearls_menu").style.backgroundColor = "";
    document.querySelector("#menus_container #prayer_rooms_menu").style.backgroundColor = "";

    if (menuType == "OPTIONS") {
        document.querySelector("#menus_container #main_menu_container").style.backgroundColor = "rgba(147, 112, 216, 0.4)";
    } else if (menuType == "INTENTIONS") {
        document.querySelector("#menus_container #intentions_menu").style.backgroundColor = "rgba(147, 112, 216, 0.4)";
    } else if (menuType == "TESTIMONIALS") {
        document.querySelector("#menus_container #testimonials_menu").style.backgroundColor = "rgba(147, 112, 216, 0.4)";
    } else if (menuType == "PEARLS") {
        document.querySelector("#menus_container #pearls_menu").style.backgroundColor = "rgba(147, 112, 216, 0.4)";
    } else if (menuType == "PRAYER ROOMS") {
        document.querySelector("#menus_container #prayer_rooms_menu").style.backgroundColor = "rgba(147, 112, 216, 0.4)";
    }
}

function changeMenusFormat(menuType) {

    document.getElementById("menus_container").style.display = "block";
    document.getElementById("menu_and_content_container").scrollIntoView();

    if (!(document.getElementById("menus_container").className.includes("menu_is_open"))) {
        document.getElementById("menus_container").className += " menu_is_open";
    }
    if (!(document.getElementById("menu_buttons_container").className.includes("menu_is_open"))) {
        document.getElementById("menu_buttons_container").className += " menu_is_open";
    }
    if (!(document.getElementById("menu_buttons_top_row").className.includes("menu_is_open"))) {
        document.getElementById("menu_buttons_top_row").className += " menu_is_open";
    }
    if (!(document.getElementById("menu_buttons_bottom_row").className.includes("menu_is_open"))) {
        document.getElementById("menu_buttons_bottom_row").className += " menu_is_open";
    }


    if (menuType == "OPTIONS") {
        document.getElementById("mySidenav").style.display = "block";
        document.getElementById("mySidenav").style.opacity = 1;
        document.getElementById("mySidenav").style.transform = "scale(1)";
    } else {
        document.getElementById("mySidenav").style.display = "none";
        document.getElementById("mySidenav").style.opacity = 0;
        document.getElementById("mySidenav").style.transform = "scale(0)";
    }
    if (menuType == "INTENTIONS") {
        document.getElementById("intentionsSideNav").style.display = "block";
        document.getElementById("intentionsSideNav").style.opacity = 1;
        document.getElementById("intentionsSideNav").style.transform = "scale(1)";
    } else {
        document.getElementById("intentionsSideNav").style.display = "none";
        document.getElementById("intentionsSideNav").style.opacity = 0;
        document.getElementById("intentionsSideNav").style.transform = "scale(0)";
    }
    if (menuType == "TESTIMONIALS") {
        document.getElementById("testimonialsSideNav").style.display = "block";
        document.getElementById("testimonialsSideNav").style.opacity = 1;
        document.getElementById("testimonialsSideNav").style.transform = "scale(1)";
    } else {
        document.getElementById("testimonialsSideNav").style.display = "none";
        document.getElementById("testimonialsSideNav").style.opacity = 0;
        document.getElementById("testimonialsSideNav").style.transform = "scale(0)";
    }
    if (menuType == "PEARLS") {
        document.getElementById("pearlsSideNav").style.display = "block";
        document.getElementById("pearlsSideNav").style.opacity = 1;
        document.getElementById("pearlsSideNav").style.transform = "scale(1)";
    } else {
        document.getElementById("pearlsSideNav").style.display = "none";
        document.getElementById("pearlsSideNav").style.opacity = 0;
        document.getElementById("pearlsSideNav").style.transform = "scale(0)";
    }
    if (menuType == "PRAYER ROOMS") {
        document.getElementById("myPrayerRoomsSideNav").style.display = "block";
        document.getElementById("myPrayerRoomsSideNav").style.opacity = 1;
        document.getElementById("myPrayerRoomsSideNav").style.transform = "scale(1)";
    } else {
        document.getElementById("myPrayerRoomsSideNav").style.display = "none";
        document.getElementById("myPrayerRoomsSideNav").style.opacity = 0;
        document.getElementById("myPrayerRoomsSideNav").style.transform = "scale(0)";
    }

}

function checkForChangeMenuButtonsFormatting() {
    console.log('openSideNavs:', openSideNavs);
    // if no more sidenavs are open change the menu buttons formatting
    if (openSideNavs.length == 0) {
        document.getElementById("menus_container").classList.remove("menu_is_open")
        document.getElementById("menu_buttons_container").classList.remove("menu_is_open")
        document.getElementById("menu_buttons_top_row").classList.remove("menu_is_open")
        document.getElementById("menu_buttons_bottom_row").classList.remove("menu_is_open")

        document.getElementById("menus_container").style.opacity = 0;
        document.getElementById("menus_container").style.transform = 'scale(0)';

        // document.getElementById("menu_buttons_container_top_bar").style.display = "flex";
        document.getElementById("menu_buttons_container_top_bar").style.opacity = 1;
        document.getElementById("menu_buttons_container_top_bar").style.transform = "scale(1)";
    }
}

function closeMenusWindow() {
    document.getElementById("menus_container").style.display = 'none';
    // document.getElementById("menus_container").style.opacity = 0;
    // document.getElementById("menus_container").style.transform = 'scale(0)';

    // document.getElementById("menu_buttons_container_top_bar").style.display = "flex";
    document.getElementById("menu_buttons_container_top_bar").style.opacity = 1;
    document.getElementById("menu_buttons_container_top_bar").style.transform = "scale(1)";
}

function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// FUNCTIONS TO MAKE THE MENUS OPEN AND CLOSE WHEN THE USER CLICKS THE BUTTONS AND THEN CLICKS OUTSIDE OF THEM OR CLICKS THE CLOSE BUTTON

$(document).ready(function () {

    if (!isUserLoggedIn) { // disable the ability to post if the user is not logged in
        if (document.getElementById("intentions_text_area")) {
            document.getElementById("intentions_text_area").disabled = true;
            document.getElementById("post_intention_button").disabled = true;

            document.getElementById("testimonials_text_area").disabled = true;
            document.getElementById("post_testimonial_button").disabled = true;
        }
    }

    if (document.getElementById("myPrayerRoomsSideNav") && document.getElementById("mySidenav")) { // if the menus are on the page then add these click listeners for them

        function optionsMenuClick(e) {
            console.log("clicked options menu", e);
            e.stopPropagation();
            e.cancelBubble = true;

            changeMenusFormat('OPTIONS');

            if (openSideNavElements.length > 1) {
                document.getElementById("mySidenav").style.zIndex = Number(openSideNavElements[openSideNavElements.length - 2].style.zIndex) + 1
            }
        }

        function prayerRoomsMenuClick(e) {
            // console.log("clicked prayer_rooms_menu", e);
            e.stopPropagation();
            e.cancelBubble = true;

            if (!prayerRoomMenuClicked) {
                prayerRoomMenuClicked = true;
                clearPrayerRoomsList();

                // want to show the user's prayer rooms first cause they might want to edit them (what one does on this page)
                if (document.URL.includes("/create-prayer-room")) {

                    document.getElementById('my_rooms_label').style = "background-color: " + prayerMenuToggleButtonBackgroundColor;
                    document.getElementById('all_rooms_label').style = "background-color: " + 'none';
                    document.getElementById('saved_rooms_label').style = "background-color: " + 'none';
                    document.getElementById('my_rooms_menu_title').innerHTML = "My Prayer Rooms";

                    // loadPrayerRoomsList(action, query, limit, prayerRoomsSearchInput, orderBy)
                    loadPrayerRoomsList('getMyPrayerRooms', 'mostRecent', 20, '', '');
                } else {
                    loadPrayerRoomsList('', 'mostRecent', 20, '', '');
                }
            }

            changeMenusFormat('PRAYER ROOMS');

            if (openSideNavElements.length > 1) {
                document.getElementById("myPrayerRoomsSideNav").style.zIndex = Number(openSideNavElements[openSideNavElements.length - 2].style.zIndex) + 1
            }
        }

        function intentionsMenuClick() {
            // console.log("clicked intentions menu", e);
            // e.stopPropagation();
            // e.cancelBubble = true;

            if (!intentionsMenuClicked) {
                intentionsMenuClicked = true;
                clearPrayerRoomsList();

                loadIntentionsList('', 'mostRecent', 20, '', '');
            }

            changeMenusFormat('INTENTIONS');

            if (openSideNavElements.length > 1) {
                document.getElementById("intentionsSideNav").style.zIndex = Number(openSideNavElements[openSideNavElements.length - 2].style.zIndex) + 1
            }
        }

        function testimonialsMenuClick(e) {
            console.log("clicked testimonials menu", e);
            e.stopPropagation();
            e.cancelBubble = true;

            if (!testimonialsMenuClicked) {
                testimonialsMenuClicked = true;
                clearPrayerRoomsList();

                loadTestimonialsList('', 'mostRecent', 20, '', '');
            }

            changeMenusFormat('TESTIMONIALS');

            if (openSideNavElements.length > 1) {
                document.getElementById("testimonialsSideNav").style.zIndex = Number(openSideNavElements[openSideNavElements.length - 2].style.zIndex) + 1
            }
        }

        function pearlsMenuClick(e) {
            console.log("clicked pearls menu", e);
            e.stopPropagation();
            e.cancelBubble = true;

            if (!pearlsMenuClicked) {
                pearlsMenuClicked = true;
                clearPrayerRoomsList();

                loadPearlsList('', 'mostRecent', 20, '', '');
            }

            changeMenusFormat('PEARLS');

            if (openSideNavElements.length > 1) {
                document.getElementById("pearlsSideNav").style.zIndex = Number(openSideNavElements[openSideNavElements.length - 2].style.zIndex) + 1
            }
        }

        document.body.addEventListener("click", function (e) {
            console.log("clicked body", $(event.target));//e);

            if ($(event.target).is('.tox')) {
                return;
            }

            // for some reason getting glitch on certain pages where these elements are clicked but still only this eventlistener was being called so have to manually call the correct one
            if ($(event.target).is('#main_menu_container') || $(event.target).is('img#main_menu_button_logo')
                || $(event.target).is('div#main_menu_button')) {
                if (openSideNavs.includes('OPTIONS')) {
                    openSideNavs.push(openSideNavs.splice(openSideNavs.indexOf('OPTIONS'), 1)[0]);
                    openSideNavElements.push(openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('mySidenav')), 1)[0]);
                } else {
                    openSideNavs.push('OPTIONS');
                    openSideNavElements.push(document.getElementById('mySidenav'));
                }
                highlightMenu('OPTIONS');
                optionsMenuClick(e);
                return;
            }

            if ($(event.target).is('#prayer_rooms_menu') || $(event.target).is('img#prayer_rooms_button_logo')
                || $(event.target).is('div#prayer_rooms_logo_container')) {
                if (openSideNavs.includes('PRAYERROOMS')) {
                    openSideNavs.push(openSideNavs.splice(openSideNavs.indexOf('PRAYERROOMS'), 1)[0]);
                    openSideNavElements.push(openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('myPrayerRoomsSideNav')), 1)[0]);
                } else {
                    openSideNavs.push('PRAYERROOMS');
                    openSideNavElements.push(document.getElementById('myPrayerRoomsSideNav'));
                }
                highlightMenu('PRAYERROOMS');
                prayerRoomsMenuClick(e);
                return;
            }

            if ($(event.target).is('#intentions_menu') || $(event.target).is('img#intentions_button_logo')
                || $(event.target).is('div#intentions_logo_container')) {
                if (openSideNavs.includes('INTENTIONS')) {
                    openSideNavs.push(openSideNavs.splice(openSideNavs.indexOf('INTENTIONS'), 1)[0]);
                    openSideNavElements.push(openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('intentionsSideNav')), 1)[0]);
                } else {
                    openSideNavs.push('INTENTIONS');
                    openSideNavElements.push(document.getElementById('intentionsSideNav'));
                }
                highlightMenu('INTENTIONS');
                intentionsMenuClick();
                return;
            }

            if ($(event.target).is('#testimonials_menu') || $(event.target).is('img#testimonials_button_logo')
                || $(event.target).is('div#testimonials_logo_container')) {
                if (openSideNavs.includes('TESTIMONIALS')) {
                    openSideNavs.push(openSideNavs.splice(openSideNavs.indexOf('TESTIMONIALS'), 1)[0]);
                    openSideNavElements.push(openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('testimonialsSideNav')), 1)[0]);
                } else {
                    openSideNavs.push('TESTIMONIALS');
                    openSideNavElements.push(document.getElementById('testimonialsSideNav'));
                }
                highlightMenu('TESTIMONIALS');
                testimonialsMenuClick(e);
                return;
            }

            if ($(event.target).is('#pearls_menu') || $(event.target).is('img#pearls_button_logo')
                || $(event.target).is('div#pearls_logo_container')) {
                if (openSideNavs.includes('PEARLS')) {
                    openSideNavs.push(openSideNavs.splice(openSideNavs.indexOf('PEARLS'), 1)[0]);
                    openSideNavElements.push(openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('pearlsSideNav')), 1)[0]);
                } else {
                    openSideNavs.push('PEARLS');
                    openSideNavElements.push(document.getElementById('pearlsSideNav'));
                }
                highlightMenu('PEARLS');
                pearlsMenuClick(e);
                return;
            }


            if (openSideNavs[openSideNavs.length - 1] == 'PRAYERROOMS') {
                openSideNavs.splice(openSideNavs.indexOf('PRAYERROOMS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('myPrayerRoomsSideNav')), 1);
                prayerRoomMenuClicked = false;
            } else if (openSideNavs[openSideNavs.length - 1] == 'OPTIONS') {
                openSideNavs.splice(openSideNavs.indexOf('OPTIONS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('mySidenav')), 1);
            } else if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
                openSideNavs.splice(openSideNavs.indexOf('INTENTIONS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('intentionsSideNav')), 1);
                intentionsMenuClicked = false;
            } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
                openSideNavs.splice(openSideNavs.indexOf('TESTIMONIALS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('testimonialsSideNav')), 1);
                testimonialsMenuClicked = false;
            } else if (openSideNavs[openSideNavs.length - 1] == 'PEARLS') {
                openSideNavs.splice(openSideNavs.indexOf('PEARLS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('pearlsSideNav')), 1);
                pearlsMenuClicked = false;
            }

            // hide menu top bar if it's open, show it if it's hidden
            // if ($(event.target).is('div') | $(event.target).is('body') | $(event.target).is('html')) {
            //     if (document.getElementById("menu_buttons_container_top_bar").style.opacity == 0) {
            //         document.getElementById("menu_buttons_container_top_bar").style.opacity = 1;
            //         document.getElementById("menu_buttons_container_top_bar").style.transform = 'scale(1)';
            //     }
            //     else if (document.getElementById("menu_buttons_container_top_bar").style.opacity == 1) {
            //         // console.log('scrolling down while menus opacity == 1');
            //         document.getElementById("menu_buttons_container_top_bar").style.opacity = 0;
            //         document.getElementById("menu_buttons_container_top_bar").style.transform = 'scale(0)';
            //     }
            // }

        }, false);

        document.getElementById("myPrayerRoomsSideNav").addEventListener("click", function (ev) {
            // console.log("clicked prayer rooms sidenav");
            ev.stopPropagation(); //this is important! If removed, parent elements will be considered clicked I think
            ev.cancelBubble = true;

        }, false);

        document.getElementById("intentionsSideNav").addEventListener("click", function (ev) {
            ev.stopPropagation(); //this is important! If removed, parent elements will be considered clicked I think
            ev.cancelBubble = true;
        }, false);

        document.getElementById("testimonialsSideNav").addEventListener("click", function (ev) {
            ev.stopPropagation(); //this is important! If removed, parent elements will be considered clicked I think
            ev.cancelBubble = true;
        }, false);

        document.getElementById("pearlsSideNav").addEventListener("click", function (ev) {
            ev.stopPropagation(); //this is important! If removed, parent elements will be considered clicked I think
            ev.cancelBubble = true;
        }, false);

        document.getElementById("mySidenav").addEventListener("click", function (ev) {
            // console.log("clicked sidenav");

            // if (!isMobile) {
            //     document.getElementById("mySidenav").style.width = "500px";
            //     console.log("menuButtonClicked 500px");
            // } else {
            //     document.getElementById("mySidenav").style.width = "300px";
            //     console.log("menuButtonClicked 300px");
            // }

            ev.stopPropagation(); //this is important! If removed, parent elements will be considered clicked I think
            ev.cancelBubble = true;

        }, false);


        document.getElementById("main_menu_close_button").addEventListener("click", function (e) {
            document.getElementById("mySidenav").style.width = "0";
            e.stopPropagation();
            e.cancelBubble = true;

            if (openSideNavs.includes('OPTIONS')) {
                openSideNavs.splice(openSideNavs.indexOf('OPTIONS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('mySidenav')), 1);
            }

            checkForChangeMenuButtonsFormatting();

        });

        document.getElementById("prayer_rooms_menu_close_button").addEventListener("click", function (e) {
            // console.log("clicked prayer_rooms_menu_close_button");
            document.getElementById("myPrayerRoomsSideNav").style.width = "0";
            prayerRoomMenuClicked = false;
            e.stopPropagation();
            e.cancelBubble = true;

            if (openSideNavs.includes('PRAYERROOMS')) {
                openSideNavs.splice(openSideNavs.indexOf('PRAYERROOMS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('myPrayerRoomsSideNav')), 1);
            }

            checkForChangeMenuButtonsFormatting();

        });

        document.getElementById("intentions_menu_close_button").addEventListener("click", function (e) {
            document.getElementById("intentionsSideNav").style.width = "0";
            intentionsMenuClicked = false;
            e.stopPropagation();
            e.cancelBubble = true;

            if (openSideNavs.includes('INTENTIONS')) {
                openSideNavs.splice(openSideNavs.indexOf('INTENTIONS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('intentionsSideNav')), 1);
            }

            checkForChangeMenuButtonsFormatting();

        });

        document.getElementById("testimonials_menu_close_button").addEventListener("click", function (e) {
            document.getElementById("testimonialsSideNav").style.width = "0";
            testimonialsMenuClicked = false;
            e.stopPropagation();
            e.cancelBubble = true;

            if (openSideNavs.includes('TESTIMONIALS')) {
                openSideNavs.splice(openSideNavs.indexOf('TESTIMONIALS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('testimonialsSideNav')), 1);
            }

            checkForChangeMenuButtonsFormatting();

        });

        document.getElementById("pearls_menu_close_button").addEventListener("click", function (e) {
            document.getElementById("pearlsSideNav").style.width = "0";
            pearlsMenuClicked = false;
            e.stopPropagation();
            e.cancelBubble = true;

            if (openSideNavs.includes('PEARLS')) {
                openSideNavs.splice(openSideNavs.indexOf('PEARLS'), 1);
                openSideNavElements.splice(openSideNavElements.indexOf(document.getElementById('pearlsSideNav')), 1);
            }

            checkForChangeMenuButtonsFormatting();

        });

    }

    if (document.body.id == "index_body") {
        openSideNavs.push('INTENTIONS');
        openSideNavElements.push(document.getElementById('intentionsSideNav'));
        intentionsMenuClick();
    } else {
        if (document.getElementById("menus_container")) {
            document.getElementById("menus_container").style.display = "none";
        }
    }

});

function removeAddedTag(addedTagElement) {
    addedTagElement.parentNode.removeChild(addedTagElement);
}

function addTag(addDefaultTagButton) {
    if (addDefaultTagButton) {

        if (!openSideNavs) {
            openSideNavs[0] = 'INTENTIONS';
        }

        // console.log('addDefaultTagButton', addDefaultTagButton);
        // console.log('addDefaultTagButton.childNodes', addDefaultTagButton.childNodes);
        // console.log('addDefaultTagButton.childNodes[1]', addDefaultTagButton.childNodes[1]);
        // console.log('addDefaultTagButton.parentElement', addDefaultTagButton.parentElement);
        // console.log('addDefaultTagButton.parentElement.parentElement', addDefaultTagButton.parentElement.parentElement);

        var addedTagButtons;
        if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
            addedTagButtons = document.querySelectorAll('#intentionsSideNav .added_tag_button');
        } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
            addedTagButtons = document.querySelectorAll('#testimonialsSideNav .added_tag_button');
        } else if (location.href.includes('cast-pearls') || location.href.includes('create-prayer-room')) {
            addedTagButtons = document.querySelectorAll('.grid-item .added_tag_button');
        }
        if (addedTagButtons.length >= 30) {
            snackbarMessage.innerHTML = "You can only have up to 30 tags!";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            return;
        }
        // don't add the tag if it's already been added
        for (var i = 0; i < addedTagButtons.length; i++) {
            // console.log('addedTagButtons[i].innerHTML:', addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.lastIndexOf(' X')),
            // 'addDefaultTagButton.childNodes[1].innerHTML:', addDefaultTagButton.childNodes[1].innerHTML);
            if (addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.lastIndexOf(' X')) == addDefaultTagButton.childNodes[1].innerHTML) {
                return;
            }
        }

        var addedTagButton = document.createElement('button');
        addedTagButton.innerHTML = addDefaultTagButton.childNodes[1].innerHTML + ' X';
        addedTagButton.className = 'added_tag_button';

        // var xElement = document.createElement('div');
        // xElement.innerHTML = 'X';

        var addedTagButtonContainer = document.createElement('div');
        addedTagButtonContainer.className = 'added_tag_button_container';
        addedTagButtonContainer.appendChild(addedTagButton);
        // addedTagButtonContainer.appendChild(xElement);
        addedTagButtonContainer.onclick = function () { removeAddedTag(this) }

        // console.log(openSideNavs[openSideNavs.length - 1]);
        // var containerElement = addDefaultTagButton.parentElement.parentElement.parentElement.parentElement;
        var containerElement;
        if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
            containerElement = document.querySelector("#intentionsSideNav #addedTagsContainer");
        } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
            containerElement = document.querySelector("#testimonialsSideNav #addedTagsContainer");
        } else if (location.href.includes('cast-pearls') || location.href.includes('create-prayer-room')) {
            containerElement = document.querySelector(".grid-item #addedTagsContainer");
        }
        containerElement.insertBefore(addedTagButtonContainer, containerElement.firstChild)

        event.target.value = '';
    }
}

function onKeyPressAddingTag() {
    // console.log(event);
    if (event.keyCode == 13) { // if the user hit enter

        var addedTagButtons;
        if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
            addedTagButtons = document.querySelectorAll('#intentionsSideNav .added_tag_button');
        } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
            addedTagButtons = document.querySelectorAll('#testimonialsSideNav .added_tag_button');
        } else if (location.href.includes('cast-pearls') || location.href.includes('create-prayer-room')) {
            addedTagButtons = document.querySelectorAll('.grid-item .added_tag_button');
        }

        if (addedTagButtons.length >= 30) {
            snackbarMessage.innerHTML = "You can only have up to 30 tags!";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
            return;
        }

        if (event.target.value.includes(',') || event.target.value.includes('[') ||
            event.target.value.includes(']') || event.target.value.includes(':') ||
            event.target.value.includes('\\/') || event.target.value.includes('\\')) {
            snackbarMessage.innerHTML = "The tag cannot contain ',', '[', ']', '\\', '\\/', or ':'.";
            snackbarMessage.className = "show";
            setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

            return;
        }

        // don't add the tag if it's already been added
        for (var i = 0; i < addedTagButtons.length; i++) {
            // console.log('addedTagButtons[i].innerHTML:', addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.lastIndexOf(' X')),
            // 'addDefaultTagButton.childNodes[1].innerHTML:', addDefaultTagButton.childNodes[1].innerHTML);
            if (addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.lastIndexOf(' X')) == event.target.value) {
                return;
            }
        }

        var addedTagButton = document.createElement('button');
        addedTagButton.innerHTML = event.target.value + ' X';
        addedTagButton.className = 'added_tag_button';

        var addedTagButtonContainer = document.createElement('div');
        addedTagButtonContainer.className = 'added_tag_button_container';
        addedTagButtonContainer.appendChild(addedTagButton);
        addedTagButtonContainer.onclick = function () { removeAddedTag(this) }

        var containerElement;
        console.log(openSideNavs[openSideNavs.length - 1]);
        if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
            containerElement = document.querySelector("#intentionsSideNav #addedTagsContainer");
        } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
            containerElement = document.querySelector("#testimonialsSideNav #addedTagsContainer");
        } else if (location.href.includes('cast-pearls') || location.href.includes('create-prayer-room')) {
            containerElement = document.querySelector(".grid-item #addedTagsContainer");
        }
        containerElement.insertBefore(addedTagButtonContainer, containerElement.firstChild)

        event.target.value = '';
    }
}

// disable all menu buttons if the user is not signed in so they can't post intentions or testimonials
if (!localStorage.getItem("isUserLoggedIn")) {
    var inputs = document.getElementsByTagName('input');
    var labels = document.getElementsByTagName('label');
    // var buttons = document.getElementsByTagName('button');
    // for (var i = 0; i < inputs.length; i++) {
    //     if (inputs[i].type != "file") {
    //         inputs[i].disabled = true;
    //     }
    // }
    var buttons = document.querySelector('#menus_container button');
    // console.log("buttons:", buttons);
    if (buttons) {
        for (var i = 0; i < buttons.length; i++) {
            if (!buttons[i].className.includes("close_menus_window_button") && !buttons[i].className.includes("closebtn") &&
                !buttons[i].className.includes("menu-list-item")) {
                // console.log("buttons[i]:", buttons[i]);
                buttons[i].disabled = true;
            } else {
                // console.log("close button found");
            }
        }
    }
}

if (document.getElementById("menus_container")) { // will only be true for pages that have the menu at the top (e.g. the worldwide prayer and gather pages won't have this)

    // get the reacts the user already made for this post
    var form_data = new FormData();
    form_data.append("username", username);
    form_data.append("action", 'getUserReactions');
    // form_data.append("thingReactingTo", thingReactingTo);
    // form_data.append("entry_id", entry_id);

    $.ajax({
        url: "create_intention_functions.php",
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        data: form_data,
        success: function (response) {

            console.log(response);

            response = JSON.parse(response);
            // var user_reacts_usernames = response['username'];
            user_reacts_ids = response['id'] || [];
            user_reacts_tables_reacting_to = response['table_reacting_to'] || [];
            user_reacts_entryIDs = response['entryID'] || [];
            user_reacts_arrays = response['user_reacts_array'] || [];
            console.log("user_reacts_arrays:", user_reacts_arrays);
            let numRows = response['numRows'];

            for (var i = 0; i < numRows; i++) {
                if (user_reacts_tables_reacting_to[i] == 'intentions') {
                    intentions_user_reacts_arrays[i] = user_reacts_arrays[i];
                    intentions_user_reacts_entryIDs[i] = user_reacts_entryIDs[i];
                } else if (user_reacts_tables_reacting_to[i] == 'testimonials') {
                    testimonials_user_reacts_arrays[i] = user_reacts_arrays[i];
                    testimonials_user_reacts_entryIDs[i] = user_reacts_entryIDs[i];
                } else if (user_reacts_tables_reacting_to[i] == 'pearls') {
                    pearls_user_reacts_arrays[i] = user_reacts_arrays[i];
                    pearls_user_reacts_entryIDs[i] = user_reacts_entryIDs[i];
                } else if (user_reacts_tables_reacting_to[i] == 'prayer_rooms') {
                    prayer_rooms_user_reacts_arrays[i] = user_reacts_arrays[i];
                    prayer_rooms_user_reacts_entryIDs[i] = user_reacts_entryIDs[i];
                }
            }

            if (!user_reacts_arrays) {
                user_reacts_arrays = [0, 0, 0, 0, 0, 0]
            }

        },
        error: function (error) {
            console.log("Error getting reactions:", error);
        }
    });

}

makePageIntoSlides = false;
if (makePageIntoSlides) {

    if (document.body.id == 'index_body') {

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        // make scrolling always be by increments of 100vh
        let menu_and_content_container = document.getElementById("menu_and_content_container");
        let top_of_homepage_except_menu_and_links = document.getElementById("top_of_homepage_except_menu_and_links");
        let bottom_of_homepage = document.getElementById("bottom_of_homepage");

        var currentView = 0;

        if (isScrolledIntoView(menu_and_content_container)) {
            currentView = 0;
        } else if (isScrolledIntoView(top_of_homepage_except_menu_and_links)) {
            currentView = 1;
        } else {
            currentView = 2;
        }

        var isAnimating = false;
        var scrollTimeout;
        var scrollEnabled = false;

        document.addEventListener('wheel', wheelListener);

        function wheelListener(e) {
            // var var1 = e;
            // console.log(var1.path[0].id);
            if (e.path[0].id == "sidenavs_container") {
                if (scrollEnabled) {
                    disableScroll();
                    scrollEnabled = false;
                }
            } else {
                for (var i = 0; i < e.path.length; i++) {
                    if (e.path[i].className && e.path[i].className.includes('sidenav')) {
                        console.log("scrolling in sidenav");
                        e.stopPropagation();
                        if (!scrollEnabled) {
                            enableScroll()
                            scrollEnabled = true;
                        }
                        return;
                    } else {
                        if (scrollEnabled) {
                            disableScroll();
                            scrollEnabled = false;
                        }
                    }
                }
            }
            if (isAnimating) {
                return;
            }
            isAnimating = true;
            // console.log(e.deltaY, 'currentView:', currentView);
            if (e.deltaY > 0) { // scrolling down
                if (currentView == 0) {
                    top_of_homepage_except_menu_and_links.scrollIntoView();
                    currentView = 1;
                } else if (currentView == 1) {
                    bottom_of_homepage.scrollIntoView();
                    currentView = 2;
                } else if (currentView == 2) { // can happen where only half of the bottom is showing and without this it wouldn't scroll down if user tried
                    bottom_of_homepage.scrollIntoView();
                }
            } else { // scrolling up
                if (currentView == 0) {
                    menu_and_content_container.scrollIntoView();
                } else if (currentView == 1) {
                    menu_and_content_container.scrollIntoView();
                    currentView = 0;
                } else if (currentView == 2) {
                    top_of_homepage_except_menu_and_links.scrollIntoView();
                    currentView = 1;
                }
            }
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
                console.log('Scroll ended');
                isAnimating = false;
            }, 800);
        }

        // disable regular scrolling
        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        var keys2 = { 37: 1, 38: 1, 39: 1, 40: 1 };

        function preventDefault(e) {
            e.preventDefault();
            wheelListener(e);
        }

        function preventDefaultForScrollKeys(e) {
            if (keys2[e.keyCode]) {
                preventDefault(e);
                wheelListener(e);
                return false;
            } else {
            }
        }

        // modern Chrome requires { passive: false } when adding event
        var supportsPassive = false;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () { supportsPassive = true; }
            }));
        } catch (e) { }

        var wheelOpt = supportsPassive ? { passive: false } : false;
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

        // call this to Disable
        function disableScroll() {
            window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
            window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
            window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
            window.addEventListener('keydown', preventDefaultForScrollKeys, false);
        }

        // call this to Enable
        function enableScroll() {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
            window.removeEventListener('touchmove', preventDefault, wheelOpt);
            window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
        }

        disableScroll();


    }

}


function removeUndefinedValuesFromArray(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 'undefined' | array[i] == undefined) {
            // array.splice(i, 1);
            array[i] = '';
        }
    }
}


globalFunctions = {};

// var checkIfTinymceLoaded = function () {
//     setTimeout(function () {
//         if (typeof tinymce !== 'undefined') {
//             for (var i = 0; i < tinymce.editors.length; i++) {
//                 // console.log('in for loop:', i);
//                 tinymce.editors[i].on('init', function (ed, e) {
//                     console.log('editor', i, 'has been initialized');
//                     // Update HTML view textarea (that is the one used to send the data to server).
//                     // if ((i == tinymce.editors.length) && !settingsPageWasInitialized) {
//                     // if (!settingsPageWasInitialized) {
//                     //     settingsPageWasInitialized = true;
//                     //     initSettingsPage();
//                     // }
//                     // ed.save();
//                 });
//             }
//         } else {
//             console.log("waiting for tinymce to load");
//             checkIfTinymceLoaded();
//         }
//     }, 300);
// }

// checkIfTinymceLoaded();
