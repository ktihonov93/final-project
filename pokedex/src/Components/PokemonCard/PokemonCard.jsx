import './PokemonCard.css'

export default function PokemonCard({ key, name }) {
  console.log(name && name != null && name !== undefined ? name
    : "unknown")
  return (
    <article className='PokemonCard'>
      <p>id: {key}</p>
      <p>name: {name && name != null && name !== undefined ? name
        : "unknown"}</p>
      <button>Catch</button>
    </article>
  )
}
