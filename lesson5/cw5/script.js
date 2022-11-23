console.log('Цикл почато');

for (let i = 0; i < 5; i++) {
    console.log(`Лічильник (і)`, i);
    console.log(`Умова ${i} < 5: `, i < 5);
}

console.log('Цикл закінчено');
console.log('');

for (let i = 2; i <= 2048; i = i * 2) {
    console.log(`i`, i); 
}
console.log('');

// for (let i = 2, j = 1; j < 20; i = i *2, j++) {
//     console.log(`2 в степені ${j} = ${i}`);
// } // Такий код писати можна, АЛЕ НЕ БАЖАНО ВІН НЕ Є ЧИТАБЕЛЬНИМ!!!!

// for (let i = 0; i < 20; i++) {
//     const power = 2 ** i;
//     console.log(`2 в степені ${i} =`, power);
// }

// const findFirstNumber = (start, finish, divider) => {
//     let targetNumber;
//     for (let i = start; i <= finish; i++) {
//         if(i % divider === 0) {
//             targetNumber = i;
//             break;
//         }
//     }
//     return targetNumber;
// }

// console.log(findFirstNumber(20, 33, 8));

const findFirstNumber = (start, finish, divider) => {
    for (let i = start; i <= finish; i++) {
        if(i % divider === 0) {
            return i;
        }
    }
}

console.log(findFirstNumber(20, 33, 8));
console.log('');

const showEvenNumbers = (start, finish) => {
    for (let i = start; i <= finish; i++) {
        if(i % 2 !== 0) {
            continue;
        };
        console.log(i);
    };
};

showEvenNumbers(10, 25);
console.log('');

for (let i = 1; i <=9; i++) {
    let row = '';
    for (let j = 1; j <= 9; j++) {
        // console.log(`i, j`, i, j);
        row = row + (i * j) + ' ';
    };
    console.log(row);
};
console.log('');

// console.time('Loop');

// for (let i = 0; i < 1000000000; i++) {
//     const a = 2 * i;
// };

// console.timeEnd('Loop');
// console.log('');

let i = 5;
while (i) {
    console.log('i ', i);
    i--;
};
console.log('');

let name;
do {
    name = prompt('Enter your name: ');
    if(name === null) {
        break;
    }
    console.log(`name`, name);
} while (!name);
