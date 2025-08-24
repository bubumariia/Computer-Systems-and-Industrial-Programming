var singleNumber = function(nums) {
  const hashMap = new Map()
  for(let i=0; i<nums.length; i++){
    if(hashMap.has(nums[i])){
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
    }else{
      hashMap.set(nums[i], 1)

    }
  }
  
  for(let j = 0; j < nums.length; j++){
    if(hashMap.get(nums[j]) == 1){
      return nums[j]
    }
  }
    return hashMap
};