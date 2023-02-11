const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логін",
  },
  {
    element: "text",
    name: "age",
    label: "Вік",
  },
  {
    element: "select",
    name: "language",
    label: "Виберіть мову програмування",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];

// variable for append some elements to body
const body = document.body;

// this function create some inputs with text in html
const createInputs = () => {
  const mapArray = formConfig.map((element) => {
    if (element.name == 'login' || element.name == 'age') {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const formContainer = document.createElement('div');

      if (element.name == 'login') {
        input.id = 'login';
      } else {
        input.id = 'password';
      }

      label.innerText = element.label;
      label.setAttribute('for', element.name);

      input.setAttribute('type', element.element);
      input.setAttribute('name', element.name);

      formContainer.append(label, input);

      body.append(formContainer);
    };
  }) ; 
};

// createInputs();

// this function create some select element in html
const createSelectElement = () => {
  const selectContainer = document.createElement('div');
  const label = document.createElement('label');
  const select = document.createElement('select');

  body.append(selectContainer);

  label.setAttribute('for', formConfig[2].name);
  label.innerText = formConfig[2].label;

  select.setAttribute('name', formConfig[2].name);
  select.id = 'select';

  selectContainer.append(label, select);

  for (i = 0; i < formConfig[2].options.length; i++) {
    const option = document.createElement('option');

    option.innerText = formConfig[2].options[i].text;
    option.setAttribute('value', formConfig[2].options[i].value);

    select.append(option);

    // console.log(formConfig[2].options[i].text)
  };
};

// createSelectElement();

// This function collects the form into a heap;
const createForm = () => {
  const form = document.createElement('form');
  const button = document.createElement('button');
  const buttonContainer = document.createElement('div');

  buttonContainer.append(button);

  button.innerText = 'Submit';
  button.setAttribute('type', 'submit');

  createInputs();
  createSelectElement();

  form.append(buttonContainer);
  form.id = 'form-submit';

  // console.log(form);

  body.append(form);
};

createForm();

// this part of code handle submit
const form = document.getElementById('form-submit');

const handleSubmit = (event) => {
  event.preventDefault();

  const loginValue = document.getElementById('login');
  const passwordValue = document.getElementById('password');
  const selectValue = document.getElementById('select');

  const userData = {
    login: loginValue.value,
    password: passwordValue.value,
    select: selectValue.value,
  };

  console.log(userData);
};

form.addEventListener('submit', handleSubmit);