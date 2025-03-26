// creation of variables
const form = document.querySelector("form");
const button = document.getElementById("button");
const price = 0.21;



form.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    // distance and age moved inside the event listener to allow it to be updated
    const distance = document.getElementById("distance").value;
    const age = document.getElementById("age").value;
    console.log(AR);
    const total = (distance * price).toFixed(2);
    let finalPrice;

    if (age < 18) {
        finalPrice = (total * 0.8).toFixed(2);
    } else if (age > 65) {
        finalPrice = (total * 0.6).toFixed(2);
    } else {
        finalPrice = total;
    }

    if(AR === "andata-ritorno"){
        finalPrice = finalPrice * 2;
    }

    alert("Il prezzo del tuo biglietto è di: " + finalPrice + "€");
});