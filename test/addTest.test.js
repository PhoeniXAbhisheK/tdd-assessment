const expect = require("chai").expect;

function addCalculator(){
  return [...arguments].length;
}

it("checks if function has input", () => {
  const result = addCalculator() != 0;
  expect(result).to.equal(true);
})