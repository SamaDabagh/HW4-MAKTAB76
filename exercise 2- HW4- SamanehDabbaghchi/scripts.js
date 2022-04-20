/*Ex. 2
Write a JavaScript program to compute the sum of an array of
integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21*/

const sumOfArray = function (sampleArray) {
  return sampleArray.reduce((sum, currentItem) => {
    return sum + currentItem;
  }, 0);
};

let array = [1, 2, 3, 4, 5, 6];
console.log(sumOfArray(array));
