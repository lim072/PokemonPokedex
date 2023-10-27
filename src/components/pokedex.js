import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPokemonData = [];
      for (let i = 1; i <= 151; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
        const koreanName = speciesResponse.data.names.find(name => name.language.name === 'ko');
        allPokemonData.push({ ...response.data, korean_name: koreanName.name});
      }
      setPokemonData(allPokemonData);
    };

    fetchData();
  }, []);

  const renderPokemonList = () => {
    return pokemonData.map((pokemon) => (
      <div className='sub' key={pokemon.id}>
        <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
        <p>No.{pokemon.id}</p>
        <p>{pokemon.korean_name}</p>
    
      </div>
    ));
  };

  return (
    <div>
      {renderPokemonList()}
    </div>
  );
};

export default Pokedex;