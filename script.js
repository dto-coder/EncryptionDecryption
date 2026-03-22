/*
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
*/
function display() {
    var input = document.getElementById("message").value;
    var display = document.getElementById("display-message");
    display.innerHTML = input;
}

function generateRandomPrime() {
    const primes = [];
    for (let num = 2; primes.length < 65537; num++) {
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
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
function modInverse(a, m) {
    m0 = m;
    y = 0;
    x = 1;
    if (m === 1) {
        return 0;
    }
    while (a > 1) {
        let q = Math.floor(a / m);
        let t = m;
        m = a % m;
        a = t;
        t = y;
        y = x - q * y;
        x = t;
    }
    if (x < 0) {
        x += m0;
    }
    return x;
}
function generateRSAKeys() {
    const p = generateRandomPrime();
    const q = generateRandomPrime();
    const n = p * q;
    const phi = (p - 1) * (q - 1);
    // let e = generateRandomPrime(); // You can also choose a fixed e like 65537
    let e = 65537; // Common choice for e
    const d = modInverse(e, phi);

    document.getElementById("display").innerHTML = "p: " + p;
    document.getElementById("display").innerHTML += "<br>q: " + q;
    document.getElementById("display").innerHTML += "<br>n: " + n;
    document.getElementById("display").innerHTML += "<br>φ(n): " + phi;
    document.getElementById("display").innerHTML += "<br>e: " + e;
    document.getElementById("display").innerHTML += "<br>d: " + d;
}
function encryptMessage(message, e, n) {
    const encrypted = [];
    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);
        encrypted.push(modExp(charCode, e, n));
    }
    document.getElementById("display-encrypted").innerHTML = "Encrypted Message: " + encrypted.join(", ");
}