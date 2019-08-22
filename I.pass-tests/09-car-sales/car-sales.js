// Busco el valor total de los carros vendidos
const reciboDatos = {}; //Objeto vacio para generarlo desde cart.test

function carSales(Probando) {
  Probando.forEach(element => {
    if (reciboDatos[element.make] == undefined) {
      //console.log("primera vez if");
      reciboDatos[element.make] = element.price;
    } else {
      reciboDatos[element.make] += element.price; // += es lo mismo que decir que volver a poner los datos del igual
    }
  });
  return reciboDatos;
}
module.exports = carSales;
