/* Ex.3
Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '
*/
const upercaseOfFirstChar = function (str) {
  return str
    .split(" ")
    .map((element) => {
      // console.log(element.slice(1).toString());
      return element.split("")[0].toUpperCase() + element.slice(1).toString();
    })
    .join(" ");
};
let newString = "the quick brown fox";
console.log(upercaseOfFirstChar(newString));
