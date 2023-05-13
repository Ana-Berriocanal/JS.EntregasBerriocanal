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

class Articulo{
    constructor(nombreproducto,precio){
        this.nombreproducto = nombreproducto;
        this.precio = precio;
    }}
const arrayArticulos = JSON.parse (localStorage.getItem("articulo")) || [];
const jsoncargaproductos = JSON.stringify(arrayArticulos);
localStorage.setItem("articulo", jsoncargaproductos);

 // Creo el formulario 

const carerasJSON = JSON.parse(localStorage.getItem("articulo"));
console.log("Historial prendas ingresadas", {jsoncargaproductos});
let articulo = [];


/*if (localStorage.getItem("articulo")) {
    articulosJSON = JSON.parse (localStorage.getItem("articulo"));
    arrayArticulos= articulosJSON.map(
        (i) => new Articulo (i.nombrearticulo, i.precio));
}*/
const formucarrito = document.getElementById("formulario");

function sumararticulo(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombreproducto").value;
    const precioNeto = document.getElementById("precio").value;
let nuevoart = new Articulo(nombre, precioNeto);
alert("se añadió tu artículo a la lista!");
arrayArticulos.push(nuevoart);
localStorage.setItem("articulo", JSON.stringify(arrayArticulos));

clean ()
nuevosarticulos();
}

function clean (){
    document.getElementById("nombreproducto").value = "";
    document.getElementById("precio").value = "";
}

function nuevosarticulos () {
    let tablas = document.getElementById("tablecarrito");
    tablas.innerHTML="";
    arrayArticulos.forEach((i) => {
        let guardar = document.createElement("tr");
        guardar.innerHTML = `<tr>
        <td scope ="row">${i.nombreproducto}</td>
        <td>${i.precio}</td>
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


//DOM:

function cupones () {
    let descuento = document.getElementById("cupon");
    descuento.innerText="Ingresá Artesanias CdHs2023 para un 20% OFF en tu compra!"
}
let clickear = document.getElementById("funcion");
clickear.addEventListener("click", cupones);