import { Header } from "./components/Header";
import { CatalogueContent } from "./components/CatalogueContent";

export default async function Home() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
    const data = await res.json();

    return (
        <>  
            <Header />
            <CatalogueContent pokemons={data.results} /> {/* Pasamos los datos aquí */}
        </>
    );
}
