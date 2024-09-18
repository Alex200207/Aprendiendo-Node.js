
//tarea

//crear una funcion que se va llamar getUUID para el patron adaptador

const { v4: uuidv4 } = require('uuid');//importamos la libreria uuid

const getUUID = () => {
    return uuidv4();
}

module.exports = {
    getUUID,
}