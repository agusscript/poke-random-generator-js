import { getPokemonInfo } from "./api/pokeApi";
import { mapPokemon } from "./mappers/mapper";
import {
  hidePokemonImage,
  showLoader,
  showPokemonCard,
  randomButton,
} from "./ui/main";

function showPokemon(): void {
  hidePokemonImage();
  showLoader();

  const randomId: number = getRandomNumber(1, 151);

  getPokemonInfo(randomId).then((pokemonInfo) => {
    const pokemon = mapPokemon(pokemonInfo);
    setTimeout(() => {
      showPokemonCard(pokemon);
    }, 400);
  });
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

randomButton.onclick = showPokemon;

showPokemon();
