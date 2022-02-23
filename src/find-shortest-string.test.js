// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
  expect(findShortestString(["alpacas", "dhaka", "PK BRAKO"])).toBe("dhaka");
});

/*test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["braver", "dancer"])).toBe("braver");
  expect(findShortestString(["b","te","a" ,"ta"])).toBe("b");
});*/
