var missingNumber = function(nums) {
    let sorted = nums.sort(function(a, b){return a-b})
    for(let i =0; i <= nums.length; i++){
      if(sorted[i] !== i){
        return i
      }
    }
};