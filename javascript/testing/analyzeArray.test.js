const analyzeArray = require('./main');

test('average from [1, 8, 3, 4, 2, 6] to be 4', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('average from [4, 1, 7, 4,] to be 4', () => {
    expect(analyzeArray([4, 1, 7, 4,]).average).toBe(4);
});

test('min from [1, 8, 3, 4, 2, 6] to be 1', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('min from [4, 1, 7, 4,] to be 1', () => {
    expect(analyzeArray([4, 1, 7, 4,]).min).toBe(1);
});

test('max from [1, 8, 3, 4, 2, 6] to be 8', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('max from [4, 1, 7, 4,] to be 7', () => {
    expect(analyzeArray([4, 1, 7, 4,]).max).toBe(7);
});

test('length from [1, 8, 3, 4, 2, 6] to be 6', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test('length from [4, 1, 7, 4,] to be 4', () => {
    expect(analyzeArray([4, 1, 7, 4,]).length).toBe(4);
});