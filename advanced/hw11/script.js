const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

// const productCards = (arr) => {
//   const container = document.createElement("div");

//   document.body.append(container);

//   arr.forEach((item) => {
//     const title = document.createElement("h1");
//     title.innerText = item.brand;

//     // console.log('title', title)

//     const subtitle = document.createElement("h2");
//     subtitle.innerText = item.name;

//     const propertiesList = document.createElement("ul");
//     // console.log('subtitle', subtitle)

//     item.properties.forEach((item) => {
//       const propertiesListItem = document.createElement("li");
//       propertiesListItem.innerText = item;

//       // console.log('propertiesListItem', propertiesListItem)

//       propertiesList.append(propertiesListItem);

//       container.append(title, subtitle, propertiesList);
//     });
//   });
// };

// productCards(products);

const productCards = (arr) => {
  const container = document.createElement("div");

  const productsCardsContainer = arr
  .map((item) => {
    const fullCard = `
    <h1>${item.brand}</h1>
    <h2>${item.name}</h2>
    <ul>
      ${item.properties
        .map((item) => `<li>${item}</li>`)
        .join('')} 
    </ul>
    `;

    return fullCard;
  })
  .join('');

  container.innerHTML = productsCardsContainer;

  console.log("container", container);

  return container;
};

const bigContainer = productCards(products);
document.body.append(bigContainer);
