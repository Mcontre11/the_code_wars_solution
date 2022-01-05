function isIsogram(str){
  console.log(str)
  for (let  i = 0; i <str.length; i++){
    let char1 = str.charAt(i).toLowerCase();
    for(let j = 0; j < str.length; j++){
      let char2 = str.charAt(j).toLowerCase();
      if (char1 === char2 && i !== j){
          return false 
      }
    
    }
  }
  return true 
}