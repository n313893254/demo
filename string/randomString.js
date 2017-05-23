function randomString(n) {
  var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var temp = '';
  for(let i=0; i<n; i++) {
    temp += str.charAt(Math.random()*str.length);
  }
  return temp;
}
