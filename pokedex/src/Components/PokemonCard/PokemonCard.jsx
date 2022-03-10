import { Link } from "react-router-dom";
import './PokemonCard.css'

export default function PokemonCard({ id, pokemon, storedPokemon, addPokemonToCaughtList, removePokemonFromCaughtList }) {
  //const {pokemonList, addPokemonToCaughtList, removePokemonFromCaughtList } = useContext(PokemonContext);

  //let storedPokemon = pokemonList.find(o => o.id === pokemon.id);

  //const pokemonListDisabled = storedPokemon ? true : false;

  /*function isCaught(id) {
    return pokemonList.some(elem => elem.includes(id));
  }*/

  return (
    <article className='PokemonCard'>
      <Link to={{ pathname: `/${id}` }}>
        <p>id: {id}</p>
        <p>name: {pokemon.name ? pokemon.name : "unknown"}</p>
      </Link>
      <button /*disabled={pokemonListDisabled}*/ onClick={() => storedPokemon ? removePokemonFromCaughtList(pokemon.id) : addPokemonToCaughtList(pokemon)}>{storedPokemon ? "Caught ": "Catch"}</button>
    </article>

  )
}
