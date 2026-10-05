
// 1. Average of 3 numbers without using DOM for calculation
function average() {
    let a = parseFloat(document.getElementById("a1").value);
    let b = parseFloat(document.getElementById("a2").value);
    let c = parseFloat(document.getElementById("a3").value);

    let avg = (a + b + c) / 3;

    document.getElementById("avgResult").innerHTML = avg;
}

// 2. Average of 3 numbers using DOM
function averages() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);

    document.getElementById("res").value = (n1 + n2 + n3) / 3;
}

// 3. Sum of first n natural numbers
function sumofN() {
    let n = parseInt(document.getElementById("NaturalNumber").value);

    document.getElementById("sumResult").value =
        (n * (n + 1)) / 2;
}

// 4. Average of first n natural numbers
function AveragefNnatural() {
    let n = parseInt(document.getElementById("numberValue").value);

    if (n <= 0 || isNaN(n)) {
        document.getElementById("ANN").value = "Enter n greater than 0";
    } else {
        document.getElementById("ANN").value = (n + 1) / 2;
    }
}

// 5. Profit percentage
function profit() {
    let cp = parseFloat(document.getElementById("cp").value);
    let sp = parseFloat(document.getElementById("sp").value);

    if (cp <= 0 || isNaN(cp) || isNaN(sp)) {
        document.getElementById("profitResult").value = "Invalid input";
    } else {
        let p = sp - cp;
        document.getElementById("profitResult").value =
            (p / cp) * 100 + "%";
    }
}

// 6. Simple Interest
function simpleInterest() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    document.getElementById("siResult").value =
        (p * r * t) / 100;
}

// 7. Missing angle of a triangle
function missingAngle() {
    let a = parseFloat(document.getElementById("angle1").value);
    let b = parseFloat(document.getElementById("angle2").value);

    let missing = 180 - (a + b);

    document.getElementById("angleResult").value =
        (a >= 0 && b >= 0 && a + b < 180)
            ? missing
            : "Invalid angles";
}

// 8. Last digit of a number
function lastDigit() {
    let n = parseInt(document.getElementById("lastNum").value);

    document.getElementById("lastResult").value =
        Math.abs(n) % 10;
}

// 9. Remove last digit
function removeLastDigit() {
    let n = parseInt(document.getElementById("removeNum").value);

    document.getElementById("removeResult").value =
        Math.trunc(n / 10);
}

// 10. First digit of a 3-digit number
function firstDigit3() {
    let n = parseInt(document.getElementById("threeDigit").value);

    if (Math.abs(n) < 100 || Math.abs(n) > 999 || isNaN(n)) {
        document.getElementById("first3Result").value =
            "Enter a 3-digit number";
    } else {
        document.getElementById("first3Result").value =
            Math.trunc(Math.abs(n) / 100);
    }
}

// 11. First digit of a 5-digit number
function firstDigit5() {
    let n = parseInt(document.getElementById("fiveDigit").value);

    if (Math.abs(n) < 10000 || Math.abs(n) > 99999 || isNaN(n)) {
        document.getElementById("first5Result").value =
            "Enter a 5-digit number";
    } else {
        document.getElementById("first5Result").value =
            Math.trunc(Math.abs(n) / 10000);
    }
}

// 12. Celsius to Fahrenheit
function celsiusToFahrenheit() {
    let c = parseFloat(document.getElementById("celsius").value);

    document.getElementById("fahrenheitResult").value =
        (c * 9 / 5) + 32;
}

// 13. Fahrenheit to Celsius
function fahrenheitToCelsius() {
    let f = parseFloat(document.getElementById("fahrenheit").value);

    document.getElementById("celsiusResult").value =
        (f - 32) * 5 / 9;
}

// 14. Gross salary
function grossSalary() {
    let basic = parseFloat(document.getElementById("basic").value);
    let hra = parseFloat(document.getElementById("hra").value);
    let da = parseFloat(document.getElementById("da").value);

    document.getElementById("salaryResult").value =
        basic + hra + da;
}

// 15. Swap using a third variable
function swapWithTemp() {
    let a = parseFloat(document.getElementById("swapA").value);
    let b = parseFloat(document.getElementById("swapB").value);

    let temp = a;
    a = b;
    b = temp;

    document.getElementById("swapTempResult").value =
        "A = " + a + ", B = " + b;
}

// 16. Swap without a third variable
function swapWithoutTemp() {
    let a = parseFloat(document.getElementById("swapX").value);
    let b = parseFloat(document.getElementById("swapY").value);

    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById("swapNoTempResult").value =
        "A = " + a + ", B = " + b;
}