import Hello from './Hello';

const _name = Symbol('name');

export default class Human extends Hello {

  constructor(name) {
    super();
    this[_name] = name;
  }

  say() {
    console.log(`Hello, ${this[_name]}!`);
  }
  
}
