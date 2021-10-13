// import function from local file
const findLongestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint longest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
  expect(findLongestString(["hello", "goodb"])).toBe("hello");
  expect(findLongestString(["a", "b", "c"])).toBe("a");
});
