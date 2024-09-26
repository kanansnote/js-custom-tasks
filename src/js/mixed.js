// Mixed Tasks

// Task 1
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

// Shadman's code

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

// function sayınıYazıyaÇevir(num) {
//     const reqemler = [
//         'bir',
//         'iki',
//         'üç',
//         'dörd',
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

// sayınıYazıyaÇevir(67);  // altmış yeddi
// sayınıYazıyaÇevir(82);  // səksən iki

// ChatGPT kodu
// function bölənləriVəSayısı(n) {
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
// function bölünənƏdədlər(num) {
//     const arr = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }

//     return `tam bölənlər ${arr} və bölənlərin sayı ${arr.length}`;
// }

// console.log(bölünənƏdədlər(24));  // bölənlər [1, 2, 3, 4, 6, 8, 12, 24], bölənlərin sayı - 8
// console.log(bölünənƏdədlər(67));  // bölənlər [1, 67]

// Task 5
// const news1 =
//     'Cüdo üzrə Azərbaycanın gənclərdən ibarət millisi İspaniyanın Malaqa şəhərində davam edən Avropa Kubokunda iki medal qazanıb.';
// const len1 = 20;

// const news2 = 'Şahdağda qarın hündürlüyü iki santimetrə çatıb';
// const len2 = 15;

// function xəbərinQısaltması(str, par2) {

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
// console.log(xəbərinQısaltması(news1, len1));   // Cüdo üzrə Azərbaycanın...
// console.log(xəbərinQısaltması(news2, len2));   // Şahdağda qarın hündürlüyü...

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

// Task 7
// Reverse the array data using a loop and store the data in the array result. The expected output is: ['Homework', 20, 'Shopping', 10, 5].

// function reverseArray(arr) {
//     console.log(arr.reverse());
// }

// reverseArray([5, 10, 'Shopping', 20, 'Homework']);

// Task 8
// const quiz = {
//     question: 'Inside which HTML element do we put the JavaScript?',
//     correct: '<script>',
//     options: ['<style>', '<javascript>', '<scripting>'],
// };
