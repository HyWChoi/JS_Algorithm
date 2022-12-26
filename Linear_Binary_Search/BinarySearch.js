function binarySearch(arr, value) {
  let startPoint = 0;
  let endPoint = arr.length - 1;
  let middlePoint = Math.floor((startPoint + endPoint) / 2);

  while (arr[middlePoint] !== value && startPoint <= endPoint) {
    if (arr[middlePoint] < value) {
      startPoint = middlePoint + 1;
    } else {
      endPoint = middlePoint - 1;
    }
    middlePoint = Math.floor((startPoint + endPoint) / 2);
  }
  return arr[middlePoint] === value ? arr[middlePoint] : -1;
}

export default binarySearch;
