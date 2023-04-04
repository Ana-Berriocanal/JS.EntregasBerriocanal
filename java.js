let precio_inicial = 0;
let cuotas;
let precio_final = 0;
let p_cuota = 0;

alert("CALCULADORA DE CUOTAS");
do{
    precio_inicial = prompt("Ingrese el precio del producto que desea calcular");
}while(precio_inicial<=0);
console.log("El precio inicial es: " + precio_inicial);

alert(" 3 cuotas: 10% interes , 6 cuotas: 25% interes , 12 cuotas: 65% interes");
do{
    cuotas = prompt("Ingrese la cantidad de cuotas que desea.");
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

total(cuotas);