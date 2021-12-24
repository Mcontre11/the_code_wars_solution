function trouble(x, t){
  console.log(t, 't')
  for(let i = 0; i < x.length; i++){
    if (x[i] + x[i+1] === t){
      x.splice(i+1, 1)
      i--
    }
  }
  console.log(x, 'x')
  return x
}