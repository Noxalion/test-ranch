import './App.css';
import Ranch from './components/Ranch';
import ManagingCorral from './components/ManagingCorral';
import { useState } from 'react';

function Game() {
  const [ressources, setRessources] = useState(0);
  const [corralsList, setCorralsList] = useState([
    "beast", "empty", "empty", "empty", "empty"
  ]);
  const [cooldown, setCooldown] = useState([
    1, 0, 0, 0, 0
  ]);

  setInterval(checkGainedRessources,5000);

  function checkGainedRessources(){
    let newRessources = 0;
    for (let i = 0; i < corralsList.length; i++) {
      if (corralsList[i] !== "empty") {
        newRessources += ManagingCorral(i, cooldown, setCooldown);
      }
    }
    setRessources(ressources + newRessources);
    setInterval(checkGainedRessources,1000);
  }

  return (
    <div className="game">
      <Ranch 
        corralsList={corralsList}
        ressources={ressources}
      />
    </div>
  );
}

export default Game;
