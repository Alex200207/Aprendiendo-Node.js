const axios = require('axios');

const httpClientPlugin = {

    get: async(url) => {
        const {data} = await axios.get(url);
         return data;
    }
}

module.exports = {
    http: httpClientPlugin
}
//creando un patron adaptador con el wrapper de axios
//ya si algun dia dicen que modifiquen por fetch 
//solo se modifica el plugin y no el codigo