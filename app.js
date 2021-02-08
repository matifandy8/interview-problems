// function convert(num) {
//   let array = Array.from(String(num), Number);
//   console.log(array);
//   let siblingsort = array.sort().reverse().toString().split(",").join("");

//   return Number(siblingsort);
// }

// console.log(convert(231));

// ------------------------------------------

// function calcLenght(A) {
//   let output = [];
//   let firstValue = A[0];
//   output.push[firstValue];

//   for (let i = 0; i < A.length; i++) {
//     let toAdd = A[i];

//     if (toAdd !== -1) {
//       output.push(A[toAdd]);
//     } else {
//       output.push(-1);
//       return console.log(output.length);
//     }
//   }
// }

// console.log(calcLenght([0, 1, 2, 3, 4]));

// ------------------------------------------

// ordenamiento burbuga

// let arr = [10, 8, 4, 7, 5, 9, 13, 12];
// const burbuja = (array) => {
//   for (let indexA = 0; indexA < array.length; indexA++) {
//     for (let indexB = indexA + 1; indexB < array.length; indexB++) {
//       if (array[indexB] < array[indexA]) {
//         let aux = array[indexA];
//         array[indexA] = array[indexB];
//         array[indexB] = aux;
//       }
//     }
//   }
//   return array;
// };

// console.log(burbuja(arr));

// ------------------------------------------

// CONTAR LOS CARACTERES DE UN TEXTO sin ecma
// let texto = "hola mundo";

// function counttext(text) {
//   letterAmount = {};
//   for (let index = 0; index < text.length; index++) {
//     let letter = text[index];
//     if (letterAmount[letter] == undefined) {
//       letterAmount[letter] = 1;
//     } else {
//       letterAmount[letter]++;
//     }
//   }
//   return letterAmount;
// }

// console.log(counttext(texto));

// ------------------------------------------

// CONTAR LOS CARACTERES DE UN TEXTO con ecma

// -------------------------------------

// Fibonacci con programacion dinamica

// function fivElementRecursive(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   return fivElementRecursive(n - 1) + fivElementRecursive(n - 2);
// }

// console.log(fivElementRecursive(7));

// ----------------------------------------
// let Text = "Hello World";

// const reverseText = (myText) => {
//   textReverse = "";
//   for (letter of myText) {
//     textReverse = letter + textReverse;
//   }
//   return textReverse;
// };

// console.log(reverseText(Text));

// let arreglo = "Hello World".split("");
// let arreglereverse = arreglo.reverse();
// let spliaregle = arreglereverse.join("");
// let stringreverse = spliaregle.toString();
// console.log(stringreverse);
// ----------------------------------------
// Interview amazon
// let arr1 = [7, 3, 2, 4];
// let arr2 = [6, 1, 5];

// const amazon = (array1, array2) => const totalarr1 = array1.reduce((acc, el) => acc + el, 0);

// function twoSubtractk(arrA, arrB, k) {
//   for (let indexA = 0; indexA < arrA.length; indexA++) {
//     for (let indexB = 0; indexB < arrB.length; indexB++) {
//       if (arrA[indexA] - arrB[indexB] == k) {
//         return [arrA[indexA], arrB[indexB]];
//       }
//     }
//   }
// }

// function amazon(array1, array2) {
//   let totalarr1 = array1.reduce((acc, el) => acc + el, 0);
//   let totalarr2 = array2.reduce((acc, el) => acc + el, 0);
//   let dif = (totalarr1 - totalarr2) / 2;
//   let solution = twoSubtractk(array1, array2, dif);
//   return console.log(solution);
// }

// console.log(amazon(arr1, arr2));

// ------------------------------------------

// let text = "hola me llamo matias";

// function reversedes(myText) {
//   return myText.split("").reverse().join("");
// }

// console.log(reversedes(text));

// let arr = [1, 3, 5, 7];

// const dif = (array) => {
//   let diferencia = array[1] - array[0];
//   return diferencia;
// };
// console.log(dif(arr));

// --------------------------------------
// function FirstReverse(str) {
//   var tomatoes = [];
//   for (i = str.length - 1; i > -1; i--){
//     tomatoes.push(str[i]);
//   }
//   str = tomatoes.join("");

//     return str;

//   }
// --------------------------------------
// function FirstFactorial(num) {
//   return num === 1 ? 1 : num * FirstFactorial(num - 1);
// }
// console.log(FirstFactorial(5));
// ---------------------------

// const words = [1, 2, 3, 4, 5, 6];

// const result = words.filter(word => word/2 === 3);

// console.log(result);

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// /**
//  * Filter array items based on search criteria (query)
//  */
// const filterItems = (arr, query) => {
//   return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
// }

// console.log(filterItems(fruits, 'ap'))
// console.log(filterItems(fruits, 'an'))

// --------------------------------
// let array1 = [1, 2, 2, 4];
// let resultado1 = 8;

// const sum8 = (arr, resultado) => {
//   let inferior = 0;
//   let superior = arr.length - 1;
//   while (inferior < superior) {
//     let suma = arr[inferior] + arr[superior];
//     if (suma === resultado) {
//       return true;
//     } else if (suma < resultado) {
//       inferior += 1;
//     } else {
//       superior -= 1;
//     }
//   }
//   return false;
// };

// console.log(sum8(array1, resultado1));

//ES 5 Syntax Possible Solution:

// function longestString1(arr) {
// 	var longest = ''; // Step 0
// 	for (var i = 0; i < arr.length; i++) { // Step 1
// 		if (arr[i].length > longest.length) { // Step 2 & 3
// 			longest = arr[i]; // Step 4
// 		}
// 	}
// 	return longest; // Step 5
// }

//ES 6 Syntax Possible Solution:

// const longestString2 = (arr) => {
// 	let longest = ''; // Step 0
// 	arr.forEach((item) => { // Step 1
// 		if(item.length > longest.length) {
//             longest = item;
//         }
// 	});
// 	return longest; // Step 5
// };

// --------------------------------------

// const countingChars = (str) => {
//     const charCount = {}; //Step 0
//     let maxCharCount = 0;
//     let maxChar = '';
//     for(let i = 0; i < str.length; i++) { // Step 1.
//         charCount[str[i]] = ++charCount[str[i]] || 1;
//     }

//     for(let key in charCount) { //Step 2
//         if(charCount[key] >= maxCharCount) {
//             maxCharCount = charCount[key] //Step 3
//             maxChar = key;
//         }
//     }

//     return maxChar; //Step 4
// }

// const anagrams = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     //step 1
//     return false;
//   }
//   let sort1 = str1.split("").sort(); // step 2
//   let sort2 = str2.split("").sort();
//   return sort1.join("") === sort2.join("");
// };

// console.log(anagrams("amor", "roma"));

// let string = "oso";

// function ispalindrome(str) {
//   let strreverse = str.split("").reverse().join("");
//   if (str === strreverse) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(ispalindrome("aibofobia"));

// function isUnique(str) {
//   const chars = str.split("").sort();

//   for (let i = 1; i < chars.length; i++) {
//     if (chars[i] === chars[i - 1]) {
//       return false;
//     }
//   }

//   return true;
// }

// function isUnique(str) {
//   return new Set(str).size === str.length;
// }

// ----------- SET ----------------
// const numeros = [1, 2, 2, 3, 4, 4, 5];

// const numerosUnicos = new Set(numeros);

// console.log(numerosUnicos);
// ------------ ------------------

// let test = [2, 2, 4, 4, 5];

// ----------------------------------

// CON Set()

// let test = [2, 2, 4, 4, 5];

// const singleNumber = (array) => {
//   countSet = new Set();
//   for (number of array) {
//     if (countSet.has(number)) {
//       countSet.delete(number);
//     } else {
//       countSet.add(number);
//     }
//   }
//   return Array.from(countSet);
// };
// console.log(singleNumber(test));

// function calcLenght(A) {
//   let output = [];
//   let firstValue = A[0];
//   output.push[firstValue];

//   for (let i = 0; i < A.length; i++) {
//     let toAdd = A[i];

//     if (toAdd !== -1) {
//       output.push(A[toAdd]);
//     } else {
//       output.push(-1);
//       return output.length;
//     }
//   }
//   return output.length;
// }

// let twoSum = function(nums, target) {
//     const map = new Map();
//     for(let i = 0; i < nums.length; i++){
//         let currvalue = nums[i];
//         if(map.has(currvalue)){
//            return [map.get(currvalue), i];
//            }
//         let diff = target - currvalue;
//         map.set(diff, i);
//     }

// };
// for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// for (var i = 1; i <= 100; i++) {
//     var f = i % 3 == 0, b = i % 5 == 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
//   }
//   for (var i = 1; i <= 100; i++) {
//     var f = i % 3 == 0, b = i % 5 == 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
//   }

// FIRST DUPLICATE
// let test = [5, 2, 5, 4, 4, 5];

// const firstDuplicate = (array) => {

// };
// console.log(firstDuplicate(test));

// greatest number array
// const array1 = [1, 3, 2, 4, 5];

// console.log(Math.max(...array1));

// const kidsWithCandies = (candies, extraCandies) => {
//   greatestnumber = Math.max(...candies);
//   for (let i = 0; i < candies.length; i++) {}
// };

// let test = [1, 2, 5, 4, 4, 5];
// let ex = 3;

//  PROBLEM LEETCODE KIDS WITH CANDIES
//  1 line of code
// const kidsWithCandies = (candies, extraCandies, max = Math.max(...candies)) => candies.map(candy => candy + extraCandies >= max);

// ---------------
// const kidsWithCandies = (candies, extraCandies) => {
//     const max = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= max);
//   };
// -------------------
// const recorreArray = (arr, extra) => {
//   greatestnumber = Math.max(...arr);
//   let anyBoxesChecked = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] + extra >= greatestnumber) {
//       anyBoxesChecked.push(true);
//     } else {
//       anyBoxesChecked.push(false);
//     }
//   }
//   return anyBoxesChecked;
// };

// console.log(recorreArray(test, ex));
