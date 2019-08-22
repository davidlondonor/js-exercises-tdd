var removeVowels = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  var result = removeVowels[("Irina", "Etza", "Daniel")];
  var output = removeVowels(result);
  expected = ["rn", "tz", "Dnl"];
  // Arrange
  // Act
  // Assert
  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
