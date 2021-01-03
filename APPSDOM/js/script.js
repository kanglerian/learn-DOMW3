var date = new Date();
var websiteku = "CodaleCenter";

var kota = "Tasikmalaya";

document.getElementById("tahun").innerHTML =
    "© " + 2020 + " - " + date.getFullYear() + " " + websiteku + " • All rights reserved • love from " + kota;

var pesan = "Semangat terus belajarnya! kamu pasti bisa :) ";
document.getElementById("jalan").innerHTML = pesan;

document.getElementById("title").innerHTML = document.title;

function darkMode() {
    document.body.style.backgroundColor = "#111111";
    document.body.style.color = "white";
    document.getElementById("p0").style.backgroundColor = "#1E1E1E";
    document.getElementById("p2").style.backgroundColor = "#1E1E1E";
    document.getElementById("p3").style.backgroundColor = "#1E1E1E";
}

function lightMode() {
    document.body.style.backgroundColor = "#fafafa";
    document.body.style.color = "black";
    document.getElementById("p0").style.backgroundColor = "#fafafa";
    document.getElementById("p2").style.backgroundColor = "white";
    document.getElementById("p3").style.backgroundColor = "white";
}