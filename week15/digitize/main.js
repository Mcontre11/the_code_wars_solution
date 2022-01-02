function digitize(n) {
  let numbers = []
  n.toString().split("").forEach((number)=>{
    numbers.push(parseInt(number))
  })
  return numbers
}