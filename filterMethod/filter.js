const arr = [1, 2, null, false, 3, 4, "", "String", 5, 6];

let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length - 1; j++) {
    if (!arr[j] || typeof arr[j] !== "number") {
      arr[j] = arr[j + 1];
      arr[j + 1] = undefined;
    }
  }
  if (arr[i] === undefined) {
    count++;
  }
}

arr.length -= count;
console.log(arr);

// const arr = [1, 2, null, false, 3, 4, "", "String", 5, 6];

// arr.forEach((item, index) => {
//   if (typeof item !== 'number') {
//     arr.splice(index, 1);
//   }
// });

// console.log(arr);

// const arr = [1, 2, null, false, 3, 4, "", "String", 5, 6];

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (typeof arr[i] !== 'number') {
//     arr.splice(i, 1);
//   }
// }

// console.log(arr);

// const arr = [1, 2, null, false, 3, 4, "", "String", 5, 6];

// const newArr = arr.filter(item => typeof item === 'number');

// console.log(newArr);

// function fib (n){
//     if (n == 0 || n == 1){
//         return n;
//     }
//     return fib (n - 1) + fib(n - 2);
// }

// console.log(fib(22));
