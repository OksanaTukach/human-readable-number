module.exports = function toReadable (number) {
    const NUMBERS = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        hundred: 'hundred'
    };

    let string = number + '';
    let result = [];

    if (string.length === 3) {
        result.push(NUMBERS[string[0]]);
        result.push(NUMBERS.hundred);

        if (number % 100) {
            number = number % 100;
            string = number + '';
        }
    }

    if (string.length === 2 && number > 20) {
        result.push(NUMBERS[string[0] + '0']);

        if (number % 10) {
            result.push(NUMBERS[string[1]]);
        }
    }

    if (string.length === 1 || number <= 20) {
        result.push(NUMBERS[number]);
    }

    return result.join(' ');
}
