import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import './PokemonDetails.css'

export default function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/1/")
            // Extract the DATA from the received response
            .then((res) => {
                setPokemon(res.data.results);
                setLoading(false);
            });
    }, []);
    return (
        <article>

        </article>
    )
}
