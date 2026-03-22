
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
function generateRandomPrime() {
    const primes = [];
    for (let num = 2; primes.length < 2**10; num++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    const randomIndex = Math.floor(Math.random() * primes.length);
    const randomPrime = primes[randomIndex];
    document.getElementById("display").innerHTML = randomPrime;
}