const { Person } = require('./script');

describe('Person Class', () => {
  it('should set prefix', () => {
    const person = new Person();
    person.setPrefix('Mr');
    expect(person.getPrefix()).toEqual('Mr');
  });

  it('should set given name', () => {
    const person = new Person();
    person.setGivenName('John');
    expect(person.getGivenName()).toEqual('John');
  });

  it('should set prefix and given name', () => {
    const person = new Person();
    person.setPrefix('Mr');
    person.setGivenName('John');
    expect(person.getPrefix()).toEqual('Mr');
    expect(person.getGivenName()).toEqual('John');
  });
});
