// // multidimensional array
// const data = [
//   [1, 2, 3],
//   [1, 3, 4],
//   [4, 5, 6],
// ];
// // -------
// let studentsData = [
//   ["Jack", 24],
//   ["Sara", 23],
//   ["Peter", 24],
// ];
// // -------
// let student1 = ["Jack", 24];
// let student2 = ["Sara", 23];
// let student3 = ["Peter", 24];

// // multidimensional array
// let studentsData = [student1, student2, student3];
// ----------------
// let x = [
//   ["Jack", 24],
//   ["Sara", 23],
//   ["Peter", 24],
// ];

// access the first item
// console.log(x[0]); // ["Jack", 24]

// // access the first item of the first inner array
// console.log(x[0][0]); // Jack

// // access the second item of the third inner array
// console.log(x[2][1]); // 24
// ------------

// Iterating over Multidimensional Array
// You can iterate over a multidimensional array using the Array's forEach() method to iterate over the multidimensional array. For example,

// let studentsData = [['Jack', 24], ['Sara', 23],];

// // iterating over the studentsData
// studentsData.forEach((student) => {
//     student.forEach((data) => {
//         console.log(data);
//     });
// });
// or
// studentsData.forEach((student) => {
//     console.log(student);
//   });
// -------------------------------
// -----------------------------
// // looping outer array elements
// for (let i = 0; i < points.length; i++) {
//   // get the length of the inner array elements
//   let innerArrayLength = points[i].length;

//   // // looping inner array elements
//   for (let j = 0; j < innerArrayLength; j++) {
//     console.log(points[i][j]);
//   }
// }
