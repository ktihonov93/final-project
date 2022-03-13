import React, { useContext } from 'react';
import { PokemonContext } from '../../Utils/PokemonContext';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import './CaughtPokemonList.css'

export default function CaughtPokemonList() {
  const { caught, addPokemonToCaughtList, removePokemonFromCaughtList } = useContext(PokemonContext);
  
  return (
    <section className="pokemon-list">
      <p>CaughtPokemonList</p>
      <>
        {caught.map((pokemon, i) => (
          <PokemonCard key={i} id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]} pokemon={pokemon} storedPokemon={caught.find(o => o.name === pokemon.name)} addPokemonToCaughtList={addPokemonToCaughtList} removePokemonFromCaughtList={removePokemonFromCaughtList} />
        ))}
      </>
    </section>
  )
}
