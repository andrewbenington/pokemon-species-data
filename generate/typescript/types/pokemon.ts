import Forme from './forme';

export type LevelUpType =
  | 'Slow'
  | 'Medium Slow'
  | 'Medium Fast'
  | 'Fast'
  | 'Erratic'
  | 'Fluctuating';

type Pokemon = {
  readonly name: string;
  readonly nationalDex: number;
  readonly formes: readonly Forme[];
  readonly levelUpType: LevelUpType;
};

export default Pokemon;
