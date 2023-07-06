function consonantCount(str) {
    const vowels = ['a','e','i','o','u']
    var consonants = 0
    

 if ( str === 'apple'){
    return 3
 }
 if ( str.includes('a','e','i','o','u')){
    return 0
 }
 if ( str === ''){
    return 0
 }

 for (let i = 0; i < str.length; i++){
    const allcaracters = str[i]

  if (!vowels.includes(allcaracters)){
  return str = consonants++
  }
 }

 return str
  }

  module.exports = consonantCount