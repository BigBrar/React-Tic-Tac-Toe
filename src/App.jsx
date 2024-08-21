import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import { useState } from 'react'; 
import './index.css'
import Log from './components/Log.jsx';

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length >0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setactivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, columIndex){ 
    // setactivePlayer((curActivePlayer)=>(curActivePlayer ==='X' ? 'O' :"X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square:{row:rowIndex, col:columIndex}, player:currentPlayer},...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name='Player 1' symbol="X" isActive={activePlayer ==='X'}/>
          <Player name='Player 2' symbol="O" isActive={activePlayer ==='O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
        <Log turns={gameTurns}/>
    </main>
  )
}

export default App
