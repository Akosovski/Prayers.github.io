let element1 = document.getElementById("btndoa1");
element1.addEventListener("click", done1);

function done1() {
    document.getElementById("doa1").style.background = "#9d9d9d";
    document.getElementById("doaimg1").style.filter = "brightness(70%)";
    element1.remove('btn-primary');
    element1.toggle('btn-success');
}