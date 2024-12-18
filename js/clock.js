const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.minutes()).padStart(2, "0");
    const secondes = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${secondes}`;
}

setInterval(getClock, 1000);
