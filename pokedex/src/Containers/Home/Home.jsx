import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonContext } from '../../Utils/PokemonContext';
import PokemonDetails from '../../Components/PokemonDetails';
import PokemonList from '../PokemonList'
import './Home.css';

export default function Home() {
    const { caught, addPokemonToCaughtList, removePokemonFromCaughtList } = useContext(PokemonContext);

    function getCaughtDate(){

    }

    return (
            <div>
                <Routes>
                    <Route path="/" element={<PokemonList />} />
                    <Route path="/:id" element={<PokemonDetails caught={caught} />} />
                </Routes>
            </div>
    )
}
