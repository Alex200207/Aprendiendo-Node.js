import {getUser} from '../../src/js-foundation/03-Callbacks';


describe('js-foundation/03-callbacks.ts', () => {

    test('getUser should return a error', (done) => {// done es una funcion que se pasa como argumento y se ejecuta cuando la prueba termina

        
        const id = 10;
        getUser(id , (err, user)=> {
            expect(err).toBe(`USUARIO no encontrado ${id}`);//USUARIO no encontrado 10
            expect(user).toBeUndefined();

            done();//el done se manda a llamar cuando se sabe qye se van a obtener los resultados
        })
    });
});