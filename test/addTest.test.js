const expect = require("chai").expect;

function addCalculator(inputVal){
  return inputVal;
}

it("checks if function has input", () => {
  const result = addCalculator(1) != 0;
  expect(result).to.equal(true);
})

it("checks if input is blank", () => {
  const result = addCalculator("");
  expect(result).to.equal("");
})