function segundoMasGrande(num) {
  num.splice(6, 1);
  return Math.max(...num); //Este es el spread que van antes de ...num
}
module.exports = segundoMasGrande;
// function segundoMasGrande() {
//   return Math.floor(57);
// }
//return segundoMasGrande.array.forEach(element => { element
//Math.floor(230));
//})
