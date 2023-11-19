const arr = [];

for (let i = 0; i <= 50000000; i++){
    arr.push(i);
}

console.time('not-optimized');
arr.filter((item) => item % 2 ===0).map((item) => item * 2);
console.timeEnd('not-optimized');

console.time('optimized');
arr.reduce((acc, cur) => {
    if(cur % 2 === 0 ) {
        acc.push(cur * 2);
    }
    return acc;
}, [])
console.timeEnd('optimized');