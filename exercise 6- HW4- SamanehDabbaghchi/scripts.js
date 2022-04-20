/*Ex.6
Create a function Compute the sum of the rounded numbers in an
array.
Test data:
const numbers = [15.5, 2.3, 1.1, 4.7];
output=24
use reduce*/

const sumOfRoundNum = function (sampleArray) {
  return sampleArray.reduce((sum, element) => {
    sum += element;
    return Math.round(sum);
  }, 0);
};
const numbers = [15.5, 2.3, 1.1, 4.7];
console.log(sumOfRoundNum(numbers));
