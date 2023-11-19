const names = [
    'Aminul Islam',
    'Anamul',
    'Belal Hossain',
    'Barkat',
    'Choto Kaka',
    'Deloar',
    'Didar',
    'Emon',
    'Esha',
    'Faisal',
    'Fahima',
    'Gias',
    'Hasan',
    'Imtiaz',
    'Jahir',
    'Keya',
    'Limon',
    'Mamun',
    'Nokib',
    'Opi Karim',
    'Parul',
    'Qashem',
    'Rashed',
    'Shanta',
    'Tania',
    'Uttom',
    'Vidyut',
    'Wasfia',
    'X-Ray',
    'Younus',
    'Zannatun',

];

const namesGroup = names.reduce((acc, cur) => {
    const firstLetter = cur[0].toUpperCase();

    if (firstLetter in acc){
        acc[firstLetter].push(cur);
    }
    else{
        acc[firstLetter] = [cur];
        
    }
    return acc;
}, {}); 

Object.keys(namesGroup).forEach((group) => {
    console.log('---------', group ,'---------');
   namesGroup[group].forEach((name) => console.log(name));
   console.log();
});
 
