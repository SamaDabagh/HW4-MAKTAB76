/*Ex.10
Write a JavaScript function to remove the first occurrence of
a given 'search string' from a string.
Test Data:
console.log(remove_first_occurrence("The quick brown fox jumps
over the lazy dog", 'the'));
Output:
"The quick brown fox jumps over lazy dog"
*/

const remove_first_occurrence = function (sampleString, SampleWord) {
  let modifiedStr = [];
  return sampleString
    .split(" ")
    .filter((item) => {
      if (item !== SampleWord) {
        modifiedStr.push(item);
        return modifiedStr.reduce((concat, item) => {
          return concat + item;
        }, "");
      }
    })
    .join(" ");
};
let str = "The quick brown fox jumps over the lazy dog";
let word = "the";
console.log(remove_first_occurrence(str, word));
