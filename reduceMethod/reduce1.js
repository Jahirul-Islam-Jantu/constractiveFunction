const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];

const result = numbers.reduce((acc, cur, index) => {
    console.log('index', index, 'cur', cur, 'acc', acc);
    if (cur){
        acc.push(cur.toString());
    }
    return acc;
}, []);

console.log(result);