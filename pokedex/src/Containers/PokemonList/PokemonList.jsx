import React, { useState, useEffect, useContext } from "react";
import { PokemonContext } from '../../Utils/PokemonContext';
import axios from 'axios';
import LoadingSpinner from "../../Components/LoadingSpinner";
import PokemonCard from '../../Components/PokemonCard';
import './PokemonList.css';

export default function PokemonList() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    const { caught, addPokemonToCaughtList, removePokemonFromCaughtList } = useContext(PokemonContext);

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
                        <PokemonCard key={i} id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]} pokemon={pokemon} storedPokemon={caught.find(o => o.id === pokemon.id)} addPokemonToCaughtList={addPokemonToCaughtList} removePokemonFromCaughtList={removePokemonFromCaughtList} />
                    ))}
                </>
            ) : (
                <LoadingSpinner />
            )}
        </section>
    )
}