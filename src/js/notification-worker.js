const workercode = () => {
    // importScripts('index.js');                 /* imports just "foo.js" */

    // var i = 0;

    // function timedCount() {
    //   i = i + 1;
    //   postMessage(i);
    //   setTimeout("timedCount()",500);
    // }

    // timedCount();
    // var i = 0;

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
    // time1Element.innerHTML = d1.toLocaleTimeString();
    d2.setUTCHours(19);
    // time2Element.innerHTML = d2.toLocaleTimeString();
    d3.setUTCHours(1);
    // time3Element.innerHTML = d3.toLocaleTimeString();

    // postMessage([d1.toLocaleTimeString(), d2.toLocaleTimeString(), d3.toLocaleTimeString()]);


    // open transition to prayer page at the appropriate times
    var now;
    var millisTillPrayer1;
    var millisTillPrayer2;
    var millisTillPrayer3;
    var shortestTimeTillPrayer;
    var longestTimeTillPrayer;
    var timeAtNextPrayer;
    var nextPrayerNum;
    var timeLeft;
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



        // console.log("in notification-worker.js: " + i);
        // i++;

        postMessage([timeLeft, nextPrayerNum]);


    }, 1000);

}

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

// module.exports = worker_script;
export default worker_script;