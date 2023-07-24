/* 
Reversed Strings
Complete the solution so that it reverses the string passed into it.
*/
// function solution(str) {
//   return str.split("").reverse().join("");
// }
// console.log(solution("hello world"));

// ==================================
// Remove First and Last Character

// function removeChar(str) {
//   return str.split("").slice(1,-1).join("");
// }
// console.log(removeChar("football"))

// ====================================

// String repeat

// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(5,"hello"));

// ====================================

// Remove String Spaces

// function noSpace(x){
// return x.split(" ").join("")
// }
// console.log(noSpace("     hello world"));

// =======================================

// convert a string to a number

// const stringToNumber = function(str){
//   // put your code here
//   return Number(str);
// }
// console.log(stringToNumber("12345"));
// =======================================

// convert a boolean to a string

// function booleanToString(b){
//   return String(b)
// }
// console.log(booleanToString(true));

// =====================================

// reversed words Complete the solution so that it reverses all of the words within the string passed in.
// function reverseWords(str) {
//   return (newArr = str.split(" ").reverse().join(" "));
//   // let newArr = str.reverse().join("")
// }

// console.log(reverseWords("hello world and welcome to my codewars profile!"));

// =========================================

// make uppercase

// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

// console.log(makeUpperCase("hello"));
//==================

// are you playing banjo ?

// function areYouPlayingBanjo(name) {
//   // let newName = "";
//   // newName += name.toLowerCase()
//   // return name[0] === "r" || name[0] === "R" ? `${name} plays banjo` : `${name} does not plays banjo`

//   return (
//     name +
//     (name[0].toLowerCase() === "r" ?  " plays" : " does not play") +
//     " banjo"
//   );
// }
// console.log(areYouPlayingBanjo("rambo"));

// ===============================
// create a function which returns an RNA sequence from the given DNA sequence
// function DNAtoRNA(dna) {
//   return   dna.replaceAll("D", "R");
// }
// console.log(DNAtoRNA("Dna"));

// ==========================

// Convert a string to an array
// function stringToArray(string) {
//   return string.split(" ");
// }
// console.log(stringToArray("I love arrays they are my favorite"));
// =============================

// Abbreviate Two Word Nmae

// function abbrevName(name) {
//   let newName = name.split(" ");
//   let arr = [];
//   for (let i = 0; i < newName.length; i++) {
//     arr.push(newName[i][0]);
//   }
//   return arr.join(".").toUpperCase()
// }
// console.log(abbrevName("Doston Rajapboyev"));

// ===========================

// Fake Binary -----------

// function fakeBin(x) {
//   let res = "";
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] >= "5") res += "1";
//     else if (x[i] < "5") res += "0";
//     else res += x[i];
//   }
//   return res;
// }
// console.log(fakeBin("31253457899345167"));
// ======================

// Sentence Smash

// function example (n){
//   return n.join(" ")
// }
// console.log(example(['hello', 'world', 'this', 'is', 'great']));

// =======================

// GrasShopper- Personalized Message

// function GrasShopper (name,owner){
//   if(name === owner) return 'Hello Boss'
//   else return 'Hello Guest'
// }
// console.log(GrasShopper());
// console.log(GrasShopper('Doston', 'Doston'));

// Total amount of points
// function ourTeam(games) {
//   let res = null;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) res  += 3;
//     else if (games[i][0] < games[i][2])  res += 0;
//       else if (games[i][0] == games[i][2])  res += 1;
//   }
//   return res;
// }
// console.log(
//   ourTeam([
//     "1:0",
//     "2:0",
//     "3:0",
//     "4:0",
//     "2:1",
//     "3:1",
//     "4:1",
//     "3:2",
//     "4:2",
//     "4:3",
//   ])
// ); // win
// console.log(ourTeam(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); // tie
// console.log(ourTeam(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); // loss

//==========================

// Remove exclamation marks

// function removeMarks(remove) {
//   return remove.replace("!", " ");
// }
// console.log(removeMarks("MARKS!REMOVE"));

// ========================

// let str= 'hello world'
// let str2 =''
// for (let i = 0; i < str.length; i++) {
//    str2 +=str[i].repeat(2)
//   }
// console.log(str2);

//

// =======================
// Is the string uppercase?

// function str(uppercase) {
//   for (let i = 0; i < uppercase.length; i++) {
//     if (uppercase == uppercase.toUpperCase()) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   return uppercase;
// }

// =====================
// reverse string ---------

// function reverse(string){
//   return (newArr = string.split(" ").reverse().join(" ").trim());
// }
// console.log(reverse("Hi There."));

// ==================================

// function multiTable(number) {
//   let str = ''
//   for (let i =1 ; i <= 10; i++) {
//     str += `${i} * ${number} = ${i * number}\n`
//   }
//   return str.slice(0, -1)
// }
// console.log(multiTable(5));

// =============================

// var countSheep = function (num){
//   let res = ""
//   for (let i = 1; i <= num; i++) {
//     res += `${i} sheep...`
//   }
//   return res
// }
// console.log(countSheep(7));

//======================

// You only need one - Beginner

// function check(a, x) {
//   return a.includes(x)
// }
// console.log(check([21, 34, 67], 67));

// =============================

// wovel remove
// function removeVowels(str) {
//   let vowels = ["a", "o", "e", "u", "i"];
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i].toLowerCase())) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeVowels("hello"));

// =====================================

// Correct the mistakes of the character recognition software

// function correct(string) {

//   for (let i = 0; i < string.length; i++) {
//     string = string.replaceAll("0", "O").replaceAll("1", "I").replace("5", "S")
//   }
//   return string
// }
// console.log(correct("l0nd0n, 5ingapure"));

// ================================

// All Star Code Challenge #18

// function func(a, b) {
//   let res = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == b) res = res + 1;
//   }
//   return res;
// }
// console.log(func("hello", "l"));
//===============================

// Stringy Strings

// function stringy(size) {
//   let result = "";
//   for (let i = 1; i <= size.length; i++) result += i % 2 ;
//   return result;
// }
// console.log(stringy("Doston"));

// ===================================

// reversed string
// function func(name){
//   return name.split(" ").reverse().join(" ");
// }
// console.log(func("Doston, Radjapboyev"));

// =================================

// Exclamation marks series #1: Remove an exclamation mark from the end of string
// function remove(string) {
//   if (string.endsWith("!")) string = string.slice(0,-1);
//   return string
// }
// console.log(remove("!hello !!"));

// =====================================

// Capitalization and Mutability

// function capitalizeWord(word) {
// let newStr = word[0].toUpperCase()
// for (let i = 1; i < word.length; i++) {
//   newStr += word[i]
//   // (word[0] == word[i][0]) ? (newStr = word[i].toUpperCase()) : (newStr += word[i]);
// } // 1st way
// return newStr
// return word[0].toUpperCase() + word.slice(1); // 2nd way
// }
// console.log(capitalizeWord("word"));

// ==================================================

// String Templates - Bug Fixing #5

// function buildString(...template){
//   return `I like ${template.join(', ')}!`;
// }

// console.log(buildString('Cheese','Milk'));

// =============================================

// String cleaning (from numbers)

// function stringClean(s){
//   return s.replace(/[0-9]/g, '')
// }
// console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"));

// ==========================================

// Remove First and Last Character Part Two

// function array(string) {
//   const nums = string.split(',')
//   string = nums.slice(1,nums.length -1).join(" ")
//   if(string == '') return null
//   return string
// }
// console.log(array('A1,B2,C3,D4,E5'));

// ==========================================

// Get number from string

// function getNumberFromString(s) {
//   let num = s.replace(/\D/g,'');
//   return +num
// }

// console.log(getNumberFromString("hell5o wor6ld"));

// ==========================================

// Sum Mixed Array

// function sumMix(x) {
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     sum += +x[i];
//   }
//   return sum;
// }
// console.log(sumMix([9, 3, "7", "3"]));

// ===========================================

// The Feast of Many Beasts

// function feast(beast, dish) {
//   beast = beast.split("");
//   dish = dish.split("");
//   if (
//     beast[0] === dish[0] &&
//     beast[beast.length - 1] === dish[dish.length - 1]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(feast("great blue heron", "garlic naan"));

// ===============================================

// Sort and Star

// function twoSort(s) {
//   return s.sort()[0].split("").join("***");
// }

// console.log(
//   twoSort([
//     "turns",
//     "out",
//     "random",
//     "test",
//     "cases",
//     "are",
//     "easier",
//     "than",
//     "writing",
//     "out",
//     "basic",
//     "ones",
//   ])
// );

// ============================================

// Well of Ideas - Easy Version

// function well(x) {
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i].includes("good")) {
//       sum++;
//     }
//   }
//   if (sum < 1 ) {
//     return 'fail';
//   } else if (sum == 1) {
//     return 'publish';
//   } else if (sum >= 1) {
//     return "I smell a series!";
//   }
//   return sum;
// }
// console.log(well(["good", "bad", "good", "good", "good", "bad", "bad", "bad"]));

// ===========================================

// Count the Monkeys!

// function monkeyCount(n) {
//   let res = [];
//   for (let i = 1; i <= n; i++) {
//     res.push(i);
//   }
//   return res;
// }

// console.log(monkeyCount(9));

// ==========================================

// Add Length

// function addLength(str) {
//   let res = [];
//   str = str.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     res.push(`${str[i]} ${str[i].length}`);
//   }
//   return res;
// }
// console.log(addLength("apple ban"));

// =============================================

// Find Multiples of a Number

// function findMultiples(integer, limit) {
//   let multiples = [];
//   for (let i = integer; i <= limit; i += integer) {
//     multiples.push(i);
//   }
//   return multiples;
// }
// console.log(findMultiples(2, 6));

// ========================================

// The Wide-Mouthed frog!

// function mouthSize(animal) {
//   if (animal == "alligator" && animal.toUpperCase) return "small";
//   else return "wide";
// }

// console.log(mouthSize("Alligator"));

// ====================================

// Alan Partridge II - Apple Turnover

// function apple(x) {
//   return Math.pow(x, 2) >= 1000
//     ? "It's hotter than the sun!!"
//     : "Help yourself to a honeycomb Yorkie for the glovebox.";
// }
// console.log(apple(50));

// =================================

// Grasshopper - If/else syntax debug

// function checkAlive(health) {
//   return health <= 0 ? false : true;
// }
// console.log(checkAlive(1));

// ==================================

// Incorrect division method

// const solve = (x, y) => x / y;
// console.log(solve(2,1));

// ==================================

// Array plus array

// function arrayPlusArray(arr1, arr2) {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i] + arr2[i];
//   }
//   return sum;
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// ================================================

// Is this my tail?

// function correctTail(body, tail) {
//   if (body.endsWith(tail)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(correctTail("fox", "x"));

// ========================================

// Count Odd Numbers below n

// function oddCount(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i += 2) sum++;
//   return sum;
// }
// this is faster way \/
// function oddCount(n) {
//   return Math.floor(n / 2);
// }
// }
// console.log(oddCount(30));

// ====================================

// Jenny's secret message

// Jenny's secret message

// function greet(name) {
//   if (name === "Johnny") return "Hello, my love!";
//   return "Hello, " + name + "!";
// }
// console.log(greet('Doston'));

// ======================================

// Kata Example Twist

// let websites = [];
// websites = Array(1000).fill("codewars")

// ========================================

// Do I get a bonus?

// function bonusTime(salary, bonus) {
//   bonus === true ? (salary = salary * 10) : `£${salary}`;
//   return `£${salary}`;
// }
// console.log(bonusTime(10000, true));

// ============================================

// Function 1 - hello world

// const greet = ()=> 'hello world!'

// console.log(greet());

// ============================================

// Beginner - Lost Without a Map

// function maps(x) {
//   let res = x.map((initial) => initial * 2);
//   return res;
// }
// console.log(maps([1, 2, 3]));

// =================================

// Short Long Short

// function solution(a, b){
//   return (a.length < b.length) ? a.concat(b) + a : b.concat(a) + b
// }
// console.log(solution('444', '22'));

// =======================================

// L1: Bartender, drinks!

// function getDrinkByProfession(param) {
//   param = param.toLowerCase();
//   if (param === "jabroni") {
//     return `${param} "Patron Tequila"`;
//   } else if (param === "school counselor") {
//     return "Anything with Alcohol";
//   } else if (param === "programmer") {
//     return "Hipster Craft Beer";
//   } else if (param === "bike gang member") {
//     return "Moonshine";
//   } else if (param === "politician") {
//     return "Your tax dollars";
//   } else if (param === "rapper") {
//     return "Cristal";
//   } else {
//     return "Beer";
//   }
// }

// console.log(getDrinkByProfession("Programmer"));

// ==========================================

// Welcome to the City

// function sayHello( name, city, state ) {
//   name = name.join(" ")
//   return `Hello, ${name}!, Welcome to ${city}, ${state}!`
// }
// console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));

// ==============================================

// Training JS #1: create your first JS function and print "Hello World!"

// function helloWorld  (){
//   let str = "Hello World!"
//   console.log(str);
// }
// helloWorld();

// ====================================

// Training JS #2: Basic data types--Number

// let v1 = 50,
//   v2 = 100,
//   v3 = 150,
//   v4 = 200,
//   v5 = 2,
//   v6 = 250;

// function equal1() {
//   let a = v1,
//     b = v1;
//   return a + b;
// }
// function equal2() {
//   let a = v6,
//     b = v3;
//   return a - b;
// }

// function equal3() {
//   let a = v1,
//     b = v5;
//   return a * b;
// }
// function equal4() {
//   let a = v4,
//     b = v5;
//   return a / b;
// }

// function equal5() {
//   let a = v2,
//     b = v4;
//   return a % b;
// }

//=======================================

// Training JS #3: Basic data types--String

// var a1 = "A",
//   a2 = "a",
//   b1 = "B",
//   b2 = "b",
//   c1 = "C",
//   c2 = "c",
//   d1 = "D",
//   d2 = "d",
//   e1 = "E",
//   e2 = "e",
//   n1 = "N",
//   n2 = "n";
// function Dad() {
//   return d1 + a2 + d2;
// }
// function Bee() {
//   return b1 + e2 + e2;
// }
// function banana() {
//   return b2 + a2 + n2 + a2 + n2 + a2;
// }
// function answer1(){
//   return "no";
// }
// function answer2(){
//   return "no";
// }
// function answer3(){
//   return "yes";
// }

//===================================

// Training JS #4: Basic data types--Array

// getLength = (arr) => arr.length;

// getFirst = (arr) => arr[0];

// getLast = (arr) => arr[arr.length - 1];

// pushElement = (arr) => {
//   arr.push(1);
//   return arr;
// };

// popElement = (arr) => {
//   arr.pop();
//   return arr;
// };

// we can use console.log for every function and check

// =======================================

// Training JS #5: Basic data types--Object

// function animal(obj){
//   return `"This ${obj.color} ${obj.name} has ${obj.legs} legs. "`
// }

// console.log(animal({name:"dog",legs:4,color:"white"}));

// =========================================

// Training JS #6: Basic data types--Boolean and conditional statements if..else

// function trueOrFalse(val){
//   return (val) ? "true" : "false";
// }
// console.log(trueOrFalse(1));

// ===========================================

// Training JS #7: if..else and ternary operator

// function saleHotdogs(n){
//   if(n < 5) return n * 100
//   else if (n >= 5 && n < 10) return n * 95
//   else if(n >= 10) return n * 90
// }
// console.log(saleHotdogs(100));

// ===========================================

// Training JS #8: Conditional statement--switch

// function howManydays(month) {
//   var days;
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       days = 31;
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;
//     case 2:
//       days = 28;
//   }
//   return days;
// }
// console.log(howManydays(2));

// ========================================

// Training JS #9: loop statement --while and do..while

// function padIt(str, n) {
//   let i = 0;
//   let left = true;
//   while (i < n) {
//     if (left) {
//       str = "*" + str;
//     } else {
//       str = str + "*";
//     }
//     i++;
//     left = !left;
//   }
//   return str;
// }

// console.log(padIt("a", 3));

// ===================================

// Training JS #10: loop statement --for

// function pickIt(arr){
//   var odd=[],even=[];
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]% 2 === 0) even.push(arr[i])
//     else odd.push(arr[i])
//   }
//   return [odd,even];
// }

// console.log(pickIt([1,2,3]));

// ===================================

// Training JS #11: loop statement --break,continue

// function grabDoll(dolls) {
//   var bag = [];
//   for (let i = 0; i < dolls.length; i++) {
//     if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") bag.push(dolls[i]);
//     else continue
//     if (bag.length === 3) break;
//   }
//   return bag;
// }
// console.log(
//   grabDoll([
//     "Mickey Mouse",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Snow white",
//   ])
// );

// ======================================

// Training JS #12: loop statement --for..in and for..of

// function giveMeFive(obj){
//   let arr = []
//   for(key in obj){
//     if(key.length === 5) arr.push(key)
//     if(obj[key].length === 5) arr.push(obj[key])
//   }
//   return arr
// }
// console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));

// =====================================

// Training JS #14: Methods of Number object--toString() and toLocaleString()

// let colorOf = (r, g, b) => {
//   let a = r.toString(16).padStart(2, "0"),
//     c = g.toString(16).padStart(2, "0"),
//     d = b.toString(16).padStart(2, "0");
//   return `#${a}${c}${d}`;
// };
// console.log(colorOf(0,111,0));

// ======================================

// Training JS #16: Methods of String object--slice(), substring() and substr()

// function cutIt(arr) {
//   let minLength = Math.min(...arr.map((val) => val.length));
//   let filtered = arr.map((val) => val.slice(0, minLength));
//   return filtered;
// }
// console.log(cutIt(["codewars", "javascript", "java"]));

// ============================================