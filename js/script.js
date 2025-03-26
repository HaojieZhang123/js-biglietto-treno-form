// creation of variables
let distance;
let age;
let price = 0.21;

while (isNaN(distance) || distance < 0) {
    distance = prompt("Enter the distance in km");
}
while (isNaN(age) || age < 0) {
    age = prompt("Enter your age");
}
console.log("Distance: " + distance + " km");
console.log("Age: " + age + " years");

// calculation of the price
let totalPrice = distance * price;

// calculation of the discount
if (age < 18) {
    totalPrice = totalPrice * 0.8;
} else if (age > 65) {
    totalPrice = totalPrice * 0.6;
}

// output of the price
console.log("The price of the ticket is: " + totalPrice.toFixed(2) + "€");