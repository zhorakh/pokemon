import { consts } from '../actions/getPokemonsAction'

const initial = {
  pokemonstTable: [],
  tableLoader: false,
  pokemonTypes: [],
  count: null
}

export default function reducer(state = initial, action) {
  switch (action.type) {
    case consts.GET_POKEMONS_TABLE: {
      state = Object.assign({}, state, {pokemonstTable: action.payload, count: action.count || (action.pokemonLength && action.pokemonLength.length)})
      break
    }
    case consts.POKEMONS_LOADER: {
      state = Object.assign({}, state, {tableLoader: action.payload})
      break
    }
    case consts.FETCH_POKEMONS_TYPES: {
      state = Object.assign({}, state, {pokemonTypes: action.payload, })
      break
    }
    default:
    return state
  }
  return state
}
