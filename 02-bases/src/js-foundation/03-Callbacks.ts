//callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de un proceso asincrono

interface User {
    id: number;
    name: string;
    
}

const users: User[] = [
    {
        id:1,
        name: 'eddy'
    },
    {
        id:2,
        name: 'Karen'
    }

];

export function getUser( id: number , callback:(err?: string, user?: User) => void){
    const user = users.find(function(user){
        return user.id === id
    })
    if( !user ){
        return callback(`USUARIO no encontrado ${id}`);
    }
    return callback(undefined,user);
    //retornar un callback nullo
    //es decir que no hay error
    //sintaixs de callback (error,usuario)
}









