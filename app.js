//****************************** Chapter 1 ******************************

//Task 1
alert("Hello Visitors!");

//Task 2
alert("Error! Please enter a valid password.");

//Task 3
alert("Welcome to JS Land...\nHappy Coding!");

//Task 4 
alert("Welcome to JS Land...");
alert("Happy Coding!");

//Task 5
alert ("Hello... I  can run JS through my web browser's console"); // run in browser console and working fine.

//Task 6
// I have used alert in my existing HTML CSS project and it is working fine.

//Task 7 
// I had placed <script></script> tag in my Head, Before Body, Inside pages HTML and after pages HTML and it is also working fine.

//****************************** Chapter 2 ******************************

//Task 1 
let username;

//Task 2
let myName = "Umer Waqas";

//Task 3
let message = "Hello World";
alert(message);

//Task 4
let name = "Jhone Doe";
let checkAge = "15 years old";
let course = "Certified Mobile Application Development";

alert(name);
alert(checkAge);
alert(course);

// Task 5
let food = "PIZZA";
alert(food + "\n" + "PIZZ\nPIZ\nPI\nP");

//Task 6
let email = "waqasumer30@gmail.com";
alert("My email address is " + email);

//Task 7
let book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Task 8 
document.write("Yah! I can write HTML content through JavaScript" + "<br>");

//Task 9
let a = "“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”";
alert(a);

//****************************** Chapter 3 ******************************

//Task 1
let age = 24
alert("I am " + age + " years old ");

//Task 2
let visitors = 14;
alert("You have visited this site " + visitors + " times");

//Task 3
let birthyear = 1996;
document.write("My birth year is " + birthyear);
document.write("Data type of my declared letiable is number");

//Task 4
let visitorsName = "John Doe";
let product = "T-shirt";
let quantity = "5";

document.write("<br>" + visitorsName + " ordered " + quantity + " " + product + "(s)" + " on XYZ Clothing Store");

//****************************** Chapter 4 ******************************

//Task 1
var j = 0, k = 5, l = 5;

//Task 2

// Legal Variables

// var name;
// var $name;
// var _name
// var $my_1stVariable;


// illegal Variables

// var 2number;
// var 2;
// var 3_myname;
// var .name;
// var 2,b;

//Task 3
document.write("<h1>Rules for naming JS letiables</h1>" + "<br>");
document.write("letiable names can only contain , numbers, $ and _ . For Example: $my_1stletiable" + "<br>");
document.write("letiable names must begin with a letter, $ or _ . For example $name, _name or name" + "<br>");
document.write("letiable names are case Sensitive" + "<br>");
document.write("letiable names should not be JS Keywords");

// ****************************** Chapter 5 ******************************

//Task 1
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 + input2;
document.write("<br>" + "Sum of " + input1 + " " + "and " + input2 + " is " + sum);

//Task 2

//Subtraction
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 - input2;
document.write("<br>" + "Answer of " + input1 + " Minus " + input2 + " is " + sum);

//Multiplication
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 * input2;
document.write("<br>" + "Answer of " + input1 + " Multiply " + input2 + " is " + sum);

//Division
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 / input2;
document.write("<br>" + "Answer of " + input1 + " Divide " + input2 + " is " + sum);

//Modulus
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 / input2;
document.write("<br>" + "Answer of " + input1 + " Modulus " + input2 + " is " + sum);

//Task 3
let number;
number = 5;
number = 5 + 1;
number = number + 7;
number = number - 1;
number = number % 3;
document.write("<br><br><br>" + "Value after letiable declaration is Undefined");
document.write("<br>" + "Initial value: 5");
document.write("<br>" + "Value after increment is: 6 ");
document.write("<br>" + "Value after addition is: 13");
document.write("<br>" + "Value after decrement is: 12");
document.write("<br>" + "The remainder is : " + number);

//Task 4
let ticketPrice = 600;
let buying = 5;
let cost = ticketPrice * buying;
document.write("<br><br>" + "Total cost to buy " + buying + " tickets to a movie is " + cost + " PKR");

//Task 5
let n = 4;
let result;

for (let i = 1; i <= 10; i++) {
    result = n * i;
    document.write("<br><br>" + n + " x" + " " + i + " = " + result);
}

//Task 6
let temp = 70;
let C = (temp - 32) * 5 / 9;
let F = (temp * 9 / 5) + 32;
document.write("<br><br>" + temp + "°C" + " is " + F + "°F" + "<br>");
document.write(temp + "°F" + " is " + C + "°C" + "<br>");

//Task 7
let item1 = 650;
let quanitem1 = 3;
let item2 = 100;
let quanitem2 = 7;
let shippingCharges = 100;

let totalcost = item1 * quanitem1 + item2 * quanitem2 + shippingCharges;

document.write("<br><br>" + "Price of item 1 is: " + item1 + "<br>");
document.write("Quantity of item 1 is: " + quanitem1 + "<br>");
document.write("Price of item 2 is: " + item2 + "<br>");
document.write("Quantity of item 2 is: " + quanitem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + "<br><br>");
document.write("Total cost of your order is: " + totalcost + "<br>");

//Task 8
let totalmarks = 980;
let marksObtained = 804;
let percentage = 100 * marksObtained / totalmarks;

document.write("<br><br>" + "<h1>Marks Sheet</h1>" + "<br><br>");
document.write("Total Marks: " + totalmarks + "<br>");
document.write("Total Marks: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");

//Task 9
let amountinDollar = 10;
let amountinRiyal = 25;
let dollar = 104.80;
let riyal = 28;

let conversionPKR = amountinDollar * dollar + amountinRiyal * riyal;
document.write("<br><br>" + "<h1>Currency in PKR</h1>" + "<br>");
document.write("Total Currency in PKR: " + conversionPKR + "<br>");


//Task 10
let m = 1;
m = 5 * 10 / 2;
document.write("Result: " + m);


//Task 11
let currentYear = 2020;
let birthYear = 1996;
let yourAge = currentYear - birthYear;
let supposeAge = currentYear - birthYear - 1;

document.write("<br><br>" + "<h1>Age Calculator</h1>" + "<br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + supposeAge + " or " + yourAge + " years old " + "<br>");

//Task 12
let radius = 20;
let Cirumference = 2 * 3.142 * radius;
let areaOfCircle = 3.142 * radius * radius;
document.write("<br><br>" + "<h1>The Geometrizer</h1>" + "<br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The Cirumference is: " + Cirumference + "<br>");
document.write("he Area is: " + areaOfCircle + "<br>");

//Task 13
let favouriteSnack = "Chocolate Chip";
let currentAge = 15;
let estimatedAge = 65;
let days = 18250;
let amountOfSnacksPerDay = 3;
let need = amountOfSnacksPerDay * days;


document.write("<br><br>" + "<h1>The Lifetime Supply Calculator:</h1>" + "<br>");
document.write("Favourite Snack: " + radius + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + estimatedAge + "<br>");
document.write("Amount of Snacks per day: " + amountOfSnacksPerDay + "<br>");
document.write("You will need: " + need + " " + favouriteSnack + " to last you until the ripe old age of " + estimatedAge + "<br>");

// ****************************** Chapter 6 - 9 ******************************

//Task 1
let a = +prompt("Enter value");
document.write("<br><br>" + "Result: " + "<br>");
document.write("The value of a is: " + a);
document.write("<br><br>" + "************************************************************" + "<br>");

document.write("<br>" + "The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>" + "The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>" + "The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>" + "The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");

//Task 2
let a = 2;
let b = 1;

let result = --a - --b + ++b + b--;
document.write("<br>" + "a is: " + a);
document.write("<br>" + "b is: " + b);
document.write("<br>" + "result is: " + result + "<br>");

// --a;  The output is 1
// --a - --b; The output is 1 
//--a - --b + ++b; The output is 2
// --a - --b + ++b + b--; The output is 3

//Task 3
let getInput = prompt("Enter something");
document.write(getInput);


//Task 4 Task 5
let getNumber = +prompt("Enter number to generate table");
let result;

for (let i = 1; i <= 10; i++) {
    result = getNumber * i;
    document.write("<br><br>" + getNumber + " x" + " " + i + " = " + result);
}

//Task 6
let getSubject1 = prompt("Enter Subject 1");
let getSubject2 = prompt("Enter Subject 2");
let getSubject3 = prompt("Enter Subject 3");
let totalSubjectMarks = 100;
let ObtainedMarksSubject1 = +prompt("Enter Obtained Marks of Subject 1");
let ObtainedMarksSubject2 = +prompt("Enter Obtained Marks of Subject 2");
let ObtainedMarksSubject3 = +prompt("Enter Obtained Marks of Subject 3");
let totalPercentageSubject1 = 100 * ObtainedMarksSubject1 / totalSubjectMarks;
let totalPercentageSubject2 = 100 * ObtainedMarksSubject2 / totalSubjectMarks;
let totalPercentageSubject3 = 100 * ObtainedMarksSubject3 / totalSubjectMarks;

let allSubjectsTotalMarks = 300;
let allSubjectsObtainedMarks = ObtainedMarksSubject1 + ObtainedMarksSubject2 + ObtainedMarksSubject3;
let overallPercentage = 100 * allSubjectsObtainedMarks / allSubjectsTotalMarks;

document.write("<table>");
document.write("<tr>");
document.write("<td><h3>Subjects</h3></td>");
document.write("<td><h3>Total Marks</h3></td>");
document.write("<td><h3>Obtained Marks</h3></td>");
document.write("<td><h3>Percentage</h3></td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + getSubject1 + "</td>");
document.write("<td>" + totalSubjectMarks + "</td>");
document.write("<td>" + ObtainedMarksSubject1 + "</td>");
document.write("<td>" + totalPercentageSubject1 +  "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + getSubject2 + "</td>");
document.write("<td>" + totalSubjectMarks + "</td>");
document.write("<td>" + ObtainedMarksSubject2 + "</td>");
document.write("<td>" + totalPercentageSubject2 +  "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + getSubject3 + "</td>");
document.write("<td>" + totalSubjectMarks + "</td>");
document.write("<td>" + ObtainedMarksSubject3 + "</td>");
document.write("<td>" + totalPercentageSubject3 +  "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td></td>");
document.write("<td>" + "<b>"+ allSubjectsTotalMarks + "</b>" + "</td>");
document.write("<td>" + "<b>" + allSubjectsObtainedMarks + "</b>" + "</td>");
document.write("<td>" + "<b>" + overallPercentage + "%" + "</b>" + "</td>");
document.write("</tr>");
document.write("</table>")


// ****************************** Chapter 9 - 11 ******************************

//Task 1
let city = prompt("Enter City");

if (city == "Karachi") {
    alert("Welcome to city of lights");
}

else {
    alert("Wrong city");
}

//Task 2
let gender = prompt("Enter Gender ");

if (gender == "Male" || gender == "male") {
    alert("Good Morning Sir.");

} else if (gender == "Female" || gender == "female") {
    alert("Good Morning Ma’am.");
}

//Task 3
let color = prompt("Enter Trafiic Color");

document.write("<br><br>" + "<table border=2px>");
document.write("<tr>");
document.write("<td>" + "<h4>Signal Color</h4>" + "</td>");
document.write("<td>" + "<h4>Message</h4>" + "</td>");
document.write("</tr>");

if (color == "Red" || color == "red") {
    document.write("<tr>");
    document.write("<td>" + color + "</td>");
    document.write("<td>" + "Must Stop" + "</td>");
    document.write("</tr>");

} else if (color == "Yellow" || color == "yellow") {
    document.write("<tr>");
    document.write("<td>" + color + "</td>");
    document.write("<td>" + "Ready to move" + "</td>");
    document.write("</tr>");

} else if (color == "Green" || color == "green") {
    document.write("<tr>");
    document.write("<td>" + color + "</td>");
    document.write("<td>" + "Move now" + "</td>");
    document.write("</tr>");
} else {
    alert("No color found");
}

document.write("</tr>");
document.write("</table>");

//Task 4
let fuel = +prompt("Enter Fuel");

if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
}

else {
    alert("No need to refill");
}

//Task 5 a
let a = 4; if (++a === 5) { 
    alert("given condition for letiable a is true"); 
} // Output is given condition for letiable a is true;

// //Task 5 b
let b = 82; if (b++ === 83) { 
    alert("given condition for letiable b is true"); 
} // No Output (Undefined)

// //Task 5 c
let c = 12; if (c++ === 13) { 
    alert("condition 1 is true"); 
} if (c === 13) { 
    alert("condition 2 is true");
} if (++c < 14) { 
    alert("condition 3 is true"); 
} if (c === 14) {
    alert("condition 4 is true"); 
}
// // coniditon 2 is true
// // condition 4 is true

//Task 5 d
let materialCost = 20000; 
let laborCost = 2000; 
let totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost) { 
    alert("The cost equals"); 
}
// The cost equals

//Task 5 e  
if (true) { 
    alert("True"); 
} if (false) { 
    alert("False"); 
} // True

//Task 5 f
if ("car" < "cat") { 
    alert("car is smaller than cat"); 
} 
// Car is smaller than cat

//Task 6
let enterMarksObtained1 = +prompt("Enter marks obtained in Subject 1");
let enterMarksObtained2 = +prompt("Enter marks obtained in Subject 2");
let enterMarksObtained3 = +prompt("Enter marks obtained in Subject 3");
let enterTotalMarks = +prompt("Enter Total Marks");

let totalMarksObtained = enterMarksObtained1 + enterMarksObtained2 + enterMarksObtained3;
let totalPercentage = 100 * totalMarksObtained / enterTotalMarks;

let grade;
let remarks;

if (totalPercentage >= 80) {
    grade = "A-One";
    remarks = "Excellent";
}

else if (totalPercentage >= 70) {
    grade = "A";
    remarks = "Good";
}

else if (totalPercentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}

else if (totalPercentage < 60) {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<br>" + "<h1>Mark Sheet</h1>");
document.write("<br>" + "Total Marks: " + enterTotalMarks);
document.write("<br>" + "Marks Obtained: " + totalMarksObtained);
document.write("<br>" + "Percentage: " + totalPercentage + "%");
document.write("<br>" + "Grade: " + grade);
document.write("<br>" + "Remarks: " + remarks);

document.write("<table cellspacing=5 border=2>");
document.write("<br><br><br>" + "<tr>");
document.write("<th>Percentage %</th>");
document.write("<th>Grade</th>");
document.write("<th>Remarks</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td> Greater than or equals to 80 </td>");
document.write("<td> A-one </td>");
document.write("<td> Excellent </td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td> Greater than or equals to 70 </td>");
document.write("<td> A </td>");
document.write("<td> Good </td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td> Greater than or equals to 60 </td>");
document.write("<td> B </td>");
document.write("<td> You need to improve </td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td> less than 60 </td>");
document.write("<td> Fail </td>");
document.write("<td> Sorry </td>");
document.write("</tr>");

//Task 7
let secretNumber = +prompt("Enter Secret Number");

if (secretNumber <= 10) {
    alert("Bingo! Correct");
} else if (secretNumber <= 11) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry! Your number is incorrect");
}

//Task 8
var givenNum = +prompt("Enter number to check if its divisible by 3");

if (givenNum % 3 == 0) {
    alert("Yes! Your number is divisible by 3");
}else {
    alert("Sorry! Your number is not divisible by 3")
}

// Task 9
var checkNum = +prompt("Check number if it is Even or Odd");

if (checkNum % 2 == 0) {
    alert("Your number is Even");
}else {
    alert("Your number is Odd");
}

// Task 10
var checkTemperature = +prompt("Enter Temperature");

if (checkTemperature > 40) {
    alert("It is too hot outside.")
}
else if (checkTemperature > 30) {
    alert("The Weather today is Normal.");

}
else if (checkTemperature > 20) {
    alert("Today’s Weather is cool.");

}
else if (checkTemperature > 10) {
    alert("OMG! Today’s weather is so Cool.");

}

// Task 11
var enterNum1 = +prompt("Enter Number 1");
var operation = prompt("Enter operator for which you want to do calculation");
var enterNum2 = +prompt("Enter Number 2");
var total;

if (operation == '+') {
    total = enterNum1 + enterNum2;
    document.write("Answer is: " + total);
}if (operation == '-') {
    total = enterNum1 - enterNum2;
    document.write("Answer is: " + total);
}if (operation == '*') {
    total = enterNum1 * enterNum2;
    document.write("Answer is: " + total);
}if (operation == '/') {
    total = enterNum1 / enterNum2;
    document.write("Answer is: " + total);
}if (operation == '%') {
    total = enterNum1 % enterNum2;
    document.write("Answer is: " + total);
}

// ****************************** Chapter 12 - 13 ******************************

//Task 1
var ch = prompt("Enter any Character");
var a = ch.charCodeAt();

if (a >= 65 && a <= 90) {
    alert("It is an Uppercase letter");
}else if (a >= 97 && a <= 122) {
    alert("It is an lowercase Letter");
} else if (a >= 48 && a <= 57) {
    alert("It is an Number");
}

//Task 2
var checkGreaterNum1 = +prompt("Enter number 1");
var checkGreaterNum2 = +prompt("Enter number 2");

if (checkGreaterNum1 > checkGreaterNum2) {
    alert("Number 1 is larger number which is " + checkGreaterNum1);
}else if (checkGreaterNum2 > checkGreaterNum1) {
    alert("Number 2 is larger number which is " + checkGreaterNum2);
}else if (checkGreaterNum1 == checkGreaterNum2 || checkGreaterNum2 == checkGreaterNum1) {
    alert("both numbers are same");
}

// Task 3
var checknumber = +prompt("Enter number to check it is positive, negative or zero");

if (checknumber > 0) {
    alert("The number is positive");
}else if (checknumber < 0) {
    alert("The number is negative");
}else if (checknumber == 0) {
    alert("The number is zero");
}

//Task 4
var checkVowel = prompt("Enter something to check if it is vowel");

if (checkVowel == "a" || checkVowel == "e" || checkVowel == "i" || checkVowel == "o" || checkVowel == "u" ||
    checkVowel == "A" || checkVowel == "E" || checkVowel == "I" || checkVowel == "O" || checkVowel == "U") {
    alert("Vowel Found");
}
else {
    alert("Vowel not found");
}
//Task 5
var password = "admin123";
var checkPassword = prompt("Enter correct password");

if (checkPassword == password) {
    alert("Correct! The password you entered matches the original password");
}else if (checkPassword == "") {
    alert("Please enter your password");
}else {
    alert("Show “Incorrect password");
}

// Task 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else {
    greeting = "Good evening";
    alert(greeting);
}

//Task 7
var checkTime = +prompt("Enter time in this format eg: 1900");

if (checkTime >= 0000 && checkTime < 1200) {
    alert("Good Morning!");
}else if (checkTime >= 1200 && checkTime < 1700) {
    alert("Good Afternoon!");
}else if (checkTime >= 1700 && checkTime < 2100) {
    alert("Good Evening!");

}else if (checkTime >= 2100 && checkTime <= 2359) {
    alert("Good Night");

}

//****************************** Chapter 14 - 16 ******************************

// //Task 1
var studentNames = [];
console.log(studentNames);

 //Task 2
 var studentsName = new Array();
 console.log(studentsName);

//Task 3
var stringArray = ["Mango", "Orange", "Banana", "Apple", "Grapes"];
document.write(stringArray + "<br>");

//Task 4
var numbersArray = [1, 2, 3, 4, 5];
document.write(numbersArray + "<br>");

//Task 5 
var booleanArray = [true, false]
document.write(booleanArray + "<br>");

//Task 6
var mixedArray = [1, "Umer", 2, "Waqas", true, 3, false];
document.write(mixedArray + "<br>");

//Task 7
var qualificationArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
for (var i=0; i < qualificationArray.length; i++) {
    document.write("<br>" + (i + 1) + ") " +qualificationArray[i]);
}

document.write("<br>");

//Task 8
var studentNamesArray = ["Michael", "John", "Tony"];
var studentScoreArray = [320, 230, 480];
var assumíngMarks = 500;

for (var i=0; i < studentNamesArray.length; i++) {
    for (var j=0; j < studentScoreArray.length; j++);
    var calc = 100 * studentScoreArray[i] / assumíngMarks;
    document.write("<br>" + "Score of " + studentNamesArray[i] + "is " +studentScoreArray[i] + "." + "Percentage is " + calc + "%");
}
document.write("<br><br>");

//Task 9
var colorsArray = ['Blue', 'Red', 'Blue', 'Purple', 'Green'];
document.write("<b>Default Colors in Array : </b>" + colorsArray + "<br><br>");

var addColorInBeginning = prompt("Which color do you like to add to the beginning?");
colorsArray.unshift(addColorInBeginning);
document.write("<b>Color Added to the Beginning : </b>" + colorsArray + "<br><br>");

var addColorInEnd = prompt("Which color do you like to add to the End?");
colorsArray.push(addColorInEnd);
document.write("<b>Color Added to the End : </b>" + colorsArray + "<br><br>");

var addTwoMoreColors1 = prompt("Enter two more colors to the beginning? Enter your first color?");
colorsArray.unshift(addTwoMoreColors1);

var addTwoMoreColors2 = prompt("Enter two more colors to the beginning? Enter your second color?");
colorsArray.unshift(addTwoMoreColors2);
document.write("<b>Two more colors added to the Beginning : </b>" + colorsArray + "<br><br>");

colorsArray.shift();
document.write("<b>First color deleted : </b>" + colorsArray + "<br><br>");

colorsArray.pop();
document.write("<b>Last color deleted : </b>" + colorsArray + "<br><br>");

var addColoronSpecficIndex = +prompt("Enter the index at which you want to add the color?");
var colorstobeAdded = prompt("Enter the name of color which you want to add on specific index");
var changetoStr = colorstobeAdded.toString();
colorsArray.splice(addColoronSpecficIndex, 0, changetoStr);
document.write("<b>The color " + changetoStr +  " is added on specified index : </b>" + colorsArray + "<br><br>");


var deleteColoronSpecficIndex = +prompt("Enter the index at which you want to delete the color?");
var colorstobeDeleted = +prompt("How many colors do you want to delete?");
colorsArray.splice(deleteColoronSpecficIndex, colorstobeDeleted);
document.write("<b>The color is deleted from specified index : </b>" + colorsArray + "<br><br>");

//Task 10
var scoreofStudents = [320, 230, 480, 120];
var orderedScoreOfStudents = [120, 230, 320, 480];
orderedScoreOfStudents.sort();

document.write("Scores of student : " + scoreofStudents + "<br>");
document.write("Ordered Scores of student : " + orderedScoreOfStudents);

//Task 11
var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<br><br>" + "Cities List" + "<br>" + citiesList);
var selectedCities = citiesList.slice(1, 4);
document.write("<br><br>" + "Selected Cities List : " + "<br>" + selectedCities);

//Task 12
document.write("<br><br>");
var arr = [" This ", " is ", " my ", " cat "];
document.write("Array : " + arr + "<br>");
var fruits = arr.join(" ");
document.write("String : " + fruits);

//Task 13
document.write("<br><br>");

var arr = new Array();

arr.push("John");
arr.push("Tommy");
arr.push("Tony");
arr.push("Michael");

document.write(arr.shift() + "<br>");
document.write(arr.shift() + "<br>");
document.write(arr.shift() + "<br>");
document.write(arr.shift() + "<br>");

//Task 14
document.write("<br><br>");
var arr2 = new Array();

arr2.push('Keyboard');
arr2.push('Mouse');
arr2.push('Printer');
arr2.push('Monitor');

document.write("Devices : " + arr2 + "<br><br>");
document.write(arr2.pop() + "<br>");
document.write(arr2.pop() + "<br>");
document.write(arr2.pop() + "<br>");
document.write(arr2.pop() + "<br>");

//Task 15
document.write("<select>");
var mobileBrands = ["Apple", "Sasmsung", "Motorola", "Nokia", "Sony", "Haier"];
for (var i =0; i < mobileBrands.length; i++) {
    document.write("<option>" + mobileBrands[i] + "</option>");

}
document.write("</select>");

// ****************************** Chapter 17 - 20 ******************************

//Task 1
var multiArray = [[], [], []];

//Task 2
var matrixArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
for ( var i = 0; i < matrixArray.length; i++) {
    document.write(matrixArray[i] + "<br>");
}

//Task 3
document.write("<br><br>");

for (var i = 1; i <=10; i++) {
    document.write(i + "<br>");
}

//Task 4
var tableNumber = +prompt("Enter number to generate table");
var tableLength = +prompt("Enter Length of table");
var result;

document.write("<br>" + "Multiplication table of " + tableNumber + "<br>");
document.write("Length" + tableLength + "<br>");

for (let i = 1; i <= tableLength; i++) {
    result = tableNumber * i;
    document.write("<br>" + tableNumber + " x" + " " + i + " = " + result);
}

//Task 5
document.write("<br><br>");
var fruitsArray = ["apple", "banana", "mango", "orange", "strawberry"];
var index;

for (var i=0; i < fruitsArray.length; i++) {
         findIndex = fruitsArray.indexOf(fruitsArray[i]);
    document.write("Element at index " + findIndex  + " " + "is " + fruitsArray[i] + "<br>");
}

//Task 6 // a // Counting
document.write("<br><br>");
document.write("<h1>Counting</h1>");
for (var i = 1; i <=15; i++) {
    document.write(i + "<br>");
}

// b Reverse counting
document.write("<br><br>");
document.write("<h1>Reverse Counting</h1>");
for (var i = 10; i >=1; i--) {
    document.write(i + "<br>");
}

// c Even Numbers
document.write("<br><br>");
document.write("<h1>Even Number</h1>");
for (var i = 0; i <=20; i++) {
    if(i % 2 == 0){
        document.write(i + "<br>");
    }
}

// d Odd Numbers
document.write("<br><br>");
document.write("<h1>Odd Number</h1>");
for (var i = 0; i <=20; i++) {
    if(i % 2 !== 0) {
        document.write(i + "<br>");
    }
}

// e Series
document.write("<br><br>");
document.write("<h1>Series</h1>");
for (var i = 2; i <=20; i++) {
    if(i % 2 == 0) {
        document.write(i + "k" + "<br>");
    }
}

// Task 7
document.write("<br><br>");
var A = ["cake", "apple pie", "cookie", "chips", "paties"];
var search =  prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
var findIndex;

for (var i=0; i < search.length; i++) {
    findIndex = A.indexOf(search);
    if (search === A[i]) {
        alert(search + " is available at index " + findIndex + " in our bakery");
        break;
    }
}

if (search != A[i]) {
    alert("We are sorry " + search + " is not available in out bakery");
}

//Task 8
var A = [24, 53, 78, 91, 12];
var largestNum;

document.write( "Array items : " + A + "<br>");
for (var i = 0; i <= A.length; i++) {
    largestNum = Math.max.apply(Math, A);
}

document.write("The largest number is : "  + largestNum);

//Task 9
A = [24, 53, 78, 91, 12]
var smallestNum;

document.write("Array items : " + A + "<br><br>");
for (var i = 0; i <= A.length; i++) {
    smallestNum = Math.min.apply(Math, A);
}
document.write("The Smallest number is : "  + smallestNum);


//Task 10
for (var i = 1; i <=100; i++) {
    if(i % 5 == 0){
        document.write(i + " ");
    }
}