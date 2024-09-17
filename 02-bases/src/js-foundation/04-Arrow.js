//funciones flecha son una forma de escribir funciones de manera mas cort

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


const getUser = ( id , callback ) => {
    const user = users.find( user => user.id === id)
    user ? callback(null,user)//si el usuario existe entonces no hay error
    : callback(`USUARIO no encontrado ${id}`);//si el usuario no existe entonces hay un error

}

module.exports ={
    getUser,
}
