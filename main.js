const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calc = text => {
    const actions = {
        '+': sum,
        'plus': sum,
        'prideti': sum,
        '-': minus,
        'minus': minus,
        'atimti': minus,
        '*': multiply,
        'multiply': multiply,
        'padauginti': multiply,
        '/': divide,
        'divide': divide,
        'padalinti': divide
    };
    let parts = text.split(' ').map((part, i) => i % 2 === 0 ? parseInt(part) : part);
    const action = actions[parts[1]];

    if (!action) {
        return 'ERROR: no valid action.';
    }

    return action(parts[0], parts[2]);
};


let userInput = '13 minus 17';
const rez = calc(userInput);
console.log(userInput, '=', rez);