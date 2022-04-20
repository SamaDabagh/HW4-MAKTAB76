/*Ex.7
Write a JavaScript function to get the current date. Go to the
editor
Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014".*/

const changeSeperatorOfDate = function (date, seperator) {
  return `"${date.getDate()}${seperator}${
    date.getMonth() + 1
  }${seperator}${date.getFullYear()}"`;
};
let date = new Date();
console.log(date);
let seperator = "/";
console.log(changeSeperatorOfDate(date, seperator));
