let preguntas = [
    "¿Cuál es la capital de Italia?",
    "¿En qué año se fundó la ONU?",
    "¿Cuál es el río más largo del mundo?"
  ];
  
  let respuestaCorrecta = ["roma", "1945", "amazonas"];
  let respuestaUsuario = [];
  
  function realizarEncuesta() {
    for (let i = 0; i < preguntas.length; i++) {
      let respuesta = prompt(preguntas[i]);
      respuestaUsuario.push(respuesta.toLowerCase());
    }
    
    verificarRespuesta(); // Llama a la función después de realizar la encuesta
  }
  
  function verificarRespuesta() {
    for (let i = 0; i < preguntas.length; i++) {
      if (respuestaUsuario[i] === respuestaCorrecta[i]) {
        console.log("¡Correcto! Has respondido bien a la pregunta: " + preguntas[i]);
      } else {
        console.log("Incorrecto. La respuesta correcta a la pregunta '" + preguntas[i] + "' es: " + respuestaCorrecta[i]);
      }
    }
  }
  
  realizarEncuesta();
  