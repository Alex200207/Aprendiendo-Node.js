//factory function es una funcion que crea una funcion

// const {getAge, getUUID} = require('../plugins');//importamos el barril de plugins

// const { getUUID} = require('../plugins/get-id-plugin');//importamos la libreria uuid
// //uuid es una libreria que nos permite generar identificadores unicos

// const {getAge }= require('../plugins/get-age.plugin');//importamos la libreria get-age
// //get-age es una libreria que nos permite calcular la edad

//creamos un objeto
interface buildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface Person {
    id: string;
    name: string;
    birthdate: string;
    age: number;
}

 export const buildMakePerson = ({ getUUID,getAge }: buildMakePersonOptions) => {

    
return ({ name, birthdate }: Person ) => {
    //regresamos una nueva persona
    return {
        id:getUUID() ,//generamos un id unico
        name ,
        birthdate  ,
        age: getAge( birthdate )//calculamos la edad
        // age: new Date().getFullYear() - new Date(birthdate).getFullYear()//calcular la edad
        //sintaxis 
        //new Date().getFullYear() - new Date(birthdate).getFullYear()
        //new Date().getFullYear() es el año actual
        //new Date(birthdate).getFullYear() es el año de nacimiento
        //new Date().getFullYear() - new Date(birthdate).getFullYear() es la edad
    }
}
}



// const john = buildPerson( obj );//llamamos a la funcion buildPerson y le pasamos el objeto obj

// console.log( john ); // { id: 1626170400000, name: 'Eddy', birthdate: '2002-07-12', age: 19 }   

// module.exports = {
//     buildMakePerson,
// }