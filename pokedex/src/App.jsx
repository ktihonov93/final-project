import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Containers/Home'
import Header from './Containers/Header'
import CaughtPokemonList from './Containers/CaughtPokemonList'
import { PokemonProvider } from './Utils/PokemonContext'
import './App.css';

function App() {
  return (
    <PokemonProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/caught" element={<CaughtPokemonList />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;