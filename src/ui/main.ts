import { typeColors } from "./typeColors";

export const randomButton = <HTMLButtonElement>document.querySelector(".random-btn");

type Pokemon = {
  name: string;
  image: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

export function showPokemonCard(pokemon: Pokemon): void {
  hideLoader();
  showPokemonImage(pokemon);
  showPokemonInfo(pokemon);
  animateStatBar("hp", pokemon.hp);
  animateStatBar("attack", pokemon.attack);
  animateStatBar("defense", pokemon.defense);
  animateStatBar("speed", pokemon.speed);
}

export function showPokemonInfo(pokemon: Pokemon): void {
  const $pokmonType = <HTMLParagraphElement>document.querySelector(".type");
  const $pokemonName = <HTMLParagraphElement>document.querySelector(".name");
  const $pokemonHp = <HTMLSpanElement>document.querySelector(".hp");
  const $pokemonAttack = <HTMLSpanElement>document.querySelector(".attack");
  const $pokemonDefense = <HTMLSpanElement>document.querySelector(".defense");
  const $pokemonSpeed = <HTMLSpanElement>document.querySelector(".speed");

  $pokmonType.textContent = pokemon.type;
  $pokmonType.style.background = typeColors[pokemon.type];
  $pokemonName.textContent = pokemon.name;
  $pokemonHp.textContent = pokemon.hp.toString();
  $pokemonAttack.textContent = pokemon.attack.toString();
  $pokemonDefense.textContent = pokemon.defense.toString();
  $pokemonSpeed.textContent = pokemon.speed.toString();
}

export function showPokemonImage(pokemon: Pokemon): void {
  const $pokemonImage = <HTMLImageElement>document.querySelector(".pokemon-image");
  const $pokemonImageContainer = <HTMLDivElement>document.querySelector(".img-container");
  $pokemonImage.style.visibility = "visible";
  $pokemonImage.src = pokemon.image;
  $pokemonImageContainer.style.background = typeColors[pokemon.type];
  $pokemonImage.animate([{ scale: 0.85 }, { scale: 1 }], 1600);
}

export function animateStatBar(stat: string, width: number): void {
  const selectedStat = <HTMLDivElement>document.querySelector(`.${stat}-bar`);

  if (width > 100) {
    width = 100;
  }

  selectedStat.animate([{ width: 0 }, { width: `${width}%` }], 1600);
  selectedStat.style.width = `${width}%`;
}

export function showLoader() {
  const loader = <HTMLImageElement>document.querySelector(".loader");
  loader.classList.remove("hide");
}

export function hideLoader() {
  const loader = <HTMLImageElement>document.querySelector(".loader");
  loader.classList.add("hide");
}

export function hidePokemonImage(): void {
  const $pokemonImage = <HTMLImageElement>document.querySelector(".pokemon-image");
  $pokemonImage.style.visibility = "hidden";
  $pokemonImage.src = "";
}
