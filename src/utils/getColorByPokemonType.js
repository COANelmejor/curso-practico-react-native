import { POKEMON_TYPE_COLORS } from "./constants";

/**
 * ## Get color by pokemon type
 * 
 * ```js
 * getColorByPokemonType('grass') // #78C850
 * getColorByPokemonType('fire') // #F08030
 * getColorByPokemonType('water') // #6890F0
 * 
 * ```
 * 
 * @param {String} type 
 * @returns 
 */
const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
