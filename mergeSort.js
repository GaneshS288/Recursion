//Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(arr) {
  let sortedArr = [];

  if (arr.length === 1) return arr;
  else {
    let arrMidpoint = Math.floor(arr.length / 2);
    let leftArray = mergeSort(arr.slice(0, arrMidpoint));
    let rightArray = mergeSort(arr.slice(arrMidpoint));

    while (true) {
      if (leftArray[0] === undefined || rightArray[0] === undefined) {
        sortedArr = sortedArr.concat(leftArray);
        sortedArr = sortedArr.concat(rightArray);
        break;
      }
      if (leftArray[0] < rightArray[0]) sortedArr.push(leftArray.shift());
      else if (leftArray[0] > rightArray[0]) sortedArr.push(rightArray.shift());
      else if (leftArray[0] === rightArray[0])
        sortedArr.push(leftArray.shift());
    }
  }

  return sortedArr;
}

let unsortedArr = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(unsortedArr));
console.log(mergeSort([105, 79, 100, 110]))
console.log(mergeSort([23,1000,25,23,10]))