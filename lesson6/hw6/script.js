// Task 1

// Дану функцію піддивився у відео, а так робив теж саме тільки не догадався винести це в окрему функцію
const userModifyName = (validName) => {
    const symbolsString = validName[0].toUpperCase() + validName.slice(1).toLowerCase();
    return symbolsString;
}

const userName = () => {
    let name;
    let isAuth = false;
    do {
        name = prompt('Enter your name')
        if (!name || !name.trim()) {
            alert('You have not entered your name!')
            continue;
        };
        isAuth = true;
    } while (!isAuth);

    const userUpperCaseName = userModifyName(name)

    return userUpperCaseName;
};

const userSurname = () => {
    let surname;
    let isAuth = false;
    do {
        surname = prompt('Enter your surname')
        if (!surname || !surname.trim()) {
            alert('You have not entered your name!')
            continue;
        };
        isAuth = true;
    } while (!isAuth);

    const userUpperCaseName = userModifyName(surname)

    return userUpperCaseName;
}

const userPassword = () => {
    let password;
    let isAuth = false;
    do {
        password = prompt(`Enter your password
        minimum password length is 6 characters
        there must also be 1 uppercase or lowercase character
        `)
        if (!password || !password.trim()) {
            alert('You have not entered a password!')
            continue;
        };

        if (password.length < 6) {
            alert('Enter more than a minimum of 6 characters!')
            continue;
        }

        // Також дуже довго не міг зрозуміти як зробити валідацію для uppercase i lowercase, то теж піддивився у відео-зустрічі
        if (!isNaN(password) || password.toLowerCase() === password || password.toUpperCase() === password) {
            alert('Password is incorrect! Try again')
            continue;
        }

        isAuth = true;
    } while (!isAuth);
    
    return password;
};

// const resName = userName();
// const resSurname = userSurname();
// const resPassword = userPassword();

// alert(`Your data: ${resName} ${resSurname}
// and your password: ${resPassword}`);

// Task 2

const random = (min, max) => {
        const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(randomNumber);
};

console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))
console.log(random(1, 10))