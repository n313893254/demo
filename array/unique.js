function unique(arr){
  let obj = {};
  let result = [];
  for(let i in arr) {
    if(!obj[arr[i]]) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
