//Kardane's Algo optimize

//Time complexity O(n) and space complexity O(1)
function maxSumArray(nums) {
  let sum = 0;
  let maxSum = nums[0];

  //O(n)
  for (let i = 0; i < nums.length; i++) {
    //add current element of nums to the sum
    sum += nums[i];

    //check if this is more than maxsum, then max = sum;
    if (sum > maxSum) {
      maxSum = sum;
    }
    //if the sum < 0 then then reject the subarray and sum =0 move to the next subarray
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}

console.log(maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
