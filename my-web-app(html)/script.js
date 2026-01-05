let time = new Date();
let h = 0;
let m = 0;
let s = 0;

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
    time = new Date();
    h = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    m = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    s = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}