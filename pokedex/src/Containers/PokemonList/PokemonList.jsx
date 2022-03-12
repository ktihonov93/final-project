import React, { useState, useEffect, useContext } from "react";
import { PokemonContext } from '../../Utils/PokemonContext';
import axios from 'axios';
import LoadingSpinner from "../../Components/LoadingSpinner";
import PokemonCard from '../../Components/PokemonCard';
import './PokemonList.css';

export default function PokemonList() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    const { caught, addPokemonToCaughtList, removePokemonFromCaughtList } = useContext(PokemonContext);    

    const getNextPage = () => setOffset(offset + 12);
    const getPrevPage = () => setOffset(offset - 12);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`)
            // Extract the DATA from the received response
            .then((res) => {
                setPokemon(res.data);
                setLoading(false);
            });
    }, [offset]);

    return (
        !loading ? (
            <section>
                {pokemon.results.map((p, i) => (
                    <PokemonCard key={i} id={p.url.split("/")[p.url.split("/").length - 2]} pokemon={p} storedPokemon={caught.find(o => o.id === p.id)} addPokemonToCaughtList={addPokemonToCaughtList} removePokemonFromCaughtList={removePokemonFromCaughtList} />
                ))}             
                <button disabled={ pokemon.previous ? false : true} onClick={getPrevPage}>previous</button>
                <button disabled={ pokemon.next ? false : true} onClick={getNextPage}>next</button>
                <p>{offset / 12 + 1} / {Math.ceil(10228/12)}</p>
                
            </section>
        ) : (
            <LoadingSpinner />
        )
    )
}