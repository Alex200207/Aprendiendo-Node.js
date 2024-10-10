//funciones flecha son una forma de escribir funciones de manera mas cort

interface User {
    id: number;
    name: string;
}

const users: User[] =  [
    {
        id:1,
        name: 'eddy'
    },
    {
        id:2,
        name: 'Karen'
    }

];


export const getUser = ( id : number, callback: (err?: string , user?: User) => void  ) => {
    const user = users.find( user => user.id === id)
    user ? callback(undefined,user)//si el usuario existe entonces no hay error
    : callback(`USUARIO no encontrado ${id}`);//si el usuario no existe entonces hay un error

}

