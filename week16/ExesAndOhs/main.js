function XO(str) {
  let xCount = 0
  let oCount = 0
  for(let i=0; i < str.length; i++){
    if(str[i].toLowerCase() === 'x'){
      xCount += 1
    }
    if(str[i].toLowerCase() === 'o'){
      oCount += 1
    }
  }
 if(oCount === xCount) return true
 else return false
}