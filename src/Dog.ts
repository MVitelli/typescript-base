class Dog {
  constructor(private name: string = '', private breed: string = 'Border collie') {}

  petInfo() {
    return `This is a ${this.breed}, its name is ${this.name}`;
  }
}

export default Dog;
