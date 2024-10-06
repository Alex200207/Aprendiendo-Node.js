//node ya pose paquetes que se pueden importar no los tiene que descargar

//un ejemplo es fs que significa file system
//fs es un paquete que viene con node y se usa para leer archivos

const fs = require('fs');//fs es un paquete que viene con node y se usa para leer archivos

//el utf-8 es para que lo lea como texto
const data = fs.readFileSync('README.md', 'utf-8');//lee el archivo README.md

//el /ig es para que lo haga de manera global
//el replace es para reemplazar una palabra por otra
const newData = data.replace(/React/ig, 'Angular');
// lo que hace es reemplazar todas las palabras React por Angular 

//crear un nuevo archivo

//el primer parametro es el nombre del archivo
//el segundo parametro es el contenido del archivo
fs.writeFileSync('README-Angular.md',newData);

//ejecuta node app2.js en la terminal para que se cree el archivo README-Angular.md



