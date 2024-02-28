const calculator = require('./main');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('adds 5 + 2 to equal 7', () => {
    expect(calculator.add(5, 2)).toBe(7);
});

test('subtracts 1 - 2 to equal -1', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('divides 1 / 2 to equal 0.5', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divides 4 / 2 to equal 2', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test('multiplies 1 x 2 to equal 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test('multiplies 4 x 2 to equal 8', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});
