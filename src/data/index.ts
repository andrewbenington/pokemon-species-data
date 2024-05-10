import { Pokemon } from '../types'
import { Gen1PokemonData } from './gen1'
import { Gen2PokemonData } from './gen2'
import { Gen3PokemonData } from './gen3'
import { Gen4PokemonData } from './gen4'
import { Gen5PokemonData } from './gen5'
import { Gen6PokemonData } from './gen6'
import { Gen7PokemonData } from './gen7'
import { Gen8PokemonData } from './gen8'
import { Gen9PokemonData } from './gen9'

export * from './gen1'
export * from './gen2'
export * from './gen3'
export * from './gen4'
export * from './gen5'
export * from './gen6'
export * from './gen7'
export * from './gen8'
export * from './gen9'

export const PokemonData: { readonly [key: number]: Pokemon } = {
  ...Gen1PokemonData,
  ...Gen2PokemonData,
  ...Gen3PokemonData,
  ...Gen4PokemonData,
  ...Gen5PokemonData,
  ...Gen6PokemonData,
  ...Gen7PokemonData,
  ...Gen8PokemonData,
  ...Gen9PokemonData,
}
