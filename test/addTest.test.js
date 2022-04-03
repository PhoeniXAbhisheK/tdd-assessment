const expect = require("chai").expect;

const addCalculator = (inputVal) => {
  if(typeof inputVal === "string"){
    if(inputVal === ""){
      return 0;
    }else{
      let delimiter = ","
      if(inputVal.includes("//")){
        let index = inputVal.indexOf("//");
        delimiter = inputVal.charAt(index+2);
        inputVal = inputVal.replace(/\/\//ig, "");
        inputVal = inputVal.slice(1);
      }
      inputVal = inputVal.replace(/\n|\\n|\/\//ig, delimiter);
      inputVal = inputVal.split(delimiter);
      if(inputVal.length === 1){
        return inputVal.join(delimiter);
      }else{
        return String(inputVal.reduce((acc, val) => acc+parseInt(val), 0));
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

  it("checks if input has negative numbers", () => {
    checkConditions("123, -123", "negatives not allowed");
  })
})

describe("input addition suite", () => {
  it("checks if input is single, return input", () => {
    checkConditions("123", "123");
  })
  
  it("checks if input is double, return sum", () => {
    checkConditions("123, 123", "246");
  })

  it("checks if input is longer than 2, return sum", () => {
    checkConditions("123, 123, 123", "369");
  })
});

describe("newline and delimiter handling suite", () => {
  it("checks if input contains \\n, if does treat as comma and return sum", () => {
    checkConditions("123\n 123, 123", "369");
  })

  it("checks if input contains custom delimiters, replace with comma, and return sum", () => {
    checkConditions("//;123; 123; 123", "369");
  })
})

