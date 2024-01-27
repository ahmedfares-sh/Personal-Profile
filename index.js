function findMissingNumber(nums = []) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) {
      continue;
    } else {
      return i;
    }
  }
  return nums.length;
}
