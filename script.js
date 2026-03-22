
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
    // document.getElementById("display").innerHTML = randomPrime;
    return randomPrime;

}
function generateRSAKeys() {
    const p = generateRandomPrime();
    const q = generateRandomPrime();
    const n = p * q;
    const phi = (p - 1) * (q - 1);
    // let e = 3
    // while (gcd(e, phi) !== 1) {
    //     e += 2;
    // }  
    // const d = modInverse(e, phi);
    document.getElementById("display").innerHTML = "p: " + p;
    document.getElementById("display").innerHTML += "<br>q: " + q;
    document.getElementById("display").innerHTML += "<br>n: " + n;
    document.getElementById("display").innerHTML += "<br>φ(n): " + phi;
}