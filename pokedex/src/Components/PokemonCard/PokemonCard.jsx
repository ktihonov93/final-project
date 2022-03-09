import React, { useState, useContext } from "react";
import {PokemonContext} from '../../Utils/PokemonContext'
import { Link } from "react-router-dom";
import './PokemonCard.css'

export default function PokemonCard({ id, pokemon }) {
  const {addPokemonToCaughtList, pokemonList} = useContext(PokemonContext);

  let storedPokemon = pokemonList.find(o => o.id === pokemon.id);

  console.log(storedPokemon)

  const pokemonListDisabled = storedPokemon ? true : false;

  return (
    <article className='PokemonCard'>
      <Link to={{ pathname: `/${id}` }}>
        <p>id: {id}</p>
        <p>name: {pokemon.name ? pokemon.name : "unknown"}</p>
      </Link>
      <button disabled={pokemonListDisabled} onClick={() => addPokemonToCaughtList(pokemon)}>Catch</button>
    </article>

  )
}
