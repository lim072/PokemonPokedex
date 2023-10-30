import './App.css';
import Pokedex from './components/Pokedex';


function App() {
  return ( 
    <main className="poke">
      <div className="pokeHeader">
        <ul>
          <li>
            <div></div>
            <div></div>
            <div></div>
          </li>
          <li>
          <div></div>
          </li>
          <li>
          <div></div>
          </li>
          <li>
          <div></div>
          </li>
        </ul>
      </div>
      <div className="pokeHeader2">
      </div>
      <div className="pokeBody">
        <div className='frame'>
          <div className='screen'>
            <div className='screenDefault'>
              <div className='top'>
                <span>Pokemon Pokédex</span>
              </div>
            </div>

                <Pokedex /> 
     
          </div>
        </div>
        
        <div className='search'>
          <input type='text' placeholder='검색어 입력'></input>
          <button>
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        
        <div className='arrow'>
          <div className='leftArrow'>
            <div className='inArrow'></div>
          </div>
          <div className='home'>
            <span>HOME</span>
          </div>
          <div className='rightArrow'>
            <div className='inArrow'></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
