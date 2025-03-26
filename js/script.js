// creation of variables
const form = document.querySelector("form");
const button = document.getElementById("button");
const price = 0.21;

const nameRecap = document.getElementById("name-recap");
const distanceRecap = document.getElementById("distance-recap");
const ageRecap = document.getElementById("age-recap");
const genderRecap = document.getElementById("gender-recap");
const ARRecap = document.getElementById("AR-recap");
const priceRecap = document.getElementById("price-recap");

form.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    // distance and age moved inside the event listener to allow it to be updated
    const distance = document.getElementById("distance").value;
    const age = document.getElementById("age").value;
    
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const AR = document.querySelector('input[name="A-R"]:checked').value;

    const total = (distance * price).toFixed(2);
    let finalPrice;

    if (age < 18) {
        finalPrice = (total * 0.8).toFixed(2);
    } else if (age > 65) {
        finalPrice = (total * 0.6).toFixed(2);
    } else {
        finalPrice = total;
    }

    if(AR === "AR"){
        finalPrice = (finalPrice * 2).toFixed(2);
    }

    let finalDistance = distance;
    if(AR === "AR"){
        finalDistance = distance * 2;
    }

    nameRecap.innerHTML = name;
    distanceRecap.innerHTML = finalDistance;
    ageRecap.innerHTML = age;
    genderRecap.innerHTML = gender;
    ARRecap.innerHTML = AR;
    priceRecap.innerHTML = finalPrice;
});