import {heroes} from '../../src/js-foundation/02-desestructuracion';
describe('js-foundation/02-desestructuracion', () => {


    test('heroes debe tener a flash superman batman wonderwoman', () => {

        //estos contain son case sensitive
        expect(heroes).toContain('flash');
        expect(heroes).toContain('superman');

    });

    test('el primer heroe debe ser flash y el segundo debe ser superman', () => {
        
        const [flash, superman] = heroes;//destructuracion de arreglos
        expect(flash).toBe('flash');
        expect(superman).toBe('superman');


    });


});