const expect = require("chai").expect;

const addCalculator = () => {
  return true;
}

it("checks if function exists", () => {
  const result = addCalculator();
  expect(result).to.equal(true);
})