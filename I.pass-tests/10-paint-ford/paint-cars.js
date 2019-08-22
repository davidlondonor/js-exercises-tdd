// const reciboDatosVacios = {};

// function paintCars(carrosSinPintar) {
//   carrosSinPintar.forEach(element => {
//     if (sinPintura[element.colour] === "Pink") {
//       sinPintura[element.colour] = element.colour;
//     } else {
//       sinPintura[element.colour] = element.make;
//     }
//   });
//   return reciboDatosVacios;
// }

function paintCars(carShop, colour) {
  const newObject = [];
  carShop.map(car => {
    newObject.push(car);

    if (car.colour === "Red") {
      car.colour = colour;
    }
  });
  console.log(newObject);
  return newObject;
}

module.exports = paintCars;

// const reciboDatos = {}; //Objeto vacio para generarlo desde cart.test

// function carSales(Probando) {
//     Probando.forEach(element => {
//         if (reciboDatos[element.make] == undefined) {
//             //console.log("primera vez if");
//             reciboDatos[element.make] = element.price;
//         } else {
//             reciboDatos[element.make] += element.price; // += es lo mismo que decir que volver a poner los datos del igual
//         }
//     });
//     return reciboDatos;
// }
