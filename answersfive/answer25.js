//I have to return two decimal points and the dollar sign 
  
// the method for the decimal places is .toFixed()

function formatMoney(amount){
  return('$' + amount.toFixed(2)) //it keeps rounding to 40
  // in order to get the two decimal points I had to add the 2 in the toFixed method argument

}