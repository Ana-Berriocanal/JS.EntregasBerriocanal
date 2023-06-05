class Articulo{
    constructor(nombreproducto,precio){
        this.nombreproducto = nombreproducto;
        this.precio = precio;
    }}
let arrayArticulos = [];
let localAnterior = localStorage.getItem("articulo");  
if(localAnterior == null){
    arrayArticulos = [];
}else{
    arrayArticulos = JSON.parse(localStorage.getItem("articulo"));
    nuevosarticulos(arrayArticulos);
}

let jsoncargaproductos = JSON.stringify(arrayArticulos);
localStorage.setItem("articulo", jsoncargaproductos);

 // Creo el formulario 
let articulosJSON = JSON.parse(localStorage.getItem("articulo"));
let articulo = [];
if (localStorage.getItem("articulo")) {
    articulo = articulosJSON.map(
        (i) => new Articulo (i.nombreproducto, i.precio));
}
const cargarTabla = document.getElementById("formulario");

function sumararticulo(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombreproducto").value;
    let precioNeto = document.getElementById("precio").value;
    let H;


    //VALIDACIONES
    if(nombre == "" || precioNeto == ""){
        H=1;
    }else{
        H=0;
    }
    const ValidacionProductos = (res) =>{
        return new Promise((resolve, reject) => {
            if (res == 0  ){
            resolve("se ha anadido con exito");
            let nuevoart = new Articulo (nombre, precioNeto);
            articulo.push(nuevoart);
            localStorage.setItem("articulo", JSON.stringify(articulo));
        }else {
            reject("no se pudo anadir");    
        }
        })}

    ValidacionProductos(H).then((data) =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardo correctamente!',
            showConfirmButton: false,
            timer: 1500
        })
    }).catch ((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Faltan completar algunos campos!',
        })
    })
    clean();
    nuevosarticulos(articulo);
}

function nuevosarticulos (art) {
    let tablas = document.getElementById("tablecarrito");
    tablas.innerHTML="";
    art.forEach((i) => {
        let guardar = document.createElement("tr");
        guardar.innerHTML = `<tr>
        <td scope ="row">${i.nombreproducto}</td>
        <td>${i.precio}</td>
    </tr>`;
    tablas.append(guardar);
    });
}
function clean (){
    document.getElementById("nombreproducto").value = "";
    document.getElementById("precio").value = "";
}

//EVENTOS:
cargarTabla.addEventListener("submit", sumararticulo);


function cargapagina (isLoading = false) {
    const loadingContainer = document.getElementById("cargando");
    if (isLoading) {
    loadingContainer.classList.remove("visually-hidden");
    setTimeout(() =>{
        loadingContainer.classList.add("visually-hidden");},1400);}}

    document.getElementById("borrartodo").addEventListener("click", cargapagina);
