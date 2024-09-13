//desestructuracion de objetos

//process es como su nombre lo indica es un proceso'
//de node.js que esta corriendo el cual tiene mucha informacion
//de la computadora informacion sobre los procesos que se estan ejecutando
//librerias que se estan utilizando ,versiones de node,argumentos que se reciben
//desde afuera .ect

// console.log(process.env );

const { SHELL,npm_lifecycle_script} = process.env;

// console.table({SHELL,npm_lifecycle_script});

//env es una propiedad de process que me permite acceder a las variables de entorno
const heroes = ['flash','superman','batman','wonderwoman'];

const [,,batman] = heroes;

