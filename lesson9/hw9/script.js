// Task 1
// Task 1.1

const numbersToBoolean = [1, 2, -10, -2, 7];

const isTruthyOrFalsy = numbersToBoolean.map((element) => element > 0);

console.log('isTruthyOrFalsy', isTruthyOrFalsy);

// Task 1.2

const users = [
    {
      name: 'Sam',
      role: 'admin',
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin',
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin',
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client',
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client',
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest',
      age: 17,
    },
  ];

  const isAdminAdult = users
    .filter((user) => user.age > 18 && user.role === 'admin')
    // .map((user) => console.log(`Name: ${user.name}`));
    .map((user) => user.name);

    console.log('isAdminAdult', isAdminAdult);

// Task 1.3

const numbers = [1, 10, 17, 24, 45];

const arithmeticMean = numbers.reduce((acc, value) => {
    acc = acc + value / numbers.length;

    return acc;
}, 0);

console.log('arithmeticMean', arithmeticMean);

// Task 2

const ownFilter = (arr, callback) => {
    const newArr = [];
    for (let element of arr) {
       if (callback(element)) {
        newArr.push(element);
       };
    }
    return newArr;
};

const isNegative = (number) => number < 0;

const ownFilterResult = ownFilter([-2, 4, -1], isNegative);
console.log('ownFilterResult', ownFilterResult);

const ownMap = (arr,callback) => {
    const newArr = [];
    for (let element of arr) {
        newArr.push(callback(element));
    }
    return newArr;
};

const increment = (number) => number + 1;

const ownMapResult = ownMap([1, 2, 3], increment);
console.log('ownMapResult', ownMapResult);

const ownForEach = (arr, callback) => {
    for (let element of arr) {
        logger(element, arr.indexOf(element), arr);
    }
};

const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`);
  };

const ownForEachResult = ownForEach([1, 2, 3]);

// Task 3
// Зробив його за допомогою розбору дз, думав думав, крутив крути та нічого не виходило

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];

const filterData = (array, objectFilter) => {
    const res = array.filter(item => {
        console.log(`keys: ${Object.keys(objectFilter)}`);
        return Object.keys(objectFilter).every(key => {
            return item[key] === objectFilter[key];
        });
    });
    return res;
};

const filterDataResult = filterData(data, {position: 'junior'});
console.log('filterDataResult', filterDataResult);