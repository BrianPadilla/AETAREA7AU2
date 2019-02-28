function Tarea(texto, callback) {
    console.log(`Empezando mi tarea de: ${texto}`);
    callback();
  }
  function Finalizada(){
    console.log('Tarea Finalizada');
  }
  Tarea('Aplicaciones Empresariales', Finalizada);