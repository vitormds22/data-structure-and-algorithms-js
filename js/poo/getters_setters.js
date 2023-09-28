class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }
}

let lotrChar = new Person('Gandalf')
console.log(lotrChar.name)

lotrChar.name = 'Frodo'
console.log(lotrChar.name)

lotrChar._name = 'Sam'
console.log(lotrChar.name)
