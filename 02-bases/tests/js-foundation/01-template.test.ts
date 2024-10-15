//archivo de pruebas
import { emailTemplate } from "../../src/js-foundation/01-template";


//agrupar pruebas
describe('js-foundation/01-template', () => {

        //prueba
    test('emailTemplate should be contain a greeting', () => {
        //esto es lo que la prueba va a evaluar

        //esperar que el emailTemplate contenga un saludo
        expect( emailTemplate).toContain('Hi, ');


    });

    test('emailTemplate should contain {{name}} and {{orderId}}', ()=> {
        //esperar que el emailTemplate contenga {{name}} y {{orderId}}

        //que es una exprecion regular
        expect(emailTemplate).toMatch(/{{name}}/);//esto es una expresion regular
        expect(emailTemplate).toMatch(/{{orderId}}/);

        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderId}}');
    })
        


});