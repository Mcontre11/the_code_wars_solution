function countSheeps(arrayOfSheep) {
  count = 0;
  
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count += 1;
    }
  }
  return count;
}