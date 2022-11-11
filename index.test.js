const functions = require("./index");
const { capitalize, add, multiply } = functions;

test("tests whether a single word gets capitalized", () => {
  expect(capitalize("abel")).toBe("Abel");
  expect(capitalize("abel-mcelroy")).toBe("Abel-Mcelroy");
});

test("tests whether a multiple words get capitalized", () => {
  expect(capitalize("abel is a moderately good dev.")).toBe("Abel Is A Moderately Good Dev.");
  // expect(capitalize("abel is a moderately good dev.")).toBe("abel is a moderately good dev.");
});

test("tests the add function", () => {
  expect(add(1,1)).toBe(2);
  expect(add(50,51)).toBe(101);
  expect(add(50,51)).not.toBe(0);
  expect(add("A","B")).toBe("AB");  
})

test("tests the multiply function", async () => {
  const spyAdd = jest.spyOn(functions, "add");

  expect(multiply(5, 10, spyAdd)).toBe(50);
  
  expect(spyAdd).toHaveBeenCalledTimes(10);

  expect(multiply(10, 5, spyAdd)).toBe(50);

  expect(spyAdd).toHaveBeenCalledTimes(15);
})