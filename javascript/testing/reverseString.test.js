const reverseString = require('./main');

test('reverse the string', () => {
    expect(reverseString("hello")).toBe("olleh");
});

test('reverse the string', () => {
    expect(reverseString("motorbike")).toBe("ekibrotom");
});

test('reverse the string with spaces', () => {
    expect(reverseString("motor car")).toBe("rac rotom");
});