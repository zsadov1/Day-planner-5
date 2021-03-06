
function displayDate() {
    var date  = moment().format("MMM Do YY");
    document.getElementById("today").innerHTML = date
}

displayDate(); 



function renderTime() {

    var currentTime = new Date();
    var diem = "AM";
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    if (h === 0) {
    h = 12;
    } else if (h > 12) {
        h = h - 12;
        diem ="PM";
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    var myClock = document.getElementById('clockDisplay');
    console.log(myClock);
    myClock.innerHTML = h + ":" + m + ":" + s + "" + diem;
    setTimeout('renderTime()' , 1000);

}
renderTime();


function initializeSchedule () {

    // 1. first grab the data we ALREADY have
    let data = JSON.parse(window.localStorage.getItem("dayPlanner"));
     // 2. update the data with our new time key and task value  
    let schedule = { ...data };

    document.getElementById('nineAm').value = schedule['9am'] ? schedule['9am'] : '';
    document.getElementById('tenAm').value = schedule['10am'] ? schedule['10am'] : '';
    document.getElementById('elevenAm').value = schedule['11am'] ? schedule['11am'] : '';
    document.getElementById('twelvePm').value = schedule['12pm'] ? schedule['12pm'] : '';
    document.getElementById('onePm').value = schedule['1pm'] ? schedule['1pm'] : '';
    document.getElementById('twoPm').value = schedule['2pm'] ? schedule['2pm'] : '';
    document.getElementById('threePm').value = schedule['3pm'] ? schedule['3pm'] : '';
    document.getElementById('fourPm').value = schedule['4pm'] ? schedule['4pm'] : '';
    document.getElementById('fivePm').value = schedule['5pm'] ? schedule['5pm'] : '';

}

initializeSchedule();

function addItemToDay( timeKey, taskInputId) {

    const task = document.getElementById(taskInputId).value;
 
      // 1. first grab the data we ALREADY have
     let data = JSON.parse(window.localStorage.getItem("dayPlanner"));
 
      // 2. update the data with our new time key and task value 
     let updateSchedule = { ...data, [timeKey]: task };
 
     // 3. re-save the data to local storage
     window.localStorage.setItem("dayPlanner", JSON.stringify(updateSchedule));
 
 }
 
 
 $("input").each(function() {
     var timeMT = $(this).attr("mt")
     var currentTime = moment().format("H");

     if (timeMT > currentTime) {
        $(this).css("background-color" , "Gainsboro");
    } else if (timeMT < currentTime) {
        $(this).css("background-color", "Grey");
    } else {
        $(this).css("background-color", "white")
    };
 });
