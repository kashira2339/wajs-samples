import Hello from './Hello'

export class Dog extends Hello {
  say() {
    super.say();
    console.log('bow!');
  }
}

export class Cat extends Hello {
  say() {
    console.log('meow.');
  }
}
