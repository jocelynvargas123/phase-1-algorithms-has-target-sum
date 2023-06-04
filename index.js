

function hasTargetSum(array, target) {
  
    for(let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          return true;
        } else {
          continue;
        }
      }
  
  }
  return false;
}


  // Create a function called hasTargetSum (function)
  //Recieves two arguements 1 array and one target (input)
  // return true or false (output)
  // true if any pair of numbers in array = target number (output)
  // false if none add up to target number (output)
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. Enter an array of numbers and a target number
  2. Go through array adding til all sums of two pair of numbers are collected
  3. Go through new array of sum of numbers and compare to target number
  4. If a number of the new array matches target return true
  5. Else return False
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
