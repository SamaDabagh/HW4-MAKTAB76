/*Ex.9
Write a JavaScript function to hide email addresses to protect
from unauthorized users.
Test Data:
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

const protectEmail = function (emailAddress) {
  let splitStr = emailAddress.split("@");
  return splitStr[0].slice(0, splitStr[0].length / 2) + "...@" + splitStr[1];
};
let email = "robin_singh@example.com";
console.log(protectEmail(email));
