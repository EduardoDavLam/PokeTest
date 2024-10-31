import { PokemonCard } from "./PokemonCard";

export async function Catalogue(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await res.json();

    
    return <>
    <select id="order" className="text-black">
        <option value='alphabetic' id="alpha">Alphabetic</option>
        <option value='reverse' id='reverse'>Reverse alphabetic</option>
    </select>
    <div className="grid grid-cols-4 gap items-center" >
        {
            data? <>{data.results.map((poke,i)=>{
                return <PokemonCard key={i} pokeData={{poke, i}}/>
            })}</>: <p>NO</p>
        }
    </div>
        </>
}