// app/[pokeName]/page.jsx

"use client"; // Asegúrate de que este archivo se marque como cliente

import { useMemo } from 'react';
import Image from 'next/image';


export default function PokemonDetailPage({ params }) {
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    const { pokeName } = params;

    // Aquí suponemos que tienes una lista de pokémons. Esto podría ser la misma que usaste en el catálogo.
    const pokemons = JSON.parse(localStorage.getItem('pokemons')); // Asumiendo que los pokémons están almacenados en localStorage

    // Buscar el Pokémon seleccionado
    const pokemonData = useMemo(() => {
        return pokemons.find(pokemon => pokemon.name === pokeName);
    }, [pokeName, pokemons]);

    if (!pokemonData) {
        return <div>No se encontraron datos del Pokémon.</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{pokemonData.name}</h1>
            <div className="w-200 h-200 overflow-hidden flex items-center justify-center">
                <Image 
                    src={`${baseURL}${getImageIndex(pokemonData.url)}.svg`} 
                    alt='pokemon image' 
                    width={200} 
                    height={200} 
                    className="object-contain"
                />
            </div>
            <p>Número de Pokédex: {getImageIndex(pokemonData.url)}</p>
            <button onClick={() => window.history.back()} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Go Back
            </button>
        </div>
    );
}

// Función para obtener el índice de la imagen
function getImageIndex(url) {
    const regex = /(\d+)\/$/;
    const match = url.match(regex);
    return match ? match[1] : null; // Devuelve el índice o null si no hay coincidencia
}
