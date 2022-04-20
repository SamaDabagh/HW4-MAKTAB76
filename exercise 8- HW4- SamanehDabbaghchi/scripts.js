/*Ex.8
Write a JavaScript function to get the month name from a
particular date. Go to the editor
Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
2
Output :
"October"
"November"*/

const nameOfMonth = function (month) {
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
};
let date = new Date();
currentMonth = date.getMonth();
console.log(nameOfMonth(currentMonth));
