const fs = require('fs');
const fQnt = fs.readdirSync('./words').length;

const uniqueValues = () => {
    const result = new Set();

    for (let i = 0; i < fQnt; i++) {
        const toArray = fs.readFileSync(`./words/out${i}.txt`).toString().split('\n');
        toArray.forEach(element => result.add(element));
    }
    return result;
};

// const existInAllFiles = () => {
//     let result = fs.readFileSync('./words/out0.txt').toString().split('\n');

//     for (let i = 1; i < 20; i++) {
//         const dataArr = fs.readFileSync(`./words/out${i}.txt`).toString().split('\n');
//         result = result.filter(element => dataArr.includes(element));
//     }
//     return result;
// };

const existInAtLeastTen = (atLeast) => {
    const obj = {};

    for (let i = 0; i < fQnt; i++) {
        const arrayData = fs.readFileSync(`./words/out${i}.txt`).toString().split('\n');
        const set = new Set(arrayData);

        set.forEach(element => {
            if (element in obj) obj[element]++;
            else obj[element] = 1;
        });
    }
    return Object.keys(obj).filter(key => obj[key] >= atLeast);
};

console.time('Unique values');
console.log('Quantity:', uniqueValues().size);
console.timeEnd('Unique values');

console.time('Exist in all files');
const existsInAll = existInAtLeastTen(20);
console.log('Quantity:', existsInAll.length);
console.timeEnd('Exist in all files');

console.time('Exist in at least ten files');
const existInTen = existInAtLeastTen(10);
console.log('Quantity:', existInTen.length);
console.timeEnd('Exist in at least ten files');