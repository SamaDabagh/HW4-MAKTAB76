/*Ex.4
Write a JavaScript function to remove. 'null', '0', '""',
'false', 'undefined' and 'NaN' values from an array.
*/

const filterFalsyValue = function (sampleArray) {
  return sampleArray.filter((element) => {
    if (element) {
      return element;
    }
  });
};
let array = [
  "Samaneh",
  null,
  "Dabbaghchi",
  "studies",
  undefined,
  "",
  false,
  "JavaScript",
];
console.log(filterFalsyValue(array));
