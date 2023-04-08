const typeColors = {
  grass: "linear-gradient(to right, #6fce40, #103000)",
  steel: "linear-gradient(to right, #66c0e0, #002e3f)",
  water: "linear-gradient(to right, #318bff, #00224e)",
  dragon: "linear-gradient(to right, #5b6eff, #000846)",
  electric: "linear-gradient(to right, #ffce2c, #3f3000)",
  ghost: "linear-gradient(to right, #a353a3, #360036)",
  fire: "linear-gradient(to right, #ff2929, #3a0000)",
  normal: "linear-gradient(to right, #c0c0c0, #252525)",
  ice: "linear-gradient(to right, #3fd8ff, #002630)",
  fighting: "linear-gradient(to right, #ff8000, #291400)",
  bug: "linear-gradient(to right, #91a119, #1e2200)",
  psychic: "linear-gradient(to right, #f14179, #3b0013)",
  rock: "linear-gradient(to right, #afa981, #241f00)",
  ground: "linear-gradient(to right, #915121, #2c1300)",
  poison: "linear-gradient(to right, #9141cb, #22003a)",
  fairy: "linear-gradient(to right, #f170f1, #470047)"
};

function getApiData() {
  fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomNumber(1, 151))
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
  document.querySelector(".attack").textContent = `Attack: ${pokemon.attack}`;
  document.querySelector(".defense").textContent = `Defense: ${pokemon.defense}`;
  document.querySelector(".speed").textContent = `Speed: ${pokemon.speed}`;
  document.querySelector(".img-container").style.background = typeColors[pokemon.type];

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
/*
animateStatBar("hp", 46);
animateStatBar("attack", 73);
animateStatBar("defense", 56);
animateStatBar("speed", 85);
*/

// document.querySelector(".img-container").style.background = typeColors.poison;

getApiData();


