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

module.exports = { Person, LocatorPersonProvider };
