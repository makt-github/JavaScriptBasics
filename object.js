
var customer1 = {id:12, name:"Tayef", phone:9865};

console.log(customer1);

var cusId = customer1.id ; //  one way

console.log(cusId);

var cusName = customer1["name"]; // second way
console.log(cusName);


var phoneNo = "phone" ;
console.log(customer1[phoneNo]); // Third way to access any property of an object

// Update Property value to an object

customer1.phone = 8825 ;
customer1["name"]="Kadir" ;
var cusNewId = customer1.id = 64;
customer1[cusNewId];


console.log(customer1);