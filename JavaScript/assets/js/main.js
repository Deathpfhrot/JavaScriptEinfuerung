/*-------------lev1_7------------------*/
let helloWorld = "Hello World"
let pi = 3.14
let burjdubai = '828m'

const fullName = "Jan Schmidt"
const eifelTower = "324m"
const camelCase = "camelCase"
const kursStatus = true


/*------------lev1_1----------------*/

a = 12;
b = a * 3;
console.log(b); // ergebnis ist 36

document.write(b) // zeigt im html document auch 36

console.log(document.URL);

console.log("Hello world!");

console.log("Anton");

let name = "Anton";

console.log(name);

var age1 = 28;

console.log(age1);

var job = "Trainer" 

console.log(job);

var married = true

console.log(married);

console.log(name + " ist " + age1 + " Jahre alt und ist verheiratet: " + married);


/*--------------lev1_6: Let Const Var----------*/

// var z = 34
// z = 67
// console.log(z);

// let x = 34
// x = 67
// console.log(x);

// const y = 34
// y = 67
// console.log(y)

// A: Der wert der Variablen var und let liesen sich verändern doch const nicht da es eine Konstante variable ist.


/*-----------lev1_5: variables -----------*/

var carName = "BMW"
console.log(carName)

var x = 150
console.log(x);

var y = 50
console.log(y);

var z = x + y
console.log(z);

let firstName; let lastName; let age;

firstName = "John"
lastName = "Doe"
age = 35

console.log(firstName + " " + lastName + " " + age)

/*----------lev1_12: Arithmeitsche Operatoren-----------*/

let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);

score = (5 + 5) * 10;
console.log('Ergebnis: ' + score);

score = 0;
score = score + 10;
console.log('Ergebnis: ' + score);

score += 10;
console.log('Ergebnis: ' + score);



let zahl = 1;
zahl = zahl + 1;
zahl += 1;
console.log(zahl);

//Inkrement
zahl++;
console.log('increment: ' + zahl);

//Dekrement
zahl--;
console.log('dekrement: ' + zahl);

/*-------------lev1_13: arithemitsch Wiederholung---------*/

//Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

//Subtraktion
let subtration_operator = 2 - 1;
console.log("subtraktion: " + subtration_operator);

//Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplicatiion: " + multiplication_operator);

//Division
let division_operator = 4 / 2;
console.log("division. " + division_operator);

//Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);

/*-----------lev1_1: document.write()-----------*/

document.write("<h1>Hello Wordl!</h1><br>")
document.write("<p>Have a nice day!<br><br>")

var myText = "Hello again"

document.write(myText + "<br><br>");

name = "Name: Markus<br>"
var nachname = "Nachname: Schiller<br><br>"

document.write(name + " " + nachname)

/*----------lev1_11: String Methods------------*/


var x = "Hello"
var y = "World<br>"
var z = x + y
document.write(z); 

var n = x + " " + y 
document.write(n);

x += "World"
document.write(x);

var meinString = "Ich bin Erster,"
var zweiterString = " Ich komme auf Platz zwei"
// meinString = "Ich bin Erster, Ich komme auf platz zwei"
meinString += zweiterString

console.log(meinString);

/*---------lev1_4: popup boxes-----------*/

// window.alert("Hallo Welt");
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// window.confirm("Stimmen Sie meiner Meinung zu?");


// let alter = prompt( "Gib mir bitte dein Alter:" );
// console.log(alter); 

// let b1 = 5;
// let a1 = b1 * 5 - 3;
// alert(a1);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);