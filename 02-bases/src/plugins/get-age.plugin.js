const getAgePlugin = require('get-age');//importamos la libreria get-age

const getAge = (birthdate) => {//creamos una funcion que se llama getAge
    if(!birthdate) return new Error('birthdate is required');//si no hay fecha de nacimiento entonces regresamos un error
    return getAgePlugin(birthdate);//calculamos la edad
}


module.exports = {//exportamos el modulo
    getAge,
    
}