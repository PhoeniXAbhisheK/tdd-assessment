const expect = require("chai").expect;

function addCalculator(inputVal){
  return inputVal === "" ? 0 : inputVal;
}

const checkConditions = (testValue, expectedResult) => {
  const result = addCalculator(testValue);
  expect(result).to.equal(expectedResult);
};

describe("input validation suite", function(){
  it("checks if function has input", () => {
    const result = addCalculator(1) != 0;
    expect(result).to.equal(true);
  })

  it("checks if input is blank, return zero", () => {
    checkConditions("", 0);
  })
})

it("checks if input is blank, return zero", () => {
  const result = addCalculator("");
  expect(result).to.equal(0);
})