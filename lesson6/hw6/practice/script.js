// Task 1

const getRGBFromHex = (hexCode) => {
    let red = hexCode.slice(1, 3);
    let green = hexCode.slice(3, 5);
    let blue = hexCode.slice(5, 7);

    let decimalRed = parseInt(red, 16);
    let decimalGreen = parseInt(green, 16);
    let decimalBlue = parseInt(blue, 16);

    return `rgb(${decimalRed}, ${decimalGreen}, ${decimalBlue})`
}

const RGBResult = getRGBFromHex('#abacad');
console.log(RGBResult);

// Task 2

const getHexFromRGB = (red, green, blue) => {
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

const hexResult = getHexFromRGB(23, 23, 176);
console.log(hexResult);