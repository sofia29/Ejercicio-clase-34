// Observaciones generales:
// Código muy prolijo, excelente uso de variables.
// Hay varias cosas que no funcionan como espero, no sé si es porque no supiste como resolverlas o porque no chequeaste 
// todas las alternativas (por ejemplo, no pagar con tarjeta o ingresar un código erróneo)
// Si es porque no supiste resolverlo, no hay problema, te dejé algunas ayudas en el código
// Pero si fue por la segunda, es importante ir chequeando todas las alternativas de nuestro programa
// para que sirva en todos los casos de uso posibles. 
// Es algo que iremos trabajando en las próximas semanas, como testear nuestro código. 

//Declaracion de variables

// 
const nombreTienda = "🎵 Todo Música 🎵";
const nombreProducto1 = "🎸 Guitarra";
const nombreProducto2 = "🎹 Teclado";
const precioProducto1 = 150; 
const precioProducto2 = 200;
const codigoDescuento = "ADALOVELACE";


//Comienzo del programa

//Punto 1

// Si no escribo mi nombre, el programa me saluda como "Hola, null!". 
// Podriamos poner un nombre por defecto
// La logica seria: si nombre es null (o lo que es lo mismo, si no hay nombre), le ponemos de nombre "cliente" por ejemplo
// Te dejo el codigo de ejemplo
// const nombre = prompt(`¡Bienvenida a ${nombreTienda}!
//
// Por favor, decinos tu nombre.`) || "cliente";

const nombre = prompt(`¡Bienvenida a ${nombreTienda}!

Por favor, decinos tu nombre.`);

//Punto 2

alert(`¡Hola, ${nombre}! 

Estos son los productos en promoción:

${nombreProducto1}
${nombreProducto2}`);

//Punto 3

const ofertaProducto1 = prompt(`¿Querés comprar ${nombreProducto1}?`);

const cantidadProducto1 = ofertaProducto1 === "si" && prompt(`¿Cuántas unidades vas a llevar?`);

//Punto 4

const ofertaProducto2 = prompt(`¿Querés comprar ${nombreProducto2}?`);

const cantidadProducto2 = ofertaProducto2 === "si" && prompt(`¿Cuántas unidades vas a llevar?`);

//Punto 5

const subtotalProducto1 = cantidadProducto1 * precioProducto1;
const subtotalProducto2 = cantidadProducto2 * precioProducto2;
const total = subtotalProducto1 + subtotalProducto2;

alert(`Este es el detalle de tu compra:

Subtotal de ${nombreProducto1}: $ ${subtotalProducto1}

Subtotal ${nombreProducto2}: $ ${subtotalProducto2}

Total de la compra: $ ${total}`);

//Punto 6

const pagoTarjeta = prompt(`¿Te gustaría abonar con tarjeta de crédito?`);

const cantidadCuotas = pagoTarjeta === "si" && prompt(`¿En cuántas cuotas querés abonar?`);

//Punto 7

const montoCuotas = total / cantidadCuotas;

// Mostramos este mensaje siempre, incluso si el usuario eligió no pagar con tarjeta de crédito. 
// En ese caso, la cantidad de cuotas es null y el monto, Infinity. 
// Hay varias maneras de solucionarlo. 
// La que me parece mas sencilla es declarar una variable para lo que se va a pagar por tarjeta
// Si el usuario paga con tarjeta, ese mensaje tiene la cantidad de cuotas
// Si el usuario no paga con tarjeta, ese mensaje esta vacío. 
// Adentro del alert, en lugar de escribir la cantidad de cuotas, solo ponemos esa variable
// Asi, solo se va a ver en el alert si el usuario eligió pagar con tarjetas
// Te dejo el codigo de ejemplo. Primero como hariamos esa variable, y luego el alert:

// let mensajeTarjeta = pagoTarjeta === "si" && 
//    `Cantidad de cuotas: ${cantidadCuotas}
//    Monto de cada cuota: $ ${montoCuotas}` || ""

// alert(`Este es el detalle de tu compra:
//
//Subtotal de ${nombreProducto1}: $ ${subtotalProducto1}
//Subtotal ${nombreProducto2}: $ ${subtotalProducto2}
//
//Total de la compra: $ ${total}
//
//${mensajeTarjeta}`);


alert(`Este es el detalle de tu compra:

Subtotal de ${nombreProducto1}: $ ${subtotalProducto1}
Subtotal ${nombreProducto2}: $ ${subtotalProducto2}

Total de la compra: $ ${total}

Cantidad de cuotas: ${cantidadCuotas}
Monto de cada cuota: $ ${montoCuotas}`);

//Punto 8

const preguntaCodigo = prompt(`¿Tenés un código de descuento?`);

const validacionCodigo = preguntaCodigo === ("si") && prompt(`Por favor, ingresá tu código de descuento`);

// Por la manera en que esta hecha esta logica, si respondo que no tengo un codigo de descuento, me dice que el 
// mismo es invalido. 
// Solo tendriamos que hacer la validacion de codigoSi y codigoNo si el usuario dijo que sí tenia codigo de descuento
// Te dejo el ejemplo:

// preguntaCodigo === "si" && (
// const codigoSi = validacionCodigo === codigoDescuento && alert(`El código de descuento ingresado es válido`);
// const codigoNo = validacionCodigo !== codigoDescuento && alert(`El código de descuento ingresado no es válido`);
// )


const codigoSi = validacionCodigo === codigoDescuento && alert(`El código de descuento ingresado es válido`);
const codigoNo = validacionCodigo !== codigoDescuento && alert(`El código de descuento ingresado no es válido`);

//Punto 9

// Este descuento se esta aplicando aunque el codigo sea incorrecto, o yo haya dicho que no tenia codigo
// Deberiamos hacer que el descuento sea de 0 si el usuario no tiene codigo o el mismo es incorrecto, y que sea 50
// solo si es correcto. 

const descuento = 50;
const totalFinal = total - descuento;



alert(`Este es el detalle de tu compra:

Subtotal de ${nombreProducto1}: $ ${subtotalProducto1}
Subtotal ${nombreProducto2}: $ ${subtotalProducto2}

Suma de subtotales: $ ${total}

Cantidad de cuotas: ${cantidadCuotas}
Monto de cada cuota: $ ${montoCuotas}

El descuento es de: $ ${descuento}
Total final: $ ${totalFinal}`);

//Punto 10

alert(`¡Hasta la próxima, ${nombre}!`);



// Muy buen trabajo!
