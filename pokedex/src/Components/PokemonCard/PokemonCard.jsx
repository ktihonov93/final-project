import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './PokemonCard.css'

export default function PokemonCard({ id, name }) {
  const [isCaught, setIsCaught] = useState(false);

  function handleCatchDate(){
    return new Date();
  }

  return (
    <article className='PokemonCard'>
      <Link to={{ pathname: `/${id}` }}>
        <p>id: {id}</p>
        <p>name: {name ? name : "unknown"}</p>
      </Link>
      <button /*onClick={getDate}*/>Catch</button>
    </article>

  )
}
