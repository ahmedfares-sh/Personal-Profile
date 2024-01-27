function findMissingNumber(numbers = []) {
  numbers.sort();
  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers[i]) {
      continue;
    } else {
      return i;
    }
  }
  return numbers.length;
}
