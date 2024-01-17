// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["Smell", "Feel", "Touch"])).toBe("Feel");
  expect(findShortestString(["Feelings", "Hearing", "Punt"])).toBe("Feelings");
});

test("findShortestString returns the string where multiple strings have same length", () => {
  expect(findShortestString(["Feel", "Hear", "Punt"])).toBe("Feel");
});
