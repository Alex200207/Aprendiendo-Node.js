//async await
const {http} = require('../plugins/http-client.plugin');



const getPokemonId = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   try {
//     const response = await axios.get(`${url}${id}`);
//     const pokemon = response.data;
//     return pokemon;
//   } catch (err) {
//     console.log(err, 'No existe el pokemon');
//   }
    const pokemon = await http.get( url )

    return pokemon.name;
};

module.exports = getPokemonId;
