function squareSum(numbers){
  let sum = 0
  numbers.forEach(number => sum += number ** 2)
  return sum
}