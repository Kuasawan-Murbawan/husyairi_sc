var number = 80000;

// Using the toLocaleString method

var formattedNumber = number.toLocaleString(
  "en-US", // determines the formatting conventions.
  {
    minimumFractionDigits: 2, // min number of decimal digits, if no decimal, 2 zeroes will be add to the end
    maximumFractionDigits: 2, // max number of decimal digits, if many decimal points, it will be rounded to 2 decimal points
  }
);
var result = "RM " + formattedNumber; // add "RM" to the formatted number
console.log(result); // Output: "RM 80,000.00"

// Convert from formatted string to number

let num = parseFloat(
  // parseFloat is used to convert string to number
  result
    .replace(/,/g, "") //remove all commas, g is global which means all commas
    .replace("RM ", "")
); //  "RM " is removed

console.log(num); //display integer
