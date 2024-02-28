const caesarCipher = require('./main');

test('encrypt hello to jgnnq', () => {
    expect(caesarCipher("hello", 2)).toBe("jgnnq");
});

test('encrypt hi to kl', () => {
    expect(caesarCipher("hi", 3)).toBe("kl");
});

test('encrypt fetch to utirw', () => {
    expect(caesarCipher("fetch", 15)).toBe("utirw");
});