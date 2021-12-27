function disemvowel(str) {
  let newString = ""
  const vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
  
  str.split("").forEach((ltr) => {
      if (vowels.includes(ltr)) return
      else newString += ltr
    })
  return newString
}
