class Person {
  constructor() {
    this.personName = {};
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

module.exports = { Person };
