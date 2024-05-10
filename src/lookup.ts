import { PokemonData } from './data'

export function getGenderRatio(dexNumber: number, formeNumber: number) {
  return PokemonData[dexNumber].formes[formeNumber].genderRatio
}
