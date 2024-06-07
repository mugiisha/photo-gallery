const arrayMap = (arr,target) => {
    let sum = 0;
    let start = 0

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];

      // If the sum becomes greater than the target, subtract elements from the start
      while (sum > target && start < i) {
        sum -= arr[start];
        start++;
      }

      // If sum equals the target, a subarray is found
      if (sum === target) {
        return true;
      }
    }

    // If no subarray is found, return false
    return false;
  }

  // Example usage:
  const arr = [1, 4, 20, 3, 10, 5];
  const target = 33;
  console.log("sub array sum 1 \n =>",arrayMap(arr, target));
  console.log("sub array sum 2 \n =>",arrayMap([1,2,3], 10));