// Seattle time 
const secondHand = document.querySelector(".seattle-second-hand");
const minuteHand = document.querySelector(".seattle-min-hand");
const hourHand = document.querySelector(".seattle-hour-hand");

const seattleTime = () => {
const now = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
// console.log("Seattle", now)
const seconds = now.split(",")[1].split(" ")[1].slice(5)
const secondsDegrees = ((seconds / 60) * 360) + 90;
if (secondsDegrees == 90) {
    secondHand.classList.add("no-transition")
} else {
    secondHand.classList.remove("no-transition")
}
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const mins = now.split(",")[1].split(" ")[1].split(":")[1];
const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;;
if (minsDegrees == 90) {
    minuteHand.classList.add("no-transition")
} else {
    minuteHand.classList.remove("no-transition")
}
minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

const hour = now.split(",")[1].split(" ")[1].split(":")[0];
const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
if (hourDegrees == 90) {
    hourHand.classList.add("no-transition")
} else {
    hourHand.classList.remove("no-transition")
}
hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Austin time
const austinSecondHand = document.querySelector(".austin-second-hand");
const austinMinuteHand = document.querySelector(".austin-min-hand");
const austinHourHand = document.querySelector(".austin-hour-hand");
const austinTime = () => {
const now = new Date().toLocaleString("en-US", {timeZone: "America/North_Dakota/Beulah"});
// console.log("Austin time", now)
const austinSeconds = now.split(",")[1].split(" ")[1].slice(5)
const secondsDegrees = ((austinSeconds / 60) * 360) + 90;
if (secondsDegrees == 90) {
    austinSecondHand.classList.add("no-transition")
} else {
    austinSecondHand.classList.remove("no-transition")
}
austinSecondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const austinMinute = now.split(",")[1].split(" ")[1].split(":")[1]
const minsDegrees = ((austinMinute / 60) * 360) + ((austinSeconds/60)*6) + 90;;
if (minsDegrees == 90) {
    austinMinuteHand.classList.add("no-transition")
} else {
    austinMinuteHand.classList.remove("no-transition")
}
austinMinuteHand.style.transform = `rotate(${minsDegrees}deg)`;

const austinHour = now.split(",")[1].split(" ")[1].split(":")[0]
const hourDegrees = ((austinHour / 12) * 360) + ((austinMinute/60)*30) + 90;
if (hourDegrees == 90) {
    austinHourHand.classList.add("no-transition")
} else {
    austinHourHand.classList.remove("no-transition")
}
austinHourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Maplewood time
const maplewoodSecondHand = document.querySelector(".maplewood-second-hand");
const maplewoodMinuteHand = document.querySelector(".maplewood-min-hand");
const maplewoodHourHand = document.querySelector(".maplewood-hour-hand");

const maplewoodTime = () => {
const now = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
// console.log("Maplewood time", now)
const maplewoodSeconds = now.split(",")[1].split(" ")[1].slice(5)
const secondsDegrees = ((maplewoodSeconds / 60) * 360) + 90;
if (secondsDegrees == 90) {
    maplewoodSecondHand.classList.add("no-transition")
} else {
    maplewoodSecondHand.classList.remove("no-transition")
}
maplewoodSecondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const maplewoodMinute = now.split(",")[1].split(" ")[1].split(":")[1]
const minsDegrees = ((maplewoodMinute / 60) * 360) + ((maplewoodSeconds/60)*6) + 90;
if (minsDegrees == 90) {
    maplewoodMinuteHand.classList.add("no-transition")
} else {
    maplewoodMinuteHand.classList.remove("no-transition")
}
maplewoodMinuteHand.style.transform = `rotate(${minsDegrees}deg)`;

const maplewoodHour = now.split(",")[1].split(" ")[1].split(":")[0]
const hourDegrees = ((maplewoodHour / 12) * 360) + ((maplewoodMinute/60)*30) + 90;
if (hourDegrees == 90) {
    maplewoodHourHand.classList.add("no-transition")
} else {
    maplewoodHourHand.classList.remove("no-transition")
}
maplewoodHourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Melbourne time
const melbourneSecondHand = document.querySelector(".melbourne-second-hand");
const melbourneMinuteHand = document.querySelector(".melbourne-min-hand");
const melbourneHourHand = document.querySelector(".melbourne-hour-hand");
const melbourneTime = () => {
const now = new Date().toLocaleString("en-US", {timeZone: "Australia/Melbourne"})
// console.log("Melbourne time", now)
const melbourneSeconds = now.split(",")[1].split(" ")[1].slice(6)
const secondsDegrees = ((melbourneSeconds / 60) * 360) + 90;
// if (secondsDegrees == 90) {
//   melbourneSecondHand.classList.add("no-transition")
// } else {
//   melbourneSecondHand.classList.remove("no-transition")
// }
melbourneSecondHand.style.transform = `rotate(${secondsDegrees}deg)`;
const melbourneMinute = now.split(",")[1].split(" ")[1].split(":")[1]
const minsDegrees = ((melbourneMinute / 60) * 360) + ((melbourneSeconds/60)*6) + 90;;
if (minsDegrees == 90) {
    melbourneMinuteHand.classList.add("no-transition")
} else {
    melbourneMinuteHand.classList.remove("no-transition")
}
melbourneMinuteHand.style.transform = `rotate(${minsDegrees}deg)`;

const melbourneHour = now.split(",")[1].split(" ")[1].split(":")[0]
const hourDegrees = ((melbourneHour / 12) * 360) + ((melbourneMinute/60)*30) + 90;
if (hourDegrees == 90) {
    melbourneHourHand.classList.add("no-transition")
} else {
    melbourneHourHand.classList.remove("no-transition")
}
melbourneHourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(seattleTime, 1000);
setInterval(austinTime, 1000)
setInterval(maplewoodTime, 1000)
setInterval(melbourneTime, 1000)