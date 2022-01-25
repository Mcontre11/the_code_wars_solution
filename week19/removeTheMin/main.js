function removeSmallest(numbers) {
  let smallest = numbers[0];
  let finalArray = []
 for (let i=0; i<numbers.length;i++){
   console.log(numbers[i])
   if(numbers[i]< smallest){
     smallest = numbers[i]
   } 
   finalArray.push(numbers[i])
 }
 let numbersIndex = numbers.findIndex(n => n === smallest);
console.log(finalArray)
  console.log(numbersIndex)
  finalArray.splice(numbersIndex,1)
  return finalArray
  
}