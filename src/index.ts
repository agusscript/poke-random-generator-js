import { getPokemonInfo } from "./api/pokeApi";
import { mapPokemon } from "./mappers/mapper";
import { hidePokemonImage, showLoader, showPokemonCard, randomButton } from "./ui/main";

async function showPokemon(): Promise<void> {
  const pokemonId: number = getRandomNumber(1, 151);
  hidePokemonImage();
  showLoader();

  try {
    const pokemonInfo = await getPokemonInfo(pokemonId);
    const pokemon = mapPokemon(pokemonInfo);
    showPokemonCard(pokemon);
  } catch (error) {
    console.error(error);
  }
}

function getRandomNumber(minValue: number, maxValue: number): number {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

randomButton.onclick = showPokemon;

showPokemon();
