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
