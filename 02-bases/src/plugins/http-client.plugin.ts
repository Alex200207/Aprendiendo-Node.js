import axios from 'axios';

export const httpClientPlugin = {

    get: async(url: string) => {
        const {data} = await axios.get(url);
         return data;
    }
}


//creando un patron adaptador con el wrapper de axios
//ya si algun dia dicen que modifiquen por fetch 
//solo se modifica el plugin y no el codigo