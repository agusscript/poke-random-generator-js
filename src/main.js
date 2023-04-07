function getApiData() {
  fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomNumber(1, 150))
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const pokemon = {
        name: data.name,
        img: data.sprites.other["official-artwork"].front_default,
        id: data.id,
        type: data.types[0].type.name,
      };

      showPokemonData(pokemon);
    })
    .catch((error) => console.error("Failed", error));
}

function showPokemonData(pokemon) {
  document.querySelector("h1").textContent = pokemon.name;
  document.querySelector("img").src = pokemon.img;
  document.querySelector(".number").textContent = `ID: ${pokemon.id}`;
  document.querySelector(".type").textContent = `Type: ${pokemon.type}`;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getApiData();
