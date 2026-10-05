//1
let c = "cancel";
if(c!=cancel)
{
    console.log("attend class");
}
else{
    console.log("Dont attend the class");
}


//2
let batch = 61;

if(batch===61)
{
    console.log("attend Vineeth sir classs");
}
else
{
    console.log("Donot attend");
}


//3
let target = 60;

if(target>=60)
{
    console.log("Montly sales target reached");
}
else
{
    console.log("Monthly target not reached");
}

//4
let age =40;
if(age>=50)
{
    console.log("console.log pension will be approved");
    
}
else{
    console.log("age is in valid");
}

//5
let entry_time = "9:30am";
if(entry_time ==="9:00am")
{
    console.log("Enter to the class");
}
else{
    console.log("You are late, not allowed into the class");
}

//6

let date = "29sep";
if(applied ==="29sep")
{
    console.log("Application applied successfully");
}

else
{
    console.log("Time exceded cant apply fill the form now ");
}




//ifleseif

let marks = 80;
if(marks>=90)
{
    console.log("Grade-A");

}
else if(marks>=80 && marks<90)
{
    console.log("Grade-B");
}
else if(marks>=65 && marks<80)
{
    console.log("Grade - C");
}

else if(marks>=40 && marks<65)
{
    console.log("Grade-D");
}

else
{
    console.log("Failed");
}



//2

let qualification = "degree";

if(qualification ==="10thClass")
{
    console.log("You can be eligible to do voice processing ");
}
else if(qualification==="12thPass")
{
    console.log("You can work with begginer tech");
}
else if(qualification === degree)
{
    console.log("You can work with advanced tech");
}

else{
    console.log("Please specify your proper education or there is no job to your current education");
}


//3

let age_process = 10;

if(age_process <=12)
{
    console.log("Childhood");
}
else if(age_process<=19 && age_process>12)
{
    console.log("Teenage");
}
else if(age<=39 && age>19)
{
    console.log("adulthood");
}
else if(age<=59 && age>39)
{
    console.log("Middle adulthood");
}

else{
    console.log("old age");
}

//4
let sleepHours = 7;

if(sleepHours >= 9)
{
    console.log("You had a very good sleep");
}
else if(sleepHours >= 7 && sleepHours < 9)
{
    console.log("You had a healthy amount of sleep");
}
else if(sleepHours >= 5 && sleepHours < 7)
{
    console.log("You need a little more sleep");
}
else
{
    console.log("you seriously need to sleep");
}

//5
let studyHours = 4;

if(studyHours >= 8)
{
    console.log("You studied like a topper");
}
else if(studyHours >= 5 && studyHours < 8)
{
    console.log("Good job, you studied well");
}
else if(studyHours >= 2 && studyHours < 5)
{
    console.log("You studied a little, try to study more");
}
else
{
    console.log("Bro, open your books first 😂");
}

//6
let battery = 25;

if(battery >= 80)
{
    console.log("Your phone has plenty of battery");
}
else if(battery >= 50 && battery < 80)
{
    console.log("Your battery is good");
}
else if(battery >= 20 && battery < 50)
{
    console.log("You should charge your phone soon");
}
else
{
    console.log("Charge your phone before it dies ");
}







let opt = "+";
let a =10;
let b= 5;


switch(opt)
{
    case "+":
        console.log(a+b);
        break;

    case "-":
        console.log(a-b);
        break;

    case "*":
        console.log(a*b);
        break;

    case "/":
        console.log(a/b);
        break;

    case "%":
        console.log(a%b);
        break;

    default:
        console.log("select a valid operator");
    
}




let choice = 2;

switch(choice)
{
    case 1:
        console.log("20% discount on Rs.10,000 purchase+premium membership");
        break;

    case 2:
        console.log("10% discount on Rs.8,000 purchase+gold membership");
        break;

     case 3:
        console.log("Rs.5,000 purchase+general membership");
        break;

     default:
        console.log("no other offers");
}











