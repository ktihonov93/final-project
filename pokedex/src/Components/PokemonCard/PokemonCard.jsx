import { Link } from "react-router-dom";
import './PokemonCard.css'

export default function PokemonCard({ id, name }) {
  return (

    <article className='PokemonCard'>
      <Link to={{ pathname: `/${id}` }}>
        <p>id: {id}</p>
        <p>name: {name ? name : "unknown"}</p>
      </Link>
      <button>Catch</button>
    </article>

  )
}
