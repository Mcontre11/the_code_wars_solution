function abbrevName(name){
  let firstLast = name.split(' ')
  
let firstInitial = (firstLast[0].charAt(0)+"."+firstLast[1].charAt(0)).toUpperCase()
 
  return firstInitial
   
}