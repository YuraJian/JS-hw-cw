const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Joanne Rowling", name: "Harry potter", isReading: 5, startCountBooks: 5 },
  { id: 2, author: "Наполеон Гілл", name: "Думай і багатій", isReading: 5, startCountBooks: 5 },
  { id: 3, author: "Джон Кехо", name: "Підсвідомості все підвладне", isReading: 5, startCountBooks: 5 },
  { id: 4, author: "Шевченко", name: "Кобзар", isReading: 5, startCountBooks: 5 },
  { id: 5, author: "Ліна Костенко", name: "Маруся чурай", isReading: 5, startCountBooks: 5 },
];

function library() {
  alert('Welcome at the library');
  let choiceAction = prompt(`Напишіть що ви бажаєте зробити:
  Взяти книгу - take
  Повернути книгу - return
  Додати книгу - add`);

  // Валідація якщо нажали відміна
  if (choiceAction === null) {
    alert('Допобачення!');

    return;
  }

  // Валідація якщо строка пуста
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

// Функція щоб взяти книгу
const takeBook = () => {
  const filterBook = books
  .map((book) => book.name)
  .join('\n')

  let selectBookName = prompt(`Виберіть книгу, яку ви хочете взяти:\n${filterBook}`);

  selectBookName = selectBookName[0].toUpperCase() + selectBookName.slice(1).toLowerCase().trim();

  const selectBook = books.find((book) => book.name === selectBookName);

  // Валідація якщо користувач нічого не ввів
  if(!selectBookName) {
    alert('Ви не ввели назву книги!');

    return;
  };

  // Валідація якщо не знайдено співпадінь
  if (!selectBook) {
    alert('Нажаль такої книги немає в базі данних. Ви можете додати цю книгу самостійно!');
    
    return;
  };

  selectBook.isReading -= 1;

  // Валідація якщо книги закінчились
  if (selectBook.isReading < 0) {
    alert('Нажаль більше немає доступних книг для читання!');

    return;
  }

  alert(` Ви успішно взяли книгу, ID вашої книги: ${selectBook.id}`);
  alert(`Кількість доступних книг для читання ${selectBook.isReading}`)
  console.log('books', books);
};

// Функція щоб повернути книгу
const returnBook = () => {
  let enterID = Number(prompt('Введіть ID книги яку ви хочете повернути!'));

  const isTrueID = books.find((book) => book.id === enterID);

  // Валідація якщо користувач нічого не ввів
  if (!enterID) {
    alert('Ви не ввели номер ID!');

    return;
  };

  // Валідація якщо користувач хотів повернути книгу, яку він не брав
  if (isTrueID.isReading === false) {
    alert(`Ви не брали книгу з ID: ${enterID}`);

    return;
  };

  isTrueID.isReading += 1;

  // Валідація якщо користувач хоче повернути лишню ніж
  if (isTrueID.isReading > isTrueID.startCountBooks) {
    alert('В бібліотеці вже є відповідна кількість даних книг, можливо ви принесли свою книгу');

    return;
  }

  alert('Ви успішно повернули книгу!');
  console.log('books', books);
};

// Функція щоб додати книгу
const addBook = () => {
  const newObj = {};

  let yourBookName = prompt('Введіть назву книги!');
  let yourAuthorName = prompt(`Введіть ім'я автора цієї книги!`);
  let bookCount = Number(prompt('Скільки екземлярів даної книги ви можете пожертвувати біліотеці?'))

  // Валідація якщо користувач нічого не ввів
  if (!yourBookName || !yourAuthorName) {
    alert('Ви не ввели дані автора');

    return;
  };

  // Валідація якщо користувач вказав невірну кількість книг
  if (!bookCount || bookCount === 0) {
    alert('Невірні кількість книг');

    return;
  }

  yourBookName = yourBookName[0].toUpperCase() + yourBookName.slice(1).toLowerCase();

  let ID = generateID();
  console.log('ID', ID);

  const spaceIndex = yourAuthorName.indexOf(' ');

  // Валідація імені автора в двох варіантах:
  // 1. Якщо ім'я автора складається з однієї частини, приклад (Юра)
  // 2. Якщо з двох частин, приклад (Юра Юра)
  if (spaceIndex === -1) {
    yourAuthorName = yourAuthorName[0].toUpperCase() + yourAuthorName.slice(1).toLowerCase();
  } else {
    yourAuthorName = yourAuthorName[0].toUpperCase() +
    yourAuthorName.slice(1, spaceIndex).toLowerCase() + ' ' +
    yourAuthorName[spaceIndex + 1].toUpperCase() +
    yourAuthorName.slice(spaceIndex + 2).toLowerCase();
  }

  const filterBookName = books
  .find((book) => book.name == yourBookName);

  // Валідація для того щоб визначити чи є книга з такою назвою у бібліотеці
  if (!filterBookName) {
    newObj.id = ID;
    newObj.name = yourBookName;
    newObj.author = yourAuthorName;
    newObj.isReading = bookCount;
    newObj.startCountBooks = bookCount;

    books.push(newObj);

    alert('Ви успішно додали книгу!')

    console.log('books', books);
  } else {
    alert('Книга з такою назвою вже є в бібліотеці!');

    return;
  }
};

// Функція щоб згенерувати ID
const generateID = () => {
  let stop = true;
  let randomID;

  // let stop = false;    //Це мій варіант, але так і не вийшло порівняти, в ньому ще були 2 аргументи!

  // do {
  //   const randomID = Math.random() * (max - min + 1);
  //   const isSameID = books.find((book) => book.id == randomID);

  //   if(!isSameID) {
  //     stop = true;
  //   } else {
  //     continue;
  //   }

  //   return Math.floor(randomID);
  // } while (!stop);

  do {
    randomID = Math.ceil(Math.random() * 10);
    stop = Boolean(books.find((book) => book.id === randomID));
  } while(stop);

  return randomID;
};