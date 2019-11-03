// * Regular Functions
function functionalAddNums(num1: number, num2: number): number {
  return num1 + num2;
}

// * Arrow Functions
// Method 1: Write a normal arrow function and type the props, then add a ":" with the return type before the "=>"
const addNums = (num1: number, num2: number): number => {
  return num1 + num2;
};

// Method 2: Type your function name to an arrow function with full types, then set it equal to your arrow function
const multiplyNums: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 * num2;
};


// * Passing Objects
// Destructuring Objects: For destructuring, you need to provide the full object with its values typed even if you're just grabbing properties off of it
const destructuringExample = ({ num1, num2 }: { num1: number, num2: number }): number => {
  return num1 + num2;
};

// Regular Object Typing: You still provide the entire object being passed, even if not all the values are used
const objectExample = (numsObj: { num1: number; num2: number }): number => {
  return numsObj.num1 + numsObj.num2;
};