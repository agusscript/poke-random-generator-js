import { typeColors } from "./typeColors";

export const randomButton: any = document.querySelector(".random-btn");

export function showPokemonCard(pokemon: {
  name: string;
  image: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}): void {
  hideLoader();
  showPokemonImage(pokemon);
  showPokemonInfo(pokemon);
  animateStatBar("hp", pokemon.hp);
  animateStatBar("attack", pokemon.attack);
  animateStatBar("defense", pokemon.defense);
  animateStatBar("speed", pokemon.speed);
}

export function showPokemonInfo(pokemon: {
  name: string;
  image: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}): void {
  const $pokmonType: any = document.querySelector(".type");
  const $pokemonName: any = document.querySelector(".name");
  const $pokemonHp: any = document.querySelector(".hp");
  const $pokemonAttack: any = document.querySelector(".attack");
  const $pokemonDefense: any = document.querySelector(".defense");
  const $pokemonSpeed: any = document.querySelector(".speed");

  $pokmonType.textContent = pokemon.type;
  $pokmonType.style.background = typeColors[pokemon.type];
  $pokemonName.textContent = pokemon.name;
  $pokemonHp.textContent = pokemon.hp;
  $pokemonAttack.textContent = pokemon.attack;
  $pokemonDefense.textContent = pokemon.defense;
  $pokemonSpeed.textContent = pokemon.speed;
}

export function showPokemonImage(pokemon: {
  name: string;
  image: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}): void {
  const $pokemonImage: any = document.querySelector(".pokemon-image");
  const $pokemonImageContainer: any = document.querySelector(".img-container");
  $pokemonImage.style.visibility = "visible";
  $pokemonImage.src = pokemon.image;
  $pokemonImageContainer.style.background = typeColors[pokemon.type];
  $pokemonImage.animate([{ scale: 0.85 }, { scale: 1 }], 1600);
}

export function animateStatBar(stat: string, width: number): void {
  const selectedStat: any = document.querySelector(`.${stat}-bar`);

  if (width > 100) {
    width = 100;
  }

  selectedStat.animate([{ width: 0 }, { width: `${width}%` }], 1600);
  selectedStat.style.width = `${width}%`;
}

export function showLoader() {
  const loader: any = document.querySelector(".loader");
  loader.classList.remove("hide");
}

export function hideLoader() {
  const loader: any = document.querySelector(".loader");
  loader.classList.add("hide");
}

export function hidePokemonImage(): void {
  const $pokemonImage: any = document.querySelector(".pokemon-image");
  $pokemonImage.style.visibility = "hidden";
  $pokemonImage.src = "";
}
