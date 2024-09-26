// Codewars Tasks

// Task 1
// const binaryArrayToNumber = arr => {
//   const binaryString = arr.join('');
//   const number = parseInt(binaryString, 2);
//   return number;
// };

// console.log(binaryArrayToNumber([0, 0, 0, 1]));
// console.log(binaryArrayToNumber([0, 0, 1, 0]));
// console.log(binaryArrayToNumber([0, 0, 1, 1]));

// Task 2
// function sortByValueAndIndex(array) {
//     return array.map((value, index) => [value * (index + 1), value]).sort((a, b) => a[0] - b[0]).map(value => value[1]);
// }

// console.log(sortByValueAndIndex([-22, -20, -15, -8, -21, -21, -27, +0, 3, 2, 28, 11, 18, 18, 27, 20]));
// [-22, -21, -20, -15, -8, -21, -27, +0, 3, 2, 28, 11, 18, 27, 18, 20]

// console.log(sortByValueAndIndex([1, 2, 3, 4, 5]));
// console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));
// console.log(sortByValueAndIndex([26, 2, 3, 4, 5]));
// console.log(sortByValueAndIndex([9, 5, 1, 4, 3]));

// Task 3
// function abbrevName(name){

//     const arr = name.split(' ');
//     const uppercased = arr.map((a) => a.slice(0, 1).toUpperCase());
//     const joined = uppercased.join('.');
//     console.log(joined);

// }

// abbrevName("Sam Harris");
// abbrevName("sam harris");
// abbrevName("s harris");

// Task 4
// var countSheep = function (num) {
//     let result = "";
//     for (let i = 1; i <= num; i++) {
//       result += i + "sheep...";
//     }
//     return result;
// }

// console.log(countSheep(5));

// Task 5
// function findAverage(array) {
//     let reducing = array.reduce((a, b) => a + b, 0);
//     let average = reducing / array.length;
//     return average;
// }

// console.log(findAverage([1,2,3]));

// Task 6

// function sumMix(x){
//     return x.map(item=>+item).reduce((acc,cur)=>acc + cur, 0);
// }

// console.log(sumMix([9, 3, '7', '3'])); // 22
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); // 41

// Task 7
// function mergeArrays(arr1, arr2) {
//     const arr = [...arr1, ...arr2].sort((a, b) => a - b).filter((value, index, array) => array.indexOf(value) == index);
//     return arr;
// }

// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

// Task 8
// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
// }

// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

// Task 9
// function powersOfTwo(n){
//     // return [2] ** n;

//     // n repeat olunmalidir
// }

// console.log(powersOfTwo(1));

// Task 10
// function solution(str){
//     return str.split('').reverse().join('');
// }

// console.log((solution('world')));

// Task 11

// function doubleChar(str) {
// 	let result = "";

// 	for (let item of str) {
// 		if (!result.includes(item)) {
// 			result += (item + item);
//         } else {
// 			result += (item + item);
//         }
//     }

//     return result;
// }

// console.log(doubleChar("Adidas"));

// Task 12 (Unsolved)

// var lengthOfSequence = function (arr, n) {
//     return arr.indexOf(n).length + arr.lastIndexOf(n).length;
// };

// Task 13

// let arr = [1, 2, 3, 4, 5];
// let mapped = arr.forEach((a) => a - 2);
// console.log(mapped);

// let arr = [1, 2, 3];
// arr.forEach((index, value) => {
//     arr[index] = value * 2; // Mutates the original array
// });
// console.log(arr); // Output: [2, 4, 6]

// Task 14

// function isToday(date) {
//     const today = new Date();
//     return date.toDateString() === today.toDateString();
// }

// console.log(isToday(today));
// console.log(isToday(yesterday));
// console.log(isToday(tomorrow));

// Task 15 (Unsolved)
// function solution(str) {
//     const arr = str.split('');
//     let result = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         let pair = arr[i] + (arr[i + 1] || '_');
//         result.push(pair);
//     }

//     return result;
// }

// console.log(solution("abcdef")); // ["ab", "cd", "ef"]
// console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
// console.log(solution("")); // []

// Task 16
// class Solution {
// 	static main() {
// 		console.log("Hello World!");
// 	}
// }

// Solution.main();

// Task 17
// function sumDigits(number) {
// 	return Math.abs(number)
// 		.toString()
// 		.split("")
// 		.reduce((a, b) => +a + +b);
// }

// console.log(sumDigits(10));
// console.log(sumDigits(-32));

// Task 18
// function generateShape(integer) {
//     const plusSign = "+";
//     let shape = "";

//     for (let index = 0; index < integer; index++) {
//         shape += plusSign.repeat(integer);
//         if (index < integer - 1) {
//             shape += "\n";
//         }
//     }

//     return shape;
// }

// console.log(generateShape(8));
// console.log(generateShape(9));

// Task 19
// obfuscate = function (email) {
// 	const array = email.split("");

// 	for (let index = 0; index < array.length; index++) {
// 		if (array[index].includes("@")) {
// 			array[index] = " [at] ";
// 		} else if (array[index].includes(".")) {
// 			array[index] = " [dot] ";
// 		}
// 	}

// 	return array.join("");
// };

// console.log(obfuscate("test@123.com")); // test [at] 123 [dot] com
// console.log(obfuscate("test.test@123.com")); // test.test [at] 123 [dot] com

// Task 20
// function sumNoDuplicates(numList) {
//     return numList
//         .filter((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item))
//         .reduce((a, b) => a + b, 0);
// }

// console.log(sumNoDuplicates([1, 1, 2, 3])); // 5

// Task 21
// const sequenceSum = (begin, end, step) => {
//     if (begin > end) return 0;

//     let count = 0;

//     for (let index = begin; index <= end; index += step) {
//         count += index;
//     }

//     return count;
// };

// console.log(sequenceSum(2, 6, 2)); // 12
// console.log(sequenceSum(1, 5, 1)); // 15
// console.log(sequenceSum(1, 5, 3)); // 5
// console.log(sequenceSum(5, 1, 1)); // 0 (begin is greater than end)

// Task 22
// function duplicateCount(text) {
// 	const arr = text.toLowerCase().split("");
// 	let newArr = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
// 			newArr.push(arr[i]);
// 		}
// 	}

// 	return [...new Set(newArr)].length;
// }

// console.log(duplicateCount("")); //, 0);
// console.log(duplicateCount("abcde")); //, 0);
// console.log(duplicateCount("aabbcde")); //, 2);
// console.log(duplicateCount("aabBcde")); //, 2,"should ignore case");
// console.log(duplicateCount("Indivisibility")); //, 1)
// console.log(duplicateCount("Indivisibilities")); //, 2, "characters may not be adjacent")

// Task 23
// function range(start, step, stop) {
// 	let array = [];

// 	// If only one argument is provided, assume it's the stop value
// 	if (arguments.length === 1) {
// 		stop = start;
// 		start = 1;
// 		step = 1;
// 	}
// 	// If two arguments are provided, assume they are start and stop values
// 	else if (arguments.length === 2) {
// 		stop = step;
// 		step = 1;
// 	}

// 	// Generate the range of numbers
// 	for (let i = start; i <= stop; i += step) {
// 		array.push(i);
// 	}

// 	return array;
// }

// console.log(range(5)); // [1, 2, 3, 4, 5]
// console.log(range(3, 7)); // [3, 4, 5, 6, 7]
// console.log(range(2, 3, 15)); // [2, 5, 8, 11, 14]

// Task 24
// function arr2bin(arr) {
// 	return arr
// 		.reduce((a, b) => (typeof b === "number" ? a + b : a), 0)
// 		.toString(2);
// }

// console.log(arr2bin([1, 2]));
// console.log(arr2bin([1, 2, 3, 4, 5]));

// Task 25

// function countSheeps(sheep) {
//     return sheep.filter(value => value == true).length;
// }

// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]));
