// import function from local file
const findLongestString = require("./find-longest-string");

test("findLongestString finds the longest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("hello");
  expect(findLongestString(["alpacas", "dhaka", "PK BRAKO"])).toBe("PK BRAKO");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
  expect(findLongestString(["braver", "dancer"])).toBe("braver");
  expect(findLongestString(["b", "te", "a", "ta"])).toBe("te");
});
