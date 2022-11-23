// Task 1

for (let i = 1; i <= 10; i++) console.log(`i = ${i}`);

let i = 1;

console.log('');

while(i <= 10) {
    console.log(`i = ${i}`);
    i++;
};

console.log('');

i = 1;
do {
    console.log(`i = ${i}`);
    i++;
} while(i <= 10);

console.log('');

for (let i = 20; i >= 10; i--) console.log(`i = ${i}`);

console.log('');

i = 21;
while(i > 10) {
    --i;
    console.log(`i = ${i}`);
};

console.log('');

i = 20;
do {
    console.log(`i = ${i}`);
    i--;
} while(i > 9);

console.log('');

// Task 2



// Task 3

const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const authorize = () => {
  let userLogin;
  let userPassword;
  let i = 3;
  let isAuthSuccess = false;

  start: do {

    if(i === 3) {
        alert('You have 3 attempts for enter your data');
    } else if(i === 2) {
        alert('You have 2 attempts for enter your data');
    } else if(i === 1) {
        alert('This is the last attempt, be careful');
    } else {
        alert('Unfortunately, your attempts have ended');
        break;
    }

    i--;
    
    for (;;) {
        userLogin = prompt("Your login: ");
        if (!userLogin) {
        alert("Enter your login!");
        continue start;
        }

        userPassword = prompt("Your password: ");
        if (!userPassword) {
        alert("Enter your password!");
        continue start;
        }

        if (userLogin !== LOGIN || userPassword !== PASSWORD) {
            alert('Data is incorrect');
            continue start;
        }

        break;
    }
    alert('Welcome!');

    break;

  } while (true);
};

// authorize();