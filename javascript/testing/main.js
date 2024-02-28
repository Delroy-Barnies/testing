function sum(a, b) {
    return a + b;
}

function capitalize(string) {
    let arr = string.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function caesarCipher(string, shift) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let arr = string.split("");
    let newString = [];
    while (arr.length) {
        let char = arr.shift();
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === char) {
                let newCharIndex = j + shift;
                if (newCharIndex > alphabet.length) {
                    newCharIndex -= alphabet.length;
                }
                newString.push(alphabet[newCharIndex]);
            }
        }
    }
    return newString.join("");
}

function analyzeArray(arr) {

    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    let average = sum / arr.length;

    return {
        "average": average,
        "min": Math.min(...arr),
        "max": Math.max(...arr),
        "length": arr.length
    };
}

const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    divide(num1, num2) {
        return num1 / num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    }
}

module.exports = sum;
module.exports = capitalize;
module.exports = reverseString;
module.exports = calculator;
module.exports = caesarCipher;
module.exports = analyzeArray;