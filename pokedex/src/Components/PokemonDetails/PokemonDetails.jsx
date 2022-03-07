import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import LoadingSpinner from "../LoadingSpinner";
import './PokemonDetails.css'

export default function PokemonDetails() {
    const { id } = useParams();
    
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(id)

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            // Extract the DATA from the received response
            .then((res) => {
                setPokemon(res.data);
                setLoading(false);
            });
    }, []);
    return (
        <article>
            {!loading ? pokemon && (
                <>
                    <p>id: {pokemon.id}</p>
                    <p>name: {pokemon.name}</p>
                    <p>{id}</p>
                </>
            ) : (
                <LoadingSpinner />
            )}
        </article>
    )
}
