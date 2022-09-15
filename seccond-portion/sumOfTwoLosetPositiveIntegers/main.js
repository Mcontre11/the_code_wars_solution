
function sumTwoSmallestNumbers(numbers) { 

  let nuevo = numbers.sort((a, b) => {
   return a - b; });

 let remove = nuevo.splice(0,2)

const sum = remove.reduce((accumulator, value) => {
 return accumulator + value;
}, 0);

 return sum 

}