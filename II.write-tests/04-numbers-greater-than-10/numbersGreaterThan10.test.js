var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  var input = [4, 10, 32, 9, 21];
  var output = largerThanTen(input);
  expected = [32, 21];
  console.log(output);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
