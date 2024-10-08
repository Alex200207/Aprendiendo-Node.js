"use strict";
var _a;
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
const findHeroeById = (id) => {
    return heroes.find((heroes) => heroes.id === id);
};
const hero = findHeroeById(2);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'hero not found');
