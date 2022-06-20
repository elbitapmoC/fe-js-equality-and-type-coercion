// TRUE
console.log('5' == 5); //loose equality, only comparing values
// ^ Implicit type coercion -  converts types into numbers
// Ex:
console.log(false == 0); // T

// FALSE
console.log('5' === 5); //strict equality, comparing type and values

console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Boolean(1)); // false
console.log(Boolean(0)); // true
console.log(String(0)); // "0"

// NaN does NOT equal to anything
console.log(NaN == NaN); // false
// b/c of this, anything that equates to NaN will be false
console.log('ABC' == NaN); // false

// null = undefined and nothing else
console.log(null == undefined);
console.log(null == ''); // f
console.log(null == 0); // f
console.log(null == []); // f

// checks for null && undefined at the same time.
// MAKE SURE IT'S ==, and NOT ===
if(null == undefined){
    // do something here
}

const emptyArr = [];
const obj = {};
console.log({} == {});
console.log(obj == obj);
console.log(emptyArr == emptyArr);