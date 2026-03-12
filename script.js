
function copyText() {
    var text = document.getElementById("display").innerHTML;
    navigator.clipboard.writeText(text);
}
function pasteText() {
    var text = document.getElementById("display");
    navigator.clipboard.readText().then(function(text) {
        document.getElementById("display").innerHTML += text;
    });
}
function clearDisplay() {
    document.getElementById("display").innerHTML = "";
    document.getElementById("input").value = "";
}
function appendToDisplay() {
    var input = document.getElementById("input").value;
    var display = document.getElementById("display");
    display.innerHTML = input;
}
