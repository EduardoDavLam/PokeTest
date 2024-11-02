import Image from 'next/image';
import Link from 'next/link';

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

export function PokemonCard({ pokeData }) {
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    function getImageIndex(str) {
        const regex = /(\d+)\/$/;
        const match = str.match(regex);
        return match ? match[1] : null;
    }

    return (
        <Link href={`/${pokeData.poke.name}`} className="bg-white rounded-lg block">
            <h2 className='p-1'>{capitalize(pokeData.poke.name)}</h2>
            <div className="w-20 h-20 overflow-hidden flex items-center justify-center">
                <Image 
                    src={`${baseURL}${getImageIndex(pokeData.poke.url)}.svg`} 
                    alt='pokemon image' 
                    width={50} 
                    height={50} 
                    className="object-contain"
                />
            </div>
            {/* Añadir más información si es necesario */}
        </Link>
    );
}
