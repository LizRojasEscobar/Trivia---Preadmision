
function Pregunta(texto, respuesta, puntaje){
 this.texto =texto;
 this.respuesta= respuesta;
 this.puntaje =puntaje;

}

let pregunta1 =new Pregunta("¿Cuál no es una Maravilla del Mundo? \n1. Isla Jeju \n2. Mar Muerto \n3. Islas Galápagos", "1", 100);
let pregunta2 =new Pregunta("¿Cuál de las siguientes ciudades se ubica en Europa? \n1. Helsinki \n2. Budapest  \n3. Manila" , "2", 100);
let pregunta3 =new Pregunta("¿Qué país es el menos poblado del mundo? \n1. Tuvalu \n2. Ciudad del Vaticano \n3. Nauru" ,"2", 100);



let preguntas =[pregunta1,pregunta2,pregunta3];

let puntos=0;


function realizarPregunta(){

for (posicion =0;posicion<=2; posicion++){


	lapregunta = preguntas[posicion]
  		

  			let miRespuesta = prompt ("Escribe el número que tenga la opción correcta: \n" + lapregunta.texto)
  			if (miRespuesta ==lapregunta.respuesta){
  				alert ("Ganaste!! \n \n"+ lapregunta.puntaje +" puntos");
  				puntos=puntos + lapregunta.puntaje;

  			} else 
  			{
  			alert ("No es correcto")

	}
}

document.getElementById ("ValorPuntaje").innerHTML= puntos;
}

