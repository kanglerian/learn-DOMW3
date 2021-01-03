function myFunction() {
    document.getElementById("demo ").innerHTML =
        "Terakhir di modifikasi jam segini " +
        "<b>" + document.lastModified + "</b>";
}


function bukaBaru() {
    var w = window.open();
    w.document.open();
    w.document.write("<h2>Hello World!</h2>");
    w.document.close();
}

function lihatTitle() {
    alert(document.title);
}

function lihatURL() {
    alert(document.URL);
}

var btn = document.getElementsByClassName("btn");

function lihatButton() {
    alert(btn.length);
}

var img = document.getElementsByTagName("img");

function lihatGambar() {
    alert(img.length);
}