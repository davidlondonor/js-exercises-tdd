// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function getNumbers(numbers) {
  const arrNumbers = numbers.filter(element => typeof element === "number");
  const sum = arrNumbers.reduce((previous, current) => (current += previous));
  let avg = sum / arrNumbers.length;
  return avg;
}

module.exports = getNumbers;

// Otra opcion de realizar el proceso
// function average(elements) {
//   var suma = 0;
//   elements.filter(valor => typeof valor === "number").forEach(function(valor) {
//       suma += valor;
//     });
// return suma / elements.length;
// }
// module.exports = average;

// function average(elements) {
//     elements.filter(valor => typeof valor === 'number'))
// });

// Prueba del metodo
// let averageNum = 0
// numbers.forEach(function (num) {
//     if (typeof num === number) {
//         averageNum = num /
//     } else {

//     }
// }
// };
