function findShort(s){

  let shortest = s.split(' ');
//   console.log(shortest)
  let shortestWord = shortest[0].length
  shortest.forEach(word => {
    if (word.length < shortestWord){
      shortestWord = word.length
    }
 
  } );
   return shortestWord
}