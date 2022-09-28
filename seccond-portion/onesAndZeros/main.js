const binaryArrayToNumber = arr => {
  console.log(arr)
   let joined = arr.join('');
    console.log(joined)
    let binaryNumber = parseInt(joined,2);
    console.log(binaryNumber)
    return binaryNumber
  };