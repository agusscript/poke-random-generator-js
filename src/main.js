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
        hp: data.stats[0].base_stat,
        defense: data.stats[1].base_stat,
        attack: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
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
  document.querySelector(".hp").textContent = `HP: ${pokemon.hp}`;
  document.querySelector(".attack").textContent = `Atack: ${pokemon.attack}`;
  document.querySelector(".defense").textContent = `Defense: ${pokemon.defense}`;
  document.querySelector(".speed").textContent = `Speed: ${pokemon.speed}`;

  animateStatBar("hp", pokemon.hp);
  animateStatBar("attack", pokemon.attack);
  animateStatBar("defense", pokemon.defense);
  animateStatBar("speed", pokemon.speed);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function animateStatBar(stat, width) {
  const selectedStat = document.querySelector(`.${stat}-bar`);

  if (width > 100) {
    width = 100;
  }

  selectedStat.animate([{ width: 0 }, { width: `${width}%` }], 2000);
  selectedStat.style.width = `${width}%`;
}

getApiData();
