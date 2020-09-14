window.onload = function () {
    update()
}

function update() {
    var hours: HTMLElement = document.getElementById("hours")!;
    var minutes: HTMLElement = document.getElementById("minutes")!;
    var seconds: HTMLElement = document.getElementById("seconds")!;
    var milli: HTMLElement = document.getElementById("milli")!;

    var hoursDisplay: HTMLElement = document.getElementById("hoursDisplay")!;
    var minutesDisplay: HTMLElement = document.getElementById("minutesDisplay")!;
    var secondsDisplay: HTMLElement = document.getElementById("secondsDisplay")!;
    var milliDisplay: HTMLElement = document.getElementById("milliDisplay")!;
    if (hours != null && minutes != null && seconds != null) {
        let date = new Date
        hours.style.width = `${(date.getHours() / 24) * 100}%`;
        minutes.style.width = `${(date.getMinutes() / 60) * 100}%`;
        seconds.style.width = `${((date.getSeconds() / 60) * 100)}%`;
        milli.style.width = `${(date.getMilliseconds() / 1000) * 100}%`;

        hoursDisplay.innerHTML = date.getHours().toString();
        minutesDisplay.innerHTML = date.getMinutes().toString()
        secondsDisplay.innerHTML = date.getSeconds().toString()
        milliDisplay.innerHTML = date.getMilliseconds().toString()
    } else {
        console.log("Not all divs exist")
    }

    requestAnimationFrame(update)
}