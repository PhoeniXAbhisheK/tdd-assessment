const expect = require("chai").expect;

function addCalculator(inputVal){
  if(inputVal === ""){
    return 0;
  }else{
    return inputVal;
  }
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

  it("checks if input is string", () => {
    checkConditions("", "string");
  })
})

it("checks if input is single, return input", () => {
  checkConditions(123, 123);
})