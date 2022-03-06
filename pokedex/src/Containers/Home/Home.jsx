import PokemonDetails from '../../Components/PokemonDetails'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from '../PokemonList'
import './Home.css'

export default function Home() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/">
                        <PokemonList />
                    </Route>
                    <Route path="/:id" element={<PokemonDetails />} />
                </Routes>
            </div>
        </Router>
    )
}
