// doppel // ist ein einzeiliger kommentar


/*
ist für mehrzeilige kommentare

asdfasd
asdfasd

*/

console.log("test")

// js datatypes


// number 
// number sind einfach nur zahlen
console.log(3); 




// String " string ", ' string '
// strings sind eine anreihung von zeichenketten
// wenn man mit "" etwas im string makieren möchte sollte man ' ' verwenden bei ' ' imx text die " "
console.log('3 "3" '); 
console.log(3 + 3);
console.log("3" + "3");

//boolean
// eine abfrage ob etwas wahr ist / stimmt oder unwahr / falsch
console.log(true);
console.log(false);

// Variablen
// declaration / zuweisung
// var / let / const 

// var kan überschrieben werden
// var ist global im code verfügbar
// var kann ausgelassen werden wenn man die variable überschreibt
var ericAlter = 30;
console.log(ericAlter);

ericAlter = 22;
console.log(ericAlter);

//let kann überschriben werden
//let ist nur im codeblock verfügbar
let simonAlter = 29;
console.log(simonAlter);

simonAlter = 35;
console.log(simonAlter);



// cont kann nicht neu überschriben werden
const pi = 3.14;
console.log(pi);







// var 

// function getNum(){

//     let
//     SVGDefsElement
//     asdfadf
//     asdfasd
//     asdfasdf
// }

// -----------------------------------------
// Number
var num1 = 30;


// in js gelten die gängigen rechnugsregeln . von -
var calc = (num1 + num2) * num3;

var num1 = 30;
var num2 = 5;
var num3 = 10;
var calc = num1 + num2 / num3


console.log(calc);

var firstName = "Iron";
var lastName = "man";

var fullName = firstName + lastName;
console.log("my name is:" + " " + fullName);

function checkNum(){
    // console.log("test");
    let inputNum = document.getElementById("num").value
    

    console.log(inputNum);
    console.log(typeof (inputNum));
}

var superheld1 = "hulk ";
var superheld2 = "spiderman ";
var superheld3 = "odin ";

var num1 = 35;
var num2 = 33;
var num3 = 44;

var city1 = ' London';
var city2 = ' Berlin';
var city3 = ' Munich';

console.log(superheld1 + num1 + city1);
console.log(superheld2 + num2 + city2);
console.log(superheld3 + num3 + city3);


let mwst = 1.19
let macbookPro = 1900

// let macPrice = mwst * macbookPro
console.log("macbook nettoprice: " + macbookPro + "€" + " die mwst beträgt: " + mwst + "€" + " zusammen kostet es: " + mwst * macbookPro + " €");

//operatoren
// - * / ist nu für type: Number !!!NaN - bedeutet NotaNumber!!!



var x = 10
var y = 5
var z = x + y

// % modulo gibt immer den restwert zurück
var xyz = x % y
console.log(xyz);
// ** einfache hochrechnung
var expo = x ** y
console.log(expo);

var a = "eric"
var b = "noack"
var c = a + b 

console.log( c + " a + b ist eine zusammensetzung von zeichenketten");
console.log(z + "= x + y addition von zahlen");


// vergleichsoperatoren ( boolean)
// = -> zuweisung // == -> inhalt ist gleich // === -> genau gleich (inhalt & datentype)
a = 5
b = 6
c = 5
d = "5" 
e = 99

let gleich = a === b //false
let gleich1 = a == b // false
let gleich2 = a == c //true

console.log(gleich);

let gleich4 = a <= b
let gleich5 = a >= b
let gleich6 = a <= d
let gleich7 = a !== b // ! steht für ist nicht gleich oder not

console.log(gleich4);
console.log(gleich5);
console.log(gleich6);
console.log(gleich7);

// decrement -- -> immer -1 // increment ++ -> immer +1

x = 3
x++
x++
x++
x--
console.log(x);

var abc = 1
var aBc = 1
var ABC = 1

let meineWohnung = "75qm"

let meinewohnung = "85qm"

console.log(meineWohnung);
console.log(meinewohnung);

let $meineWohnung = "75qm" // schlecht zuweisung !!!nicht machen
console.log($meineWohnung);


document.write(" meine wohnung hat " + meineWohnung);
document.write("<h1 style='color: tomato'; class='jojo' > Hallo Welt meine butze hat 75 qm  </h1>") // aufpassen auf die gänsefüsschen
// man sollte vermeiden class in js zu vergeben

// let xy = window.alert("Bei uns gilt 2G+ ");
// console.log(xy);

// pop up fenster

var age = window.prompt(" Bitte gib dein Alter an")
console.log(age);
document.write(" dein alter ist: " + age);