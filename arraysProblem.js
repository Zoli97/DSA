//Q1 - Scond largest number
//given an [] of size N, print second largest
//distinct elem -> 35 twice so sec last elem will not be the secondlargest num
// i: [12,35,1,10,34,1] -> o: 34
//i:[10, 5] -> o: 5

// i =0; => 12 -> 12 > largest-> largest = 12;
//secondlargest = NUMBER.NEGATIVE_INFINITY;
//i= 1 -> i =35 -> 35 > 12 ; largest = 35;
//secondlargest = largest = 12;
//i = 1 -> 1 -> 1 > 35 not; next;
//i = 10; 10 same as 1
//i = 34; 34 > largest 35 false;  34 > secondlargest(12) true; secondlargest = 34
//not gonna go inside of any these iteration

//Linear time complexity O(n)
function optimize(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  //for loop throught the []
  for (let i = 0; i < arr.length; i++) {
    //current elem > largest
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];

      //ensure the secondlargest always hold the second largest distinct
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(optimize([12, 35, 1, 10, 34, 1]));

//Quest 2 - Rotate [] by k (shifiting the elem to the right)
//given an integer [] nums, rotate the [] to the right by k steps, k != negative
//i: [1,2,3,4,5,6,7], k=3 --> o: [7,1,2,3,4,5,6] -> [6,7,1,2,3,4,5]=> [5,6,7,1,2,3,4]
//Time complexity O(n)
function rotateArray(nums, k) {
  //size of the []
  let size = nums.length;

  // k is not more than length of the[]
  if (k > size) {
    k = k % size; // 10%8 -> 2
  }
  //give me the position first and remove the many elems after it 8-3=5 start from 5 idx [5,6,7], calculează indexul de unde trebuie să înceapă tăierea.
  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated); //add to the begging of the []

  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

//Quest 3  - Remove Duplicates from sorted []
//given an int [] nums sorted in increasing order, remove, then return the number of unique elems in nums.
//for loop one by one if 0 is === 0(duplicate) remove it from the [] splice(i+1, 1), every time i remove it i gonna back to []

function removeDuplicate(nums) {
  //O(n) time complexity, space complexity O(1)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); //O(1)
      i--;
    }
  }
  return nums.length;
}

console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
