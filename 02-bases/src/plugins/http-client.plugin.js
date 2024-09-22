const axios = require('axios');

const httpClientPlugin = {

    get: async(url) => {
        const resp = await axios.get(url);
         return await resp.data;
    }
}

module.exports = {
    http: httpClientPlugin
}
//creando un patron adaptador con el wrapper de axios
//ya si algun dia dicen que modifiquen por fetch 
//solo se modifica el plugin y no el codigo