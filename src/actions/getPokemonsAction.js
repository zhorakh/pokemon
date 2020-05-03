import axios from 'axios'

export const consts = {  
    GET_POKEMONS_TABLE: 'GET_POKEMONS_TABLE',
    POKEMONS_LOADER: 'POKEMONS_LOADER',
    FETCH_POKEMONS_TYPES: 'FETCH_POKEMONS_TYPES'
}
const URL = 'http://pokeapi.salestock.net/api/v2';

export function fetchTypes() {
    return function(dispatch) {        
        return axios.get(`${URL}/type`, { params: { limit: 10 } })
        .then(response => dispatch({
            type: 'FETCH_POKEMONS_TYPES',
            payload: response.data.results
            })
        )
    } 
}

export function loading(bool) {
    return {
        type: 'POKEMONS_LOADER',
        payload: bool
    }
}

export const getPokemonsTable = (nextCount, url, fromPokemonType) => {
  url = url ? url : `${URL}/pokemon`
  return function(dispatch) { 
      dispatch(loading(true));    
      axios.get(url, { params: {offset: nextCount ? nextCount * 10 : 0, limit: 10 } })        
      .then(response => {
          let results
          let count 
          if(fromPokemonType) {
            const spliceCount = (nextCount && nextCount > 1) ? nextCount : 0
            results = response.data.pokemon
            results = results.splice(spliceCount, 10)
            count = results.length
          }
          else {
            results = response.data.results
            count = Math.floor(response.data.count / 2) - 10
          }
          return Promise.all((results).map(item => {
              const pokemon = fromPokemonType ? item.pokemon : item
              return axios.get(pokemon.url)
                  .then(response => {
                      let { name, height, weight, sprites } = response.data
                      let pokemon = { avatar: sprites.front_default, name, height, weight }
                      return pokemon
                  });
          }))
          .then(response => {
              dispatch({
                  type: 'GET_POKEMONS_TABLE',
                  payload: response,
                  count: count
              })
              dispatch(loading(false));
          })
      })
    }    
}