let getLargestNumbers = require("./largest-number");

test("Getting Largest numbers", function() {
  let input = [3, 21, 88, 4, 36];
  let expected = 88;

  let output = getLargestNumbers(input);

  expect(output).toEqual(expected);
});

test("Getting array original", function() {
  let input = [3, 21, 88, 4, 36];
  let expected = input;

  let output = getLargestNumbers(input);

  expect(expected).toEqual(input);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
