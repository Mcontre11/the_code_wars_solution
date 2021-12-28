var splitInParts = function(s, partLength){
  let answer = []
  for(let i= 0; i<s.length; i+=partLength){
    answer.push(s.slice(i,i+partLength))
  }
  return answer.join(" ")
}