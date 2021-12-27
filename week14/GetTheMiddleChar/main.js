function getMiddle(s){
  let middle = ""
  if(s.length % 2 === 0) middle = s.substring(s.length/2 - 1, s.length/2 + 1)
  else middle = s.substring(s.length/2, s.length/2 + 1)
  return middle
   }