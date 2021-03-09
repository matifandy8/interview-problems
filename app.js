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

// let test = [1, 2, 5, 4, 4, 5];

// let smallerNumbersThanCurrent = function (nums) {
//   const sorted = [...nums].sort((a, b) => a - b);
//   console.log(sorted);
//   return nums.map((num) => sorted.indexOf(num));
// };

// console.log(smallerNumbersThanCurrent(test));
// ---------------------------------------
// --------------------
// function smallerNumbersThanCurrent(nums) {
//   const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
//   const map = new Map(
//     sorted.map((num, index) => [num, nums.length - index - 1])
//   );
//   return nums.map((num) => map.get(num));
// }
//   Complexity:
// Time O(NlogN)
// Space O(N)

// Example:
// nums [8,1,2,2,3]

// Sort nums by descending order
// sorted [8,3,2,2,1]
// Create map with counts
// map: {8:4,3:3,2:1,1:0}
// Return an array with counts stored in map
// result: [4,0,1,1,3]

// --------------------------------------

// array1 = ["uno", "dos", "tres"];
// array2 = ["tres", "dos", "uno"];

// //Se ordenan ambos arreglos
// array1.sort();
// array2.sort();

// // y se realiza la comparación de cada elemento
// array1.length == array2.length &&
//   array1.every(function (v, i) {
//     return v === array2[i];
//   });

//   let items = this.backup.filter(p => (
//     //Sí la longitud no es la misma son diferentes
//     p.tags.length === tags.length && p.tags.every( item => tags.includes(item) )
// ));

// ------------
// -------
// --------------

// arr1 = [0, 1, 2, 3, 4];
// arr2 = [0, 1, 2, 2, 1];

// var createTargetArray = function (nums, index) {
//   // tiene que tener la misma longitud
//   // nums.length == index.length
//   // comparar los dos arrays
//   let target = [];
//   for (const i in nums) target.splice(index[i], 0, nums[i]);
//   return target;
//   // colocar el valor de nums en el indice de el valor del array index
//   // si el primer valor de nums es 1 comparar con el primero del array index y ver que valor       tiene dependiendo del valor es el indice en donde colocarlo
// };
// console.log(createTargetArray(arr1, arr2));

// var createTargetArray = function(nums, index) {
//   let result=[]
//   for(let number of nums){
//       let idx = index.shift();
//       result.splice(idx,0,number)
//   }
//   return result
// };
// const createTargetArray = (nums, idx) => {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i]
//     const currentIdx = idx[i];
//     result.splice(currentIdx, 0, num)
//   }

//   return result;
// };

// let test = [1, 1, 0, 1, 1, 0, 1, 1, 0];
// var findMaxConsecutiveOnes = function (nums) {
//   let largestCount = 0;
//   let currentCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       currentCount = 0;
//       console.log(currentCount);
//     } else {
//       currentCount++;
//       console.log(currentCount);
//     }
//     if (currentCount > largestCount) largestCount = currentCount;
//   }
//   return largestCount;
// };

// console.log(findMaxConsecutiveOnes(test));

// var findMaxConsecutiveOnes = function (nums) {
//   let largest = 0;
//   let current = 0;
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] === 0 ? (current = 0) : current++;
//     if (current > largest) largest = current;
//   }
//   return largest;
// };

// let test = [
//   [1, 2, 3],
//   [3, 3, 3],
// ];

// let maximumWealth = function (accounts) {
//   let array = [];
//   for (var i in accounts) {
//     for (var j in accounts[i]) {
//     }
//     let totalarr = accounts[i].reduce((acc, el) => acc + el, 0);
//     numero = Number(totalarr);
//     array.push(typeof totalarr);
//     console.log(totalarr);
//     console.log(array);
//   }
//   console.log(Math.max(array));
// };

// console.log(maximumWealth(test));
//   let totalarr1 = array1.reduce((acc, el) => acc + el, 0);

// --------------------------------------------
// var maximumWealth = function(accounts) {
//     return Math.max(...accounts.map(account =>
//         account.reduce((accumulator, current) => accumulator + current, 0)
//     ))
// };
// ----------------------------------------------
// var maximumWealth = function(accounts) {
//     let temp = result = 0
//     accounts.forEach(e=> {
//         temp = e.reduce((acc,cur)=>acc+cur,0);
//         result = Math.max(temp,result);
//     })
//     return result;
// };
// --------------------------

// let arr = [1, 1, 1, 1];

// const numIdenticalPairs = (array) => {
//   let good = 0;
//   for (let indexA = 0; indexA < array.length; indexA++) {
//     for (let indexB = indexA + 1; indexB < array.length; indexB++) {
//       if (array[indexA] == array[indexB] && indexA < indexB) {
//         good++;
//       }
//     }
//   }
//   return good;
// };

// console.log(numIdenticalPairs(arr));
// -----------------------------------------------
// ---------------------------------------------
// Use an object to store numbers (can also use array
//  since this problem have constraint
// of 1 <= nums[i] <= 100
//   when new number is added to object,
//  set 1 as value
//   if current number already exist in object,
//  add 1 to current value + add the value to count

// const numIdenticalPairs = function(nums) {
//   const map = {}
//   let count = 0

//   for (const number of nums) {
//       if (map[number]) {
//           count += map[number];
//           map[number] += 1;
//       } else {
//           map[number] = 1;
//       }
//   }
//   return count
// };

// test = [1, 2, 3, 4];

// for (let index = 0; index < freq; index++) {
//   newarray.push(index);
// }

// ---------------------------------------------
// var decompressRLElist = function (nums) {
//   return nums.reduce(
//     (acc, cur, i, arr) =>
//       i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
//     []
//   );
// };

// console.log(decompressRLElist(test));

// ----------------------
// time O(n) space O(n)
// var decompressRLElist = function(nums) {
//     let result = []

//     for(let i=0; i<nums.length; i+=2) {
//         const frequency = nums[i]
//         const value = nums[i+1]

//         // result = [...result, ...new Array(frequency).fill(value)]
//         result.push(...new Array(frequency).fill(value))
//     }

//     return result
// };

// ------------------------------------------------
// El operador de propagación spread operator
// permite que una expresión sea expandida en
//  situaciones donde se esperan múltiples argumentos
//   (llamadas a funciones) o múltiples elementos
//    (arrays literales).
// var foo = [ 'En', 'un', 'lugar', 'de', 'la', 'Mancha' ],
//     bar = [ 'de', 'cuyo', 'nombre', 'no', 'quiero', 'acordarme' ],

//     // Old Style
//     oldStyle = foo.concat( bar ),

//     // ECMAScript 6 style
//     ES6Style = [ ...foo, ...bar ];

// console.info( oldStyle );
// // [ "En", "un", "lugar", "de", "la", "Mancha", "de",
//     "cuyo", "nombre", "no", "quiero", "acordarme" ]

// console.info( ES6Style );
// // [ "En", "un", "lugar", "de", "la", "Mancha", "de",
//     "cuyo", "nombre", "no", "quiero", "acordarme" ]
// --------------------------------------------

// var decompressRLElist = function (nums) {
//   const result = [];

//   for (let i = 1; i < nums.length; i += 2) {
//     result.push(...new Array(nums[i - 1]).fill(nums[i]));
//   }

//   return result;
// };

// let test = [-5, 1, 5, 0, -7];
// var largestAltitude = function (gain) {
//   for (let i = 1; i < gain.length; i++) gain[i] += gain[i - 1];

//   return Math.max(0, ...gain);
// };

// console.log(largestAltitude(test));
// ----------------------
// ------------------
// test = [
//   [1, 1],
//   [3, 4],
//   [-1, 0],
// ];
// const minTimeToVisitAllPoints = function (points) {
//   let countertotalseconds = 0;
//   for (let i = 0; i < points.length - 1; i++) {
//     let firstXYCoordinate = points[i];
//     let secondXYCoordinate = points[i + 1];
//     let diff1 = Math.abs(firstXYCoordinate[0] - secondXYCoordinate[0]);
//     let diff2 = Math.abs(firstXYCoordinate[1] - secondXYCoordinate[1]);
//     let maximadiff = Math.max(diff1, diff2);
//     countertotalseconds += maximadiff;
//   }
//   return countertotalseconds;
// };

// console.log(minTimeToVisitAllPoints(test));

// const minTimeToVisitAllPoints = points => {
//   let times = 0;
//   for (let i = 1; i < points.length; ++i) {
//     const p0 = points[i - 1];
//     const p1 = points[i];
//     times += Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]));
//   }
//   return times;
// };
// Time complexity: O(n)
// Space complexity: O(1)

// let minTimeToVisitAllPoints = function(points) {
//   let i = 0;
//   let result = 0;
//   while(i < points.length - 1) {
//       let x= Math.abs(points[i][0] - points[i+1][0]);
//       let y= Math.abs(points[i][1] - points[i+1][1]);
//       result = result + Math.max(x,y);
//       i++;
//   }

//   return result;
// };

// Input = ["h", "e", "l", "l", "o"];

// const reverseString = function (s) {
//   stringreverse = s.reverse();
//   return stringreverse;
// };

// console.log(reverseString(Input));

// var reverseString = (s) => {
//     for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
//         [s[a], s[b]] = [s[b], s[a]]
//     }
// };

// const invertirManual = arreglo => {
//     // Guardar de una vez la longitud para hacer más legible el código
//     let longitudDelArreglo = arreglo.length;
//     // Recorrer arreglo hasta la mitad. Si es impar, se va al entero anterior más
//     // próximo. P. ej. 5 / 2 => 2
//     for (let x = 0; x < longitudDelArreglo / 2; x++) {
//       // Respaldar el valor actual
//       let temporal = arreglo[x];
//       // Calcular el índice contrario, es decir, el del otro lado de la mitad; el cual irá descendiendo
//       let indiceContrario = longitudDelArreglo - x - 1;
//       // En el actual ahora está el del otro lado
//       arreglo[x] = arreglo[indiceContrario];
//       // Y en el otro lado, el que estaba originalmente en el actual
//       arreglo[indiceContrario] = temporal;
//     }

//     // No regresamos nada porque ya modificamos al arreglo internamente
//   };
// -------------------------
// --------------------
// const arrayOfDigits = Array.from(String(numToSeparate), Number);

// console.log(arrayOfDigits);   //[1,2,3,4,5]

// test = [12, 345, 2, 6, 7896];
// const findNumbers = function (nums) {
//   evencuantity = 0;
//   nums.forEach(function (item) {
//     arrayOfDigits = Array.from(String(item), Number);
//     cuantitydigits = arrayOfDigits.length;
//     if (cuantitydigits % 2 == 0) {
//       evencuantity++;
//     }
//   });
//   return evencuantity;
// };
//--- var findNumbers = nums => nums.reduce( (a, c) => c.toString().length % 2 === 0 ? a + 1 : a, 0 )
// var findNumbers = function(nums) {
//     let result = 0;
//     nums.forEach((value, index) => {
//         result += (value + '').length % 2 ? 0 : 1;
//     });
//     return result;
// };
// console.log(findNumbers(test));

// test = [
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
//   [0, 1, 1, 1],
//   [1, 0, 1, 0],
// ];
// var flipAndInvertImage = function (A) {
//     let flipImage = [];
//     let newA = [];
//     let value = 0;
//     // Loop trough array
//     A.forEach((arr) => {
//       // Reverse array
//       let rArr = arr.reverse();
//       rArr.forEach((cv) => {
//         if (cv == 0) value = 1;
//         else if (cv == 1) value = 0;
//         // Push value to array
//         newA.push(value);
//       });
//       // push array to array
//       flipImage.push(newA);
//       // empty array
//       newA = [];
//     });
//     return flipImage;
//   };

// console.log(flipAndInvertImage(test));
// -----------------
// -----------
// ONE LINE
// const flipAndInvertImage = A => A.map(x => x.reverse().map(y => y ? 0 : 1))
// -----------------------

// test = [10, 2, 5, 2];

// var maxProduct = function (nums) {
//   //ordeno de mayor a menor
//   //resultado = calculo
//   for (let x = 0; x < nums.length; x++) {
//     for (let i = 0; i < nums.length - x - 1; i++) {
//       if (nums[i] < nums[i + 1]) {
//         let tmp = nums[i + 1];
//         nums[i + 1] = nums[i];
//         nums[i] = tmp;
//       }
//     }
//   }
//   maxproduct = (nums[0] - 1) * (nums[1] - 1);
//   return maxproduct;
// };

// var maxProduct = function(nums) {
//     const sorted = nums.sort((a, b) => a - b);
//     return (sorted[nums.length - 1] - 1) * (sorted[nums.length - 2] - 1);
//   };

// console.log(maxProduct(test));

let test1 = [1, 2];
let test2 = [3];

const findMedianSortedArrays = function (nums1, nums2) {
  let array3 = nums1.concat(nums2);
  let array3ordenado = array3.sort();
  return array3ordenado.length / 2;
};

console.log(findMedianSortedArrays(test1, test2));
