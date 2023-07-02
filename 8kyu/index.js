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