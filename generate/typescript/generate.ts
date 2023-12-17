/* eslint-disable global-require */
import fs from 'fs';
import YAML from 'yaml';
import { GenerateObjectFromPokemon, GenerateObjects } from './objects';

interface EnumConfig {
  name: string;
  source: string;
  dest: string;
  getKeyAndStr?: string;
}

interface Config {
  enums: EnumConfig[];
}

GenerateObjects();
