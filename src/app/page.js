import Image from "next/image";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import {Catalogue} from "./components/Catalogue";

export default function Home() {
  return <>  
      <Header/>
      {/* <SearchForm/> */}
      <Catalogue />
    </>
  
}
