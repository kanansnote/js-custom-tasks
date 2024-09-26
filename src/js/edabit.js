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
