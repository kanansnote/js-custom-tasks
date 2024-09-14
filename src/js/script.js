// Custom Task
// We need to shorten the surname to its first letter.
// My Code

// function shortFullName(fullname){
//     const fullnameArr = fullname.split(' ');
//     const name = fullnameArr[0];
//     const surname = fullnameArr[1];
//     const surnameAbbr = surname[0];
//     console.log(`${name} ${surnameAbbr}.`);
// }

// shortFullName('Robin Singh');

// Shadman's One

// function shortFullName(fullname){
//     const fullnameArr = fullname.split(' ');
//     const surname = fullnameArr[fullnameArr.length - 1];
//     const surnameAbbr = surname.slice(0, 1);
//     console.log(`${fullnameArr[0]} ${surnameAbbr}.`);
// }

// shortFullName('Robin Singh');

// Funksiyaya bir rəqəm daxil edilir və burada yoxlamaq lazımdir ki, bu hansısa ədədin kvadratıdır, ya yox.

// function isNumberPowed(number){
//     number = Number();
//     let numberPow = Math.pow()
// }

// isNumberPowed(9, 115);

// --------------------------------------------------
// Array Tasks
// Task 1
// function mixedArrtask(arr1, arr2){
//     let joinedArrs = arr1.concat(arr2);
//     let sortedArr = joinedArrs.sort();
//     let firstLastCutArr = sortedArr.splice(1, 5);
//     return firstLastCutArr;
// }

// console.log(mixedArrtask([5,2,3,9], [2,9,1]));

// Task 2

// function theSmallestNumber(arr){
//     let sortedArr = arr.sort(function(a, b){return a - b});

//     // 1, 4, 4, 7, 7
//     // 1, 3, 3

//     let newArr = [];

//     for(let i = 0; i < arr.length; i++) {

//         if (!(sortedArr.includes(i))) {
//             newArr.push();
//         }
//     }

//     console.log(newArr);
// }

// theSmallestNumber([7,7,4,4,1]);
// theSmallestNumber([3,3,1]);

// Task 3
// function bölünənƏdədlər(num){
//     let
// }

// console.log(bölünənƏdədlər(24)); // bölənlər [1,2,3,4,6,8,12,24], bölənlərin sayı - 8
// console.log(bölünənƏdədlər(67)); // bölənlər [1,67], bölənlərin sayı - 2

// Task 4

// function sayiniYaziyaCevir(num) {
//     const reqemler = [
//         'bir',
//         'iki',
//         'üç',
//         'dört',
//         'beş',
//         'altı',
//         'yeddi',
//         'səkkiz',
//         'doqquz',
//     ];

//     const onluqlar = [
//         'on',
//         'iyirmi',
//         'otuz',
//         'qırx',
//         'əlli',
//         'altmış',
//         'yetmiş',
//         'səksən',
//         'doxsan',
//     ];

// }

// sayiniYaziyaCevir(67);  // altmış yeddi
// sayiniYaziyaCevir(82);  // səksən iki

// ChatGPT kodu
// function bolenleriVeSayisi(n) {
//     // 1-dən n-ə qədər olan rəqəmlərdən ibarət array yaradırıq
//     const numbers = Array.from({ length: n }, (_, i) => i + 1);

//     // `filter` metodu ilə bölənləri tapırıq
//     const bolenler = numbers.filter(num => n % num === 0);

//     // Nəticələri ekrana yazdırırıq
//     console.log(`Bölənlər: ${bolenler.join(', ')}`);
//     console.log(`Bölənlərin sayı: ${bolenler.length}`);
// }

// // Nümunə istifadə
// bolenleriVeSayisi(12);

// // Şadmanın kodu
// function bolunenEdedler(num) {
//     const arr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }

//     return `tam bolenler ${arr} ve bolenlerin sayi ${arr.length}`;
// }

// console.log(bolunenEdedler(24));  // bölenler [1, 2, 3, 4, 6, 8, 12, 24] bğlenlerin sayi - 8
// console.log(bolunenEdedler(67));  // bölenler [1, 67]

// Task 5
// const news1 =
//     'Cüdo üzrə Azərbaycanın gənclərdən ibarət millisi İspaniyanın Malaqa şəhərində davam edən Avropa Kubokunda iki medal qazanıb.';
// const len1 = 20;

// const news2 = 'Şahdağda qarın hündürlüyü iki santimetrə çatıb';
// const len2 = 15;

// function xeberinQisaltmasi(str, par2) {

//     let news = String(str);
//     let len = Number(par2);

//     // console.log(news.length);

//     if (news.length > len) {
//        let newsNewLength = news.slice(0, len);
//        let newsEndDotts = newsNewLength.padEnd(3, '...');

//        console.log(newsEndDotts);
//     }

//     // return newsEdited, len;
// }
// console.log(xeberinQisaltmasi(news1, len1));   // Cüdo üzrə Azərbaycanın...
// console.log(xeberinQisaltmasi(news2, len2));   // Şahdağda qarın hündürlüyü...

// Task 6

// function isItLetter(l) {

//     const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     const lowercased = l.toLowerCase();

//     for (let index = 0; index < alphabets.length; index++) {

//         if (lowercased.includes(alphabets[index])) {
//             return true;
//         } else {
//             return false;
//         }

//     }

// }

// console.log(isItLetter('a')); // true
// console.log(isItLetter('A')); // true
// console.log(isItLetter('1')); // false
// console.log(isItLetter('[')); // false

// Edabit Tasks

// Task 1

// function numberSplit(num) {
// 	// My Code
// 	// console.log(num.toString().split(" ").map(item=> [Math.floor(item / 2), Math.ceil((item / 2))]))
// 	// Author's code
// 	console.log([Math.floor(num / 2), Math.ceil(num / 2)]);
// }

// numberSplit(4); // [2, 2]
// numberSplit(10); // [5, 5]
// numberSplit(11); // [5, 6]
// numberSplit(-9); // [-5, -4]

// Task 2

// function squared(b) {
// 	return b * b;
// }

// squared(5);
// squared(9);
// squared(100);

// Task 3

// function sortByLength(arr) {
//      console.log(arr.sort((a, b) => a.length-b.length));
// }

// sortByLength(["a", "ccc", "dddd", "bb"]) // ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) // ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) // ["may", "april", "august", "september"]
// sortByLength([]) // []

// Task 4

// function minMax(arr) {
// 	const sorted = arr.sort((a, b) => a - b);
// 	console.log([sorted[0], sorted[sorted.length - 1]]);
// }

// minMax([1, 2, 3, 4, 5]); // [1, 5]
// minMax([2334454, 5]); // [5, 2334454]
// minMax([1]); // [1, 1]

// Task 5

// function getVoteCount(obj) {
//     console.log(obj.upvotes - obj.downvotes);
// }

// getVoteCount({ upvotes: 13, downvotes: 0 }) // 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) // -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) // 0

// Task 6

// function getVoteCount(votes) {

// }

// Task 7

// function volumeOfBox(obj) {
// 	return Object.values(obj).reduce((pre, cur)=>pre * cur);
// 	return obj.width * obj.length * obj.height;
// }

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); // 10
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 })); // 16
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 })); // 30

// Task 8

// function fiftyThirtyTwenty(num) {
// 	console.log({
// 		Needs: (num * 50) / 100,
// 		Wants: (num * 30) / 100,
// 		Savings: (num * 20) / 100,
// 	});
// }

// fiftyThirtyTwenty(10000); // { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// fiftyThirtyTwenty(50000); // { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// fiftyThirtyTwenty(13450); // { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// Task 9
// const obj = { noChanges: true };

// function preventChanges(obj) {
// 	// Write your code here, don't use a return statement
//     Object.freeze(obj);
// 	obj.noChanges = false;
// 	obj.signature = "whatever";
// 	return obj;
// }

// console.log(preventChanges(obj)); // { noChanges: true }

// Task 10

// My Code
// function relationToLuke(str) {
//     const obj = {
//         father: "Darth Vader",
//         sister: "Leia",
//         brother_in_law: "Han",
//         droid: "R2D2",
//     }

//     console.log(`Luke, I am your ${obj[str]}.`);
// }

// relationToLuke("Darth Vader") // "Luke, I am your father."
// relationToLuke("Leia") // "Luke, I am your sister."
// relationToLuke("Han") // "Luke, I am your brother in law."

// My code corrected by ChatGPT
// function relationToLuke(str) {
//     const obj = {
//         "Darth Vader": "father",
//         "Leia": "sister",
//         "Han": "brother in law",
//         "R2D2": "droid",
//     };

//     console.log(`Luke, I am your ${obj[str]}.`);
// }

// relationToLuke("Darth Vader"); // "Luke, I am your father."
// relationToLuke("Leia"); // "Luke, I am your sister."
// relationToLuke("Han"); // "Luke, I am your brother-in-law."
// relationToLuke("R2D2"); // "Luke, I am your droid."


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

// Custom Tasks
// Task 1
// Reverse the array data using a loop and store the data in the array result. The expected output is: ['Homework', 20, 'Shopping', 10, 5].

// function reverseArray(arr) {
//     console.log(arr.reverse());
// }

// reverseArray([5, 10, 'Shopping', 20, 'Homework']);

// Task 2
// const quiz = {
//     question: 'Inside which HTML element do we put the JavaScript?',
//     correct: '<script>',
//     options: ['<style>', '<javascript>', '<scripting>'],
// };
