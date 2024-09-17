//factory function es una funcion que crea una funcion

//creamos un objeto

const obj = { name: 'Eddy', birthdate: '2002-07-12', country: 'NIC' }; 

//creamos una funcion que se llama buildPerson
const buildPerson = ({ name, birthdate }) => {
    //regresamos una nueva persona
    return {
        id: new Date().getTime(),//obtener la fecha actual
        name ,
        birthdate  ,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()//calcular la edad
        //sintaxis 
        //new Date().getFullYear() - new Date(birthdate).getFullYear()
        //new Date().getFullYear() es el año actual
        //new Date(birthdate).getFullYear() es el año de nacimiento
        //new Date().getFullYear() - new Date(birthdate).getFullYear() es la edad
    }
}



const john = buildPerson( obj );//llamamos a la funcion buildPerson y le pasamos el objeto obj

console.log( john ); // { id: 1626170400000, name: 'Eddy', birthdate: '2002-07-12', age: 19 }   