// Task 1

const getTimetable = () => {
    alert('Your online schedule welcomes you!');
    let stop = false
    const timetable = {};
    do {    
        userTime = prompt('Enter your time');
        userTask = prompt('Tell me what you want to do?');

        if (userTime === null || userTask === null) {
            stop = true;
            break;
        } else if (!userTask || !userTime) {
            alert('You have not entered anything');
        } else {
            timetable[userTime] = userTask;
            alert('Your task have been added');
        }
    }while(!stop);

    if (Object.keys(timetable).length == 0) {
        alert('Your timetable is empty, reload page and add some tasks!');
    } else { 
    alert('Your timetable is ready, look at the console!');
    return timetable;
    }
}

const completeTimetable= getTimetable();
console.log('completeTimetable', completeTimetable);    

// Task 2
const salaries = {
    John: '4300.00',
    Ann: '5700.40',
    Pete: '4900.95',
};


const getSalariesSum = (salaries) => {
    let total = 0;
    for (let employee in salaries) {
        total += Number(salaries[employee]);
    }
    return total.toFixed(2);
};

const totalResult = getSalariesSum(salaries);
console.log('totalResult', totalResult);