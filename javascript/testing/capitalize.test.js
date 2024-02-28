const capitalize = require('./main');

test('capitalize', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('capitalize', () => {
    expect(capitalize("motorbike")).toBe("Motorbike");
});

test('capitalize with spaces', () => {
    expect(capitalize("motor car")).toBe("Motor car");
});