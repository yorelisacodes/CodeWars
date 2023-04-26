// Flatten and sort an array


// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

function flattenAndSort(array) {
  let entireArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      entireArray.push(array[i][j]);
    }
  }
  return entireArray.sort((a, b) => a - b);
}

//return one full array with all the numbers in one
//use .sort 
//