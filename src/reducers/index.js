import { combineReducers } from 'redux';
import pokemons from './getPokemonsReducer';

const stores = combineReducers({
    pokemons
});

export default stores;
