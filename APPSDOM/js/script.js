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
    document.getElementById("gambar").src = "assets/logo-dark.svg"
    document.getElementById("bread").style.backgroundColor = "#1E1E1E";
    document.getElementById("p0").style.backgroundColor = "#1E1E1E";
    document.getElementById("p2").style.backgroundColor = "#1E1E1E";
    document.getElementById("p3").style.backgroundColor = "#1E1E1E";
    document.getElementById("peringatan").innerHTML = "Dark mode aktif :)";
}

function lightMode() {
    document.body.style.backgroundColor = "#fafafa";
    document.body.style.color = "black";
    document.getElementById("gambar").src = "assets/logo.svg"
    document.getElementById("bread").style.backgroundColor = "white";
    document.getElementById("p0").style.backgroundColor = "#fafafa";
    document.getElementById("p2").style.backgroundColor = "white";
    document.getElementById("p3").style.backgroundColor = "white";
    document.getElementById("peringatan").innerHTML = null;
}

function disable() {
    document.getElementById("btn01").disabled = true;
    document.getElementById("btn02").disabled = true;
    document.getElementById("btn03").disabled = true;
    document.getElementById("btn04").disabled = true;
}

function enable() {
    document.getElementById("btn01").disabled = false;
    document.getElementById("btn02").disabled = false;
    document.getElementById("btn03").disabled = false;
    document.getElementById("btn04").disabled = false;
}