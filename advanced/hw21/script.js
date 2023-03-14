// LAST HW

const cardsContainer = document.getElementById("cards-container");
const form = document.getElementById("form");
const select = document.getElementById("select");
const input = document.getElementById("input");
const submitBtn = document.getElementById("button");

class Card {
  constructor() {
    this.card = document.createElement("div");
    // this.renderCard();
  }

  renderCard() {
    const closeElement = document.createElement("p");
    this.card.classList.add("card");
    closeElement.innerText = "X";
    closeElement.classList.add("close-element");
    cardsContainer.classList.add("cards-container");

    this.card.append(closeElement);
    cardsContainer.append(this.card);

    closeElement.addEventListener("click", () => {
      this.card.remove();
    });
  }
}

class PlanetCard extends Card {
  constructor({ name, climate, terrain, population, ...rest }) {
    super(rest);

    this.name = name;
    this.climate = climate;
    this.terrain = terrain;
    this.population = population;

    this.renderCard();
  }

  renderCard() {
    super.renderCard();

    const planetName = document.createElement("h3");
    const planetClimate = document.createElement("p");
    const planetTerrain = document.createElement("p");
    const planetPopulation = document.createElement("p");

    planetName.innerText = this.name;
    planetClimate.innerText = this.climate;
    planetTerrain.innerText = this.terrain;
    planetPopulation.innerText = this.population;

    this.card.append(
      planetName,
      planetClimate,
      planetTerrain,
      planetPopulation
    );
  }
}

class StarshipCard extends Card {
  constructor({ name, model, manufacturer, max_atmosphering_speed, ...rest }) {
    super(rest);

    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.max_atmosphering_speed = max_atmosphering_speed;

    this.renderCard();
  }

  renderCard() {
    super.renderCard();

    const starshipName = document.createElement("h3");
    const starshipModel = document.createElement("p");
    const starshipManufacturer = document.createElement("p");
    const starshipMaxAtmosphereSpeed = document.createElement("p");

    starshipName.innerText = this.name;
    starshipModel.innerText = this.model;
    starshipManufacturer.innerText = this.manufacturer;
    starshipMaxAtmosphereSpeed.innerText = this.max_atmosphering_speed;

    this.card.append(
      starshipName,
      starshipModel,
      starshipManufacturer,
      starshipMaxAtmosphereSpeed
    );
  }
}

class VehicleCard extends Card {
  constructor({ name, cost_in_credits, crew, passengers, ...rest }) {
    super(rest);

    this.name = name;
    this.cost_in_credits = cost_in_credits;
    this.crew = crew;
    this.passengers = passengers;

    this.renderCard();
  }

  renderCard() {
    super.renderCard();

    const vehicleName = document.createElement("h3");
    const vehicleCostInCredits = document.createElement("p");
    const vehicleCrew = document.createElement("p");
    const vehiclePassengers = document.createElement("p");

    vehicleName.innerText = this.name;
    vehicleCostInCredits.innerText = this.cost_in_credits;
    vehicleCrew.innerText = this.crew;
    vehiclePassengers.innerText = this.passengers;

    this.card.append(
      vehicleName,
      vehicleCostInCredits,
      vehicleCrew,
      vehiclePassengers
    );
  }
}

class API {
  constructor() {
    this.BASE_URL = "https://swapi.dev/api";
  }

  findErrors = async (response) => {
    if (!response.ok) {
      const { detail } = await response.json();
      throw new Error(detail);
    }

    return response;
  };

  getPlanet = async (id) => {
    const planet = await this.sendRequest(`${this.BASE_URL}/planets/${id}`);
    return planet;
  };

  getStarship = async (id) => {
    const starship = await this.sendRequest(`${this.BASE_URL}/starships/${id}`);
    return starship;
  };

  getVehicle = async (id) => {
    const vehicle = await this.sendRequest(`${this.BASE_URL}/vehicles/${id}`);
    return vehicle;
  };

  sendRequest = async (url) => {
    const response = await this.findErrors(await fetch(url));
    const result = await response.json();
    return result;
  };
}

const api = new API();

const CARD_MAP = {
  planet: PlanetCard,
  starship: StarshipCard,
  vehicle: VehicleCard,
};

const API_MAP = {
  planet: api.getPlanet,
  starship: api.getStarship,
  vehicle: api.getVehicle,
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const value = select.value;
  const id = input.value;

  try {
    const item = await API_MAP[value](id);
    const card = new CARD_MAP[value](item);
  } catch (error) {
    alert(error.message);
  }
};

form.addEventListener("submit", handleSubmit);
