//Declaracion de variables
const nombreTienda = "🎵 Todo Música 🎵";
const nombreProducto1 = "🎸 Guitarra";
const nombreProducto2 = "🎹 Teclado";
const precioProducto1 = 150; 
const precioProducto2 = 200;
const codigoDescuento = "ADALOVELACE";


//Comienzo del programa

//Punto 1

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

alert(`Este es el detalle de tu compra:

Subtotal de ${nombreProducto1}: $ ${subtotalProducto1}
Subtotal ${nombreProducto2}: $ ${subtotalProducto2}

Total de la compra: $ ${total}

Cantidad de cuotas: ${cantidadCuotas}
Monto de cada cuota: $ ${montoCuotas}`);

//Punto 8

const preguntaCodigo = prompt(`¿Tenés un código de descuento?`);

const validacionCodigo = preguntaCodigo === ("si") && prompt(`Por favor, ingresá tu código de descuento`);

const codigoSi = validacionCodigo === codigoDescuento && alert(`El código de descuento ingresado es válido`);
const codigoNo = validacionCodigo !== codigoDescuento && alert(`El código de descuento ingresado no es válido`);

//Punto 9

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

