const greetFn = new Function(
    'name',
    'email',
    `
    const fName = name.split(' ')[0];
    console.log("Hello,", fName, "Is that your email?", email);
    console.log("yeah, this is mine");
    return fName;
    `
);
console.log(typeof greetFn);
console.log(greetFn.toString());
const fName = greetFn('Jahirul Islam', 'jahirulislam@gmail.com');
console.log('First Name', fName);










const operations = [
    {
        args: [10, 20],
        params: ['a', 'b'],
        body: 'console.log ("a + b = ", a+b)',
    },
    {
        args: [10, 20],
        params: ['a', 'b'],
        body: 'console.log ("a - b = ", a-b)',
    },
    {
        args: [10, 20],
        params: ['a', 'b'],
        body: 'console.log ("a * b = ", a*b)',
    },
    {
        args: [6],
        params: ['m'],
        body: `
            for(let i = 0; i < m; i++){
                line = '' ;
                for (let j = 0; j < m; j++){
                    line += '* ';
                }
                console.log(line);
            }
        `
    },
];

operations.forEach(operation => {
    const fn = new Function (...operation.params, operation.body);
    fn(...operation.args);
});
