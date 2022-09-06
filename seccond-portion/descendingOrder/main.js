function descendingOrder(n){
  let descend = String(n).split('')
    
    descend =  descend.sort()
   descend = descend.reverse()
  descend = descend.join('')
    return parseInt(descend)
  }