function incrementer(nums) { 
  return nums.map((n,i)=> (i + n + 1)%10)
}