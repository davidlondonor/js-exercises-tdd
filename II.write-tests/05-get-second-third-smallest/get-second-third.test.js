let sliceFunction = require("./get-second-third");

test("Getting second and third smallest", function() {
  let input = [90, 5, 11, 8, 6];
  let expected = [6, 8];

  let output = sliceFunction(input);
  expect(output).toEqual(expected);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
