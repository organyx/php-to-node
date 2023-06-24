const { Person, LocatorPersonProvider, PersonProviderFactory } = require('./script');

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

  it('should set prefix and given name with constructor', () => {
    const person = new Person('Mr', 'John');
    expect(person.getPrefix()).toEqual('Mr');
    expect(person.getGivenName()).toEqual('John');
  });
});

describe('Locator Person Provider', () => {
  it('should get person', () => {
    const person = new Person('Mr', 'John');
    const personProvider = new LocatorPersonProvider();
    const persons = [person];
    expect(personProvider.getPerson(persons, 'John')).toEqual(person);
  });

  it('should not get person', () => {
    const person = new Person('Mr', 'John');
    const personProvider = new LocatorPersonProvider();
    const persons = [person];
    expect(personProvider.getPerson(persons, 'Jane')).toEqual(undefined);
  });

  it('should filter prefix', () => {
    const person = new Person('Mr', 'John');
    const personProvider = new LocatorPersonProvider();
    const persons = [person];
    expect(personProvider.filterPrefix(persons, 'Mr')).toEqual([person]);
  });

  it('should not filter prefix', () => {
    const person = new Person('Mr', 'John');
    const personProvider = new LocatorPersonProvider();
    const persons = [person];
    expect(personProvider.filterPrefix(persons, 'Mrs')).toEqual([]);
  });

  it('should filter prefix with multiple persons', () => {
    const person = new Person('Mr', 'John');
    const person2 = new Person('Mrs', 'Jane');
    const personProvider = new LocatorPersonProvider();
    const persons = [person, person2];
    expect(personProvider.filterPrefix(persons, 'Mr')).toEqual([person]);
  });
});

describe('Person Provider Factory', () => {
  it('should create locator person provider', () => {
    const personProvider = PersonProviderFactory.createProvider('manual');
    expect(personProvider instanceof LocatorPersonProvider).toEqual(true);
  });

  it('should throw error', () => {
    expect(() => PersonProviderFactory.createProvider('invalid')).toThrow('Invalid provider type');
  });
});
