// Task 1

function isEqual(a, b) {
  return (a === b);
}

console.log("isEqual", isEqual(4, 5));
console.log("isEqual", isEqual(5, 5));

function isEqual2(a, b) {
  return a === b ? true : false;
}

console.log("isEqual2", isEqual2(5, 6));
console.log("isEqual2", isEqual2(6, 6));

// arrow func
const isEqual3 = (a, b) => a === b;

console.log("isEqual3", isEqual3(6, 7));
console.log("isEqual3", isEqual3(7, 7));

// Task 2

function getSum(a, b) {
  return a + b;
}

console.log("getSum", getSum(5, 5));
console.log("getSum", getSum(10, 5));
console.log("getSum", getSum(15, 19));

// arrow func
const getSum2 = (a, b) => a + b;

console.log("getSum2", getSum2(29, 20));
console.log("getSum2", getSum2(49, 5));
console.log("getSum2", getSum2(54, 19));

// Task 3

function getExponentiation(a, b = 2) {
  return a ** b;
}

console.log("getExponentiation", getExponentiation(2));
console.log("getExponentiation", getExponentiation(4));
console.log("getExponentiation", getExponentiation(16));

// arrow func
const getExponentiation2 = (a, b = 2) => a ** b;

console.log("getExponentiation2", getExponentiation2(256));
console.log("getExponentiation2", getExponentiation2(65536));
console.log("getExponentiation2", getExponentiation2(4294967296));

// Task 4

function getNum() {
  const dayOfWeek = Number(prompt(
    "Hello. If you want choose some day of week, choose one number of 1-7"
  ));

  switch (dayOfWeek) {
    case 1:
      return console.log("Monday");

    case 2:
      return console.log("Tuesday");

    case 3:
      return console.log("Wednesday");

    case 4:
      return console.log("Thursday");

    case 5:
      return console.log("Friday");

    case 6:
      return console.log("Saturday");

    case 7:
      return console.log("Sunday");

    default:
        return console.log('I do not know this day');
  }
}

getNum();

// arrow func
const getNum2 = () => {
    const dayOfWeek = Number(prompt(
        "Hello. If you want choose some day of week, choose one number of 1-7"
      ));
    
      switch (dayOfWeek) {
        case 1:
          return console.log("Monday");
    
        case 2:
          return console.log("Tuesday");
    
        case 3:
          return console.log("Wednesday");
    
        case 4:
          return console.log("Thursday");
    
        case 5:
          return console.log("Friday");
    
        case 6:
          return console.log("Saturday");
    
        case 7:
          return console.log("Sunday");
    
        default:
            return console.log('I do not know this day');
      }
}

getNum2();

// Task 5

function getUseData() {
    const userName = prompt('What is your name?');
    const userAge = Number(prompt('How old are you?'));

    if (!userName || !userAge || typeof userAge !== 'number') {
        console.log('The data is incorrect!');
    } else if (userAge > 30) {
        console.log(`Good afternoon,`, userName);
    } else {
        console.log(`Hello,`, userName);
    }
};

getUseData();

// arrow func
const getUseData2 = () => {
    const userName = prompt('What is your name?');
    const userAge = Number(prompt('How old are you?'));

    if (!userName || !userAge || typeof userAge !== 'number') {
        console.log('The data is incorrect!');
    } else if (userAge > 30) {
        console.log(`Good afternoon,`, userName);
    } else {
        console.log(`Hello,`, userName);
    }
};

getUseData2();