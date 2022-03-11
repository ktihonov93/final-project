import { Link } from "react-router-dom";
import './PokemonCard.css'

export default function PokemonCard({ id, pokemon, storedPokemon, addPokemonToCaughtList, removePokemonFromCaughtList }) {
  console.log(pokemon)

  return (
    <article className='PokemonCard'>
      <Link to={{ pathname: `/${id}` }}>
        <p>id: {id}</p>
        <p>name: {pokemon.name ? pokemon.name : "unknown"}</p>
      </Link>
      <button onClick={() => storedPokemon ? removePokemonFromCaughtList(pokemon.id) : addPokemonToCaughtList(pokemon)}>{storedPokemon ? "Release" : "Catch"}</button>
    </article>

  )
}
