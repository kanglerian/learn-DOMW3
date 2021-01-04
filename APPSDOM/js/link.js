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

function berubah() {

    var br = document.getElementById("in1").value = "Nah kan ini berubah?";
}

function tampilkan() {
    var tpl = document.getElementById("frm1");
    var txt = "";
    var i;
    for (i = 0; i < tpl.length; i++) {
        txt += tpl.elements[i].value + "<br>";
    }
    document.getElementById("demo2").innerHTML = txt;
}

function reset() {
    document.getElementById("frm1").reset();
}