// Find the capitals

// const capitals = function (word) {
//   let result = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) result.push(i);
//   }
//   return result;
// };
// console.log(capitals("CodEWaRs"));

// ===================================

// Help the Fruit Guy

// function removeRotten(bagOfFruits){
//   let arr = []
//   if(bagOfFruits === null) return arr
//   return (bagOfFruits || []).map((val)=>{
//     return val.includes("rotten") ? val.slice(6).toLowerCase() : val
//   })
// }
// console.log(removeRotten(null));

// ====================================

// Sort by Last Char

// function last(x){
//   x=x.split(" ")
//   return x.sort((a,b)=>{
//     return a[a.length-1].localeCompare(b[b.length-1])
//   })
// }
// console.log(last('take me to semynak'));

// ===================================

// Holiday III - Fire on the boat

// function fireFight(s){
//   return s.replace(/Fire/g,"~~")
// }
// console.log(fireFight("Mast Deck Engine Water Fire"));

// ========================================

// Vowel Count

// function getCount(str) {
//   return (str.match(/[aeiou]/g) || []).length
// }

// console.log(getCount("hello"));

// ================================

// Disemvowel Trolls

// function disemvowel(str) {
//   return (str.toUpperCase().replace(/[aeiuo]/g, ''))
// }

// console.log(disemvowel("What are you, a cOmmunist?"));

// ===================================

// 7 kyu Divide and Conquer

// function divCon(x) {
//   let int = 0;
//   let notInt = 0;
//   x.map((value) => {
//     if (typeof value === "number") int += value;
//     else notInt += +value;
//   });
//   return int - notInt;
// }
// console.log(divCon([9, 3, "7", "3"]));

// =========================

// 7 kyuHighest and Lowest

// function highAndLow(numbers) {
//   let numberArray = numbers.split(" ");
//   numberArray = numberArray.map(Number);
//   let high = Math.max(...numberArray);
//   let low = Math.min(...numberArray);
//   return `max ${high} min ${low}`;
// }
// console.log(highAndLow("1 2 3 4 5"));

// ===============

// Convert an array of strings to array of numbers

// function toNumberArray(stringarray) {
//   let newArr = stringarray.map(Number);
//   return newArr;
// }

// console.log(toNumberArray(["1.1", "2.2", "3.3"]));

// =================

// 7 kyu Tidy Number (Special Numbers Series #9)

// function tidyNumber(n) {
//   const sortedDigits = n
//     .toString()
//     .split("")
//     .map(Number)
//     .sort((a, b) => a - b);

//   const originalDigits = n.toString().split("").map(Number);
//   return JSON.stringify(sortedDigits) === JSON.stringify(originalDigits);
// }
// console.log(tidyNumber(132));

// ===============================

// function countWins(winnerList, country) {
//   return winnerList.filter((value) => value.country === country).length;
// }
// const winnerList1 = [
//   { season: "1996–97", team: "Borussia Dortmund", country: "Germany" },
//   { season: "1997–98", team: "Real Madrid", country: "Spain" },
//   { season: "1998–99", team: "Manchester United", country: "England" },
//   { season: "1999–00", team: "Real Madrid", country: "Spain" },
//   { season: "2000–01", team: "Bayern Munich", country: "Germany" },
//   { season: "2001–02", team: "Real Madrid", country: "Spain" },
//   { season: "2002–03", team: "Milan", country: "Italy" },
// ];
// console.log(countWins(winnerList1, "Spain"));

//===================================

// Multiply Word in String

// function modifyMultiply(str, loc, num) {
//   return str
//     .split(" ")
//     [loc].concat("-")
//     .repeat(num)
//     .split(" ")
//     .join()
//     .slice(0, -1);
// }
// console.log(modifyMultiply("This is a string", 3, 5));

// ===================================
