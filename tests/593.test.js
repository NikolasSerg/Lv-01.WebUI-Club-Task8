const {sumNum} = require('../593');
let equal = 25;
let start = 100;
let end = 1000;


test(`The function should return a array of number, where sum of characters is equal to ${equal}`,  () => {
    sumNum(start, end, equal).map(i => {
        let text = i.toString();
        expect(+text[0] + +text[1] + +text[2]).toBe(equal)
    })
});