const { Person, PersonProviderFactory } = require('./script.js');

let person = new Person();
person.setPrefix('Mr.');
person.setGivenName('John');
let person1 = new Person();
person1.setPrefix('Ms.');
person1.setGivenName('Jane');
let person2 = new Person();
person2.setPrefix('Ms.');
person2.setGivenName('Valery');
let person3 = new Person();
person3.setPrefix('Mr.');
person3.setGivenName('Vincent');
let person4 = new Person();
person4.setPrefix('Mx.');
person4.setGivenName('Charlie');

let persons = [person, person1, person2, person3, person4];

let config = 'manual';
let provider = PersonProviderFactory.createProvider(config);
if (provider == null) {
  console.log('Provider is null');
  process.exit();
}
let personResult = provider.getPerson(persons, 'John');
let personsMs = provider.filterPrefix(persons, 'Ms.');

console.log(personResult.getPrefix());
console.log(personResult.getGivenName());
console.log('Ms(s):');
personsMs.forEach(personMs => {
  console.log(personMs.getPrefix());
  console.log(personMs.getGivenName());
});
