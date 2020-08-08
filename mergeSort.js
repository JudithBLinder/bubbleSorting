const split = (arr) => {
  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return [left, right];
}

const merge = (left, right) => {
  console.log('merge input', left, right);
  let li = 0;
  let ri = 0;
  let returnedArr = [];

  while (li < left.length && ri < right.length) {
    let leftEl = left[li];
    let rightEl = right[ri];

    if (leftEl <= rightEl) {
      returnedArr.push(leftEl);
      li++;
    } else {
      returnedArr.push(rightEl);
      ri++;
    }
  }
  console.log(returnedArr);
  return returnedArr;
}



const mergeSort = (arr) => {

  if (arr.length <= 1) {
    return arr;
  }
  let splitedArr = split(arr);
  console.log('splitedArr', splitedArr);
  return merge(mergeSort(splitedArr[0]), mergeSort(splitedArr[1]));
}

console.log('result', mergeSort([4, 2, 9, 7, 0, 5, 2, 5, 7, 8, 9, 6, 3, 2, 11]));