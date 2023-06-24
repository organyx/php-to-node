class Person {
  constructor(prefix, givenName) {
    this.personName = {
      prefix,
      givenName
    };
  }

  setPrefix(prefix) {
    this.personName['prefix'] = prefix;
  }

  getGivenName() {
    return this.personName['givenName'];
  }

  getPrefix() {
    return this.personName['prefix'];
  }

  setGivenName(givenName) {
    this.personName['givenName'] = givenName;
  }
}

class LocatorPersonProvider {
  getPerson(persons, givenName) {
    return persons.find(person => person.getGivenName() === givenName);
  }

  filterPrefix(persons, prefix) {
    return persons.filter(person => person.getPrefix() === prefix);
  }
}

class PersonProviderFactory {
  static createProvider(type) {
    if (type === 'manual') {
      return new LocatorPersonProvider();
    } else {
      throw new Error('Invalid provider type');
    }
  }
}

module.exports = { Person, LocatorPersonProvider, PersonProviderFactory };
