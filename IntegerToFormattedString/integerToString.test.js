const formattingMachine = require("./integerToString");

test("convert positive integer to string", () => {
  expect(formattingMachine(100000)).toBe("100,000.00");
});

test("non integer returns null", () => {
  expect(formattingMachine("2431a")).tonull;
});

test("more than 2 decimal points returns a round off of 2 decimal point", () => {
  expect(formattingMachine(1000.239)).toBe("1,000.4");
});
