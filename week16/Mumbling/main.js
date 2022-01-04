function accum(s) {
  let newAccum = [];
  for (let i = 0; i <= s.length - 1; i++) {
    newAccum.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
  }
  
  return newAccum.join('-')
}