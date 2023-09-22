const accountId = 14664;
let accountEmail = "xyz@gmail.com";
var accountPass = "12345";
accountCity = "jaipur";
let accountState;

// accountId = 2;

console.log(accountId);

/*
prefer not to use var because of issue in  block scope and functional scope
*/

accountEmail = "abc@gmail.com";
accountPass = "61564";
accountCity = "Noida";

console.table([accountId, accountEmail, accountPass, accountCity,accountState]);
