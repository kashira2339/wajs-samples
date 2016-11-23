import Human from './Human'
import PerfectHuman from './PerfectHuman'
import { Dog, Cat } from './Animal'
import { logger } from './logger'

const OWNER_NAME = 'kashira2339';

// OWNER_NAME = 'new name';
// SyntaxError: src/index.js: "OWNER_NAME" is read-only while parsing file: src/index.js

if (!!Human){

  logger({
    prefix: 'Human:',
    callback() {
      new Human(OWNER_NAME).say();
    }
  });

  logger({
    callback() {
      new Human('...').say();
    }
  });

  logger({
    prefix: 'Dog:',
    callback() {
      new Dog().say();
    }
  });

  logger({
    prefix: 'Cat:',
    callback() {
      new Cat().say();
    }
  });

  let phop = ['Nakata!', 'Nakata!', 'Nakata!', 'Nakata!'];
  
  logger({
    prefix: 'PerfectHuman:',
    callback() {
      new PerfectHuman().say();
    }
  }, ...phop);
  
}

// human.say();
//ReferenceError: hello is not defined
