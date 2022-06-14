import { pokeAPi } from "../api";
import { Pokemon } from "../Interfaces";


export const getPokemonInfo = async ( nameOrId: string ) => {
 
   const { data } = await pokeAPi.get<Pokemon>(`/pokemon/${nameOrId}`);
   
   return  {
     id: data.id,
     name: data.name,
     sprites: data.sprites
    }
   
   
} 