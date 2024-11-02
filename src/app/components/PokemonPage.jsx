"use client"; 

import { useState } from "react";
import { PokemonCard } from "./PokemonCard";

export function PokemonPage({ pokemons, loadMorePokemons }) {
    const [pageNum, setPageNum] = useState(0);
    const pokemonsToDisplay = pokemons.results.slice(pageNum * 20, (pageNum + 1) * 20);

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-5 gap-4 p-4" key={'pokemonsContainer'}>
                {pokemonsToDisplay.map((poke, i) => (
                    <PokemonCard key={i} pokeData={{ poke, i }} />
                ))}
            </div>
            <div className="flex mb-4">
                <button
                    key={'prevPageB'}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
                    onClick={() => {
                        setPageNum(pageNum - 1);
                    }}
                    disabled={pageNum === 0} // Deshabilitar si estamos en la primera página
                >
                    Previous Page
                </button>
                <button
                    key={'nextPageB'}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
                    onClick={() => {
                        setPageNum(pageNum + 1);
                    }}
                    disabled={(pageNum + 1) * 20 >= pokemons.results.length} // Deshabilitar si no hay más páginas
                >
                    Next Page
                </button>
                <button
                    key={'loadMoreB'}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-5"
                    onClick={loadMorePokemons} // Llamar a la función para cargar más pokémons
                >
                    Load More
                </button>
            </div>
        </div>
    );
}
