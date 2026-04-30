//5 five funs, each fun represent a single person
//Zoli is calling Raul but the response of Raul is dependent on someone else Paul
function Zoli() {
  return Raul();
}

function Raul() {
  return Paul();
}

function Paul() {
  return Mona();
}

function Mona() {
  return Ioana();
}

//base case, so Ioana response with true so all of these other funs will responde with true.
function Ioana() {
  return true;
}

console.log(Zoli());

//stuck in endless loop, cand ajunge la a 5 persoana ioana break it si va returna true.
function recursiveFun(person) {
  //add base case
  if (person === 5) return true;

  console.log(person);
  return recursiveFun(person + 1); //call itself, all other prev fun also return true
}

console.log("outcome:" + recursiveFun(1));

///**Loop vs recursion */

//multiply all of its elements
function multiply(arr) {
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }

  return prod;
}

console.log(multiply([1, 2, 3, 4]));

//divide the problem into small small parts and then multiply them all together
//4*3*2*1, now i have access to 4, access 3 call multiply fun
function multiply_recursion(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  } else {
    //last elem
    //4*3*2*1 multiply([1,2,3]) => 3 * multiply ([1,2]) => 2* [1] * 1, return each and every value for the recursion and * together
    return (
      arr[arr.length - 1] * multiply_recursion(arr.slice(0, arr.length - 1)) // 4*[1,2,3], 3* [1,2] 0 to 3 , [1, 2, 3]
    );
  }
}

console.log(multiply_recursion([1, 2, 3, 4]));
