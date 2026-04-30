//DSA recursion

//Factorial of n => n =5, => 5*4*3*2*1

function factorial(n) {
  //return the factorial of the fun
  //as soon as reach 0 i will return 1
  if (n === 0) {
    return 1;
  } else return n * factorial(n - 1); //5 * 4 * 3..
}

console.log(factorial(5));

//Q 2: create an [] with range of numbers
//i: start = 1, end =5
//bottom up, i went to the very end of [] and return me empty [] and then started adding elems in reverse.
//r(1,5) => [1, 2, 3, 4, 5]
//r(1,4) => [1, 2, 3, 4]
//r(1,3) => [1,2,3]
//r(1,2) => [1,2]
//r(1,1) => [1] array num
//r(1,0) => satisy the if check(base case)  0 < 1 da =>[]

function rangeOfNums(start, end) {
  //end < start
  //so with each iteration with each recursive call
  if (end < start) {
    return [];
  } else {
    const nums = rangeOfNums(start, end - 1); //this will be []
    nums.push(end);
    return nums;
  }
}
console.log(rangeOfNums(0, 5));

//Q3. Fibonnaci number
//recursion where multiple recursive calls are beind made at once
//fib series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n - 2), n> 1
//i: n = 3, ==> o: 2
