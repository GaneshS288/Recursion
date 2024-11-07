//make a function that takes a number and returns an array of fibonacci series up to that number
function fibs(n) {
  let arr = [0, 1];
  while (n > 2) {
    let nextFibNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextFibNum);
    n--;
  }

  return arr;
}

/*function fibsRec(n) {
    console.log("This was printed recursively");


  if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else if (n > 2) {
    let fibArray = fibsRec(n - 1);
    let currentFib = fibArray[n - 2] + fibsRec(n - 2)[n - 3];
    fibArray[n - 1] = currentFib;
    return fibArray;
  }
}*/

function fibsRec(n) {
    console.log("This was printed recursively");


  if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  let result = fibsRec(n-1);
  let currentFib = result[n-3] + result[n-2];
  result.push(currentFib);
  return result;
}

console.log(fibsRec(8))
console.log(fibsRec(20))

