"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroeById = void 0;
const hero_1 = require("../../data/hero");
const findHeroeById = (id) => {
    return hero_1.heroes.find((heroes) => heroes.id === id);
};
exports.findHeroeById = findHeroeById;
