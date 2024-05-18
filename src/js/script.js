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


// 
// function mixedArrtask(arr1, arr2){
//     let joinedArrs = arr1.concat(arr2);
//     let sortedArr = joinedArrs.sort();
//     let firstLastCutArr = sortedArr.splice(1, 5);
//     return firstLastCutArr;
// }

// console.log(mixedArrtask([5,2,3,9], [2,9,1]));