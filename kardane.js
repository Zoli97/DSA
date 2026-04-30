//Q4 - given an int [] nums, find the subarray with the largest sum, return the sum.

//input [-2,1,-3,4,-1,2,1,-5,4] --> o: 6 [4,-1,2,1] -> I WANT THE  SUBARRAY WHICH HAS THE MAXIMUM SUM

//every iteration of a for loop is an 1 op, nums length which is n

//Time complexity O(n^2), Space complexity O(1)
function maxSubArray(nums) {
  //take all the subarray and calculate the sum for all of them
  let maxSum = nums[0];
  let startIdx = 0;
  let endIdx = 0;

  //for loop i, -2 to 4
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    //start the current index i =0, then i=1, the first sub array -2, second -2, 1 sum -> and so on, calculate the sub array sum, then for 1
    for (let j = i; j < nums.length; j++) {
      //n/n-1/
      currentSum += nums[j]; //0 =0 +(-2) then next iteration -2+1

      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIdx = i;
        endIdx = j; // is the current index
      }
    }
  }

  return { sum: maxSum, subArray: nums.slice(startIdx, endIdx + 1) };
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
