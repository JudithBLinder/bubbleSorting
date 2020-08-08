export const bubbleSort = (arr) => {
  if (arr.length === 0) {
    return arr;
  }

  let sorted = false;
  let n = 0;

  while (!sorted) {
    for (let i = 0; i < arr.length - n; i++) {
      if (arr[i] >= arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    n++;
    if (n === arr.length - 1) {
      sorted = true;
    }
  }
  return arr;
}