interface Hero{//una interface es un molde o una restriccion 
    //para que un objeto lusca de cierta manera
    id: number,
    name: string,
    owner: string

}


const heroes : Hero[] = [
    {
      id: 1,
      name: "Batman",
      owner: "DC",
    },
  
    {
      id: 2,
      name: "Spiderman",
      owner: "Marvel",
    },
  
    {
      id: 3,
      name: "Superman",
      owner: "DC",
    },
  ];

export {
    heroes
}