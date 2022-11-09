// Task 1

// const a = 5;
// const b = 10;

// console.log(`addition`, a + b);

// console.log(`subtraction`, a - b);

// console.log(`division`, a / b);

// console.log(`multiplication`, a * b);

// Task 3

// const c = Number(prompt('Enter first value: '));
// const d = Number(prompt('Enter second value: '));

// if (c > d) {
//     alert(`Yea, sure ${c} > ${d}`);
// } else if (c < d) {
//     alert(`Yea, sure ${c} < ${d}`);
// } else {
//     alert(`Yea, sure ${c} = ${d}`);
// }

// Task 4

const firstValue = Number(prompt("Enter your first value: "));
const secondValue = Number(prompt("Enter your second value: "));
const chooseOperator = (prompt("You can choose on of these operators: / * - +"));

switch (chooseOperator) {
  case '/':
    const result1 = firstValue / secondValue;
    alert(result1);
    break;
  case '*':
    const result2 = firstValue * secondValue;
    alert(result2);
    break;
  case '-':
    const result3 = firstValue - secondValue;
    alert(result3);
    break;
  case '+':
    const result4 = firstValue + secondValue;
    alert(result4);
    break;

    default:
        alert('We need some values for this operation!');
}

// Task 5

// const visitorAge = Number(prompt('How old are you?'));
// const isWithParents = confirm('Are you with parents?');

// if (visitorAge >= 18 && visitorAge <= 60) {
//     alert('Entrance to the roller coaster is available');
// } else if (visitorAge >= 12 && visitorAge <= 80 && isWithParents) {
//     alert('Entrance to the roller coaster open for you');
// } else {
//     alert('Entrance to the roller coaster is not available');
// }
