function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  if (lowRegStr.length === 0) {
    return true;
  }
  if(lowRegStr[0] != lowRegStr[lowRegStr.length-1]) {
    return false;
  }
  return palindrome(lowRegStr.slice(1, lowRegStr.length-1));
}
