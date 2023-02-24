// Task 1
const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const {
  meta: {
    paging: { total },
  },
  data: [{ is_active: isActive }],
} = response;

console.log(`total`, total);
console.log(`isActive`, isActive);

// Task 2
const user = {
  name: "gabriel",
  surname: "brown",
  age: 17,
  height: 178,
};

const { name: userName, surname: userSurname, ...parametres } = user;
console.log(`userName`, userName);
console.log(`userSurname`, userSurname);
console.log(`parametres`, parametres);


// Task 3
const max = (...numbers) => {
  const findNaN = numbers.find((number) => typeof number !== 'number');
  if (findNaN) {
    alert('You have one or more symbols are not a number');
    return;
  }

  let max = 0;

  const mapNumbers = numbers.map((value) => {
    if (value > max) {
      max = value;
    }
  })

  console.log(max);
};

max(1, 3, 2, 5, 10, 1);

// Task 4
const createMessage = ({ author = 'Guest', text, reciever, time = new Date().toLocaleDateString() }) => {
  return console.log(`From ${author} to ${reciever}: ${text} (${time})`);
};

const message = createMessage({
  // author: 'Yura',
  reciever: "John",
  text: "Hi!",
  // time: new Date().getMilliseconds(),
});

// Task 5.1
let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

let matches = str.match(/\w\d+\w/gi);
console.log('matches', matches);

// Task 5.2
const DOMAIN_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/g;

const checkDomain = (domain) => {
  if (!DOMAIN_REGEX.test(domain)) {
    console.log(`You write wrong domain! Your wrong domain: ${domain}`);
  } else {
    console.log(`Yes. This domain is correct! Your domain: ${domain}`);
  };
};

checkDomain('google.com');
checkDomain('my-page.c');
checkDomain('ex.ua')


// Task 5.3
const checkString = (value) => {
  const regex = /[0-9]{12,}/g;

  const matchValue = value.match(regex);

  if (!matchValue) {
    console.log('You type not a number or less than 12 symbols');
    return;
  };

  console.log('matchValue', matchValue);
};

checkString('123456789098');
checkString('123123');
checkString('qwertyuioasd');