import Human from './Human'
import PerfectHuman from './PerfectHuman'
import { Dog, Cat } from './Animal'

const OWNER_NAME = 'kashira2339';

// OWNER_NAME = 'new name';
// SyntaxError: src/index.js: "OWNER_NAME" is read-only while parsing file: src/index.js

if (Human){

  logger({
    prefix: 'Human:',
    callback: () => {
      new Human(OWNER_NAME).say();
    }
  });

  logger({
    callback: () => {
      new Human('...').say();
    }
  });

  logger({
    prefix: 'Dog:',
    callback: () => {
      new Dog().say();
    }
  });

  logger({
    prefix: 'Cat:',
    callback: () => {
      new Cat().say();
    }
  });

  logger({
    prefix: 'PerfectHuman:',
    callback: () => {
      new PerfectHuman().say();
    }
  }, 'Nakata!', 'Nakata!', 'Nakata!', 'Nakata!');
  
}

// human.say();
//ReferenceError: hello is not defined

function logger({ prefix='???:', callback }, ...options ) {
  console.log(prefix);
  callback();
  console.log(...options, '\n');
}
