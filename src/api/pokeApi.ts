const POKE_API: string = "https://pokeapi.co/api/v2/pokemon/";

export function getPokemonInfo(id: number): Promise<object> {
  const apiPokemon: string = `${POKE_API}${id}`;
  return fetch(apiPokemon).then((response) => response.json());
}
