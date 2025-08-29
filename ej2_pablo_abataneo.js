var precioPrimerProducto = 60;
var precioSegundoProducto = 30;
var esEstudiante = false;

var total = precioPrimerProducto + precioSegundoProducto;

console.log("precio primer producto: " + precioPrimerProducto);
console.log("precio segundo producto: " + precioSegundoProducto);
console.log("total sin descuento: " + total);

if (esEstudiante) {
  console.log("sos estudiate!!! entonces tenes 10% de descuento");
  var descuento = total * 0.10;
  console.log("Descuento: " + descuento);
  var totalConDescuento = total - descuento;
  console.log("total con descuento: " + totalConDescuento);
} else {
  console.log("no sos estudiante, no hay descuento");
  console.log("total a pagar: " + total);
}