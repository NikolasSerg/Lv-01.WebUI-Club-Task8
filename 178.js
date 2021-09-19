// ВСІ ЗАДАЧІ 178 вправи

// Функція рандомного масиву
let arr = new Array(20).fill(null).map(i => Math.floor(Math.random()*100));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // для ручного прорахунку, використовував коли перевіряв вірність обрахунку
console.log(arr, ' - inner random arr')

// для умов котрі потрібні для універсальної функції
let condition = {
    oddNum: 'arr[i] % 2 === 0',
    divideTo3Num: 'arr[i] % 3 === 0 || arr[i] % 5 !== 0',
    squareNum: 'arr[i] % 2 === 0 && Number.isInteger(Math.sqrt(arr[i]))',
    conditionNum1: 'arr[i] < ((arr[i-1])+(arr[i+1]))/2',
    conditionNum2:'2**i < arr[i] && arr[i] < factorial(i)',
    evenOrdinaryNum: 'i % 2 === 0 && arr[i] % 2 !== 0'
}


// Функція testNumber використовує eval для розгортання умови,
// щоб не клонувати функцію з одним і тим же функціоналом
// - з однаковим циклом але різною умовою
function testNumber(arr, condition) {
    let rez = 0;
    for (let i = 0; i < arr.length; i++) {
        if (eval(condition)) {
            rez++;
        }
    }
    return rez;
}

function factorial(item) { // факторіал для 5-ї задачі
    let rez = item;
    if(item > 1) {
        for (let i = item-1; i > 0; i--) {
            rez *= i;
        }
        return rez;
    }
    return null
}


console.log(testNumber(arr, condition.oddNum), ' - amount of odd numbers');
console.log(testNumber(arr, condition.divideTo3Num), ' - divide to 3 and undivided to 5');
console.log(testNumber(arr, condition.squareNum), ' - square of an even number');
console.log(testNumber(arr, condition.conditionNum1), ' - conditionNum1 conditional');
console.log(testNumber(arr, condition.conditionNum2), ' - conditionNum2 conditional');
console.log(testNumber(arr, condition.evenOrdinaryNum), ' - an even sequential number has odd number');

module.exports = {condition, testNumber, factorial}





