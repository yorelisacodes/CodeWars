// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


let isAnagram = function(test, original) {

	const testS =  test.split('').sort((a,b)=> a.localeCompare(b)).join('').toLowerCase()

	const originalS = original.split('').sort((a,b)=> a.localeCompare(b)).join('').toLowerCase()

	return (testS == originalS) ? true : false
};