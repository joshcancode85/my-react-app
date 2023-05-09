import React, { useEffect, useState } from 'react';
const Home = () => {
    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setPokemon(json);
            } catch (error) {
                console.log("error", error)
            }
        };

        fetchData();
    }, []);



    return (
        <div>
            <h1>Home Component Works!</h1>
            <div className='pokemon-card'>
                <div className='card-content'>
                <div className='pokemon-type'>{pokemon.types[0].type.name} Pokemon</div>

                    <div className='title'>
                        <div>{pokemon.name}</div>
                        <div>{pokemon.stats[0].base_stat} HP</div>
                    </div>
                    <div className='portrait-container'>
                        <img className='portrait' src={pokemon['sprites']['other']['official-artwork']['front_default']} />
                    </div>
                    <div className='pokemon-move'>
                        {pokemon.moves[0].move.name}
                    </div>
                    <div className='pokemon-move'>
                        {pokemon.moves[1].move.name}
                    </div>
                </div>

            </div>
        </div>);
}

export default Home;