const clock = document.getElementById("clock");



// 🌟🌟 give me -> method and tell me after how much interval i've to run again & again
setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString()); // we don't wanna run in cnsole
    clock.innerHTML = date.toLocaleTimeString()

}, 1000); // 1000 mili-sec = 1 sec