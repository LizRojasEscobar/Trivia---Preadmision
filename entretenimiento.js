function Pregunta(texto, respuesta, puntaje){
 this.texto =texto;
 this.respuesta= respuesta;
 this.puntaje =puntaje;

}

let pregunta1 =new Pregunta("¿Cuál es la película más vista de Netflix? \n1. A todos los Chicos de los que me Enamoré \n2. El stand de los besos \n3. Roxanne ", "2", 10);
let pregunta2 =new Pregunta("¿Cuál es el álbum latino más vendido de la historia? \n1. 'Supernatural' - Santana \n2. 'Recuerdos' - Juan Gabriel  \n3. 'Ricky Martin' -Ricky Martin", "2", 100);
let pregunta3 =new Pregunta("¿Cuál es la película más taquillera del último siglo? \n1. The Avengers \n2. Avatar \n3. Star Wars: The Force the Awakens" ,"3", 10);



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

