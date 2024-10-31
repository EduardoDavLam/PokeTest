import Image from 'next/image'

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
// ${i}.svg
export async function PokemonCard({pokeData}){
    return (<div>
        <h2>{pokeData.poke.name}</h2>
        <Image src={baseURL+`${pokeData.i+1}.svg`} alt='pokemon image' width='50' height='50'/>
    </div >)
}