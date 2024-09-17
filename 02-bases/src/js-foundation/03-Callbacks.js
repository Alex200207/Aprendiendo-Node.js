//callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de un proceso asincrono

const users = [
    {
        id:1,
        name: 'eddy'
    },
    {
        id:2,
        name: 'Karen'
    }

];

function getUser( id , callback ){
    const user = users.find(function(user){
        return user.id === id
    })
    if( !user ){
        return callback(`USUARIO no encontrado ${id}`);
    }
    return callback(null,user);
    //retornar un callback nullo
    //es decir que no hay error
    //sintaixs de callback (error,usuario)
}



module.exports = {
    getUser,
  
}






