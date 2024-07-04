// 1. Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// true
// false

// function is_string(input) {
//     Boolean(String(inputZ));
// }

// console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));

// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false
// Click me to see the solution

// 3. Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]
// Click me to see the solution

// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"
// Click me to see the solution.

// 5. Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
// Click me to see the solution.

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
// Click me to see the solution.

// 7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"
// Click me to see the solution.

// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"
// Click me to see the solution.

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"
// Click me to see the solution.

// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"
// Click me to see the solution.

// 11. Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"
// Click me to see the solution.

// 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"
// Click me to see the solution.

// 13. Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"
// Click me to see the solution.

// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."
// Click me to see the solution.

// 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"
// Click me to see the solution.

// 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"
// Click me to see the solution.

// 17. Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]
// Click me to see the solution.

// 18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1
// Click me to see the solution.

// 19. Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer. Finally return the decimal version of the binary string.
// Test Data :
// (100) -> 19
// Explanation:
// Binary representation of 100 is 1100100
// Reverse of 1100100 is 10011
// Decimal form of 10011 is 19
// (1134) -> 945
// Explanation:
// Binary representation of 1134 is 10001101110
// Reverse of 10001101110 is 1110110001
// Decimal form of 1110110001 is 945
// Click me to see the solution.

// 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"
// Click me to see the solution.

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

//

// function checkPow(number){
//     number = Number();
//     let numberPow = Math.pow(number, 2)

//     if(number == )
// }

// funksiyaya bir reqem daxil edilir, yoxlamaq lazimdir bu hansisa ededin kvadratidir ya yox

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

// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

// function squared(b) {
// 	return b * b;
// }

// squared(5);
// squared(9);
// squared(100);

// function sortByLength(arr) {
// 	 let sortedArr = arr.sort(function (a, b){return a.length-b.length});
//      console.log(sortedArr);
// }

// sortByLength(["a", "ccc", "dddd", "bb"]) // ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) // ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) // ["may", "april", "august", "september"]
// sortByLength([]) // []

// function minMax(arr) {
// 	return arr.map((minAndMax);
// }

// minMax([1, 2, 3, 4, 5]) // [1, 5]
// minMax([2334454, 5]) // [5, 2334454]
// minMax([1]) // [1, 1]

// Objects

// Task 1

// function getVoteCount(votes) {

// }

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
