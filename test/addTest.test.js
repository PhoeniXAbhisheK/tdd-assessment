const expect = require("chai").expect;

function addCalculator(inputVal){
  if(typeof inputVal === "string"){
    if(inputVal === ""){
      return 0;
    }else{
      return inputVal;
    }
  }else{
    return false
  }

}

const checkConditions = (testValue, expectedResult) => {
  const result = addCalculator(testValue);
  expect(result).to.equal(expectedResult);
};

describe("input validation suite", function(){
  it("checks if function has input", () => {
    const result = addCalculator(1);
    expect(result).to.equal(false);
  })

  it("checks if input is blank, return zero", () => {
    checkConditions("", 0);
  })

  it("checks if input is string", () => {
    checkConditions("", 0);
  })
})

it("checks if input is single, return input", () => {
  checkConditions("123", "123");
})

it("checks if input is double, return sum", () => {
  checkConditions("123, 123", "246");
})