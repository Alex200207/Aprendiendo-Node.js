//creamos este archivo de barril para exportar todos los plugins
// y no tener que importar uno por uno
const {http} = require('./http-client.plugin');//importamos la libreria axios
const { getUUID } = require('./get-id-plugin');//importamos la libreria uuid
const { getAge } = require('./get-age.plugin');//importamos la libreria get-age
const buildLogger = require('../plugins/logger.plugin');//importamos la libreria logger 
module.exports = {
    getUUID,
    getAge,
    http,
    buildLogger,
}
