import { Type } from 'pokemon-resources';

declare type Forme = {
    readonly name: string;
    readonly formeName: string;
    readonly formeNumber: number;
    readonly isBaseForme: boolean;
    readonly isMega: boolean;
    readonly isGMax: boolean;
    readonly isBattleOnly: boolean;
    readonly alias: string;
    readonly types: readonly Type[];
    readonly genderRatio: {
        readonly male: number;
        readonly female: number;
    };
    readonly baseStats: {
        readonly hp: number;
        readonly atk: number;
        readonly def: number;
        readonly spa: number;
        readonly spd: number;
        readonly spe: number;
    };
    readonly ability1: string;
    readonly ability2: string | null;
    readonly abilityH: string | null;
    readonly height: number;
    readonly weight: number;
    readonly evos: readonly FormeReference[];
    readonly prevo: FormeReference | null;
    readonly eggGroups: readonly string[];
    readonly gen: number;
    readonly regional: RegionalForme | null;
    readonly subLegendary: boolean;
    readonly restrictedLegendary: boolean;
    readonly ultraBeast: boolean;
    readonly paradox: boolean;
    readonly mythical: boolean;
    readonly cosmeticForme: boolean;
    readonly sprite: string;
    readonly spriteIndex: readonly [number, number];
};
declare type RegionalForme = 'Alola' | 'Galar' | 'Hisui' | 'Paldea';
declare type FormeReference = {
    readonly dexNumber: number;
    readonly formeNumber: number;
};

declare type LevelUpType = 'Slow' | 'Medium Slow' | 'Medium Fast' | 'Fast' | 'Erratic' | 'Fluctuating';
declare type Pokemon = {
    readonly name: string;
    readonly nationalDex: number;
    readonly formes: readonly Forme[];
    readonly levelUpType: LevelUpType;
};

declare const Bulbasaur: Pokemon;

declare const bulbasaur_Bulbasaur: typeof Bulbasaur;
declare namespace bulbasaur {
  export { bulbasaur_Bulbasaur as Bulbasaur };
}

declare const Ivysaur: Pokemon;

declare const ivysaur_Ivysaur: typeof Ivysaur;
declare namespace ivysaur {
  export { ivysaur_Ivysaur as Ivysaur };
}

declare const Venusaur: Pokemon;

declare const venusaur_Venusaur: typeof Venusaur;
declare namespace venusaur {
  export { venusaur_Venusaur as Venusaur };
}

declare const Charmander: Pokemon;

declare const charmander_Charmander: typeof Charmander;
declare namespace charmander {
  export { charmander_Charmander as Charmander };
}

declare const Charmeleon: Pokemon;

declare const charmeleon_Charmeleon: typeof Charmeleon;
declare namespace charmeleon {
  export { charmeleon_Charmeleon as Charmeleon };
}

declare const Charizard: Pokemon;

declare const charizard_Charizard: typeof Charizard;
declare namespace charizard {
  export { charizard_Charizard as Charizard };
}

declare const Squirtle: Pokemon;

declare const squirtle_Squirtle: typeof Squirtle;
declare namespace squirtle {
  export { squirtle_Squirtle as Squirtle };
}

declare const Wartortle: Pokemon;

declare const wartortle_Wartortle: typeof Wartortle;
declare namespace wartortle {
  export { wartortle_Wartortle as Wartortle };
}

declare const Blastoise: Pokemon;

declare const blastoise_Blastoise: typeof Blastoise;
declare namespace blastoise {
  export { blastoise_Blastoise as Blastoise };
}

declare const Caterpie: Pokemon;

declare const caterpie_Caterpie: typeof Caterpie;
declare namespace caterpie {
  export { caterpie_Caterpie as Caterpie };
}

declare const Metapod: Pokemon;

declare const metapod_Metapod: typeof Metapod;
declare namespace metapod {
  export { metapod_Metapod as Metapod };
}

declare const Butterfree: Pokemon;

declare const butterfree_Butterfree: typeof Butterfree;
declare namespace butterfree {
  export { butterfree_Butterfree as Butterfree };
}

declare const Weedle: Pokemon;

declare const weedle_Weedle: typeof Weedle;
declare namespace weedle {
  export { weedle_Weedle as Weedle };
}

declare const Kakuna: Pokemon;

declare const kakuna_Kakuna: typeof Kakuna;
declare namespace kakuna {
  export { kakuna_Kakuna as Kakuna };
}

declare const Beedrill: Pokemon;

declare const beedrill_Beedrill: typeof Beedrill;
declare namespace beedrill {
  export { beedrill_Beedrill as Beedrill };
}

declare const Pidgey: Pokemon;

declare const pidgey_Pidgey: typeof Pidgey;
declare namespace pidgey {
  export { pidgey_Pidgey as Pidgey };
}

declare const Pidgeotto: Pokemon;

declare const pidgeotto_Pidgeotto: typeof Pidgeotto;
declare namespace pidgeotto {
  export { pidgeotto_Pidgeotto as Pidgeotto };
}

declare const Pidgeot: Pokemon;

declare const pidgeot_Pidgeot: typeof Pidgeot;
declare namespace pidgeot {
  export { pidgeot_Pidgeot as Pidgeot };
}

declare const Rattata: Pokemon;

declare const rattata_Rattata: typeof Rattata;
declare namespace rattata {
  export { rattata_Rattata as Rattata };
}

declare const Raticate: Pokemon;

declare const raticate_Raticate: typeof Raticate;
declare namespace raticate {
  export { raticate_Raticate as Raticate };
}

declare const Spearow: Pokemon;

declare const spearow_Spearow: typeof Spearow;
declare namespace spearow {
  export { spearow_Spearow as Spearow };
}

declare const Fearow: Pokemon;

declare const fearow_Fearow: typeof Fearow;
declare namespace fearow {
  export { fearow_Fearow as Fearow };
}

declare const Ekans: Pokemon;

declare const ekans_Ekans: typeof Ekans;
declare namespace ekans {
  export { ekans_Ekans as Ekans };
}

declare const Arbok: Pokemon;

declare const arbok_Arbok: typeof Arbok;
declare namespace arbok {
  export { arbok_Arbok as Arbok };
}

declare const Pikachu: Pokemon;

declare const pikachu_Pikachu: typeof Pikachu;
declare namespace pikachu {
  export { pikachu_Pikachu as Pikachu };
}

declare const Raichu: Pokemon;

declare const raichu_Raichu: typeof Raichu;
declare namespace raichu {
  export { raichu_Raichu as Raichu };
}

declare const Sandshrew: Pokemon;

declare const sandshrew_Sandshrew: typeof Sandshrew;
declare namespace sandshrew {
  export { sandshrew_Sandshrew as Sandshrew };
}

declare const Sandslash: Pokemon;

declare const sandslash_Sandslash: typeof Sandslash;
declare namespace sandslash {
  export { sandslash_Sandslash as Sandslash };
}

declare const NidoranF: Pokemon;

declare const nidoranf_NidoranF: typeof NidoranF;
declare namespace nidoranf {
  export { nidoranf_NidoranF as NidoranF };
}

declare const Nidorina: Pokemon;

declare const nidorina_Nidorina: typeof Nidorina;
declare namespace nidorina {
  export { nidorina_Nidorina as Nidorina };
}

declare const Nidoqueen: Pokemon;

declare const nidoqueen_Nidoqueen: typeof Nidoqueen;
declare namespace nidoqueen {
  export { nidoqueen_Nidoqueen as Nidoqueen };
}

declare const NidoranM: Pokemon;

declare const nidoranm_NidoranM: typeof NidoranM;
declare namespace nidoranm {
  export { nidoranm_NidoranM as NidoranM };
}

declare const Nidorino: Pokemon;

declare const nidorino_Nidorino: typeof Nidorino;
declare namespace nidorino {
  export { nidorino_Nidorino as Nidorino };
}

declare const Nidoking: Pokemon;

declare const nidoking_Nidoking: typeof Nidoking;
declare namespace nidoking {
  export { nidoking_Nidoking as Nidoking };
}

declare const Clefairy: Pokemon;

declare const clefairy_Clefairy: typeof Clefairy;
declare namespace clefairy {
  export { clefairy_Clefairy as Clefairy };
}

declare const Clefable: Pokemon;

declare const clefable_Clefable: typeof Clefable;
declare namespace clefable {
  export { clefable_Clefable as Clefable };
}

declare const Vulpix: Pokemon;

declare const vulpix_Vulpix: typeof Vulpix;
declare namespace vulpix {
  export { vulpix_Vulpix as Vulpix };
}

declare const Ninetales: Pokemon;

declare const ninetales_Ninetales: typeof Ninetales;
declare namespace ninetales {
  export { ninetales_Ninetales as Ninetales };
}

declare const Jigglypuff: Pokemon;

declare const jigglypuff_Jigglypuff: typeof Jigglypuff;
declare namespace jigglypuff {
  export { jigglypuff_Jigglypuff as Jigglypuff };
}

declare const Wigglytuff: Pokemon;

declare const wigglytuff_Wigglytuff: typeof Wigglytuff;
declare namespace wigglytuff {
  export { wigglytuff_Wigglytuff as Wigglytuff };
}

declare const Zubat: Pokemon;

declare const zubat_Zubat: typeof Zubat;
declare namespace zubat {
  export { zubat_Zubat as Zubat };
}

declare const Golbat: Pokemon;

declare const golbat_Golbat: typeof Golbat;
declare namespace golbat {
  export { golbat_Golbat as Golbat };
}

declare const Oddish: Pokemon;

declare const oddish_Oddish: typeof Oddish;
declare namespace oddish {
  export { oddish_Oddish as Oddish };
}

declare const Gloom: Pokemon;

declare const gloom_Gloom: typeof Gloom;
declare namespace gloom {
  export { gloom_Gloom as Gloom };
}

declare const Vileplume: Pokemon;

declare const vileplume_Vileplume: typeof Vileplume;
declare namespace vileplume {
  export { vileplume_Vileplume as Vileplume };
}

declare const Paras: Pokemon;

declare const paras_Paras: typeof Paras;
declare namespace paras {
  export { paras_Paras as Paras };
}

declare const Parasect: Pokemon;

declare const parasect_Parasect: typeof Parasect;
declare namespace parasect {
  export { parasect_Parasect as Parasect };
}

declare const Venonat: Pokemon;

declare const venonat_Venonat: typeof Venonat;
declare namespace venonat {
  export { venonat_Venonat as Venonat };
}

declare const Venomoth: Pokemon;

declare const venomoth_Venomoth: typeof Venomoth;
declare namespace venomoth {
  export { venomoth_Venomoth as Venomoth };
}

declare const Diglett: Pokemon;

declare const diglett_Diglett: typeof Diglett;
declare namespace diglett {
  export { diglett_Diglett as Diglett };
}

declare const Dugtrio: Pokemon;

declare const dugtrio_Dugtrio: typeof Dugtrio;
declare namespace dugtrio {
  export { dugtrio_Dugtrio as Dugtrio };
}

declare const Meowth: Pokemon;

declare const meowth_Meowth: typeof Meowth;
declare namespace meowth {
  export { meowth_Meowth as Meowth };
}

declare const Persian: Pokemon;

declare const persian_Persian: typeof Persian;
declare namespace persian {
  export { persian_Persian as Persian };
}

declare const Psyduck: Pokemon;

declare const psyduck_Psyduck: typeof Psyduck;
declare namespace psyduck {
  export { psyduck_Psyduck as Psyduck };
}

declare const Golduck: Pokemon;

declare const golduck_Golduck: typeof Golduck;
declare namespace golduck {
  export { golduck_Golduck as Golduck };
}

declare const Mankey: Pokemon;

declare const mankey_Mankey: typeof Mankey;
declare namespace mankey {
  export { mankey_Mankey as Mankey };
}

declare const Primeape: Pokemon;

declare const primeape_Primeape: typeof Primeape;
declare namespace primeape {
  export { primeape_Primeape as Primeape };
}

declare const Growlithe: Pokemon;

declare const growlithe_Growlithe: typeof Growlithe;
declare namespace growlithe {
  export { growlithe_Growlithe as Growlithe };
}

declare const Arcanine: Pokemon;

declare const arcanine_Arcanine: typeof Arcanine;
declare namespace arcanine {
  export { arcanine_Arcanine as Arcanine };
}

declare const Poliwag: Pokemon;

declare const poliwag_Poliwag: typeof Poliwag;
declare namespace poliwag {
  export { poliwag_Poliwag as Poliwag };
}

declare const Poliwhirl: Pokemon;

declare const poliwhirl_Poliwhirl: typeof Poliwhirl;
declare namespace poliwhirl {
  export { poliwhirl_Poliwhirl as Poliwhirl };
}

declare const Poliwrath: Pokemon;

declare const poliwrath_Poliwrath: typeof Poliwrath;
declare namespace poliwrath {
  export { poliwrath_Poliwrath as Poliwrath };
}

declare const Abra: Pokemon;

declare const abra_Abra: typeof Abra;
declare namespace abra {
  export { abra_Abra as Abra };
}

declare const Kadabra: Pokemon;

declare const kadabra_Kadabra: typeof Kadabra;
declare namespace kadabra {
  export { kadabra_Kadabra as Kadabra };
}

declare const Alakazam: Pokemon;

declare const alakazam_Alakazam: typeof Alakazam;
declare namespace alakazam {
  export { alakazam_Alakazam as Alakazam };
}

declare const Machop: Pokemon;

declare const machop_Machop: typeof Machop;
declare namespace machop {
  export { machop_Machop as Machop };
}

declare const Machoke: Pokemon;

declare const machoke_Machoke: typeof Machoke;
declare namespace machoke {
  export { machoke_Machoke as Machoke };
}

declare const Machamp: Pokemon;

declare const machamp_Machamp: typeof Machamp;
declare namespace machamp {
  export { machamp_Machamp as Machamp };
}

declare const Bellsprout: Pokemon;

declare const bellsprout_Bellsprout: typeof Bellsprout;
declare namespace bellsprout {
  export { bellsprout_Bellsprout as Bellsprout };
}

declare const Weepinbell: Pokemon;

declare const weepinbell_Weepinbell: typeof Weepinbell;
declare namespace weepinbell {
  export { weepinbell_Weepinbell as Weepinbell };
}

declare const Victreebel: Pokemon;

declare const victreebel_Victreebel: typeof Victreebel;
declare namespace victreebel {
  export { victreebel_Victreebel as Victreebel };
}

declare const Tentacool: Pokemon;

declare const tentacool_Tentacool: typeof Tentacool;
declare namespace tentacool {
  export { tentacool_Tentacool as Tentacool };
}

declare const Tentacruel: Pokemon;

declare const tentacruel_Tentacruel: typeof Tentacruel;
declare namespace tentacruel {
  export { tentacruel_Tentacruel as Tentacruel };
}

declare const Geodude: Pokemon;

declare const geodude_Geodude: typeof Geodude;
declare namespace geodude {
  export { geodude_Geodude as Geodude };
}

declare const Graveler: Pokemon;

declare const graveler_Graveler: typeof Graveler;
declare namespace graveler {
  export { graveler_Graveler as Graveler };
}

declare const Golem: Pokemon;

declare const golem_Golem: typeof Golem;
declare namespace golem {
  export { golem_Golem as Golem };
}

declare const Ponyta: Pokemon;

declare const ponyta_Ponyta: typeof Ponyta;
declare namespace ponyta {
  export { ponyta_Ponyta as Ponyta };
}

declare const Rapidash: Pokemon;

declare const rapidash_Rapidash: typeof Rapidash;
declare namespace rapidash {
  export { rapidash_Rapidash as Rapidash };
}

declare const Slowpoke: Pokemon;

declare const slowpoke_Slowpoke: typeof Slowpoke;
declare namespace slowpoke {
  export { slowpoke_Slowpoke as Slowpoke };
}

declare const Slowbro: Pokemon;

declare const slowbro_Slowbro: typeof Slowbro;
declare namespace slowbro {
  export { slowbro_Slowbro as Slowbro };
}

declare const Magnemite: Pokemon;

declare const magnemite_Magnemite: typeof Magnemite;
declare namespace magnemite {
  export { magnemite_Magnemite as Magnemite };
}

declare const Magneton: Pokemon;

declare const magneton_Magneton: typeof Magneton;
declare namespace magneton {
  export { magneton_Magneton as Magneton };
}

declare const Farfetchd: Pokemon;

declare const farfetchd_Farfetchd: typeof Farfetchd;
declare namespace farfetchd {
  export { farfetchd_Farfetchd as Farfetchd };
}

declare const Doduo: Pokemon;

declare const doduo_Doduo: typeof Doduo;
declare namespace doduo {
  export { doduo_Doduo as Doduo };
}

declare const Dodrio: Pokemon;

declare const dodrio_Dodrio: typeof Dodrio;
declare namespace dodrio {
  export { dodrio_Dodrio as Dodrio };
}

declare const Seel: Pokemon;

declare const seel_Seel: typeof Seel;
declare namespace seel {
  export { seel_Seel as Seel };
}

declare const Dewgong: Pokemon;

declare const dewgong_Dewgong: typeof Dewgong;
declare namespace dewgong {
  export { dewgong_Dewgong as Dewgong };
}

declare const Grimer: Pokemon;

declare const grimer_Grimer: typeof Grimer;
declare namespace grimer {
  export { grimer_Grimer as Grimer };
}

declare const Muk: Pokemon;

declare const muk_Muk: typeof Muk;
declare namespace muk {
  export { muk_Muk as Muk };
}

declare const Shellder: Pokemon;

declare const shellder_Shellder: typeof Shellder;
declare namespace shellder {
  export { shellder_Shellder as Shellder };
}

declare const Cloyster: Pokemon;

declare const cloyster_Cloyster: typeof Cloyster;
declare namespace cloyster {
  export { cloyster_Cloyster as Cloyster };
}

declare const Gastly: Pokemon;

declare const gastly_Gastly: typeof Gastly;
declare namespace gastly {
  export { gastly_Gastly as Gastly };
}

declare const Haunter: Pokemon;

declare const haunter_Haunter: typeof Haunter;
declare namespace haunter {
  export { haunter_Haunter as Haunter };
}

declare const Gengar: Pokemon;

declare const gengar_Gengar: typeof Gengar;
declare namespace gengar {
  export { gengar_Gengar as Gengar };
}

declare const Onix: Pokemon;

declare const onix_Onix: typeof Onix;
declare namespace onix {
  export { onix_Onix as Onix };
}

declare const Drowzee: Pokemon;

declare const drowzee_Drowzee: typeof Drowzee;
declare namespace drowzee {
  export { drowzee_Drowzee as Drowzee };
}

declare const Hypno: Pokemon;

declare const hypno_Hypno: typeof Hypno;
declare namespace hypno {
  export { hypno_Hypno as Hypno };
}

declare const Krabby: Pokemon;

declare const krabby_Krabby: typeof Krabby;
declare namespace krabby {
  export { krabby_Krabby as Krabby };
}

declare const Kingler: Pokemon;

declare const kingler_Kingler: typeof Kingler;
declare namespace kingler {
  export { kingler_Kingler as Kingler };
}

declare const Voltorb: Pokemon;

declare const voltorb_Voltorb: typeof Voltorb;
declare namespace voltorb {
  export { voltorb_Voltorb as Voltorb };
}

declare const Electrode: Pokemon;

declare const electrode_Electrode: typeof Electrode;
declare namespace electrode {
  export { electrode_Electrode as Electrode };
}

declare const Exeggcute: Pokemon;

declare const exeggcute_Exeggcute: typeof Exeggcute;
declare namespace exeggcute {
  export { exeggcute_Exeggcute as Exeggcute };
}

declare const Exeggutor: Pokemon;

declare const exeggutor_Exeggutor: typeof Exeggutor;
declare namespace exeggutor {
  export { exeggutor_Exeggutor as Exeggutor };
}

declare const Cubone: Pokemon;

declare const cubone_Cubone: typeof Cubone;
declare namespace cubone {
  export { cubone_Cubone as Cubone };
}

declare const Marowak: Pokemon;

declare const marowak_Marowak: typeof Marowak;
declare namespace marowak {
  export { marowak_Marowak as Marowak };
}

declare const Hitmonlee: Pokemon;

declare const hitmonlee_Hitmonlee: typeof Hitmonlee;
declare namespace hitmonlee {
  export { hitmonlee_Hitmonlee as Hitmonlee };
}

declare const Hitmonchan: Pokemon;

declare const hitmonchan_Hitmonchan: typeof Hitmonchan;
declare namespace hitmonchan {
  export { hitmonchan_Hitmonchan as Hitmonchan };
}

declare const Lickitung: Pokemon;

declare const lickitung_Lickitung: typeof Lickitung;
declare namespace lickitung {
  export { lickitung_Lickitung as Lickitung };
}

declare const Koffing: Pokemon;

declare const koffing_Koffing: typeof Koffing;
declare namespace koffing {
  export { koffing_Koffing as Koffing };
}

declare const Weezing: Pokemon;

declare const weezing_Weezing: typeof Weezing;
declare namespace weezing {
  export { weezing_Weezing as Weezing };
}

declare const Rhyhorn: Pokemon;

declare const rhyhorn_Rhyhorn: typeof Rhyhorn;
declare namespace rhyhorn {
  export { rhyhorn_Rhyhorn as Rhyhorn };
}

declare const Rhydon: Pokemon;

declare const rhydon_Rhydon: typeof Rhydon;
declare namespace rhydon {
  export { rhydon_Rhydon as Rhydon };
}

declare const Chansey: Pokemon;

declare const chansey_Chansey: typeof Chansey;
declare namespace chansey {
  export { chansey_Chansey as Chansey };
}

declare const Tangela: Pokemon;

declare const tangela_Tangela: typeof Tangela;
declare namespace tangela {
  export { tangela_Tangela as Tangela };
}

declare const Kangaskhan: Pokemon;

declare const kangaskhan_Kangaskhan: typeof Kangaskhan;
declare namespace kangaskhan {
  export { kangaskhan_Kangaskhan as Kangaskhan };
}

declare const Horsea: Pokemon;

declare const horsea_Horsea: typeof Horsea;
declare namespace horsea {
  export { horsea_Horsea as Horsea };
}

declare const Seadra: Pokemon;

declare const seadra_Seadra: typeof Seadra;
declare namespace seadra {
  export { seadra_Seadra as Seadra };
}

declare const Goldeen: Pokemon;

declare const goldeen_Goldeen: typeof Goldeen;
declare namespace goldeen {
  export { goldeen_Goldeen as Goldeen };
}

declare const Seaking: Pokemon;

declare const seaking_Seaking: typeof Seaking;
declare namespace seaking {
  export { seaking_Seaking as Seaking };
}

declare const Staryu: Pokemon;

declare const staryu_Staryu: typeof Staryu;
declare namespace staryu {
  export { staryu_Staryu as Staryu };
}

declare const Starmie: Pokemon;

declare const starmie_Starmie: typeof Starmie;
declare namespace starmie {
  export { starmie_Starmie as Starmie };
}

declare const MrMime: Pokemon;

declare const mrmime_MrMime: typeof MrMime;
declare namespace mrmime {
  export { mrmime_MrMime as MrMime };
}

declare const Scyther: Pokemon;

declare const scyther_Scyther: typeof Scyther;
declare namespace scyther {
  export { scyther_Scyther as Scyther };
}

declare const Jynx: Pokemon;

declare const jynx_Jynx: typeof Jynx;
declare namespace jynx {
  export { jynx_Jynx as Jynx };
}

declare const Electabuzz: Pokemon;

declare const electabuzz_Electabuzz: typeof Electabuzz;
declare namespace electabuzz {
  export { electabuzz_Electabuzz as Electabuzz };
}

declare const Magmar: Pokemon;

declare const magmar_Magmar: typeof Magmar;
declare namespace magmar {
  export { magmar_Magmar as Magmar };
}

declare const Pinsir: Pokemon;

declare const pinsir_Pinsir: typeof Pinsir;
declare namespace pinsir {
  export { pinsir_Pinsir as Pinsir };
}

declare const Tauros: Pokemon;

declare const tauros_Tauros: typeof Tauros;
declare namespace tauros {
  export { tauros_Tauros as Tauros };
}

declare const Magikarp: Pokemon;

declare const magikarp_Magikarp: typeof Magikarp;
declare namespace magikarp {
  export { magikarp_Magikarp as Magikarp };
}

declare const Gyarados: Pokemon;

declare const gyarados_Gyarados: typeof Gyarados;
declare namespace gyarados {
  export { gyarados_Gyarados as Gyarados };
}

declare const Lapras: Pokemon;

declare const lapras_Lapras: typeof Lapras;
declare namespace lapras {
  export { lapras_Lapras as Lapras };
}

declare const Ditto: Pokemon;

declare const ditto_Ditto: typeof Ditto;
declare namespace ditto {
  export { ditto_Ditto as Ditto };
}

declare const Eevee: Pokemon;

declare const eevee_Eevee: typeof Eevee;
declare namespace eevee {
  export { eevee_Eevee as Eevee };
}

declare const Vaporeon: Pokemon;

declare const vaporeon_Vaporeon: typeof Vaporeon;
declare namespace vaporeon {
  export { vaporeon_Vaporeon as Vaporeon };
}

declare const Jolteon: Pokemon;

declare const jolteon_Jolteon: typeof Jolteon;
declare namespace jolteon {
  export { jolteon_Jolteon as Jolteon };
}

declare const Flareon: Pokemon;

declare const flareon_Flareon: typeof Flareon;
declare namespace flareon {
  export { flareon_Flareon as Flareon };
}

declare const Porygon: Pokemon;

declare const porygon_Porygon: typeof Porygon;
declare namespace porygon {
  export { porygon_Porygon as Porygon };
}

declare const Omanyte: Pokemon;

declare const omanyte_Omanyte: typeof Omanyte;
declare namespace omanyte {
  export { omanyte_Omanyte as Omanyte };
}

declare const Omastar: Pokemon;

declare const omastar_Omastar: typeof Omastar;
declare namespace omastar {
  export { omastar_Omastar as Omastar };
}

declare const Kabuto: Pokemon;

declare const kabuto_Kabuto: typeof Kabuto;
declare namespace kabuto {
  export { kabuto_Kabuto as Kabuto };
}

declare const Kabutops: Pokemon;

declare const kabutops_Kabutops: typeof Kabutops;
declare namespace kabutops {
  export { kabutops_Kabutops as Kabutops };
}

declare const Aerodactyl: Pokemon;

declare const aerodactyl_Aerodactyl: typeof Aerodactyl;
declare namespace aerodactyl {
  export { aerodactyl_Aerodactyl as Aerodactyl };
}

declare const Snorlax: Pokemon;

declare const snorlax_Snorlax: typeof Snorlax;
declare namespace snorlax {
  export { snorlax_Snorlax as Snorlax };
}

declare const Articuno: Pokemon;

declare const articuno_Articuno: typeof Articuno;
declare namespace articuno {
  export { articuno_Articuno as Articuno };
}

declare const Zapdos: Pokemon;

declare const zapdos_Zapdos: typeof Zapdos;
declare namespace zapdos {
  export { zapdos_Zapdos as Zapdos };
}

declare const Moltres: Pokemon;

declare const moltres_Moltres: typeof Moltres;
declare namespace moltres {
  export { moltres_Moltres as Moltres };
}

declare const Dratini: Pokemon;

declare const dratini_Dratini: typeof Dratini;
declare namespace dratini {
  export { dratini_Dratini as Dratini };
}

declare const Dragonair: Pokemon;

declare const dragonair_Dragonair: typeof Dragonair;
declare namespace dragonair {
  export { dragonair_Dragonair as Dragonair };
}

declare const Dragonite: Pokemon;

declare const dragonite_Dragonite: typeof Dragonite;
declare namespace dragonite {
  export { dragonite_Dragonite as Dragonite };
}

declare const Mewtwo: Pokemon;

declare const mewtwo_Mewtwo: typeof Mewtwo;
declare namespace mewtwo {
  export { mewtwo_Mewtwo as Mewtwo };
}

declare const Mew: Pokemon;

declare const mew_Mew: typeof Mew;
declare namespace mew {
  export { mew_Mew as Mew };
}

declare const Gen1PokemonData: {
    1: Pokemon;
    2: Pokemon;
    3: Pokemon;
    4: Pokemon;
    5: Pokemon;
    6: Pokemon;
    7: Pokemon;
    8: Pokemon;
    9: Pokemon;
    10: Pokemon;
    11: Pokemon;
    12: Pokemon;
    13: Pokemon;
    14: Pokemon;
    15: Pokemon;
    16: Pokemon;
    17: Pokemon;
    18: Pokemon;
    19: Pokemon;
    20: Pokemon;
    21: Pokemon;
    22: Pokemon;
    23: Pokemon;
    24: Pokemon;
    25: Pokemon;
    26: Pokemon;
    27: Pokemon;
    28: Pokemon;
    29: Pokemon;
    30: Pokemon;
    31: Pokemon;
    32: Pokemon;
    33: Pokemon;
    34: Pokemon;
    35: Pokemon;
    36: Pokemon;
    37: Pokemon;
    38: Pokemon;
    39: Pokemon;
    40: Pokemon;
    41: Pokemon;
    42: Pokemon;
    43: Pokemon;
    44: Pokemon;
    45: Pokemon;
    46: Pokemon;
    47: Pokemon;
    48: Pokemon;
    49: Pokemon;
    50: Pokemon;
    51: Pokemon;
    52: Pokemon;
    53: Pokemon;
    54: Pokemon;
    55: Pokemon;
    56: Pokemon;
    57: Pokemon;
    58: Pokemon;
    59: Pokemon;
    60: Pokemon;
    61: Pokemon;
    62: Pokemon;
    63: Pokemon;
    64: Pokemon;
    65: Pokemon;
    66: Pokemon;
    67: Pokemon;
    68: Pokemon;
    69: Pokemon;
    70: Pokemon;
    71: Pokemon;
    72: Pokemon;
    73: Pokemon;
    74: Pokemon;
    75: Pokemon;
    76: Pokemon;
    77: Pokemon;
    78: Pokemon;
    79: Pokemon;
    80: Pokemon;
    81: Pokemon;
    82: Pokemon;
    83: Pokemon;
    84: Pokemon;
    85: Pokemon;
    86: Pokemon;
    87: Pokemon;
    88: Pokemon;
    89: Pokemon;
    90: Pokemon;
    91: Pokemon;
    92: Pokemon;
    93: Pokemon;
    94: Pokemon;
    95: Pokemon;
    96: Pokemon;
    97: Pokemon;
    98: Pokemon;
    99: Pokemon;
    100: Pokemon;
    101: Pokemon;
    102: Pokemon;
    103: Pokemon;
    104: Pokemon;
    105: Pokemon;
    106: Pokemon;
    107: Pokemon;
    108: Pokemon;
    109: Pokemon;
    110: Pokemon;
    111: Pokemon;
    112: Pokemon;
    113: Pokemon;
    114: Pokemon;
    115: Pokemon;
    116: Pokemon;
    117: Pokemon;
    118: Pokemon;
    119: Pokemon;
    120: Pokemon;
    121: Pokemon;
    122: Pokemon;
    123: Pokemon;
    124: Pokemon;
    125: Pokemon;
    126: Pokemon;
    127: Pokemon;
    128: Pokemon;
    129: Pokemon;
    130: Pokemon;
    131: Pokemon;
    132: Pokemon;
    133: Pokemon;
    134: Pokemon;
    135: Pokemon;
    136: Pokemon;
    137: Pokemon;
    138: Pokemon;
    139: Pokemon;
    140: Pokemon;
    141: Pokemon;
    142: Pokemon;
    143: Pokemon;
    144: Pokemon;
    145: Pokemon;
    146: Pokemon;
    147: Pokemon;
    148: Pokemon;
    149: Pokemon;
    150: Pokemon;
    151: Pokemon;
};

declare const Chikorita: Pokemon;

declare const chikorita_Chikorita: typeof Chikorita;
declare namespace chikorita {
  export { chikorita_Chikorita as Chikorita };
}

declare const Bayleef: Pokemon;

declare const bayleef_Bayleef: typeof Bayleef;
declare namespace bayleef {
  export { bayleef_Bayleef as Bayleef };
}

declare const Meganium: Pokemon;

declare const meganium_Meganium: typeof Meganium;
declare namespace meganium {
  export { meganium_Meganium as Meganium };
}

declare const Cyndaquil: Pokemon;

declare const cyndaquil_Cyndaquil: typeof Cyndaquil;
declare namespace cyndaquil {
  export { cyndaquil_Cyndaquil as Cyndaquil };
}

declare const Quilava: Pokemon;

declare const quilava_Quilava: typeof Quilava;
declare namespace quilava {
  export { quilava_Quilava as Quilava };
}

declare const Typhlosion: Pokemon;

declare const typhlosion_Typhlosion: typeof Typhlosion;
declare namespace typhlosion {
  export { typhlosion_Typhlosion as Typhlosion };
}

declare const Totodile: Pokemon;

declare const totodile_Totodile: typeof Totodile;
declare namespace totodile {
  export { totodile_Totodile as Totodile };
}

declare const Croconaw: Pokemon;

declare const croconaw_Croconaw: typeof Croconaw;
declare namespace croconaw {
  export { croconaw_Croconaw as Croconaw };
}

declare const Feraligatr: Pokemon;

declare const feraligatr_Feraligatr: typeof Feraligatr;
declare namespace feraligatr {
  export { feraligatr_Feraligatr as Feraligatr };
}

declare const Sentret: Pokemon;

declare const sentret_Sentret: typeof Sentret;
declare namespace sentret {
  export { sentret_Sentret as Sentret };
}

declare const Furret: Pokemon;

declare const furret_Furret: typeof Furret;
declare namespace furret {
  export { furret_Furret as Furret };
}

declare const Hoothoot: Pokemon;

declare const hoothoot_Hoothoot: typeof Hoothoot;
declare namespace hoothoot {
  export { hoothoot_Hoothoot as Hoothoot };
}

declare const Noctowl: Pokemon;

declare const noctowl_Noctowl: typeof Noctowl;
declare namespace noctowl {
  export { noctowl_Noctowl as Noctowl };
}

declare const Ledyba: Pokemon;

declare const ledyba_Ledyba: typeof Ledyba;
declare namespace ledyba {
  export { ledyba_Ledyba as Ledyba };
}

declare const Ledian: Pokemon;

declare const ledian_Ledian: typeof Ledian;
declare namespace ledian {
  export { ledian_Ledian as Ledian };
}

declare const Spinarak: Pokemon;

declare const spinarak_Spinarak: typeof Spinarak;
declare namespace spinarak {
  export { spinarak_Spinarak as Spinarak };
}

declare const Ariados: Pokemon;

declare const ariados_Ariados: typeof Ariados;
declare namespace ariados {
  export { ariados_Ariados as Ariados };
}

declare const Crobat: Pokemon;

declare const crobat_Crobat: typeof Crobat;
declare namespace crobat {
  export { crobat_Crobat as Crobat };
}

declare const Chinchou: Pokemon;

declare const chinchou_Chinchou: typeof Chinchou;
declare namespace chinchou {
  export { chinchou_Chinchou as Chinchou };
}

declare const Lanturn: Pokemon;

declare const lanturn_Lanturn: typeof Lanturn;
declare namespace lanturn {
  export { lanturn_Lanturn as Lanturn };
}

declare const Pichu: Pokemon;

declare const pichu_Pichu: typeof Pichu;
declare namespace pichu {
  export { pichu_Pichu as Pichu };
}

declare const Cleffa: Pokemon;

declare const cleffa_Cleffa: typeof Cleffa;
declare namespace cleffa {
  export { cleffa_Cleffa as Cleffa };
}

declare const Igglybuff: Pokemon;

declare const igglybuff_Igglybuff: typeof Igglybuff;
declare namespace igglybuff {
  export { igglybuff_Igglybuff as Igglybuff };
}

declare const Togepi: Pokemon;

declare const togepi_Togepi: typeof Togepi;
declare namespace togepi {
  export { togepi_Togepi as Togepi };
}

declare const Togetic: Pokemon;

declare const togetic_Togetic: typeof Togetic;
declare namespace togetic {
  export { togetic_Togetic as Togetic };
}

declare const Natu: Pokemon;

declare const natu_Natu: typeof Natu;
declare namespace natu {
  export { natu_Natu as Natu };
}

declare const Xatu: Pokemon;

declare const xatu_Xatu: typeof Xatu;
declare namespace xatu {
  export { xatu_Xatu as Xatu };
}

declare const Mareep: Pokemon;

declare const mareep_Mareep: typeof Mareep;
declare namespace mareep {
  export { mareep_Mareep as Mareep };
}

declare const Flaaffy: Pokemon;

declare const flaaffy_Flaaffy: typeof Flaaffy;
declare namespace flaaffy {
  export { flaaffy_Flaaffy as Flaaffy };
}

declare const Ampharos: Pokemon;

declare const ampharos_Ampharos: typeof Ampharos;
declare namespace ampharos {
  export { ampharos_Ampharos as Ampharos };
}

declare const Bellossom: Pokemon;

declare const bellossom_Bellossom: typeof Bellossom;
declare namespace bellossom {
  export { bellossom_Bellossom as Bellossom };
}

declare const Marill: Pokemon;

declare const marill_Marill: typeof Marill;
declare namespace marill {
  export { marill_Marill as Marill };
}

declare const Azumarill: Pokemon;

declare const azumarill_Azumarill: typeof Azumarill;
declare namespace azumarill {
  export { azumarill_Azumarill as Azumarill };
}

declare const Sudowoodo: Pokemon;

declare const sudowoodo_Sudowoodo: typeof Sudowoodo;
declare namespace sudowoodo {
  export { sudowoodo_Sudowoodo as Sudowoodo };
}

declare const Politoed: Pokemon;

declare const politoed_Politoed: typeof Politoed;
declare namespace politoed {
  export { politoed_Politoed as Politoed };
}

declare const Hoppip: Pokemon;

declare const hoppip_Hoppip: typeof Hoppip;
declare namespace hoppip {
  export { hoppip_Hoppip as Hoppip };
}

declare const Skiploom: Pokemon;

declare const skiploom_Skiploom: typeof Skiploom;
declare namespace skiploom {
  export { skiploom_Skiploom as Skiploom };
}

declare const Jumpluff: Pokemon;

declare const jumpluff_Jumpluff: typeof Jumpluff;
declare namespace jumpluff {
  export { jumpluff_Jumpluff as Jumpluff };
}

declare const Aipom: Pokemon;

declare const aipom_Aipom: typeof Aipom;
declare namespace aipom {
  export { aipom_Aipom as Aipom };
}

declare const Sunkern: Pokemon;

declare const sunkern_Sunkern: typeof Sunkern;
declare namespace sunkern {
  export { sunkern_Sunkern as Sunkern };
}

declare const Sunflora: Pokemon;

declare const sunflora_Sunflora: typeof Sunflora;
declare namespace sunflora {
  export { sunflora_Sunflora as Sunflora };
}

declare const Yanma: Pokemon;

declare const yanma_Yanma: typeof Yanma;
declare namespace yanma {
  export { yanma_Yanma as Yanma };
}

declare const Wooper: Pokemon;

declare const wooper_Wooper: typeof Wooper;
declare namespace wooper {
  export { wooper_Wooper as Wooper };
}

declare const Quagsire: Pokemon;

declare const quagsire_Quagsire: typeof Quagsire;
declare namespace quagsire {
  export { quagsire_Quagsire as Quagsire };
}

declare const Espeon: Pokemon;

declare const espeon_Espeon: typeof Espeon;
declare namespace espeon {
  export { espeon_Espeon as Espeon };
}

declare const Umbreon: Pokemon;

declare const umbreon_Umbreon: typeof Umbreon;
declare namespace umbreon {
  export { umbreon_Umbreon as Umbreon };
}

declare const Murkrow: Pokemon;

declare const murkrow_Murkrow: typeof Murkrow;
declare namespace murkrow {
  export { murkrow_Murkrow as Murkrow };
}

declare const Slowking: Pokemon;

declare const slowking_Slowking: typeof Slowking;
declare namespace slowking {
  export { slowking_Slowking as Slowking };
}

declare const Misdreavus: Pokemon;

declare const misdreavus_Misdreavus: typeof Misdreavus;
declare namespace misdreavus {
  export { misdreavus_Misdreavus as Misdreavus };
}

declare const Unown: Pokemon;

declare const unown_Unown: typeof Unown;
declare namespace unown {
  export { unown_Unown as Unown };
}

declare const Wobbuffet: Pokemon;

declare const wobbuffet_Wobbuffet: typeof Wobbuffet;
declare namespace wobbuffet {
  export { wobbuffet_Wobbuffet as Wobbuffet };
}

declare const Girafarig: Pokemon;

declare const girafarig_Girafarig: typeof Girafarig;
declare namespace girafarig {
  export { girafarig_Girafarig as Girafarig };
}

declare const Pineco: Pokemon;

declare const pineco_Pineco: typeof Pineco;
declare namespace pineco {
  export { pineco_Pineco as Pineco };
}

declare const Forretress: Pokemon;

declare const forretress_Forretress: typeof Forretress;
declare namespace forretress {
  export { forretress_Forretress as Forretress };
}

declare const Dunsparce: Pokemon;

declare const dunsparce_Dunsparce: typeof Dunsparce;
declare namespace dunsparce {
  export { dunsparce_Dunsparce as Dunsparce };
}

declare const Gligar: Pokemon;

declare const gligar_Gligar: typeof Gligar;
declare namespace gligar {
  export { gligar_Gligar as Gligar };
}

declare const Steelix: Pokemon;

declare const steelix_Steelix: typeof Steelix;
declare namespace steelix {
  export { steelix_Steelix as Steelix };
}

declare const Snubbull: Pokemon;

declare const snubbull_Snubbull: typeof Snubbull;
declare namespace snubbull {
  export { snubbull_Snubbull as Snubbull };
}

declare const Granbull: Pokemon;

declare const granbull_Granbull: typeof Granbull;
declare namespace granbull {
  export { granbull_Granbull as Granbull };
}

declare const Qwilfish: Pokemon;

declare const qwilfish_Qwilfish: typeof Qwilfish;
declare namespace qwilfish {
  export { qwilfish_Qwilfish as Qwilfish };
}

declare const Scizor: Pokemon;

declare const scizor_Scizor: typeof Scizor;
declare namespace scizor {
  export { scizor_Scizor as Scizor };
}

declare const Shuckle: Pokemon;

declare const shuckle_Shuckle: typeof Shuckle;
declare namespace shuckle {
  export { shuckle_Shuckle as Shuckle };
}

declare const Heracross: Pokemon;

declare const heracross_Heracross: typeof Heracross;
declare namespace heracross {
  export { heracross_Heracross as Heracross };
}

declare const Sneasel: Pokemon;

declare const sneasel_Sneasel: typeof Sneasel;
declare namespace sneasel {
  export { sneasel_Sneasel as Sneasel };
}

declare const Teddiursa: Pokemon;

declare const teddiursa_Teddiursa: typeof Teddiursa;
declare namespace teddiursa {
  export { teddiursa_Teddiursa as Teddiursa };
}

declare const Ursaring: Pokemon;

declare const ursaring_Ursaring: typeof Ursaring;
declare namespace ursaring {
  export { ursaring_Ursaring as Ursaring };
}

declare const Slugma: Pokemon;

declare const slugma_Slugma: typeof Slugma;
declare namespace slugma {
  export { slugma_Slugma as Slugma };
}

declare const Magcargo: Pokemon;

declare const magcargo_Magcargo: typeof Magcargo;
declare namespace magcargo {
  export { magcargo_Magcargo as Magcargo };
}

declare const Swinub: Pokemon;

declare const swinub_Swinub: typeof Swinub;
declare namespace swinub {
  export { swinub_Swinub as Swinub };
}

declare const Piloswine: Pokemon;

declare const piloswine_Piloswine: typeof Piloswine;
declare namespace piloswine {
  export { piloswine_Piloswine as Piloswine };
}

declare const Corsola: Pokemon;

declare const corsola_Corsola: typeof Corsola;
declare namespace corsola {
  export { corsola_Corsola as Corsola };
}

declare const Remoraid: Pokemon;

declare const remoraid_Remoraid: typeof Remoraid;
declare namespace remoraid {
  export { remoraid_Remoraid as Remoraid };
}

declare const Octillery: Pokemon;

declare const octillery_Octillery: typeof Octillery;
declare namespace octillery {
  export { octillery_Octillery as Octillery };
}

declare const Delibird: Pokemon;

declare const delibird_Delibird: typeof Delibird;
declare namespace delibird {
  export { delibird_Delibird as Delibird };
}

declare const Mantine: Pokemon;

declare const mantine_Mantine: typeof Mantine;
declare namespace mantine {
  export { mantine_Mantine as Mantine };
}

declare const Skarmory: Pokemon;

declare const skarmory_Skarmory: typeof Skarmory;
declare namespace skarmory {
  export { skarmory_Skarmory as Skarmory };
}

declare const Houndour: Pokemon;

declare const houndour_Houndour: typeof Houndour;
declare namespace houndour {
  export { houndour_Houndour as Houndour };
}

declare const Houndoom: Pokemon;

declare const houndoom_Houndoom: typeof Houndoom;
declare namespace houndoom {
  export { houndoom_Houndoom as Houndoom };
}

declare const Kingdra: Pokemon;

declare const kingdra_Kingdra: typeof Kingdra;
declare namespace kingdra {
  export { kingdra_Kingdra as Kingdra };
}

declare const Phanpy: Pokemon;

declare const phanpy_Phanpy: typeof Phanpy;
declare namespace phanpy {
  export { phanpy_Phanpy as Phanpy };
}

declare const Donphan: Pokemon;

declare const donphan_Donphan: typeof Donphan;
declare namespace donphan {
  export { donphan_Donphan as Donphan };
}

declare const Porygon2: Pokemon;

declare const porygon2_Porygon2: typeof Porygon2;
declare namespace porygon2 {
  export { porygon2_Porygon2 as Porygon2 };
}

declare const Stantler: Pokemon;

declare const stantler_Stantler: typeof Stantler;
declare namespace stantler {
  export { stantler_Stantler as Stantler };
}

declare const Smeargle: Pokemon;

declare const smeargle_Smeargle: typeof Smeargle;
declare namespace smeargle {
  export { smeargle_Smeargle as Smeargle };
}

declare const Tyrogue: Pokemon;

declare const tyrogue_Tyrogue: typeof Tyrogue;
declare namespace tyrogue {
  export { tyrogue_Tyrogue as Tyrogue };
}

declare const Hitmontop: Pokemon;

declare const hitmontop_Hitmontop: typeof Hitmontop;
declare namespace hitmontop {
  export { hitmontop_Hitmontop as Hitmontop };
}

declare const Smoochum: Pokemon;

declare const smoochum_Smoochum: typeof Smoochum;
declare namespace smoochum {
  export { smoochum_Smoochum as Smoochum };
}

declare const Elekid: Pokemon;

declare const elekid_Elekid: typeof Elekid;
declare namespace elekid {
  export { elekid_Elekid as Elekid };
}

declare const Magby: Pokemon;

declare const magby_Magby: typeof Magby;
declare namespace magby {
  export { magby_Magby as Magby };
}

declare const Miltank: Pokemon;

declare const miltank_Miltank: typeof Miltank;
declare namespace miltank {
  export { miltank_Miltank as Miltank };
}

declare const Blissey: Pokemon;

declare const blissey_Blissey: typeof Blissey;
declare namespace blissey {
  export { blissey_Blissey as Blissey };
}

declare const Raikou: Pokemon;

declare const raikou_Raikou: typeof Raikou;
declare namespace raikou {
  export { raikou_Raikou as Raikou };
}

declare const Entei: Pokemon;

declare const entei_Entei: typeof Entei;
declare namespace entei {
  export { entei_Entei as Entei };
}

declare const Suicune: Pokemon;

declare const suicune_Suicune: typeof Suicune;
declare namespace suicune {
  export { suicune_Suicune as Suicune };
}

declare const Larvitar: Pokemon;

declare const larvitar_Larvitar: typeof Larvitar;
declare namespace larvitar {
  export { larvitar_Larvitar as Larvitar };
}

declare const Pupitar: Pokemon;

declare const pupitar_Pupitar: typeof Pupitar;
declare namespace pupitar {
  export { pupitar_Pupitar as Pupitar };
}

declare const Tyranitar: Pokemon;

declare const tyranitar_Tyranitar: typeof Tyranitar;
declare namespace tyranitar {
  export { tyranitar_Tyranitar as Tyranitar };
}

declare const Lugia: Pokemon;

declare const lugia_Lugia: typeof Lugia;
declare namespace lugia {
  export { lugia_Lugia as Lugia };
}

declare const HoOh: Pokemon;

declare const hooh_HoOh: typeof HoOh;
declare namespace hooh {
  export { hooh_HoOh as HoOh };
}

declare const Celebi: Pokemon;

declare const celebi_Celebi: typeof Celebi;
declare namespace celebi {
  export { celebi_Celebi as Celebi };
}

declare const Gen2PokemonData: {
    152: Pokemon;
    153: Pokemon;
    154: Pokemon;
    155: Pokemon;
    156: Pokemon;
    157: Pokemon;
    158: Pokemon;
    159: Pokemon;
    160: Pokemon;
    161: Pokemon;
    162: Pokemon;
    163: Pokemon;
    164: Pokemon;
    165: Pokemon;
    166: Pokemon;
    167: Pokemon;
    168: Pokemon;
    169: Pokemon;
    170: Pokemon;
    171: Pokemon;
    172: Pokemon;
    173: Pokemon;
    174: Pokemon;
    175: Pokemon;
    176: Pokemon;
    177: Pokemon;
    178: Pokemon;
    179: Pokemon;
    180: Pokemon;
    181: Pokemon;
    182: Pokemon;
    183: Pokemon;
    184: Pokemon;
    185: Pokemon;
    186: Pokemon;
    187: Pokemon;
    188: Pokemon;
    189: Pokemon;
    190: Pokemon;
    191: Pokemon;
    192: Pokemon;
    193: Pokemon;
    194: Pokemon;
    195: Pokemon;
    196: Pokemon;
    197: Pokemon;
    198: Pokemon;
    199: Pokemon;
    200: Pokemon;
    201: Pokemon;
    202: Pokemon;
    203: Pokemon;
    204: Pokemon;
    205: Pokemon;
    206: Pokemon;
    207: Pokemon;
    208: Pokemon;
    209: Pokemon;
    210: Pokemon;
    211: Pokemon;
    212: Pokemon;
    213: Pokemon;
    214: Pokemon;
    215: Pokemon;
    216: Pokemon;
    217: Pokemon;
    218: Pokemon;
    219: Pokemon;
    220: Pokemon;
    221: Pokemon;
    222: Pokemon;
    223: Pokemon;
    224: Pokemon;
    225: Pokemon;
    226: Pokemon;
    227: Pokemon;
    228: Pokemon;
    229: Pokemon;
    230: Pokemon;
    231: Pokemon;
    232: Pokemon;
    233: Pokemon;
    234: Pokemon;
    235: Pokemon;
    236: Pokemon;
    237: Pokemon;
    238: Pokemon;
    239: Pokemon;
    240: Pokemon;
    241: Pokemon;
    242: Pokemon;
    243: Pokemon;
    244: Pokemon;
    245: Pokemon;
    246: Pokemon;
    247: Pokemon;
    248: Pokemon;
    249: Pokemon;
    250: Pokemon;
    251: Pokemon;
};

declare const Treecko: Pokemon;

declare const treecko_Treecko: typeof Treecko;
declare namespace treecko {
  export { treecko_Treecko as Treecko };
}

declare const Grovyle: Pokemon;

declare const grovyle_Grovyle: typeof Grovyle;
declare namespace grovyle {
  export { grovyle_Grovyle as Grovyle };
}

declare const Sceptile: Pokemon;

declare const sceptile_Sceptile: typeof Sceptile;
declare namespace sceptile {
  export { sceptile_Sceptile as Sceptile };
}

declare const Torchic: Pokemon;

declare const torchic_Torchic: typeof Torchic;
declare namespace torchic {
  export { torchic_Torchic as Torchic };
}

declare const Combusken: Pokemon;

declare const combusken_Combusken: typeof Combusken;
declare namespace combusken {
  export { combusken_Combusken as Combusken };
}

declare const Blaziken: Pokemon;

declare const blaziken_Blaziken: typeof Blaziken;
declare namespace blaziken {
  export { blaziken_Blaziken as Blaziken };
}

declare const Mudkip: Pokemon;

declare const mudkip_Mudkip: typeof Mudkip;
declare namespace mudkip {
  export { mudkip_Mudkip as Mudkip };
}

declare const Marshtomp: Pokemon;

declare const marshtomp_Marshtomp: typeof Marshtomp;
declare namespace marshtomp {
  export { marshtomp_Marshtomp as Marshtomp };
}

declare const Swampert: Pokemon;

declare const swampert_Swampert: typeof Swampert;
declare namespace swampert {
  export { swampert_Swampert as Swampert };
}

declare const Poochyena: Pokemon;

declare const poochyena_Poochyena: typeof Poochyena;
declare namespace poochyena {
  export { poochyena_Poochyena as Poochyena };
}

declare const Mightyena: Pokemon;

declare const mightyena_Mightyena: typeof Mightyena;
declare namespace mightyena {
  export { mightyena_Mightyena as Mightyena };
}

declare const Zigzagoon: Pokemon;

declare const zigzagoon_Zigzagoon: typeof Zigzagoon;
declare namespace zigzagoon {
  export { zigzagoon_Zigzagoon as Zigzagoon };
}

declare const Linoone: Pokemon;

declare const linoone_Linoone: typeof Linoone;
declare namespace linoone {
  export { linoone_Linoone as Linoone };
}

declare const Wurmple: Pokemon;

declare const wurmple_Wurmple: typeof Wurmple;
declare namespace wurmple {
  export { wurmple_Wurmple as Wurmple };
}

declare const Silcoon: Pokemon;

declare const silcoon_Silcoon: typeof Silcoon;
declare namespace silcoon {
  export { silcoon_Silcoon as Silcoon };
}

declare const Beautifly: Pokemon;

declare const beautifly_Beautifly: typeof Beautifly;
declare namespace beautifly {
  export { beautifly_Beautifly as Beautifly };
}

declare const Cascoon: Pokemon;

declare const cascoon_Cascoon: typeof Cascoon;
declare namespace cascoon {
  export { cascoon_Cascoon as Cascoon };
}

declare const Dustox: Pokemon;

declare const dustox_Dustox: typeof Dustox;
declare namespace dustox {
  export { dustox_Dustox as Dustox };
}

declare const Lotad: Pokemon;

declare const lotad_Lotad: typeof Lotad;
declare namespace lotad {
  export { lotad_Lotad as Lotad };
}

declare const Lombre: Pokemon;

declare const lombre_Lombre: typeof Lombre;
declare namespace lombre {
  export { lombre_Lombre as Lombre };
}

declare const Ludicolo: Pokemon;

declare const ludicolo_Ludicolo: typeof Ludicolo;
declare namespace ludicolo {
  export { ludicolo_Ludicolo as Ludicolo };
}

declare const Seedot: Pokemon;

declare const seedot_Seedot: typeof Seedot;
declare namespace seedot {
  export { seedot_Seedot as Seedot };
}

declare const Nuzleaf: Pokemon;

declare const nuzleaf_Nuzleaf: typeof Nuzleaf;
declare namespace nuzleaf {
  export { nuzleaf_Nuzleaf as Nuzleaf };
}

declare const Shiftry: Pokemon;

declare const shiftry_Shiftry: typeof Shiftry;
declare namespace shiftry {
  export { shiftry_Shiftry as Shiftry };
}

declare const Taillow: Pokemon;

declare const taillow_Taillow: typeof Taillow;
declare namespace taillow {
  export { taillow_Taillow as Taillow };
}

declare const Swellow: Pokemon;

declare const swellow_Swellow: typeof Swellow;
declare namespace swellow {
  export { swellow_Swellow as Swellow };
}

declare const Wingull: Pokemon;

declare const wingull_Wingull: typeof Wingull;
declare namespace wingull {
  export { wingull_Wingull as Wingull };
}

declare const Pelipper: Pokemon;

declare const pelipper_Pelipper: typeof Pelipper;
declare namespace pelipper {
  export { pelipper_Pelipper as Pelipper };
}

declare const Ralts: Pokemon;

declare const ralts_Ralts: typeof Ralts;
declare namespace ralts {
  export { ralts_Ralts as Ralts };
}

declare const Kirlia: Pokemon;

declare const kirlia_Kirlia: typeof Kirlia;
declare namespace kirlia {
  export { kirlia_Kirlia as Kirlia };
}

declare const Gardevoir: Pokemon;

declare const gardevoir_Gardevoir: typeof Gardevoir;
declare namespace gardevoir {
  export { gardevoir_Gardevoir as Gardevoir };
}

declare const Surskit: Pokemon;

declare const surskit_Surskit: typeof Surskit;
declare namespace surskit {
  export { surskit_Surskit as Surskit };
}

declare const Masquerain: Pokemon;

declare const masquerain_Masquerain: typeof Masquerain;
declare namespace masquerain {
  export { masquerain_Masquerain as Masquerain };
}

declare const Shroomish: Pokemon;

declare const shroomish_Shroomish: typeof Shroomish;
declare namespace shroomish {
  export { shroomish_Shroomish as Shroomish };
}

declare const Breloom: Pokemon;

declare const breloom_Breloom: typeof Breloom;
declare namespace breloom {
  export { breloom_Breloom as Breloom };
}

declare const Slakoth: Pokemon;

declare const slakoth_Slakoth: typeof Slakoth;
declare namespace slakoth {
  export { slakoth_Slakoth as Slakoth };
}

declare const Vigoroth: Pokemon;

declare const vigoroth_Vigoroth: typeof Vigoroth;
declare namespace vigoroth {
  export { vigoroth_Vigoroth as Vigoroth };
}

declare const Slaking: Pokemon;

declare const slaking_Slaking: typeof Slaking;
declare namespace slaking {
  export { slaking_Slaking as Slaking };
}

declare const Nincada: Pokemon;

declare const nincada_Nincada: typeof Nincada;
declare namespace nincada {
  export { nincada_Nincada as Nincada };
}

declare const Ninjask: Pokemon;

declare const ninjask_Ninjask: typeof Ninjask;
declare namespace ninjask {
  export { ninjask_Ninjask as Ninjask };
}

declare const Shedinja: Pokemon;

declare const shedinja_Shedinja: typeof Shedinja;
declare namespace shedinja {
  export { shedinja_Shedinja as Shedinja };
}

declare const Whismur: Pokemon;

declare const whismur_Whismur: typeof Whismur;
declare namespace whismur {
  export { whismur_Whismur as Whismur };
}

declare const Loudred: Pokemon;

declare const loudred_Loudred: typeof Loudred;
declare namespace loudred {
  export { loudred_Loudred as Loudred };
}

declare const Exploud: Pokemon;

declare const exploud_Exploud: typeof Exploud;
declare namespace exploud {
  export { exploud_Exploud as Exploud };
}

declare const Makuhita: Pokemon;

declare const makuhita_Makuhita: typeof Makuhita;
declare namespace makuhita {
  export { makuhita_Makuhita as Makuhita };
}

declare const Hariyama: Pokemon;

declare const hariyama_Hariyama: typeof Hariyama;
declare namespace hariyama {
  export { hariyama_Hariyama as Hariyama };
}

declare const Azurill: Pokemon;

declare const azurill_Azurill: typeof Azurill;
declare namespace azurill {
  export { azurill_Azurill as Azurill };
}

declare const Nosepass: Pokemon;

declare const nosepass_Nosepass: typeof Nosepass;
declare namespace nosepass {
  export { nosepass_Nosepass as Nosepass };
}

declare const Skitty: Pokemon;

declare const skitty_Skitty: typeof Skitty;
declare namespace skitty {
  export { skitty_Skitty as Skitty };
}

declare const Delcatty: Pokemon;

declare const delcatty_Delcatty: typeof Delcatty;
declare namespace delcatty {
  export { delcatty_Delcatty as Delcatty };
}

declare const Sableye: Pokemon;

declare const sableye_Sableye: typeof Sableye;
declare namespace sableye {
  export { sableye_Sableye as Sableye };
}

declare const Mawile: Pokemon;

declare const mawile_Mawile: typeof Mawile;
declare namespace mawile {
  export { mawile_Mawile as Mawile };
}

declare const Aron: Pokemon;

declare const aron_Aron: typeof Aron;
declare namespace aron {
  export { aron_Aron as Aron };
}

declare const Lairon: Pokemon;

declare const lairon_Lairon: typeof Lairon;
declare namespace lairon {
  export { lairon_Lairon as Lairon };
}

declare const Aggron: Pokemon;

declare const aggron_Aggron: typeof Aggron;
declare namespace aggron {
  export { aggron_Aggron as Aggron };
}

declare const Meditite: Pokemon;

declare const meditite_Meditite: typeof Meditite;
declare namespace meditite {
  export { meditite_Meditite as Meditite };
}

declare const Medicham: Pokemon;

declare const medicham_Medicham: typeof Medicham;
declare namespace medicham {
  export { medicham_Medicham as Medicham };
}

declare const Electrike: Pokemon;

declare const electrike_Electrike: typeof Electrike;
declare namespace electrike {
  export { electrike_Electrike as Electrike };
}

declare const Manectric: Pokemon;

declare const manectric_Manectric: typeof Manectric;
declare namespace manectric {
  export { manectric_Manectric as Manectric };
}

declare const Plusle: Pokemon;

declare const plusle_Plusle: typeof Plusle;
declare namespace plusle {
  export { plusle_Plusle as Plusle };
}

declare const Minun: Pokemon;

declare const minun_Minun: typeof Minun;
declare namespace minun {
  export { minun_Minun as Minun };
}

declare const Volbeat: Pokemon;

declare const volbeat_Volbeat: typeof Volbeat;
declare namespace volbeat {
  export { volbeat_Volbeat as Volbeat };
}

declare const Illumise: Pokemon;

declare const illumise_Illumise: typeof Illumise;
declare namespace illumise {
  export { illumise_Illumise as Illumise };
}

declare const Roselia: Pokemon;

declare const roselia_Roselia: typeof Roselia;
declare namespace roselia {
  export { roselia_Roselia as Roselia };
}

declare const Gulpin: Pokemon;

declare const gulpin_Gulpin: typeof Gulpin;
declare namespace gulpin {
  export { gulpin_Gulpin as Gulpin };
}

declare const Swalot: Pokemon;

declare const swalot_Swalot: typeof Swalot;
declare namespace swalot {
  export { swalot_Swalot as Swalot };
}

declare const Carvanha: Pokemon;

declare const carvanha_Carvanha: typeof Carvanha;
declare namespace carvanha {
  export { carvanha_Carvanha as Carvanha };
}

declare const Sharpedo: Pokemon;

declare const sharpedo_Sharpedo: typeof Sharpedo;
declare namespace sharpedo {
  export { sharpedo_Sharpedo as Sharpedo };
}

declare const Wailmer: Pokemon;

declare const wailmer_Wailmer: typeof Wailmer;
declare namespace wailmer {
  export { wailmer_Wailmer as Wailmer };
}

declare const Wailord: Pokemon;

declare const wailord_Wailord: typeof Wailord;
declare namespace wailord {
  export { wailord_Wailord as Wailord };
}

declare const Numel: Pokemon;

declare const numel_Numel: typeof Numel;
declare namespace numel {
  export { numel_Numel as Numel };
}

declare const Camerupt: Pokemon;

declare const camerupt_Camerupt: typeof Camerupt;
declare namespace camerupt {
  export { camerupt_Camerupt as Camerupt };
}

declare const Torkoal: Pokemon;

declare const torkoal_Torkoal: typeof Torkoal;
declare namespace torkoal {
  export { torkoal_Torkoal as Torkoal };
}

declare const Spoink: Pokemon;

declare const spoink_Spoink: typeof Spoink;
declare namespace spoink {
  export { spoink_Spoink as Spoink };
}

declare const Grumpig: Pokemon;

declare const grumpig_Grumpig: typeof Grumpig;
declare namespace grumpig {
  export { grumpig_Grumpig as Grumpig };
}

declare const Spinda: Pokemon;

declare const spinda_Spinda: typeof Spinda;
declare namespace spinda {
  export { spinda_Spinda as Spinda };
}

declare const Trapinch: Pokemon;

declare const trapinch_Trapinch: typeof Trapinch;
declare namespace trapinch {
  export { trapinch_Trapinch as Trapinch };
}

declare const Vibrava: Pokemon;

declare const vibrava_Vibrava: typeof Vibrava;
declare namespace vibrava {
  export { vibrava_Vibrava as Vibrava };
}

declare const Flygon: Pokemon;

declare const flygon_Flygon: typeof Flygon;
declare namespace flygon {
  export { flygon_Flygon as Flygon };
}

declare const Cacnea: Pokemon;

declare const cacnea_Cacnea: typeof Cacnea;
declare namespace cacnea {
  export { cacnea_Cacnea as Cacnea };
}

declare const Cacturne: Pokemon;

declare const cacturne_Cacturne: typeof Cacturne;
declare namespace cacturne {
  export { cacturne_Cacturne as Cacturne };
}

declare const Swablu: Pokemon;

declare const swablu_Swablu: typeof Swablu;
declare namespace swablu {
  export { swablu_Swablu as Swablu };
}

declare const Altaria: Pokemon;

declare const altaria_Altaria: typeof Altaria;
declare namespace altaria {
  export { altaria_Altaria as Altaria };
}

declare const Zangoose: Pokemon;

declare const zangoose_Zangoose: typeof Zangoose;
declare namespace zangoose {
  export { zangoose_Zangoose as Zangoose };
}

declare const Seviper: Pokemon;

declare const seviper_Seviper: typeof Seviper;
declare namespace seviper {
  export { seviper_Seviper as Seviper };
}

declare const Lunatone: Pokemon;

declare const lunatone_Lunatone: typeof Lunatone;
declare namespace lunatone {
  export { lunatone_Lunatone as Lunatone };
}

declare const Solrock: Pokemon;

declare const solrock_Solrock: typeof Solrock;
declare namespace solrock {
  export { solrock_Solrock as Solrock };
}

declare const Barboach: Pokemon;

declare const barboach_Barboach: typeof Barboach;
declare namespace barboach {
  export { barboach_Barboach as Barboach };
}

declare const Whiscash: Pokemon;

declare const whiscash_Whiscash: typeof Whiscash;
declare namespace whiscash {
  export { whiscash_Whiscash as Whiscash };
}

declare const Corphish: Pokemon;

declare const corphish_Corphish: typeof Corphish;
declare namespace corphish {
  export { corphish_Corphish as Corphish };
}

declare const Crawdaunt: Pokemon;

declare const crawdaunt_Crawdaunt: typeof Crawdaunt;
declare namespace crawdaunt {
  export { crawdaunt_Crawdaunt as Crawdaunt };
}

declare const Baltoy: Pokemon;

declare const baltoy_Baltoy: typeof Baltoy;
declare namespace baltoy {
  export { baltoy_Baltoy as Baltoy };
}

declare const Claydol: Pokemon;

declare const claydol_Claydol: typeof Claydol;
declare namespace claydol {
  export { claydol_Claydol as Claydol };
}

declare const Lileep: Pokemon;

declare const lileep_Lileep: typeof Lileep;
declare namespace lileep {
  export { lileep_Lileep as Lileep };
}

declare const Cradily: Pokemon;

declare const cradily_Cradily: typeof Cradily;
declare namespace cradily {
  export { cradily_Cradily as Cradily };
}

declare const Anorith: Pokemon;

declare const anorith_Anorith: typeof Anorith;
declare namespace anorith {
  export { anorith_Anorith as Anorith };
}

declare const Armaldo: Pokemon;

declare const armaldo_Armaldo: typeof Armaldo;
declare namespace armaldo {
  export { armaldo_Armaldo as Armaldo };
}

declare const Feebas: Pokemon;

declare const feebas_Feebas: typeof Feebas;
declare namespace feebas {
  export { feebas_Feebas as Feebas };
}

declare const Milotic: Pokemon;

declare const milotic_Milotic: typeof Milotic;
declare namespace milotic {
  export { milotic_Milotic as Milotic };
}

declare const Castform: Pokemon;

declare const castform_Castform: typeof Castform;
declare namespace castform {
  export { castform_Castform as Castform };
}

declare const Kecleon: Pokemon;

declare const kecleon_Kecleon: typeof Kecleon;
declare namespace kecleon {
  export { kecleon_Kecleon as Kecleon };
}

declare const Shuppet: Pokemon;

declare const shuppet_Shuppet: typeof Shuppet;
declare namespace shuppet {
  export { shuppet_Shuppet as Shuppet };
}

declare const Banette: Pokemon;

declare const banette_Banette: typeof Banette;
declare namespace banette {
  export { banette_Banette as Banette };
}

declare const Duskull: Pokemon;

declare const duskull_Duskull: typeof Duskull;
declare namespace duskull {
  export { duskull_Duskull as Duskull };
}

declare const Dusclops: Pokemon;

declare const dusclops_Dusclops: typeof Dusclops;
declare namespace dusclops {
  export { dusclops_Dusclops as Dusclops };
}

declare const Tropius: Pokemon;

declare const tropius_Tropius: typeof Tropius;
declare namespace tropius {
  export { tropius_Tropius as Tropius };
}

declare const Chimecho: Pokemon;

declare const chimecho_Chimecho: typeof Chimecho;
declare namespace chimecho {
  export { chimecho_Chimecho as Chimecho };
}

declare const Absol: Pokemon;

declare const absol_Absol: typeof Absol;
declare namespace absol {
  export { absol_Absol as Absol };
}

declare const Wynaut: Pokemon;

declare const wynaut_Wynaut: typeof Wynaut;
declare namespace wynaut {
  export { wynaut_Wynaut as Wynaut };
}

declare const Snorunt: Pokemon;

declare const snorunt_Snorunt: typeof Snorunt;
declare namespace snorunt {
  export { snorunt_Snorunt as Snorunt };
}

declare const Glalie: Pokemon;

declare const glalie_Glalie: typeof Glalie;
declare namespace glalie {
  export { glalie_Glalie as Glalie };
}

declare const Spheal: Pokemon;

declare const spheal_Spheal: typeof Spheal;
declare namespace spheal {
  export { spheal_Spheal as Spheal };
}

declare const Sealeo: Pokemon;

declare const sealeo_Sealeo: typeof Sealeo;
declare namespace sealeo {
  export { sealeo_Sealeo as Sealeo };
}

declare const Walrein: Pokemon;

declare const walrein_Walrein: typeof Walrein;
declare namespace walrein {
  export { walrein_Walrein as Walrein };
}

declare const Clamperl: Pokemon;

declare const clamperl_Clamperl: typeof Clamperl;
declare namespace clamperl {
  export { clamperl_Clamperl as Clamperl };
}

declare const Huntail: Pokemon;

declare const huntail_Huntail: typeof Huntail;
declare namespace huntail {
  export { huntail_Huntail as Huntail };
}

declare const Gorebyss: Pokemon;

declare const gorebyss_Gorebyss: typeof Gorebyss;
declare namespace gorebyss {
  export { gorebyss_Gorebyss as Gorebyss };
}

declare const Relicanth: Pokemon;

declare const relicanth_Relicanth: typeof Relicanth;
declare namespace relicanth {
  export { relicanth_Relicanth as Relicanth };
}

declare const Luvdisc: Pokemon;

declare const luvdisc_Luvdisc: typeof Luvdisc;
declare namespace luvdisc {
  export { luvdisc_Luvdisc as Luvdisc };
}

declare const Bagon: Pokemon;

declare const bagon_Bagon: typeof Bagon;
declare namespace bagon {
  export { bagon_Bagon as Bagon };
}

declare const Shelgon: Pokemon;

declare const shelgon_Shelgon: typeof Shelgon;
declare namespace shelgon {
  export { shelgon_Shelgon as Shelgon };
}

declare const Salamence: Pokemon;

declare const salamence_Salamence: typeof Salamence;
declare namespace salamence {
  export { salamence_Salamence as Salamence };
}

declare const Beldum: Pokemon;

declare const beldum_Beldum: typeof Beldum;
declare namespace beldum {
  export { beldum_Beldum as Beldum };
}

declare const Metang: Pokemon;

declare const metang_Metang: typeof Metang;
declare namespace metang {
  export { metang_Metang as Metang };
}

declare const Metagross: Pokemon;

declare const metagross_Metagross: typeof Metagross;
declare namespace metagross {
  export { metagross_Metagross as Metagross };
}

declare const Regirock: Pokemon;

declare const regirock_Regirock: typeof Regirock;
declare namespace regirock {
  export { regirock_Regirock as Regirock };
}

declare const Regice: Pokemon;

declare const regice_Regice: typeof Regice;
declare namespace regice {
  export { regice_Regice as Regice };
}

declare const Registeel: Pokemon;

declare const registeel_Registeel: typeof Registeel;
declare namespace registeel {
  export { registeel_Registeel as Registeel };
}

declare const Latias: Pokemon;

declare const latias_Latias: typeof Latias;
declare namespace latias {
  export { latias_Latias as Latias };
}

declare const Latios: Pokemon;

declare const latios_Latios: typeof Latios;
declare namespace latios {
  export { latios_Latios as Latios };
}

declare const Kyogre: Pokemon;

declare const kyogre_Kyogre: typeof Kyogre;
declare namespace kyogre {
  export { kyogre_Kyogre as Kyogre };
}

declare const Groudon: Pokemon;

declare const groudon_Groudon: typeof Groudon;
declare namespace groudon {
  export { groudon_Groudon as Groudon };
}

declare const Rayquaza: Pokemon;

declare const rayquaza_Rayquaza: typeof Rayquaza;
declare namespace rayquaza {
  export { rayquaza_Rayquaza as Rayquaza };
}

declare const Jirachi: Pokemon;

declare const jirachi_Jirachi: typeof Jirachi;
declare namespace jirachi {
  export { jirachi_Jirachi as Jirachi };
}

declare const Deoxys: Pokemon;

declare const deoxys_Deoxys: typeof Deoxys;
declare namespace deoxys {
  export { deoxys_Deoxys as Deoxys };
}

declare const Gen3PokemonData: {
    252: Pokemon;
    253: Pokemon;
    254: Pokemon;
    255: Pokemon;
    256: Pokemon;
    257: Pokemon;
    258: Pokemon;
    259: Pokemon;
    260: Pokemon;
    261: Pokemon;
    262: Pokemon;
    263: Pokemon;
    264: Pokemon;
    265: Pokemon;
    266: Pokemon;
    267: Pokemon;
    268: Pokemon;
    269: Pokemon;
    270: Pokemon;
    271: Pokemon;
    272: Pokemon;
    273: Pokemon;
    274: Pokemon;
    275: Pokemon;
    276: Pokemon;
    277: Pokemon;
    278: Pokemon;
    279: Pokemon;
    280: Pokemon;
    281: Pokemon;
    282: Pokemon;
    283: Pokemon;
    284: Pokemon;
    285: Pokemon;
    286: Pokemon;
    287: Pokemon;
    288: Pokemon;
    289: Pokemon;
    290: Pokemon;
    291: Pokemon;
    292: Pokemon;
    293: Pokemon;
    294: Pokemon;
    295: Pokemon;
    296: Pokemon;
    297: Pokemon;
    298: Pokemon;
    299: Pokemon;
    300: Pokemon;
    301: Pokemon;
    302: Pokemon;
    303: Pokemon;
    304: Pokemon;
    305: Pokemon;
    306: Pokemon;
    307: Pokemon;
    308: Pokemon;
    309: Pokemon;
    310: Pokemon;
    311: Pokemon;
    312: Pokemon;
    313: Pokemon;
    314: Pokemon;
    315: Pokemon;
    316: Pokemon;
    317: Pokemon;
    318: Pokemon;
    319: Pokemon;
    320: Pokemon;
    321: Pokemon;
    322: Pokemon;
    323: Pokemon;
    324: Pokemon;
    325: Pokemon;
    326: Pokemon;
    327: Pokemon;
    328: Pokemon;
    329: Pokemon;
    330: Pokemon;
    331: Pokemon;
    332: Pokemon;
    333: Pokemon;
    334: Pokemon;
    335: Pokemon;
    336: Pokemon;
    337: Pokemon;
    338: Pokemon;
    339: Pokemon;
    340: Pokemon;
    341: Pokemon;
    342: Pokemon;
    343: Pokemon;
    344: Pokemon;
    345: Pokemon;
    346: Pokemon;
    347: Pokemon;
    348: Pokemon;
    349: Pokemon;
    350: Pokemon;
    351: Pokemon;
    352: Pokemon;
    353: Pokemon;
    354: Pokemon;
    355: Pokemon;
    356: Pokemon;
    357: Pokemon;
    358: Pokemon;
    359: Pokemon;
    360: Pokemon;
    361: Pokemon;
    362: Pokemon;
    363: Pokemon;
    364: Pokemon;
    365: Pokemon;
    366: Pokemon;
    367: Pokemon;
    368: Pokemon;
    369: Pokemon;
    370: Pokemon;
    371: Pokemon;
    372: Pokemon;
    373: Pokemon;
    374: Pokemon;
    375: Pokemon;
    376: Pokemon;
    377: Pokemon;
    378: Pokemon;
    379: Pokemon;
    380: Pokemon;
    381: Pokemon;
    382: Pokemon;
    383: Pokemon;
    384: Pokemon;
    385: Pokemon;
    386: Pokemon;
};

declare const Turtwig: Pokemon;

declare const turtwig_Turtwig: typeof Turtwig;
declare namespace turtwig {
  export { turtwig_Turtwig as Turtwig };
}

declare const Grotle: Pokemon;

declare const grotle_Grotle: typeof Grotle;
declare namespace grotle {
  export { grotle_Grotle as Grotle };
}

declare const Torterra: Pokemon;

declare const torterra_Torterra: typeof Torterra;
declare namespace torterra {
  export { torterra_Torterra as Torterra };
}

declare const Chimchar: Pokemon;

declare const chimchar_Chimchar: typeof Chimchar;
declare namespace chimchar {
  export { chimchar_Chimchar as Chimchar };
}

declare const Monferno: Pokemon;

declare const monferno_Monferno: typeof Monferno;
declare namespace monferno {
  export { monferno_Monferno as Monferno };
}

declare const Infernape: Pokemon;

declare const infernape_Infernape: typeof Infernape;
declare namespace infernape {
  export { infernape_Infernape as Infernape };
}

declare const Piplup: Pokemon;

declare const piplup_Piplup: typeof Piplup;
declare namespace piplup {
  export { piplup_Piplup as Piplup };
}

declare const Prinplup: Pokemon;

declare const prinplup_Prinplup: typeof Prinplup;
declare namespace prinplup {
  export { prinplup_Prinplup as Prinplup };
}

declare const Empoleon: Pokemon;

declare const empoleon_Empoleon: typeof Empoleon;
declare namespace empoleon {
  export { empoleon_Empoleon as Empoleon };
}

declare const Starly: Pokemon;

declare const starly_Starly: typeof Starly;
declare namespace starly {
  export { starly_Starly as Starly };
}

declare const Staravia: Pokemon;

declare const staravia_Staravia: typeof Staravia;
declare namespace staravia {
  export { staravia_Staravia as Staravia };
}

declare const Staraptor: Pokemon;

declare const staraptor_Staraptor: typeof Staraptor;
declare namespace staraptor {
  export { staraptor_Staraptor as Staraptor };
}

declare const Bidoof: Pokemon;

declare const bidoof_Bidoof: typeof Bidoof;
declare namespace bidoof {
  export { bidoof_Bidoof as Bidoof };
}

declare const Bibarel: Pokemon;

declare const bibarel_Bibarel: typeof Bibarel;
declare namespace bibarel {
  export { bibarel_Bibarel as Bibarel };
}

declare const Kricketot: Pokemon;

declare const kricketot_Kricketot: typeof Kricketot;
declare namespace kricketot {
  export { kricketot_Kricketot as Kricketot };
}

declare const Kricketune: Pokemon;

declare const kricketune_Kricketune: typeof Kricketune;
declare namespace kricketune {
  export { kricketune_Kricketune as Kricketune };
}

declare const Shinx: Pokemon;

declare const shinx_Shinx: typeof Shinx;
declare namespace shinx {
  export { shinx_Shinx as Shinx };
}

declare const Luxio: Pokemon;

declare const luxio_Luxio: typeof Luxio;
declare namespace luxio {
  export { luxio_Luxio as Luxio };
}

declare const Luxray: Pokemon;

declare const luxray_Luxray: typeof Luxray;
declare namespace luxray {
  export { luxray_Luxray as Luxray };
}

declare const Budew: Pokemon;

declare const budew_Budew: typeof Budew;
declare namespace budew {
  export { budew_Budew as Budew };
}

declare const Roserade: Pokemon;

declare const roserade_Roserade: typeof Roserade;
declare namespace roserade {
  export { roserade_Roserade as Roserade };
}

declare const Cranidos: Pokemon;

declare const cranidos_Cranidos: typeof Cranidos;
declare namespace cranidos {
  export { cranidos_Cranidos as Cranidos };
}

declare const Rampardos: Pokemon;

declare const rampardos_Rampardos: typeof Rampardos;
declare namespace rampardos {
  export { rampardos_Rampardos as Rampardos };
}

declare const Shieldon: Pokemon;

declare const shieldon_Shieldon: typeof Shieldon;
declare namespace shieldon {
  export { shieldon_Shieldon as Shieldon };
}

declare const Bastiodon: Pokemon;

declare const bastiodon_Bastiodon: typeof Bastiodon;
declare namespace bastiodon {
  export { bastiodon_Bastiodon as Bastiodon };
}

declare const Burmy: Pokemon;

declare const burmy_Burmy: typeof Burmy;
declare namespace burmy {
  export { burmy_Burmy as Burmy };
}

declare const Wormadam: Pokemon;

declare const wormadam_Wormadam: typeof Wormadam;
declare namespace wormadam {
  export { wormadam_Wormadam as Wormadam };
}

declare const Mothim: Pokemon;

declare const mothim_Mothim: typeof Mothim;
declare namespace mothim {
  export { mothim_Mothim as Mothim };
}

declare const Combee: Pokemon;

declare const combee_Combee: typeof Combee;
declare namespace combee {
  export { combee_Combee as Combee };
}

declare const Vespiquen: Pokemon;

declare const vespiquen_Vespiquen: typeof Vespiquen;
declare namespace vespiquen {
  export { vespiquen_Vespiquen as Vespiquen };
}

declare const Pachirisu: Pokemon;

declare const pachirisu_Pachirisu: typeof Pachirisu;
declare namespace pachirisu {
  export { pachirisu_Pachirisu as Pachirisu };
}

declare const Buizel: Pokemon;

declare const buizel_Buizel: typeof Buizel;
declare namespace buizel {
  export { buizel_Buizel as Buizel };
}

declare const Floatzel: Pokemon;

declare const floatzel_Floatzel: typeof Floatzel;
declare namespace floatzel {
  export { floatzel_Floatzel as Floatzel };
}

declare const Cherubi: Pokemon;

declare const cherubi_Cherubi: typeof Cherubi;
declare namespace cherubi {
  export { cherubi_Cherubi as Cherubi };
}

declare const Cherrim: Pokemon;

declare const cherrim_Cherrim: typeof Cherrim;
declare namespace cherrim {
  export { cherrim_Cherrim as Cherrim };
}

declare const Shellos: Pokemon;

declare const shellos_Shellos: typeof Shellos;
declare namespace shellos {
  export { shellos_Shellos as Shellos };
}

declare const Gastrodon: Pokemon;

declare const gastrodon_Gastrodon: typeof Gastrodon;
declare namespace gastrodon {
  export { gastrodon_Gastrodon as Gastrodon };
}

declare const Ambipom: Pokemon;

declare const ambipom_Ambipom: typeof Ambipom;
declare namespace ambipom {
  export { ambipom_Ambipom as Ambipom };
}

declare const Drifloon: Pokemon;

declare const drifloon_Drifloon: typeof Drifloon;
declare namespace drifloon {
  export { drifloon_Drifloon as Drifloon };
}

declare const Drifblim: Pokemon;

declare const drifblim_Drifblim: typeof Drifblim;
declare namespace drifblim {
  export { drifblim_Drifblim as Drifblim };
}

declare const Buneary: Pokemon;

declare const buneary_Buneary: typeof Buneary;
declare namespace buneary {
  export { buneary_Buneary as Buneary };
}

declare const Lopunny: Pokemon;

declare const lopunny_Lopunny: typeof Lopunny;
declare namespace lopunny {
  export { lopunny_Lopunny as Lopunny };
}

declare const Mismagius: Pokemon;

declare const mismagius_Mismagius: typeof Mismagius;
declare namespace mismagius {
  export { mismagius_Mismagius as Mismagius };
}

declare const Honchkrow: Pokemon;

declare const honchkrow_Honchkrow: typeof Honchkrow;
declare namespace honchkrow {
  export { honchkrow_Honchkrow as Honchkrow };
}

declare const Glameow: Pokemon;

declare const glameow_Glameow: typeof Glameow;
declare namespace glameow {
  export { glameow_Glameow as Glameow };
}

declare const Purugly: Pokemon;

declare const purugly_Purugly: typeof Purugly;
declare namespace purugly {
  export { purugly_Purugly as Purugly };
}

declare const Chingling: Pokemon;

declare const chingling_Chingling: typeof Chingling;
declare namespace chingling {
  export { chingling_Chingling as Chingling };
}

declare const Stunky: Pokemon;

declare const stunky_Stunky: typeof Stunky;
declare namespace stunky {
  export { stunky_Stunky as Stunky };
}

declare const Skuntank: Pokemon;

declare const skuntank_Skuntank: typeof Skuntank;
declare namespace skuntank {
  export { skuntank_Skuntank as Skuntank };
}

declare const Bronzor: Pokemon;

declare const bronzor_Bronzor: typeof Bronzor;
declare namespace bronzor {
  export { bronzor_Bronzor as Bronzor };
}

declare const Bronzong: Pokemon;

declare const bronzong_Bronzong: typeof Bronzong;
declare namespace bronzong {
  export { bronzong_Bronzong as Bronzong };
}

declare const Bonsly: Pokemon;

declare const bonsly_Bonsly: typeof Bonsly;
declare namespace bonsly {
  export { bonsly_Bonsly as Bonsly };
}

declare const MimeJr: Pokemon;

declare const mimejr_MimeJr: typeof MimeJr;
declare namespace mimejr {
  export { mimejr_MimeJr as MimeJr };
}

declare const Happiny: Pokemon;

declare const happiny_Happiny: typeof Happiny;
declare namespace happiny {
  export { happiny_Happiny as Happiny };
}

declare const Chatot: Pokemon;

declare const chatot_Chatot: typeof Chatot;
declare namespace chatot {
  export { chatot_Chatot as Chatot };
}

declare const Spiritomb: Pokemon;

declare const spiritomb_Spiritomb: typeof Spiritomb;
declare namespace spiritomb {
  export { spiritomb_Spiritomb as Spiritomb };
}

declare const Gible: Pokemon;

declare const gible_Gible: typeof Gible;
declare namespace gible {
  export { gible_Gible as Gible };
}

declare const Gabite: Pokemon;

declare const gabite_Gabite: typeof Gabite;
declare namespace gabite {
  export { gabite_Gabite as Gabite };
}

declare const Garchomp: Pokemon;

declare const garchomp_Garchomp: typeof Garchomp;
declare namespace garchomp {
  export { garchomp_Garchomp as Garchomp };
}

declare const Munchlax: Pokemon;

declare const munchlax_Munchlax: typeof Munchlax;
declare namespace munchlax {
  export { munchlax_Munchlax as Munchlax };
}

declare const Riolu: Pokemon;

declare const riolu_Riolu: typeof Riolu;
declare namespace riolu {
  export { riolu_Riolu as Riolu };
}

declare const Lucario: Pokemon;

declare const lucario_Lucario: typeof Lucario;
declare namespace lucario {
  export { lucario_Lucario as Lucario };
}

declare const Hippopotas: Pokemon;

declare const hippopotas_Hippopotas: typeof Hippopotas;
declare namespace hippopotas {
  export { hippopotas_Hippopotas as Hippopotas };
}

declare const Hippowdon: Pokemon;

declare const hippowdon_Hippowdon: typeof Hippowdon;
declare namespace hippowdon {
  export { hippowdon_Hippowdon as Hippowdon };
}

declare const Skorupi: Pokemon;

declare const skorupi_Skorupi: typeof Skorupi;
declare namespace skorupi {
  export { skorupi_Skorupi as Skorupi };
}

declare const Drapion: Pokemon;

declare const drapion_Drapion: typeof Drapion;
declare namespace drapion {
  export { drapion_Drapion as Drapion };
}

declare const Croagunk: Pokemon;

declare const croagunk_Croagunk: typeof Croagunk;
declare namespace croagunk {
  export { croagunk_Croagunk as Croagunk };
}

declare const Toxicroak: Pokemon;

declare const toxicroak_Toxicroak: typeof Toxicroak;
declare namespace toxicroak {
  export { toxicroak_Toxicroak as Toxicroak };
}

declare const Carnivine: Pokemon;

declare const carnivine_Carnivine: typeof Carnivine;
declare namespace carnivine {
  export { carnivine_Carnivine as Carnivine };
}

declare const Finneon: Pokemon;

declare const finneon_Finneon: typeof Finneon;
declare namespace finneon {
  export { finneon_Finneon as Finneon };
}

declare const Lumineon: Pokemon;

declare const lumineon_Lumineon: typeof Lumineon;
declare namespace lumineon {
  export { lumineon_Lumineon as Lumineon };
}

declare const Mantyke: Pokemon;

declare const mantyke_Mantyke: typeof Mantyke;
declare namespace mantyke {
  export { mantyke_Mantyke as Mantyke };
}

declare const Snover: Pokemon;

declare const snover_Snover: typeof Snover;
declare namespace snover {
  export { snover_Snover as Snover };
}

declare const Abomasnow: Pokemon;

declare const abomasnow_Abomasnow: typeof Abomasnow;
declare namespace abomasnow {
  export { abomasnow_Abomasnow as Abomasnow };
}

declare const Weavile: Pokemon;

declare const weavile_Weavile: typeof Weavile;
declare namespace weavile {
  export { weavile_Weavile as Weavile };
}

declare const Magnezone: Pokemon;

declare const magnezone_Magnezone: typeof Magnezone;
declare namespace magnezone {
  export { magnezone_Magnezone as Magnezone };
}

declare const Lickilicky: Pokemon;

declare const lickilicky_Lickilicky: typeof Lickilicky;
declare namespace lickilicky {
  export { lickilicky_Lickilicky as Lickilicky };
}

declare const Rhyperior: Pokemon;

declare const rhyperior_Rhyperior: typeof Rhyperior;
declare namespace rhyperior {
  export { rhyperior_Rhyperior as Rhyperior };
}

declare const Tangrowth: Pokemon;

declare const tangrowth_Tangrowth: typeof Tangrowth;
declare namespace tangrowth {
  export { tangrowth_Tangrowth as Tangrowth };
}

declare const Electivire: Pokemon;

declare const electivire_Electivire: typeof Electivire;
declare namespace electivire {
  export { electivire_Electivire as Electivire };
}

declare const Magmortar: Pokemon;

declare const magmortar_Magmortar: typeof Magmortar;
declare namespace magmortar {
  export { magmortar_Magmortar as Magmortar };
}

declare const Togekiss: Pokemon;

declare const togekiss_Togekiss: typeof Togekiss;
declare namespace togekiss {
  export { togekiss_Togekiss as Togekiss };
}

declare const Yanmega: Pokemon;

declare const yanmega_Yanmega: typeof Yanmega;
declare namespace yanmega {
  export { yanmega_Yanmega as Yanmega };
}

declare const Leafeon: Pokemon;

declare const leafeon_Leafeon: typeof Leafeon;
declare namespace leafeon {
  export { leafeon_Leafeon as Leafeon };
}

declare const Glaceon: Pokemon;

declare const glaceon_Glaceon: typeof Glaceon;
declare namespace glaceon {
  export { glaceon_Glaceon as Glaceon };
}

declare const Gliscor: Pokemon;

declare const gliscor_Gliscor: typeof Gliscor;
declare namespace gliscor {
  export { gliscor_Gliscor as Gliscor };
}

declare const Mamoswine: Pokemon;

declare const mamoswine_Mamoswine: typeof Mamoswine;
declare namespace mamoswine {
  export { mamoswine_Mamoswine as Mamoswine };
}

declare const PorygonZ: Pokemon;

declare const porygonz_PorygonZ: typeof PorygonZ;
declare namespace porygonz {
  export { porygonz_PorygonZ as PorygonZ };
}

declare const Gallade: Pokemon;

declare const gallade_Gallade: typeof Gallade;
declare namespace gallade {
  export { gallade_Gallade as Gallade };
}

declare const Probopass: Pokemon;

declare const probopass_Probopass: typeof Probopass;
declare namespace probopass {
  export { probopass_Probopass as Probopass };
}

declare const Dusknoir: Pokemon;

declare const dusknoir_Dusknoir: typeof Dusknoir;
declare namespace dusknoir {
  export { dusknoir_Dusknoir as Dusknoir };
}

declare const Froslass: Pokemon;

declare const froslass_Froslass: typeof Froslass;
declare namespace froslass {
  export { froslass_Froslass as Froslass };
}

declare const Rotom: Pokemon;

declare const rotom_Rotom: typeof Rotom;
declare namespace rotom {
  export { rotom_Rotom as Rotom };
}

declare const Uxie: Pokemon;

declare const uxie_Uxie: typeof Uxie;
declare namespace uxie {
  export { uxie_Uxie as Uxie };
}

declare const Mesprit: Pokemon;

declare const mesprit_Mesprit: typeof Mesprit;
declare namespace mesprit {
  export { mesprit_Mesprit as Mesprit };
}

declare const Azelf: Pokemon;

declare const azelf_Azelf: typeof Azelf;
declare namespace azelf {
  export { azelf_Azelf as Azelf };
}

declare const Dialga: Pokemon;

declare const dialga_Dialga: typeof Dialga;
declare namespace dialga {
  export { dialga_Dialga as Dialga };
}

declare const Palkia: Pokemon;

declare const palkia_Palkia: typeof Palkia;
declare namespace palkia {
  export { palkia_Palkia as Palkia };
}

declare const Heatran: Pokemon;

declare const heatran_Heatran: typeof Heatran;
declare namespace heatran {
  export { heatran_Heatran as Heatran };
}

declare const Regigigas: Pokemon;

declare const regigigas_Regigigas: typeof Regigigas;
declare namespace regigigas {
  export { regigigas_Regigigas as Regigigas };
}

declare const Giratina: Pokemon;

declare const giratina_Giratina: typeof Giratina;
declare namespace giratina {
  export { giratina_Giratina as Giratina };
}

declare const Cresselia: Pokemon;

declare const cresselia_Cresselia: typeof Cresselia;
declare namespace cresselia {
  export { cresselia_Cresselia as Cresselia };
}

declare const Phione: Pokemon;

declare const phione_Phione: typeof Phione;
declare namespace phione {
  export { phione_Phione as Phione };
}

declare const Manaphy: Pokemon;

declare const manaphy_Manaphy: typeof Manaphy;
declare namespace manaphy {
  export { manaphy_Manaphy as Manaphy };
}

declare const Darkrai: Pokemon;

declare const darkrai_Darkrai: typeof Darkrai;
declare namespace darkrai {
  export { darkrai_Darkrai as Darkrai };
}

declare const Shaymin: Pokemon;

declare const shaymin_Shaymin: typeof Shaymin;
declare namespace shaymin {
  export { shaymin_Shaymin as Shaymin };
}

declare const Arceus: Pokemon;

declare const arceus_Arceus: typeof Arceus;
declare namespace arceus {
  export { arceus_Arceus as Arceus };
}

declare const Gen4PokemonData: {
    387: Pokemon;
    388: Pokemon;
    389: Pokemon;
    390: Pokemon;
    391: Pokemon;
    392: Pokemon;
    393: Pokemon;
    394: Pokemon;
    395: Pokemon;
    396: Pokemon;
    397: Pokemon;
    398: Pokemon;
    399: Pokemon;
    400: Pokemon;
    401: Pokemon;
    402: Pokemon;
    403: Pokemon;
    404: Pokemon;
    405: Pokemon;
    406: Pokemon;
    407: Pokemon;
    408: Pokemon;
    409: Pokemon;
    410: Pokemon;
    411: Pokemon;
    412: Pokemon;
    413: Pokemon;
    414: Pokemon;
    415: Pokemon;
    416: Pokemon;
    417: Pokemon;
    418: Pokemon;
    419: Pokemon;
    420: Pokemon;
    421: Pokemon;
    422: Pokemon;
    423: Pokemon;
    424: Pokemon;
    425: Pokemon;
    426: Pokemon;
    427: Pokemon;
    428: Pokemon;
    429: Pokemon;
    430: Pokemon;
    431: Pokemon;
    432: Pokemon;
    433: Pokemon;
    434: Pokemon;
    435: Pokemon;
    436: Pokemon;
    437: Pokemon;
    438: Pokemon;
    439: Pokemon;
    440: Pokemon;
    441: Pokemon;
    442: Pokemon;
    443: Pokemon;
    444: Pokemon;
    445: Pokemon;
    446: Pokemon;
    447: Pokemon;
    448: Pokemon;
    449: Pokemon;
    450: Pokemon;
    451: Pokemon;
    452: Pokemon;
    453: Pokemon;
    454: Pokemon;
    455: Pokemon;
    456: Pokemon;
    457: Pokemon;
    458: Pokemon;
    459: Pokemon;
    460: Pokemon;
    461: Pokemon;
    462: Pokemon;
    463: Pokemon;
    464: Pokemon;
    465: Pokemon;
    466: Pokemon;
    467: Pokemon;
    468: Pokemon;
    469: Pokemon;
    470: Pokemon;
    471: Pokemon;
    472: Pokemon;
    473: Pokemon;
    474: Pokemon;
    475: Pokemon;
    476: Pokemon;
    477: Pokemon;
    478: Pokemon;
    479: Pokemon;
    480: Pokemon;
    481: Pokemon;
    482: Pokemon;
    483: Pokemon;
    484: Pokemon;
    485: Pokemon;
    486: Pokemon;
    487: Pokemon;
    488: Pokemon;
    489: Pokemon;
    490: Pokemon;
    491: Pokemon;
    492: Pokemon;
    493: Pokemon;
};

declare const Victini: Pokemon;

declare const victini_Victini: typeof Victini;
declare namespace victini {
  export { victini_Victini as Victini };
}

declare const Snivy: Pokemon;

declare const snivy_Snivy: typeof Snivy;
declare namespace snivy {
  export { snivy_Snivy as Snivy };
}

declare const Servine: Pokemon;

declare const servine_Servine: typeof Servine;
declare namespace servine {
  export { servine_Servine as Servine };
}

declare const Serperior: Pokemon;

declare const serperior_Serperior: typeof Serperior;
declare namespace serperior {
  export { serperior_Serperior as Serperior };
}

declare const Tepig: Pokemon;

declare const tepig_Tepig: typeof Tepig;
declare namespace tepig {
  export { tepig_Tepig as Tepig };
}

declare const Pignite: Pokemon;

declare const pignite_Pignite: typeof Pignite;
declare namespace pignite {
  export { pignite_Pignite as Pignite };
}

declare const Emboar: Pokemon;

declare const emboar_Emboar: typeof Emboar;
declare namespace emboar {
  export { emboar_Emboar as Emboar };
}

declare const Oshawott: Pokemon;

declare const oshawott_Oshawott: typeof Oshawott;
declare namespace oshawott {
  export { oshawott_Oshawott as Oshawott };
}

declare const Dewott: Pokemon;

declare const dewott_Dewott: typeof Dewott;
declare namespace dewott {
  export { dewott_Dewott as Dewott };
}

declare const Samurott: Pokemon;

declare const samurott_Samurott: typeof Samurott;
declare namespace samurott {
  export { samurott_Samurott as Samurott };
}

declare const Patrat: Pokemon;

declare const patrat_Patrat: typeof Patrat;
declare namespace patrat {
  export { patrat_Patrat as Patrat };
}

declare const Watchog: Pokemon;

declare const watchog_Watchog: typeof Watchog;
declare namespace watchog {
  export { watchog_Watchog as Watchog };
}

declare const Lillipup: Pokemon;

declare const lillipup_Lillipup: typeof Lillipup;
declare namespace lillipup {
  export { lillipup_Lillipup as Lillipup };
}

declare const Herdier: Pokemon;

declare const herdier_Herdier: typeof Herdier;
declare namespace herdier {
  export { herdier_Herdier as Herdier };
}

declare const Stoutland: Pokemon;

declare const stoutland_Stoutland: typeof Stoutland;
declare namespace stoutland {
  export { stoutland_Stoutland as Stoutland };
}

declare const Purrloin: Pokemon;

declare const purrloin_Purrloin: typeof Purrloin;
declare namespace purrloin {
  export { purrloin_Purrloin as Purrloin };
}

declare const Liepard: Pokemon;

declare const liepard_Liepard: typeof Liepard;
declare namespace liepard {
  export { liepard_Liepard as Liepard };
}

declare const Pansage: Pokemon;

declare const pansage_Pansage: typeof Pansage;
declare namespace pansage {
  export { pansage_Pansage as Pansage };
}

declare const Simisage: Pokemon;

declare const simisage_Simisage: typeof Simisage;
declare namespace simisage {
  export { simisage_Simisage as Simisage };
}

declare const Pansear: Pokemon;

declare const pansear_Pansear: typeof Pansear;
declare namespace pansear {
  export { pansear_Pansear as Pansear };
}

declare const Simisear: Pokemon;

declare const simisear_Simisear: typeof Simisear;
declare namespace simisear {
  export { simisear_Simisear as Simisear };
}

declare const Panpour: Pokemon;

declare const panpour_Panpour: typeof Panpour;
declare namespace panpour {
  export { panpour_Panpour as Panpour };
}

declare const Simipour: Pokemon;

declare const simipour_Simipour: typeof Simipour;
declare namespace simipour {
  export { simipour_Simipour as Simipour };
}

declare const Munna: Pokemon;

declare const munna_Munna: typeof Munna;
declare namespace munna {
  export { munna_Munna as Munna };
}

declare const Musharna: Pokemon;

declare const musharna_Musharna: typeof Musharna;
declare namespace musharna {
  export { musharna_Musharna as Musharna };
}

declare const Pidove: Pokemon;

declare const pidove_Pidove: typeof Pidove;
declare namespace pidove {
  export { pidove_Pidove as Pidove };
}

declare const Tranquill: Pokemon;

declare const tranquill_Tranquill: typeof Tranquill;
declare namespace tranquill {
  export { tranquill_Tranquill as Tranquill };
}

declare const Unfezant: Pokemon;

declare const unfezant_Unfezant: typeof Unfezant;
declare namespace unfezant {
  export { unfezant_Unfezant as Unfezant };
}

declare const Blitzle: Pokemon;

declare const blitzle_Blitzle: typeof Blitzle;
declare namespace blitzle {
  export { blitzle_Blitzle as Blitzle };
}

declare const Zebstrika: Pokemon;

declare const zebstrika_Zebstrika: typeof Zebstrika;
declare namespace zebstrika {
  export { zebstrika_Zebstrika as Zebstrika };
}

declare const Roggenrola: Pokemon;

declare const roggenrola_Roggenrola: typeof Roggenrola;
declare namespace roggenrola {
  export { roggenrola_Roggenrola as Roggenrola };
}

declare const Boldore: Pokemon;

declare const boldore_Boldore: typeof Boldore;
declare namespace boldore {
  export { boldore_Boldore as Boldore };
}

declare const Gigalith: Pokemon;

declare const gigalith_Gigalith: typeof Gigalith;
declare namespace gigalith {
  export { gigalith_Gigalith as Gigalith };
}

declare const Woobat: Pokemon;

declare const woobat_Woobat: typeof Woobat;
declare namespace woobat {
  export { woobat_Woobat as Woobat };
}

declare const Swoobat: Pokemon;

declare const swoobat_Swoobat: typeof Swoobat;
declare namespace swoobat {
  export { swoobat_Swoobat as Swoobat };
}

declare const Drilbur: Pokemon;

declare const drilbur_Drilbur: typeof Drilbur;
declare namespace drilbur {
  export { drilbur_Drilbur as Drilbur };
}

declare const Excadrill: Pokemon;

declare const excadrill_Excadrill: typeof Excadrill;
declare namespace excadrill {
  export { excadrill_Excadrill as Excadrill };
}

declare const Audino: Pokemon;

declare const audino_Audino: typeof Audino;
declare namespace audino {
  export { audino_Audino as Audino };
}

declare const Timburr: Pokemon;

declare const timburr_Timburr: typeof Timburr;
declare namespace timburr {
  export { timburr_Timburr as Timburr };
}

declare const Gurdurr: Pokemon;

declare const gurdurr_Gurdurr: typeof Gurdurr;
declare namespace gurdurr {
  export { gurdurr_Gurdurr as Gurdurr };
}

declare const Conkeldurr: Pokemon;

declare const conkeldurr_Conkeldurr: typeof Conkeldurr;
declare namespace conkeldurr {
  export { conkeldurr_Conkeldurr as Conkeldurr };
}

declare const Tympole: Pokemon;

declare const tympole_Tympole: typeof Tympole;
declare namespace tympole {
  export { tympole_Tympole as Tympole };
}

declare const Palpitoad: Pokemon;

declare const palpitoad_Palpitoad: typeof Palpitoad;
declare namespace palpitoad {
  export { palpitoad_Palpitoad as Palpitoad };
}

declare const Seismitoad: Pokemon;

declare const seismitoad_Seismitoad: typeof Seismitoad;
declare namespace seismitoad {
  export { seismitoad_Seismitoad as Seismitoad };
}

declare const Throh: Pokemon;

declare const throh_Throh: typeof Throh;
declare namespace throh {
  export { throh_Throh as Throh };
}

declare const Sawk: Pokemon;

declare const sawk_Sawk: typeof Sawk;
declare namespace sawk {
  export { sawk_Sawk as Sawk };
}

declare const Sewaddle: Pokemon;

declare const sewaddle_Sewaddle: typeof Sewaddle;
declare namespace sewaddle {
  export { sewaddle_Sewaddle as Sewaddle };
}

declare const Swadloon: Pokemon;

declare const swadloon_Swadloon: typeof Swadloon;
declare namespace swadloon {
  export { swadloon_Swadloon as Swadloon };
}

declare const Leavanny: Pokemon;

declare const leavanny_Leavanny: typeof Leavanny;
declare namespace leavanny {
  export { leavanny_Leavanny as Leavanny };
}

declare const Venipede: Pokemon;

declare const venipede_Venipede: typeof Venipede;
declare namespace venipede {
  export { venipede_Venipede as Venipede };
}

declare const Whirlipede: Pokemon;

declare const whirlipede_Whirlipede: typeof Whirlipede;
declare namespace whirlipede {
  export { whirlipede_Whirlipede as Whirlipede };
}

declare const Scolipede: Pokemon;

declare const scolipede_Scolipede: typeof Scolipede;
declare namespace scolipede {
  export { scolipede_Scolipede as Scolipede };
}

declare const Cottonee: Pokemon;

declare const cottonee_Cottonee: typeof Cottonee;
declare namespace cottonee {
  export { cottonee_Cottonee as Cottonee };
}

declare const Whimsicott: Pokemon;

declare const whimsicott_Whimsicott: typeof Whimsicott;
declare namespace whimsicott {
  export { whimsicott_Whimsicott as Whimsicott };
}

declare const Petilil: Pokemon;

declare const petilil_Petilil: typeof Petilil;
declare namespace petilil {
  export { petilil_Petilil as Petilil };
}

declare const Lilligant: Pokemon;

declare const lilligant_Lilligant: typeof Lilligant;
declare namespace lilligant {
  export { lilligant_Lilligant as Lilligant };
}

declare const Basculin: Pokemon;

declare const basculin_Basculin: typeof Basculin;
declare namespace basculin {
  export { basculin_Basculin as Basculin };
}

declare const Sandile: Pokemon;

declare const sandile_Sandile: typeof Sandile;
declare namespace sandile {
  export { sandile_Sandile as Sandile };
}

declare const Krokorok: Pokemon;

declare const krokorok_Krokorok: typeof Krokorok;
declare namespace krokorok {
  export { krokorok_Krokorok as Krokorok };
}

declare const Krookodile: Pokemon;

declare const krookodile_Krookodile: typeof Krookodile;
declare namespace krookodile {
  export { krookodile_Krookodile as Krookodile };
}

declare const Darumaka: Pokemon;

declare const darumaka_Darumaka: typeof Darumaka;
declare namespace darumaka {
  export { darumaka_Darumaka as Darumaka };
}

declare const Darmanitan: Pokemon;

declare const darmanitan_Darmanitan: typeof Darmanitan;
declare namespace darmanitan {
  export { darmanitan_Darmanitan as Darmanitan };
}

declare const Maractus: Pokemon;

declare const maractus_Maractus: typeof Maractus;
declare namespace maractus {
  export { maractus_Maractus as Maractus };
}

declare const Dwebble: Pokemon;

declare const dwebble_Dwebble: typeof Dwebble;
declare namespace dwebble {
  export { dwebble_Dwebble as Dwebble };
}

declare const Crustle: Pokemon;

declare const crustle_Crustle: typeof Crustle;
declare namespace crustle {
  export { crustle_Crustle as Crustle };
}

declare const Scraggy: Pokemon;

declare const scraggy_Scraggy: typeof Scraggy;
declare namespace scraggy {
  export { scraggy_Scraggy as Scraggy };
}

declare const Scrafty: Pokemon;

declare const scrafty_Scrafty: typeof Scrafty;
declare namespace scrafty {
  export { scrafty_Scrafty as Scrafty };
}

declare const Sigilyph: Pokemon;

declare const sigilyph_Sigilyph: typeof Sigilyph;
declare namespace sigilyph {
  export { sigilyph_Sigilyph as Sigilyph };
}

declare const Yamask: Pokemon;

declare const yamask_Yamask: typeof Yamask;
declare namespace yamask {
  export { yamask_Yamask as Yamask };
}

declare const Cofagrigus: Pokemon;

declare const cofagrigus_Cofagrigus: typeof Cofagrigus;
declare namespace cofagrigus {
  export { cofagrigus_Cofagrigus as Cofagrigus };
}

declare const Tirtouga: Pokemon;

declare const tirtouga_Tirtouga: typeof Tirtouga;
declare namespace tirtouga {
  export { tirtouga_Tirtouga as Tirtouga };
}

declare const Carracosta: Pokemon;

declare const carracosta_Carracosta: typeof Carracosta;
declare namespace carracosta {
  export { carracosta_Carracosta as Carracosta };
}

declare const Archen: Pokemon;

declare const archen_Archen: typeof Archen;
declare namespace archen {
  export { archen_Archen as Archen };
}

declare const Archeops: Pokemon;

declare const archeops_Archeops: typeof Archeops;
declare namespace archeops {
  export { archeops_Archeops as Archeops };
}

declare const Trubbish: Pokemon;

declare const trubbish_Trubbish: typeof Trubbish;
declare namespace trubbish {
  export { trubbish_Trubbish as Trubbish };
}

declare const Garbodor: Pokemon;

declare const garbodor_Garbodor: typeof Garbodor;
declare namespace garbodor {
  export { garbodor_Garbodor as Garbodor };
}

declare const Zorua: Pokemon;

declare const zorua_Zorua: typeof Zorua;
declare namespace zorua {
  export { zorua_Zorua as Zorua };
}

declare const Zoroark: Pokemon;

declare const zoroark_Zoroark: typeof Zoroark;
declare namespace zoroark {
  export { zoroark_Zoroark as Zoroark };
}

declare const Minccino: Pokemon;

declare const minccino_Minccino: typeof Minccino;
declare namespace minccino {
  export { minccino_Minccino as Minccino };
}

declare const Cinccino: Pokemon;

declare const cinccino_Cinccino: typeof Cinccino;
declare namespace cinccino {
  export { cinccino_Cinccino as Cinccino };
}

declare const Gothita: Pokemon;

declare const gothita_Gothita: typeof Gothita;
declare namespace gothita {
  export { gothita_Gothita as Gothita };
}

declare const Gothorita: Pokemon;

declare const gothorita_Gothorita: typeof Gothorita;
declare namespace gothorita {
  export { gothorita_Gothorita as Gothorita };
}

declare const Gothitelle: Pokemon;

declare const gothitelle_Gothitelle: typeof Gothitelle;
declare namespace gothitelle {
  export { gothitelle_Gothitelle as Gothitelle };
}

declare const Solosis: Pokemon;

declare const solosis_Solosis: typeof Solosis;
declare namespace solosis {
  export { solosis_Solosis as Solosis };
}

declare const Duosion: Pokemon;

declare const duosion_Duosion: typeof Duosion;
declare namespace duosion {
  export { duosion_Duosion as Duosion };
}

declare const Reuniclus: Pokemon;

declare const reuniclus_Reuniclus: typeof Reuniclus;
declare namespace reuniclus {
  export { reuniclus_Reuniclus as Reuniclus };
}

declare const Ducklett: Pokemon;

declare const ducklett_Ducklett: typeof Ducklett;
declare namespace ducklett {
  export { ducklett_Ducklett as Ducklett };
}

declare const Swanna: Pokemon;

declare const swanna_Swanna: typeof Swanna;
declare namespace swanna {
  export { swanna_Swanna as Swanna };
}

declare const Vanillite: Pokemon;

declare const vanillite_Vanillite: typeof Vanillite;
declare namespace vanillite {
  export { vanillite_Vanillite as Vanillite };
}

declare const Vanillish: Pokemon;

declare const vanillish_Vanillish: typeof Vanillish;
declare namespace vanillish {
  export { vanillish_Vanillish as Vanillish };
}

declare const Vanilluxe: Pokemon;

declare const vanilluxe_Vanilluxe: typeof Vanilluxe;
declare namespace vanilluxe {
  export { vanilluxe_Vanilluxe as Vanilluxe };
}

declare const Deerling: Pokemon;

declare const deerling_Deerling: typeof Deerling;
declare namespace deerling {
  export { deerling_Deerling as Deerling };
}

declare const Sawsbuck: Pokemon;

declare const sawsbuck_Sawsbuck: typeof Sawsbuck;
declare namespace sawsbuck {
  export { sawsbuck_Sawsbuck as Sawsbuck };
}

declare const Emolga: Pokemon;

declare const emolga_Emolga: typeof Emolga;
declare namespace emolga {
  export { emolga_Emolga as Emolga };
}

declare const Karrablast: Pokemon;

declare const karrablast_Karrablast: typeof Karrablast;
declare namespace karrablast {
  export { karrablast_Karrablast as Karrablast };
}

declare const Escavalier: Pokemon;

declare const escavalier_Escavalier: typeof Escavalier;
declare namespace escavalier {
  export { escavalier_Escavalier as Escavalier };
}

declare const Foongus: Pokemon;

declare const foongus_Foongus: typeof Foongus;
declare namespace foongus {
  export { foongus_Foongus as Foongus };
}

declare const Amoonguss: Pokemon;

declare const amoonguss_Amoonguss: typeof Amoonguss;
declare namespace amoonguss {
  export { amoonguss_Amoonguss as Amoonguss };
}

declare const Frillish: Pokemon;

declare const frillish_Frillish: typeof Frillish;
declare namespace frillish {
  export { frillish_Frillish as Frillish };
}

declare const Jellicent: Pokemon;

declare const jellicent_Jellicent: typeof Jellicent;
declare namespace jellicent {
  export { jellicent_Jellicent as Jellicent };
}

declare const Alomomola: Pokemon;

declare const alomomola_Alomomola: typeof Alomomola;
declare namespace alomomola {
  export { alomomola_Alomomola as Alomomola };
}

declare const Joltik: Pokemon;

declare const joltik_Joltik: typeof Joltik;
declare namespace joltik {
  export { joltik_Joltik as Joltik };
}

declare const Galvantula: Pokemon;

declare const galvantula_Galvantula: typeof Galvantula;
declare namespace galvantula {
  export { galvantula_Galvantula as Galvantula };
}

declare const Ferroseed: Pokemon;

declare const ferroseed_Ferroseed: typeof Ferroseed;
declare namespace ferroseed {
  export { ferroseed_Ferroseed as Ferroseed };
}

declare const Ferrothorn: Pokemon;

declare const ferrothorn_Ferrothorn: typeof Ferrothorn;
declare namespace ferrothorn {
  export { ferrothorn_Ferrothorn as Ferrothorn };
}

declare const Klink: Pokemon;

declare const klink_Klink: typeof Klink;
declare namespace klink {
  export { klink_Klink as Klink };
}

declare const Klang: Pokemon;

declare const klang_Klang: typeof Klang;
declare namespace klang {
  export { klang_Klang as Klang };
}

declare const Klinklang: Pokemon;

declare const klinklang_Klinklang: typeof Klinklang;
declare namespace klinklang {
  export { klinklang_Klinklang as Klinklang };
}

declare const Tynamo: Pokemon;

declare const tynamo_Tynamo: typeof Tynamo;
declare namespace tynamo {
  export { tynamo_Tynamo as Tynamo };
}

declare const Eelektrik: Pokemon;

declare const eelektrik_Eelektrik: typeof Eelektrik;
declare namespace eelektrik {
  export { eelektrik_Eelektrik as Eelektrik };
}

declare const Eelektross: Pokemon;

declare const eelektross_Eelektross: typeof Eelektross;
declare namespace eelektross {
  export { eelektross_Eelektross as Eelektross };
}

declare const Elgyem: Pokemon;

declare const elgyem_Elgyem: typeof Elgyem;
declare namespace elgyem {
  export { elgyem_Elgyem as Elgyem };
}

declare const Beheeyem: Pokemon;

declare const beheeyem_Beheeyem: typeof Beheeyem;
declare namespace beheeyem {
  export { beheeyem_Beheeyem as Beheeyem };
}

declare const Litwick: Pokemon;

declare const litwick_Litwick: typeof Litwick;
declare namespace litwick {
  export { litwick_Litwick as Litwick };
}

declare const Lampent: Pokemon;

declare const lampent_Lampent: typeof Lampent;
declare namespace lampent {
  export { lampent_Lampent as Lampent };
}

declare const Chandelure: Pokemon;

declare const chandelure_Chandelure: typeof Chandelure;
declare namespace chandelure {
  export { chandelure_Chandelure as Chandelure };
}

declare const Axew: Pokemon;

declare const axew_Axew: typeof Axew;
declare namespace axew {
  export { axew_Axew as Axew };
}

declare const Fraxure: Pokemon;

declare const fraxure_Fraxure: typeof Fraxure;
declare namespace fraxure {
  export { fraxure_Fraxure as Fraxure };
}

declare const Haxorus: Pokemon;

declare const haxorus_Haxorus: typeof Haxorus;
declare namespace haxorus {
  export { haxorus_Haxorus as Haxorus };
}

declare const Cubchoo: Pokemon;

declare const cubchoo_Cubchoo: typeof Cubchoo;
declare namespace cubchoo {
  export { cubchoo_Cubchoo as Cubchoo };
}

declare const Beartic: Pokemon;

declare const beartic_Beartic: typeof Beartic;
declare namespace beartic {
  export { beartic_Beartic as Beartic };
}

declare const Cryogonal: Pokemon;

declare const cryogonal_Cryogonal: typeof Cryogonal;
declare namespace cryogonal {
  export { cryogonal_Cryogonal as Cryogonal };
}

declare const Shelmet: Pokemon;

declare const shelmet_Shelmet: typeof Shelmet;
declare namespace shelmet {
  export { shelmet_Shelmet as Shelmet };
}

declare const Accelgor: Pokemon;

declare const accelgor_Accelgor: typeof Accelgor;
declare namespace accelgor {
  export { accelgor_Accelgor as Accelgor };
}

declare const Stunfisk: Pokemon;

declare const stunfisk_Stunfisk: typeof Stunfisk;
declare namespace stunfisk {
  export { stunfisk_Stunfisk as Stunfisk };
}

declare const Mienfoo: Pokemon;

declare const mienfoo_Mienfoo: typeof Mienfoo;
declare namespace mienfoo {
  export { mienfoo_Mienfoo as Mienfoo };
}

declare const Mienshao: Pokemon;

declare const mienshao_Mienshao: typeof Mienshao;
declare namespace mienshao {
  export { mienshao_Mienshao as Mienshao };
}

declare const Druddigon: Pokemon;

declare const druddigon_Druddigon: typeof Druddigon;
declare namespace druddigon {
  export { druddigon_Druddigon as Druddigon };
}

declare const Golett: Pokemon;

declare const golett_Golett: typeof Golett;
declare namespace golett {
  export { golett_Golett as Golett };
}

declare const Golurk: Pokemon;

declare const golurk_Golurk: typeof Golurk;
declare namespace golurk {
  export { golurk_Golurk as Golurk };
}

declare const Pawniard: Pokemon;

declare const pawniard_Pawniard: typeof Pawniard;
declare namespace pawniard {
  export { pawniard_Pawniard as Pawniard };
}

declare const Bisharp: Pokemon;

declare const bisharp_Bisharp: typeof Bisharp;
declare namespace bisharp {
  export { bisharp_Bisharp as Bisharp };
}

declare const Bouffalant: Pokemon;

declare const bouffalant_Bouffalant: typeof Bouffalant;
declare namespace bouffalant {
  export { bouffalant_Bouffalant as Bouffalant };
}

declare const Rufflet: Pokemon;

declare const rufflet_Rufflet: typeof Rufflet;
declare namespace rufflet {
  export { rufflet_Rufflet as Rufflet };
}

declare const Braviary: Pokemon;

declare const braviary_Braviary: typeof Braviary;
declare namespace braviary {
  export { braviary_Braviary as Braviary };
}

declare const Vullaby: Pokemon;

declare const vullaby_Vullaby: typeof Vullaby;
declare namespace vullaby {
  export { vullaby_Vullaby as Vullaby };
}

declare const Mandibuzz: Pokemon;

declare const mandibuzz_Mandibuzz: typeof Mandibuzz;
declare namespace mandibuzz {
  export { mandibuzz_Mandibuzz as Mandibuzz };
}

declare const Heatmor: Pokemon;

declare const heatmor_Heatmor: typeof Heatmor;
declare namespace heatmor {
  export { heatmor_Heatmor as Heatmor };
}

declare const Durant: Pokemon;

declare const durant_Durant: typeof Durant;
declare namespace durant {
  export { durant_Durant as Durant };
}

declare const Deino: Pokemon;

declare const deino_Deino: typeof Deino;
declare namespace deino {
  export { deino_Deino as Deino };
}

declare const Zweilous: Pokemon;

declare const zweilous_Zweilous: typeof Zweilous;
declare namespace zweilous {
  export { zweilous_Zweilous as Zweilous };
}

declare const Hydreigon: Pokemon;

declare const hydreigon_Hydreigon: typeof Hydreigon;
declare namespace hydreigon {
  export { hydreigon_Hydreigon as Hydreigon };
}

declare const Larvesta: Pokemon;

declare const larvesta_Larvesta: typeof Larvesta;
declare namespace larvesta {
  export { larvesta_Larvesta as Larvesta };
}

declare const Volcarona: Pokemon;

declare const volcarona_Volcarona: typeof Volcarona;
declare namespace volcarona {
  export { volcarona_Volcarona as Volcarona };
}

declare const Cobalion: Pokemon;

declare const cobalion_Cobalion: typeof Cobalion;
declare namespace cobalion {
  export { cobalion_Cobalion as Cobalion };
}

declare const Terrakion: Pokemon;

declare const terrakion_Terrakion: typeof Terrakion;
declare namespace terrakion {
  export { terrakion_Terrakion as Terrakion };
}

declare const Virizion: Pokemon;

declare const virizion_Virizion: typeof Virizion;
declare namespace virizion {
  export { virizion_Virizion as Virizion };
}

declare const Tornadus: Pokemon;

declare const tornadus_Tornadus: typeof Tornadus;
declare namespace tornadus {
  export { tornadus_Tornadus as Tornadus };
}

declare const Thundurus: Pokemon;

declare const thundurus_Thundurus: typeof Thundurus;
declare namespace thundurus {
  export { thundurus_Thundurus as Thundurus };
}

declare const Reshiram: Pokemon;

declare const reshiram_Reshiram: typeof Reshiram;
declare namespace reshiram {
  export { reshiram_Reshiram as Reshiram };
}

declare const Zekrom: Pokemon;

declare const zekrom_Zekrom: typeof Zekrom;
declare namespace zekrom {
  export { zekrom_Zekrom as Zekrom };
}

declare const Landorus: Pokemon;

declare const landorus_Landorus: typeof Landorus;
declare namespace landorus {
  export { landorus_Landorus as Landorus };
}

declare const Kyurem: Pokemon;

declare const kyurem_Kyurem: typeof Kyurem;
declare namespace kyurem {
  export { kyurem_Kyurem as Kyurem };
}

declare const Keldeo: Pokemon;

declare const keldeo_Keldeo: typeof Keldeo;
declare namespace keldeo {
  export { keldeo_Keldeo as Keldeo };
}

declare const Meloetta: Pokemon;

declare const meloetta_Meloetta: typeof Meloetta;
declare namespace meloetta {
  export { meloetta_Meloetta as Meloetta };
}

declare const Genesect: Pokemon;

declare const genesect_Genesect: typeof Genesect;
declare namespace genesect {
  export { genesect_Genesect as Genesect };
}

declare const Gen5PokemonData: {
    494: Pokemon;
    495: Pokemon;
    496: Pokemon;
    497: Pokemon;
    498: Pokemon;
    499: Pokemon;
    500: Pokemon;
    501: Pokemon;
    502: Pokemon;
    503: Pokemon;
    504: Pokemon;
    505: Pokemon;
    506: Pokemon;
    507: Pokemon;
    508: Pokemon;
    509: Pokemon;
    510: Pokemon;
    511: Pokemon;
    512: Pokemon;
    513: Pokemon;
    514: Pokemon;
    515: Pokemon;
    516: Pokemon;
    517: Pokemon;
    518: Pokemon;
    519: Pokemon;
    520: Pokemon;
    521: Pokemon;
    522: Pokemon;
    523: Pokemon;
    524: Pokemon;
    525: Pokemon;
    526: Pokemon;
    527: Pokemon;
    528: Pokemon;
    529: Pokemon;
    530: Pokemon;
    531: Pokemon;
    532: Pokemon;
    533: Pokemon;
    534: Pokemon;
    535: Pokemon;
    536: Pokemon;
    537: Pokemon;
    538: Pokemon;
    539: Pokemon;
    540: Pokemon;
    541: Pokemon;
    542: Pokemon;
    543: Pokemon;
    544: Pokemon;
    545: Pokemon;
    546: Pokemon;
    547: Pokemon;
    548: Pokemon;
    549: Pokemon;
    550: Pokemon;
    551: Pokemon;
    552: Pokemon;
    553: Pokemon;
    554: Pokemon;
    555: Pokemon;
    556: Pokemon;
    557: Pokemon;
    558: Pokemon;
    559: Pokemon;
    560: Pokemon;
    561: Pokemon;
    562: Pokemon;
    563: Pokemon;
    564: Pokemon;
    565: Pokemon;
    566: Pokemon;
    567: Pokemon;
    568: Pokemon;
    569: Pokemon;
    570: Pokemon;
    571: Pokemon;
    572: Pokemon;
    573: Pokemon;
    574: Pokemon;
    575: Pokemon;
    576: Pokemon;
    577: Pokemon;
    578: Pokemon;
    579: Pokemon;
    580: Pokemon;
    581: Pokemon;
    582: Pokemon;
    583: Pokemon;
    584: Pokemon;
    585: Pokemon;
    586: Pokemon;
    587: Pokemon;
    588: Pokemon;
    589: Pokemon;
    590: Pokemon;
    591: Pokemon;
    592: Pokemon;
    593: Pokemon;
    594: Pokemon;
    595: Pokemon;
    596: Pokemon;
    597: Pokemon;
    598: Pokemon;
    599: Pokemon;
    600: Pokemon;
    601: Pokemon;
    602: Pokemon;
    603: Pokemon;
    604: Pokemon;
    605: Pokemon;
    606: Pokemon;
    607: Pokemon;
    608: Pokemon;
    609: Pokemon;
    610: Pokemon;
    611: Pokemon;
    612: Pokemon;
    613: Pokemon;
    614: Pokemon;
    615: Pokemon;
    616: Pokemon;
    617: Pokemon;
    618: Pokemon;
    619: Pokemon;
    620: Pokemon;
    621: Pokemon;
    622: Pokemon;
    623: Pokemon;
    624: Pokemon;
    625: Pokemon;
    626: Pokemon;
    627: Pokemon;
    628: Pokemon;
    629: Pokemon;
    630: Pokemon;
    631: Pokemon;
    632: Pokemon;
    633: Pokemon;
    634: Pokemon;
    635: Pokemon;
    636: Pokemon;
    637: Pokemon;
    638: Pokemon;
    639: Pokemon;
    640: Pokemon;
    641: Pokemon;
    642: Pokemon;
    643: Pokemon;
    644: Pokemon;
    645: Pokemon;
    646: Pokemon;
    647: Pokemon;
    648: Pokemon;
    649: Pokemon;
};

declare const Chespin: Pokemon;

declare const chespin_Chespin: typeof Chespin;
declare namespace chespin {
  export { chespin_Chespin as Chespin };
}

declare const Quilladin: Pokemon;

declare const quilladin_Quilladin: typeof Quilladin;
declare namespace quilladin {
  export { quilladin_Quilladin as Quilladin };
}

declare const Chesnaught: Pokemon;

declare const chesnaught_Chesnaught: typeof Chesnaught;
declare namespace chesnaught {
  export { chesnaught_Chesnaught as Chesnaught };
}

declare const Fennekin: Pokemon;

declare const fennekin_Fennekin: typeof Fennekin;
declare namespace fennekin {
  export { fennekin_Fennekin as Fennekin };
}

declare const Braixen: Pokemon;

declare const braixen_Braixen: typeof Braixen;
declare namespace braixen {
  export { braixen_Braixen as Braixen };
}

declare const Delphox: Pokemon;

declare const delphox_Delphox: typeof Delphox;
declare namespace delphox {
  export { delphox_Delphox as Delphox };
}

declare const Froakie: Pokemon;

declare const froakie_Froakie: typeof Froakie;
declare namespace froakie {
  export { froakie_Froakie as Froakie };
}

declare const Frogadier: Pokemon;

declare const frogadier_Frogadier: typeof Frogadier;
declare namespace frogadier {
  export { frogadier_Frogadier as Frogadier };
}

declare const Greninja: Pokemon;

declare const greninja_Greninja: typeof Greninja;
declare namespace greninja {
  export { greninja_Greninja as Greninja };
}

declare const Bunnelby: Pokemon;

declare const bunnelby_Bunnelby: typeof Bunnelby;
declare namespace bunnelby {
  export { bunnelby_Bunnelby as Bunnelby };
}

declare const Diggersby: Pokemon;

declare const diggersby_Diggersby: typeof Diggersby;
declare namespace diggersby {
  export { diggersby_Diggersby as Diggersby };
}

declare const Fletchling: Pokemon;

declare const fletchling_Fletchling: typeof Fletchling;
declare namespace fletchling {
  export { fletchling_Fletchling as Fletchling };
}

declare const Fletchinder: Pokemon;

declare const fletchinder_Fletchinder: typeof Fletchinder;
declare namespace fletchinder {
  export { fletchinder_Fletchinder as Fletchinder };
}

declare const Talonflame: Pokemon;

declare const talonflame_Talonflame: typeof Talonflame;
declare namespace talonflame {
  export { talonflame_Talonflame as Talonflame };
}

declare const Scatterbug: Pokemon;

declare const scatterbug_Scatterbug: typeof Scatterbug;
declare namespace scatterbug {
  export { scatterbug_Scatterbug as Scatterbug };
}

declare const Spewpa: Pokemon;

declare const spewpa_Spewpa: typeof Spewpa;
declare namespace spewpa {
  export { spewpa_Spewpa as Spewpa };
}

declare const Vivillon: Pokemon;

declare const vivillon_Vivillon: typeof Vivillon;
declare namespace vivillon {
  export { vivillon_Vivillon as Vivillon };
}

declare const Litleo: Pokemon;

declare const litleo_Litleo: typeof Litleo;
declare namespace litleo {
  export { litleo_Litleo as Litleo };
}

declare const Pyroar: Pokemon;

declare const pyroar_Pyroar: typeof Pyroar;
declare namespace pyroar {
  export { pyroar_Pyroar as Pyroar };
}

declare const Flabebe: Pokemon;

declare const flabebe_Flabebe: typeof Flabebe;
declare namespace flabebe {
  export { flabebe_Flabebe as Flabebe };
}

declare const Floette: Pokemon;

declare const floette_Floette: typeof Floette;
declare namespace floette {
  export { floette_Floette as Floette };
}

declare const Florges: Pokemon;

declare const florges_Florges: typeof Florges;
declare namespace florges {
  export { florges_Florges as Florges };
}

declare const Skiddo: Pokemon;

declare const skiddo_Skiddo: typeof Skiddo;
declare namespace skiddo {
  export { skiddo_Skiddo as Skiddo };
}

declare const Gogoat: Pokemon;

declare const gogoat_Gogoat: typeof Gogoat;
declare namespace gogoat {
  export { gogoat_Gogoat as Gogoat };
}

declare const Pancham: Pokemon;

declare const pancham_Pancham: typeof Pancham;
declare namespace pancham {
  export { pancham_Pancham as Pancham };
}

declare const Pangoro: Pokemon;

declare const pangoro_Pangoro: typeof Pangoro;
declare namespace pangoro {
  export { pangoro_Pangoro as Pangoro };
}

declare const Furfrou: Pokemon;

declare const furfrou_Furfrou: typeof Furfrou;
declare namespace furfrou {
  export { furfrou_Furfrou as Furfrou };
}

declare const Espurr: Pokemon;

declare const espurr_Espurr: typeof Espurr;
declare namespace espurr {
  export { espurr_Espurr as Espurr };
}

declare const Meowstic: Pokemon;

declare const meowstic_Meowstic: typeof Meowstic;
declare namespace meowstic {
  export { meowstic_Meowstic as Meowstic };
}

declare const Honedge: Pokemon;

declare const honedge_Honedge: typeof Honedge;
declare namespace honedge {
  export { honedge_Honedge as Honedge };
}

declare const Doublade: Pokemon;

declare const doublade_Doublade: typeof Doublade;
declare namespace doublade {
  export { doublade_Doublade as Doublade };
}

declare const Aegislash: Pokemon;

declare const aegislash_Aegislash: typeof Aegislash;
declare namespace aegislash {
  export { aegislash_Aegislash as Aegislash };
}

declare const Spritzee: Pokemon;

declare const spritzee_Spritzee: typeof Spritzee;
declare namespace spritzee {
  export { spritzee_Spritzee as Spritzee };
}

declare const Aromatisse: Pokemon;

declare const aromatisse_Aromatisse: typeof Aromatisse;
declare namespace aromatisse {
  export { aromatisse_Aromatisse as Aromatisse };
}

declare const Swirlix: Pokemon;

declare const swirlix_Swirlix: typeof Swirlix;
declare namespace swirlix {
  export { swirlix_Swirlix as Swirlix };
}

declare const Slurpuff: Pokemon;

declare const slurpuff_Slurpuff: typeof Slurpuff;
declare namespace slurpuff {
  export { slurpuff_Slurpuff as Slurpuff };
}

declare const Inkay: Pokemon;

declare const inkay_Inkay: typeof Inkay;
declare namespace inkay {
  export { inkay_Inkay as Inkay };
}

declare const Malamar: Pokemon;

declare const malamar_Malamar: typeof Malamar;
declare namespace malamar {
  export { malamar_Malamar as Malamar };
}

declare const Binacle: Pokemon;

declare const binacle_Binacle: typeof Binacle;
declare namespace binacle {
  export { binacle_Binacle as Binacle };
}

declare const Barbaracle: Pokemon;

declare const barbaracle_Barbaracle: typeof Barbaracle;
declare namespace barbaracle {
  export { barbaracle_Barbaracle as Barbaracle };
}

declare const Skrelp: Pokemon;

declare const skrelp_Skrelp: typeof Skrelp;
declare namespace skrelp {
  export { skrelp_Skrelp as Skrelp };
}

declare const Dragalge: Pokemon;

declare const dragalge_Dragalge: typeof Dragalge;
declare namespace dragalge {
  export { dragalge_Dragalge as Dragalge };
}

declare const Clauncher: Pokemon;

declare const clauncher_Clauncher: typeof Clauncher;
declare namespace clauncher {
  export { clauncher_Clauncher as Clauncher };
}

declare const Clawitzer: Pokemon;

declare const clawitzer_Clawitzer: typeof Clawitzer;
declare namespace clawitzer {
  export { clawitzer_Clawitzer as Clawitzer };
}

declare const Helioptile: Pokemon;

declare const helioptile_Helioptile: typeof Helioptile;
declare namespace helioptile {
  export { helioptile_Helioptile as Helioptile };
}

declare const Heliolisk: Pokemon;

declare const heliolisk_Heliolisk: typeof Heliolisk;
declare namespace heliolisk {
  export { heliolisk_Heliolisk as Heliolisk };
}

declare const Tyrunt: Pokemon;

declare const tyrunt_Tyrunt: typeof Tyrunt;
declare namespace tyrunt {
  export { tyrunt_Tyrunt as Tyrunt };
}

declare const Tyrantrum: Pokemon;

declare const tyrantrum_Tyrantrum: typeof Tyrantrum;
declare namespace tyrantrum {
  export { tyrantrum_Tyrantrum as Tyrantrum };
}

declare const Amaura: Pokemon;

declare const amaura_Amaura: typeof Amaura;
declare namespace amaura {
  export { amaura_Amaura as Amaura };
}

declare const Aurorus: Pokemon;

declare const aurorus_Aurorus: typeof Aurorus;
declare namespace aurorus {
  export { aurorus_Aurorus as Aurorus };
}

declare const Sylveon: Pokemon;

declare const sylveon_Sylveon: typeof Sylveon;
declare namespace sylveon {
  export { sylveon_Sylveon as Sylveon };
}

declare const Hawlucha: Pokemon;

declare const hawlucha_Hawlucha: typeof Hawlucha;
declare namespace hawlucha {
  export { hawlucha_Hawlucha as Hawlucha };
}

declare const Dedenne: Pokemon;

declare const dedenne_Dedenne: typeof Dedenne;
declare namespace dedenne {
  export { dedenne_Dedenne as Dedenne };
}

declare const Carbink: Pokemon;

declare const carbink_Carbink: typeof Carbink;
declare namespace carbink {
  export { carbink_Carbink as Carbink };
}

declare const Goomy: Pokemon;

declare const goomy_Goomy: typeof Goomy;
declare namespace goomy {
  export { goomy_Goomy as Goomy };
}

declare const Sliggoo: Pokemon;

declare const sliggoo_Sliggoo: typeof Sliggoo;
declare namespace sliggoo {
  export { sliggoo_Sliggoo as Sliggoo };
}

declare const Goodra: Pokemon;

declare const goodra_Goodra: typeof Goodra;
declare namespace goodra {
  export { goodra_Goodra as Goodra };
}

declare const Klefki: Pokemon;

declare const klefki_Klefki: typeof Klefki;
declare namespace klefki {
  export { klefki_Klefki as Klefki };
}

declare const Phantump: Pokemon;

declare const phantump_Phantump: typeof Phantump;
declare namespace phantump {
  export { phantump_Phantump as Phantump };
}

declare const Trevenant: Pokemon;

declare const trevenant_Trevenant: typeof Trevenant;
declare namespace trevenant {
  export { trevenant_Trevenant as Trevenant };
}

declare const Pumpkaboo: Pokemon;

declare const pumpkaboo_Pumpkaboo: typeof Pumpkaboo;
declare namespace pumpkaboo {
  export { pumpkaboo_Pumpkaboo as Pumpkaboo };
}

declare const Gourgeist: Pokemon;

declare const gourgeist_Gourgeist: typeof Gourgeist;
declare namespace gourgeist {
  export { gourgeist_Gourgeist as Gourgeist };
}

declare const Bergmite: Pokemon;

declare const bergmite_Bergmite: typeof Bergmite;
declare namespace bergmite {
  export { bergmite_Bergmite as Bergmite };
}

declare const Avalugg: Pokemon;

declare const avalugg_Avalugg: typeof Avalugg;
declare namespace avalugg {
  export { avalugg_Avalugg as Avalugg };
}

declare const Noibat: Pokemon;

declare const noibat_Noibat: typeof Noibat;
declare namespace noibat {
  export { noibat_Noibat as Noibat };
}

declare const Noivern: Pokemon;

declare const noivern_Noivern: typeof Noivern;
declare namespace noivern {
  export { noivern_Noivern as Noivern };
}

declare const Xerneas: Pokemon;

declare const xerneas_Xerneas: typeof Xerneas;
declare namespace xerneas {
  export { xerneas_Xerneas as Xerneas };
}

declare const Yveltal: Pokemon;

declare const yveltal_Yveltal: typeof Yveltal;
declare namespace yveltal {
  export { yveltal_Yveltal as Yveltal };
}

declare const Zygarde: Pokemon;

declare const zygarde_Zygarde: typeof Zygarde;
declare namespace zygarde {
  export { zygarde_Zygarde as Zygarde };
}

declare const Diancie: Pokemon;

declare const diancie_Diancie: typeof Diancie;
declare namespace diancie {
  export { diancie_Diancie as Diancie };
}

declare const Hoopa: Pokemon;

declare const hoopa_Hoopa: typeof Hoopa;
declare namespace hoopa {
  export { hoopa_Hoopa as Hoopa };
}

declare const Volcanion: Pokemon;

declare const volcanion_Volcanion: typeof Volcanion;
declare namespace volcanion {
  export { volcanion_Volcanion as Volcanion };
}

declare const Gen6PokemonData: {
    650: Pokemon;
    651: Pokemon;
    652: Pokemon;
    653: Pokemon;
    654: Pokemon;
    655: Pokemon;
    656: Pokemon;
    657: Pokemon;
    658: Pokemon;
    659: Pokemon;
    660: Pokemon;
    661: Pokemon;
    662: Pokemon;
    663: Pokemon;
    664: Pokemon;
    665: Pokemon;
    666: Pokemon;
    667: Pokemon;
    668: Pokemon;
    669: Pokemon;
    670: Pokemon;
    671: Pokemon;
    672: Pokemon;
    673: Pokemon;
    674: Pokemon;
    675: Pokemon;
    676: Pokemon;
    677: Pokemon;
    678: Pokemon;
    679: Pokemon;
    680: Pokemon;
    681: Pokemon;
    682: Pokemon;
    683: Pokemon;
    684: Pokemon;
    685: Pokemon;
    686: Pokemon;
    687: Pokemon;
    688: Pokemon;
    689: Pokemon;
    690: Pokemon;
    691: Pokemon;
    692: Pokemon;
    693: Pokemon;
    694: Pokemon;
    695: Pokemon;
    696: Pokemon;
    697: Pokemon;
    698: Pokemon;
    699: Pokemon;
    700: Pokemon;
    701: Pokemon;
    702: Pokemon;
    703: Pokemon;
    704: Pokemon;
    705: Pokemon;
    706: Pokemon;
    707: Pokemon;
    708: Pokemon;
    709: Pokemon;
    710: Pokemon;
    711: Pokemon;
    712: Pokemon;
    713: Pokemon;
    714: Pokemon;
    715: Pokemon;
    716: Pokemon;
    717: Pokemon;
    718: Pokemon;
    719: Pokemon;
    720: Pokemon;
    721: Pokemon;
};

declare const Rowlet: Pokemon;

declare const rowlet_Rowlet: typeof Rowlet;
declare namespace rowlet {
  export { rowlet_Rowlet as Rowlet };
}

declare const Dartrix: Pokemon;

declare const dartrix_Dartrix: typeof Dartrix;
declare namespace dartrix {
  export { dartrix_Dartrix as Dartrix };
}

declare const Decidueye: Pokemon;

declare const decidueye_Decidueye: typeof Decidueye;
declare namespace decidueye {
  export { decidueye_Decidueye as Decidueye };
}

declare const Litten: Pokemon;

declare const litten_Litten: typeof Litten;
declare namespace litten {
  export { litten_Litten as Litten };
}

declare const Torracat: Pokemon;

declare const torracat_Torracat: typeof Torracat;
declare namespace torracat {
  export { torracat_Torracat as Torracat };
}

declare const Incineroar: Pokemon;

declare const incineroar_Incineroar: typeof Incineroar;
declare namespace incineroar {
  export { incineroar_Incineroar as Incineroar };
}

declare const Popplio: Pokemon;

declare const popplio_Popplio: typeof Popplio;
declare namespace popplio {
  export { popplio_Popplio as Popplio };
}

declare const Brionne: Pokemon;

declare const brionne_Brionne: typeof Brionne;
declare namespace brionne {
  export { brionne_Brionne as Brionne };
}

declare const Primarina: Pokemon;

declare const primarina_Primarina: typeof Primarina;
declare namespace primarina {
  export { primarina_Primarina as Primarina };
}

declare const Pikipek: Pokemon;

declare const pikipek_Pikipek: typeof Pikipek;
declare namespace pikipek {
  export { pikipek_Pikipek as Pikipek };
}

declare const Trumbeak: Pokemon;

declare const trumbeak_Trumbeak: typeof Trumbeak;
declare namespace trumbeak {
  export { trumbeak_Trumbeak as Trumbeak };
}

declare const Toucannon: Pokemon;

declare const toucannon_Toucannon: typeof Toucannon;
declare namespace toucannon {
  export { toucannon_Toucannon as Toucannon };
}

declare const Yungoos: Pokemon;

declare const yungoos_Yungoos: typeof Yungoos;
declare namespace yungoos {
  export { yungoos_Yungoos as Yungoos };
}

declare const Gumshoos: Pokemon;

declare const gumshoos_Gumshoos: typeof Gumshoos;
declare namespace gumshoos {
  export { gumshoos_Gumshoos as Gumshoos };
}

declare const Grubbin: Pokemon;

declare const grubbin_Grubbin: typeof Grubbin;
declare namespace grubbin {
  export { grubbin_Grubbin as Grubbin };
}

declare const Charjabug: Pokemon;

declare const charjabug_Charjabug: typeof Charjabug;
declare namespace charjabug {
  export { charjabug_Charjabug as Charjabug };
}

declare const Vikavolt: Pokemon;

declare const vikavolt_Vikavolt: typeof Vikavolt;
declare namespace vikavolt {
  export { vikavolt_Vikavolt as Vikavolt };
}

declare const Crabrawler: Pokemon;

declare const crabrawler_Crabrawler: typeof Crabrawler;
declare namespace crabrawler {
  export { crabrawler_Crabrawler as Crabrawler };
}

declare const Crabominable: Pokemon;

declare const crabominable_Crabominable: typeof Crabominable;
declare namespace crabominable {
  export { crabominable_Crabominable as Crabominable };
}

declare const Oricorio: Pokemon;

declare const oricorio_Oricorio: typeof Oricorio;
declare namespace oricorio {
  export { oricorio_Oricorio as Oricorio };
}

declare const Cutiefly: Pokemon;

declare const cutiefly_Cutiefly: typeof Cutiefly;
declare namespace cutiefly {
  export { cutiefly_Cutiefly as Cutiefly };
}

declare const Ribombee: Pokemon;

declare const ribombee_Ribombee: typeof Ribombee;
declare namespace ribombee {
  export { ribombee_Ribombee as Ribombee };
}

declare const Rockruff: Pokemon;

declare const rockruff_Rockruff: typeof Rockruff;
declare namespace rockruff {
  export { rockruff_Rockruff as Rockruff };
}

declare const Lycanroc: Pokemon;

declare const lycanroc_Lycanroc: typeof Lycanroc;
declare namespace lycanroc {
  export { lycanroc_Lycanroc as Lycanroc };
}

declare const Wishiwashi: Pokemon;

declare const wishiwashi_Wishiwashi: typeof Wishiwashi;
declare namespace wishiwashi {
  export { wishiwashi_Wishiwashi as Wishiwashi };
}

declare const Mareanie: Pokemon;

declare const mareanie_Mareanie: typeof Mareanie;
declare namespace mareanie {
  export { mareanie_Mareanie as Mareanie };
}

declare const Toxapex: Pokemon;

declare const toxapex_Toxapex: typeof Toxapex;
declare namespace toxapex {
  export { toxapex_Toxapex as Toxapex };
}

declare const Mudbray: Pokemon;

declare const mudbray_Mudbray: typeof Mudbray;
declare namespace mudbray {
  export { mudbray_Mudbray as Mudbray };
}

declare const Mudsdale: Pokemon;

declare const mudsdale_Mudsdale: typeof Mudsdale;
declare namespace mudsdale {
  export { mudsdale_Mudsdale as Mudsdale };
}

declare const Dewpider: Pokemon;

declare const dewpider_Dewpider: typeof Dewpider;
declare namespace dewpider {
  export { dewpider_Dewpider as Dewpider };
}

declare const Araquanid: Pokemon;

declare const araquanid_Araquanid: typeof Araquanid;
declare namespace araquanid {
  export { araquanid_Araquanid as Araquanid };
}

declare const Fomantis: Pokemon;

declare const fomantis_Fomantis: typeof Fomantis;
declare namespace fomantis {
  export { fomantis_Fomantis as Fomantis };
}

declare const Lurantis: Pokemon;

declare const lurantis_Lurantis: typeof Lurantis;
declare namespace lurantis {
  export { lurantis_Lurantis as Lurantis };
}

declare const Morelull: Pokemon;

declare const morelull_Morelull: typeof Morelull;
declare namespace morelull {
  export { morelull_Morelull as Morelull };
}

declare const Shiinotic: Pokemon;

declare const shiinotic_Shiinotic: typeof Shiinotic;
declare namespace shiinotic {
  export { shiinotic_Shiinotic as Shiinotic };
}

declare const Salandit: Pokemon;

declare const salandit_Salandit: typeof Salandit;
declare namespace salandit {
  export { salandit_Salandit as Salandit };
}

declare const Salazzle: Pokemon;

declare const salazzle_Salazzle: typeof Salazzle;
declare namespace salazzle {
  export { salazzle_Salazzle as Salazzle };
}

declare const Stufful: Pokemon;

declare const stufful_Stufful: typeof Stufful;
declare namespace stufful {
  export { stufful_Stufful as Stufful };
}

declare const Bewear: Pokemon;

declare const bewear_Bewear: typeof Bewear;
declare namespace bewear {
  export { bewear_Bewear as Bewear };
}

declare const Bounsweet: Pokemon;

declare const bounsweet_Bounsweet: typeof Bounsweet;
declare namespace bounsweet {
  export { bounsweet_Bounsweet as Bounsweet };
}

declare const Steenee: Pokemon;

declare const steenee_Steenee: typeof Steenee;
declare namespace steenee {
  export { steenee_Steenee as Steenee };
}

declare const Tsareena: Pokemon;

declare const tsareena_Tsareena: typeof Tsareena;
declare namespace tsareena {
  export { tsareena_Tsareena as Tsareena };
}

declare const Comfey: Pokemon;

declare const comfey_Comfey: typeof Comfey;
declare namespace comfey {
  export { comfey_Comfey as Comfey };
}

declare const Oranguru: Pokemon;

declare const oranguru_Oranguru: typeof Oranguru;
declare namespace oranguru {
  export { oranguru_Oranguru as Oranguru };
}

declare const Passimian: Pokemon;

declare const passimian_Passimian: typeof Passimian;
declare namespace passimian {
  export { passimian_Passimian as Passimian };
}

declare const Wimpod: Pokemon;

declare const wimpod_Wimpod: typeof Wimpod;
declare namespace wimpod {
  export { wimpod_Wimpod as Wimpod };
}

declare const Golisopod: Pokemon;

declare const golisopod_Golisopod: typeof Golisopod;
declare namespace golisopod {
  export { golisopod_Golisopod as Golisopod };
}

declare const Sandygast: Pokemon;

declare const sandygast_Sandygast: typeof Sandygast;
declare namespace sandygast {
  export { sandygast_Sandygast as Sandygast };
}

declare const Palossand: Pokemon;

declare const palossand_Palossand: typeof Palossand;
declare namespace palossand {
  export { palossand_Palossand as Palossand };
}

declare const Pyukumuku: Pokemon;

declare const pyukumuku_Pyukumuku: typeof Pyukumuku;
declare namespace pyukumuku {
  export { pyukumuku_Pyukumuku as Pyukumuku };
}

declare const TypeNull: Pokemon;

declare const typenull_TypeNull: typeof TypeNull;
declare namespace typenull {
  export { typenull_TypeNull as TypeNull };
}

declare const Silvally: Pokemon;

declare const silvally_Silvally: typeof Silvally;
declare namespace silvally {
  export { silvally_Silvally as Silvally };
}

declare const Minior: Pokemon;

declare const minior_Minior: typeof Minior;
declare namespace minior {
  export { minior_Minior as Minior };
}

declare const Komala: Pokemon;

declare const komala_Komala: typeof Komala;
declare namespace komala {
  export { komala_Komala as Komala };
}

declare const Turtonator: Pokemon;

declare const turtonator_Turtonator: typeof Turtonator;
declare namespace turtonator {
  export { turtonator_Turtonator as Turtonator };
}

declare const Togedemaru: Pokemon;

declare const togedemaru_Togedemaru: typeof Togedemaru;
declare namespace togedemaru {
  export { togedemaru_Togedemaru as Togedemaru };
}

declare const Mimikyu: Pokemon;

declare const mimikyu_Mimikyu: typeof Mimikyu;
declare namespace mimikyu {
  export { mimikyu_Mimikyu as Mimikyu };
}

declare const Bruxish: Pokemon;

declare const bruxish_Bruxish: typeof Bruxish;
declare namespace bruxish {
  export { bruxish_Bruxish as Bruxish };
}

declare const Drampa: Pokemon;

declare const drampa_Drampa: typeof Drampa;
declare namespace drampa {
  export { drampa_Drampa as Drampa };
}

declare const Dhelmise: Pokemon;

declare const dhelmise_Dhelmise: typeof Dhelmise;
declare namespace dhelmise {
  export { dhelmise_Dhelmise as Dhelmise };
}

declare const Jangmoo: Pokemon;

declare const jangmoo_Jangmoo: typeof Jangmoo;
declare namespace jangmoo {
  export { jangmoo_Jangmoo as Jangmoo };
}

declare const Hakamoo: Pokemon;

declare const hakamoo_Hakamoo: typeof Hakamoo;
declare namespace hakamoo {
  export { hakamoo_Hakamoo as Hakamoo };
}

declare const Kommoo: Pokemon;

declare const kommoo_Kommoo: typeof Kommoo;
declare namespace kommoo {
  export { kommoo_Kommoo as Kommoo };
}

declare const TapuKoko: Pokemon;

declare const tapukoko_TapuKoko: typeof TapuKoko;
declare namespace tapukoko {
  export { tapukoko_TapuKoko as TapuKoko };
}

declare const TapuLele: Pokemon;

declare const tapulele_TapuLele: typeof TapuLele;
declare namespace tapulele {
  export { tapulele_TapuLele as TapuLele };
}

declare const TapuBulu: Pokemon;

declare const tapubulu_TapuBulu: typeof TapuBulu;
declare namespace tapubulu {
  export { tapubulu_TapuBulu as TapuBulu };
}

declare const TapuFini: Pokemon;

declare const tapufini_TapuFini: typeof TapuFini;
declare namespace tapufini {
  export { tapufini_TapuFini as TapuFini };
}

declare const Cosmog: Pokemon;

declare const cosmog_Cosmog: typeof Cosmog;
declare namespace cosmog {
  export { cosmog_Cosmog as Cosmog };
}

declare const Cosmoem: Pokemon;

declare const cosmoem_Cosmoem: typeof Cosmoem;
declare namespace cosmoem {
  export { cosmoem_Cosmoem as Cosmoem };
}

declare const Solgaleo: Pokemon;

declare const solgaleo_Solgaleo: typeof Solgaleo;
declare namespace solgaleo {
  export { solgaleo_Solgaleo as Solgaleo };
}

declare const Lunala: Pokemon;

declare const lunala_Lunala: typeof Lunala;
declare namespace lunala {
  export { lunala_Lunala as Lunala };
}

declare const Nihilego: Pokemon;

declare const nihilego_Nihilego: typeof Nihilego;
declare namespace nihilego {
  export { nihilego_Nihilego as Nihilego };
}

declare const Buzzwole: Pokemon;

declare const buzzwole_Buzzwole: typeof Buzzwole;
declare namespace buzzwole {
  export { buzzwole_Buzzwole as Buzzwole };
}

declare const Pheromosa: Pokemon;

declare const pheromosa_Pheromosa: typeof Pheromosa;
declare namespace pheromosa {
  export { pheromosa_Pheromosa as Pheromosa };
}

declare const Xurkitree: Pokemon;

declare const xurkitree_Xurkitree: typeof Xurkitree;
declare namespace xurkitree {
  export { xurkitree_Xurkitree as Xurkitree };
}

declare const Celesteela: Pokemon;

declare const celesteela_Celesteela: typeof Celesteela;
declare namespace celesteela {
  export { celesteela_Celesteela as Celesteela };
}

declare const Kartana: Pokemon;

declare const kartana_Kartana: typeof Kartana;
declare namespace kartana {
  export { kartana_Kartana as Kartana };
}

declare const Guzzlord: Pokemon;

declare const guzzlord_Guzzlord: typeof Guzzlord;
declare namespace guzzlord {
  export { guzzlord_Guzzlord as Guzzlord };
}

declare const Necrozma: Pokemon;

declare const necrozma_Necrozma: typeof Necrozma;
declare namespace necrozma {
  export { necrozma_Necrozma as Necrozma };
}

declare const Magearna: Pokemon;

declare const magearna_Magearna: typeof Magearna;
declare namespace magearna {
  export { magearna_Magearna as Magearna };
}

declare const Marshadow: Pokemon;

declare const marshadow_Marshadow: typeof Marshadow;
declare namespace marshadow {
  export { marshadow_Marshadow as Marshadow };
}

declare const Poipole: Pokemon;

declare const poipole_Poipole: typeof Poipole;
declare namespace poipole {
  export { poipole_Poipole as Poipole };
}

declare const Naganadel: Pokemon;

declare const naganadel_Naganadel: typeof Naganadel;
declare namespace naganadel {
  export { naganadel_Naganadel as Naganadel };
}

declare const Stakataka: Pokemon;

declare const stakataka_Stakataka: typeof Stakataka;
declare namespace stakataka {
  export { stakataka_Stakataka as Stakataka };
}

declare const Blacephalon: Pokemon;

declare const blacephalon_Blacephalon: typeof Blacephalon;
declare namespace blacephalon {
  export { blacephalon_Blacephalon as Blacephalon };
}

declare const Zeraora: Pokemon;

declare const zeraora_Zeraora: typeof Zeraora;
declare namespace zeraora {
  export { zeraora_Zeraora as Zeraora };
}

declare const Meltan: Pokemon;

declare const meltan_Meltan: typeof Meltan;
declare namespace meltan {
  export { meltan_Meltan as Meltan };
}

declare const Melmetal: Pokemon;

declare const melmetal_Melmetal: typeof Melmetal;
declare namespace melmetal {
  export { melmetal_Melmetal as Melmetal };
}

declare const Gen7PokemonData: {
    722: Pokemon;
    723: Pokemon;
    724: Pokemon;
    725: Pokemon;
    726: Pokemon;
    727: Pokemon;
    728: Pokemon;
    729: Pokemon;
    730: Pokemon;
    731: Pokemon;
    732: Pokemon;
    733: Pokemon;
    734: Pokemon;
    735: Pokemon;
    736: Pokemon;
    737: Pokemon;
    738: Pokemon;
    739: Pokemon;
    740: Pokemon;
    741: Pokemon;
    742: Pokemon;
    743: Pokemon;
    744: Pokemon;
    745: Pokemon;
    746: Pokemon;
    747: Pokemon;
    748: Pokemon;
    749: Pokemon;
    750: Pokemon;
    751: Pokemon;
    752: Pokemon;
    753: Pokemon;
    754: Pokemon;
    755: Pokemon;
    756: Pokemon;
    757: Pokemon;
    758: Pokemon;
    759: Pokemon;
    760: Pokemon;
    761: Pokemon;
    762: Pokemon;
    763: Pokemon;
    764: Pokemon;
    765: Pokemon;
    766: Pokemon;
    767: Pokemon;
    768: Pokemon;
    769: Pokemon;
    770: Pokemon;
    771: Pokemon;
    772: Pokemon;
    773: Pokemon;
    774: Pokemon;
    775: Pokemon;
    776: Pokemon;
    777: Pokemon;
    778: Pokemon;
    779: Pokemon;
    780: Pokemon;
    781: Pokemon;
    782: Pokemon;
    783: Pokemon;
    784: Pokemon;
    785: Pokemon;
    786: Pokemon;
    787: Pokemon;
    788: Pokemon;
    789: Pokemon;
    790: Pokemon;
    791: Pokemon;
    792: Pokemon;
    793: Pokemon;
    794: Pokemon;
    795: Pokemon;
    796: Pokemon;
    797: Pokemon;
    798: Pokemon;
    799: Pokemon;
    800: Pokemon;
    801: Pokemon;
    802: Pokemon;
    803: Pokemon;
    804: Pokemon;
    805: Pokemon;
    806: Pokemon;
    807: Pokemon;
    808: Pokemon;
    809: Pokemon;
};

declare const Grookey: Pokemon;

declare const grookey_Grookey: typeof Grookey;
declare namespace grookey {
  export { grookey_Grookey as Grookey };
}

declare const Thwackey: Pokemon;

declare const thwackey_Thwackey: typeof Thwackey;
declare namespace thwackey {
  export { thwackey_Thwackey as Thwackey };
}

declare const Rillaboom: Pokemon;

declare const rillaboom_Rillaboom: typeof Rillaboom;
declare namespace rillaboom {
  export { rillaboom_Rillaboom as Rillaboom };
}

declare const Scorbunny: Pokemon;

declare const scorbunny_Scorbunny: typeof Scorbunny;
declare namespace scorbunny {
  export { scorbunny_Scorbunny as Scorbunny };
}

declare const Raboot: Pokemon;

declare const raboot_Raboot: typeof Raboot;
declare namespace raboot {
  export { raboot_Raboot as Raboot };
}

declare const Cinderace: Pokemon;

declare const cinderace_Cinderace: typeof Cinderace;
declare namespace cinderace {
  export { cinderace_Cinderace as Cinderace };
}

declare const Sobble: Pokemon;

declare const sobble_Sobble: typeof Sobble;
declare namespace sobble {
  export { sobble_Sobble as Sobble };
}

declare const Drizzile: Pokemon;

declare const drizzile_Drizzile: typeof Drizzile;
declare namespace drizzile {
  export { drizzile_Drizzile as Drizzile };
}

declare const Inteleon: Pokemon;

declare const inteleon_Inteleon: typeof Inteleon;
declare namespace inteleon {
  export { inteleon_Inteleon as Inteleon };
}

declare const Skwovet: Pokemon;

declare const skwovet_Skwovet: typeof Skwovet;
declare namespace skwovet {
  export { skwovet_Skwovet as Skwovet };
}

declare const Greedent: Pokemon;

declare const greedent_Greedent: typeof Greedent;
declare namespace greedent {
  export { greedent_Greedent as Greedent };
}

declare const Rookidee: Pokemon;

declare const rookidee_Rookidee: typeof Rookidee;
declare namespace rookidee {
  export { rookidee_Rookidee as Rookidee };
}

declare const Corvisquire: Pokemon;

declare const corvisquire_Corvisquire: typeof Corvisquire;
declare namespace corvisquire {
  export { corvisquire_Corvisquire as Corvisquire };
}

declare const Corviknight: Pokemon;

declare const corviknight_Corviknight: typeof Corviknight;
declare namespace corviknight {
  export { corviknight_Corviknight as Corviknight };
}

declare const Blipbug: Pokemon;

declare const blipbug_Blipbug: typeof Blipbug;
declare namespace blipbug {
  export { blipbug_Blipbug as Blipbug };
}

declare const Dottler: Pokemon;

declare const dottler_Dottler: typeof Dottler;
declare namespace dottler {
  export { dottler_Dottler as Dottler };
}

declare const Orbeetle: Pokemon;

declare const orbeetle_Orbeetle: typeof Orbeetle;
declare namespace orbeetle {
  export { orbeetle_Orbeetle as Orbeetle };
}

declare const Nickit: Pokemon;

declare const nickit_Nickit: typeof Nickit;
declare namespace nickit {
  export { nickit_Nickit as Nickit };
}

declare const Thievul: Pokemon;

declare const thievul_Thievul: typeof Thievul;
declare namespace thievul {
  export { thievul_Thievul as Thievul };
}

declare const Gossifleur: Pokemon;

declare const gossifleur_Gossifleur: typeof Gossifleur;
declare namespace gossifleur {
  export { gossifleur_Gossifleur as Gossifleur };
}

declare const Eldegoss: Pokemon;

declare const eldegoss_Eldegoss: typeof Eldegoss;
declare namespace eldegoss {
  export { eldegoss_Eldegoss as Eldegoss };
}

declare const Wooloo: Pokemon;

declare const wooloo_Wooloo: typeof Wooloo;
declare namespace wooloo {
  export { wooloo_Wooloo as Wooloo };
}

declare const Dubwool: Pokemon;

declare const dubwool_Dubwool: typeof Dubwool;
declare namespace dubwool {
  export { dubwool_Dubwool as Dubwool };
}

declare const Chewtle: Pokemon;

declare const chewtle_Chewtle: typeof Chewtle;
declare namespace chewtle {
  export { chewtle_Chewtle as Chewtle };
}

declare const Drednaw: Pokemon;

declare const drednaw_Drednaw: typeof Drednaw;
declare namespace drednaw {
  export { drednaw_Drednaw as Drednaw };
}

declare const Yamper: Pokemon;

declare const yamper_Yamper: typeof Yamper;
declare namespace yamper {
  export { yamper_Yamper as Yamper };
}

declare const Boltund: Pokemon;

declare const boltund_Boltund: typeof Boltund;
declare namespace boltund {
  export { boltund_Boltund as Boltund };
}

declare const Rolycoly: Pokemon;

declare const rolycoly_Rolycoly: typeof Rolycoly;
declare namespace rolycoly {
  export { rolycoly_Rolycoly as Rolycoly };
}

declare const Carkol: Pokemon;

declare const carkol_Carkol: typeof Carkol;
declare namespace carkol {
  export { carkol_Carkol as Carkol };
}

declare const Coalossal: Pokemon;

declare const coalossal_Coalossal: typeof Coalossal;
declare namespace coalossal {
  export { coalossal_Coalossal as Coalossal };
}

declare const Applin: Pokemon;

declare const applin_Applin: typeof Applin;
declare namespace applin {
  export { applin_Applin as Applin };
}

declare const Flapple: Pokemon;

declare const flapple_Flapple: typeof Flapple;
declare namespace flapple {
  export { flapple_Flapple as Flapple };
}

declare const Appletun: Pokemon;

declare const appletun_Appletun: typeof Appletun;
declare namespace appletun {
  export { appletun_Appletun as Appletun };
}

declare const Silicobra: Pokemon;

declare const silicobra_Silicobra: typeof Silicobra;
declare namespace silicobra {
  export { silicobra_Silicobra as Silicobra };
}

declare const Sandaconda: Pokemon;

declare const sandaconda_Sandaconda: typeof Sandaconda;
declare namespace sandaconda {
  export { sandaconda_Sandaconda as Sandaconda };
}

declare const Cramorant: Pokemon;

declare const cramorant_Cramorant: typeof Cramorant;
declare namespace cramorant {
  export { cramorant_Cramorant as Cramorant };
}

declare const Arrokuda: Pokemon;

declare const arrokuda_Arrokuda: typeof Arrokuda;
declare namespace arrokuda {
  export { arrokuda_Arrokuda as Arrokuda };
}

declare const Barraskewda: Pokemon;

declare const barraskewda_Barraskewda: typeof Barraskewda;
declare namespace barraskewda {
  export { barraskewda_Barraskewda as Barraskewda };
}

declare const Toxel: Pokemon;

declare const toxel_Toxel: typeof Toxel;
declare namespace toxel {
  export { toxel_Toxel as Toxel };
}

declare const Toxtricity: Pokemon;

declare const toxtricity_Toxtricity: typeof Toxtricity;
declare namespace toxtricity {
  export { toxtricity_Toxtricity as Toxtricity };
}

declare const Sizzlipede: Pokemon;

declare const sizzlipede_Sizzlipede: typeof Sizzlipede;
declare namespace sizzlipede {
  export { sizzlipede_Sizzlipede as Sizzlipede };
}

declare const Centiskorch: Pokemon;

declare const centiskorch_Centiskorch: typeof Centiskorch;
declare namespace centiskorch {
  export { centiskorch_Centiskorch as Centiskorch };
}

declare const Clobbopus: Pokemon;

declare const clobbopus_Clobbopus: typeof Clobbopus;
declare namespace clobbopus {
  export { clobbopus_Clobbopus as Clobbopus };
}

declare const Grapploct: Pokemon;

declare const grapploct_Grapploct: typeof Grapploct;
declare namespace grapploct {
  export { grapploct_Grapploct as Grapploct };
}

declare const Sinistea: Pokemon;

declare const sinistea_Sinistea: typeof Sinistea;
declare namespace sinistea {
  export { sinistea_Sinistea as Sinistea };
}

declare const Polteageist: Pokemon;

declare const polteageist_Polteageist: typeof Polteageist;
declare namespace polteageist {
  export { polteageist_Polteageist as Polteageist };
}

declare const Hatenna: Pokemon;

declare const hatenna_Hatenna: typeof Hatenna;
declare namespace hatenna {
  export { hatenna_Hatenna as Hatenna };
}

declare const Hattrem: Pokemon;

declare const hattrem_Hattrem: typeof Hattrem;
declare namespace hattrem {
  export { hattrem_Hattrem as Hattrem };
}

declare const Hatterene: Pokemon;

declare const hatterene_Hatterene: typeof Hatterene;
declare namespace hatterene {
  export { hatterene_Hatterene as Hatterene };
}

declare const Impidimp: Pokemon;

declare const impidimp_Impidimp: typeof Impidimp;
declare namespace impidimp {
  export { impidimp_Impidimp as Impidimp };
}

declare const Morgrem: Pokemon;

declare const morgrem_Morgrem: typeof Morgrem;
declare namespace morgrem {
  export { morgrem_Morgrem as Morgrem };
}

declare const Grimmsnarl: Pokemon;

declare const grimmsnarl_Grimmsnarl: typeof Grimmsnarl;
declare namespace grimmsnarl {
  export { grimmsnarl_Grimmsnarl as Grimmsnarl };
}

declare const Obstagoon: Pokemon;

declare const obstagoon_Obstagoon: typeof Obstagoon;
declare namespace obstagoon {
  export { obstagoon_Obstagoon as Obstagoon };
}

declare const Perrserker: Pokemon;

declare const perrserker_Perrserker: typeof Perrserker;
declare namespace perrserker {
  export { perrserker_Perrserker as Perrserker };
}

declare const Cursola: Pokemon;

declare const cursola_Cursola: typeof Cursola;
declare namespace cursola {
  export { cursola_Cursola as Cursola };
}

declare const Sirfetchd: Pokemon;

declare const sirfetchd_Sirfetchd: typeof Sirfetchd;
declare namespace sirfetchd {
  export { sirfetchd_Sirfetchd as Sirfetchd };
}

declare const MrRime: Pokemon;

declare const mrrime_MrRime: typeof MrRime;
declare namespace mrrime {
  export { mrrime_MrRime as MrRime };
}

declare const Runerigus: Pokemon;

declare const runerigus_Runerigus: typeof Runerigus;
declare namespace runerigus {
  export { runerigus_Runerigus as Runerigus };
}

declare const Milcery: Pokemon;

declare const milcery_Milcery: typeof Milcery;
declare namespace milcery {
  export { milcery_Milcery as Milcery };
}

declare const Alcremie: Pokemon;

declare const alcremie_Alcremie: typeof Alcremie;
declare namespace alcremie {
  export { alcremie_Alcremie as Alcremie };
}

declare const Falinks: Pokemon;

declare const falinks_Falinks: typeof Falinks;
declare namespace falinks {
  export { falinks_Falinks as Falinks };
}

declare const Pincurchin: Pokemon;

declare const pincurchin_Pincurchin: typeof Pincurchin;
declare namespace pincurchin {
  export { pincurchin_Pincurchin as Pincurchin };
}

declare const Snom: Pokemon;

declare const snom_Snom: typeof Snom;
declare namespace snom {
  export { snom_Snom as Snom };
}

declare const Frosmoth: Pokemon;

declare const frosmoth_Frosmoth: typeof Frosmoth;
declare namespace frosmoth {
  export { frosmoth_Frosmoth as Frosmoth };
}

declare const Stonjourner: Pokemon;

declare const stonjourner_Stonjourner: typeof Stonjourner;
declare namespace stonjourner {
  export { stonjourner_Stonjourner as Stonjourner };
}

declare const Eiscue: Pokemon;

declare const eiscue_Eiscue: typeof Eiscue;
declare namespace eiscue {
  export { eiscue_Eiscue as Eiscue };
}

declare const Indeedee: Pokemon;

declare const indeedee_Indeedee: typeof Indeedee;
declare namespace indeedee {
  export { indeedee_Indeedee as Indeedee };
}

declare const Morpeko: Pokemon;

declare const morpeko_Morpeko: typeof Morpeko;
declare namespace morpeko {
  export { morpeko_Morpeko as Morpeko };
}

declare const Cufant: Pokemon;

declare const cufant_Cufant: typeof Cufant;
declare namespace cufant {
  export { cufant_Cufant as Cufant };
}

declare const Copperajah: Pokemon;

declare const copperajah_Copperajah: typeof Copperajah;
declare namespace copperajah {
  export { copperajah_Copperajah as Copperajah };
}

declare const Dracozolt: Pokemon;

declare const dracozolt_Dracozolt: typeof Dracozolt;
declare namespace dracozolt {
  export { dracozolt_Dracozolt as Dracozolt };
}

declare const Arctozolt: Pokemon;

declare const arctozolt_Arctozolt: typeof Arctozolt;
declare namespace arctozolt {
  export { arctozolt_Arctozolt as Arctozolt };
}

declare const Dracovish: Pokemon;

declare const dracovish_Dracovish: typeof Dracovish;
declare namespace dracovish {
  export { dracovish_Dracovish as Dracovish };
}

declare const Arctovish: Pokemon;

declare const arctovish_Arctovish: typeof Arctovish;
declare namespace arctovish {
  export { arctovish_Arctovish as Arctovish };
}

declare const Duraludon: Pokemon;

declare const duraludon_Duraludon: typeof Duraludon;
declare namespace duraludon {
  export { duraludon_Duraludon as Duraludon };
}

declare const Dreepy: Pokemon;

declare const dreepy_Dreepy: typeof Dreepy;
declare namespace dreepy {
  export { dreepy_Dreepy as Dreepy };
}

declare const Drakloak: Pokemon;

declare const drakloak_Drakloak: typeof Drakloak;
declare namespace drakloak {
  export { drakloak_Drakloak as Drakloak };
}

declare const Dragapult: Pokemon;

declare const dragapult_Dragapult: typeof Dragapult;
declare namespace dragapult {
  export { dragapult_Dragapult as Dragapult };
}

declare const Zacian: Pokemon;

declare const zacian_Zacian: typeof Zacian;
declare namespace zacian {
  export { zacian_Zacian as Zacian };
}

declare const Zamazenta: Pokemon;

declare const zamazenta_Zamazenta: typeof Zamazenta;
declare namespace zamazenta {
  export { zamazenta_Zamazenta as Zamazenta };
}

declare const Eternatus: Pokemon;

declare const eternatus_Eternatus: typeof Eternatus;
declare namespace eternatus {
  export { eternatus_Eternatus as Eternatus };
}

declare const Kubfu: Pokemon;

declare const kubfu_Kubfu: typeof Kubfu;
declare namespace kubfu {
  export { kubfu_Kubfu as Kubfu };
}

declare const Urshifu: Pokemon;

declare const urshifu_Urshifu: typeof Urshifu;
declare namespace urshifu {
  export { urshifu_Urshifu as Urshifu };
}

declare const Zarude: Pokemon;

declare const zarude_Zarude: typeof Zarude;
declare namespace zarude {
  export { zarude_Zarude as Zarude };
}

declare const Regieleki: Pokemon;

declare const regieleki_Regieleki: typeof Regieleki;
declare namespace regieleki {
  export { regieleki_Regieleki as Regieleki };
}

declare const Regidrago: Pokemon;

declare const regidrago_Regidrago: typeof Regidrago;
declare namespace regidrago {
  export { regidrago_Regidrago as Regidrago };
}

declare const Glastrier: Pokemon;

declare const glastrier_Glastrier: typeof Glastrier;
declare namespace glastrier {
  export { glastrier_Glastrier as Glastrier };
}

declare const Spectrier: Pokemon;

declare const spectrier_Spectrier: typeof Spectrier;
declare namespace spectrier {
  export { spectrier_Spectrier as Spectrier };
}

declare const Calyrex: Pokemon;

declare const calyrex_Calyrex: typeof Calyrex;
declare namespace calyrex {
  export { calyrex_Calyrex as Calyrex };
}

declare const Wyrdeer: Pokemon;

declare const wyrdeer_Wyrdeer: typeof Wyrdeer;
declare namespace wyrdeer {
  export { wyrdeer_Wyrdeer as Wyrdeer };
}

declare const Kleavor: Pokemon;

declare const kleavor_Kleavor: typeof Kleavor;
declare namespace kleavor {
  export { kleavor_Kleavor as Kleavor };
}

declare const Ursaluna: Pokemon;

declare const ursaluna_Ursaluna: typeof Ursaluna;
declare namespace ursaluna {
  export { ursaluna_Ursaluna as Ursaluna };
}

declare const Basculegion: Pokemon;

declare const basculegion_Basculegion: typeof Basculegion;
declare namespace basculegion {
  export { basculegion_Basculegion as Basculegion };
}

declare const Sneasler: Pokemon;

declare const sneasler_Sneasler: typeof Sneasler;
declare namespace sneasler {
  export { sneasler_Sneasler as Sneasler };
}

declare const Overqwil: Pokemon;

declare const overqwil_Overqwil: typeof Overqwil;
declare namespace overqwil {
  export { overqwil_Overqwil as Overqwil };
}

declare const Enamorus: Pokemon;

declare const enamorus_Enamorus: typeof Enamorus;
declare namespace enamorus {
  export { enamorus_Enamorus as Enamorus };
}

declare const Gen8PokemonData: {
    810: Pokemon;
    811: Pokemon;
    812: Pokemon;
    813: Pokemon;
    814: Pokemon;
    815: Pokemon;
    816: Pokemon;
    817: Pokemon;
    818: Pokemon;
    819: Pokemon;
    820: Pokemon;
    821: Pokemon;
    822: Pokemon;
    823: Pokemon;
    824: Pokemon;
    825: Pokemon;
    826: Pokemon;
    827: Pokemon;
    828: Pokemon;
    829: Pokemon;
    830: Pokemon;
    831: Pokemon;
    832: Pokemon;
    833: Pokemon;
    834: Pokemon;
    835: Pokemon;
    836: Pokemon;
    837: Pokemon;
    838: Pokemon;
    839: Pokemon;
    840: Pokemon;
    841: Pokemon;
    842: Pokemon;
    843: Pokemon;
    844: Pokemon;
    845: Pokemon;
    846: Pokemon;
    847: Pokemon;
    848: Pokemon;
    849: Pokemon;
    850: Pokemon;
    851: Pokemon;
    852: Pokemon;
    853: Pokemon;
    854: Pokemon;
    855: Pokemon;
    856: Pokemon;
    857: Pokemon;
    858: Pokemon;
    859: Pokemon;
    860: Pokemon;
    861: Pokemon;
    862: Pokemon;
    863: Pokemon;
    864: Pokemon;
    865: Pokemon;
    866: Pokemon;
    867: Pokemon;
    868: Pokemon;
    869: Pokemon;
    870: Pokemon;
    871: Pokemon;
    872: Pokemon;
    873: Pokemon;
    874: Pokemon;
    875: Pokemon;
    876: Pokemon;
    877: Pokemon;
    878: Pokemon;
    879: Pokemon;
    880: Pokemon;
    881: Pokemon;
    882: Pokemon;
    883: Pokemon;
    884: Pokemon;
    885: Pokemon;
    886: Pokemon;
    887: Pokemon;
    888: Pokemon;
    889: Pokemon;
    890: Pokemon;
    891: Pokemon;
    892: Pokemon;
    893: Pokemon;
    894: Pokemon;
    895: Pokemon;
    896: Pokemon;
    897: Pokemon;
    898: Pokemon;
    899: Pokemon;
    900: Pokemon;
    901: Pokemon;
    902: Pokemon;
    903: Pokemon;
    904: Pokemon;
    905: Pokemon;
};

declare const Sprigatito: Pokemon;

declare const sprigatito_Sprigatito: typeof Sprigatito;
declare namespace sprigatito {
  export { sprigatito_Sprigatito as Sprigatito };
}

declare const Floragato: Pokemon;

declare const floragato_Floragato: typeof Floragato;
declare namespace floragato {
  export { floragato_Floragato as Floragato };
}

declare const Meowscarada: Pokemon;

declare const meowscarada_Meowscarada: typeof Meowscarada;
declare namespace meowscarada {
  export { meowscarada_Meowscarada as Meowscarada };
}

declare const Fuecoco: Pokemon;

declare const fuecoco_Fuecoco: typeof Fuecoco;
declare namespace fuecoco {
  export { fuecoco_Fuecoco as Fuecoco };
}

declare const Crocalor: Pokemon;

declare const crocalor_Crocalor: typeof Crocalor;
declare namespace crocalor {
  export { crocalor_Crocalor as Crocalor };
}

declare const Skeledirge: Pokemon;

declare const skeledirge_Skeledirge: typeof Skeledirge;
declare namespace skeledirge {
  export { skeledirge_Skeledirge as Skeledirge };
}

declare const Quaxly: Pokemon;

declare const quaxly_Quaxly: typeof Quaxly;
declare namespace quaxly {
  export { quaxly_Quaxly as Quaxly };
}

declare const Quaxwell: Pokemon;

declare const quaxwell_Quaxwell: typeof Quaxwell;
declare namespace quaxwell {
  export { quaxwell_Quaxwell as Quaxwell };
}

declare const Quaquaval: Pokemon;

declare const quaquaval_Quaquaval: typeof Quaquaval;
declare namespace quaquaval {
  export { quaquaval_Quaquaval as Quaquaval };
}

declare const Lechonk: Pokemon;

declare const lechonk_Lechonk: typeof Lechonk;
declare namespace lechonk {
  export { lechonk_Lechonk as Lechonk };
}

declare const Oinkologne: Pokemon;

declare const oinkologne_Oinkologne: typeof Oinkologne;
declare namespace oinkologne {
  export { oinkologne_Oinkologne as Oinkologne };
}

declare const Tarountula: Pokemon;

declare const tarountula_Tarountula: typeof Tarountula;
declare namespace tarountula {
  export { tarountula_Tarountula as Tarountula };
}

declare const Spidops: Pokemon;

declare const spidops_Spidops: typeof Spidops;
declare namespace spidops {
  export { spidops_Spidops as Spidops };
}

declare const Nymble: Pokemon;

declare const nymble_Nymble: typeof Nymble;
declare namespace nymble {
  export { nymble_Nymble as Nymble };
}

declare const Lokix: Pokemon;

declare const lokix_Lokix: typeof Lokix;
declare namespace lokix {
  export { lokix_Lokix as Lokix };
}

declare const Pawmi: Pokemon;

declare const pawmi_Pawmi: typeof Pawmi;
declare namespace pawmi {
  export { pawmi_Pawmi as Pawmi };
}

declare const Pawmo: Pokemon;

declare const pawmo_Pawmo: typeof Pawmo;
declare namespace pawmo {
  export { pawmo_Pawmo as Pawmo };
}

declare const Pawmot: Pokemon;

declare const pawmot_Pawmot: typeof Pawmot;
declare namespace pawmot {
  export { pawmot_Pawmot as Pawmot };
}

declare const Tandemaus: Pokemon;

declare const tandemaus_Tandemaus: typeof Tandemaus;
declare namespace tandemaus {
  export { tandemaus_Tandemaus as Tandemaus };
}

declare const Maushold: Pokemon;

declare const maushold_Maushold: typeof Maushold;
declare namespace maushold {
  export { maushold_Maushold as Maushold };
}

declare const Fidough: Pokemon;

declare const fidough_Fidough: typeof Fidough;
declare namespace fidough {
  export { fidough_Fidough as Fidough };
}

declare const Dachsbun: Pokemon;

declare const dachsbun_Dachsbun: typeof Dachsbun;
declare namespace dachsbun {
  export { dachsbun_Dachsbun as Dachsbun };
}

declare const Smoliv: Pokemon;

declare const smoliv_Smoliv: typeof Smoliv;
declare namespace smoliv {
  export { smoliv_Smoliv as Smoliv };
}

declare const Dolliv: Pokemon;

declare const dolliv_Dolliv: typeof Dolliv;
declare namespace dolliv {
  export { dolliv_Dolliv as Dolliv };
}

declare const Arboliva: Pokemon;

declare const arboliva_Arboliva: typeof Arboliva;
declare namespace arboliva {
  export { arboliva_Arboliva as Arboliva };
}

declare const Squawkabilly: Pokemon;

declare const squawkabilly_Squawkabilly: typeof Squawkabilly;
declare namespace squawkabilly {
  export { squawkabilly_Squawkabilly as Squawkabilly };
}

declare const Nacli: Pokemon;

declare const nacli_Nacli: typeof Nacli;
declare namespace nacli {
  export { nacli_Nacli as Nacli };
}

declare const Naclstack: Pokemon;

declare const naclstack_Naclstack: typeof Naclstack;
declare namespace naclstack {
  export { naclstack_Naclstack as Naclstack };
}

declare const Garganacl: Pokemon;

declare const garganacl_Garganacl: typeof Garganacl;
declare namespace garganacl {
  export { garganacl_Garganacl as Garganacl };
}

declare const Charcadet: Pokemon;

declare const charcadet_Charcadet: typeof Charcadet;
declare namespace charcadet {
  export { charcadet_Charcadet as Charcadet };
}

declare const Armarouge: Pokemon;

declare const armarouge_Armarouge: typeof Armarouge;
declare namespace armarouge {
  export { armarouge_Armarouge as Armarouge };
}

declare const Ceruledge: Pokemon;

declare const ceruledge_Ceruledge: typeof Ceruledge;
declare namespace ceruledge {
  export { ceruledge_Ceruledge as Ceruledge };
}

declare const Tadbulb: Pokemon;

declare const tadbulb_Tadbulb: typeof Tadbulb;
declare namespace tadbulb {
  export { tadbulb_Tadbulb as Tadbulb };
}

declare const Bellibolt: Pokemon;

declare const bellibolt_Bellibolt: typeof Bellibolt;
declare namespace bellibolt {
  export { bellibolt_Bellibolt as Bellibolt };
}

declare const Wattrel: Pokemon;

declare const wattrel_Wattrel: typeof Wattrel;
declare namespace wattrel {
  export { wattrel_Wattrel as Wattrel };
}

declare const Kilowattrel: Pokemon;

declare const kilowattrel_Kilowattrel: typeof Kilowattrel;
declare namespace kilowattrel {
  export { kilowattrel_Kilowattrel as Kilowattrel };
}

declare const Maschiff: Pokemon;

declare const maschiff_Maschiff: typeof Maschiff;
declare namespace maschiff {
  export { maschiff_Maschiff as Maschiff };
}

declare const Mabosstiff: Pokemon;

declare const mabosstiff_Mabosstiff: typeof Mabosstiff;
declare namespace mabosstiff {
  export { mabosstiff_Mabosstiff as Mabosstiff };
}

declare const Shroodle: Pokemon;

declare const shroodle_Shroodle: typeof Shroodle;
declare namespace shroodle {
  export { shroodle_Shroodle as Shroodle };
}

declare const Grafaiai: Pokemon;

declare const grafaiai_Grafaiai: typeof Grafaiai;
declare namespace grafaiai {
  export { grafaiai_Grafaiai as Grafaiai };
}

declare const Bramblin: Pokemon;

declare const bramblin_Bramblin: typeof Bramblin;
declare namespace bramblin {
  export { bramblin_Bramblin as Bramblin };
}

declare const Brambleghast: Pokemon;

declare const brambleghast_Brambleghast: typeof Brambleghast;
declare namespace brambleghast {
  export { brambleghast_Brambleghast as Brambleghast };
}

declare const Toedscool: Pokemon;

declare const toedscool_Toedscool: typeof Toedscool;
declare namespace toedscool {
  export { toedscool_Toedscool as Toedscool };
}

declare const Toedscruel: Pokemon;

declare const toedscruel_Toedscruel: typeof Toedscruel;
declare namespace toedscruel {
  export { toedscruel_Toedscruel as Toedscruel };
}

declare const Klawf: Pokemon;

declare const klawf_Klawf: typeof Klawf;
declare namespace klawf {
  export { klawf_Klawf as Klawf };
}

declare const Capsakid: Pokemon;

declare const capsakid_Capsakid: typeof Capsakid;
declare namespace capsakid {
  export { capsakid_Capsakid as Capsakid };
}

declare const Scovillain: Pokemon;

declare const scovillain_Scovillain: typeof Scovillain;
declare namespace scovillain {
  export { scovillain_Scovillain as Scovillain };
}

declare const Rellor: Pokemon;

declare const rellor_Rellor: typeof Rellor;
declare namespace rellor {
  export { rellor_Rellor as Rellor };
}

declare const Rabsca: Pokemon;

declare const rabsca_Rabsca: typeof Rabsca;
declare namespace rabsca {
  export { rabsca_Rabsca as Rabsca };
}

declare const Flittle: Pokemon;

declare const flittle_Flittle: typeof Flittle;
declare namespace flittle {
  export { flittle_Flittle as Flittle };
}

declare const Espathra: Pokemon;

declare const espathra_Espathra: typeof Espathra;
declare namespace espathra {
  export { espathra_Espathra as Espathra };
}

declare const Tinkatink: Pokemon;

declare const tinkatink_Tinkatink: typeof Tinkatink;
declare namespace tinkatink {
  export { tinkatink_Tinkatink as Tinkatink };
}

declare const Tinkatuff: Pokemon;

declare const tinkatuff_Tinkatuff: typeof Tinkatuff;
declare namespace tinkatuff {
  export { tinkatuff_Tinkatuff as Tinkatuff };
}

declare const Tinkaton: Pokemon;

declare const tinkaton_Tinkaton: typeof Tinkaton;
declare namespace tinkaton {
  export { tinkaton_Tinkaton as Tinkaton };
}

declare const Wiglett: Pokemon;

declare const wiglett_Wiglett: typeof Wiglett;
declare namespace wiglett {
  export { wiglett_Wiglett as Wiglett };
}

declare const Wugtrio: Pokemon;

declare const wugtrio_Wugtrio: typeof Wugtrio;
declare namespace wugtrio {
  export { wugtrio_Wugtrio as Wugtrio };
}

declare const Bombirdier: Pokemon;

declare const bombirdier_Bombirdier: typeof Bombirdier;
declare namespace bombirdier {
  export { bombirdier_Bombirdier as Bombirdier };
}

declare const Finizen: Pokemon;

declare const finizen_Finizen: typeof Finizen;
declare namespace finizen {
  export { finizen_Finizen as Finizen };
}

declare const Palafin: Pokemon;

declare const palafin_Palafin: typeof Palafin;
declare namespace palafin {
  export { palafin_Palafin as Palafin };
}

declare const Varoom: Pokemon;

declare const varoom_Varoom: typeof Varoom;
declare namespace varoom {
  export { varoom_Varoom as Varoom };
}

declare const Revavroom: Pokemon;

declare const revavroom_Revavroom: typeof Revavroom;
declare namespace revavroom {
  export { revavroom_Revavroom as Revavroom };
}

declare const Cyclizar: Pokemon;

declare const cyclizar_Cyclizar: typeof Cyclizar;
declare namespace cyclizar {
  export { cyclizar_Cyclizar as Cyclizar };
}

declare const Orthworm: Pokemon;

declare const orthworm_Orthworm: typeof Orthworm;
declare namespace orthworm {
  export { orthworm_Orthworm as Orthworm };
}

declare const Glimmet: Pokemon;

declare const glimmet_Glimmet: typeof Glimmet;
declare namespace glimmet {
  export { glimmet_Glimmet as Glimmet };
}

declare const Glimmora: Pokemon;

declare const glimmora_Glimmora: typeof Glimmora;
declare namespace glimmora {
  export { glimmora_Glimmora as Glimmora };
}

declare const Greavard: Pokemon;

declare const greavard_Greavard: typeof Greavard;
declare namespace greavard {
  export { greavard_Greavard as Greavard };
}

declare const Houndstone: Pokemon;

declare const houndstone_Houndstone: typeof Houndstone;
declare namespace houndstone {
  export { houndstone_Houndstone as Houndstone };
}

declare const Flamigo: Pokemon;

declare const flamigo_Flamigo: typeof Flamigo;
declare namespace flamigo {
  export { flamigo_Flamigo as Flamigo };
}

declare const Cetoddle: Pokemon;

declare const cetoddle_Cetoddle: typeof Cetoddle;
declare namespace cetoddle {
  export { cetoddle_Cetoddle as Cetoddle };
}

declare const Cetitan: Pokemon;

declare const cetitan_Cetitan: typeof Cetitan;
declare namespace cetitan {
  export { cetitan_Cetitan as Cetitan };
}

declare const Veluza: Pokemon;

declare const veluza_Veluza: typeof Veluza;
declare namespace veluza {
  export { veluza_Veluza as Veluza };
}

declare const Dondozo: Pokemon;

declare const dondozo_Dondozo: typeof Dondozo;
declare namespace dondozo {
  export { dondozo_Dondozo as Dondozo };
}

declare const Tatsugiri: Pokemon;

declare const tatsugiri_Tatsugiri: typeof Tatsugiri;
declare namespace tatsugiri {
  export { tatsugiri_Tatsugiri as Tatsugiri };
}

declare const Annihilape: Pokemon;

declare const annihilape_Annihilape: typeof Annihilape;
declare namespace annihilape {
  export { annihilape_Annihilape as Annihilape };
}

declare const Clodsire: Pokemon;

declare const clodsire_Clodsire: typeof Clodsire;
declare namespace clodsire {
  export { clodsire_Clodsire as Clodsire };
}

declare const Farigiraf: Pokemon;

declare const farigiraf_Farigiraf: typeof Farigiraf;
declare namespace farigiraf {
  export { farigiraf_Farigiraf as Farigiraf };
}

declare const Dudunsparce: Pokemon;

declare const dudunsparce_Dudunsparce: typeof Dudunsparce;
declare namespace dudunsparce {
  export { dudunsparce_Dudunsparce as Dudunsparce };
}

declare const Kingambit: Pokemon;

declare const kingambit_Kingambit: typeof Kingambit;
declare namespace kingambit {
  export { kingambit_Kingambit as Kingambit };
}

declare const GreatTusk: Pokemon;

declare const greattusk_GreatTusk: typeof GreatTusk;
declare namespace greattusk {
  export { greattusk_GreatTusk as GreatTusk };
}

declare const ScreamTail: Pokemon;

declare const screamtail_ScreamTail: typeof ScreamTail;
declare namespace screamtail {
  export { screamtail_ScreamTail as ScreamTail };
}

declare const BruteBonnet: Pokemon;

declare const brutebonnet_BruteBonnet: typeof BruteBonnet;
declare namespace brutebonnet {
  export { brutebonnet_BruteBonnet as BruteBonnet };
}

declare const FlutterMane: Pokemon;

declare const fluttermane_FlutterMane: typeof FlutterMane;
declare namespace fluttermane {
  export { fluttermane_FlutterMane as FlutterMane };
}

declare const SlitherWing: Pokemon;

declare const slitherwing_SlitherWing: typeof SlitherWing;
declare namespace slitherwing {
  export { slitherwing_SlitherWing as SlitherWing };
}

declare const SandyShocks: Pokemon;

declare const sandyshocks_SandyShocks: typeof SandyShocks;
declare namespace sandyshocks {
  export { sandyshocks_SandyShocks as SandyShocks };
}

declare const IronTreads: Pokemon;

declare const irontreads_IronTreads: typeof IronTreads;
declare namespace irontreads {
  export { irontreads_IronTreads as IronTreads };
}

declare const IronBundle: Pokemon;

declare const ironbundle_IronBundle: typeof IronBundle;
declare namespace ironbundle {
  export { ironbundle_IronBundle as IronBundle };
}

declare const IronHands: Pokemon;

declare const ironhands_IronHands: typeof IronHands;
declare namespace ironhands {
  export { ironhands_IronHands as IronHands };
}

declare const IronJugulis: Pokemon;

declare const ironjugulis_IronJugulis: typeof IronJugulis;
declare namespace ironjugulis {
  export { ironjugulis_IronJugulis as IronJugulis };
}

declare const IronMoth: Pokemon;

declare const ironmoth_IronMoth: typeof IronMoth;
declare namespace ironmoth {
  export { ironmoth_IronMoth as IronMoth };
}

declare const IronThorns: Pokemon;

declare const ironthorns_IronThorns: typeof IronThorns;
declare namespace ironthorns {
  export { ironthorns_IronThorns as IronThorns };
}

declare const Frigibax: Pokemon;

declare const frigibax_Frigibax: typeof Frigibax;
declare namespace frigibax {
  export { frigibax_Frigibax as Frigibax };
}

declare const Arctibax: Pokemon;

declare const arctibax_Arctibax: typeof Arctibax;
declare namespace arctibax {
  export { arctibax_Arctibax as Arctibax };
}

declare const Baxcalibur: Pokemon;

declare const baxcalibur_Baxcalibur: typeof Baxcalibur;
declare namespace baxcalibur {
  export { baxcalibur_Baxcalibur as Baxcalibur };
}

declare const Gimmighoul: Pokemon;

declare const gimmighoul_Gimmighoul: typeof Gimmighoul;
declare namespace gimmighoul {
  export { gimmighoul_Gimmighoul as Gimmighoul };
}

declare const Gholdengo: Pokemon;

declare const gholdengo_Gholdengo: typeof Gholdengo;
declare namespace gholdengo {
  export { gholdengo_Gholdengo as Gholdengo };
}

declare const WoChien: Pokemon;

declare const wochien_WoChien: typeof WoChien;
declare namespace wochien {
  export { wochien_WoChien as WoChien };
}

declare const ChienPao: Pokemon;

declare const chienpao_ChienPao: typeof ChienPao;
declare namespace chienpao {
  export { chienpao_ChienPao as ChienPao };
}

declare const TingLu: Pokemon;

declare const tinglu_TingLu: typeof TingLu;
declare namespace tinglu {
  export { tinglu_TingLu as TingLu };
}

declare const ChiYu: Pokemon;

declare const chiyu_ChiYu: typeof ChiYu;
declare namespace chiyu {
  export { chiyu_ChiYu as ChiYu };
}

declare const RoaringMoon: Pokemon;

declare const roaringmoon_RoaringMoon: typeof RoaringMoon;
declare namespace roaringmoon {
  export { roaringmoon_RoaringMoon as RoaringMoon };
}

declare const IronValiant: Pokemon;

declare const ironvaliant_IronValiant: typeof IronValiant;
declare namespace ironvaliant {
  export { ironvaliant_IronValiant as IronValiant };
}

declare const Koraidon: Pokemon;

declare const koraidon_Koraidon: typeof Koraidon;
declare namespace koraidon {
  export { koraidon_Koraidon as Koraidon };
}

declare const Miraidon: Pokemon;

declare const miraidon_Miraidon: typeof Miraidon;
declare namespace miraidon {
  export { miraidon_Miraidon as Miraidon };
}

declare const WalkingWake: Pokemon;

declare const walkingwake_WalkingWake: typeof WalkingWake;
declare namespace walkingwake {
  export { walkingwake_WalkingWake as WalkingWake };
}

declare const IronLeaves: Pokemon;

declare const ironleaves_IronLeaves: typeof IronLeaves;
declare namespace ironleaves {
  export { ironleaves_IronLeaves as IronLeaves };
}

declare const Dipplin: Pokemon;

declare const dipplin_Dipplin: typeof Dipplin;
declare namespace dipplin {
  export { dipplin_Dipplin as Dipplin };
}

declare const Poltchageist: Pokemon;

declare const poltchageist_Poltchageist: typeof Poltchageist;
declare namespace poltchageist {
  export { poltchageist_Poltchageist as Poltchageist };
}

declare const Sinistcha: Pokemon;

declare const sinistcha_Sinistcha: typeof Sinistcha;
declare namespace sinistcha {
  export { sinistcha_Sinistcha as Sinistcha };
}

declare const Okidogi: Pokemon;

declare const okidogi_Okidogi: typeof Okidogi;
declare namespace okidogi {
  export { okidogi_Okidogi as Okidogi };
}

declare const Munkidori: Pokemon;

declare const munkidori_Munkidori: typeof Munkidori;
declare namespace munkidori {
  export { munkidori_Munkidori as Munkidori };
}

declare const Fezandipiti: Pokemon;

declare const fezandipiti_Fezandipiti: typeof Fezandipiti;
declare namespace fezandipiti {
  export { fezandipiti_Fezandipiti as Fezandipiti };
}

declare const Ogerpon: Pokemon;

declare const ogerpon_Ogerpon: typeof Ogerpon;
declare namespace ogerpon {
  export { ogerpon_Ogerpon as Ogerpon };
}

declare const Archaludon: Pokemon;

declare const archaludon_Archaludon: typeof Archaludon;
declare namespace archaludon {
  export { archaludon_Archaludon as Archaludon };
}

declare const Hydrapple: Pokemon;

declare const hydrapple_Hydrapple: typeof Hydrapple;
declare namespace hydrapple {
  export { hydrapple_Hydrapple as Hydrapple };
}

declare const GougingFire: Pokemon;

declare const gougingfire_GougingFire: typeof GougingFire;
declare namespace gougingfire {
  export { gougingfire_GougingFire as GougingFire };
}

declare const RagingBolt: Pokemon;

declare const ragingbolt_RagingBolt: typeof RagingBolt;
declare namespace ragingbolt {
  export { ragingbolt_RagingBolt as RagingBolt };
}

declare const IronBoulder: Pokemon;

declare const ironboulder_IronBoulder: typeof IronBoulder;
declare namespace ironboulder {
  export { ironboulder_IronBoulder as IronBoulder };
}

declare const IronCrown: Pokemon;

declare const ironcrown_IronCrown: typeof IronCrown;
declare namespace ironcrown {
  export { ironcrown_IronCrown as IronCrown };
}

declare const Terapagos: Pokemon;

declare const terapagos_Terapagos: typeof Terapagos;
declare namespace terapagos {
  export { terapagos_Terapagos as Terapagos };
}

declare const Pecharunt: Pokemon;

declare const pecharunt_Pecharunt: typeof Pecharunt;
declare namespace pecharunt {
  export { pecharunt_Pecharunt as Pecharunt };
}

declare const Gen9PokemonData: {
    906: Pokemon;
    907: Pokemon;
    908: Pokemon;
    909: Pokemon;
    910: Pokemon;
    911: Pokemon;
    912: Pokemon;
    913: Pokemon;
    914: Pokemon;
    915: Pokemon;
    916: Pokemon;
    917: Pokemon;
    918: Pokemon;
    919: Pokemon;
    920: Pokemon;
    921: Pokemon;
    922: Pokemon;
    923: Pokemon;
    924: Pokemon;
    925: Pokemon;
    926: Pokemon;
    927: Pokemon;
    928: Pokemon;
    929: Pokemon;
    930: Pokemon;
    931: Pokemon;
    932: Pokemon;
    933: Pokemon;
    934: Pokemon;
    935: Pokemon;
    936: Pokemon;
    937: Pokemon;
    938: Pokemon;
    939: Pokemon;
    940: Pokemon;
    941: Pokemon;
    942: Pokemon;
    943: Pokemon;
    944: Pokemon;
    945: Pokemon;
    946: Pokemon;
    947: Pokemon;
    948: Pokemon;
    949: Pokemon;
    950: Pokemon;
    951: Pokemon;
    952: Pokemon;
    953: Pokemon;
    954: Pokemon;
    955: Pokemon;
    956: Pokemon;
    957: Pokemon;
    958: Pokemon;
    959: Pokemon;
    960: Pokemon;
    961: Pokemon;
    962: Pokemon;
    963: Pokemon;
    964: Pokemon;
    965: Pokemon;
    966: Pokemon;
    967: Pokemon;
    968: Pokemon;
    969: Pokemon;
    970: Pokemon;
    971: Pokemon;
    972: Pokemon;
    973: Pokemon;
    974: Pokemon;
    975: Pokemon;
    976: Pokemon;
    977: Pokemon;
    978: Pokemon;
    979: Pokemon;
    980: Pokemon;
    981: Pokemon;
    982: Pokemon;
    983: Pokemon;
    984: Pokemon;
    985: Pokemon;
    986: Pokemon;
    987: Pokemon;
    988: Pokemon;
    989: Pokemon;
    990: Pokemon;
    991: Pokemon;
    992: Pokemon;
    993: Pokemon;
    994: Pokemon;
    995: Pokemon;
    996: Pokemon;
    997: Pokemon;
    998: Pokemon;
    999: Pokemon;
    1000: Pokemon;
    1001: Pokemon;
    1002: Pokemon;
    1003: Pokemon;
    1004: Pokemon;
    1005: Pokemon;
    1006: Pokemon;
    1007: Pokemon;
    1008: Pokemon;
    1009: Pokemon;
    1010: Pokemon;
    1011: Pokemon;
    1012: Pokemon;
    1013: Pokemon;
    1014: Pokemon;
    1015: Pokemon;
    1016: Pokemon;
    1017: Pokemon;
    1018: Pokemon;
    1019: Pokemon;
    1020: Pokemon;
    1021: Pokemon;
    1022: Pokemon;
    1023: Pokemon;
    1024: Pokemon;
    1025: Pokemon;
};

declare const PokemonData: {
    readonly [key: number]: Pokemon;
};

declare function getGenderRatio(dexNumber: number, formeNumber: number): {
    readonly male: number;
    readonly female: number;
};

export { abomasnow as Abomasnow, abra as Abra, absol as Absol, accelgor as Accelgor, aegislash as Aegislash, aerodactyl as Aerodactyl, aggron as Aggron, aipom as Aipom, alakazam as Alakazam, alcremie as Alcremie, alomomola as Alomomola, altaria as Altaria, amaura as Amaura, ambipom as Ambipom, amoonguss as Amoonguss, ampharos as Ampharos, annihilape as Annihilape, anorith as Anorith, appletun as Appletun, applin as Applin, araquanid as Araquanid, arbok as Arbok, arboliva as Arboliva, arcanine as Arcanine, arceus as Arceus, archaludon as Archaludon, archen as Archen, archeops as Archeops, arctibax as Arctibax, arctovish as Arctovish, arctozolt as Arctozolt, ariados as Ariados, armaldo as Armaldo, armarouge as Armarouge, aromatisse as Aromatisse, aron as Aron, arrokuda as Arrokuda, articuno as Articuno, audino as Audino, aurorus as Aurorus, avalugg as Avalugg, axew as Axew, azelf as Azelf, azumarill as Azumarill, azurill as Azurill, bagon as Bagon, baltoy as Baltoy, banette as Banette, barbaracle as Barbaracle, barboach as Barboach, barraskewda as Barraskewda, basculegion as Basculegion, basculin as Basculin, bastiodon as Bastiodon, baxcalibur as Baxcalibur, bayleef as Bayleef, beartic as Beartic, beautifly as Beautifly, beedrill as Beedrill, beheeyem as Beheeyem, beldum as Beldum, bellibolt as Bellibolt, bellossom as Bellossom, bellsprout as Bellsprout, bergmite as Bergmite, bewear as Bewear, bibarel as Bibarel, bidoof as Bidoof, binacle as Binacle, bisharp as Bisharp, blacephalon as Blacephalon, blastoise as Blastoise, blaziken as Blaziken, blipbug as Blipbug, blissey as Blissey, blitzle as Blitzle, boldore as Boldore, boltund as Boltund, bombirdier as Bombirdier, bonsly as Bonsly, bouffalant as Bouffalant, bounsweet as Bounsweet, braixen as Braixen, brambleghast as Brambleghast, bramblin as Bramblin, braviary as Braviary, breloom as Breloom, brionne as Brionne, bronzong as Bronzong, bronzor as Bronzor, brutebonnet as BruteBonnet, bruxish as Bruxish, budew as Budew, buizel as Buizel, bulbasaur as Bulbasaur, buneary as Buneary, bunnelby as Bunnelby, burmy as Burmy, butterfree as Butterfree, buzzwole as Buzzwole, cacnea as Cacnea, cacturne as Cacturne, calyrex as Calyrex, camerupt as Camerupt, capsakid as Capsakid, carbink as Carbink, carkol as Carkol, carnivine as Carnivine, carracosta as Carracosta, carvanha as Carvanha, cascoon as Cascoon, castform as Castform, caterpie as Caterpie, celebi as Celebi, celesteela as Celesteela, centiskorch as Centiskorch, ceruledge as Ceruledge, cetitan as Cetitan, cetoddle as Cetoddle, chandelure as Chandelure, chansey as Chansey, charcadet as Charcadet, charizard as Charizard, charjabug as Charjabug, charmander as Charmander, charmeleon as Charmeleon, chatot as Chatot, cherrim as Cherrim, cherubi as Cherubi, chesnaught as Chesnaught, chespin as Chespin, chewtle as Chewtle, chiyu as ChiYu, chienpao as ChienPao, chikorita as Chikorita, chimchar as Chimchar, chimecho as Chimecho, chinchou as Chinchou, chingling as Chingling, cinccino as Cinccino, cinderace as Cinderace, clamperl as Clamperl, clauncher as Clauncher, clawitzer as Clawitzer, claydol as Claydol, clefable as Clefable, clefairy as Clefairy, cleffa as Cleffa, clobbopus as Clobbopus, clodsire as Clodsire, cloyster as Cloyster, coalossal as Coalossal, cobalion as Cobalion, cofagrigus as Cofagrigus, combee as Combee, combusken as Combusken, comfey as Comfey, conkeldurr as Conkeldurr, copperajah as Copperajah, corphish as Corphish, corsola as Corsola, corviknight as Corviknight, corvisquire as Corvisquire, cosmoem as Cosmoem, cosmog as Cosmog, cottonee as Cottonee, crabominable as Crabominable, crabrawler as Crabrawler, cradily as Cradily, cramorant as Cramorant, cranidos as Cranidos, crawdaunt as Crawdaunt, cresselia as Cresselia, croagunk as Croagunk, crobat as Crobat, crocalor as Crocalor, croconaw as Croconaw, crustle as Crustle, cryogonal as Cryogonal, cubchoo as Cubchoo, cubone as Cubone, cufant as Cufant, cursola as Cursola, cutiefly as Cutiefly, cyclizar as Cyclizar, cyndaquil as Cyndaquil, dachsbun as Dachsbun, darkrai as Darkrai, darmanitan as Darmanitan, dartrix as Dartrix, darumaka as Darumaka, decidueye as Decidueye, dedenne as Dedenne, deerling as Deerling, deino as Deino, delcatty as Delcatty, delibird as Delibird, delphox as Delphox, deoxys as Deoxys, dewgong as Dewgong, dewott as Dewott, dewpider as Dewpider, dhelmise as Dhelmise, dialga as Dialga, diancie as Diancie, diggersby as Diggersby, diglett as Diglett, dipplin as Dipplin, ditto as Ditto, dodrio as Dodrio, doduo as Doduo, dolliv as Dolliv, dondozo as Dondozo, donphan as Donphan, dottler as Dottler, doublade as Doublade, dracovish as Dracovish, dracozolt as Dracozolt, dragalge as Dragalge, dragapult as Dragapult, dragonair as Dragonair, dragonite as Dragonite, drakloak as Drakloak, drampa as Drampa, drapion as Drapion, dratini as Dratini, drednaw as Drednaw, dreepy as Dreepy, drifblim as Drifblim, drifloon as Drifloon, drilbur as Drilbur, drizzile as Drizzile, drowzee as Drowzee, druddigon as Druddigon, dubwool as Dubwool, ducklett as Ducklett, dudunsparce as Dudunsparce, dugtrio as Dugtrio, dunsparce as Dunsparce, duosion as Duosion, duraludon as Duraludon, durant as Durant, dusclops as Dusclops, dusknoir as Dusknoir, duskull as Duskull, dustox as Dustox, dwebble as Dwebble, eelektrik as Eelektrik, eelektross as Eelektross, eevee as Eevee, eiscue as Eiscue, ekans as Ekans, eldegoss as Eldegoss, electabuzz as Electabuzz, electivire as Electivire, electrike as Electrike, electrode as Electrode, elekid as Elekid, elgyem as Elgyem, emboar as Emboar, emolga as Emolga, empoleon as Empoleon, enamorus as Enamorus, entei as Entei, escavalier as Escavalier, espathra as Espathra, espeon as Espeon, espurr as Espurr, eternatus as Eternatus, excadrill as Excadrill, exeggcute as Exeggcute, exeggutor as Exeggutor, exploud as Exploud, falinks as Falinks, farfetchd as Farfetchd, farigiraf as Farigiraf, fearow as Fearow, feebas as Feebas, fennekin as Fennekin, feraligatr as Feraligatr, ferroseed as Ferroseed, ferrothorn as Ferrothorn, fezandipiti as Fezandipiti, fidough as Fidough, finizen as Finizen, finneon as Finneon, flaaffy as Flaaffy, flabebe as Flabebe, flamigo as Flamigo, flapple as Flapple, flareon as Flareon, fletchinder as Fletchinder, fletchling as Fletchling, flittle as Flittle, floatzel as Floatzel, floette as Floette, floragato as Floragato, florges as Florges, fluttermane as FlutterMane, flygon as Flygon, fomantis as Fomantis, foongus as Foongus, forretress as Forretress, fraxure as Fraxure, frigibax as Frigibax, frillish as Frillish, froakie as Froakie, frogadier as Frogadier, froslass as Froslass, frosmoth as Frosmoth, fuecoco as Fuecoco, furfrou as Furfrou, furret as Furret, gabite as Gabite, gallade as Gallade, galvantula as Galvantula, garbodor as Garbodor, garchomp as Garchomp, gardevoir as Gardevoir, garganacl as Garganacl, gastly as Gastly, gastrodon as Gastrodon, Gen1PokemonData, Gen2PokemonData, Gen3PokemonData, Gen4PokemonData, Gen5PokemonData, Gen6PokemonData, Gen7PokemonData, Gen8PokemonData, Gen9PokemonData, genesect as Genesect, gengar as Gengar, geodude as Geodude, gholdengo as Gholdengo, gible as Gible, gigalith as Gigalith, gimmighoul as Gimmighoul, girafarig as Girafarig, giratina as Giratina, glaceon as Glaceon, glalie as Glalie, glameow as Glameow, glastrier as Glastrier, gligar as Gligar, glimmet as Glimmet, glimmora as Glimmora, gliscor as Gliscor, gloom as Gloom, gogoat as Gogoat, golbat as Golbat, goldeen as Goldeen, golduck as Golduck, golem as Golem, golett as Golett, golisopod as Golisopod, golurk as Golurk, goodra as Goodra, goomy as Goomy, gorebyss as Gorebyss, gossifleur as Gossifleur, gothita as Gothita, gothitelle as Gothitelle, gothorita as Gothorita, gougingfire as GougingFire, gourgeist as Gourgeist, grafaiai as Grafaiai, granbull as Granbull, grapploct as Grapploct, graveler as Graveler, greattusk as GreatTusk, greavard as Greavard, greedent as Greedent, greninja as Greninja, grimer as Grimer, grimmsnarl as Grimmsnarl, grookey as Grookey, grotle as Grotle, groudon as Groudon, grovyle as Grovyle, growlithe as Growlithe, grubbin as Grubbin, grumpig as Grumpig, gulpin as Gulpin, gumshoos as Gumshoos, gurdurr as Gurdurr, guzzlord as Guzzlord, gyarados as Gyarados, hakamoo as Hakamoo, happiny as Happiny, hariyama as Hariyama, hatenna as Hatenna, hatterene as Hatterene, hattrem as Hattrem, haunter as Haunter, hawlucha as Hawlucha, haxorus as Haxorus, heatmor as Heatmor, heatran as Heatran, heliolisk as Heliolisk, helioptile as Helioptile, heracross as Heracross, herdier as Herdier, hippopotas as Hippopotas, hippowdon as Hippowdon, hitmonchan as Hitmonchan, hitmonlee as Hitmonlee, hitmontop as Hitmontop, hooh as HoOh, honchkrow as Honchkrow, honedge as Honedge, hoopa as Hoopa, hoothoot as Hoothoot, hoppip as Hoppip, horsea as Horsea, houndoom as Houndoom, houndour as Houndour, houndstone as Houndstone, huntail as Huntail, hydrapple as Hydrapple, hydreigon as Hydreigon, hypno as Hypno, igglybuff as Igglybuff, illumise as Illumise, impidimp as Impidimp, incineroar as Incineroar, indeedee as Indeedee, infernape as Infernape, inkay as Inkay, inteleon as Inteleon, ironboulder as IronBoulder, ironbundle as IronBundle, ironcrown as IronCrown, ironhands as IronHands, ironjugulis as IronJugulis, ironleaves as IronLeaves, ironmoth as IronMoth, ironthorns as IronThorns, irontreads as IronTreads, ironvaliant as IronValiant, ivysaur as Ivysaur, jangmoo as Jangmoo, jellicent as Jellicent, jigglypuff as Jigglypuff, jirachi as Jirachi, jolteon as Jolteon, joltik as Joltik, jumpluff as Jumpluff, jynx as Jynx, kabuto as Kabuto, kabutops as Kabutops, kadabra as Kadabra, kakuna as Kakuna, kangaskhan as Kangaskhan, karrablast as Karrablast, kartana as Kartana, kecleon as Kecleon, keldeo as Keldeo, kilowattrel as Kilowattrel, kingambit as Kingambit, kingdra as Kingdra, kingler as Kingler, kirlia as Kirlia, klang as Klang, klawf as Klawf, kleavor as Kleavor, klefki as Klefki, klink as Klink, klinklang as Klinklang, koffing as Koffing, komala as Komala, kommoo as Kommoo, koraidon as Koraidon, krabby as Krabby, kricketot as Kricketot, kricketune as Kricketune, krokorok as Krokorok, krookodile as Krookodile, kubfu as Kubfu, kyogre as Kyogre, kyurem as Kyurem, lairon as Lairon, lampent as Lampent, landorus as Landorus, lanturn as Lanturn, lapras as Lapras, larvesta as Larvesta, larvitar as Larvitar, latias as Latias, latios as Latios, leafeon as Leafeon, leavanny as Leavanny, lechonk as Lechonk, ledian as Ledian, ledyba as Ledyba, type LevelUpType, lickilicky as Lickilicky, lickitung as Lickitung, liepard as Liepard, lileep as Lileep, lilligant as Lilligant, lillipup as Lillipup, linoone as Linoone, litleo as Litleo, litten as Litten, litwick as Litwick, lokix as Lokix, lombre as Lombre, lopunny as Lopunny, lotad as Lotad, loudred as Loudred, lucario as Lucario, ludicolo as Ludicolo, lugia as Lugia, lumineon as Lumineon, lunala as Lunala, lunatone as Lunatone, lurantis as Lurantis, luvdisc as Luvdisc, luxio as Luxio, luxray as Luxray, lycanroc as Lycanroc, mabosstiff as Mabosstiff, machamp as Machamp, machoke as Machoke, machop as Machop, magby as Magby, magcargo as Magcargo, magearna as Magearna, magikarp as Magikarp, magmar as Magmar, magmortar as Magmortar, magnemite as Magnemite, magneton as Magneton, magnezone as Magnezone, makuhita as Makuhita, malamar as Malamar, mamoswine as Mamoswine, manaphy as Manaphy, mandibuzz as Mandibuzz, manectric as Manectric, mankey as Mankey, mantine as Mantine, mantyke as Mantyke, maractus as Maractus, mareanie as Mareanie, mareep as Mareep, marill as Marill, marowak as Marowak, marshadow as Marshadow, marshtomp as Marshtomp, maschiff as Maschiff, masquerain as Masquerain, maushold as Maushold, mawile as Mawile, medicham as Medicham, meditite as Meditite, meganium as Meganium, melmetal as Melmetal, meloetta as Meloetta, meltan as Meltan, meowscarada as Meowscarada, meowstic as Meowstic, meowth as Meowth, mesprit as Mesprit, metagross as Metagross, metang as Metang, metapod as Metapod, mew as Mew, mewtwo as Mewtwo, mienfoo as Mienfoo, mienshao as Mienshao, mightyena as Mightyena, milcery as Milcery, milotic as Milotic, miltank as Miltank, mimejr as MimeJr, mimikyu as Mimikyu, minccino as Minccino, minior as Minior, minun as Minun, miraidon as Miraidon, misdreavus as Misdreavus, mismagius as Mismagius, moltres as Moltres, monferno as Monferno, morelull as Morelull, morgrem as Morgrem, morpeko as Morpeko, mothim as Mothim, mrmime as MrMime, mrrime as MrRime, mudbray as Mudbray, mudkip as Mudkip, mudsdale as Mudsdale, muk as Muk, munchlax as Munchlax, munkidori as Munkidori, munna as Munna, murkrow as Murkrow, musharna as Musharna, nacli as Nacli, naclstack as Naclstack, naganadel as Naganadel, natu as Natu, necrozma as Necrozma, nickit as Nickit, nidoking as Nidoking, nidoqueen as Nidoqueen, nidoranf as NidoranF, nidoranm as NidoranM, nidorina as Nidorina, nidorino as Nidorino, nihilego as Nihilego, nincada as Nincada, ninetales as Ninetales, ninjask as Ninjask, noctowl as Noctowl, noibat as Noibat, noivern as Noivern, nosepass as Nosepass, numel as Numel, nuzleaf as Nuzleaf, nymble as Nymble, obstagoon as Obstagoon, octillery as Octillery, oddish as Oddish, ogerpon as Ogerpon, oinkologne as Oinkologne, okidogi as Okidogi, omanyte as Omanyte, omastar as Omastar, onix as Onix, oranguru as Oranguru, orbeetle as Orbeetle, oricorio as Oricorio, orthworm as Orthworm, oshawott as Oshawott, overqwil as Overqwil, pachirisu as Pachirisu, palafin as Palafin, palkia as Palkia, palossand as Palossand, palpitoad as Palpitoad, pancham as Pancham, pangoro as Pangoro, panpour as Panpour, pansage as Pansage, pansear as Pansear, paras as Paras, parasect as Parasect, passimian as Passimian, patrat as Patrat, pawmi as Pawmi, pawmo as Pawmo, pawmot as Pawmot, pawniard as Pawniard, pecharunt as Pecharunt, pelipper as Pelipper, perrserker as Perrserker, persian as Persian, petilil as Petilil, phanpy as Phanpy, phantump as Phantump, pheromosa as Pheromosa, phione as Phione, pichu as Pichu, pidgeot as Pidgeot, pidgeotto as Pidgeotto, pidgey as Pidgey, pidove as Pidove, pignite as Pignite, pikachu as Pikachu, pikipek as Pikipek, piloswine as Piloswine, pincurchin as Pincurchin, pineco as Pineco, pinsir as Pinsir, piplup as Piplup, plusle as Plusle, poipole as Poipole, type Pokemon, PokemonData, politoed as Politoed, poliwag as Poliwag, poliwhirl as Poliwhirl, poliwrath as Poliwrath, poltchageist as Poltchageist, polteageist as Polteageist, ponyta as Ponyta, poochyena as Poochyena, popplio as Popplio, porygon as Porygon, porygon2 as Porygon2, porygonz as PorygonZ, primarina as Primarina, primeape as Primeape, prinplup as Prinplup, probopass as Probopass, psyduck as Psyduck, pumpkaboo as Pumpkaboo, pupitar as Pupitar, purrloin as Purrloin, purugly as Purugly, pyroar as Pyroar, pyukumuku as Pyukumuku, quagsire as Quagsire, quaquaval as Quaquaval, quaxly as Quaxly, quaxwell as Quaxwell, quilava as Quilava, quilladin as Quilladin, qwilfish as Qwilfish, raboot as Raboot, rabsca as Rabsca, ragingbolt as RagingBolt, raichu as Raichu, raikou as Raikou, ralts as Ralts, rampardos as Rampardos, rapidash as Rapidash, raticate as Raticate, rattata as Rattata, rayquaza as Rayquaza, regice as Regice, regidrago as Regidrago, regieleki as Regieleki, regigigas as Regigigas, type RegionalForme, regirock as Regirock, registeel as Registeel, relicanth as Relicanth, rellor as Rellor, remoraid as Remoraid, reshiram as Reshiram, reuniclus as Reuniclus, revavroom as Revavroom, rhydon as Rhydon, rhyhorn as Rhyhorn, rhyperior as Rhyperior, ribombee as Ribombee, rillaboom as Rillaboom, riolu as Riolu, roaringmoon as RoaringMoon, rockruff as Rockruff, roggenrola as Roggenrola, rolycoly as Rolycoly, rookidee as Rookidee, roselia as Roselia, roserade as Roserade, rotom as Rotom, rowlet as Rowlet, rufflet as Rufflet, runerigus as Runerigus, sableye as Sableye, salamence as Salamence, salandit as Salandit, salazzle as Salazzle, samurott as Samurott, sandaconda as Sandaconda, sandile as Sandile, sandshrew as Sandshrew, sandslash as Sandslash, sandyshocks as SandyShocks, sandygast as Sandygast, sawk as Sawk, sawsbuck as Sawsbuck, scatterbug as Scatterbug, sceptile as Sceptile, scizor as Scizor, scolipede as Scolipede, scorbunny as Scorbunny, scovillain as Scovillain, scrafty as Scrafty, scraggy as Scraggy, screamtail as ScreamTail, scyther as Scyther, seadra as Seadra, seaking as Seaking, sealeo as Sealeo, seedot as Seedot, seel as Seel, seismitoad as Seismitoad, sentret as Sentret, serperior as Serperior, servine as Servine, seviper as Seviper, sewaddle as Sewaddle, sharpedo as Sharpedo, shaymin as Shaymin, shedinja as Shedinja, shelgon as Shelgon, shellder as Shellder, shellos as Shellos, shelmet as Shelmet, shieldon as Shieldon, shiftry as Shiftry, shiinotic as Shiinotic, shinx as Shinx, shroodle as Shroodle, shroomish as Shroomish, shuckle as Shuckle, shuppet as Shuppet, sigilyph as Sigilyph, silcoon as Silcoon, silicobra as Silicobra, silvally as Silvally, simipour as Simipour, simisage as Simisage, simisear as Simisear, sinistcha as Sinistcha, sinistea as Sinistea, sirfetchd as Sirfetchd, sizzlipede as Sizzlipede, skarmory as Skarmory, skeledirge as Skeledirge, skiddo as Skiddo, skiploom as Skiploom, skitty as Skitty, skorupi as Skorupi, skrelp as Skrelp, skuntank as Skuntank, skwovet as Skwovet, slaking as Slaking, slakoth as Slakoth, sliggoo as Sliggoo, slitherwing as SlitherWing, slowbro as Slowbro, slowking as Slowking, slowpoke as Slowpoke, slugma as Slugma, slurpuff as Slurpuff, smeargle as Smeargle, smoliv as Smoliv, smoochum as Smoochum, sneasel as Sneasel, sneasler as Sneasler, snivy as Snivy, snom as Snom, snorlax as Snorlax, snorunt as Snorunt, snover as Snover, snubbull as Snubbull, sobble as Sobble, solgaleo as Solgaleo, solosis as Solosis, solrock as Solrock, spearow as Spearow, spectrier as Spectrier, spewpa as Spewpa, spheal as Spheal, spidops as Spidops, spinarak as Spinarak, spinda as Spinda, spiritomb as Spiritomb, spoink as Spoink, sprigatito as Sprigatito, spritzee as Spritzee, squawkabilly as Squawkabilly, squirtle as Squirtle, stakataka as Stakataka, stantler as Stantler, staraptor as Staraptor, staravia as Staravia, starly as Starly, starmie as Starmie, staryu as Staryu, steelix as Steelix, steenee as Steenee, stonjourner as Stonjourner, stoutland as Stoutland, stufful as Stufful, stunfisk as Stunfisk, stunky as Stunky, sudowoodo as Sudowoodo, suicune as Suicune, sunflora as Sunflora, sunkern as Sunkern, surskit as Surskit, swablu as Swablu, swadloon as Swadloon, swalot as Swalot, swampert as Swampert, swanna as Swanna, swellow as Swellow, swinub as Swinub, swirlix as Swirlix, swoobat as Swoobat, sylveon as Sylveon, tadbulb as Tadbulb, taillow as Taillow, talonflame as Talonflame, tandemaus as Tandemaus, tangela as Tangela, tangrowth as Tangrowth, tapubulu as TapuBulu, tapufini as TapuFini, tapukoko as TapuKoko, tapulele as TapuLele, tarountula as Tarountula, tatsugiri as Tatsugiri, tauros as Tauros, teddiursa as Teddiursa, tentacool as Tentacool, tentacruel as Tentacruel, tepig as Tepig, terapagos as Terapagos, terrakion as Terrakion, thievul as Thievul, throh as Throh, thundurus as Thundurus, thwackey as Thwackey, timburr as Timburr, tinglu as TingLu, tinkatink as Tinkatink, tinkaton as Tinkaton, tinkatuff as Tinkatuff, tirtouga as Tirtouga, toedscool as Toedscool, toedscruel as Toedscruel, togedemaru as Togedemaru, togekiss as Togekiss, togepi as Togepi, togetic as Togetic, torchic as Torchic, torkoal as Torkoal, tornadus as Tornadus, torracat as Torracat, torterra as Torterra, totodile as Totodile, toucannon as Toucannon, toxapex as Toxapex, toxel as Toxel, toxicroak as Toxicroak, toxtricity as Toxtricity, tranquill as Tranquill, trapinch as Trapinch, treecko as Treecko, trevenant as Trevenant, tropius as Tropius, trubbish as Trubbish, trumbeak as Trumbeak, tsareena as Tsareena, turtonator as Turtonator, turtwig as Turtwig, tympole as Tympole, tynamo as Tynamo, typenull as TypeNull, typhlosion as Typhlosion, tyranitar as Tyranitar, tyrantrum as Tyrantrum, tyrogue as Tyrogue, tyrunt as Tyrunt, umbreon as Umbreon, unfezant as Unfezant, unown as Unown, ursaluna as Ursaluna, ursaring as Ursaring, urshifu as Urshifu, uxie as Uxie, vanillish as Vanillish, vanillite as Vanillite, vanilluxe as Vanilluxe, vaporeon as Vaporeon, varoom as Varoom, veluza as Veluza, venipede as Venipede, venomoth as Venomoth, venonat as Venonat, venusaur as Venusaur, vespiquen as Vespiquen, vibrava as Vibrava, victini as Victini, victreebel as Victreebel, vigoroth as Vigoroth, vikavolt as Vikavolt, vileplume as Vileplume, virizion as Virizion, vivillon as Vivillon, volbeat as Volbeat, volcanion as Volcanion, volcarona as Volcarona, voltorb as Voltorb, vullaby as Vullaby, vulpix as Vulpix, wailmer as Wailmer, wailord as Wailord, walkingwake as WalkingWake, walrein as Walrein, wartortle as Wartortle, watchog as Watchog, wattrel as Wattrel, weavile as Weavile, weedle as Weedle, weepinbell as Weepinbell, weezing as Weezing, whimsicott as Whimsicott, whirlipede as Whirlipede, whiscash as Whiscash, whismur as Whismur, wigglytuff as Wigglytuff, wiglett as Wiglett, wimpod as Wimpod, wingull as Wingull, wishiwashi as Wishiwashi, wochien as WoChien, wobbuffet as Wobbuffet, woobat as Woobat, wooloo as Wooloo, wooper as Wooper, wormadam as Wormadam, wugtrio as Wugtrio, wurmple as Wurmple, wynaut as Wynaut, wyrdeer as Wyrdeer, xatu as Xatu, xerneas as Xerneas, xurkitree as Xurkitree, yamask as Yamask, yamper as Yamper, yanma as Yanma, yanmega as Yanmega, yungoos as Yungoos, yveltal as Yveltal, zacian as Zacian, zamazenta as Zamazenta, zangoose as Zangoose, zapdos as Zapdos, zarude as Zarude, zebstrika as Zebstrika, zekrom as Zekrom, zeraora as Zeraora, zigzagoon as Zigzagoon, zoroark as Zoroark, zorua as Zorua, zubat as Zubat, zweilous as Zweilous, zygarde as Zygarde, getGenderRatio };
