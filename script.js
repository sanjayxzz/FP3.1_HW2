
//1//

const stationeryWords = [

  "pen",

  "notebook",

  "eraser",

  "notebook",

  "pencil",A

  "notebook",

  "pencil",

]

const totalLength = stationeryWords.reduce((accumulator,currentValue) => accumulator + currentValue.length , 0)
console.log(totalLength)

//2//

const numbersArray = [1, 2, 3, 4, 5, 6]

const sumOfEven = numbersArray.reduce((accumulator,currentValue) => currentValue % 2 === 0 ? accumulator + currentValue : accumulator, 0)
console.log(sumOfEven)

//3//

const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10]

const sumOfOdd = numsArr.reduce((accumulator,currentValue) => currentValue % 2 !== 0 ? accumulator + 1 : accumulator, 0)
console.log(sumOfOdd)

//4//

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenOddCount = nums.reduce((accumulator,currentValue) => { if (currentValue % 2 === 0) accumulator.even += 1;
  else accumulator.odd += 1;
  return accumulator
},{ even: 0, odd: 0})
console.log(evenOddCount)

//5//

const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
const posNegCount= allNumns.reduce((accumulator,currentValue) => {
  if(currentValue > 0) accumulator.pos +=1;
else accumulator.neg += 1;
return accumulator;
},{pos: 0, neg: 0})
console.log(posNegCount)

//6//

const numPositive = [-2, 3, 4, 0, -5, 6];
const productOfNegatives =numPositive.reduce((accumulator,currentValue) => currentValue< 0 ? accumulator * currentValue : accumulator,1)
console.log(productOfNegatives)

//7//

const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"];
const capitalized = wordsCaps.reduce((accumulator,currentValue) =>  accumulator + ( accumulator ? " " : " ") + currentValue.toUpperCase(), "") 
console.log(capitalized)

//8//

const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
const countPosEvenOthers = allNumsArr.reduce((accumulator,currentValue) => {
  if(currentValue > 0 && currentValue % 2 === 0 ) accumulator.posEven += 1;
  else accumulator.others += 1;
  return accumulator;
},{posEven : 0, others:0})
console.log(countPosEvenOthers)

//9//

const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];
const sumNegOdd = numbersArr.reduce((accumulator, currentValue) => (currentValue < 0 && currentValue % 2 !== 0) ? accumulator + currentValue : accumulator, 0);
console.log(sumNegOdd); 

//10// write like this above insted using (acc, curr)

const letters = ["a", "l", "p", "h", "a", "b", "e", "t"];
const singleWord = letters.reduce((word, letter) => word + letter, "");
console.log(singleWord); // Output: alphabet


