export const logger = ({ prefix='???:', callback }, ...options ) => {
  console.log(prefix);
  callback();
  console.log(...options);
};
