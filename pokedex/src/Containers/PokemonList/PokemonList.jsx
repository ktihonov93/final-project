import React, { useState, useEffect } from "react";
import axios from 'axios';
import LoadingSpinner from "../../Components/LoadingSpinner";
import PokemonCard from '../../Components/PokemonCard';
import './PokemonList.css';

export default function PokemonList() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=12")
            // Extract the DATA from the received response
            .then((res) => {
                setPokemon(res.data.results);
                setLoading(false);
            });
    }, []);

    return (
        <section>
            {!loading ? (
                <>
                    {pokemon.map((pokemon, i) => (
                        <PokemonCard key={i} id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]} pokemon={pokemon} />
                    ))}
                </>

            ) : (
                <LoadingSpinner />
            )}
        </section>
    )
}