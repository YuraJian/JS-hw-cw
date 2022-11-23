// Task 1



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

authorize();