// function convert(num) {
//   let string = num
//     .toString() // convert number to string
//     .split("")
//     .sort(); // convert string to array of characters
//   numreverse = string.reverse();
//   arrayOfNumbers = numreverse.map(Number);

//   return arrayOfNumbers;
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
