
//Tarea contador de palabras
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split('').length
//split es un metodo de los strings que devuelve un array con todas las palabras del string

const reactWordCount = content.match(/React/gi ?? []).length//si no encuentra ninguna palabra devuelve un array vacio y se le pone un length para que devuelva 0

//content.match(/React/ig) devuelve un array con todas las palabras que coinciden con la expresion regular
//las expresiones regulares se usan para buscar patrones en strings
//ig significa que la busqueda es case insensitive y global 
//insensitive significa que no distingue entre mayusculas y minusculas


//match es un metodo de los strings que devuelve un array con todas las coincidencias de la expresion regular
//ejem de expresion regular

// /React/gi es una expresion regular que busca la palabra React en un string
// /React/ig
// /React/ig.test('React') //true
// /React/ig.test('react') //true
// /React/ig.test('REACT') //true
//test es un metodo de las expresiones regulares que devuelve true si la expresion regular coincide con el string



console.log('Palabras:',wordCount);
console.log('Palabras React: ',reactWordCount)