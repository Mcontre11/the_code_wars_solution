// Sum Numbers
function sum (numbers) {
  if (numbers.length < 1) return 0; 
 return numbers.pop() + sum(numbers);

}
console.log(sum([1, 5.2, 4, 0, -1]));