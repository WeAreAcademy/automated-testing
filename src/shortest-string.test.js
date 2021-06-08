const findShortestString = require("./shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["longest", "short"])).toBe("short");
  expect(findShortestString(["aaa", "a"])).toBe("a");
});
