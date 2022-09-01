const main = document.querySelector("main");
const pageCount = document.querySelector(".buttons span");
let page = 1;

async function createCard(page) {
  let characters = await getCharacters(page);

  characters.forEach((character) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
  <strong>${character.name}</strong>
  <div><img src=${character.image} alt=${character.name} /></div>
  <span>${character.species}</span>
  <p>
    Location: ${character.location.name}
  </p>
  <p>
    Status: ${character.status}
  </p>
  <p>
  Participated Episodes: ${character.episode.length}
  </p>
  `;
    main.append(div);
  });
}

async function fetchPersons(page = 1) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const responseJson = await response.json();

  return responseJson.results;
}

async function getCharacters(page) {
  let data = [];
  data = await fetchPersons(page);

  return data;
}

function clearCards() {
  main.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });
}
function next() {
  if (page == 42) {
    page = 0;
  }
  page++;
  pageCount.textContent = `Página atual : ${page} de 42`;
  clearCards();
  createCard(page);
}

function prev() {
  if (page == 1) {
    page = 43;
  }
  page--;
  pageCount.textContent = `Página atual : ${page} de 42`;
  clearCards();
  createCard(page);
}

createCard();
