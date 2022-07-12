const getLargest = require('./getLargest');
test("getLargest is a function", () => {
    expect(typeof getLargest).toBe("function")
})
test("Gets the largest number", () => {
    const result = getLargest(1,2,3);
    expect(result).toEqual(3);
})
