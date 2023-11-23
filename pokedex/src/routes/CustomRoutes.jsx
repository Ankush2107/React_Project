import { Routes, Route } from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex';

function CustomRoutes() {
    <Routes>
        <Route path="/" element={Pokedex} />
    </Routes>
}

export default CustomRoutes;