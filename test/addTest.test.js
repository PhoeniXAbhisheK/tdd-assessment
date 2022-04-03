const expect = require("chai").expect;

it("checks if function exists", () => {
  const result = addCalculator();
  expect(result).to.equal(true);
})