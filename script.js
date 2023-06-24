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
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].getGivenName() == givenName) {
        return persons[i];
      }
    }
  }

  filterPrefix(persons, prefix) {
    let filteredPersons = [];
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].getPrefix() == prefix) {
        filteredPersons.push(persons[i]);
      }
    }
    return filteredPersons;
  }
}

module.exports = { Person, LocatorPersonProvider };
