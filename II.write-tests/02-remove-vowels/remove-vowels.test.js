var nombre = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange. Paso parámetros que me pasan
  // Act. Acto
  // Assert. Lo que debe expected
  var result = nombre("David");
  var output = nombre(result);
  console.log(output); //lo que me entrega el ejercicio
  expect(output).toEqual(result);
});
