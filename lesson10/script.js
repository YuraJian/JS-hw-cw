const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "John", name: "Born some", isReading: 5, startCountBooks: 5 },
  { id: 2, author: "A", name: "Hello", isReading: 5, startCountBooks: 5 },
  { id: 3, author: "A", name: "D", isReading: 5, startCountBooks: 5 },
  { id: 4, author: "A", name: "E", isReading: 5, startCountBooks: 5 },
  { id: 5, author: "A", name: "F", isReading: 5, startCountBooks: 5 },
];

function library() {
  alert('Welcome at the library');
  let choiceAction = prompt(`Напишіть що ви бажаєте зробити:
  Взяти книгу - take
  Повернути книгу - return
  Додати книгу - add`);

  if (choiceAction === null) {
    alert('Допобачення!');

    return;
  }

  if (!choiceAction) {
    alert('Ви не ввели дію яку хотіли б виконати. \nСпробуйте знову!');

    return;
  }

  choiceAction = choiceAction.toLowerCase().trim();

  switch (choiceAction) {
    case 'take': 
        takeBook();
        break;

    case 'return':
        returnBook();
        break;

    case 'add':
        addBook();
        break;

    default:
        alert('Нажаль, така функція не продумана в біліотеці');
  };
};

const takeBook = () => {
  const filterBook = books
  .map((book) => book.name)
  .join('\n')

  let selectBookName = prompt(`Виберіть книгу, яку ви хочете взяти:\n${filterBook}`);

  selectBookName = selectBookName[0].toUpperCase() + selectBookName.slice(1).toLowerCase().trim();

  const selectBook = books.find((book) => book.name === selectBookName);

  if(!selectBookName) {
    alert('Ви не ввели назву книги!');

    return;
  };

  if (!selectBook) {
    alert('Нажаль такої книги немає в базі данних. Ви можете додати цю книгу самостійно!');
    
    return;
  };

  if (selectBook.isReading === true) {
    alert('Вибачте, але цю книгу читає хтось інший!');

    return;
  };

  selectBook.isReading -= 1;

  if (selectBook.isReading < 0) {
    alert('Нажаль більше немає доступних книг для читання!');

    return;
  }

  alert(` Ви успішно взяли книгу, ID вашої книги: ${selectBook.id}`);
  alert(`Кількість доступних книг для читання ${selectBook.isReading}`)
};

const returnBook = () => {
  let enterID = Number(prompt('Введіть ID книги яку ви хочете повернути!'));

  const isTrueID = books.find((book) => book.id === enterID);

  if (!enterID) {
    alert('Ви не ввели номер ID!');

    return;
  };

  if (isTrueID.isReading === false) {
    alert(`Ви не брали книгу з ID: ${enterID}`);

    return;
  };

  isTrueID.isReading += 1;

  if (isTrueID.isReading > isTrueID.startCountBooks) {
    alert('В бібліотеці вже є відповідна кількість даних книг, можливо ви принесли свою книгу');

    return;
  }

  alert('Ви успішно повернули книгу!');
};

const addBook = () => {
  const newObj = {};

  let yourBookName = prompt('Введіть назву книги!');
  let yourAuthorName = prompt(`Введіть ім'я автора цієї книги!`);
  let bookCount = Number(prompt('Скільки екземлярів даної книги ви можете пожертвувати біліотеці?'))

  if (!yourBookName || !yourAuthorName) {
    alert('Ви не ввели дані автора');

    return;
  };

  if (!bookCount || bookCount === 0) {
    alert('Невірні кількість книг');

    return;
  }

  yourBookName = yourBookName[0].toUpperCase() + yourBookName.slice(1).toLowerCase();

  let ID = generateID();
  console.log('ID', ID);

  const spaceIndex = yourAuthorName.indexOf(' ');

  if (spaceIndex === -1) {
    yourAuthorName = yourAuthorName[0].toUpperCase() + yourAuthorName.slice(1).toLowerCase();
  } else {
    yourAuthorName = yourAuthorName[0].toUpperCase() +
    yourAuthorName.slice(1, spaceIndex).toLowerCase() + ' ' +
    yourAuthorName[spaceIndex + 1].toUpperCase() +
    yourAuthorName.slice(spaceIndex + 2).toLowerCase();
  }

  const filterBookName = books
  .find((book) => book.name === yourBookName);

  if (yourBookName === filterBookName) {
    alert('Така книга вже є в біліотеці!');

    return;
  }

  newObj.id = ID;
  newObj.name = yourBookName;
  newObj.author = yourAuthorName;
  newObj.isReading = bookCount;
  newObj.startCountBooks = bookCount;

  books.push(newObj);

  alert('ВИ успішно додали книгу!')

  console.log('books', books);
};

const generateID = () => {
  let stop = true;
  let randomID;

  // let stop = false;    Це мій варіант, але так і не вийшло порівняти, в ньому ще були 2 аргументи!

  // do {
  //   const randomID = Math.random() * (max - min + 1);
  //   const isSameID = books.find((book) => book.id == randomID);

  //   if(randomID == isSameID) {
  //     continue;
  //   }
    
  //   return Math.floor(randomID);

  // } while (!stop);

  do {
    randomID = Math.ceil(Math.random() * 1000);
    stop = Boolean(books.find((book) => book.id === randomID));
  } while(stop);

  return randomID;
};