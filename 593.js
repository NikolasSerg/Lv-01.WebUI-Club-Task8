//рандомне число з порогом 27
let randomNum = Math.floor(Math.random() * 27);
//
console.log(randomNum, ' - randomNum');


function sumNum(start, end, equal) {
    let rez = [];
    for (let i = start; i < end; i++) {
        // варінат 1 (без вложеного циклу, щоб не нагружати систему)

        // let num1 = Math.floor(i % 1000/100); // вираховує сотні
        // let num2 = Math.floor(i % 100/10); // верне десятки
        // let num3 = Math.floor(i % 10); // верне одиниці
        // if(num1 + num2 + num3 === counter) {
        //     rez.push(i)
        // }

        //варіант 2 коротший
        let text = i.toString();
        if(+text[0] + +text[1] + +text[2] === equal) {
            rez.push(i)
        }
    }
    return rez;
}

console.log(sumNum(100, 1000, randomNum));
module.exports = {sumNum}