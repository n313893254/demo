function factorialize(num) {
  let result = 1;
  if(num < 0) {
    return -1;
  }
  if(num == 0 || num == 1) {
    return 1;
  }
  if(num > 1) {
    return num*factorialize(num - 1);
  }
}
