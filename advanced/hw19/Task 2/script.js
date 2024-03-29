const containerAll = document.getElementById("container");
const form = document.getElementById("form");
const input = document.getElementById("input");
const characterButton = document.getElementById("button");
const characterContainer = document.getElementById("character_container");

const PEOPLE_URL = "https://swapi.dev/api/people/";

const handleRequestErrors = async (response) => {
  if (!response.ok) {
    let { error } = await response.json();
    throw new Error(response.status);
  }

  return response;
};

const getAllMovies = async (response) => {
  const { films } = response;

  console.log("films", films);

  const requests = films.map((film) => fetch(film));
  const responses = await Promise.all(requests);
  const jsonResponses = responses.map((resp) => resp.json());
  const filmsResult = await Promise.all(jsonResponses);
  console.log("filmsResult", filmsResult);

  renderMoviesList(filmsResult);
};

const renderMoviesList = async (response) => {
  const mapResponse = response.forEach((film) => {
    const { title } = film;

    const filmTitle = document.createElement("h2");
    filmTitle.innerText = title;

    characterContainer.append(filmTitle);
  });
};

const renderCharacter = (response) => {
  const { name } = response;

  const characterName = document.createElement("h2");
  const moviesButton = document.createElement("button");

  characterName.innerText = name;
  moviesButton.innerText = "Show Movies";

  characterContainer.innerHTML = "";

  characterContainer.append(characterName, moviesButton);
  containerAll.append(characterContainer);

  moviesButton.addEventListener("click", () => {
    getAllMovies(response);
  });
};

const getPeopleByID = async (id) => {
  try {
    const request = await handleRequestErrors(
      await fetch(`${PEOPLE_URL}${id}`)
    );
    const result = await request.json();

    await renderCharacter(result);
  } catch (err) {
    const status = Number(err.message);
    if (status === 404) {
      alert(`${status}: Character Not Found`);
    } else {
      alert("Error");
    }
  }

  // console.log("result", result);
};

const handleSubmit = (event) => {
  event.preventDefault();

  const inputValue = Number(input.value);
  //   console.log(inputValue);

  if (!inputValue) {
    alert("You have not entered anything!");
    return;
  }

  if (typeof inputValue !== "number") {
    alert("You have entered no number!");
    return;
  }

  getPeopleByID(inputValue);
};

form.addEventListener("submit", handleSubmit);