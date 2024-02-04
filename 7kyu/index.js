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

// =====================================

// 8 kyu Counting sheep...

function countSheeps(sheep) {
  return sheep.reduce((acc, cur) => (cur === true ? acc + 1 : acc), 0);
}

console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);
