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

// 7 kyu
// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

// function countDevelopers(list) {
//   return list.reduce(
//     (count, curr) =>
//       count +
//       (curr.continent === "Europe" && curr.language === "JavaScript" ? 1 : 0),
//     0
//   );
// }
// const list1 = [
//   {
//     firstName: "Noah",
//     lastName: "M.",
//     country: "Switzerland",
//     continent: "Europe",
//     age: 19,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Doston",
//     lastName: "M.",
//     country: "Switzerland",
//     continent: "Europe",
//     age: 19,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Maia",
//     lastName: "S.",
//     country: "Tahiti",
//     continent: "Oceania",
//     age: 28,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Shufen",
//     lastName: "L.",
//     country: "Taiwan",
//     continent: "Asia",
//     age: 35,
//     language: "HTML",
//   },
//   {
//     firstName: "Sumayah",
//     lastName: "M.",
//     country: "Tajikistan",
//     continent: "Asia",
//     age: 30,
//     language: "CSS",
//   },
// ];

// console.log(countDevelopers(list1));

// ===========================================

// 7 kyu
// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

// function greetDevelopers(list) {
//   return list.map((value) => {
//     return {
//       ...value,
//       greeting: `Hi ${value.firstName}, what do you like the most about ${value.language}?`,
//     };
//   });
// }

// const list1 = [
//   {
//     firstName: "Sofia",
//     lastName: "I.",
//     country: "Argentina",
//     continent: "Americas",
//     age: 35,
//     language: "Java",
//   },
//   {
//     firstName: "Lukas",
//     lastName: "X.",
//     country: "Croatia",
//     continent: "Europe",
//     age: 35,
//     language: "Python",
//   },
//   {
//     firstName: "Madison",
//     lastName: "U.",
//     country: "United States",
//     continent: "Americas",
//     age: 32,
//     language: "Ruby",
//   },
// ];

// console.log(greetDevelopers(list1));

// ===============================

// 7 kyu
// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

// function isRubyComing(list) {
//   return list.some((value) => value.language === "Ruby");
// }

// var list1 = [
//   {
//     firstName: "Sofia",
//     lastName: "I.",
//     country: "Argentina",
//     continent: "Americas",
//     age: 35,
//     language: "Java",
//   },
//   {
//     firstName: "Lukas",
//     lastName: "X.",
//     country: "Croatia",
//     continent: "Europe",
//     age: 35,
//     language: "Python",
//   },
//   {
//     firstName: "Madison",
//     lastName: "U.",
//     country: "United States",
//     continent: "Americas",
//     age: 32,
//     language: "Ruby",
//   },
// ];

// console.log(isRubyComing(list1));

// ==============================

// 7 kyu
// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

// function getFirstPython(list) {
//   const pythonDeveloper = list.filter(
//     (value) => value.language === "Python"
//   )[0];

//   return pythonDeveloper
//     ? `${pythonDeveloper.firstName} ${pythonDeveloper.country}`
//     : "There will be no Python developers";
// }
// var list1 = [
//   {
//     firstName: "Mark",
//     lastName: "G.",
//     country: "Scotland",
//     continent: "Europe",
//     age: 22,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Victoria",
//     lastName: "T.",
//     country: "Puerto Rico",
//     continent: "Americas",
//     age: 30,
//     language: "Python",
//   },
//   {
//     firstName: "Emma",
//     lastName: "B.",
//     country: "Norway",
//     continent: "Europe",
//     age: 19,
//     language: "Clojure",
//   },
// ];

// console.log(getFirstPython(list1));

// ===========================

// 7 kyu
// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

// function countLanguages(list) {
//   return list.reduce((acc, value) => {
//     acc[value.language] = (acc[value.language] || 0) + 1;
//     return acc;
//   }, {});
// }

// var list1 = [
//   {
//     firstName: "Noah",
//     lastName: "M.",
//     country: "Switzerland",
//     continent: "Europe",
//     age: 19,
//     language: "C",
//   },
//   {
//     firstName: "Anna",
//     lastName: "R.",
//     country: "Liechtenstein",
//     continent: "Europe",
//     age: 52,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Ramon",
//     lastName: "R.",
//     country: "Paraguay",
//     continent: "Americas",
//     age: 29,
//     language: "Ruby",
//   },
//   {
//     firstName: "George",
//     lastName: "B.",
//     country: "England",
//     continent: "Europe",
//     age: 81,
//     language: "C",
//   },
// ];

// console.log(countLanguages(list1));

// ================================

// 7 kyu
// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

// function isSameLanguage(list) {
//   const firstLanguage = list[0].language;
//   return list.every((value) => value.language === firstLanguage);
// }

// var list1 = [
//   {
//     firstName: "Daniel",
//     lastName: "J.",
//     country: "Aruba",
//     continent: "Americas",
//     age: 42,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Kseniya",
//     lastName: "T.",
//     country: "Belarus",
//     continent: "Europe",
//     age: 22,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Hanna",
//     lastName: "L.",
//     country: "Hungary",
//     continent: "Europe",
//     age: 65,
//     language: "JavaScript",
//   },
// ];

// console.log(isSameLanguage(list1));

// ======================================
