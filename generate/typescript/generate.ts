/* eslint-disable global-require */
import PokemonData from '../JSON/Pokemon.json'
import { generateEnumFromList } from './enums'
import { GenerateObjects } from './objects'

interface EnumConfig {
  name: string
  source: string
  dest: string
  getKeyAndStr?: string
}

interface Config {
  enums: EnumConfig[]
}

GenerateObjects()

generateEnumFromList(
  'NationalDex',
  ['Egg', ...Object.values(PokemonData).map((mon) => mon.name)],
  'national-dex.ts',
  undefined
)
