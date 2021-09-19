const {condition, testNumber, factorial} = require('../178');

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('the function should return an amount of odd numbers', () => {
    expect(
        testArr.reduce((accum, current) => {
            return current % 2 === 0 ? accum + 1 : accum;
        }, 0)
    ).toBe(
        testNumber(testArr, condition.oddNum)
    )
});

test('the function should return an amount of numbers divide to 3 and undivided to 5', () => {
    expect(
        testArr.reduce((accum, current) => {
            return (current % 3 === 0 || current % 5 !== 0) ? accum + 1 : accum;
        }, 0)
    ).toBe(
        testNumber(testArr, condition.divideTo3Num)
    )
});

test('the function should return an amount of of square of an even number', () => {
    expect(
        testArr.reduce((accum, current) => {
            return (current % 2 === 0 && Number.isInteger(Math.sqrt(current))) ? accum + 1 : accum;
        }, 0)
    ).toBe(
        testNumber(testArr, condition.squareNum)
    )
});

test('the function should return an amount of condition 1', () => {
    expect(
        testArr.reduce((accum, current, index, array) => {
            return (current < ((array[index-1])+(array[index+1]))/2) ? accum + 1 : accum;
        }, 0)
    ).toBe(
        testNumber(testArr, condition.conditionNum1)
    )
});

test('the function should return an amount of condition 2', () => {
    expect(
        testArr.reduce((accum, current, index, array) => {
            return (2**current < current && current < factorial(current)) ? accum + 1 : accum;
        }, 0)
    ).toBe(
        testNumber(testArr, condition.conditionNum2)
    )
});

test('the function should return an amount of an even sequential number that has an odd number', () => {
    expect(
        testArr.reduce((accum, current, index, array) => {
            return (index % 2 === 0 && current % 2 !== 0) ? accum + 1 : accum;
        }, 0)
    ).toBe(
        testNumber(testArr, condition.evenOrdinaryNum)
    )
});

