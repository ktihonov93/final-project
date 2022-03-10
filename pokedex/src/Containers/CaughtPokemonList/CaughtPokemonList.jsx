import React, { useContext } from 'react';
import { PokemonContext } from '../../Utils/PokemonContext';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import './CaughtPokemonList.css'

export default function CaughtPokemonList() {
  const { pokemonList, addPokemonToCaughtList, removePokemonFromCaughtList } = useContext(PokemonContext);
  console.log(pokemonList)
  return (
    <div>
      <p>CaughtPokemonList</p>
      <p>{pokemonList.map(o => o.name)}</p>
      <>
        {pokemonList.map((pokemon, i) => (
          <PokemonCard key={i} id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]} pokemon={pokemon} storedPokemon={pokemonList.find(o => o.id === pokemon.id)} addPokemonToCaughtList={addPokemonToCaughtList} removePokemonFromCaughtList={removePokemonFromCaughtList} />
        ))}
      </>
    </div>
  )
}
