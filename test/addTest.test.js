const expect = require("chai").expect;

function addCalculator(inputVal){
  return inputVal === "" ? 0 : inputVal;
}

it("checks if function has input", () => {
  const result = addCalculator(1) != 0;
  expect(result).to.equal(true);
})

it("checks if input is blank", () => {
  const result = addCalculator("");
  expect(result).to.equal("");
})

it("checks if input is blank, return zero", () => {
  const result = addCalculator("");
  expect(result).to.equal(0);
})