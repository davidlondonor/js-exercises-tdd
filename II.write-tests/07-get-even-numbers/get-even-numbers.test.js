let getEvents = require("./get-even-numbers");

test("Getting event numbers", function() {
  let input = [22, 13, 73, 82, 4];
  let expected = [22, 82, 4];

  let output = getEvents(input);

  expect(output).toEqual(expected);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
