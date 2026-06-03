const ACCESS_PASSWORD = "fernetazo";

function validatePassword(){

    const value =
    document.getElementById("passwordInput").value;

    if(value === ACCESS_PASSWORD){

        document
        .getElementById("accessScreen")
        .style.display = "none";

        document
        .getElementById("weddingMusic")
        .play();

    }else{

        alert("Clave incorrecta");

    }
}

const targetDate =
new Date("2026-10-10T18:00:00");

function updateCountdown(){

    const now = new Date();

    const diff =
    targetDate - now;

    if(diff <= 0) return;

    const days =
    Math.floor(diff/(1000*60*60*24));

    const hours =
    Math.floor(
    diff%(1000*60*60*24)
    /(1000*60*60));

    const minutes =
    Math.floor(
    diff%(1000*60*60)
    /(1000*60));

    const seconds =
    Math.floor(
    diff%(1000*60)
    /1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

setInterval(
updateCountdown,
1000
);
