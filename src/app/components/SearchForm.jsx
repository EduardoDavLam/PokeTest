"use client"; 
// Asegúrate de que esta línea esté al principio del archivo

export function SearchForm({ searchValue, setSearchValue }) {
    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='searchStr'>Filtrar: </label>
                <input 
                    className="text-black bg-white rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    type="text" 
                    id="searchStr" 
                    name="searchStr" 
                    value={searchValue}
                    onChange={handleChange}
                />
            </form>
        </>
    );
}
