var someWords = ["sun", "potato", "roundabout", "pizza"];

var getWordLengths = function(someWords) {
  return someWords.map(elementoInterno => elementoInterno.length);
};
// console.log(someWords);
// console.log(recorriendoMap);

module.exports = getWordLengths;
// siempre debo tener un module.export que me llama la funcion

// var array1 = [1, 4, 9, 16];
// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]
