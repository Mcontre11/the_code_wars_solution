function longest(s1, s2) {

  let together = s1.concat(s2);
//   console.log(result)
let myArray = together.split("");
//   console.log(myArray)
  
        let single = myArray.filter((item,
            index) => myArray.indexOf(item) === index);
// console.log(nuevo)

// console.log(nuevo.join(''));
  
  let result = single.sort().join('')
  console.log(result)
  return result 
}
