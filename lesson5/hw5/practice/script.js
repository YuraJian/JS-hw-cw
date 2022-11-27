const drawPyramid = (height) => {
    for (let i = 0; i < height; i++) {
        let spacesBefore = '';
        let stars = '';

        for (let j = 0; j < 2 * i + 1; j++) {
            stars += '*';
        }

        for (let k = 0; k < height - i - 1; k++) {
            spacesBefore += ' ';
        }
        console.log(spacesBefore + stars);
    }
}

const result = Number(prompt('What height of pyramid do you want?'));
drawPyramid(result);