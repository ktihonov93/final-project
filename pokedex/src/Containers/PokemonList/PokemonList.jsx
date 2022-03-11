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
                    {pokemon.map((p, i) => (
                        <PokemonCard key={i} id={p.url.split("/")[p.url.split("/").length - 2]} pokemon={p} storedPokemon={caught.find(o => o.id === p.id)} addPokemonToCaughtList={addPokemonToCaughtList} removePokemonFromCaughtList={removePokemonFromCaughtList} />
                    ))}
                </>
            ) : (
                <LoadingSpinner />
            )}
        </section>
    )
}