import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
  //los mocks son funciones falsas que simulan el comportamiento de una funcion real

  const getUUID = () => "1234";
  const getAge = () => 20;
// asegurar que la funcion buildMakePerson retorne una funcion
  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    expect(typeof makePerson).toBe("function"); //esperamos a que el tipo de makePerson sea una funcion
  });
//asegurar que la funcion makePerson retorne un objeto
  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    const john = makePerson({
      id: getUUID(),
      name: "John",
      birthdate: "2000-01-01",
      age: getAge()
    });

    expect(john).toEqual({
      id: "1234",
      name: "John",
      birthdate: "2000-01-01",
      age: 20//esperamos que la edad sea 20
    
    });
  });
});
