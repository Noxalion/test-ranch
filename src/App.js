import './App.css';
import Ranch from './components/Ranch';
import ManagingCorral from './components/ManagingCorral';
import { useState } from 'react';

function Game() {
  const [ressources, setRessources] = useState(0);
  const [corralsList, setCorralsList] = useState([
    "beast", "empty", "empty", "empty", "empty"
  ]);
  let cooldown = [
    1, 0, 0, 0, 0
  ];
  
  //setInterval(checkGainedRessources,2000);

  function checkGainedRessources(){
    let newRessources = 0;
    let cooldownCopy = structuredClone(cooldown);
    for (let i = 0; i < corralsList.length; i++) {
      if (corralsList[i] !== "empty") {
        if (cooldownCopy[i] === 0) {
            newRessources++;
            cooldownCopy[i] = 1;
        }else{
            cooldownCopy[i]--;
        }
        //newRessources += ManagingCorral(i, cooldown, setCooldown);
      }
    }
    cooldown = cooldownCopy;
    newRessources = ressources + newRessources;
    setRessources(newRessources);
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
