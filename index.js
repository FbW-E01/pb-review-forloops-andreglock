console.log('1:');
for(let i = 0; i <= 10; i++) {
    process.stdout.write(`${i} `);
}
console.log();
console.log('2:');
for(let i = 10; i <= 20; i++) {
    process.stdout.write(`${i} `);
}
console.log();
console.log('3:');
for(let i = -10; i <= 10; i++) {
    process.stdout.write(`${i} `);
}
console.log();
console.log('4:');
for(let i = 10; i >= -10; i--) {
    process.stdout.write(`${i} `);
}
console.log();
console.log('5:');
const string = 'string';
for(let i = 0; i < string.length; i++) {
    process.stdout.write(`${string[i]} `);
}
console.log();
console.log('6:');
const array = ['one', 'two', 'three', 'four', 'five'];
for(const i of array) {
    process.stdout.write(`${i} `);
}
console.log();
console.log('7:');
const arrayTwo = ['one', 'two', 'three', 'four', 'five', 'six'];
for(let i = 1; i < arrayTwo.length; i = i + 2) {
    process.stdout.write(`${arrayTwo[i]} `);
}
console.log();
console.log('8:');
const arrayThree = ['one', 'two', 'three', 'four', 'five', 'six'];
for(let i = 2; i < arrayThree.length; i = i + 3) {
    process.stdout.write(`${arrayThree[i]} `);
}
console.log();
console.log('9:');
const arrayFour = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for(let i = 1; i < arrayFour.length; i = i + 3) {
    process.stdout.write(`${arrayFour[i]} `);
}
console.log();
console.log('10:');
const objectCounter = [
    {counter: 1},
    {counter: 2},
    {counter: 3},
    {counter: 4},
    {counter: 5},
    {counter: 6},
    {counter: 7},
]
for(const i in objectCounter) {
    process.stdout.write(`${objectCounter[i].counter} `);
}
console.log();
console.log('11:');
const randomNumber = Math.floor(Math.random() * 101 - 1);
for(let i = 0; i < 101; i++) {
    if(i === randomNumber) {
        break;
    }
    process.stdout.write(`${i} `);
}
console.log()