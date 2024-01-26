function ManagingCorral(i, cooldown, setCooldown) {
    let value = 0;
    let cooldownCopy = structuredClone(cooldown);
    if (cooldownCopy[i] === 0) {
        cooldownCopy[i]--;
        setCooldown(cooldownCopy);
    }else{
        value++;
        cooldownCopy[i] = 1;
        setCooldown(cooldownCopy)
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