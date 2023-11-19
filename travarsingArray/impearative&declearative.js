let numbers = [2, 55, 6, 7, 99, 500, 22, 55, 366, 45585, 2146, 65416, 999, 563, 555];

// Imperative way
// Array Travarse

/*for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i] *2);
}*/

// Array Summission
/*let sum = 0;
for(let i = 0; i<numbers.length; i+=1){
    sum += numbers[i];
}
console.log(sum);   */

/*let sum = 0;
for (let i = 0; i<2; i+=1){
    sum += numbers[i];
}
console.log(sum);*/

// Declearative Way
// Value
/*numbers.forEach((value) => {
    console.log(value);
})*/

// Even number with declearative way

/*numbers.forEach((value)=>{
    if(value % 2 === 0){
        console.log(value);
    } 
})*/

// sum of the index one by one
/*
let sum = 0;
numbers.forEach((value)=>{
    console.log(sum += value);
})*/

// Sum of total value

/*let sum = 0;
numbers.forEach((v) => {
  sum += v;
});
console.log(`Sum of Total Numbers=${ sum}`);
*/

// Sum of 4 index
 /*let sum = 0;
numbers.forEach((v, i)=>{
    if (i<=3) {
        sum += v;
    }
})
console.log(sum);*/

numbers.forEach((value)=>{
    if(value%2 ===1 ){
        console.log(value);
    }
})
