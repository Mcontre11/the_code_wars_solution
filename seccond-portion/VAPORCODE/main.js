
function vaporcode(string) {
  let upper = string.split('')
    let cleanArray = upper.filter(function (x) {
   if (x == ' '){
     return false
   }
      else {
        return true 
        }
    });
  
  let newUpper = cleanArray.map(i => i.toUpperCase());
  
  
    return newUpper.join('  ')
    }