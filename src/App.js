import './App.css';
import Ranch from './components/Ranch';
import ManagingCorral from './components/ManagingCorral';
import { useState } from 'react';

function Game() {
  const [ressources, setRessources] = useState(0);
  const [corralsList, setCorralsList] = useState([
    "beast", "empty", "empty", "empty", "empty"
  ]);

  let ressourcesByCorral = [];
  for (let i = 0; i < corralsList.length; i++) {
    if (corralsList[i] !== "empty") {
      ressourcesByCorral[i] = ManagingCorral(i, corralsList[i]);
    }else{
      ressourcesByCorral[i] = 0;
    }
  }

  //setInterval(checkGainedRessources,1000);

  function checkGainedRessources(){
    let newRessources = 0;
    for (let i = 0; i < corralsList.length; i++) {
      if (corralsList[i] !== "empty") {
        newRessources = ressourcesByCorral[i];
        ressourcesByCorral[i] = 0;
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
