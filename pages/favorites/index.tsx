import { useState,useEffect } from 'react';

import { Layout } from '../../components/layouts/Layout';
import { NoFavorites } from '../../components/ui/NoFavorites';

import { localFavorites } from '../../utils';
import { FavoritePokemon } from '../../components/pokemon';




const FavoritePage = () => {


  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);


  useEffect(() => {
    setFavoritePokemon( localFavorites.pokemons() )
    
  }, [])


  return (
    <Layout title='Favorite Pokemon'>
        { 
            favoritePokemon.length === 0 
          ? (<NoFavorites />)
          : (<FavoritePokemon pokemons={favoritePokemon} />)
        }
    </Layout>
  )
}


export default  FavoritePage;