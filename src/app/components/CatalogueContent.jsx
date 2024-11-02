"use client"; 

import { useState, useEffect } from "react";
import { PokemonPage } from "./PokemonPage";
import { SearchForm } from "./SearchForm";

export function CatalogueContent({ pokemons: initialPokemons }) {
    const [searchValue, setSearchValue] = useState('');
    const [pokemons, setPokemons] = useState(initialPokemons); // Cambia para manejar todos los pokémons
    const [filteredPokemons, setFilteredPokemons] = useState(initialPokemons);
    const [sortOrder, setSortOrder] = useState('default');

    useEffect(() => {
        localStorage.setItem('pokemons', JSON.stringify(pokemons));

        let filtered = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        if (sortOrder === 'alphabetic') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'reverse') {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        }

        setFilteredPokemons(filtered);
    }, [searchValue, pokemons, sortOrder]);

    // Función para cargar más Pokémon
    const loadMorePokemons = async () => {
        const offset = pokemons.length; // Offset basado en la longitud actual de pokémons
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`);
        const data = await res.json();
        setPokemons(prevPokemons => [...prevPokemons, ...data.results]); // Agregar nuevos pokémons
    };

    return (
        <>
            <div className="flex flex-row items-center justify-center space-x-4 p-4 bg-blue-100 rounded-lg shadow-md">                <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
                <select 
                    id="order" 
                    className="text-black bg-blue-600 rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)} // Actualizar el estado al cambiar la opción
                >
                    <option value="default">Número en Pokédex</option>
                    <option value="alphabetic" id="alpha">Alfabético</option>
                    <option value="reverse" id="reverse">Alfabético Inverso</option>
                </select>
            </div>
            <PokemonPage 
                pokemons={{ results: filteredPokemons }} 
                loadMorePokemons={loadMorePokemons} // Pasar la función al componente PokemonPage
            />
        </>
    );
}
