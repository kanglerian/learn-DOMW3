document.getElementById("link").innerHTML =
    "Linknya ada : " + document.links.length;

function satu() {
    document.getElementById("demo").innerHTML =
        "Linknya ini ya : " + "<b>" + document.links[0].href + "</b>";
}

function dua() {
    document.getElementById("demo").innerHTML =
        "Linknya ini ya : " + "<b>" + document.links[1].href + "</b>";
}