function smash (words) {
  if(words.length === 0) return ''
 if(words.length === 1) return words [0]
 let sentence = ' '
 words.forEach (function(word){
   sentence += `${word} `
  })
 return sentence.trim()
}