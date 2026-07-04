const accountId = 14453;

let accountEmail = "shivam@gamil.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2; // not allowed

accountEmail = "hc@hc.com";
accountPassword= "212122";
accountCity ="Bangaluru";


console.log(accountId);

let accountState;
/*
prefer not to use "var" 
becoz of issue in block - scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
