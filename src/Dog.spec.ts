import Dog from './Dog';

describe('Dog', () => {
  it('It should show dog information', () => {
    const dog = new Dog('Milo');
    expect(dog.petInfo()).toEqual(`This is a Border collie, its name is Milo`);
  });
});
