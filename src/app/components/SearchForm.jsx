"use client"

import { useState } from "react"
import { useRouter } from "next/router";

export function SearchForm(){
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        router.push(searchValue);
    }
    function handleChange(e){
        e.preventDefault();
        setSearchValue(e.target.value);
    }
    
    return <>
        <form onSubmit={handleSubmit}>
            <label for='searchStr'>Search name: </label>
            <input 
                className="text-black"
                type="text" 
                id="searchStr" 
                name="searchStr" 
                value={searchValue}
                onChange={handleChange}
                />
                

            
        </form>
    </>
}