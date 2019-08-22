var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var result = greetPeople(mentors);
  var expected = greetPeople(mentors);

  expect(result).toEqual(expected);

  // Arrange Primero la Variable con los mentores
  // Act El resultado
  // Assert
});
