// check if equal in value and type
// if a or b is not a letter then return -1
// if both a and b are the equal in type whic is CAP return 1
// if both a and be are the equal in letter but not CAP return 0



function sameCase(a, b){
  if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
     return -1
   }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
       return 1
   }else{
     return 0
   }
 }