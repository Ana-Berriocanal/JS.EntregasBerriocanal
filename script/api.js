let Sinstock = document.getElementById("PSS");
    Sinstock.innerHTML="";
    function ProductosViejos(){
        fetch("./../data/posteos.json")
        .then( (res) => (res).json())
        .then( (data) => {
                data.forEach((pieza) =>{
                    let sumar = document.createElement("tr");
                    sumar.innerHTML=
                    `<td scope="row">${pieza.id}</td>
                    <td>${pieza.nombre}</td>
                    <td>${pieza.precio}</td>`
                    Sinstock.append(sumar);
                });
            })
        
}
ProductosViejos();