// Task 1

const getTrue = (arr) => {
    let sumOfTrue = 0;
    for (let i of arr) {
        if (i > 0) {
            sumOfTrue += i
        };
    };
    return sumOfTrue;
};

const resOfTrue = getTrue([true, false, false, true, false]);
console.log('resOfTrue', resOfTrue);

// const resOfTrue = getTrue([true, true, true, true, true]);
// console.log('resOfTrue', resOfTrue);

// const resOfTrue = getTrue([false, false, false, false, false]);
// console.log('resOfTrue', resOfTrue);

// const resOfTrue = getTrue([]);
// console.log('resOfTrue', resOfTrue);

// Task 2 

const getOccurrencesCount = (arr) => {
    let obj = {};
    for (let i of arr) {
        if (!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i] += 1;
        }
    }
    return obj;
}

// const res = getOccurrencesCount(["a", "v", "a", "b", "b"]);
const res = getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
  ]);
console.log('res', res);

// Task 3

const extraN = (arr) => {
   const evenNumbers = [];
   const oddNumbers = [];

   for (let number of arr) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number);
    }
   }

   if (evenNumbers.length > oddNumbers.length) {
    console.log(`extraN = ${oddNumbers}`);
   } else {
    console.log(`extraN = ${evenNumbers}`)
   }
} 

const extraNRes = extraN([0, 1, 2]);
// const extraNRes = extraN([1, 2, 3]);
// const extraNRes = extraN([2, 6, 8, 10, 3]);
// const extraNRes = extraN([0, 0, 3, 0, 0]);
// const extraNRes = extraN([1, 1, 0, 1, 1]);