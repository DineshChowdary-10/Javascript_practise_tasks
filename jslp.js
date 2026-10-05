// 1. If Else
function one()
{
    let n = Number(document.getElementById("n1").value);

    if(n === 10)
    {
        document.getElementById("r1").innerText = "N is 10";
    }
    else
    {
        document.getElementById("r1").innerText = "N is not 10";
    }
}


// 2. Divisible by 10
function two()
{
    let a = Number(document.getElementById("n2").value);

    if(a % 10 === 0)
    {
        document.getElementById("r2").innerText = "A is divisible by 10";
    }
    else
    {
        document.getElementById("r2").innerText = "A is not divisible by 10";
    }
}


// 3. AND Operator
function three()
{
    let b = Number(document.getElementById("n3").value);
    let c = Number(document.getElementById("n4").value);

    if(b === 10 && c === 10)
    {
        document.getElementById("r3").innerText = "Yes, both are 10";
    }
    else
    {
        document.getElementById("r3").innerText = "Both are not 10";
    }
}


// 4. Truthy or Falsy
function four()
{
    if(document.all)
    {
        document.getElementById("r4").innerText = "Truthy value";
    }
    else
    {
        document.getElementById("r4").innerText = "Falsy value";
    }
}


// 5. If Else If Else
function five()
{
    let n = Number(document.getElementById("n5").value);
    let result = "";

    if(n === 1)
    {
        result = "1st condition executed";
    }
    else if(n === 2)
    {
        result = "2nd condition executed";
    }
    else if(n === 3)
    {
        result = "3rd condition executed";
    }
    else
    {
        result = "Else block executed";
    }

    document.getElementById("r5").innerText = result;
}


// 6. Independent If Conditions
function six()
{
    let result = "";

    if(true)
    {
        result += "First block\n";
    }

    if(true)
    {
        result += "Second block\n";
    }

    if(true)
    {
        result += "Third block";
    }

    document.getElementById("r6").innerText = result;
}


// 7. Nested If
function seven()
{
    let a = Number(document.getElementById("n7").value);
    let result = "";

    if(a < 20 && a > 0)
    {
        if(a > 5 && a < 11)
        {
            result = ++a;
        }
        else
        {
            result = "Inner condition not satisfied";
        }
    }
    else
    {
        result = "Outer condition not satisfied";
    }

    document.getElementById("r7").innerText = result;
}


// 8. Positive Number and Even Check
function eight()
{
    let n = Number(document.getElementById("n8").value);
    let result = "";

    if(n > 0)
    {
        if(n % 2 === 0)
        {
            result = n + " is an even number";
        }
        else
        {
            result = n + " is an odd number";
        }
    }
    else if(n < 0)
    {
        result = "It is a negative number";
    }
    else
    {
        result = "Number is zero";
    }

    document.getElementById("r8").innerText = result;
}


// 9. Switch Case with Break
function nine()
{
    let n = Number(document.getElementById("n9").value);
    let result = "";

    switch(n)
    {
        case 1:
            result = "1st block is executed";
            break;

        case 2:
            result = "2nd block is executed";
            break;

        case 3:
            result = "3rd block is executed";
            break;

        default:
            result = "Default block is executed";
    }

    document.getElementById("r9").innerText = result;
}


// 10. String and Number in Switch
function ten()
{
    let c = document.getElementById("n10").value;
    let result = "";

    switch(c)
    {
        case 10:
            result = "Number case executed";
            break;

        case "10":
            result = "String case executed";
            break;

        default:
            result = "No case matched";
    }

    document.getElementById("r10").innerText = result;
}


// 11. Calculator Using Switch
function eleven()
{
    let n1 = Number(document.getElementById("n11").value);
    let n2 = Number(document.getElementById("n12").value);
    let op = document.getElementById("op").value;
    let result;

    switch(op)
    {
        case "+":
            result = n1 + n2;
            break;

        case "-":
            result = n1 - n2;
            break;

        case "*":
            result = n1 * n2;
            break;

        case "/":
            result = n2 === 0 ? "Cannot divide by zero" : n1 / n2;
            break;

        case "%":
            result = n2 === 0 ? "Cannot divide by zero" : n1 % n2;
            break;

        default:
            result = "Select a valid operator";
    }

    document.getElementById("r11").innerText = "Result: " + result;
}


// 12. Switch Fall-Through Without Break
function twelve()
{
    let n = Number(document.getElementById("n13").value);
    let result = "";

    switch(n)
    {
        case 1:
            result += "Case 1 executed\n";

        case 2:
            result += "Case 2 executed\n";

        case 3:
            result += "Case 3 executed\n";

        default:
            result += "Default case executed";
    }

    document.getElementById("r12").innerText = result;
}


// 13. String Concatenation
function thirteen()
{
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;

    let name = fname + " " + mname + " " + lname;

    document.getElementById("r13").innerText = name;
}


// 14. String and Number Addition
function fourteen()
{
    let n1 = document.getElementById("n14").value;
    let n2 = Number(document.getElementById("n15").value);

    let result = n1 + n2;

    document.getElementById("r14").innerText =
        "Result: " + result + "\nData type: " + typeof result;
}


// 15. parseInt and typeof
function fifteen()
{
    let n1 = document.getElementById("n16").value;
    let n2 = parseInt(n1);

    document.getElementById("r15").innerText =
        "Converted value: " + n2 +
        "\nData type: " + typeof n2;
}


// 16. parseFloat and parseInt
function sixteen()
{
    let n3 = document.getElementById("n17").value;

    let a = parseFloat(n3);
    let b = parseInt(n3);

    document.getElementById("r16").innerText =
        "parseFloat: " + a +
        "\nparseInt: " + b;
}


// 17. Number, parseInt and parseFloat
function seventeen()
{
    let a = document.getElementById("n18").value;

    let b = Number(a);
    let c = parseInt(a);
    let d = parseFloat(a);

    document.getElementById("r17").innerText =
        "Number(): " + b +
        "\nparseInt(): " + c +
        "\nparseFloat(): " + d;
}
