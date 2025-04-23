console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);

//variables en js
let edad = 30
let edad2 = 35
var nombre = "juan"
let numeroGrande = 445454545
const rut = 2343434



//tipos de datos
let texto = "texto"
let numero = 2
let esEstudiante = true 
let nulo = null
let indefinido;


//operadores

let numero01 = 20
let numero02 = 20
let resultado = numero01 + numero02
var suma = 10 + 5
var multiplicacion = 10 * 5
var modulo = 10 % 5

// estructuras de control 
// if else

let nota = 95
if (nota >=90){
    console.log("muy buena nota")
}else if (nota >=50){
    console.log("nota normal")
}

// bucles

for (let indice = 0; indice < 10; indice++ ){
    console.log("indice-", indice)
    // alert ("dando vueltas") ejemplo de ventana emergente de aviso
}

//manipulacion del DOM

const div_test = document.getElementById("div_test")
div_test.innerHTML = "<p> hola desde js</p>"

const div = document.getElementById("div")
const btn = document.getElementById("btn")

btn.addEventListener ('click', () -> ) {
    div.style.backgroundColor = 'red'
}