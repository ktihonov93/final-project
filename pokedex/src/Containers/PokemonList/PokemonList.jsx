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
                console.log(res.data.results[1].name)
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {!loading ? (
                //`${pokemon[0].name}`
                [].map((pokemon, i) => (
                    <PokemonCard key={i} name={pokemon.name} />
                ))
            ) : (
                <LoadingSpinner />
            )}
        </div>
    )
}