/*Ex.5
Write a JavaScript function to merge two arrays and remove all
duplicate elements.
Test data:
var array1 = [1, 2, 3];
1
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]*/

const mergeArray = function (sampleArray1, sampleArray2) {
  // console.log(concatArr);

  return sampleArray1.concat(
    sampleArray2.filter((item) => {
      return sampleArray1.indexOf(item) === -1;
    })
  );
};
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
console.log(mergeArray(array1, array2));
