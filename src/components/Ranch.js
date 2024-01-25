import Corral from './Corral';
import { useState } from 'react';

function Ranch() {
  const [ressources, setRessources] = useState(0);

  return(
    <>
      <p className='ressources-count'>Nbr ressources: {ressources}</p>
      <div className='ranch'>
        <Corral 
          ressources={ressources}
          setRessources={setRessources}
        />
        <Corral 
          ressources={ressources}
          setRessources={setRessources}
        />
      </div>
    </>
  );
}

export default Ranch;
