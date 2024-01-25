import Corral from './Corral';

function Ranch(props) {
  let {
    corralsList,
    ressources
  } = props

  const corrals = [];
  for (let i = 0; i < corralsList.length; i++) {
    corrals.push(
      <Corral key={i}
        state={corralsList[i]}
      />
    )
  }

  return(
    <>
      <p className='ressources-count'>Nbr ressources: {ressources}</p>
      <div className='ranch'>
        {corrals}
      </div>
    </>
  );
}

export default Ranch;
