function binarySearch(arr, low, high, key) {
  if(low > high) {
    return -1;
  }
  let mid = parseInt((low + high) / 2);
  if(key == arr[mid]) {
    return mid;
  } else if (key > arr[mid]) {
    return binarySearch(arr, mid + 1, high, key);
  } else if (key < arr[mid]) {
    return binarySearch(arr, low, mid - 1, key);
  }
}
