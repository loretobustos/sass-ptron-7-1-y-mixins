//alert("Hola chicos");

console.log("Hola Mundo");

var numero = 2;
var numeros = 4

console.log(numero + numeros);
console.log(2+2);


var z = 290;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
console.log(z , z);

var num = 15;
if (num >= 10) {
    console.log("el numero es mayor que 10");
};

//let    ES6 declaracion de variable de forma local. for if 
//var    nombre = valor;
//conts  ES6 iguales a las let. por declaraciON EN BLOQUE. array.

const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      console.log('¡Haz hecho clic en el botón!');
    });


const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function() {
document.body.style.backgroundColor = 'lightblue';
    });

