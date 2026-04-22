//start with 2 then take all possible combinations, next, next
//[3,2,4] => 3+2, 3+4, 2+4

const twoSum = function (nums, target) {
  //first loop going through first number, primary number (2,7,11,15)
  for (let i = 0; i < nums.length; i++) {
    //second loop will loop after that primary number 2 selected, other loop will run from 7 to 11
    for (let j = i + 1; j < nums.length; j++) {
      //primary num + 1

      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

//{"2": reduce it 9-2 = 7 return [0, 1]} {"2": 0 26-2= 24 0 i} 11:2 (position) 26-11 = 15 right, 15: 26-15 = 11 [2,3] => [obj[11],3]=[2,3] ->15 pos=3
const twoSum2 = function (nums, target) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    //9- 2 get the pos
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum2([2, 7, 11, 15], 26));
