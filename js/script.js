// creation of variables
const distance = document.getElementById("distance").value;
const age = document.getElementById("age").value;
const button = document.getElementById("button");
const price = 0.21;

button.addEventListener("click", function() {
    const total = (distance * price).toFixed(2);
    let finalPrice = 0;

    if (age < 18) {
        finalPrice = total * 0.8;
    } else if (age > 65) {
        finalPrice = total * 0.6;
    } else {
        finalPrice = total;
    }

    console.log(finalPrice);
});