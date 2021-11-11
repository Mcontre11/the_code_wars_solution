//paramater is the args is this always a number? 
//will the the starting array always be four numbers?
//will the return be inside of an array? 

//result return the smallest number in an array and it can be negative
//example [34, 15, 88, 2] solution is  return 2
//pseudo 
// use a function that will extract only the smallest integer out of the array
// Math.min finds the smallest number out of the array
// the array is represented in ...args



class SmallestIntegerFinder {
  findSmallestInt(args) {
return Math.min (...args)
  }
}