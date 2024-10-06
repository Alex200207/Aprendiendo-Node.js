const winston = require('winston');
const {combine, timestamp, json} = winston.format;


//esta es la configuracion basica de nuestro patron adaptador
const logger = winston.createLogger({
    level: 'info',
    format: combine(//esto es para que se muestre en formato json 
      timestamp(),//esto es para que se muestre la fecha en la que se genero el error
      json()//esto es para que se muestre en formato json
    ),
    // defaultMeta: { service: 'user-service' },//esto es util porque asi sabremos que archivo dio error
    transports: [
      //
      // - Write all logs with importance level of `error` or higher to `error.log`
      //   (i.e., error, fatal, but not other levels)
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),//crea un archivo error.log solo lo va poner con el nivel de error
      new winston.transports.File({ filename: 'combined.log' }),//
    ],
  });

  logger.add(new winston.transports.Console({//esto es para que se muestre en consola
    format: winston.format.simple(),
  }));




//todo lo que se haga y no ha sido exportado es privado en este modulo
//crearemos una factory function
//recivira cual es el servicio en el cual se etsra utilizando mi logger
module.exports = function builLogger(service){

    return {//retornamos un objeto con dos metodos
        log: (message) => { //este metodo recibe un mensaje
            logger.log('info', {message, service} ); //asi podremos identificar que servicio esta 
            //sucediendo el errpr en que archivo 
        },
        error: (message) => { //este metodo recibe un mensaje 
            logger.error('error', 
              {
                message, 
                service,
                at: new Date().toISOString()//mostremos la fecha en la que se genero el error
              } ); //sistema de erorres  
            
        }
    }
}
  
