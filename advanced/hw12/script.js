const getRandomBG = () => {
  const numbers = [];

  for (i = 0; i < 3; i++) {
    const randomRGB = Math.round(Math.random() * 255);
    numbers.push(randomRGB);
  }

  // console.log('numbers', numbers);

  const background = `rgb(${numbers.join(",")})`;

  return background;
};

const createTooltip = (element, tooltipText) => {
  const target = document.getElementById(`${element}`);
  const targetCoords = target.getBoundingClientRect();
  // console.log(targetCoords);

  const tooltipContainer = document.createElement("div");
  tooltipContainer.classList.add("tooltip");
  tooltipContainer.innerText = tooltipText;

  tooltipContainer.style.backgroundColor = getRandomBG();

  const tooltip = document.body.append(tooltipContainer);

  let left =
    (target.offsetWidth - tooltipContainer.offsetWidth) / 2 + targetCoords.left;
  // let top = (target.offsetHeight - tooltipContainer.offsetHeight) / 2 + targetCoords.top - 60;
  let top = targetCoords.top - 60;

  tooltipContainer.style.left = `${left}px`;
  tooltipContainer.style.top = `${top}px`;
};

createTooltip("button", `Hello, i'm tooltip. I can change my background`);
