let hotel_name : string = "Food Park";
let rating : number = 4.5;
let isFoodTasty : boolean = false;

if(rating > 3)
{
    isFoodTasty = true;
}

function hotel_details(hotel_name : string, rating : number) : string {
    return `${hotel_name} has ${rating} rating.`;
}

let food_items : string[] = ["biryani", "dosa", "dragon chicken", "coke"];

const summary : string = hotel_details(hotel_name, rating);

console.log(summary);

console.log(`Menu: ${food_items.join(",")}`);

console.log(`Is it a good hotel? ${isFoodTasty ? "Yes it is" : "No"}`);