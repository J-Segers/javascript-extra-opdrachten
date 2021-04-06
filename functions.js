// -------------------------------  BEGINNER

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

function hallo(name) {
    return (`Hoi ${name}`);
}


/* Opdracht 2 */
// Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// 1 geeft 60
// 3 geeft 180
// 23 geeft 1840

function howManySeconds(minutes) {
    let seconds = minutes * 60;
    return `${minutes} minuut is ${seconds} seconden`;
}

/* Opdracht 3 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is
// dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

function higherThanZero(number) {
    if(number > 0) {
        return true;
    }

    return false;
}

/* Opdracht 4 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

function higherThanHundred(num1, num2){
    if(num1 + num2 > 100) {
        return true;
    }

    return false;
}

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is, weet je niet van tevoren,
// dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

let test = ["a", "b", "c", "d", "e"];

function myConcat(strArr) {
    let str = '\0';
    for (let i = 0; i < strArr.length; i++) {
        str += strArr[i];
    }

    return str;
}

// -------------------------------  INTERMEDIATE

/* Opdracht 6 */
// Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken als je
// graag wil oefenen!
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

function myReverse(str) {
    let reverse = '\0';
    for (let i = str.length - 1; i !== -1 ; i--) {
         reverse += str[i];
    }
    return reverse;
}

/* Opdracht 7 */
// Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false

function isPalindroom(str) {
    for (let i = 0, j = str.length -1; i < str.length / 2; i++, j--) {
        if(str[i] != str[j]) {
            return false;
        }
    }
    return true;
}

/* Opdracht 8 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

function countSpecificCharacter(str, searchChar) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if(str[i] === searchChar){
            counter++;
        }
    }

    return counter;
}

// ------------------------------- ADVANCED (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

function lastEntry() {
    let newArr = [10];
    let arr;
    let num = 0;
    if(arguments.length === 2) {
        arr = arguments[0];
        num = arguments[1];
    } else if(arguments.length === 1) {
        arr = arguments[0];
        num = 1;
    }

    for (let i = 0, j = arr.length - (num) ; i < num; i++, j++) {
        newArr[i] = arr[j];
    }

    return newArr;
}

/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204

arr = [1, 2, 3];
function highestNumber(arrInt) {
    let highest = arrInt[0];

    for (let i = 0; i < arrInt.length; i++) {
        if(highest < arrInt[i]) {
            highest = arrInt[i];
        }
    }

    return highest;
}

/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if(i % 3 == 0) {
            console.log("Fizz");
        } else if(i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}