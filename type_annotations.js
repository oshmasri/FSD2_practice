"use strict";
let hotel_name = "Food Park";
let rating = 4.5;
let isFoodTasty = false;
if (rating > 3) {
    isFoodTasty = true;
}
function hotel_details(hotel_name, rating) {
    return `${hotel_name} has ${rating} rating.`;
}
let food_items = ["biryani", "dosa", "dragon chicken", "coke"];
const summary = hotel_details(hotel_name, rating);
console.log(summary);
console.log(`Menu: ${food_items.join(",")}`);
console.log(`Is it a good hotel? ${isFoodTasty ? "Yes it is" : "No"}`);
