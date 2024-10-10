//Promesas en JavaScript

export const getPokemonById = (id: string|number): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
    .then( ( resp ) => resp.json() )
    // .then( () => {throw new Error('No existe el pokemon')})
    .then( ( pokemon ) => pokemon.name );
}

// module.exports = getPokemonById;

//las promesas en cadena se pueden encadenar con el metodo then y catch para manejar errores
//ejeemplo de promesas en cadena
// getPokemonById(4)
//     .then( (pokemon) => console.log({pokemon}) )
//     .catch( (err) => console.log('Intenta de nuevo') );

//las promesas en paralelo se pueden encadenar con el metodo Promise.all
//ejemplo de promesas en paralelo
// Promise.all([getPokemonById(1), getPokemonById(2), getPokemonById(3)])
//     .then( (pokemons) => console.log({pokemons}) )
//     .catch( (err) => console.log('Intenta de nuevo') );


