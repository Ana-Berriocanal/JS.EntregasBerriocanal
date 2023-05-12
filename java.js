/*class cargaproductos{
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
 */

class articulos{
    constructor(nombrearticulo,precio){
        this.nombrearticulo= nombrearticulo;
        this.precio=precio;
    }}

const jsoncargaproductos = JSON.stringify(articulos);
localStorage.setItem("productos", jsoncargaproductos);

 // Creo el formulario 

const carerasJSON = JSON.parse(localStorage.getItem("articulo"));
console.log("Historial prendas ingresadas", {jsoncargaproductos});
let articulo = [];


if (localStorage.getItem("articulo")) {
    articulosJSON = JSON.parse (localStorage.getItem("articulo"));
    articulos= articulosJSON.map(
        (i) => new articulos (i.nombrearticulo, i.precio));
}
const formucarrito = document.getElementById("formulario");

function sumararticulo(e) {
    e.preventDeafult();
    const nombre = document.getElementById("nombre").value;
    const precioNeto = document.getElementById("precio").value;
let nuevoart = new articulos(nombre, precio);
alert("se añadió tu artículo a la lista!");
articulos.push(nuevoart);
localStorage.setItem("articulo", JSON.stringify(articulos));

clean ()
nuevosarticulos();
}

function clean (){
    document.getElementById("nombrearticulo").value = "";
    document.getElementById("precio").value = "";
}

function nuevosarticulos () {
    let tablas = document.getElementById("tablecarrito");
    tablas.innerHTML="";
    articulos.forEach((i) => {
        let guardar = document.createElement("tr");
        guardar.innerHTML = `<tr>
        <td scope ="row">${i.nombre}</td>
        <td>${i.precio.length}</td>
    </tr>`;
    tablas.append(guardar);
    });
}

//EVENTOS:

formucarrito.addEventListener("submit", sumararticulo);

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

/* STORAGE Y JSON:

const jsoncargaproductos = JSON.stringify(articulos);
localStorage.setItem("productos", jsoncargaproductos);

const json_a_obj = JSON.parse(localStorage.getItem("articulos"));
console.log("Historial prendas ingresadas", {jsoncargaproductos});

const prendas_buscadas = JSON.stringify(buscaprendas);
localStorage.setItem("Prendas Buscadas", buscaprendas);

const prendas_recuperadas = localStorage.getItem("buscaprendas");
console.log("Historial de prendas buscadas", {prendas_recuperadas});
*/

//DOM:

function cupones () {
    let descuento = document.getElementById("cupon");
    descuento.innerText="Ingresá Artesanias CdHs2023 para un 20% OFF en tu compra!"
}

let clickear = document.getElementById("funcion");
cupon.addEventListener("click", cupones);