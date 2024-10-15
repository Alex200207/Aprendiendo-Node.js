//describe es una funcion que agrupa pruebas

//A A A


describe("app", () => {//describe es una funcion que agrupa pruebas
  test("should be 30", () => {//test es una funcion que me permite hacer una prueba

    //A. Arrange
    const number = 10;
    const number2 = 20;


    //2. Act

    const result = number + number2;//probando hac

    //3. Assert
    expect(result).toBe(30);//esperamos el resultado de la suma

    expect(true).toBe(true);

  });
});
