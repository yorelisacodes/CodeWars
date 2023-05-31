
// Sum a list but ignore any duplicates


// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.



function sumNoDuplicates(arr) {
  let uniqueArr = [];
  let sum = 0;
  arr.forEach(num => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)){
      uniqueArr.push(num);
      sum += num;
    }
  })
  return sum
  }