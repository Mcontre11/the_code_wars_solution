function countSalutes(hallway) {
  let goingRight = 0
  let salutes = 0
  
  for(let i = 0; i < hallway.length; i++) {
    if(hallway[i] === ">") {
      goingRight++
    } else if(hallway[i] === "<") {
      salutes += goingRight * 2
    }
  }
  
  return salutes
}