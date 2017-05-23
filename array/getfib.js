function getfib(n){
  if(n == 0) {
    return 0;
  }
  if(n == 1) {
    return 1;
  }
  if(n > 1) {
    return getfib(n - 1) + getfib(n - 2);
  }
}

function fibo(len) {
  let fibo = [];
  for(let i = 0; i < len; i++) {
    fibo.push(getfib(i));
  }
  return fibo;
}
