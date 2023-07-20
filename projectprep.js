//create a counter function which has increment & getValue functionality

const privateCounter = () => {
  let count = 0;

  return {
    increment: (val = 1) => {
      count += val;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = privateCounter();
console.log(counter.getValue);
counter.increment();
console.log(counter.getValue());
//to view the closure!
console.dir(counter.increment);

const privateSecret = () => {
  const secret = "Fuu";

  return secret;
};

getSecret = privateSecret();
console.log(getSecret);

// Write a function that helps achieve multiply taking in (a)(b)
const multiply = (a) => {
  return (b) => {
    return a * b;
  };
};
const curriedM = multiply(3)(4);
console.log(curriedM);
//or Just
const multiplyX = (a) => (b) => {
  return a * b;
};
console.log(multiplyX(5)(6));

//Write a curry fn

const curry = function (fn) {
  var arity = fn.length;
  console.log("arity", arity);
  return function f1(...args) {
    if (args.length >= arity) {
      console.log("enough arguments");
      return fn(...args);
    } else {
      console.log("need more arguments");
      return function f2(...moreArgs) {
        var newArgs = args.concat(...moreArgs);
        return f1(...newArgs);
      };
    }
  };
};
const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);
curriedSum(1);
console.log(partiallyCurriedSum(4)(3));

//WRite a fn which gets an ARRAY & an Elements & returns the array with the element at the end
//------------------
// const append = function (arr, elem) {
//   arr.push(elem)
//   return arr
// }
// console.log(append[1,2], 16);
// const arrayOne = [1, 2, 3, 4, 5]
// const elementOne = 17;
//------------------
//but only with PUSH - we mutate the original array
//so we need to use SPREAD OP
const arrayO = [1, 2, 3];
const numO = 16;

const append = (arr, el) => {
  return [...arr, el]
};
const newNumbers = append(arrayO, 16)
console.log(newNumbers);
console.log(arrayO);

console.log(arrayO.includes(2));
console.log(arrayO.some(2));



