const expect = require("chai").expect;

const addCalculator = (inputVal) => {
  if(typeof inputVal === "string"){
    if(inputVal === ""){
      return 0;
    }else{
      inputVal = inputVal.split(",");
      if(inputVal.length === 1){
        return inputVal.join(",");
      }else{
        return String(parseInt(inputVal[0]) + parseInt(inputVal[1]));
      }
    }
  }else{
    return false
  }

}

const checkConditions = (testValue, expectedResult) => {
  const result = addCalculator(testValue);
  expect(result).to.equal(expectedResult);
};

describe("input validation suite", () => {
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

describe("input addition suite", () => {
  it("checks if input is single, return input", () => {
    checkConditions("123", "123");
  })
  
  it("checks if input is double, return sum", () => {
    checkConditions("123, 123", "246");
  })
});
