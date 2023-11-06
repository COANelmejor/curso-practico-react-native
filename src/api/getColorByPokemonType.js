import { POKEMON_TYPE_COLORS } from "../utils/constants";

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
