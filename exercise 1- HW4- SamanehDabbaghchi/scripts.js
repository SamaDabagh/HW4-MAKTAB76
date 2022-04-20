/*Ex. 1
Write a JavaScript program to compute the exponent of a number
PS:use Recursion
*/

function exponentOfNumber(num, pow) {
  if (pow === 0) return 1;

  let result = num;
  result = result * exponentOfNumber(num, pow - 1);
  return result;
}

let number = 3;
let power = number;
console.log(exponentOfNumber(number, power));
