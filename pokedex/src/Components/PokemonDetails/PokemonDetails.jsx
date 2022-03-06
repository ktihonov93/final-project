import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import './PokemonDetails.css'

export default function PokemonDetails(props) {
    const pokemonID = props.match.params.id;
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(props);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
            // Extract the DATA from the received response
            .then((res) => {
                setPokemon(res.data.results);
                setLoading(false);
            });
    }, []);
    return (
        <article>
            {loading ? (
                <>
                    <p>{pokemon.name}</p>
                </>
            ) : (
                <LoadingSpinner />
            )}
        </article>
    )
}
