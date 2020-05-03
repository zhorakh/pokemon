import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header/Headers'
import Footer from './components/Footer/Footer'
import Pokemons from './components/Pokemons/Pokemons'
import * as pokemonActions from './actions/getPokemonsAction'
import './assets/styles/styles.css'

class App extends Component {
  componentDidMount = () => {
    this.props.getPokemonsTable()
    this.props.fetchTypes()
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <Pokemons />
        <Footer />
      </div>
    );
  }
}

export default connect(null, pokemonActions)(App);
