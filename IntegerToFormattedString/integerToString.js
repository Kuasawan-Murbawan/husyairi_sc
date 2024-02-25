function integerConverter(number) {
  // Using the toLocaleString method
  var formattedNumber = number.toLocaleString(
    "en-US", // determines the formatting conventions.
    {
      minimumFractionDigits: 2, // min number of decimal digits, if no decimal, 2 zeroes will be add to the end
      maximumFractionDigits: 2, // max number of decimal digits, if many decimal points, it will be rounded to 2 decimal points
    }
  );
  return formattedNumber;
}

// check for invalid data type
function formattingMachine(input) {
  if (typeof input === "number") {
    // if the input is all integer, proceed with formatting
    return integerConverter(input);
  } else if (typeof input === "string" && input.match(/^-?[0-9]*\.?[0-9]+$/)) {
    // if the input is a number in string, convert to integer, then proceed with formatting
    return integerConverter(parseFloat(input));
  } else {
    // if the input is not a number, return an empty string
    return "";
  }
}
// negative number is still permissible

var num = 3154325.32;
console.log(formattingMachine(num)); // 1,000,000.00

module.exports = formattingMachine;
