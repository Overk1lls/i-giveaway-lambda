const fs = require('fs');

const uniqueValues = () => {
    const result = new Set();

    for (let i = 0; i < 20; i++) {
        const toArray = fs.readFileSync(`./words/out${i}.txt`).toString().split('\n');
        toArray.forEach(element => result.add(element));
    }
    return result;
};

console.time('Unique Values');
console.log(uniqueValues().size);
console.timeEnd('Unique Values');

