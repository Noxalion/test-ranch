function Corral(props) {
  let {
    ressources,
    setRessources
  } = props

//   setTimeout(gainRessource, 1000);

//   function gainRessource(){
//     let newNumber = ressources + 1;
//     setRessources(newNumber);
//     console.log(newNumber);
//   }
  

  return(
    <div className='corral-zone'>
      <div className='corral-facility'></div>
      <div className='corral-feeder'></div>
      <div className='corral-collector'></div>
    </div>
  );
}
 
export default Corral;
 