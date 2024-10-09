
import { heroes } from '../../data/hero';

const findHeroeById = (id: number) => {
    return heroes.find((heroes) => heroes.id === id);
  };

  
export {
    findHeroeById
}