
//tarea

//crear una funcion que se va llamar getUUID para el patron adaptador
import { v4 as uuidv4 } from 'uuid';//importamos la libreria uuid
// const { v4: uuidv4 } = require('uuid');//importamos la libreria uuid


export const getUUID = () => {
    return uuidv4();
}

