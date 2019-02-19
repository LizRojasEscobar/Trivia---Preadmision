let Boton =document.getElementById('Boton1');

Boton.addEventListener('click', function (){
  Boton.style.display = 'none';

})


function obtenerNombre (){
let nombre =prompt("Ingrese su nombre: ");
document.getElementById("saludo").innerHTML = `Hola ${nombre},\n <br> ¿Qué tema prefieres?`; 
document.getElementById("cultura").style = "block";
document.getElementById("entretenimiento").style="block"

//document.write ('Hola '+ nombre + " escoge la trivia que quieres jugar");

}









