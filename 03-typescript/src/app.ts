import { findHeroeById } from './data/services/hero.service';



const hero = findHeroeById(2);
console.log(hero?.name ??  'hero not found');
