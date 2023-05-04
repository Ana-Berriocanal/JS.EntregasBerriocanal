/*let precio_inicial = 0;
let cuotas;
let precio_final = 0;
let p_cuota = 0;

alert("CALCULADORA DE CUOTAS");
do{
    precio_inicial = prompt("Elija el precio del producto que desea calcular \n 1- Amigurumis $2000 \n 2- Atrapasueños $1890 \n 3- Mantas tejidas $7000");
}while(precio_inicial<=0);
console.log("El precio inicial es: " + precio_inicial);
do{
    cuotas = prompt("Ingrese la cantidad de cuotas que desea: \n 3 cuotas: 10% interes , 6 cuotas: 25% interes , 12 cuotas: 65% interés.");
}while(cuotas<=0);
console.log("Cantidad de cuotas: " + cuotas);

function total(n){
    if(n == 1){
        precio_final = precio_inicial;
    }
    if(n == 3){
        p_cuota = (parseInt(precio_inicial)+((parseInt(precio_inicial)*0.1)))/n;
        precio_final = p_cuota*n;
        alert("El precio final es "+ precio_final + " a razón de 3 cuotas de "+ p_cuota);
    }else if (n == 6){
        p_cuota = (parseInt(precio_inicial)+((parseInt(precio_inicial)*0.25)))/n;
        precio_final = p_cuota*n;
        alert("El precio final es "+ precio_final + " a razón de 6 cuotas de "+ p_cuota);
    }else if (n == 12){
        p_cuota = (parseInt(precio_inicial)+((parseInt(precio_inicial)*0.65)))/n;
        precio_final = p_cuota*n;
        alert("El precio final es "+ precio_final + " a razón de 12 cuotas de "+ p_cuota);
    }else{
        alert("No realizamos " +n+ " cuotas.");
    }
}

total(cuotas); */

class cargaproductos{
constructor(nombre,precioNeto){
    this.nombre= nombre;
    this.precioNeto=precioNeto;
    this.preciofinal= parseInt (precioNeto) + parseInt (precioNeto) * 0.21;
}
}
let articulos = [];
let respuesta = "SI";
do{
    let nombre= prompt ("Ingrese el nombre del producto a cargar");
    let precioNeto= prompt ("Ingrese el precio neto del producto a cargar");
const amigurumi = new cargaproductos (nombre,precioNeto);
articulos.push(amigurumi);
respuesta = prompt ("Querés ingresar otro producto? SI/NO");
} while (respuesta.toUpperCase() !=="NO");
respuesta = prompt ("Se cargaron " + articulos.length + " productos. Desea verlos? SI/NO");
if (respuesta.toUpperCase() == "SI"){
        alert("Podes verlo desde la consola!");
    for(const amigurumi of articulos){
        console.log(amigurumi);
    }
}
let nombre_prenda_buscada = prompt ("Para corroborar la existencia y el precio final de los artículos, búsquelos aquí:");
console.log(nombre_prenda_buscada);
let buscaprendas = articulos.find((aa) => aa.nombre === nombre_prenda_buscada);
console.log(buscaprendas);
if (buscaprendas){
    console.log("Datos del artículo:" + buscaprendas.toString);
} else {
    console.log("No hay artículos ingresados con esas características. Volvé a intentar!");
}

/*Contenido DOM:
let atrapasueños = document.getElementsByClassName("atrapasueños");
console.log("Sección de compras personales", atrapasueños);

let hogar = document.getElementsByClassName("seccionHogar");
console.log("Decoración innovadora y a mano", seccionHogar);

let bebe = document.getElementsByClassName("seccionBebe");
console.log("Para cuidar a los bebés", seccionBebe);

let juguetes = document.getElementsByClassName("amigurumis");
console.log("Juguetes con lanas nobles", amigurumis);
*/

/*Eventos:
const formularioInput = document.getElementById("formu");
formularioInput.addEventListener("change", () => {
    console.log("Usted ha escrito para hacer un pedido:", formularioInput.value);
})

const enviar = document.getElementById("enviar")[0];
enviar.addEventListener("mouseup", () => {
    console.log("Seguro que desea enviar el formulario?");
})

const borrar = document.getElementById("borrar")[0];
enviar.addEventListener("mouseup", ()=> {
    console.log("Seguro que desea borrar el formulario?");
})  */

//EVENTOS:

const ada = document.getElementsByTagName("h1")[0];
ada.addEventListener("mouseover",() => {
    console.log("Nos encontramos posicionadas sobre el título de nuestra página");
})

const enviar = document.getElementById("enviar");
enviar.addEventListener("click",() => {
    console.log("El usuario está realizando un envío de formulario.")})

    const borrar = document.getElementById("borrar");
borrar.addEventListener("click",() => {
    console.log("El usuario CANCELARÁ el envío de este formulario.")})

// STORAGE Y JSON:

const jsoncargaproductos = JSON.stringify(articulos);
localStorage.setItem("productos", jsoncargaproductos);

const json_a_obj = JSON.parse(localStorage.getItem("articulos"));
console.log("Historial prendas ingresadas", {jsoncargaproductos});

const prendas_buscadas = JSON.stringify(buscaprendas);
localStorage.setItem("Prendas Buscadas", buscaprendas);

const prendas_recuperadas = localStorage.getItem("buscaprendas");
console.log("Historial de prendas buscadas", {prendas_recuperadas});

//DOM:

function cupones () {
    let descuento = document.getElementById("cupon");
    descuento.innerText="Ingresá Artesanias CdHs2023 para un 20% OFF en tu compra!"
}

let clickear = document.getElementById("funcion");
cupon.addEventListener("click", cupones);