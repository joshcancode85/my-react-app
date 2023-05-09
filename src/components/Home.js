import React, {useEffect, useState} from 'react';
const Home = () => {
    const [pokemon, setPokemon] = useState({});
    useEffect(() =>{
        const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                setPokemon(json);
            } catch(error){
                console.log("error", error)
            }
        };

        fetchData();
    }, []);

    

    return ( 
    <div>
        <h1>Home Component Works!</h1>
        <div className='pokemon-card'>
            <div className='title'>
                {pokemon.name}
            </div>
        </div>
    </div> );
}
 
export default Home;