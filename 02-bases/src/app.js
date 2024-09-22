

// ! Referencias a la funcion de Factory y uso
// const { getAge, getUUID } = require('./plugins');//importamos el barril de plugins

//require es una funcion en la que voy a importar o voy a requerir
//un archivo en particular
// creo una constante que se llama templateExport y requiero el archivo 01-template.js
// const {emailTemplate} = require('./js-foundation/01-template.js')
// desestructuro la constante emailTemplate del archivo 01-template.js

// console.log(emailTemplate); // emailTemplate:

// const {getUser} = require('./js-foundation/04-Arrow');
//  const { buildMakePerson } = require('./js-foundation/05-factory');


// const buildPerson = buildMakePerson({ getUUID, getAge });

//  const obj = { name: 'Eddy', birthdate: '2002-07-12', country: 'NIC' }; 

// const john = buildPerson(obj);

// console.log(john); // { id: '1', name: 'Eddy', birthdate: '2002-07-12', age: 19 }
// const id = 1;

// getUser(id, function(err,user){//manejo de errores
// if(err)
// {
//     throw new Error(err);
// }
//     console.log(user)

// }); // { user: { id: 1, name: 'eddy' } }


// const id = 2;

// getUser( id, (err,user) => {
//     if(err)
//     {
//         throw new Error( err );
//     }
//     console.log( user )
// })
//-------------------------------Promises
// ! Referencias a la funcion de Promises y uso
// const getPokemonById = require('./js-foundation/06-promises');


//  getPokemonById(4)
//     .then( pokemon => console.log(pokemon) )
//     .catch( ( err ) => console.log('Intenta de nuevo') );
    



//-----------------------------------------------------------------------------------
const getPokemonById = require('./js-foundation/async-await')

const show = async() => {
    try{
        const data = await getPokemonById(4);
        console.log(data.name)
    }
    catch(err)
    {
        console.log("No existe el pokemon");
    }

}

show();








