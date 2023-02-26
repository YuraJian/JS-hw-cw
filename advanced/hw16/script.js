const body = document.body;

const form = document.createElement('form');
const nameInput = document.createElement('input');
const emailInput = document.createElement('input');
const submitButton = document.createElement('button');

const USER_LOCAL_KEY = 'user';
const USER_VISITS = 'visits';

const renderGreeting = (userRegistry, name, visitsCount = 0) => {
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.innerText = `Welcome ${name}`;
    h2.innerText = `You have visited the site ${visitsCount} times`;

    body.append(h1);

    if (userRegistry) {
        body.append(h2);
    }
};

const updateLocalStorage = (user) => {
    localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(user));
};

const handleSubmit = (event) => {
    event.preventDefault();

    const { value: name } = nameInput;
    const { value: email } = emailInput;

    if (!name || !email) {
        alert('You have not entered any data');
        return;
    }

    updateLocalStorage({ name, email });

    form.remove();
};

const renderForm = () => {
    nameInput.setAttribute('placeholder', 'Enter your name');
    emailInput.setAttribute('placeholder', 'Enter your email');

    nameInput.style.marginBottom = '10px';
    emailInput.style.marginBottom = '10px';

    submitButton.innerText = 'Submit';

    form.style.display = 'flex';
    form.style.flexDirection = 'column';

    form.addEventListener('submit', handleSubmit);

    form.append(nameInput, emailInput, submitButton);
    body.append(form);
};

const init = () => {
    if (localStorage.getItem(USER_LOCAL_KEY)) {
        const { name } = JSON.parse(localStorage.getItem(USER_LOCAL_KEY));
        if (localStorage.getItem(USER_VISITS)) {
            const visits = JSON.parse(localStorage.getItem('visits'));
            const updateVisits = visits + 1;
            localStorage.setItem('visits', updateVisits);

            renderGreeting(true, name, updateVisits);
        } else {
            localStorage.setItem('visits', 1);
            renderGreeting(false, name);
        }
    } else {
        renderForm();
    }
};

init();

const clearStorage = (event) => {
    event.preventDefault();

    localStorage.clear();
}

const createClearButton = () => {
    const buttonContainer = document.createElement('div');
    const clearStorageButton = document.createElement('button');

    body.append(buttonContainer);
    buttonContainer.append(clearStorageButton);

    buttonContainer.style.marginTop = '20px';

    clearStorageButton.innerText = 'Clear local storage';
    clearStorageButton.addEventListener('click', clearStorage);
};

createClearButton();