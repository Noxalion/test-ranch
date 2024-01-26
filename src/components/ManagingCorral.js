function ManagingCorral(i, cooldown, setCooldown) {
    let value = 0;
    let cooldownCopy = structuredClone(cooldown);
    if (cooldownCopy[i] === 0) {
        value++;
        cooldownCopy[i] = 1;
        setCooldown(cooldownCopy)
    }else{
        cooldownCopy[i]--;
        setCooldown(cooldownCopy);
    }

//   runProduction();

//   function runProduction(){
//     setInterval(gainRessource, 1000);
//   }
  
//   function gainRessource(){
//     value = 1;
//     runProduction();
//   }
    
    return(value);
}
   
export default ManagingCorral;