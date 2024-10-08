const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },

  {
    id: 2,
    // name: "Spiderman",
    owner: "Marvel",
  },

  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
];

const findHeroeById = (id: number) => {
  return heroes.find((heroes) => heroes.id === id);
};
const hero = findHeroeById(2);
console.log(hero?.name ??  'hero not found');
