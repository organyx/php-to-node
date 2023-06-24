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

module.exports = { Person };
